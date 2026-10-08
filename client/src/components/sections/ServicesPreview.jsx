import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

import Container from "../ui/Container";
import Eyebrow from "../ui/Eyebrow";
import Section from "../ui/Section";

const services = [
  {
    number: "01",
    title: "Modular Kitchen",
    description:
      "Functional kitchen spaces designed around your routines, storage needs, and style.",
  },
  {
    number: "02",
    title: "Wardrobes",
    description:
      "Thoughtfully planned storage that brings order, function, and a refined finish to your space.",
  },
  {
    number: "03",
    title: "Full Home Interiors",
    description:
      "A coordinated interior approach for creating a home that feels cohesive from room to room.",
  },
];

function ServicesPreview() {
  return (
    <Section className="bg-[var(--color-ivory)]">
      <Container>
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <Eyebrow>What We Do</Eyebrow>

            <h2 className="mt-5 max-w-xl text-4xl text-[var(--color-ink)] sm:text-5xl">
              Interiors designed around the way you live.
            </h2>
          </div>

          <Link
            to="/services"
            className="inline-flex w-fit items-center gap-2 border-b border-[var(--color-gold)] pb-2 text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-ink)] transition-colors duration-200 hover:text-[var(--color-dark-gold)]"
          >
            Explore Services
            <ArrowUpRight size={15} strokeWidth={1.8} />
          </Link>
        </div>

        <div className="mt-12 grid border-y border-[var(--color-sand)] md:grid-cols-3 md:divide-x md:divide-[var(--color-sand)]">
          {services.map((service) => (
            <Link
              key={service.number}
              to="/services"
              className="group border-b border-[var(--color-sand)] p-7 transition-colors duration-300 hover:bg-[var(--color-sand)]/30 md:border-b-0 md:p-9"
            >
              <div className="flex items-start justify-between gap-4">
                <span className="text-xs font-semibold tracking-[0.14em] text-[var(--color-gold)]">
                  {service.number}
                </span>

                <ArrowUpRight
                  size={18}
                  strokeWidth={1.6}
                  className="text-[var(--color-warm-grey)] transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                />
              </div>

              <h3 className="mt-12 text-2xl text-[var(--color-ink)]">
                {service.title}
              </h3>

              <p className="mt-4 text-sm leading-7 text-[var(--color-warm-grey)]">
                {service.description}
              </p>

              <span className="mt-7 block text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-dark-gold)]">
                Learn More
              </span>
            </Link>
          ))}
        </div>
      </Container>
    </Section>
  );
}

export default ServicesPreview;
