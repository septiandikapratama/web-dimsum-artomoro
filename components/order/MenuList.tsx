import { MENU_CATEGORIES, type MenuItem } from "@/data/menu";
import { cartKey } from "@/lib/cart";
import { formatRupiah } from "@/lib/currency";
import QuantityStepper from "./QuantityStepper";

type MenuListProps = {
  items: MenuItem[];
  cart: Record<string, number>;
  onChangeQty: (key: string, qty: number) => void;
};

export default function MenuList({ items, cart, onChangeQty }: MenuListProps) {
  const groups = MENU_CATEGORIES.map(({ category, slug }) => ({
    category,
    slug,
    items: items.filter((item) => item.category === category),
  })).filter((group) => group.items.length > 0);

  if (groups.length === 0) {
    return (
      <p className="mt-12 text-center text-[0.95rem] text-ink-soft">
        Tidak ada menu yang cocok. Coba kata kunci lain.
      </p>
    );
  }

  return (
    <div className="mt-8 flex flex-col gap-12">
      {groups.map(({ category, slug, items: groupItems }) => (
        <section key={slug}>
          <h2 className="text-[1.4rem] text-maroon">{category}</h2>

          <div className="mt-5 flex flex-col gap-4">
            {groupItems.map((item) => (
              <div
                key={item.id}
                className="rounded-brand border border-gold/30 bg-white p-5 shadow-luxe"
              >
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-display text-[1.05rem] text-maroon">{item.name}</h3>
                  {item.bestSeller && (
                    <span className="flex-none rounded-full border border-gold/50 px-2.5 py-0.5 text-[0.58rem] font-semibold uppercase tracking-[0.16em] text-gold-dark">
                      Best Seller
                    </span>
                  )}
                </div>

                {item.description && (
                  <p className="mt-1.5 text-[0.85rem] leading-relaxed text-ink-soft">
                    {item.description}
                  </p>
                )}

                <div className="mt-4 flex flex-col divide-y divide-gold/10 border-t border-gold/10">
                  {item.variants.map((variant) => {
                    const key = cartKey(item.id, variant.label);
                    const qty = cart[key] ?? 0;

                    return (
                      <div
                        key={variant.label}
                        className="flex flex-wrap items-center justify-between gap-3 py-3"
                      >
                        <div className="text-[0.9rem]">
                          <span className="font-medium text-ink">{variant.label}</span>
                          {variant.note && (
                            <span className="ml-2 text-[0.78rem] text-ink-soft">
                              ({variant.note})
                            </span>
                          )}
                          <span className="ml-3 font-display text-[0.95rem] text-gold-dark">
                            {formatRupiah(variant.price)}
                          </span>
                        </div>
                        <QuantityStepper
                          qty={qty}
                          label={`${item.name} ${variant.label}`}
                          onIncrement={() => onChangeQty(key, qty + 1)}
                          onDecrement={() => onChangeQty(key, Math.max(0, qty - 1))}
                        />
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
