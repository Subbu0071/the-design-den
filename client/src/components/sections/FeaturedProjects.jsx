import { Link } from "react-router-dom";

import Container from "../ui/Container";
import Eyebrow from "../ui/Eyebrow";
import Section from "../ui/Section";

import heroImage from "../../assets/images/hero-living-room.webp";

const projects = [
  {
    title: "Contemporary Living",
    category: "Living Room Concept",
    image: heroImage,
  },
  {
    title: "Warm Modern Kitchen",
    category: "Kitchen Concept",
    image: heroImage,
  },
  {
    title: "Calm Urban Home",
    category: "Full Home Concept",
    image: heroImage,
  },
];

function FeaturedProjects() {
  return (
    <Section className="bg-[var(--color-charcoal)]">
      <Container>
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <Eyebrow className="text-[var(--color-sand)]">
              Selected Projects
            </Eyebrow>

            <h2 className="mt-5 max-w-xl text-4xl text-[var(--color-ivory)] sm:text-5xl">
              Spaces made to feel like home.
            </h2>
          </div>

          <Link
            to="/projects"
            className="inline-flex w-fit border-b border-[var(--color-gold)] pb-2 text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-sand)] transition-colors duration-200 hover:text-[var(--color-ivory)]"
          >
            View All Projects
          </Link>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {projects.map((project) => (
            <article key={project.title} className="group">
              <div className="aspect-[4/5] overflow-hidden bg-[var(--color-ink)]">
                <img
                  src={project.image}
                  alt={`AI-generated ${project.category.toLowerCase()} concept`}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="mt-5">
                <p className="section-label text-[var(--color-gold)]">
                  Concept Preview
                </p>

                <h3 className="mt-2 text-2xl text-[var(--color-ivory)]">
                  {project.title}
                </h3>

                <p className="mt-2 text-sm text-[var(--color-warm-grey)]">
                  {project.category}
                </p>
              </div>
            </article>
          ))}
        </div>

        <p className="mt-10 max-w-2xl text-xs leading-6 text-[var(--color-warm-grey)]">
          Images shown here are AI-generated concept visuals for website
          demonstration and will be replaced with actual DESIGN DEN projects.
        </p>
      </Container>
    </Section>
  );
}

export default FeaturedProjects;
