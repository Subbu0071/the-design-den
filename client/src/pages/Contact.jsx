import { useState } from "react";
import { useSearchParams } from "react-router-dom";

import usePageTitle from "../utils/usePageTitle";
import siteConfig from "../config/site";
import services from "../data/services";
import Button from "../components/ui/Button";
import Container from "../components/ui/Container";
import Eyebrow from "../components/ui/Eyebrow";
import Section from "../components/ui/Section";

import { apiRequest } from "../services/api";
import { Link } from "react-router-dom";

// Shared styles keep form controls consistent with the DESIGN DEN visual system.
const inputClass =
  "mt-2 min-h-12 w-full border border-[var(--color-warm-grey)] bg-transparent px-4 py-3 text-base text-[var(--color-charcoal)] outline-none transition-colors focus-visible:border-[var(--color-dark-gold)] focus-visible:ring-2 focus-visible:ring-[var(--color-dark-gold)] focus-visible:ring-offset-2";
const labelClass = "block text-sm font-medium text-[var(--color-charcoal)]";
const checkboxClass =
  "mt-1 h-4 w-4 shrink-0 accent-[var(--color-dark-gold)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-dark-gold)]";

const initialOptionalDetails = {
  contactMethod: "either",
  homeSize: "",
  commercialType: "",
  projectStage: "",
  startTiming: "",
  budget: "",
};

