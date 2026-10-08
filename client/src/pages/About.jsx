import usePageTitle from "../utils/usePageTitle";

import Button from "../components/ui/Button";
import Container from "../components/ui/Container";
import Eyebrow from "../components/ui/Eyebrow";
import Section from "../components/ui/Section";
import { aboutServices } from "../data/about";

function About() {
  usePageTitle("DESIGN DEN — About");

  return (
    <>
      {/* Introduction */}
      <Section className="bg-[var(--color-ivory)] pb-14 sm:pb-16 lg:pb-20">
        <Container>
          <div className="max-w-4xl">
            <Eyebrow>About DESIGN DEN</Eyebrow>

            <h1 className="mt-5 text-5xl text-[var(--color-ink)] sm:text-6xl lg:text-7xl">
              We don't just design spaces.
              <span className="block italic text-[var(--color-dark-gold)]">
                We design emotions.
              </span>
            </h1>

            <p className="mt-7 max-w-3xl text-base leading-8 text-[var(--color-warm-grey)] sm:text-lg">
              DESIGN DEN is a factory-direct interior company focused on
              creating thoughtful, functional, and refined interiors for
              everyday living.
            </p>
          </div>
        </Container>
      </Section>

      {/* Our Approach */}
      <Section className="bg-[var(--color-charcoal)]">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            <div>
              <Eyebrow className="text-[var(--color-sand)]">
                Our Approach
              </Eyebrow>

              <h2 className="mt-5 max-w-lg text-4xl text-[var(--color-ivory)] sm:text-5xl">
                Design with purpose. Execute with control.
              </h2>
            </div>

            <div className="space-y-6">
              <p className="text-base leading-8 text-[var(--color-sand)] sm:text-lg">
                DESIGN DEN brings together design, furniture manufacturing,
                installation, and quality checks as part of one connected
                process.
              </p>

              <p className="text-base leading-8 text-[var(--color-sand)] sm:text-lg">
                The factory-direct approach is intended to keep the journey
                closer to the actual manufacturing and installation process,
                while giving customers a clear point of contact throughout their
                project.
              </p>

              <p className="text-base leading-8 text-[var(--color-sand)] sm:text-lg">
                From modular kitchens and wardrobes to full-home interiors and
                selected furniture requirements, the focus is on creating spaces
                that work well and feel personal.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* Founder */}
      <Section className="bg-[var(--color-ivory)]">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
            <div>
              <Eyebrow>Founder & QC Head</Eyebrow>

              <h2 className="mt-5 text-4xl text-[var(--color-ink)] sm:text-5xl">
                Sanjay
              </h2>
            </div>

            <div>
              <p className="max-w-3xl text-lg leading-9 text-[var(--color-charcoal)]">
                Sanjay leads DESIGN DEN with a strong focus on quality
                throughout the project journey, from material and factory checks
                through transit, installation, and final inspection.
              </p>

              <div className="mt-10 grid gap-6 sm:grid-cols-3">
                <div className="border-t border-[var(--color-sand)] pt-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-warm-grey)]">
                    Role
                  </p>
                  <p className="mt-2 text-lg text-[var(--color-ink)]">
                    Founder & QC Head
                  </p>
                </div>

                <div className="border-t border-[var(--color-sand)] pt-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-warm-grey)]">
                    Focus
                  </p>
                  <p className="mt-2 text-lg text-[var(--color-ink)]">
                    Quality Control
                  </p>
                </div>

                <div className="border-t border-[var(--color-sand)] pt-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-warm-grey)]">
                    Approach
                  </p>
                  <p className="mt-2 text-lg text-[var(--color-ink)]">
                    Factory Direct
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* What We Do */}
      <Section className="bg-[var(--color-sand)]">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            <div>
              <Eyebrow>What We Do</Eyebrow>

              <h2 className="mt-5 max-w-lg text-4xl text-[var(--color-ink)] sm:text-5xl">
                From one room to the complete home.
              </h2>
            </div>

            <div className="grid gap-x-8 gap-y-8 sm:grid-cols-2">
              {aboutServices.map((item) => (
                <div
                  key={item}
                  className="border-t border-[var(--color-warm-grey)]/30 pt-4"
                >
                  <p className="text-lg text-[var(--color-ink)]">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <Section className="bg-[var(--color-ink)]">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <Eyebrow className="text-[var(--color-sand)]">
              Start a Conversation
            </Eyebrow>

            <h2 className="mt-5 text-4xl text-[var(--color-ivory)] sm:text-5xl">
              Let's design something that feels like yours.
            </h2>

            <p className="mt-5 text-base leading-8 text-[var(--color-sand)]">
              Tell us about your space, your requirements, and what you're
              looking to create.
            </p>

            <div className="mt-8">
              <Button to="/contact" variant="light">
                Book a Consultation
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}

export default About;
