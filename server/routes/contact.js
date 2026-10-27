import { Router } from "express";
import ContactRequest from "../models/ContactRequest.js";
import { serviceCatalogue, allowedServiceIds } from "../data/services.js";

const router = Router();

/* -------------------------------------------------------------------------- */
/* Allowed values for optional enquiry details                                */
/* These values must match the options used by the frontend Contact form.     */
/* -------------------------------------------------------------------------- */

const allowedContactMethods = ["call", "whatsapp", "either"];

const allowedHomeSizes = [
  "",
  "1-bhk",
  "2-bhk",
  "3-bhk",
  "4-plus-bhk",
  "not-sure",
];

const allowedCommercialTypes = ["", "office", "retail", "hospitality", "other"];

const allowedProjectStages = [
  "",
  "planning",
  "under-construction",
  "possession-received",
  "renovating",
  "not-sure",
];

const allowedStartTimings = [
  "",
  "asap",
  "1-3-months",
  "3-6-months",
  "exploring",
];

const allowedBudgets = ["", "not-sure", "discuss"];

/* -------------------------------------------------------------------------- */
/* Helper functions                                                            */
/* -------------------------------------------------------------------------- */

/**
 * Convert a string to a trimmed string.
 * Return an empty string for non-string values.
 */
function cleanString(value) {
  return typeof value === "string" ? value.trim() : "";
}

/**
 * Validate an optional string and enforce a maximum length.
 * Missing values become empty strings.
 */
function optionalString(value, maxLength) {
  if (value === undefined || value === null) {
    return "";
  }

  if (typeof value !== "string") {
    return null;
  }

  const cleanedValue = value.trim();

  if (cleanedValue.length > maxLength) {
    return null;
  }

  return cleanedValue;
}

/**
 * Accept phone numbers containing 10–15 digits.
 * Spaces, parentheses, hyphens and an optional leading plus are permitted.
 */
function isValidPhone(phone) {
  return (
    /^\+?[\d\s()-]{10,20}$/.test(phone) &&
    phone.replace(/\D/g, "").length >= 10 &&
    phone.replace(/\D/g, "").length <= 15
  );
}

/**
 * Send a consistent JSON response for validation errors.
 */
function validationError(res, message) {
  return res.status(400).json({
    success: false,
    message,
  });
}

/* -------------------------------------------------------------------------- */
/* POST /api/contact                                                          */
/* Validate an enquiry and save it to MongoDB.                                */
/* -------------------------------------------------------------------------- */

