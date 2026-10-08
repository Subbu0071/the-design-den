import { Link } from "react-router-dom";
import usePageTitle from "../utils/usePageTitle";

function NotFound() {
    usePageTitle("Page Not Found — DESIGN DEN", {
      description:
        "The page you're looking for could not be found on the DESIGN DEN website.",
    });
  return (
    <section className="flex min-h-[70vh] items-center justify-center bg-[var(--color-ivory)] px-5 py-20 sm:px-8">
      <div className="max-w-2xl text-center">
        <p className="section-label text-[var(--color-warm-grey)]">
          Page Not Found
        </p>

        <h1 className="mt-5 text-7xl text-[var(--color-ink)] sm:text-8xl">
          404
        </h1>

        <p className="mx-auto mt-6 max-w-lg text-base leading-8 text-[var(--color-warm-grey)] sm:text-lg">
          The page you're looking for doesn't exist or may have been moved.
        </p>

        <Link
          to="/"
          className="mt-9 inline-flex min-h-12 items-center justify-center bg-[var(--color-gold)] px-7 text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-ink)] transition-colors duration-300 hover:bg-[var(--color-dark-gold)]"
        >
          Back to Home
        </Link>
      </div>
    </section>
  );
}

export default NotFound;
