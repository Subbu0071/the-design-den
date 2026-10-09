import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

function ProjectCard({ project }) {
  return (
    <Link
      to={`/projects/${project.id}`}
      className="group block focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-dark-gold)] focus-visible:ring-offset-4"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-[var(--color-charcoal)]">
        <img
          src={project.image}
          alt={`${project.title} interior`}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover transition-transform duration-700 motion-reduce:transition-none group-hover:scale-105 motion-reduce:group-hover:scale-100"
        />

        <div className="absolute left-4 top-4 bg-[var(--color-ink)] px-3 py-2">
          <span className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[var(--color-sand)]">
            {project.status}
          </span>
        </div>
      </div>

      <div className="mt-5 flex items-start justify-between gap-6">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-warm-grey)]">
            {project.category}
          </p>

          <h3 className="mt-2 text-2xl text-[var(--color-ink)]">
            {project.title}
          </h3>

          <p className="mt-2 text-sm text-[var(--color-warm-grey)]">
            {project.location}
          </p>
        </div>

        <ArrowUpRight
          aria-hidden="true"
          className="mt-1 h-5 w-5 shrink-0 text-[var(--color-dark-gold)] transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 motion-reduce:transition-none"
        />
      </div>

      <p className="mt-4 max-w-xl text-sm leading-7 text-[var(--color-warm-grey)]">
        {project.description}
      </p>
    </Link>
  );
}

export default ProjectCard;
