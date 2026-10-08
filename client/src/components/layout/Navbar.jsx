import { Menu, X } from "lucide-react";
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import Logo from "../ui/Logo";

const navItems = [
  { label: "Projects", to: "/projects" },
  { label: "Services", to: "/services" },
  { label: "Process", to: "/process" },
  { label: "About", to: "/about" },
];

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--color-sand)]/40 bg-[var(--color-ivory)]/95 backdrop-blur">
      <div className="mx-auto flex min-h-20 max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10">
        {/* Logo */}
        <Logo />

        {/* Desktop Navigation */}
        <nav
          aria-label="Primary navigation"
          className="hidden items-center gap-8 md:flex"
        >
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `relative py-3 text-xs font-semibold uppercase tracking-[0.14em] transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-dark-gold)] focus-visible:ring-offset-4 ${
                  isActive
                    ? "text-[var(--color-ink)] after:absolute after:bottom-0 after:left-0 after:h-px after:w-full after:bg-[var(--color-dark-gold)]"
                    : "text-[var(--color-warm-grey)] hover:text-[var(--color-ink)]"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}

          <Link
            to="/contact"
            className="inline-flex min-h-11 items-center justify-center bg-[var(--color-ink)] px-5 text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-ivory)] transition-colors duration-200 hover:bg-[var(--color-charcoal)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-dark-gold)] focus-visible:ring-offset-4"
          >
            Get a Consultation
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          type="button"
          aria-label={
            isMenuOpen ? "Close navigation menu" : "Open navigation menu"
          }
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setIsMenuOpen((open) => !open)}
          className="inline-flex min-h-11 min-w-11 items-center justify-center text-[var(--color-ink)] transition-colors hover:text-[var(--color-dark-gold)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-dark-gold)] focus-visible:ring-offset-4 md:hidden"
        >
          {isMenuOpen ? (
            <X aria-hidden="true" className="h-6 w-6" />
          ) : (
            <Menu aria-hidden="true" className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav
          id="mobile-navigation"
          aria-label="Mobile navigation"
          className="border-t border-[var(--color-sand)]/40 bg-[var(--color-ivory)] px-5 py-5 md:hidden"
        >
          <div className="flex flex-col">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                onClick={closeMenu}
                className={({ isActive }) =>
                  `border-b border-[var(--color-sand)]/40 py-4 text-sm font-semibold uppercase tracking-[0.12em] transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-dark-gold)] ${
                    isActive
                      ? "text-[var(--color-ink)]"
                      : "text-[var(--color-warm-grey)] hover:text-[var(--color-ink)]"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}

            <Link
              to="/contact"
              onClick={closeMenu}
              className="mt-5 inline-flex min-h-12 items-center justify-center bg-[var(--color-ink)] px-5 text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-ivory)] transition-colors duration-200 hover:bg-[var(--color-charcoal)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-dark-gold)] focus-visible:ring-offset-2"
            >
              Get a Consultation
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}

export default Navbar;
