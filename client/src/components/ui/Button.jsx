import { Link } from "react-router-dom";

const baseStyles =
  "inline-flex min-h-12 items-center justify-center px-6 text-xs font-semibold uppercase tracking-[0.14em] transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-dark-gold)] focus-visible:ring-offset-2";

const variants = {
  primary:
    "bg-[var(--color-gold)] text-[var(--color-ink)] hover:bg-[var(--color-dark-gold)]",

  secondary:
    "border border-[var(--color-ink)] text-[var(--color-ink)] hover:bg-[var(--color-ink)] hover:text-[var(--color-ivory)]",

  dark: "bg-[var(--color-ink)] text-[var(--color-ivory)] hover:bg-[var(--color-charcoal)]",

  light:
    "bg-[var(--color-ivory)] text-[var(--color-ink)] hover:bg-[var(--color-sand)]",
};

function Button({
  children,
  to,
  href,
  variant = "primary",
  className = "",
  ...props
}) {
  const styles = `${baseStyles} ${variants[variant] || variants.primary} ${className}`;

  if (to) {
    return (
      <Link to={to} className={styles} {...props}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={styles} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button type="button" className={styles} {...props}>
      {children}
    </button>
  );
}

export default Button;
