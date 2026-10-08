import { Link } from "react-router-dom";

import logo from "../../assets/brand/logo-monogram-gold.webp";

function Logo({ className = "", imageClassName = "" }) {
  return (
    <Link
      to="/"
      aria-label="DESIGN DEN home"
      className={`inline-flex items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-dark-gold)] focus-visible:ring-offset-4 ${className}`}
    >
      <img
        src={logo}
        alt="DESIGN DEN"
        className={`h-10 w-auto object-contain ${imageClassName}`}
      />
    </Link>
  );
}

export default Logo;
