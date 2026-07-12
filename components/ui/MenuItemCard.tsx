import type { MenuItem } from "@/data/menu";
import { formatRupiah } from "@/lib/currency";

export default function MenuItemCard({ item }: { item: MenuItem }) {
  return (
    <div className="relative flex h-full flex-col rounded-brand border border-gold/30 bg-white p-6 shadow-luxe transition duration-200 hover:-translate-y-1 hover:shadow-luxe-gold">
      {item.bestSeller && (
        <span className="absolute right-5 top-5 rounded-full border border-gold/50 px-3 py-1 text-[0.6rem] font-semibold uppercase tracking-[0.18em] text-gold-dark">
          Best Seller
        </span>
      )}

      <h3
        className={`font-display text-[1.15rem] leading-snug text-maroon ${item.bestSeller ? "pr-24" : ""}`}
      >
        {item.name}
      </h3>

      {item.description && (
        <p className="mt-2 text-[0.88rem] leading-relaxed text-ink-soft">{item.description}</p>
      )}

      <ul className="mt-5 flex flex-1 flex-col justify-end gap-2 border-t border-gold/15 pt-4">
        {item.variants.map((variant) => (
          <li
            key={variant.label}
            className="flex items-baseline justify-between gap-4 text-[0.9rem]"
          >
            <span className="font-medium text-ink">
              {variant.label}
              {variant.note && (
                <span className="ml-2 text-[0.76rem] font-normal text-ink-soft">
                  ({variant.note})
                </span>
              )}
            </span>
            <span className="whitespace-nowrap font-display text-[1rem] text-gold-dark">
              {formatRupiah(variant.price)}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
