function Section({ children, className = "", id, as: Tag = "section" }) {
  return (
    <Tag id={id} className={`py-20 sm:py-24 lg:py-28 ${className}`}>
      {children}
    </Tag>
  );
}

export default Section;
