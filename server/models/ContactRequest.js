import mongoose from "mongoose";

const contactRequestSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      maxlength: 100,
    },
    phone: {
      type: String,
      required: true,
      trim: true,
      maxlength: 20,
    },
    city: {
      type: String,
      required: true,
      trim: true,
      maxlength: 150,
    },
    selectedServices: {
      type: [String],
      default: [],
    },
    selectedOptions: {
      type: mongoose.Schema.Types.Mixed,
      default: {},
    },
    projectDetails: {
      type: String,
      default: "",
      maxlength: 2000,
    },
    optionalDetails: {
      type: mongoose.Schema.Types.Mixed,
      default: {},
    },
    consent: {
      type: Boolean,
      required: true,
      default: false,
    },
    status: {
      type: String,
      enum: ["new", "contacted", "closed"],
      default: "new",
    },
  },
  {
    timestamps: true,
    strict: true,
  },
);

export default mongoose.model("ContactRequest", contactRequestSchema);
