import Button from "../ui/Button";
import Container from "../ui/Container";
import Eyebrow from "../ui/Eyebrow";
import Section from "../ui/Section";

function ConsultationCTA() {
  return (
    <Section className="bg-[var(--color-sand)]">
      <Container>
        <div className="mx-auto max-w-4xl text-center">
          <div className="flex justify-center">
            <Eyebrow>Start Your Project</Eyebrow>
          </div>

          <h2 className="mt-5 text-4xl text-[var(--color-ink)] sm:text-5xl lg:text-6xl">
            Let's design a space you'll love coming home to.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-[var(--color-charcoal)] sm:text-lg">
            Tell us what you're planning, and let's start the conversation about
            creating an interior that feels right for you.
          </p>

          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <Button to="/contact">Book a Consultation</Button>

            <Button to="/projects" variant="secondary">
              Explore Our Work
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
}

export default ConsultationCTA;
