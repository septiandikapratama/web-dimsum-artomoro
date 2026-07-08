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
    <section id="outlet" className="bg-cream-200 py-28 max-[820px]:py-20">
      <div className="mx-auto max-w-[1120px] px-6">
        <SectionHeading
          eyebrow="Terdekat dari Kamu"
          title="6 Outlet di Lampung"
          subtitle="Mampir ke outlet terdekat atau order lewat aplikasi favoritmu."
        />

        <div className="mt-16 grid gap-6 [grid-template-columns:repeat(auto-fit,minmax(240px,1fr))]">
          {outlets.map((outlet) => (
            <div
              key={outlet.num}
              className="relative flex flex-col rounded-brand border border-gold/30 bg-white p-7 shadow-luxe"
            >
              <div className="flex items-start justify-between">
                <span className="font-display text-[1.7rem] text-gold-dark/70">
                  {outlet.num}
                </span>
                {outlet.isMain && (
                  <span className="rounded-full border border-gold/50 px-3 py-1 text-[0.6rem] font-semibold uppercase tracking-[0.2em] text-gold-dark">
                    Outlet Utama
                  </span>
                )}
              </div>
              <h3 className="mt-3 font-display text-[1.25rem] text-maroon">{outlet.name}</h3>
              <p className="mt-2 text-[0.88rem] leading-relaxed text-ink-soft">
                {outlet.address}
              </p>
              <a
                href={toWhatsAppHref(outlet.whatsapp)}
                target="_blank"
                rel="noopener"
                className="mt-4 inline-block text-[0.85rem] font-semibold text-maroon transition-colors hover:text-gold-dark"
              >
                {outlet.whatsapp}
              </a>
              <a
                href={toGoogleMapsDirectionsHref(outlet.lat, outlet.lng)}
                target="_blank"
                rel="noopener"
                className="mt-4 flex w-fit items-center gap-2 rounded-full border border-gold/50 px-4 py-2 text-[0.76rem] font-semibold text-gold-dark transition-colors hover:bg-gold hover:text-maroon-deep"
              >
                Tunjukkan Arah
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
