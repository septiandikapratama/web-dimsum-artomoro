import type { ReactNode } from "react";

type ButtonProps = {
  href: string;
  variant?: "primary" | "outline";
  size?: "base" | "nav";
  target?: string;
  rel?: string;
  children: ReactNode;
};

export default function Button({
  href,
  variant = "primary",
  size = "base",
  target,
  rel,
  children,
}: ButtonProps) {
  const sizing =
    size === "nav" ? "px-5 py-2 text-[0.78rem]" : "px-8 py-3.5 text-[0.9rem]";

  const colors =
    variant === "outline"
      ? "border border-gold/60 text-gold hover:border-gold hover:bg-gold/10"
      : "bg-gold text-maroon-deep hover:bg-gold-light shadow-[0_14px_34px_-16px_rgba(201,162,39,0.85)]";

  return (
    <a
      href={href}
      target={target}
      rel={rel}
      className={`inline-block rounded-full font-sans font-semibold tracking-[0.04em] transition-all duration-200 ease-out hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold focus-visible:outline-offset-4 ${sizing} ${colors}`}
    >
      {children}
    </a>
  );
}
