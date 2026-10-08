

import Button from "../ui/Button";
import Container from "../ui/Container";
import Eyebrow from "../ui/Eyebrow";
import Section from "../ui/Section";

import heroImage from "../../assets/images/hero-living-room.png";

function Hero() {
  return (
    <Section className="bg-[var(--color-ivory)] pt-16 lg:pt-20">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          {/* Content */}
          <div className="max-w-xl">
            <div className="mb-6 flex items-center gap-4">
              <span className="gold-line" />

              <Eyebrow>Factory Direct · 3 Layer QC</Eyebrow>
            </div>

            <h1 className="text-6xl tracking-[-0.02em] text-[var(--color-ink)] sm:text-7xl lg:text-8xl">
              Spaces designed
              <span className="block italic text-[var(--color-dark-gold)]">
                around how you live.
              </span>
            </h1>

            <p className="mt-7 max-w-lg text-base leading-8 text-[var(--color-warm-grey)] sm:text-lg">
              Thoughtful interiors, factory-direct execution, and quality
              control at every stage — designed to make your space feel
              distinctly yours.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button to="/projects">Explore Our Work</Button>

              <Button to="/contact" variant="secondary">
                Book a Consultation
              </Button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="aspect-[4/5] overflow-hidden bg-[var(--color-charcoal)]">
              <img
                src={heroImage}
                alt="AI-generated contemporary interior concept for demonstration"
                className="h-full w-full object-cover"
              />
            </div>

            <div className="absolute bottom-5 left-5 hidden bg-[var(--color-ink)] px-6 py-5 sm:block">
              <Eyebrow className="text-[var(--color-sand)]">
                Bangalore · Hyderabad · Chennai
              </Eyebrow>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}

export default Hero;
