import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionHeading from "@/components/ui/SectionHeading";
import MenuItemCard from "@/components/ui/MenuItemCard";
import { menuItems, MENU_CATEGORIES } from "@/data/menu";

export const metadata: Metadata = {
  title: "Menu — Dimsum Artomoro",
  description:
    "Daftar lengkap menu Dimsum Artomoro beserta harga tiap varian ukuran, dikelompokkan per kategori.",
};

export default function MenuPage() {
  return (
    <>
      <Navbar />

      <main className="bg-cream">
        <div className="mx-auto max-w-[1120px] px-6 pt-16 pb-10">
          <SectionHeading
            eyebrow="Daftar Harga"
            title="Menu Dimsum Artomoro"
            subtitle="Semua varian ukuran dan harga, dikelompokkan per kategori. Tinggal pilih, tinggal order."
          />
        </div>

        <nav
          aria-label="Kategori menu"
          className="sticky top-[69px] z-40 border-y border-gold/20 bg-cream/95 backdrop-blur"
        >
          <div className="mx-auto flex max-w-[1120px] gap-2 overflow-x-auto px-6 py-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {MENU_CATEGORIES.map(({ category, slug }) => (
              <a
                key={slug}
                href={`#${slug}`}
                className="flex-none rounded-full border border-gold/30 px-4 py-1.5 text-[0.78rem] font-semibold whitespace-nowrap text-maroon transition-colors hover:border-gold hover:bg-gold/10"
              >
                {category}
              </a>
            ))}
          </div>
        </nav>

        {MENU_CATEGORIES.map(({ category, slug }) => {
          const items = menuItems.filter((item) => item.category === category);

          return (
            <section
              key={slug}
              id={slug}
              className="scroll-mt-[132px] border-b border-gold/10 py-14 last:border-0"
            >
              <div className="mx-auto max-w-[1120px] px-6">
                <h2 className="text-[1.6rem] text-maroon">{category}</h2>

                <div className="mt-8 grid gap-6 [grid-template-columns:repeat(auto-fit,minmax(280px,1fr))]">
                  {items.map((item) => (
                    <MenuItemCard key={item.id} item={item} />
                  ))}
                </div>
              </div>
            </section>
          );
        })}
      </main>

      <Footer />
    </>
  );
}
