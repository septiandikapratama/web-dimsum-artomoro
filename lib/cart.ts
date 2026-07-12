import type { MenuItem } from "@/data/menu";

export type CartLine = {
  key: string;
  itemName: string;
  variantLabel: string;
  price: number;
  qty: number;
  subtotal: number;
};

export function cartKey(itemId: string, variantLabel: string): string {
  return `${itemId}::${variantLabel}`;
}

// Cart state is a flat { "itemId::variantLabel": qty } record. This turns it
// into renderable lines (name/price looked up from the menu data) and drops
// any zero-qty entries.
export function buildCartLines(
  cart: Record<string, number>,
  items: MenuItem[],
): CartLine[] {
  const lines: CartLine[] = [];

  for (const [key, qty] of Object.entries(cart)) {
    if (qty <= 0) continue;

    const [itemId, variantLabel] = key.split("::");
    const item = items.find((candidate) => candidate.id === itemId);
    const variant = item?.variants.find((candidate) => candidate.label === variantLabel);
    if (!item || !variant) continue;

    lines.push({
      key,
      itemName: item.name,
      variantLabel: variant.label,
      price: variant.price,
      qty,
      subtotal: variant.price * qty,
    });
  }

  return lines;
}
