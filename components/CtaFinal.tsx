import Button from "./ui/Button";
import { outlets } from "./Outlet";
import { toWhatsAppHref } from "@/lib/phone";

const mainOutlet = outlets.find((outlet) => outlet.isMain) ?? outlets[0];

export default function CtaFinal() {
  return (
    <section
      id="order"
      className="hero-luxe relative overflow-hidden py-28 text-center text-cream max-[820px]:py-20"
    >
      <div className="mx-auto max-w-[1120px] px-6">
        <h2 className="mx-auto max-w-[18ch] text-[clamp(2rem,4.4vw,3.2rem)] text-cream">
          Laper? <em className="gold-text font-medium italic">Dimsumnya udah nunggu.</em>
        </h2>
        <p className="mx-auto mt-6 mb-10 max-w-[560px] text-[1.06rem] leading-relaxed text-cream/75">
          Order langsung ke outlet terdekat, atau pesan lewat GoFood / GrabFood / ShopeeFood.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button href={toWhatsAppHref(mainOutlet.whatsapp)} target="_blank" rel="noopener">
            Order via WhatsApp
          </Button>
          <Button href="#outlet" variant="outline">
            Lihat Semua Outlet
          </Button>
        </div>
      </div>
    </section>
  );
}
