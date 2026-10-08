import usePageTitle from "../utils/usePageTitle";

import Container from "../components/ui/Container";
import Eyebrow from "../components/ui/Eyebrow";
import Section from "../components/ui/Section";
import ServiceAdvantages from "../components/sections/ServiceAdvantages";
import ServiceDetail from "../components/sections/ServiceDetail";

import services from "../data/services";

function Services() {
  usePageTitle("DESIGN DEN — Services");

  return (
    <>
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
              From modular kitchens and wardrobes to complete home interiors and
              selected furniture solutions, DESIGN DEN brings your spaces
              together with a factory-direct approach.
            </p>
          </div>
        </Container>
      </Section>

      <Section className="bg-[var(--color-ivory)] pt-6 sm:pt-8 lg:pt-10">
        <Container>
          <div className="grid gap-6 lg:grid-cols-2">
            {services.map((service, index) => (
              <a
  key={service.id}
  href={`#${service.id}`}
  className="group block border border-[var(--color-sand)] bg-[var(--color-white)] p-7 transition-colors duration-300 hover:border-[var(--color-dark-gold)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-dark-gold)] focus-visible:ring-offset-4 sm:p-9"
>
                <div className="flex items-start justify-between gap-6">
                  <span className="text-xs font-semibold tracking-[0.14em] text-[var(--color-gold)]">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-warm-grey)]">
                    DESIGN DEN
                  </span>
                </div>

                <h2 className="mt-8 text-3xl text-[var(--color-ink)] sm:text-4xl">
                  {service.title}
                </h2>

                <p className="mt-4 max-w-xl text-sm leading-7 text-[var(--color-warm-grey)] sm:text-base">
                  {service.shortDescription}
                </p>

                <div className="mt-7 border-t border-[var(--color-sand)] pt-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-warm-grey)]">
                    Available Options
                  </p>

                  <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                    {service.options.map((option) => (
                      <li
                        key={option}
                        className="flex items-center gap-3 text-sm text-[var(--color-charcoal)]"
                      >
                        <span
                          aria-hidden="true"
                          className="h-1.5 w-1.5 shrink-0 bg-[var(--color-gold)]"
                        />

                        {option}
                      </li>
                    ))}
                  </ul>
                </div>
              </a>
            ))}
          </div>
        </Container>
      </Section>
      {services.map((service, index) => (
        <ServiceDetail key={service.id} service={service} index={index} />
      ))}

      <ServiceAdvantages />

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
              <p className="text-base leading-8 text-[var(--color-warm-grey)] sm:text-lg">
                DESIGN DEN follows a factory-direct approach where furniture is
                manufactured through its production network and installed at the
                customer's home.
              </p>

              <p className="mt-5 text-base leading-8 text-[var(--color-warm-grey)] sm:text-lg">
                The approach is designed to keep the journey connected from
                material and manufacturing through installation and quality
                checks.
              </p>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}

export default Services;
