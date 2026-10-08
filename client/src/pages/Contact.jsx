import { useSearchParams } from "react-router-dom";

import usePageTitle from "../utils/usePageTitle";

import Button from "../components/ui/Button";
import Container from "../components/ui/Container";
import Eyebrow from "../components/ui/Eyebrow";
import Section from "../components/ui/Section";

const serviceLabels = {
  "modular-kitchen": "Modular Kitchen",
  "wardrobes-storage": "Wardrobes & Storage",
  "full-home-interiors": "Full Home Interiors",
  "loose-furniture": "Loose Furniture",
  "commercial-interiors": "Commercial Interiors",
};

function Contact() {
  usePageTitle("DESIGN DEN — Contact");

  const [searchParams] = useSearchParams();
  const selectedService = searchParams.get("service");

  const serviceLabel = serviceLabels[selectedService] || "";

  return (
    <>
      {/* Introduction */}
      <Section className="bg-[var(--color-ivory)] pb-14 sm:pb-16 lg:pb-20">
        <Container>
          <div className="max-w-4xl">
            <Eyebrow>Contact DESIGN DEN</Eyebrow>

            <h1 className="mt-5 text-5xl text-[var(--color-ink)] sm:text-6xl lg:text-7xl">
              Let's talk about
              <span className="block italic text-[var(--color-dark-gold)]">
                your space.
              </span>
            </h1>

            <p className="mt-7 max-w-3xl text-base leading-8 text-[var(--color-warm-grey)] sm:text-lg">
              Tell us a little about your project and what you're looking to
              create. We'll use the information to understand your requirements
              and start the conversation.
            </p>
          </div>
        </Container>
      </Section>

      {/* Contact Area */}
      <Section className="bg-[var(--color-ivory)] pt-6 sm:pt-8 lg:pt-10">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
            {/* Contact Information */}
            <div>
              <Eyebrow>Get in Touch</Eyebrow>

              <h2 className="mt-5 text-4xl text-[var(--color-ink)] sm:text-5xl">
                Start with a conversation.
              </h2>

              <p className="mt-6 max-w-md text-base leading-8 text-[var(--color-warm-grey)]">
                Whether you're planning one room or a complete home interior,
                tell us what you have in mind.
              </p>

              <div className="mt-10 space-y-7">
                <div className="border-t border-[var(--color-sand)] pt-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-warm-grey)]">
                    Phone / WhatsApp
                  </p>

                  <a
                    href="tel:+919740555351"
                    className="mt-2 inline-block text-xl text-[var(--color-ink)] transition-colors hover:text-[var(--color-dark-gold)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-dark-gold)]"
                  >
                    +91 97405 55351
                  </a>
                </div>

                <div className="border-t border-[var(--color-sand)] pt-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-warm-grey)]">
                    Locations
                  </p>

                  <p className="mt-2 text-lg text-[var(--color-ink)]">
                    Bangalore · Chennai · Hyderabad · Vizag
                  </p>
                </div>

                <div className="border-t border-[var(--color-sand)] pt-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-warm-grey)]">
                    Project Radius
                  </p>

                  <p className="mt-2 text-lg text-[var(--color-ink)]">
                    Projects within approximately 300 km of our service
                    locations.
                  </p>
                </div>
              </div>

              <div className="mt-10">
                <Button
                  href="https://wa.me/919740555351"
                  variant="dark"
                  target="_blank"
                  rel="noreferrer"
                >
                  Chat on WhatsApp
                </Button>
              </div>
            </div>

            {/* Consultation Form */}
            <div className="border border-[var(--color-sand)] bg-[var(--color-white)] p-7 sm:p-9 lg:p-10">
              <div>
                <Eyebrow>Book a Consultation</Eyebrow>

                <h2 className="mt-4 text-3xl text-[var(--color-ink)] sm:text-4xl">
                  Tell us about your project.
                </h2>
              </div>

              <form className="mt-8 space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-warm-grey)]"
                  >
                    Name
                  </label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    placeholder="Your name"
                    className="mt-2 w-full border border-[var(--color-sand)] bg-[var(--color-ivory)] px-4 py-3 text-[var(--color-ink)] outline-none transition-colors placeholder:text-[var(--color-warm-grey)] focus:border-[var(--color-dark-gold)] focus:ring-1 focus:ring-[var(--color-dark-gold)]"
                  />
                </div>

                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="phone"
                      className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-warm-grey)]"
                    >
                      Phone
                    </label>

                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      autoComplete="tel"
                      placeholder="Your phone number"
                      className="mt-2 w-full border border-[var(--color-sand)] bg-[var(--color-ivory)] px-4 py-3 text-[var(--color-ink)] outline-none transition-colors placeholder:text-[var(--color-warm-grey)] focus:border-[var(--color-dark-gold)] focus:ring-1 focus:ring-[var(--color-dark-gold)]"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="city"
                      className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-warm-grey)]"
                    >
                      City
                    </label>

                    <input
                      id="city"
                      name="city"
                      type="text"
                      autoComplete="address-level2"
                      placeholder="Your city"
                      className="mt-2 w-full border border-[var(--color-sand)] bg-[var(--color-ivory)] px-4 py-3 text-[var(--color-ink)] outline-none transition-colors placeholder:text-[var(--color-warm-grey)] focus:border-[var(--color-dark-gold)] focus:ring-1 focus:ring-[var(--color-dark-gold)]"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="service"
                    className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-warm-grey)]"
                  >
                    Service
                  </label>

                  <select
                    id="service"
                    name="service"
                    defaultValue={selectedService || ""}
                    className="mt-2 w-full border border-[var(--color-sand)] bg-[var(--color-ivory)] px-4 py-3 text-[var(--color-ink)] outline-none transition-colors focus:border-[var(--color-dark-gold)] focus:ring-1 focus:ring-[var(--color-dark-gold)]"
                  >
                    <option value="" disabled>
                      Select a service
                    </option>

                    {Object.entries(serviceLabels).map(([value, label]) => (
                      <option key={value} value={value}>
                        {label}
                      </option>
                    ))}
                  </select>

                  {serviceLabel && (
                    <p className="mt-2 text-xs text-[var(--color-warm-grey)]">
                      You selected: {serviceLabel}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-warm-grey)]"
                  >
                    Project Details
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    placeholder="Tell us about your space, requirements, or project..."
                    className="mt-2 w-full resize-y border border-[var(--color-sand)] bg-[var(--color-ivory)] px-4 py-3 text-[var(--color-ink)] outline-none transition-colors placeholder:text-[var(--color-warm-grey)] focus:border-[var(--color-dark-gold)] focus:ring-1 focus:ring-[var(--color-dark-gold)]"
                  />
                </div>

                <Button type="submit" className="w-full sm:w-auto">
                  Request Consultation
                </Button>

                <p className="text-xs leading-6 text-[var(--color-warm-grey)]">
                  This form is currently a frontend prototype. Submission
                  handling will be connected during the backend and lead-flow
                  phase.
                </p>
              </form>
            </div>
          </div>
        </Container>
      </Section>

      {/* Service Area */}
      <Section className="bg-[var(--color-charcoal)]">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <Eyebrow className="text-[var(--color-sand)]">
              Service Areas
            </Eyebrow>

            <h2 className="mt-5 text-4xl text-[var(--color-ivory)] sm:text-5xl">
              Serving homes and spaces across key cities.
            </h2>

            <p className="mt-6 text-base leading-8 text-[var(--color-sand)]">
              DESIGN DEN currently works across Bangalore, Chennai, Hyderabad,
              and Vizag, with projects considered within approximately a
              300-kilometre radius of these locations.
            </p>
          </div>
        </Container>
      </Section>
    </>
  );
}

export default Contact;
