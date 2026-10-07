import heroImage from "../../assets/images/hero-living-room.png";
function Hero() {
  return (
    <section className="bg-[var(--color-ivory)]">
      <div className="mx-auto grid min-h-[calc(100vh-5rem)] max-w-7xl items-center gap-12 px-5 py-16 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16 lg:px-10 lg:py-20">
        {/* Content */}
        <div className="max-w-xl">
          <div className="mb-6 flex items-center gap-4">
            <span className="gold-line" />

            <p className="section-label text-[var(--color-warm-grey)]">
              Factory Direct · 3 Layer QC
            </p>
          </div>

          <h1 className="text-6xl tracking-[-0.02em] text-[var(--color-ink)] sm:text-7xl lg:text-8xl">
            Spaces designed
            <span className="block italic text-[var(--color-dark-gold)]">
              around how you live.
            </span>
          </h1>

          <p className="mt-7 max-w-lg text-base leading-8 text-[var(--color-warm-grey)] sm:text-lg">
            Thoughtful interiors, factory-direct execution, and quality control
            at every stage — designed to make your space feel distinctly yours.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href="#projects"
              className="inline-flex min-h-12 items-center justify-center bg-[var(--color-gold)] px-6 text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-ink)] transition-colors duration-300 hover:bg-[var(--color-dark-gold)]"
            >
              Explore Our Work
            </a>

            <a
              href="#contact"
              className="inline-flex min-h-12 items-center justify-center border border-[var(--color-ink)] px-6 text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-ink)] transition-colors duration-300 hover:bg-[var(--color-ink)] hover:text-[var(--color-ivory)]"
            >
              Book a Consultation
            </a>
          </div>
        </div>

        {/* Image placeholder */}
        <div className="relative">
          <div className="aspect-[4/5] overflow-hidden bg-[var(--color-charcoal)]">
            <img
              src={heroImage}
              alt="Contemporary luxury living room designed by The Design Den"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute bottom-5 left-5 hidden bg-[var(--color-ink)] px-6 py-5 sm:block">
            {" "}
            <p className="section-label text-[var(--color-sand)]">
              Bangalore · Hyderabad · Chennai
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
