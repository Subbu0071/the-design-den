import Container from "../ui/Container";
import Eyebrow from "../ui/Eyebrow";
import Section from "../ui/Section";

const qualityPoints = [
  {
    number: "01",
    title: "Factory Direct",
    description:
      "A direct approach to execution keeps the process connected from design intent to the finished interior.",
  },
  {
    number: "02",
    title: "Quality at Every Stage",
    description:
      "Attention to quality is built into the journey rather than treated as an afterthought at the end.",
  },
  {
    number: "03",
    title: "Detail Focused",
    description:
      "The final result is shaped by careful attention to the details that make a space feel complete.",
  },
];

function QualitySection() {
  return (
    <Section className="bg-[var(--color-ink)]">
      <Container>
        <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-24">
          {/* Introduction */}
          <div>
            <Eyebrow className="text-[var(--color-sand)]">
              Factory Direct · 3 Layer QC
            </Eyebrow>

            <h2 className="mt-5 max-w-lg text-4xl text-[var(--color-ivory)] sm:text-5xl">
              Quality isn't a final step. It's part of the process.
            </h2>

            <p className="mt-6 max-w-lg text-base leading-8 text-[var(--color-warm-grey)]">
              Our approach brings design and execution together with a focus on
              quality throughout the journey.
            </p>
          </div>

          {/* Quality Points */}
          <div className="divide-y divide-[var(--color-warm-grey)]/30 border-y border-[var(--color-warm-grey)]/30">
            {qualityPoints.map((point) => (
              <div
                key={point.number}
                className="grid gap-4 py-7 sm:grid-cols-[4rem_1fr] sm:gap-6"
              >
                <span className="text-xs font-semibold tracking-[0.14em] text-[var(--color-gold)]">
                  {point.number}
                </span>

                <div>
                  <h3 className="text-2xl text-[var(--color-ivory)]">
                    {point.title}
                  </h3>

                  <p className="mt-3 max-w-xl text-sm leading-7 text-[var(--color-warm-grey)]">
                    {point.description}
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

export default QualitySection;
