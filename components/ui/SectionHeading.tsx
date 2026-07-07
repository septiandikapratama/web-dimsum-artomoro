import type { ReactNode } from "react";

type SectionHeadingProps = {
  eyebrow?: string;
  eyebrowClassName?: string;
  title: ReactNode;
  titleClassName?: string;
  subtitle?: ReactNode;
  subtitleClassName?: string;
  align?: "center" | "left";
};

export default function SectionHeading({
  eyebrow,
  eyebrowClassName = "text-gold",
  title,
  titleClassName = "text-maroon",
  subtitle,
  subtitleClassName = "text-ink-soft",
  align = "center",
}: SectionHeadingProps) {
  const isCenter = align === "center";

  return (
    <div className={isCenter ? "text-center" : ""}>
      {eyebrow && (
        <span
          className={`inline-flex items-center gap-3 text-[0.72rem] font-semibold uppercase tracking-[0.32em] ${eyebrowClassName} ${isCenter ? "justify-center" : ""}`}
        >
          <span className="h-px w-8 bg-current opacity-50" />
          {eyebrow}
          {isCenter && <span className="h-px w-8 bg-current opacity-50" />}
        </span>
      )}
      <h2
        className={`mt-5 text-[clamp(1.9rem,4vw,3rem)] ${titleClassName}`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-5 max-w-[600px] text-[1.06rem] leading-relaxed ${isCenter ? "mx-auto" : ""} ${subtitleClassName}`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
