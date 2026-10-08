import { Link } from "react-router-dom";
import Logo from "../ui/Logo";
import siteConfig from "../../config/site";
import services from "../../data/services";

function Footer() {
  const { brand, contact, locations } = siteConfig;

  return (
    <footer className="bg-[var(--color-charcoal)] text-[var(--color-ivory)]">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Logo imageClassName="h-14" />

            <p className="mt-4 max-w-md text-sm leading-7 text-[var(--color-sand)]">
              {brand.positioning}
            </p>

            <p className="mt-4 max-w-md text-sm leading-7 text-[var(--color-warm-grey)]">
              Thoughtful interiors with factory-direct execution and quality
              control at every stage.
            </p>

            <div className="mt-6 space-y-2 text-sm text-[var(--color-warm-grey)]">
              <a
                href={contact.phoneHref}
                className="block w-fit transition-colors duration-200 hover:text-[var(--color-ivory)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-ivory)]"
              >
                {contact.phone}
              </a>

              <a
                href={contact.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="block w-fit transition-colors duration-200 hover:text-[var(--color-ivory)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-ivory)]"
              >
                WhatsApp
              </a>
            </div>

            <Link
              to="/contact"
              className="mt-7 inline-flex min-h-12 items-center justify-center bg-[var(--color-gold)] px-6 text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-ink)] transition-colors duration-300 hover:bg-[var(--color-sand)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-ivory)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-charcoal)]"
            >
              Get a Consultation
            </Link>
          </div>

          {/* Services */}
          <div>
            <p className="section-label text-[var(--color-sand)]">Services</p>

            <ul className="mt-5 space-y-3">
              {services.slice(0, 4).map((service) => (
                <li key={service.id}>
                  <Link
                    to={`/services#${service.id}`}
                    className="text-sm text-[var(--color-warm-grey)] transition-colors duration-200 hover:text-[var(--color-ivory)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-ivory)]"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Locations */}
          <div>
            <p className="section-label text-[var(--color-sand)]">Locations</p>

            {locations.status === "pending" ? (
              <p className="mt-5 max-w-xs text-sm leading-6 text-[var(--color-warm-grey)]">
                Locations will be updated soon.
              </p>
            ) : (
              <ul className="mt-5 space-y-3">
                {locations.cities.map((location) => (
                  <li
                    key={location}
                    className="text-sm text-[var(--color-warm-grey)]"
                  >
                    {location}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-14 flex flex-col gap-4 border-t border-[var(--color-warm-grey)]/30 pt-6 text-xs text-[var(--color-warm-grey)] sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {brand.name}. All rights reserved.
          </p>

          <div className="flex gap-5">
            <Link
              to="/about"
              className="transition-colors duration-200 hover:text-[var(--color-ivory)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-ivory)]"
            >
              About
            </Link>

            <Link
              to="/contact"
              className="transition-colors duration-200 hover:text-[var(--color-ivory)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-ivory)]"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
