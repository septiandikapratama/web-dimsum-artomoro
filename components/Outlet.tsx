import SectionHeading from "./ui/SectionHeading";
import { toWhatsAppHref } from "@/lib/phone";
import { toGoogleMapsDirectionsHref } from "@/lib/maps";

export const outlets = [
  {
    num: "01",
    name: "Artomoro 53 Sekampung",
    address:
      "Teras Alfamart Dam 53, Jl. Raya Batanghari, Selo Rejo, Kec. Batanghari, Kabupaten Lampung Timur",
    whatsapp: "0831-6802-8473",
    lat: -5.133689154513996,
    lng: 105.41034052035268,
  },
  {
    num: "02",
    name: "Artomoro 54 Sekampung",
    address: "Pojok Indomaret 48, Jl. Raya Sidomulyo, Kec. Sekampung, Kab. Lampung Timur",
    whatsapp: "0877-1477-8815",
    lat: -5.151284481995554,
    lng: 105.40468277364711,
  },
  {
    num: "03",
    name: "Artomoro Batanghari",
    address: "Jl Raya Batanghari, Kec. Batanghari, Kab. Lampung Timur",
    whatsapp: "0813-9307-3293",
    lat: -5.14023170415348,
    lng: 105.37542503091927,
  },
  {
    num: "04",
    name: "Artomoro Simpang Kampus",
    address: "Jl. Ki Hajar Dewantara No.5, Iringmulyo, Kec. Metro Timur, Kota Metro, Lampung",
    whatsapp: "0878-6280-6718",
    lat: -5.119558418382373,
    lng: 105.32107039762845,
    isMain: true,
  },
  {
    num: "05",
    name: "Artomoro 29 Banjarsari",
    address:
      "Dekat Bunderan 29, Jl. Pattimura No.29, Banjarsari, Kec. Metro Utara, Kota Metro, Lampung",
    whatsapp: "0857-8942-4387",
    lat: -5.094116928978837,
    lng: 105.2836368268575,
  },
  {
    num: "06",
    name: "Artomoro Way Halim",
    address: "Jl. Urip Sumoharjo No.117, Way Halim Permai, Kec. Sukarame, Kota Bandar Lampung",
    whatsapp: "0857-6472-2971",
    lat: -5.391711506682683,
    lng: 105.2804399432473,
  },
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
              className="relative rounded-brand border-[3px] border-coklat bg-krem p-6 shadow-[6px_6px_0_var(--color-merah)]"
            >
              {outlet.isMain && (
                <span className="absolute -top-3 right-4 rotate-3 rounded-full border-2 border-coklat bg-merah px-3 py-1 font-display text-[0.62rem] tracking-wide text-white">
                  Outlet Utama
                </span>
              )}
              <div className="font-display text-[1.6rem] text-coklat opacity-25">
                {outlet.num}
              </div>
              <h3 className="mb-1.5 text-[1.05rem] text-merah">{outlet.name}</h3>
              <p className="text-[0.88rem] opacity-85">{outlet.address}</p>
              <a
                href={toWhatsAppHref(outlet.whatsapp)}
                target="_blank"
                rel="noopener"
                className="mt-3 inline-block text-[0.85rem] font-bold text-merah-tua hover:underline"
              >
                💬 {outlet.whatsapp}
              </a>
              <a
                href={toGoogleMapsDirectionsHref(outlet.lat, outlet.lng)}
                target="_blank"
                rel="noopener"
                className="mt-3 flex w-fit items-center gap-1.5 rounded-full border-2 border-coklat bg-white px-3.5 py-1.5 text-[0.78rem] font-extrabold text-merah-tua transition-colors hover:bg-merah hover:text-white"
              >
                📍 Tunjukkan Arah
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
