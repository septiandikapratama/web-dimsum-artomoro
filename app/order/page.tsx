import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionHeading from "@/components/ui/SectionHeading";
import OrderClient from "@/components/order/OrderClient";

export const metadata: Metadata = {
  title: "Order — Dimsum Artomoro",
  description:
    "Pesan menu Dimsum Artomoro dan kirim pesanan langsung lewat WhatsApp ke outlet pilihanmu.",
};

export default function OrderPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-cream">
        <div className="mx-auto max-w-[1180px] px-6 pt-16 pb-8">
          <SectionHeading
            eyebrow="Order Online"
            title="Pesan Dimsum Artomoro"
            subtitle="Pilih outlet, pilih menu favoritmu, lalu kirim pesanan langsung lewat WhatsApp."
          />
        </div>

        <div className="mx-auto max-w-[1180px] px-6">
          <OrderClient />
        </div>
      </main>

      <Footer />
    </>
  );
}
