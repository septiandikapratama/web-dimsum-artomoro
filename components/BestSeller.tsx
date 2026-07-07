import SectionHeading from "./ui/SectionHeading";
import { MentaiIcon, MentaiPremiumIcon } from "./icons/DimsumIcons";

const items = [
  {
    ribbon: "#1 Best Seller",
    title: "Dimsum Mentai",
    description:
      "Dimsum lembut disiram saus mentai gurih-creamy lalu ditorch sampai permukaannya karamel dan smoky. Satu suap langsung paham kenapa ini best seller.",
    tags: ["Ditorch langsung", "Creamy gurih"],
    Icon: MentaiIcon,
  },
  {
    ribbon: "Premium",
    title: "Dimsum Mentai Creamy Premium",
    description:
      "Versi naik kelas: saus mentai lebih tebal, lebih creamy, dengan topping melimpah. Buat kamu yang mau treat diri sendiri — worth every rupiah.",
    tags: ["Extra creamy", "Topping melimpah"],
    Icon: MentaiPremiumIcon,
  },
];

export default function BestSeller() {
  return (
    <section id="bestseller" className="py-28 max-[820px]:py-20">
      <div className="mx-auto max-w-[1120px] px-6">
        <SectionHeading
          eyebrow="Paling Diburu"
          title="Best Seller Artomoro"
          subtitle="Menu yang bikin pelanggan balik lagi, lagi, dan lagi. Kalau baru pertama kali coba, mulai dari sini."
        />

        <div className="mt-16 grid gap-8 [grid-template-columns:repeat(auto-fit,minmax(300px,1fr))]">
          {items.map(({ ribbon, title, description, tags, Icon }) => (
            <div
              key={title}
              className="relative rounded-brand border border-gold/30 bg-white p-9 shadow-luxe transition duration-200 hover:-translate-y-1 hover:shadow-luxe-gold"
            >
              <span className="absolute right-6 top-6 rounded-full border border-gold/50 px-3 py-1 text-[0.66rem] font-semibold uppercase tracking-[0.2em] text-gold-dark">
                {ribbon}
              </span>
              <div className="mb-6 grid h-16 w-16 place-items-center rounded-full border border-gold/30 bg-cream">
                <Icon className="h-10 w-10" />
              </div>
              <h3 className="font-display text-[1.6rem] text-maroon">{title}</h3>
              <p className="mt-3 leading-relaxed text-ink-soft">{description}</p>
              <div className="mt-6 flex flex-wrap gap-2.5">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-gold/30 px-3.5 py-1 text-[0.76rem] font-medium text-ink-soft"
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
