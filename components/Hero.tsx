import Button from "./ui/Button";

// Ganti dengan foto asli: taruh file di /public dan ubah path ini.
// Rekomendasi rasio ~1:1 (square), min 1000x1000, fokus makanan di tengah.
const HERO_IMG = "/hero-dimsum.svg";

const stats = [
  { angka: "4.9", label: "Rating pelanggan" },
  { angka: "6", label: "Outlet di Lampung" },
  { angka: "Fresh", label: "Dibuat tiap hari" },
];

export default function Hero() {
  return (
    <header className="hero-luxe relative overflow-hidden text-white">
      <div className="mx-auto grid max-w-[1120px] items-center gap-12 px-6 py-[72px] max-[900px]:gap-10 max-[900px]:py-16 min-[900px]:grid-cols-[1.05fr_0.95fr]">
        {/* ===== LEFT: copy ===== */}
        <div className="relative z-10 text-center min-[900px]:text-left">
          <span className="inline-flex items-center gap-2 rounded-full border border-kuning/60 bg-merah-tua/70 px-4 py-1.5 text-[0.72rem] font-extrabold tracking-[2.5px] uppercase">
            <span className="text-kuning">✦</span> Premium Dimsum · Lampung
          </span>

          <h1 className="mt-5 text-[clamp(2.1rem,5vw,3.7rem)] [text-shadow:0_4px_0_var(--color-merah-gelap)]">
            Dimsum Hangat, <span className="gold-text">Fresh dari Kukusan</span>, Langsung
            ke Meja Kamu
          </h1>

          <p className="mx-auto mt-5 max-w-[540px] text-[1.08rem] font-medium opacity-95 min-[900px]:mx-0">
            Dari dimsum mentai yang lumer sampai dimsum bakar yang smoky — semua diproduksi
            fresh setiap hari di central kitchen kami, lalu dikirim ke 6 outlet di Lampung.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4 min-[900px]:justify-start">
            <Button href="#menu">Lihat Menu</Button>
            <Button href="#outlet" variant="putih">
              Cari Outlet Terdekat
            </Button>
          </div>

          <dl className="mt-10 flex flex-wrap justify-center gap-x-8 gap-y-4 min-[900px]:justify-start">
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                className={`flex flex-col ${i > 0 ? "min-[900px]:border-l min-[900px]:border-white/20 min-[900px]:pl-8" : ""}`}
              >
                <dt className="font-display text-[1.9rem] leading-none text-kuning">
                  {stat.angka}
                </dt>
                <dd className="mt-1.5 text-[0.82rem] font-semibold opacity-80">
                  {stat.label}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        {/* ===== RIGHT: framed food image ===== */}
        <div className="relative z-10 mx-auto w-full max-w-[460px]">
          {/* decorative accents */}
          <div
            aria-hidden
            className="ring-spin absolute -right-6 -top-8 h-36 w-36 rounded-full border-[6px] border-dashed border-kuning/40"
          />
          <div
            aria-hidden
            className="absolute -bottom-6 -left-8 h-28 w-28 rounded-full bg-kuning/25 blur-2xl"
          />

          {/* gold ring frame */}
          <div className="gold-ring relative rounded-[44px] p-[6px] shadow-[0_28px_70px_rgba(0,0,0,0.5)]">
            <div className="relative aspect-square overflow-hidden rounded-[38px] bg-merah-tua">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={HERO_IMG}
                alt="Sajian dimsum mentai premium dalam steamer bambu"
                className="h-full w-full object-cover"
              />
              {/* top gloss */}
              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.18),transparent_42%)]" />

              {/* steam over the food */}
              <div className="steam s1" style={{ left: "42%", bottom: "52%" }} />
              <div className="steam s3" style={{ left: "52%", bottom: "56%" }} />
              <div className="steam s2" style={{ left: "60%", bottom: "51%" }} />
            </div>
          </div>

          {/* floating rating card */}
          <div className="glass-card float-soft absolute -left-4 top-8 rounded-2xl px-4 py-3 text-coklat max-[560px]:left-0 max-[560px]:scale-90">
            <div className="text-[0.9rem] leading-none text-kuning [text-shadow:0_1px_0_rgba(51,17,9,0.35)]">
              ★★★★★
            </div>
            <div className="mt-1.5 font-display text-[1.1rem] leading-none text-merah">
              4.9
              <span className="ml-1.5 align-middle text-[0.72rem] font-bold text-coklat opacity-70">
                2.1rb+ ulasan
              </span>
            </div>
          </div>

          {/* floating best-seller card */}
          <div className="glass-card float-soft delay absolute -bottom-5 right-2 flex items-center gap-2.5 rounded-full py-2 pl-2.5 pr-4 text-coklat max-[560px]:scale-90">
            <span className="grid h-8 w-8 place-items-center rounded-full bg-merah text-base">
              🔥
            </span>
            <span className="text-left leading-tight">
              <span className="block font-display text-[0.72rem] text-merah-tua">
                BEST SELLER
              </span>
              <span className="block text-[0.78rem] font-bold">Dimsum Mentai</span>
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}
