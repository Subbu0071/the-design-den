import usePageTitle from "../utils/usePageTitle";

import Container from "../components/ui/Container";
import Eyebrow from "../components/ui/Eyebrow";
import Section from "../components/ui/Section";
import ProjectCard from "../components/ui/ProjectCard";

import projects from "../data/projects";

function Projects() {
  usePageTitle("DESIGN DEN — Projects");

  return (
    <>
      <Section className="bg-[var(--color-ivory)] pb-14 sm:pb-16 lg:pb-20">
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
              Explore a selection of interior concepts across kitchens,
              wardrobes, and complete home interiors.
            </p>
          </div>
        </Container>
      </Section>

      <Section className="bg-[var(--color-ivory)] pt-6 sm:pt-8 lg:pt-10">
        <Container>
          <div className="grid gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>

          <div className="mt-16 border-t border-[var(--color-sand)] pt-8">
            <p className="text-sm leading-7 text-[var(--color-warm-grey)]">
              Images shown here are AI-generated concept visuals for website
              demonstration and will be replaced with actual DESIGN DEN project
              photography.
            </p>
          </div>
        </Container>
      </Section>
    </>
  );
}

export default Projects;
