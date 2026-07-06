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
    mini: "🌶️ Pedas",
    Icon: WontonChiliIcon,
  },
];

export default function Menu() {
  return (
    <section id="menu" className="bg-merah-tua py-[84px] text-white max-[820px]:py-16">
      <div className="mx-auto max-w-[1120px] px-6">
        <SectionHeading
          eyebrow="Menu Lengkap"
          eyebrowClassName="bg-kuning text-coklat"
          title="Pilih Gaya Dimsum-mu"
          titleClassName="text-kuning"
          subtitle="Lima cara menikmati dimsum Artomoro — dari yang klasik sampai yang berani pedas."
          subtitleClassName="opacity-90"
        />

        <div className="mt-11 grid gap-5 [grid-template-columns:repeat(auto-fit,minmax(200px,1fr))]">
          {items.map(({ title, description, mini, Icon }) => (
            <div
              key={title}
              className="rounded-brand border-[3px] border-black/22 bg-merah px-5 py-[26px] text-center transition-[transform,background] hover:-translate-y-1.5 hover:bg-[#E23129]"
            >
              <Icon className="mx-auto mb-3.5 h-16 w-16" />
              <h3 className="mb-1.5 text-[1.05rem] tracking-wide">{title}</h3>
              <p className="text-[0.85rem] opacity-85">{description}</p>
              {mini && (
                <span className="mt-3 inline-block rounded-full bg-kuning px-2.5 py-[3px] text-[0.7rem] font-extrabold tracking-wide text-coklat uppercase">
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