function Contact() {
  usePageTitle("Contact DESIGN DEN — Request a Consultation", {
    description:
      "Tell DESIGN DEN about your interior project, choose the services you need, and prepare for a consultation.",
  });

  const [searchParams] = useSearchParams();

  // Read valid service IDs from the URL so Services-page links can prefill this form.
  const requestedServiceIds = [
    ...new Set(
      [...searchParams.getAll("services"), searchParams.get("service")].filter(
        Boolean,
      ),
    ),
  ].filter((id) => services.some((service) => service.id === id));

  // Only prefill option names that exist in the current service catalogue.
  const readRequestedOptions = () => {
    const result = {};
    requestedServiceIds.forEach((serviceId) => {
      const service = services.find((item) => item.id === serviceId);
      if (!service) return;
      const validOptions = searchParams
        .getAll(`option[${serviceId}]`)
        .filter((name) =>
          service.options.some((option) => option.name === name),
        );
      if (validOptions.length) result[serviceId] = [...new Set(validOptions)];
    });
    return result;
  };

  // Keep all form values in React state; no form data is sent or stored here.
  const [selectedServices, setSelectedServices] = useState(
    () => requestedServiceIds,
  );
  const [selectedOptions, setSelectedOptions] = useState(readRequestedOptions);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [projectDetails, setProjectDetails] = useState("");
  const [optionalOpen, setOptionalOpen] = useState(false);
  const [optionalDetails, setOptionalDetails] = useState(
    initialOptionalDetails,
  );
  const [consent, setConsent] = useState(false);
  const [attemptedSubmit, setAttemptedSubmit] = useState(false);
  const [submissionMessage, setSubmissionMessage] = useState("");

  const hasFullHomeService = selectedServices.includes("full-home-interiors");
  const hasCommercialService = selectedServices.includes(
    "commercial-interiors",
  );
  const normalizedPhone = phone.replace(/[\s()-]/g, "").replace(/^\+91/, "");
  const isPhoneValid = /^[6-9]\d{9}$/.test(normalizedPhone);

  // Centralized validation keeps the error summary and field messages in sync.
  const errors = {
    name: name.trim() ? "" : "Please tell us your name.",
    phone: isPhoneValid
      ? ""
      : "Please enter a valid 10-digit Indian mobile number.",
    city: city.trim()
      ? ""
      : "Please tell us your city and area so we know where the project is.",
    services: selectedServices.length
      ? ""
      : "Please choose at least one service, or select “Not sure yet”.",
    consent: consent ? "" : "Please tick this box so we can contact you.",
  };

  const selectedServiceDetails = selectedServices
    .map((id) => services.find((service) => service.id === id))
    .filter(Boolean);

  function handleServiceChange(serviceId, checked) {
    // “Not sure yet” is exclusive; other service selections may be combined.
    setSelectedServices((current) => {
      if (serviceId === "not-sure") return checked ? ["not-sure"] : [];
      const otherServices = current.filter((id) => id !== "not-sure");
      if (checked)
        return otherServices.includes(serviceId)
          ? otherServices
          : [...otherServices, serviceId];
      return otherServices.filter((id) => id !== serviceId);
    });

    // Remove option selections for a service when that service is unchecked.
    if (!checked) {
      setSelectedOptions((current) => {
        const next = { ...current };
        delete next[serviceId];
        return next;
      });
    }
  }

  function handleOptionChange(serviceId, optionName, checked) {
    setSelectedOptions((current) => {
      const currentOptions = current[serviceId] ?? [];
      const nextOptions = checked
        ? [...new Set([...currentOptions, optionName])]
        : currentOptions.filter((item) => item !== optionName);
      return { ...current, [serviceId]: nextOptions };
    });
  }

  function handleOptionalChange(event) {
    const { name: fieldName, value } = event.target;
    setOptionalDetails((current) => ({ ...current, [fieldName]: value }));
  }

  // Keep online enquiries disabled until the privacy notice is ready.
  const ONLINE_SUBMISSIONS_ENABLED = false;

  
async function handleSubmit(event) {
  event.preventDefault();
  setAttemptedSubmit(true);
  setSubmissionMessage("");

  if (Object.values(errors).some(Boolean)) {
    document.getElementById("consultation-errors")?.focus();
    return;
  }

  if (!ONLINE_SUBMISSIONS_ENABLED) {
    setSubmissionMessage(
      "Online enquiries are not enabled yet. Please call or WhatsApp DESIGN DEN for now.",
    );
    return;
  }

  try {
    const payload = {
      name: name.trim(),
      phone: phone.trim(),
      city: city.trim(),
      selectedServices,
      selectedOptions,
      projectDetails: projectDetails.trim(),
      optionalDetails,
      consent,
    };

    const result = await apiRequest("/api/contact", {
      method: "POST",
      body: JSON.stringify(payload),
    });

    setSubmissionMessage(result.message);
  } catch (error) {
    setSubmissionMessage(
      error.message ||
        "We couldn't submit your enquiry. Please try again later.",
    );
  }
}


  const { brand, contact, locations } = siteConfig;

  return (
    <>
      <Section className="bg-[var(--color-charcoal)] text-[var(--color-ivory)]">
        <Container>
          <div className="max-w-3xl">
            <Eyebrow>
              <span className="text-[var(--color-sand)]">
                Start a Conversation
              </span>
            </Eyebrow>
            <h1 className="mt-5 text-5xl sm:text-6xl">
              Let&apos;s design a space around how you live.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--color-sand)]">
              Share a few details about your project and help us understand what
              you have in mind.
            </p>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
            <aside className="order-2 lg:order-1">
              <Eyebrow>Contact</Eyebrow>
              <h2 className="mt-4 text-3xl sm:text-4xl">Prefer to talk?</h2>
              <p className="mt-4 max-w-xl leading-8 text-[var(--color-warm-grey)]">
                Not sure which service you need? Start a conversation with
                DESIGN DEN and explain your requirements in your own words.
              </p>
              <div className="mt-8 space-y-6">
                <div>
                  <p className="section-label text-[var(--color-warm-grey)]">
                    Phone
                  </p>
                  <a
                    href={contact.phoneHref}
                    className="mt-2 inline-block text-lg font-medium hover:text-[var(--color-dark-gold)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-dark-gold)]"
                  >
                    {contact.phone}
                  </a>
                </div>
                <div>
                  <p className="section-label text-[var(--color-warm-grey)]">
                    WhatsApp
                  </p>
                  <a
                    href={contact.whatsapp}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-2 inline-block text-lg font-medium hover:text-[var(--color-dark-gold)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-dark-gold)]"
                  >
                    Start a WhatsApp conversation
                  </a>
                  <p className="mt-2 text-sm leading-6 text-[var(--color-warm-grey)]">
                    You can share floor plans, room photos, or inspiration
                    images directly on WhatsApp.
                  </p>
                </div>
                <div>
                  <p className="section-label text-[var(--color-warm-grey)]">
                    Locations
                  </p>
                  <p className="mt-2 leading-7 text-[var(--color-warm-grey)]">
                    {locations.status === "pending"
                      ? "Locations will be updated soon."
                      : locations.cities.join(" · ")}
                  </p>
                </div>
                <div>
                  <p className="section-label text-[var(--color-warm-grey)]">
                    Our approach
                  </p>
                  <p className="mt-2 leading-7 text-[var(--color-warm-grey)]">
                    {brand.positioning}
                  </p>
                </div>
              </div>
            </aside>

            <div className="order-1 border border-[var(--color-sand)] bg-[var(--color-white)] p-5 sm:p-8 lg:order-2 lg:p-10">
              <Eyebrow>Consultation</Eyebrow>
              <h2 className="mt-4 text-3xl sm:text-4xl">
                Tell us about your space.
              </h2>
              <p className="mt-4 leading-7 text-[var(--color-warm-grey)]">
                Only the essential questions are required. You can add more
                details if you&apos;d like.
              </p>

              {selectedServiceDetails.length > 0 && (
                <div className="mt-6 border-l-2 border-[var(--color-gold)] bg-[var(--color-ivory)] px-4 py-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-warm-grey)]">
                    Your selection from the Services page
                  </p>
                  <div className="mt-3 space-y-3">
                    {selectedServiceDetails.map((service) => (
                      <div key={service.id}>
                        <p className="text-sm font-semibold text-[var(--color-ink)]">
                          {service.title}
                        </p>
                        <p className="mt-1 text-sm leading-6 text-[var(--color-warm-grey)]">
                          {selectedOptions[service.id]?.length
                            ? selectedOptions[service.id].join(", ")
                            : "No specific options selected"}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <form
                className="mt-8 space-y-6"
                noValidate
                onSubmit={handleSubmit}
              >
                {attemptedSubmit && Object.values(errors).some(Boolean) && (
                  <div
                    id="consultation-errors"
                    tabIndex={-1}
                    role="alert"
                    className="border border-red-700 bg-red-50 p-4 text-sm text-red-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-700"
                  >
                    <p className="font-semibold">
                      Please check the required fields below.
                    </p>
                    <ul className="mt-2 list-disc space-y-1 pl-5">
                      {Object.entries(errors)
                        .filter(([, message]) => message)
                        .map(([field, message]) => (
                          <li key={field}>{message}</li>
                        ))}
                    </ul>
                  </div>
                )}

                <div>
                  <label htmlFor="name" className={labelClass}>
                    Your name <span aria-hidden="true">*</span>
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    required
                    maxLength={100}
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                    aria-invalid={attemptedSubmit && Boolean(errors.name)}
                    aria-describedby={
                      attemptedSubmit && errors.name ? "name-error" : undefined
                    }
                    className={inputClass}
                    placeholder="Enter your name"
                  />
                  {attemptedSubmit && errors.name && (
                    <p id="name-error" className="mt-2 text-sm text-red-800">
                      {errors.name}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="phone" className={labelClass}>
                    Mobile number <span aria-hidden="true">*</span>
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    inputMode="tel"
                    autoComplete="tel"
                    required
                    maxLength={20}
                    value={phone}
                    onChange={(event) => setPhone(event.target.value)}
                    aria-invalid={attemptedSubmit && Boolean(errors.phone)}
                    aria-describedby="phone-help"
                    className={inputClass}
                    placeholder="98765 43210"
                  />
                  <p
                    id="phone-help"
                    className="mt-2 text-sm leading-6 text-[var(--color-warm-grey)]"
                  >
                    We&apos;ll use this number to discuss your enquiry. You may
                    include +91.
                  </p>
                  {attemptedSubmit && errors.phone && (
                    <p className="mt-2 text-sm text-red-800">{errors.phone}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="city" className={labelClass}>
                    City and area <span aria-hidden="true">*</span>
                  </label>
                  <input
                    id="city"
                    name="city"
                    type="text"
                    autoComplete="address-level2"
                    required
                    maxLength={150}
                    value={city}
                    onChange={(event) => setCity(event.target.value)}
                    aria-invalid={attemptedSubmit && Boolean(errors.city)}
                    className={inputClass}
                    placeholder="Your city or locality"
                  />
                  {attemptedSubmit && errors.city && (
                    <p className="mt-2 text-sm text-red-800">{errors.city}</p>
                  )}
                </div>

                <fieldset
                  className="space-y-3"
                  aria-describedby="services-help"
                >
                  <legend className={labelClass}>
                    What would you like help with?{" "}
                    <span aria-hidden="true">*</span>
                  </legend>
                  <p
                    id="services-help"
                    className="text-sm leading-6 text-[var(--color-warm-grey)]"
                  >
                    Choose all that apply. If you&apos;re unsure, choose “Not
                    sure yet”.
                  </p>
                  <div className="grid gap-3 sm:grid-cols-2">
                    {services.map((service) => (
                      <label
                        key={service.id}
                        className={`flex min-h-12 items-start gap-3 border p-3 text-sm leading-6 transition-colors hover:border-[var(--color-dark-gold)] ${selectedServices.includes(service.id) ? "border-[var(--color-dark-gold)] bg-[var(--color-ivory)]" : "border-[var(--color-sand)]"}`}
                      >
                        <input
                          type="checkbox"
                          name="services"
                          value={service.id}
                          checked={selectedServices.includes(service.id)}
                          onChange={(event) =>
                            handleServiceChange(
                              service.id,
                              event.target.checked,
                            )
                          }
                          className={checkboxClass}
                        />
                        <span>{service.title}</span>
                      </label>
                    ))}
                    <label
                      className={`flex min-h-12 items-start gap-3 border p-3 text-sm leading-6 transition-colors hover:border-[var(--color-dark-gold)] ${selectedServices.includes("not-sure") ? "border-[var(--color-dark-gold)] bg-[var(--color-ivory)]" : "border-[var(--color-sand)]"}`}
                    >
                      <input
                        type="checkbox"
                        name="services"
                        value="not-sure"
                        checked={selectedServices.includes("not-sure")}
                        onChange={(event) =>
                          handleServiceChange("not-sure", event.target.checked)
                        }
                        className={checkboxClass}
                      />
                      <span>Not sure yet</span>
                    </label>
                  </div>
                  {attemptedSubmit && errors.services && (
                    <p className="text-sm text-red-800">{errors.services}</p>
                  )}
                </fieldset>

                {selectedServiceDetails.length > 0 && (
                  <div className="space-y-5">
                    <div>
                      <h3 className="text-base font-semibold text-[var(--color-charcoal)]">
                        Review your service options
                      </h3>
                      <p className="mt-2 text-sm leading-6 text-[var(--color-warm-grey)]">
                        Change your choices below, or leave every option
                        unchecked if you would like advice during the
                        consultation.
                      </p>
                    </div>
                    {selectedServiceDetails.map((service) => (
                      <fieldset
                        key={service.id}
                        className="border border-[var(--color-sand)] p-4"
                      >
                        <legend className="px-1 text-sm font-semibold text-[var(--color-charcoal)]">
                          {service.title}
                        </legend>
                        <div className="mt-2 grid gap-3 sm:grid-cols-2">
                          {service.options.map((option) => {
                            const isChecked = (
                              selectedOptions[service.id] ?? []
                            ).includes(option.name);
                            return (
                              <label
                                key={option.name}
                                className={`flex items-start gap-3 border p-3 text-sm leading-6 text-[var(--color-charcoal)] transition-colors hover:border-[var(--color-dark-gold)] ${isChecked ? "border-[var(--color-dark-gold)] bg-[var(--color-ivory)]" : "border-[var(--color-sand)]"}`}
                              >
                                <input
                                  type="checkbox"
                                  checked={isChecked}
                                  onChange={(event) =>
                                    handleOptionChange(
                                      service.id,
                                      option.name,
                                      event.target.checked,
                                    )
                                  }
                                  className={checkboxClass}
                                />
                                <span>{option.name}</span>
                              </label>
                            );
                          })}
                        </div>
                      </fieldset>
                    ))}
                  </div>
                )}

                <div>
                  <label htmlFor="project-details" className={labelClass}>
                    Anything else we should know?{" "}
                    <span className="font-normal text-[var(--color-warm-grey)]">
                      (optional)
                    </span>
                  </label>
                  <textarea
                    id="project-details"
                    name="projectDetails"
                    rows={4}
                    maxLength={2000}
                    value={projectDetails}
                    onChange={(event) => setProjectDetails(event.target.value)}
                    className={inputClass}
                    placeholder="Tell us about the space, your ideas, or anything important to you."
                  />
                </div>

                <div className="border-y border-[var(--color-sand)] py-4">
                  <button
                    type="button"
                    aria-expanded={optionalOpen}
                    aria-controls="optional-project-details"
                    onClick={() => setOptionalOpen((open) => !open)}
                    className="flex min-h-11 w-full items-center justify-between gap-4 text-left text-sm font-semibold text-[var(--color-charcoal)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-dark-gold)]"
                  >
                    <span>Add more details (optional)</span>
                    <span aria-hidden="true">{optionalOpen ? "−" : "+"}</span>
                  </button>
                  {optionalOpen && (
                    <div
                      id="optional-project-details"
                      className="mt-5 space-y-5"
                    >
                      <div>
                        <label htmlFor="contact-method" className={labelClass}>
                          Best way to reach you
                        </label>
                        <select
                          id="contact-method"
                          name="contactMethod"
                          value={optionalDetails.contactMethod}
                          onChange={handleOptionalChange}
                          className={inputClass}
                        >
                          <option value="call">Call</option>
                          <option value="whatsapp">WhatsApp</option>
                          <option value="either">Either is fine</option>
                        </select>
                      </div>
                      {hasFullHomeService && (
                        <div>
                          <label htmlFor="home-size" className={labelClass}>
                            Home size
                          </label>
                          <select
                            id="home-size"
                            name="homeSize"
                            value={optionalDetails.homeSize}
                            onChange={handleOptionalChange}
                            className={inputClass}
                          >
                            <option value="">Choose if known</option>
                            <option value="1-bhk">1 BHK</option>
                            <option value="2-bhk">2 BHK</option>
                            <option value="3-bhk">3 BHK</option>
                            <option value="4-plus-bhk">4+ BHK</option>
                            <option value="not-sure">Not sure</option>
                          </select>
                        </div>
                      )}
                      {hasCommercialService && (
                        <div>
                          <label
                            htmlFor="commercial-type"
                            className={labelClass}
                          >
                            Type of commercial space
                          </label>
                          <select
                            id="commercial-type"
                            name="commercialType"
                            value={optionalDetails.commercialType}
                            onChange={handleOptionalChange}
                            className={inputClass}
                          >
                            <option value="">Choose if known</option>
                            <option value="office">Office</option>
                            <option value="retail">Retail</option>
                            <option value="hospitality">Hospitality</option>
                            <option value="other">Other</option>
                          </select>
                        </div>
                      )}
                      <div>
                        <label htmlFor="project-stage" className={labelClass}>
                          Where is your project right now?
                        </label>
                        <select
                          id="project-stage"
                          name="projectStage"
                          value={optionalDetails.projectStage}
                          onChange={handleOptionalChange}
                          className={inputClass}
                        >
                          <option value="">Choose if known</option>
                          <option value="planning">Still planning</option>
                          <option value="under-construction">
                            Under construction
                          </option>
                          <option value="possession-received">
                            Possession received
                          </option>
                          <option value="renovating">Renovating</option>
                          <option value="not-sure">Not sure</option>
                        </select>
                      </div>
                      <div>
                        <label htmlFor="start-timing" className={labelClass}>
                          When would you like to start?
                        </label>
                        <select
                          id="start-timing"
                          name="startTiming"
                          value={optionalDetails.startTiming}
                          onChange={handleOptionalChange}
                          className={inputClass}
                        >
                          <option value="">Choose if known</option>
                          <option value="asap">As soon as possible</option>
                          <option value="1-3-months">Within 1–3 months</option>
                          <option value="3-6-months">In 3–6 months</option>
                          <option value="exploring">Just exploring</option>
                        </select>
                      </div>
                      <div>
                        <label htmlFor="budget" className={labelClass}>
                          Do you have a budget in mind?
                        </label>
                        <select
                          id="budget"
                          name="budget"
                          value={optionalDetails.budget}
                          onChange={handleOptionalChange}
                          className={inputClass}
                        >
                          <option value="">Prefer not to say</option>
                          <option value="not-sure">Not sure yet</option>
                          <option value="discuss">
                            I&apos;d rather discuss
                          </option>
                        </select>
                        <p className="mt-2 text-sm leading-6 text-[var(--color-warm-grey)]">
                          We can discuss suitable options together. No price
                          ranges are shown until they are confirmed.
                        </p>
                      </div>
                    </div>
                  )}
                </div>

                <div className="space-y-3">
                  <label className="flex items-start gap-3 text-sm leading-6 text-[var(--color-charcoal)]">
                    <input
                      type="checkbox"
                      name="consent"
                      required
                      checked={consent}
                      onChange={(event) => setConsent(event.target.checked)}
                      className={checkboxClass}
                    />

                    <span>
                      I agree that DESIGN DEN may contact me by phone or
                      WhatsApp about this enquiry.{" "}
                      <Link
                        to="/privacy"
                        className="font-medium underline underline-offset-4 hover:text-[var(--color-dark-gold)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-dark-gold)]"
                      >
                        Read our Privacy Notice
                      </Link>
                    </span>
                  </label>
                  {attemptedSubmit && errors.consent && (
                    <p className="text-sm text-red-800">{errors.consent}</p>
                  )}
                </div>

                <div className="border border-[var(--color-sand)] bg-[var(--color-ivory)] p-4">
                  <p className="text-sm font-semibold text-[var(--color-charcoal)]">
                    Online enquiries are not connected yet.
                  </p>
                  {submissionMessage && (
                    <p
                      role="status"
                      aria-live="polite"
                      className="mt-2 text-sm leading-6 text-[var(--color-warm-grey)]"
                    >
                      {submissionMessage}
                    </p>
                  )}
                  <p className="mt-2 text-sm leading-6 text-[var(--color-warm-grey)]">
                    This form is a preview and will not send or save your
                    details. Please call or WhatsApp DESIGN DEN using the
                    contact options on this page for now.
                  </p>
                </div>

                <Button type="submit" variant="primary">
                  Check required fields
                </Button>
              </form>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}

export default Contact;
