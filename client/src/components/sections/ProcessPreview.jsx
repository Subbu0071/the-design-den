import Container from "../ui/Container";
import Eyebrow from "../ui/Eyebrow";
import Section from "../ui/Section";

const steps = [
  {
    number: "01",
    title: "Consultation",
    description:
      "We begin by understanding your space, lifestyle, requirements, and design preferences.",
  },
  {
    number: "02",
    title: "Design",
    description:
      "Your requirements are translated into a considered interior direction tailored to your home.",
  },
  {
    number: "03",
    title: "Execution",
    description:
      "The approved design moves into execution with attention to detail throughout the process.",
  },
  {
    number: "04",
    title: "Quality Check",
    description:
      "The finished work is reviewed with quality and detail in focus before the project is handed over.",
  },
];

function ProcessPreview() {
  return (
    <Section className="bg-[var(--color-sand)]">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div>
            <Eyebrow>Our Process</Eyebrow>

            <h2 className="mt-5 max-w-md text-4xl text-[var(--color-ink)] sm:text-5xl">
              From first conversation to finished space.
            </h2>

            <p className="mt-6 max-w-md text-base leading-8 text-[var(--color-warm-grey)]">
              A clear process keeps the journey focused, transparent, and
              centered around your home.
            </p>
          </div>

          <div className="grid gap-x-8 gap-y-10 sm:grid-cols-2">
            {steps.map((step) => (
              <div
                key={step.number}
                className="border-t border-[var(--color-warm-grey)]/40 pt-5"
              >
                <span className="text-xs font-semibold tracking-[0.14em] text-[var(--color-dark-gold)]">
                  {step.number}
                </span>

                <h3 className="mt-4 text-2xl text-[var(--color-ink)]">
                  {step.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-[var(--color-warm-grey)]">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}

export default ProcessPreview;
