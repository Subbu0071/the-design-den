import { Link } from "react-router-dom";

const services = ["Modular Kitchen", "Wardrobes", "Full Home Interiors"];

const locations = ["Bangalore", "Hyderabad", "Chennai"];

function Footer() {
  return (
    <footer className="bg-[var(--color-charcoal)] text-[var(--color-ivory)]">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link
              to="/"
              className="inline-block text-3xl font-semibold tracking-wide"
            >
              DESIGN DEN
            </Link>

            <p className="mt-4 max-w-md text-sm leading-7 text-[var(--color-sand)]">
              Factory Direct | 3 Layer QC
            </p>

            <p className="mt-4 max-w-md text-sm leading-7 text-[var(--color-warm-grey)]">
              Thoughtful interiors with factory-direct execution and quality
              control at every stage.
            </p>

            <Link
              to="/contact"
              className="mt-7 inline-flex min-h-12 items-center justify-center bg-[var(--color-gold)] px-6 text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-ink)] transition-colors duration-300 hover:bg-[var(--color-sand)]"
            >
              Get a Consultation
            </Link>
          </div>

          {/* Services */}
          <div>
            <p className="section-label text-[var(--color-sand)]">Services</p>

            <ul className="mt-5 space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <Link
                    to="/services"
                    className="text-sm text-[var(--color-warm-grey)] transition-colors duration-200 hover:text-[var(--color-ivory)]"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Locations */}
          <div>
            <p className="section-label text-[var(--color-sand)]">Locations</p>

            <ul className="mt-5 space-y-3">
              {locations.map((location) => (
                <li
                  key={location}
                  className="text-sm text-[var(--color-warm-grey)]"
                >
                  {location}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-14 flex flex-col gap-4 border-t border-[var(--color-warm-grey)]/30 pt-6 text-xs text-[var(--color-warm-grey)] sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} DESIGN DEN. All rights reserved.</p>

          <div className="flex gap-5">
            <Link
              to="/about"
              className="transition-colors duration-200 hover:text-[var(--color-ivory)]"
            >
              About
            </Link>

            <Link
              to="/contact"
              className="transition-colors duration-200 hover:text-[var(--color-ivory)]"
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
