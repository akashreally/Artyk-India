// ⚠️ DORMANT — not wired to any route, references undefined brand-* tokens. Do not use as a pattern for new work. See design-system audit.
type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className = "",
}: SectionHeadingProps) {
  return (
    <div
      className={`${align === "center" ? "text-center" : "text-left"} ${className}`}
    >
      {eyebrow && (
        <p className="mb-3 text-[11px] uppercase tracking-[0.25em] text-brand-text/60 font-body">
          {eyebrow}
        </p>
      )}
      <h2 className="font-heading text-3xl leading-[1.1] tracking-[0.01em] md:text-[2.75rem] lg:text-5xl">
        {title}
      </h2>
      {description && (
        <p
          className={`mt-5 max-w-xl text-base leading-relaxed text-brand-text/75 font-body md:text-lg ${
            align === "center" ? "mx-auto" : ""
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
