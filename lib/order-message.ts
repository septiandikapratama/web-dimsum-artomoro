import type { CartLine } from "@/lib/cart";
import { formatRupiah } from "@/lib/currency";

type BuildOrderMessageArgs = {
  outletName: string;
  customerName: string;
  phone: string;
  note: string;
  lines: CartLine[];
  total: number;
};

export function buildOrderMessage({
  outletName,
  customerName,
  phone,
  note,
  lines,
  total,
}: BuildOrderMessageArgs): string {
  const parts: string[] = [
    `Halo, saya mau order dari *${outletName}*`,
    "",
    `Nama: ${customerName}`,
    `No HP: ${phone}`,
  ];

  if (note.trim()) {
    parts.push(`Catatan: ${note.trim()}`);
  }

  parts.push("", "*Detail Pesanan:*");

  for (const line of lines) {
    parts.push(`- ${line.itemName} (${line.variantLabel}) x${line.qty} = ${formatRupiah(line.subtotal)}`);
  }

  parts.push("", `*Total: ${formatRupiah(total)}*`, "", "Terima kasih!");

  return parts.join("\n");
}
