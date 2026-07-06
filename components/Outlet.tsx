import SectionHeading from "./ui/SectionHeading";

const outlets = [
  { num: "01", name: "Artomoro Simpang Kampus" },
  { num: "02", name: "Artomoro Batanghari" },
  { num: "03", name: "Artomoro Bandar Lampung" },
  { num: "04", name: "[Nama Outlet 4]" },
  { num: "05", name: "[Nama Outlet 5]" },
  { num: "06", name: "[Nama Outlet 6]" },
];

export default function Outlet() {
  return (
    <section id="outlet" className="bg-kuning py-[84px] max-[820px]:py-16">
      <div className="mx-auto max-w-[1120px] px-6">
        <SectionHeading
          eyebrow="Terdekat dari Kamu"
          title="6 Outlet di Lampung"
          titleClassName="text-merah-tua"
          subtitle="Mampir ke outlet terdekat atau order lewat aplikasi favoritmu."
        />

        <div className="mt-11 grid gap-5 [grid-template-columns:repeat(auto-fit,minmax(240px,1fr))]">
          {outlets.map((outlet) => (
            <div
              key={outlet.num}
              className="rounded-brand border-[3px] border-coklat bg-krem p-6 shadow-[6px_6px_0_var(--color-merah)]"
            >
              <div className="font-display text-[1.6rem] text-coklat opacity-25">
                {outlet.num}
              </div>
              <h3 className="mb-1.5 text-[1.05rem] text-merah">{outlet.name}</h3>
              <p className="text-[0.88rem] opacity-85">
                [Alamat lengkap outlet — ganti di sini]
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
