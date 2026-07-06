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
    <section id="dapur" className="py-[84px] max-[820px]:py-16">
      <div className="mx-auto max-w-[1120px] px-6">
        <div className="grid grid-cols-[1.1fr_0.9fr] items-center gap-14 max-[820px]:grid-cols-1">
          <div>
            <SectionHeading
              align="left"
              eyebrow="Di Balik Dapur"
              title="Satu Central Kitchen, Rasa Konsisten di Semua Outlet"
              subtitle="Semua dimsum Artomoro diproduksi di satu dapur pusat dengan resep dan standar yang sama — jadi mau makan di outlet mana pun, rasanya tetap Artomoro."
            />
            <ul className="mt-[26px] grid gap-4">
              {points.map((point, i) => (
                <li key={point.title} className="flex items-start gap-3.5 font-medium">
                  <span className="mt-0.5 flex h-[34px] w-[34px] flex-none items-center justify-center rounded-full border-[3px] border-coklat bg-kuning font-display text-[0.85rem]">
                    {i + 1}
                  </span>
                  <span>
                    <strong>{point.title}</strong> {point.description}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="grid gap-[18px]">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-brand border-[3px] border-coklat bg-white px-7 py-[26px] shadow-[8px_8px_0_var(--color-kuning)]"
              >
                <div className="font-display text-[2.4rem] text-merah">{stat.angka}</div>
                <div className="text-[0.95rem] font-bold opacity-85">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
