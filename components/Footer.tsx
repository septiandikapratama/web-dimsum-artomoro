import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-gold/20 bg-maroon-deep py-12 text-center text-[0.86rem] text-cream/70">
      <div className="mx-auto max-w-[1120px] px-6">
        <Image
          src="/logo.png"
          alt="Dimsum Artomoro"
          width={1200}
          height={431}
          className="mx-auto mb-5 h-10 w-auto"
        />
        <p className="opacity-80">
          © 2026 PT Artomoro Kuliner Nusantara · Dimsum Artomoro — Lampung, Indonesia
        </p>
      </div>
    </footer>
  );
}
