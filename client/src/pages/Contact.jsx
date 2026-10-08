import { useSearchParams } from "react-router-dom";
import siteConfig from "../config/site";
import services from "../data/services";
import Button from "../components/ui/Button";
import Container from "../components/ui/Container";
import Eyebrow from "../components/ui/Eyebrow";
import Section from "../components/ui/Section";

const serviceLabels = Object.fromEntries(
  services.map((service) => [service.id, service.title]),
);

function Contact() {
  const [searchParams] = useSearchParams();

  const selectedService = searchParams.get("service");
  const selectedServiceLabel =
    serviceLabels[selectedService] || "Not specified";

  const { brand, contact, locations } = siteConfig;

  return (
    <>
      <Section className="bg-[var(--color-charcoal)] text-[var(--color-ivory)]">
        <Container>
          <div className="max-w-3xl">
            <Eyebrow className="text-[var(--color-sand)]">
              Start a Conversation
            </Eyebrow>

            <h1 className="mt-5 text-5xl sm:text-6xl">
              Let's design a space around how you live.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--color-sand)]">
              Tell us a little about your project and our team will get in touch
              to understand your requirements.
            </p>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            {/* Contact Information */}
            <div>
              <Eyebrow>Contact</Eyebrow>

              <h2 className="mt-5 text-4xl sm:text-5xl">
                Tell us about your project.
              </h2>

              <p className="mt-6 max-w-xl leading-8 text-[var(--color-warm-grey)]">
                Whether you're planning a modular kitchen, wardrobe, complete
                home interior, or another interior requirement, start with a
                conversation.
              </p>

              <div className="mt-10 space-y-7">
                <div>
                  <p className="section-label text-[var(--color-warm-grey)]">
                    Phone
                  </p>

                  <a
                    href={contact.phoneHref}
                    className="mt-2 inline-block text-lg font-medium transition-colors duration-200 hover:text-[var(--color-dark-gold)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-dark-gold)]"
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
                    className="mt-2 inline-block text-lg font-medium transition-colors duration-200 hover:text-[var(--color-dark-gold)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-dark-gold)]"
                  >
                    Start a WhatsApp Conversation
                  </a>
                </div>

                <div>
                  <p className="section-label text-[var(--color-warm-grey)]">
                    Locations
                  </p>

                  {locations.status === "pending" ? (
                    <p className="mt-2 leading-7 text-[var(--color-warm-grey)]">
                      Locations will be updated soon.
                    </p>
                  ) : (
                    <p className="mt-2 leading-7 text-[var(--color-warm-grey)]">
                      {locations.cities.join(" · ")}
                    </p>
                  )}
                </div>

                <div>
                  <p className="section-label text-[var(--color-warm-grey)]">
                    Brand
                  </p>

                  <p className="mt-2 leading-7 text-[var(--color-warm-grey)]">
                    {brand.positioning}
                  </p>
                </div>
              </div>
            </div>

            {/* Consultation Form */}
            <div className="border border-[var(--color-sand)] bg-[var(--color-white)] p-6 sm:p-8 lg:p-10">
              <Eyebrow>Consultation</Eyebrow>

              <h2 className="mt-5 text-3xl sm:text-4xl">
                Request a consultation
              </h2>

              {selectedService && (
                <div className="mt-6 border-l-2 border-[var(--color-gold)] bg-[var(--color-ivory)] px-4 py-3">
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-warm-grey)]">
                    Selected Service
                  </p>

                  <p className="mt-1 text-sm font-medium text-[var(--color-ink)]">
                    {selectedServiceLabel}
                  </p>
                </div>
              )}

              <form className="mt-8 space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-[var(--color-charcoal)]"
                  >
                    Name
                  </label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    className="mt-2 min-h-12 w-full border border-[var(--color-sand)] bg-transparent px-4 outline-none transition-colors focus:border-[var(--color-dark-gold)]"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-[var(--color-charcoal)]"
                  >
                    Phone
                  </label>

                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    className="mt-2 min-h-12 w-full border border-[var(--color-sand)] bg-transparent px-4 outline-none transition-colors focus:border-[var(--color-dark-gold)]"
                  />
                </div>

                <div>
                  <label
                    htmlFor="city"
                    className="block text-sm font-medium text-[var(--color-charcoal)]"
                  >
                    City
                  </label>

                  <input
                    id="city"
                    name="city"
                    type="text"
                    autoComplete="address-level2"
                    className="mt-2 min-h-12 w-full border border-[var(--color-sand)] bg-transparent px-4 outline-none transition-colors focus:border-[var(--color-dark-gold)]"
                  />
                </div>

                <div>
                  <label
                    htmlFor="service"
                    className="block text-sm font-medium text-[var(--color-charcoal)]"
                  >
                    Service
                  </label>

                  <select
                    id="service"
                    name="service"
                    defaultValue={selectedService || ""}
                    className="mt-2 min-h-12 w-full border border-[var(--color-sand)] bg-transparent px-4 outline-none transition-colors focus:border-[var(--color-dark-gold)]"
                  >
                    <option value="" disabled>
                      Select a service
                    </option>

                    {services.map((service) => (
                      <option key={service.id} value={service.id}>
                        {service.title}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="project-details"
                    className="block text-sm font-medium text-[var(--color-charcoal)]"
                  >
                    Project Details
                  </label>

                  <textarea
                    id="project-details"
                    name="projectDetails"
                    rows="5"
                    className="mt-2 w-full resize-y border border-[var(--color-sand)] bg-transparent px-4 py-3 outline-none transition-colors focus:border-[var(--color-dark-gold)]"
                  />
                </div>

                <Button type="submit" variant="primary">
                  Request Consultation
                </Button>

                <p className="text-xs leading-6 text-[var(--color-warm-grey)]">
                  This form is currently a frontend prototype. Lead submission
                  and backend processing will be connected in a later phase.
                </p>
              </form>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}

export default Contact;
