import type { ReactNode } from "react";

type ButtonProps = {
  href: string;
  variant?: "primary" | "putih";
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
    size === "nav" ? "px-5 py-[9px] text-[0.85rem]" : "px-[26px] py-3 text-base";

  const colors =
    variant === "putih"
      ? "bg-white text-coklat shadow-[0_4px_0_rgba(0,0,0,0.25)] hover:shadow-[0_6px_0_rgba(0,0,0,0.25)] active:shadow-[0_2px_0_rgba(0,0,0,0.25)]"
      : "bg-kuning text-coklat shadow-[0_4px_0_#C98F00] hover:shadow-[0_6px_0_#C98F00] active:shadow-[0_2px_0_#C98F00]";

  return (
    <a
      href={href}
      target={target}
      rel={rel}
      className={`inline-block rounded-full font-display tracking-wide transition-transform duration-150 ease-out hover:-translate-y-0.5 active:translate-y-0.5 focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-kuning focus-visible:outline-offset-[3px] ${sizing} ${colors}`}
    >
      {children}
    </a>
  );
}
