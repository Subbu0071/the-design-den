import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

import Container from "../ui/Container";
import Eyebrow from "../ui/Eyebrow";
import Section from "../ui/Section";

import contemporaryLounge from "../../assets/images/projects/contemporary-lounge-01.webp";
import warmGeometryKitchen from "../../assets/images/projects/warm-geometry-kitchen.jpeg";
import statementWardrobe from "../../assets/images/projects/statement-wardrobe-01.webp";

const projects = [
  {
    id: "contemporary-lounge",
    title: "Contemporary Lounge",
    category: "Living Spaces",
    image: contemporaryLounge,
  },
  {
    id: "warm-geometry-kitchen",
    title: "Warm Geometric Kitchen",
    category: "Modular Kitchens",
    image: warmGeometryKitchen,
  },
  {
    id: "statement-wardrobe",
    title: "Statement Bedroom Wardrobe",
    category: "Wardrobes",
    image: statementWardrobe,
  },
];

function FeaturedProjects() {
  return (
    <Section className="bg-[var(--color-charcoal)]">
      <Container>
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <Eyebrow className="text-[var(--color-sand)]">
              Selected Work
            </Eyebrow>

            <h2 className="mt-5 max-w-xl text-4xl text-[var(--color-ivory)] sm:text-5xl">
              Spaces made to feel like home.
            </h2>
          </div>

          <Link
            to="/projects"
            className="inline-flex min-h-11 w-fit items-center gap-2 border-b border-[var(--color-gold)] pb-2 text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-sand)] transition-colors duration-200 hover:text-[var(--color-ivory)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-gold)] focus-visible:ring-offset-4 focus-visible:ring-offset-[var(--color-charcoal)]"
          >
            View All Projects
            <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <article key={project.id} className="group">
              <Link
                to={`/projects/${project.id}`}
                aria-label={`View ${project.title} project`}
                className="block focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-gold)] focus-visible:ring-offset-4 focus-visible:ring-offset-[var(--color-charcoal)]"
              >
                <div className="aspect-[4/5] overflow-hidden bg-[var(--color-ink)]">
                  <img
                    src={project.image}
                    alt={`${project.title} interior`}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover transition-transform duration-500 motion-safe:group-hover:scale-[1.03]"
                  />
                </div>

                <div className="mt-5">
                  <div className="flex items-center justify-between gap-3">
                    <p className="section-label text-[var(--color-gold)]">
                      {project.category}
                    </p>

                    <ArrowUpRight
                      aria-hidden="true"
                      className="h-4 w-4 shrink-0 text-[var(--color-gold)] transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                    />
                  </div>

                  <h3 className="mt-3 text-2xl text-[var(--color-ivory)]">
                    {project.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-[var(--color-sand)]">
                    Explore the design details and interior finishes.
                  </p>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
}

export default FeaturedProjects;
