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
      ? `DESIGN DEN — ${project.title}`
      : "DESIGN DEN — Project Not Found",
  );

  if (!project) {
    return (
      <Section className="bg-[var(--color-ivory)]">
        <Container>
          <div className="max-w-2xl">
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
      <Section className="bg-[var(--color-ivory)] pb-12 sm:pb-16">
        <Container>
          <Link
            to="/projects"
            className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-warm-grey)] transition-colors hover:text-[var(--color-ink)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-dark-gold)]"
          >
            ← Back to Projects
          </Link>

          <div className="mt-10 grid items-end gap-10 lg:grid-cols-[1fr_0.7fr] lg:gap-20">
            <div>
              <Eyebrow>{project.category}</Eyebrow>

              <h1 className="mt-5 text-5xl text-[var(--color-ink)] sm:text-6xl lg:text-7xl">
                {project.title}
              </h1>
            </div>

            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[var(--color-warm-grey)]">
                Location
              </p>

              <p className="mt-2 text-lg text-[var(--color-ink)]">
                {project.location}
              </p>
            </div>
          </div>
        </Container>
      </Section>

      <Section className="bg-[var(--color-ivory)] pt-6 sm:pt-8">
        <Container>
          <div className="overflow-hidden bg-[var(--color-charcoal)]">
            <img
              src={project.image}
              alt={`${project.title} interior concept`}
              className="aspect-[16/9] h-full w-full object-cover"
            />
          </div>

          <div className="mt-12 grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
            <div>
              <Eyebrow>Project Overview</Eyebrow>
            </div>

            <div>
              <p className="max-w-3xl text-lg leading-9 text-[var(--color-charcoal)]">
                {project.description}
              </p>

              <p className="mt-6 max-w-3xl text-sm leading-7 text-[var(--color-warm-grey)]">
                This page currently uses an AI-generated concept visual for
                website demonstration. It will be replaced with actual DESIGN
                DEN project photography and project information.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      <Section className="bg-[var(--color-sand)]">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <Eyebrow>Start Your Project</Eyebrow>

            <h2 className="mt-5 text-4xl text-[var(--color-ink)] sm:text-5xl">
              Have a space in mind?
            </h2>

            <p className="mt-5 text-base leading-8 text-[var(--color-charcoal)]">
              Tell us what you're planning and let's start a conversation.
            </p>

            <div className="mt-8">
              <Button to="/contact">Book a Consultation</Button>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}

export default ProjectDetail;
