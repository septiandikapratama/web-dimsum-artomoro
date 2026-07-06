import Button from "./ui/Button";

export default function CtaFinal() {
  return (
    <section
      id="order"
      className="relative overflow-hidden bg-merah py-[84px] text-center text-white max-[820px]:py-16"
    >
      <div className="steam s1" />
      <div className="steam s3" />
      <div className="mx-auto max-w-[1120px] px-6">
        <h2 className="text-[clamp(1.8rem,4vw,3rem)] text-white">
          Laper? <em className="text-kuning not-italic">Dimsumnya udah nunggu.</em>
        </h2>
        <p className="mx-auto mt-3.5 mb-8 max-w-[560px] text-[1.05rem] font-medium text-white opacity-92">
          Order langsung ke outlet terdekat, atau pesan lewat GoFood / GrabFood / ShopeeFood.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button href="https://wa.me/62XXXXXXXXXXX" target="_blank" rel="noopener">
            Order via WhatsApp
          </Button>
          <Button href="#outlet" variant="putih">
            Lihat Semua Outlet
          </Button>
        </div>
      </div>
    </section>
  );
}
