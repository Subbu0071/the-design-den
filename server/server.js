import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";
import rateLimit from "express-rate-limit";
import mongoose from "mongoose";
import dns from "node:dns";

import contactRouter from "./routes/contact.js";

dotenv.config();

// Temporary DNS workaround.
// Revisit this after confirming the normal DNS resolver works.
dns.setServers(["8.8.8.8", "1.1.1.1"]);

const app = express();
const PORT = Number(process.env.PORT) || 5000;
const CLIENT_URL = process.env.CLIENT_URL || "http://localhost:5173";

app.disable("x-powered-by");

app.use(helmet());

app.use(
  cors({
    origin: CLIENT_URL,
  }),
);

app.use(express.json({ limit: "10kb" }));

app.use(
  rateLimit({
    windowMs: 15 * 60 * 1000,
    limit: 100,
    standardHeaders: "draft-8",
    legacyHeaders: false,
  }),
);

// Health check
app.get("/api/health", (_req, res) => {
  const databaseConnected = mongoose.connection.readyState === 1;

  res.status(databaseConnected ? 200 : 503).json({
    success: databaseConnected,
    message: databaseConnected
      ? "DESIGN DEN API and database are connected"
      : "DESIGN DEN API is running, but the database is not connected",
    database: databaseConnected ? "connected" : "disconnected",
  });
});
//  Register API routes
const contactSubmissionLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 5,
  standardHeaders: "draft-8",
  legacyHeaders: false,
  message: {
    success: false,
    message: "Too many enquiry attempts. Please try again in 15 minutes.",
  },
});

app.use("/api/contact", contactSubmissionLimiter, contactRouter);
//  Handle unknown API routes
app.use("/api", (_req, res) => {
  res.status(404).json({
    success: false,
    message: "API endpoint not found",
  });
});

// Central error handler for errors passed from routes
app.use((err, _req, res, _next) => {
  console.error("Request error:", err.message);

  res.status(err.status || 500).json({
    success: false,
    message:
      err.status && err.status < 500
        ? err.message
        : "An unexpected server error occurred",
  });
});

let server;

async function startServer() {
  if (!process.env.MONGODB_URI) {
    console.error("MONGODB_URI is missing from server/.env");
    process.exitCode = 1;
    return;
  }

  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      serverSelectionTimeoutMS: 10000,
    });

    console.log("MongoDB Atlas connected successfully");

    server = app.listen(PORT, () => {
      console.log(`DESIGN DEN API running at http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("MongoDB connection failed.");
    console.error("Error name:", error.name);
    console.error("Error message:", error.message);

    process.exitCode = 1;
  }
}

async function shutdown(signal) {
  console.log(`${signal} received. Shutting down...`);

  if (server) {
    await new Promise((resolve) => server.close(resolve));
  }

  if (mongoose.connection.readyState !== 0) {
    await mongoose.disconnect();
  }

  process.exit(0);
}

process.once("SIGINT", () => shutdown("SIGINT"));
process.once("SIGTERM", () => shutdown("SIGTERM"));

startServer();
