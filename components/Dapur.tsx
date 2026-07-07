import SectionHeading from "./ui/SectionHeading";

const points = [
  {
    title: "Produksi fresh setiap hari.",
    description:
      "Dimsum dibuat pagi hari, langsung dikirim ke seluruh outlet — bukan stok lama.",
  },
  {
    title: "Resep terstandar.",
    description:
      "Takaran, isian, dan kulit dikontrol dari satu dapur supaya kualitasnya nggak naik-turun.",
  },
  {
    title: "Bahan pilihan.",
    description: "Ayam dan bahan baku dipilih dan diolah sendiri oleh tim produksi kami.",
  },
];

const stats = [
  { angka: "6", label: "Outlet aktif di Lampung" },
  { angka: "1", label: "Central kitchen dengan standar produksi ketat" },
  { angka: "Tiap Hari", label: "Dimsum fresh dikirim ke semua outlet" },
];

export default function Dapur() {
  return (
    <section id="dapur" className="py-28 max-[820px]:py-20">
      <div className="mx-auto max-w-[1120px] px-6">
        <div className="grid grid-cols-[1.1fr_0.9fr] items-center gap-16 max-[820px]:grid-cols-1 max-[820px]:gap-12">
          <div>
            <SectionHeading
              align="left"
              eyebrow="Di Balik Dapur"
              title="Satu Central Kitchen, Rasa Konsisten di Semua Outlet"
              subtitle="Semua dimsum Artomoro diproduksi di satu dapur pusat dengan resep dan standar yang sama — jadi mau makan di outlet mana pun, rasanya tetap Artomoro."
            />
            <ul className="mt-10 grid gap-7">
              {points.map((point, i) => (
                <li key={point.title} className="flex items-start gap-5">
                  <span className="mt-0.5 flex h-11 w-11 flex-none items-center justify-center rounded-full border border-gold/50 font-display text-[1.05rem] text-gold-dark">
                    {i + 1}
                  </span>
                  <span className="leading-relaxed text-ink-soft">
                    <strong className="font-semibold text-ink">{point.title}</strong>{" "}
                    {point.description}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="grid gap-6">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-brand border border-gold/30 bg-white px-8 py-7 shadow-luxe"
              >
                <div className="font-display text-[2.4rem] leading-none text-maroon">
                  {stat.angka}
                </div>
                <div className="mt-2 text-[0.95rem] font-medium text-ink-soft">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
