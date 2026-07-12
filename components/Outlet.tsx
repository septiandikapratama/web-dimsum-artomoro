import SectionHeading from "./ui/SectionHeading";
import { toWhatsAppHref } from "@/lib/phone";
import { toGoogleMapsDirectionsHref } from "@/lib/maps";
import { outlets } from "@/data/outlets";

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
