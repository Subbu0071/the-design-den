import { useState } from "react";
import { ArrowUpRight, ClipboardList } from "lucide-react";

import usePageTitle from "../utils/usePageTitle";
import Container from "../components/ui/Container";
import Eyebrow from "../components/ui/Eyebrow";
import Section from "../components/ui/Section";
import ServiceAdvantages from "../components/sections/ServiceAdvantages";
import ServiceDetail from "../components/sections/ServiceDetail";
import services from "../data/services";

function Services() {
  const [selections, setSelections] = useState({});

  usePageTitle("Interior Design Services — DESIGN DEN", {
    description:
      "Explore DESIGN DEN services, including modular kitchens, wardrobes, full-home interiors, furniture, and selected commercial interiors.",
  });

  const hasService = (serviceId, selection = selections) =>
    Object.prototype.hasOwnProperty.call(selection, serviceId);

  const toggleService = (serviceId) => {
    setSelections((current) => {
      const next = { ...current };

      if (hasService(serviceId, current)) {
        delete next[serviceId];
      } else {
        next[serviceId] = [];
      }

      return next;
    });
  };

  const toggleOption = (serviceId, optionName) => {
    setSelections((current) => {
      const selectedOptions = current[serviceId] ?? [];

      const nextOptions = selectedOptions.includes(optionName)
        ? selectedOptions.filter((item) => item !== optionName)
        : [...selectedOptions, optionName];

      return {
        ...current,
        [serviceId]: nextOptions,
      };
    });
  };

  const selectedServices = services.filter((service) => hasService(service.id));

  const consultationParams = new URLSearchParams();

  selectedServices.forEach((service, index) => {
    consultationParams.append("services", service.id);

    if (index === 0) {
      consultationParams.set("service", service.id);
    }

    (selections[service.id] ?? []).forEach((optionName) => {
      consultationParams.append(`option[${service.id}]`, optionName);
    });
  });

  const consultationUrl = `/contact?${consultationParams.toString()}`;

  return (
    <>
      {/* Services introduction */}
      <Section className="bg-[var(--color-ivory)] pb-14 sm:pb-16 lg:pb-20">
        <Container>
          <div className="max-w-3xl">
            <Eyebrow>What We Design</Eyebrow>

            <h1 className="mt-5 text-5xl text-[var(--color-ink)] sm:text-6xl lg:text-7xl">
              Interiors designed
              <span className="block italic text-[var(--color-dark-gold)]">
                around how you live.
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[var(--color-warm-grey)] sm:text-lg">
              From thoughtfully planned kitchens and wardrobes to coordinated
              home interiors and selected furniture, explore solutions shaped
              around your space, preferences, and everyday needs.
            </p>

            <p className="mt-5 max-w-2xl text-sm leading-7 text-[var(--color-warm-grey)] sm:text-base">
              Explore each service, compare the available options, and select
              what you would like to discuss. You can choose multiple services
              or leave individual options unselected if you would prefer
              guidance.
            </p>
          </div>
        </Container>
      </Section>

      {/* Each service is displayed only once */}
      {services.map((service, index) => (
        <ServiceDetail
          key={service.id}
          service={service}
          index={index}
          isSelected={hasService(service.id)}
          selectedOptions={selections[service.id] ?? []}
          onToggleService={() => toggleService(service.id)}
          onToggleOption={(optionName) => toggleOption(service.id, optionName)}
        />
      ))}

      {/* Selection summary */}
      <Section
        id="service-selection-summary"
        className="scroll-mt-24 bg-[var(--color-ivory)]"
      >
        <Container>
          <div className="border border-[var(--color-sand)] bg-[var(--color-white)] p-6 sm:p-9 lg:p-12">
            <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
              <div className="max-w-2xl">
                <Eyebrow>Your Selection</Eyebrow>

                <h2 className="mt-4 text-3xl text-[var(--color-ink)] sm:text-4xl">
                  Let's plan your space.
                </h2>

                <p className="mt-4 text-sm leading-7 text-[var(--color-warm-grey)] sm:text-base">
                  Your selections help start a more focused conversation about
                  your interior requirements. You can change your choices at any
                  time before continuing to the consultation page.
                </p>

                {selectedServices.length > 0 ? (
                  <div className="mt-7 space-y-5">
                    {selectedServices.map((service) => {
                      const optionNames = selections[service.id] ?? [];

                      return (
                        <div
                          key={service.id}
                          className="border-t border-[var(--color-sand)] pt-4"
                        >
                          <div className="flex flex-wrap items-center justify-between gap-3">
                            <h3 className="font-semibold text-[var(--color-ink)]">
                              {service.title}
                            </h3>

                            <button
                              type="button"
                              onClick={() => toggleService(service.id)}
                              className="text-xs font-semibold text-[var(--color-dark-gold)] underline underline-offset-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-dark-gold)]"
                            >
                              Remove
                            </button>
                          </div>

                          <p className="mt-2 text-sm leading-6 text-[var(--color-warm-grey)]">
                            {optionNames.length > 0
                              ? optionNames.join(", ")
                              : "No specific options selected yet"}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                ) : (
                  <p className="mt-6 text-sm text-[var(--color-warm-grey)]">
                    No services selected yet. Explore the services above and
                    select anything you would like to discuss.
                  </p>
                )}
              </div>

              <div className="w-full shrink-0 lg:max-w-xs">
                <div className="flex items-center gap-3 text-sm text-[var(--color-charcoal)]">
                  <ClipboardList
                    aria-hidden="true"
                    className="h-5 w-5 text-[var(--color-dark-gold)]"
                  />

                  <span>
                    {selectedServices.length}{" "}
                    {selectedServices.length === 1 ? "service" : "services"}{" "}
                    selected
                  </span>
                </div>

                {selectedServices.length > 0 ? (
                  <a
                    href={consultationUrl}
                    className="mt-5 inline-flex min-h-12 w-full items-center justify-center bg-[var(--color-ink)] px-6 py-3 text-center text-sm font-semibold text-[var(--color-ivory)] transition-colors hover:bg-[var(--color-charcoal)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-dark-gold)] focus-visible:ring-offset-4"
                  >
                    Discuss Selected Services
                    <ArrowUpRight aria-hidden="true" className="ml-2 h-4 w-4" />
                  </a>
                ) : (
                  <button
                    type="button"
                    disabled
                    className="mt-5 inline-flex min-h-12 w-full cursor-not-allowed items-center justify-center bg-[var(--color-sand)] px-6 py-3 text-center text-sm font-semibold text-[var(--color-warm-grey)]"
                  >
                    Select a Service to Continue
                  </button>
                )}

                <p className="mt-3 text-xs leading-5 text-[var(--color-warm-grey)]">
                  Your selections help start the consultation. Final
                  requirements can be discussed with the DESIGN DEN team.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <ServiceAdvantages />

      {/* Brand approach */}
      <Section className="bg-[var(--color-ink)]">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            <div>
              <Eyebrow className="text-[var(--color-sand)]">
                Factory Direct
              </Eyebrow>

              <h2 className="mt-5 text-4xl text-[var(--color-ivory)] sm:text-5xl">
                Designed with purpose. Built with control.
              </h2>
            </div>

            <div>
              <p className="text-base leading-8 text-[var(--color-sand)] sm:text-lg">
                DESIGN DEN takes a factory-direct approach to its interior
                offerings, with an emphasis on connecting design choices and
                furniture requirements with production and installation
                planning.
              </p>

              <p className="mt-5 text-base leading-8 text-[var(--color-sand)] sm:text-lg">
                The aim is to keep the process considered and coordinated, from
                selecting finishes and planning furniture to discussing
                installation requirements for your space.
              </p>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}

export default Services;
