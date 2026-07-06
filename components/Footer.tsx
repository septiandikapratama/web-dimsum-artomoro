import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-merah-gelap py-9 text-center text-[0.88rem] text-white">
      <div className="mx-auto max-w-[1120px] px-6">
        <Image
          src="/logo.png"
          alt="Dimsum Artomoro"
          width={1200}
          height={431}
          className="mx-auto mb-3.5 h-10 w-auto"
        />
        <p className="opacity-75">
          © 2026 PT Artomoro Kuliner Nusantara · Dimsum Artomoro — Lampung, Indonesia
        </p>
      </div>
    </footer>
  );
}
