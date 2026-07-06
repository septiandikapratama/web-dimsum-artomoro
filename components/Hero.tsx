import Image from "next/image";
import Button from "./ui/Button";

const badges = ["🥟 6 Outlet di Lampung", "🔥 Fresh Setiap Hari", "🏭 1 Central Kitchen"];

export default function Hero() {
  return (
    <header className="hero-radials relative overflow-hidden bg-merah px-6 pt-[72px] pb-[120px] text-center text-white">
      <div className="steam s1" />
      <div className="steam s2" />
      <div className="steam s3" />
      <div className="steam s4" />

      <Image
        src="/logo.png"
        alt="Dimsum Artomoro — logo"
        width={1200}
        height={431}
        className="relative z-10 mx-auto mb-[34px] w-[min(560px,84%)] h-auto drop-shadow-[0_10px_24px_rgba(0,0,0,0.28)]"
        priority
      />

      <h1 className="relative z-10 text-[clamp(2rem,5.2vw,3.6rem)] [text-shadow:0_4px_0_var(--color-merah-gelap)]">
        Dimsum Hangat, <em className="text-kuning not-italic">Fresh dari Kukusan</em>,
        <br />
        Langsung ke Meja Kamu
      </h1>

      <p className="relative z-10 mx-auto mt-5 mb-8 max-w-[620px] text-[1.1rem] font-medium opacity-95">
        Dari dimsum mentai yang lumer sampai dimsum bakar yang smoky — semua diproduksi
        fresh setiap hari di central kitchen kami, lalu dikirim ke 6 outlet di Lampung.
      </p>

      <div className="relative z-10 flex flex-wrap justify-center gap-4">
        <Button href="#menu">Lihat Menu</Button>
        <Button href="#outlet" variant="putih">
          Cari Outlet Terdekat
        </Button>
      </div>

      <div className="relative z-10 mt-9 flex flex-wrap justify-center gap-3">
        {badges.map((badge) => (
          <span
            key={badge}
            className="rounded-full border-2 border-dashed border-white/50 bg-merah-tua px-[18px] py-2 text-[0.85rem] font-extrabold"
          >
            {badge}
          </span>
        ))}
      </div>
    </header>
  );
}
