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
    <nav className="sticky top-0 z-50 bg-merah shadow-[0_3px_0_var(--color-merah-gelap)]">
      <div className="mx-auto flex max-w-[1120px] items-center justify-between px-6 py-3">
        <Image
          src="/logo.png"
          alt="Dimsum Artomoro"
          width={1200}
          height={431}
          className="h-11 w-auto"
          priority
        />
        <div className="hidden items-center gap-[26px] md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[0.92rem] font-bold text-white opacity-90 hover:underline hover:decoration-kuning hover:decoration-[3px] hover:underline-offset-[5px] hover:opacity-100"
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