router.post("/", async (req, res, next) => {
  try {
    // Reject missing, null, array or non-object request bodies.
    if (!req.body || typeof req.body !== "object" || Array.isArray(req.body)) {
      return validationError(res, "Please provide a valid enquiry.");
    }

    // Read and normalize the main contact fields.
    const name = cleanString(req.body.name);
    const phone = cleanString(req.body.phone);
    const city = cleanString(req.body.city);

    // Validate required contact information.
    if (!name || name.length > 100) {
      return validationError(
        res,
        "Please provide a valid name (maximum 100 characters).",
      );
    }

    if (!isValidPhone(phone)) {
      return validationError(res, "Please provide a valid phone number.");
    }

    if (!city || city.length > 150) {
      return validationError(
        res,
        "Please provide a valid city (maximum 150 characters).",
      );
    }

    // Explicit consent is required before storing an enquiry.
    if (req.body.consent !== true) {
      return validationError(
        res,
        "Consent is required before submitting an enquiry.",
      );
    }

    /* --------------------------- Selected services ------------------------- */

    const selectedServices = req.body.selectedServices;

    // At least one recognized service must be selected.
    if (
      !Array.isArray(selectedServices) ||
      selectedServices.length === 0 ||
      selectedServices.length > allowedServiceIds.length
    ) {
      return validationError(res, "Please select at least one valid service.");
    }

    // Check each service ID and prevent duplicate selections.
    if (
      selectedServices.some(
        (serviceId) =>
          typeof serviceId !== "string" ||
          !allowedServiceIds.includes(serviceId),
      ) ||
      new Set(selectedServices).size !== selectedServices.length
    ) {
      return validationError(res, "One or more selected services are invalid.");
    }

    /* -------------------------- Selected options --------------------------- */

    const selectedOptions = req.body.selectedOptions ?? {};

    if (
      typeof selectedOptions !== "object" ||
      selectedOptions === null ||
      Array.isArray(selectedOptions)
    ) {
      return validationError(
        res,
        "Selected service options must be a valid object.",
      );
    }

    // Only selected services may have options, and every option must
    // exist in the server-side service catalogue.
    for (const [serviceId, options] of Object.entries(selectedOptions)) {
      if (!selectedServices.includes(serviceId)) {
        return validationError(
          res,
          "Options were provided for a service that was not selected.",
        );
      }

      if (!Array.isArray(options)) {
        return validationError(
          res,
          "Selected service options must be provided as lists.",
        );
      }

      const allowedOptions = serviceCatalogue[serviceId];

      if (
        !Array.isArray(allowedOptions) ||
        options.some(
          (option) =>
            typeof option !== "string" || !allowedOptions.includes(option),
        ) ||
        new Set(options).size !== options.length
      ) {
        return validationError(
          res,
          "One or more selected service options are invalid.",
        );
      }
    }

    /* ------------------------- Project description ------------------------- */

    const projectDetails = optionalString(req.body.projectDetails, 2000);

    if (projectDetails === null) {
      return validationError(
        res,
        "Project details must be text with a maximum of 2000 characters.",
      );
    }

    /* ------------------------ Optional enquiry details --------------------- */

    const details = req.body.optionalDetails ?? {};

    // Check the object before accessing any of its properties.
    if (
      typeof details !== "object" ||
      details === null ||
      Array.isArray(details)
    ) {
      return validationError(res, "Optional enquiry details are invalid.");
    }

    // Declare every value before validating it.
    const contactMethod = details.contactMethod ?? "either";
    const homeSize = details.homeSize ?? "";
    const commercialType = details.commercialType ?? "";
    const projectStage = details.projectStage ?? "";
    const startTiming = details.startTiming ?? "";
    const budget = details.budget ?? "";

    // Validate optional values against the frontend's allowed choices.
    if (
      typeof contactMethod !== "string" ||
      !allowedContactMethods.includes(contactMethod) ||
      typeof homeSize !== "string" ||
      !allowedHomeSizes.includes(homeSize) ||
      typeof commercialType !== "string" ||
      !allowedCommercialTypes.includes(commercialType) ||
      typeof projectStage !== "string" ||
      !allowedProjectStages.includes(projectStage) ||
      typeof startTiming !== "string" ||
      !allowedStartTimings.includes(startTiming) ||
      typeof budget !== "string" ||
      !allowedBudgets.includes(budget)
    ) {
      return validationError(res, "Some optional enquiry details are invalid.");
    }

    // Save only the recognized optional fields.
    const optionalDetails = {
      contactMethod,
      homeSize,
      commercialType,
      projectStage,
      startTiming,
      budget,
    };

    /* ----------------------------- Save enquiry ---------------------------- */

    const normalizedPhone = phone.replace(/[^\d+]/g, "");

    // Mongoose applies the schema's field rules and timestamps.
    const contactRequest = await ContactRequest.create({
      name,
      phone: normalizedPhone,
      city,
      selectedServices,
      selectedOptions,
      projectDetails,
      optionalDetails,
      consent: true,
    });

    // Return a safe response without exposing the full database document.
    return res.status(201).json({
      success: true,
      message: "Your enquiry has been received successfully.",
      enquiryId: contactRequest._id,
    });
  } catch (error) {
    // Pass unexpected errors to the central Express error handler.
    return next(error);
  }
});

export default router;
