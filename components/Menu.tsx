import SectionHeading from "./ui/SectionHeading";
import {
  MentaiIcon,
  OriginalIcon,
  KuahIcon,
  BakarIcon,
  WontonChiliIcon,
} from "./icons/DimsumIcons";

const items = [
  {
    title: "Dimsum Mentai",
    description: "Saus mentai gurih, ditorch sampai smoky. Sang juara.",
    mini: "Best Seller",
    Icon: MentaiIcon,
  },
  {
    title: "Dimsum Original",
    description: "Klasik kukus yang juicy. Bukti kualitas ada di rasa dasarnya.",
    mini: null,
    Icon: OriginalIcon,
  },
  {
    title: "Dimsum Kuah",
    description: "Kuah gurih-pedas yang hangat di badan. Iconic-nya Artomoro.",
    mini: "Iconic",
    Icon: KuahIcon,
  },
  {
    title: "Dimsum Bakar",
    description: "Dibakar dengan olesan saus khas — smoky, legit, nagih.",
    mini: "Iconic",
    Icon: BakarIcon,
  },
  {
    title: "Wonton Chili Oil",
    description: "Wonton lembut berendam chili oil pedas-wangi. Buat pencinta pedas.",
    mini: "Pedas",
    Icon: WontonChiliIcon,
  },
];

export default function Menu() {
  return (
    <section id="menu" className="bg-maroon py-28 text-cream max-[820px]:py-20">
      <div className="mx-auto max-w-[1120px] px-6">
        <SectionHeading
          eyebrow="Menu Lengkap"
          eyebrowClassName="text-gold"
          title="Pilih Gaya Dimsum-mu"
          titleClassName="text-gold-light"
          subtitle="Lima cara menikmati dimsum Artomoro — dari yang klasik sampai yang berani pedas."
          subtitleClassName="text-cream/70"
        />

        <div className="mt-16 grid gap-6 [grid-template-columns:repeat(auto-fit,minmax(200px,1fr))]">
          {items.map(({ title, description, mini, Icon }) => (
            <div
              key={title}
              className="rounded-brand border border-gold/20 bg-maroon-deep/50 px-6 py-8 text-center transition duration-200 hover:-translate-y-1.5 hover:border-gold/50"
            >
              <div className="mx-auto mb-5 grid h-14 w-14 place-items-center rounded-full border border-gold/25">
                <Icon className="h-9 w-9" />
              </div>
              <h3 className="font-display text-[1.25rem] text-gold-light">{title}</h3>
              <p className="mt-2 text-[0.9rem] leading-relaxed text-cream/70">{description}</p>
              {mini && (
                <span className="mt-4 inline-block rounded-full border border-gold/40 px-3 py-1 text-[0.64rem] font-semibold uppercase tracking-[0.2em] text-gold">
                  {mini}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
