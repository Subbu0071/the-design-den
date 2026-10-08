import Container from "../ui/Container";
import Eyebrow from "../ui/Eyebrow";
import Section from "../ui/Section";

const advantages = [
  {
    number: "01",
    title: "Factory Direct",
    description:
      "Furniture is manufactured through DESIGN DEN's factory network and delivered directly to the project site.",
  },
  {
    number: "02",
    title: "Material Focused",
    description:
      "Projects are built around specified materials and hardware, with attention to material quality before production and dispatch.",
  },
  {
    number: "03",
    title: "3 Layer QC",
    description:
      "Quality is checked at the factory, before transit, and again on-site after installation.",
  },
  {
    number: "04",
    title: "Founder-Led QC",
    description:
      "Founder and QC Head Sanjay personally oversees key quality checks through the project journey.",
  },
];

function ServiceAdvantages() {
  return (
    <Section className="bg-[var(--color-sand)]">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div>
            <Eyebrow>Why DESIGN DEN</Eyebrow>

            <h2 className="mt-5 max-w-lg text-4xl text-[var(--color-ink)] sm:text-5xl">
              A direct approach to better-controlled interiors.
            </h2>

            <p className="mt-6 max-w-lg text-base leading-8 text-[var(--color-charcoal)]">
              From manufacturing and material checks to installation and final
              inspection, the process is designed to keep quality visible at
              every important stage.
            </p>
          </div>

          <div className="divide-y divide-[var(--color-warm-grey)]/30 border-y border-[var(--color-warm-grey)]/30">
            {advantages.map((advantage) => (
              <div
                key={advantage.number}
                className="grid gap-4 py-7 sm:grid-cols-[4rem_1fr] sm:gap-6"
              >
                <span className="text-xs font-semibold tracking-[0.14em] text-[var(--color-dark-gold)]">
                  {advantage.number}
                </span>

                <div>
                  <h3 className="text-2xl text-[var(--color-ink)]">
                    {advantage.title}
                  </h3>

                  <p className="mt-3 max-w-xl text-sm leading-7 text-[var(--color-charcoal)]">
                    {advantage.description}
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

export default ServiceAdvantages;
