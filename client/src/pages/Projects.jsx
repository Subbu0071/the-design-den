import { useMemo, useState } from "react";

import usePageTitle from "../utils/usePageTitle";

import Container from "../components/ui/Container";
import Eyebrow from "../components/ui/Eyebrow";
import Section from "../components/ui/Section";
import ProjectCard from "../components/ui/ProjectCard";

import projects from "../data/projects";

const categories = [
  "All Projects",
  "Living Spaces",
  "Modular Kitchens",
  "Wardrobes",
  "TV Units",
  "Bathroom Interiors",
];

function Projects() {
  const [activeCategory, setActiveCategory] = useState("All Projects");

  usePageTitle("Projects — DESIGN DEN", {
    description:
      "Explore DESIGN DEN's interior photography across kitchens, wardrobes, living spaces, TV units, and bathroom interiors.",
  });

  const filteredProjects = useMemo(() => {
    if (activeCategory === "All Projects") {
      return projects;
    }

    return projects.filter(
      (project) => project.filterCategory === activeCategory,
    );
  }, [activeCategory]);

  return (
    <>
      <Section className="bg-[var(--color-ivory)] pb-12 sm:pb-16 lg:pb-20">
        <Container>
          <div className="max-w-3xl">
            <Eyebrow>Selected Work</Eyebrow>

            <h1 className="mt-5 text-5xl text-[var(--color-ink)] sm:text-6xl lg:text-7xl">
              Spaces made for
              <span className="block italic text-[var(--color-dark-gold)]">
                everyday living.
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[var(--color-warm-grey)] sm:text-lg">
              Explore thoughtful interiors, considered finishes, and practical
              design details across the spaces we create.
            </p>
          </div>
        </Container>
      </Section>

      <Section className="bg-[var(--color-ivory)] pt-2 sm:pt-4 lg:pt-6">
        <Container>
          <div
            aria-label="Filter projects by category"
            className="border-y border-[var(--color-sand)] py-4"
          >
            <div className="flex gap-2 overflow-x-auto pb-1 sm:flex-wrap sm:gap-3">
              {categories.map((category) => {
                const isActive = activeCategory === category;

                return (
                  <button
                    key={category}
                    type="button"
                    aria-pressed={isActive}
                    onClick={() => setActiveCategory(category)}
                    className={`min-h-11 shrink-0 border px-4 py-2 text-xs font-semibold uppercase tracking-[0.1em] transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-dark-gold)] focus-visible:ring-offset-2 ${
                      isActive
                        ? "border-[var(--color-ink)] bg-[var(--color-ink)] text-[var(--color-ivory)]"
                        : "border-[var(--color-sand)] bg-transparent text-[var(--color-warm-grey)] hover:border-[var(--color-dark-gold)] hover:text-[var(--color-ink)]"
                    }`}
                  >
                    {category}
                  </button>
                );
              })}
            </div>
          </div>

          <div
            className="flex items-center justify-between gap-4 py-6"
            aria-live="polite"
          >
            <p className="text-sm text-[var(--color-warm-grey)]">
              Showing{" "}
              <span className="font-semibold text-[var(--color-ink)]">
                {filteredProjects.length}
              </span>{" "}
              {filteredProjects.length === 1 ? "project" : "projects"}
            </p>

            <p className="hidden text-xs uppercase tracking-[0.12em] text-[var(--color-warm-grey)] sm:block">
              Design details, thoughtfully considered
            </p>
          </div>

          {filteredProjects.length > 0 ? (
            <div className="grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3 lg:gap-y-16">
              {filteredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          ) : (
            <p className="py-16 text-center text-[var(--color-warm-grey)]">
              No projects are available in this category yet.
            </p>
          )}
        </Container>
      </Section>

      <Section className="bg-[var(--color-charcoal)]">
        <Container>
          <div className="mx-auto max-w-3xl py-4 text-center">
            <Eyebrow className="text-[var(--color-sand)]">
              Start Your Project
            </Eyebrow>

            <h2 className="mt-5 text-4xl text-[var(--color-ivory)] sm:text-5xl">
              Have a space in mind?
            </h2>

            <p className="mt-5 text-base leading-8 text-[var(--color-sand)]">
              Tell us what you're planning, and let's explore the possibilities
              together.
            </p>

            <div className="mt-8">
              <a
                href="/contact"
                className="inline-flex min-h-12 items-center justify-center border border-[var(--color-sand)] px-6 py-3 text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-ivory)] transition-colors duration-200 hover:bg-[var(--color-ivory)] hover:text-[var(--color-ink)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-sand)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-charcoal)]"
              >
                Book a Consultation
              </a>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}

export default Projects;
