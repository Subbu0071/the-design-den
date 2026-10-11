import { ArrowUpRight, Check } from "lucide-react";
import Container from "../ui/Container";
import Eyebrow from "../ui/Eyebrow";
import Section from "../ui/Section";

function ServiceDetail({
  service,
  index,
  isSelected,
  selectedOptions,
  onToggleService,
  onToggleOption,
}) {
  const isDark = index % 2 === 1;

  const headingColor = isDark
    ? "text-[var(--color-ivory)]"
    : "text-[var(--color-ink)]";

  const bodyColor = isDark
    ? "text-[var(--color-sand)]"
    : "text-[var(--color-charcoal)]";

  const mutedColor = isDark
    ? "text-[var(--color-sand)]"
    : "text-[var(--color-warm-grey)]";

  const cardBase = isDark
    ? "border-[var(--color-warm-grey)]/40 bg-[var(--color-ink)]"
    : "border-[var(--color-sand)] bg-[var(--color-white)]";

  const selectedCard = isDark
    ? "border-[var(--color-gold)] bg-[var(--color-gold)]/10"
    : "border-[var(--color-dark-gold)] bg-[var(--color-dark-gold)]/5";

  return (
    <Section
      id={service.id}
      className={`scroll-mt-24 ${
        isDark
          ? "bg-[var(--color-charcoal)] text-[var(--color-ivory)]"
          : "bg-[var(--color-ivory)]"
      }`}
    >
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div>
            <Eyebrow
              className={isDark ? "text-[var(--color-sand)]" : undefined}
            >
              Service {String(index + 1).padStart(2, "0")}
            </Eyebrow>

            <h2
              className={`mt-5 max-w-lg text-4xl sm:text-5xl ${headingColor}`}
            >
              {service.title}
            </h2>

            <p className={`mt-5 max-w-lg text-sm leading-7 ${mutedColor}`}>
              {service.shortDescription}
            </p>

            <button
              type="button"
              aria-pressed={isSelected}
              onClick={onToggleService}
              className={`mt-7 inline-flex min-h-12 items-center justify-center gap-3 border px-5 py-3 text-sm font-semibold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-gold)] focus-visible:ring-offset-4 ${
                isSelected
                  ? selectedCard
                  : `${cardBase} ${bodyColor} hover:border-[var(--color-dark-gold)]`
              }`}
            >
              <span
                className={`flex h-5 w-5 items-center justify-center border ${
                  isSelected
                    ? "border-[var(--color-dark-gold)] bg-[var(--color-dark-gold)] text-white"
                    : "border-current"
                }`}
                aria-hidden="true"
              >
                {isSelected && <Check className="h-3.5 w-3.5" />}
              </span>

              {isSelected ? "Service Selected" : "Select This Service"}
            </button>

            <p className={`mt-3 text-xs leading-5 ${mutedColor}`}>
              You can select multiple services for the same consultation.
            </p>
          </div>

          <div>
            <p
              className={`max-w-3xl text-base leading-8 sm:text-lg sm:leading-9 ${bodyColor}`}
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
              <div className="flex flex-wrap items-end justify-between gap-3">
                <div>
                  <p
                    className={`text-xs font-semibold uppercase tracking-[0.16em] ${mutedColor}`}
                  >
                    Explore Your Options
                  </p>

                  <p className={`mt-2 text-sm leading-6 ${bodyColor}`}>
                    Explore the styles below and select any options you would
                    like to discuss. You can change your choices later.
                  </p>
                </div>

                {selectedOptions.length > 0 && (
                  <span className="text-xs font-semibold text-[var(--color-gold)]">
                    {selectedOptions.length} selected
                  </span>
                )}
              </div>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {service.options.map((option, optionIndex) => {
                  const isOptionSelected = selectedOptions.includes(
                    option.name,
                  );

                  return (
                    <button
                      key={option.name}
                      type="button"
                      aria-pressed={isOptionSelected}
                      aria-label={`${option.name}: ${
                        isOptionSelected ? "selected" : "select option"
                      }`}
                      onClick={() => onToggleOption(option.name)}
                      className={`group relative overflow-hidden border text-left transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-gold)] focus-visible:ring-offset-2 ${
                        isOptionSelected
                          ? selectedCard
                          : `${cardBase} hover:border-[var(--color-dark-gold)]`
                      }`}
                    >
                      <div className="relative aspect-[5/3] overflow-hidden bg-[var(--color-sand)]/50">
                        <img
                          src={option.image}
                          alt={option.name}
                          loading="lazy"
                          decoding="async"
                          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                          onError={(event) => {
                            event.currentTarget.style.display = "none";
                          }}
                        />

                        <span
                          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"
                          aria-hidden="true"
                        />

                        <span className="absolute left-3 top-3 z-10 bg-[var(--color-ivory)]/95 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-[var(--color-ink)]">
                          Option {String(optionIndex + 1).padStart(2, "0")}
                        </span>

                        <span
                          className={`absolute right-3 top-3 z-10 flex h-7 w-7 items-center justify-center border ${
                            isOptionSelected
                              ? "border-[var(--color-dark-gold)] bg-[var(--color-dark-gold)] text-white"
                              : "border-[var(--color-warm-grey)]/50 bg-[var(--color-ivory)]/95 text-transparent"
                          }`}
                          aria-hidden="true"
                        >
                          {isOptionSelected && <Check className="h-4 w-4" />}
                        </span>
                      </div>

                      <div className="p-4 sm:p-5">
                        <h3
                          className={`text-base font-semibold leading-6 ${headingColor}`}
                        >
                          {option.name}
                        </h3>

                        <p
                          className={`mt-2 text-xs leading-6 sm:text-sm ${mutedColor}`}
                        >
                          {option.description}
                        </p>

                        <span
                          className={`mt-4 inline-flex items-center gap-2 text-xs font-semibold ${
                            isOptionSelected
                              ? "text-[var(--color-dark-gold)]"
                              : mutedColor
                          }`}
                        >
                          {isOptionSelected ? "Selected" : "Select this option"}
                          {isOptionSelected && (
                            <Check aria-hidden="true" className="h-3.5 w-3.5" />
                          )}
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            <a
              href="#service-selection-summary"
              onClick={(event) => {
                event.preventDefault();
                document
                  .getElementById("service-selection-summary")
                  ?.scrollIntoView({ behavior: "smooth", block: "start" });
              }}
              className={`mt-7 inline-flex items-center text-sm font-semibold ${
                isDark
                  ? "text-[var(--color-sand)] hover:text-[var(--color-ivory)]"
                  : "text-[var(--color-dark-gold)] hover:text-[var(--color-ink)]"
              }`}
            >
              Review your selection
              <ArrowUpRight aria-hidden="true" className="ml-2 h-4 w-4" />
            </a>
          </div>
        </div>
      </Container>
    </Section>
  );
}

export default ServiceDetail;
