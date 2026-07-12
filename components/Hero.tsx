import Image from "next/image";
import Button from "./ui/Button";

// Ganti dengan foto asli: taruh file di /public dan ubah path ini.
// Rekomendasi rasio ~16:9 (landscape), min 1600x900, pencahayaan hangat.
const HERO_IMG = "/hero-photo.png";

export default function Hero() {
  return (
    <header className="hero-luxe relative overflow-hidden text-cream">
      {/* ===== copy ===== */}
      <div className="mx-auto max-w-[1180px] px-6 pt-24 pb-16 text-center max-[820px]:pt-16">
        <span className="inline-flex items-center gap-3 text-[0.72rem] font-semibold uppercase tracking-[0.34em] text-gold">
          <span className="h-px w-8 bg-gold/50" />
          Dimsum Pedas · Lampung
          <span className="h-px w-8 bg-gold/50" />
        </span>

        <h1 className="mx-auto mt-7 max-w-[15ch] text-[clamp(2.5rem,6vw,4.6rem)] leading-[1.05]">
          Dimsum Nikmat, <em className="text-gold not-italic">Fresh dari Kukusan</em>,
        </h1>

        <p className="mx-auto mt-7 max-w-[600px] text-[1.1rem] leading-relaxed text-cream/75">
          Dari dimsum mentai yang lumer sampai dimsum bakar yang smoky — semua diproduksi
          fresh setiap hari di central kitchen kami, lalu dikirim ke 6 outlet di Lampung.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Button href="#menu">Lihat Menu</Button>
          <Button href="#outlet" variant="outline">
            Cari Outlet Terdekat
          </Button>
        </div>
      </div>

      {/* ===== product photo ===== */}
      <div className="relative mx-auto max-w-[1000px] px-6 pb-24">
        <figure className="relative aspect-[16/9] overflow-hidden rounded-[20px] border border-gold/30 shadow-luxe">
          <Image
            src={HERO_IMG}
            alt="Tiga tray dimsum Artomoro di meja marmer gelap dengan aksen emas"
            fill
            sizes="(max-width: 1000px) 100vw, 1000px"
            className="object-cover"
            priority
          />

          {/* minimal rating badge */}
          <div className="absolute left-4 top-4 flex items-center gap-2 rounded-full border border-gold/40 bg-maroon-deep/70 px-4 py-2 text-[0.82rem] text-cream backdrop-blur sm:left-6 sm:top-6">
            <span className="text-gold">★</span>
            <span className="font-semibold">4.9</span>
            <span className="text-cream/55">· 2.1rb+ ulasan</span>
          </div>

          {/* minimal best-seller badge */}
          <div className="absolute bottom-4 right-4 rounded-full border border-gold/40 bg-maroon-deep/70 px-4 py-2 text-cream backdrop-blur sm:bottom-6 sm:right-6">
            <span className="mr-2 text-[0.62rem] font-semibold uppercase tracking-[0.22em] text-gold">
              Best Seller
            </span>
            <span className="text-[0.82rem]">Dimsum Mentai</span>
          </div>
        </figure>
      </div>
    </header>
  );
}
