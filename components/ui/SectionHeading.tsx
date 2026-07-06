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
  eyebrowClassName = "bg-merah text-white",
  title,
  titleClassName = "text-merah",
  subtitle,
  subtitleClassName = "",
  align = "center",
}: SectionHeadingProps) {
  const isCenter = align === "center";

  return (
    <div className={isCenter ? "text-center" : ""}>
      {eyebrow && (
        <span
          className={`inline-block rounded-full px-4 py-1.5 text-[0.78rem] font-extrabold tracking-[2.5px] uppercase ${eyebrowClassName}`}
        >
          {eyebrow}
        </span>
      )}
      <h2 className={`mt-4 text-[clamp(1.7rem,3.6vw,2.6rem)] ${titleClassName}`}>{title}</h2>
      {subtitle && (
        <p
          className={`mt-3 max-w-[560px] text-[1.05rem] font-medium opacity-85 ${isCenter ? "mx-auto" : ""} ${subtitleClassName}`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
