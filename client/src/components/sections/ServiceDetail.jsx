import { ArrowUpRight } from "lucide-react";

import Button from "../ui/Button";
import Container from "../ui/Container";
import Eyebrow from "../ui/Eyebrow";
import Section from "../ui/Section";

function ServiceDetail({ service, index }) {
  const isDark = index % 2 === 1;

  return (
    <Section
      id={service.id}
      className={
        isDark
          ? "bg-[var(--color-charcoal)] text-[var(--color-ivory)]"
          : "bg-[var(--color-ivory)]"
      }
    >
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div>
            <Eyebrow
              className={isDark ? "text-[var(--color-sand)]" : undefined}
            >
              Service {String(index + 1).padStart(2, "0")}
            </Eyebrow>

            <h2
              className={`mt-5 max-w-lg text-4xl sm:text-5xl ${
                isDark ? "text-[var(--color-ivory)]" : "text-[var(--color-ink)]"
              }`}
            >
              {service.title}
            </h2>
          </div>

          <div>
            <p
              className={`max-w-3xl text-lg leading-9 ${
                isDark
                  ? "text-[var(--color-sand)]"
                  : "text-[var(--color-charcoal)]"
              }`}
            >
              {service.description}
            </p>

            <div
              className={`mt-8 border-y py-6 ${
                isDark
                  ? "border-[var(--color-warm-grey)]/40"
                  : "border-[var(--color-warm-grey)]/30"
              }`}
            >
              <p
                className={`text-xs font-semibold uppercase tracking-[0.16em] ${
                  isDark
                    ? "text-[var(--color-sand)]"
                    : "text-[var(--color-warm-grey)]"
                }`}
              >
                Available Options
              </p>

              <div className="mt-5 flex flex-wrap gap-3">
                {service.options.map((option) => (
                  <span
                    key={option}
                    className={`inline-flex items-center border px-4 py-2 text-sm ${
                      isDark
                        ? "border-[var(--color-warm-grey)]/50 text-[var(--color-ivory)]"
                        : "border-[var(--color-sand)] text-[var(--color-charcoal)]"
                    }`}
                  >
                    {option}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-8">
              <Button
                to={`/contact?service=${service.id}`}
                variant={isDark ? "light" : "secondary"}
              >
                Discuss This Service
                <ArrowUpRight aria-hidden="true" className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}

export default ServiceDetail;
