import usePageTitle from "../utils/usePageTitle";

import Button from "../components/ui/Button";
import Container from "../components/ui/Container";
import Eyebrow from "../components/ui/Eyebrow";
import Section from "../components/ui/Section";

const processSteps = [
  {
    number: "01",
    title: "Consultation",
    description:
      "We begin by understanding your space, requirements, lifestyle, preferences, and the scope of your project.",
  },
  {
    number: "02",
    title: "Design",
    description:
      "The project is planned around your space and requirements, with the design refined before production begins.",
  },
  {
    number: "03",
    title: "Manufacturing",
    description:
      "Furniture is produced through DESIGN DEN's factory network according to the approved project requirements.",
  },
  {
    number: "04",
    title: "Transit QC",
    description:
      "Before dispatch, packing, photographs, measurements, and the required hardware are checked before the project moves to site.",
  },
  {
    number: "05",
    title: "Installation",
    description:
      "The furniture is delivered to the project site and installed according to the planned design and measurements.",
  },
  {
    number: "06",
    title: "Final QC & Handover",
    description:
      "The completed installation is checked for level, alignment, soft-close operation, and finishing before handover.",
  },
];

const qualityChecks = [
  {
    number: "01",
    title: "Factory QC",
    description:
      "Material and manufacturing checks are carried out before the furniture leaves the factory. Key checks include BWP IS:710 ply, hardware, and finish before packing.",
  },
  {
    number: "02",
    title: "Transit QC",
    description:
      "Before dispatch, packing, project photographs, measurement details, and the hardware list are checked to help ensure the project reaches site correctly.",
  },
  {
    number: "03",
    title: "On-Site Final QC",
    description:
      "After installation, the completed work is checked for level, alignment, soft-close operation, and overall finish before customer handover.",
  },
];

function Process() {
  usePageTitle("Our Process — DESIGN DEN", {
    description:
      "Discover the DESIGN DEN interior process from consultation and design through manufacturing, quality control, installation, and handover.",
  });

  return (
    <>
      {/* Introduction */}
      <Section className="bg-[var(--color-ivory)] pb-14 sm:pb-16 lg:pb-20">
        <Container>
          <div className="max-w-4xl">
            <Eyebrow>Our Process</Eyebrow>

            <h1 className="mt-5 text-5xl text-[var(--color-ink)] sm:text-6xl lg:text-7xl">
              From first conversation
              <span className="block italic text-[var(--color-dark-gold)]">
                to final handover.
              </span>
            </h1>

            <p className="mt-7 max-w-3xl text-base leading-8 text-[var(--color-warm-grey)] sm:text-lg">
              A connected process helps keep design, manufacturing,
              installation, and quality checks aligned throughout your project.
            </p>
          </div>
        </Container>
      </Section>

      {/* Process Steps */}
      <Section className="bg-[var(--color-ivory)] pt-6 sm:pt-8 lg:pt-10">
        <Container>
          <div className="divide-y divide-[var(--color-sand)] border-y border-[var(--color-sand)]">
            {processSteps.map((step) => (
              <div
                key={step.number}
                className="grid gap-5 py-8 sm:grid-cols-[5rem_0.8fr_1.2fr] sm:items-start sm:gap-8 lg:py-10"
              >
                <span className="text-xs font-semibold tracking-[0.14em] text-[var(--color-dark-gold)]">
                  {step.number}
                </span>

                <h2 className="text-3xl text-[var(--color-ink)]">
                  {step.title}
                </h2>

                <p className="max-w-2xl text-sm leading-7 text-[var(--color-warm-grey)] sm:text-base">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* 3 Layer QC */}
      <Section className="bg-[var(--color-charcoal)]">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            <div>
              <Eyebrow className="text-[var(--color-sand)]">3 Layer QC</Eyebrow>

              <h2 className="mt-5 max-w-lg text-4xl text-[var(--color-ivory)] sm:text-5xl">
                Quality isn't a final step.
                <span className="block italic text-[var(--color-sand)]">
                  It's part of the process.
                </span>
              </h2>

              <p className="mt-6 max-w-lg text-base leading-8 text-[var(--color-sand)]">
                DESIGN DEN follows three quality checkpoints across the project
                journey — before transit, during dispatch preparation, and after
                installation.
              </p>
            </div>

            <div className="divide-y divide-[var(--color-warm-grey)]/40 border-y border-[var(--color-warm-grey)]/40">
              {qualityChecks.map((check) => (
                <div
                  key={check.number}
                  className="grid gap-4 py-8 sm:grid-cols-[4rem_1fr] sm:gap-6"
                >
                  <span className="text-xs font-semibold tracking-[0.14em] text-[var(--color-sand)]">
                    {check.number}
                  </span>

                  <div>
                    <h3 className="text-2xl text-[var(--color-ivory)]">
                      {check.title}
                    </h3>

                    <p className="mt-3 max-w-xl text-sm leading-7 text-[var(--color-sand)]">
                      {check.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <Section className="bg-[var(--color-sand)]">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <Eyebrow>Start Your Project</Eyebrow>

            <h2 className="mt-5 text-4xl text-[var(--color-ink)] sm:text-5xl">
              Ready to talk about your space?
            </h2>

            <p className="mt-5 text-base leading-8 text-[var(--color-charcoal)]">
              Tell us what you're planning and let's discuss how DESIGN DEN can
              bring it together.
            </p>

            <div className="mt-8">
              <Button to="/contact">Book a Consultation</Button>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}

export default Process;
