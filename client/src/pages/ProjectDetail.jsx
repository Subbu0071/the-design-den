import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Link, useParams } from "react-router-dom";

import usePageTitle from "../utils/usePageTitle";

import Button from "../components/ui/Button";
import Container from "../components/ui/Container";
import Eyebrow from "../components/ui/Eyebrow";
import Section from "../components/ui/Section";

import projects from "../data/projects";

function ProjectDetail() {
  const { projectId } = useParams();

  const project = projects.find((item) => item.id === projectId);

  usePageTitle(
    project
      ? `${project.title} — DESIGN DEN`
      : "Project Not Found — DESIGN DEN",
    {
      description: project
        ? `${project.title}: explore the materials, finishes, and design details featured in this DESIGN DEN project photography.`
        : "The project you're looking for could not be found on the DESIGN DEN website.",
      image: project?.image,
    },
  );

  if (!project) {
    return (
      <Section className="bg-[var(--color-ivory)]">
        <Container>
          <div className="max-w-2xl py-8">
            <Eyebrow>Project Not Found</Eyebrow>

            <h1 className="mt-5 text-5xl text-[var(--color-ink)] sm:text-6xl">
              We couldn't find that project.
            </h1>

            <p className="mt-6 text-base leading-8 text-[var(--color-warm-grey)]">
              The project may have been moved or is not available yet.
            </p>

            <div className="mt-8">
              <Button to="/projects" variant="secondary">
                Back to Projects
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    );
  }

  return (
    <>
      <Section className="bg-[var(--color-ivory)] pb-10 sm:pb-14 lg:pb-16">
        <Container>
          <Link
            to="/projects"
            className="inline-flex min-h-11 items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-warm-grey)] transition-colors hover:text-[var(--color-ink)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-dark-gold)] focus-visible:ring-offset-4"
          >
            <ArrowLeft aria-hidden="true" className="h-4 w-4" />
            All Projects
          </Link>

          <div className="mt-10 grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-end lg:gap-16">
            <div className="max-w-3xl">
              <Eyebrow>{project.category}</Eyebrow>

              <h1 className="mt-5 text-5xl leading-[1.05] text-[var(--color-ink)] sm:text-6xl lg:text-7xl">
                {project.title}
              </h1>
            </div>

            <div className="max-w-xl lg:justify-self-end">
              <p className="text-base leading-8 text-[var(--color-warm-grey)] sm:text-lg">
                {project.description}
              </p>

              <p className="mt-5 text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-dark-gold)]">
                {project.status}
              </p>
            </div>
          </div>
        </Container>
      </Section>

      <Section className="bg-[var(--color-ivory)] pt-0 pb-12 sm:pb-16 lg:pb-20">
        <Container>
          <figure>
            <div className="overflow-hidden bg-[var(--color-charcoal)]">
              <img
                src={project.image}
                alt={`${project.title} — interior design details`}
                fetchPriority="high"
                decoding="async"
                className="h-auto max-h-[780px] w-full object-cover"
              />
            </div>

            <figcaption className="mt-4 flex flex-col gap-2 border-b border-[var(--color-sand)] pb-4 text-xs uppercase tracking-[0.12em] text-[var(--color-warm-grey)] sm:flex-row sm:items-center sm:justify-between">
              <span>{project.category}</span>
              <span>{project.location}</span>
            </figcaption>
          </figure>

          <div className="mt-12 grid gap-6 sm:mt-16 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
            <div>
              <Eyebrow>Project Overview</Eyebrow>

              <h2 className="mt-4 text-3xl text-[var(--color-ink)] sm:text-4xl">
                Thoughtful details.
                <span className="block italic text-[var(--color-dark-gold)]">
                  Considered spaces.
                </span>
              </h2>
            </div>

            <div className="max-w-3xl">
              <p className="text-base leading-8 text-[var(--color-warm-grey)] sm:text-lg sm:leading-9">
                {project.description}
              </p>

              <Link
                to="/projects"
                className="mt-7 inline-flex min-h-11 items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-ink)] transition-colors hover:text-[var(--color-dark-gold)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-dark-gold)] focus-visible:ring-offset-4"
              >
                Explore More Projects
                <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </Container>
      </Section>

      <Section className="bg-[var(--color-charcoal)]">
        <Container>
          <div className="mx-auto max-w-3xl py-4 text-center">
            <Eyebrow>
              <span className="text-[var(--color-sand)]">
                Start Your Project
              </span>
            </Eyebrow>

            <h2 className="mt-5 text-4xl text-[var(--color-ivory)] sm:text-5xl">
              Have a space in mind?
            </h2>

            <p className="mt-5 text-base leading-8 text-[var(--color-sand)]">
              Tell us what you're planning, and let's explore the possibilities
              together.
            </p>

            <div className="mt-8 flex justify-center">
              <Button to="/contact">Book a Consultation</Button>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}

export default ProjectDetail;
