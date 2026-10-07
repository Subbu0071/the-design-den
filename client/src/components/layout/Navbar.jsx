import { useState } from "react";
import { Menu, X } from "lucide-react";
import { NavLink } from "react-router-dom";

import logo from "../../assets/brand/logo.png";

const navLinks = [
  { label: "Projects", path: "/projects" },
  { label: "Services", path: "/services" },
  { label: "About", path: "/about" },
  { label: "Process", path: "/process" },
  { label: "Contact", path: "/contact" },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => {
    setIsOpen(false);
  };

  const navLinkClass = ({ isActive }) =>
    `text-xs font-medium uppercase tracking-[0.14em] transition-colors duration-300 ${
      isActive
        ? "text-[var(--color-gold)]"
        : "text-[var(--color-ink)] hover:text-[var(--color-gold)]"
    }`;

  return (
    <header className="sticky top-0 z-50 border-b border-black/10 bg-[var(--color-ivory)]/95 backdrop-blur-md">
      <nav
        className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10"
        aria-label="Main navigation"
      >
        {/* Logo */}
        <NavLink
          to="/"
          className="flex items-center"
          aria-label="DESIGN DEN home"
          onClick={closeMenu}
        >
          <img
            src={logo}
            alt="DESIGN DEN — Factory Direct | 3 Layer QC"
            className="h-14 w-auto object-contain"
          />
        </NavLink>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => (
            <NavLink key={link.path} to={link.path} className={navLinkClass}>
              {link.label}
            </NavLink>
          ))}

          <NavLink
            to="/contact"
            className="bg-[var(--color-gold)] px-5 py-3 text-xs font-semibold uppercase tracking-[0.12em] text-[var(--color-ink)] transition-colors duration-300 hover:bg-[var(--color-dark-gold)]"
          >
            Get a Consultation
          </NavLink>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          className="flex h-11 w-11 items-center justify-center text-[var(--color-ink)] lg:hidden"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {isOpen && (
        <div
          id="mobile-navigation"
          className="border-t border-black/10 bg-[var(--color-ivory)] lg:hidden"
        >
          <div className="mx-auto flex max-w-7xl flex-col px-5 py-5 sm:px-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={closeMenu}
                className={({ isActive }) =>
                  `border-b border-black/10 py-4 text-sm font-medium uppercase tracking-[0.14em] transition-colors ${
                    isActive
                      ? "text-[var(--color-gold)]"
                      : "text-[var(--color-ink)]"
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}

            <NavLink
              to="/contact"
              onClick={closeMenu}
              className="mt-5 bg-[var(--color-gold)] px-5 py-4 text-center text-xs font-semibold uppercase tracking-[0.12em] text-[var(--color-ink)]"
            >
              Get a Consultation
            </NavLink>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
