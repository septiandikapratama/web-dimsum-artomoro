import Image from "next/image";
import Button from "./ui/Button";

const links = [
  { href: "#bestseller", label: "Best Seller" },
  { href: "#menu", label: "Menu" },
  { href: "#dapur", label: "Central Kitchen" },
  { href: "#outlet", label: "Outlet" },
];

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-gold/20 bg-maroon/95 backdrop-blur">
      <div className="mx-auto flex max-w-[1180px] items-center justify-between px-6 py-3.5">
        <Image
          src="/logo.png"
          alt="Dimsum Artomoro"
          width={1254}
          height={356}
          className="h-10 w-auto"
          priority
        />
        <div className="hidden items-center gap-9 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[0.82rem] font-medium tracking-wide text-cream/85 transition-colors hover:text-gold"
            >
              {link.label}
            </a>
          ))}
          <Button href="#order" size="nav">
            Order Sekarang
          </Button>
        </div>
      </div>
    </nav>
  );
}
