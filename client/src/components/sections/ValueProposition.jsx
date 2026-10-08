import Container from "../ui/Container";
import Eyebrow from "../ui/Eyebrow";
import Section from "../ui/Section";

const values = [
  {
    number: "01",
    title: "Factory Direct",
    description:
      "A direct approach to interior execution, helping keep the process focused from design through delivery.",
  },
  {
    number: "02",
    title: "3 Layer QC",
    description:
      "Quality control is built into the process, with attention to the work at every stage.",
  },
  {
    number: "03",
    title: "Designed Around You",
    description:
      "Every space starts with how you live, what you need, and how you want your home to feel.",
  },
];

function ValueProposition() {
  return (
    <Section className="bg-[var(--color-ivory)]">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          {/* Introduction */}
          <div>
            <Eyebrow>Why Design Den</Eyebrow>

            <h2 className="mt-5 max-w-md text-4xl text-[var(--color-ink)] sm:text-5xl">
              Thoughtful design. Controlled execution.
            </h2>

            <p className="mt-6 max-w-md text-base leading-8 text-[var(--color-warm-grey)]">
              We bring together considered design, factory-direct execution, and
              quality control to create interiors that feel personal and
              purposeful.
            </p>
          </div>

          {/* Values */}
          <div className="divide-y divide-[var(--color-sand)] border-y border-[var(--color-sand)]">
            {values.map((value) => (
              <div
                key={value.number}
                className="grid gap-4 py-7 sm:grid-cols-[4rem_1fr] sm:gap-6"
              >
                <span className="font-body text-xs font-semibold tracking-[0.14em] text-[var(--color-gold)]">
                  {value.number}
                </span>

                <div>
                  <h3 className="text-2xl text-[var(--color-ink)]">
                    {value.title}
                  </h3>

                  <p className="mt-3 max-w-xl text-sm leading-7 text-[var(--color-warm-grey)]">
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}

export default ValueProposition;
