function Eyebrow({ children, className = "" }) {
  return (
    <p className={`section-label text-[var(--color-warm-grey)] ${className}`}>
      {children}
    </p>
  );
}

export default Eyebrow;
