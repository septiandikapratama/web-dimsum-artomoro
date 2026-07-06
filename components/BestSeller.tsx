import SectionHeading from "./ui/SectionHeading";
import { MentaiIcon, MentaiPremiumIcon } from "./icons/DimsumIcons";

const items = [
  {
    ribbon: "#1 BEST SELLER",
    title: "Dimsum Mentai",
    description:
      "Dimsum lembut disiram saus mentai gurih-creamy lalu ditorch sampai permukaannya karamel dan smoky. Satu suap langsung paham kenapa ini best seller.",
    tags: ["🔥 Ditorch langsung", "Creamy gurih"],
    Icon: MentaiIcon,
  },
  {
    ribbon: "PREMIUM",
    title: "Dimsum Mentai Creamy Premium",
    description:
      "Versi naik kelas: saus mentai lebih tebal, lebih creamy, dengan topping melimpah. Buat kamu yang mau treat diri sendiri — worth every rupiah.",
    tags: ["✨ Extra creamy", "Topping melimpah"],
    Icon: MentaiPremiumIcon,
  },
];

export default function BestSeller() {
  return (
    <section id="bestseller" className="py-[84px] max-[820px]:py-16">
      <div className="mx-auto max-w-[1120px] px-6">
        <SectionHeading
          eyebrow="Paling Diburu"
          title="Best Seller Artomoro"
          subtitle="Menu yang bikin pelanggan balik lagi, lagi, dan lagi. Kalau baru pertama kali coba, mulai dari sini."
        />

        <div className="mt-11 grid gap-7 [grid-template-columns:repeat(auto-fit,minmax(300px,1fr))]">
          {items.map(({ ribbon, title, description, tags, Icon }) => (
            <div
              key={title}
              className="relative rounded-brand border-[3px] border-coklat bg-white px-[30px] py-[34px] shadow-[8px_8px_0_var(--color-merah)] transition-transform hover:-translate-x-[3px] hover:-translate-y-[3px]"
            >
              <span className="absolute -top-4 right-[22px] rotate-3 rounded-full border-[3px] border-coklat bg-kuning px-3.5 py-1.5 font-display text-[0.8rem]">
                {ribbon}
              </span>
              <Icon className="mb-[18px] h-[86px] w-[86px]" />
              <h3 className="mb-2.5 text-[1.45rem] text-merah-tua">{title}</h3>
              <p className="text-[0.98rem] opacity-85">{description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border-2 border-coklat bg-krem px-3 py-1 text-[0.78rem] font-extrabold"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
