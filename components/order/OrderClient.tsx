"use client";

import { useMemo, useState } from "react";
import { menuItems } from "@/data/menu";
import { outlets, type Outlet } from "@/data/outlets";
import { buildCartLines } from "@/lib/cart";
import { buildOrderMessage } from "@/lib/order-message";
import { toWhatsAppHref } from "@/lib/phone";
import MenuList from "./MenuList";
import CartPanel from "./CartPanel";

export default function OrderClient() {
  const [selectedOutletNum, setSelectedOutletNum] = useState("");
  const [query, setQuery] = useState("");
  const [cart, setCart] = useState<Record<string, number>>({});
  const [customerName, setCustomerName] = useState("");
  const [phone, setPhone] = useState("");
  const [note, setNote] = useState("");

  const selectedOutlet: Outlet | null =
    outlets.find((outlet) => outlet.num === selectedOutletNum) ?? null;

  const filteredItems = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return menuItems;
    return menuItems.filter((item) => item.name.toLowerCase().includes(q));
  }, [query]);

  const cartLines = useMemo(() => buildCartLines(cart, menuItems), [cart]);
  const total = useMemo(
    () => cartLines.reduce((sum, line) => sum + line.subtotal, 0),
    [cartLines],
  );

  function handleChangeQty(key: string, qty: number) {
    setCart((prev) => {
      const next = { ...prev };
      if (qty <= 0) {
        delete next[key];
      } else {
        next[key] = qty;
      }
      return next;
    });
  }

  const isSubmitDisabled =
    !selectedOutlet || cartLines.length === 0 || !customerName.trim() || !phone.trim();

  function handleSubmit() {
    if (!selectedOutlet || isSubmitDisabled) return;

    const message = buildOrderMessage({
      outletName: selectedOutlet.name,
      customerName: customerName.trim(),
      phone: phone.trim(),
      note,
      lines: cartLines,
      total,
    });

    const href = toWhatsAppHref(selectedOutlet.whatsapp, message);
    window.open(href, "_blank", "noopener,noreferrer");
  }

  return (
    <div className="grid gap-8 pb-28 lg:grid-cols-[1fr_340px] lg:items-start lg:pb-16">
      <div>
        <div className="grid gap-3 sm:grid-cols-2">
          <div>
            <label htmlFor="outlet" className="text-[0.8rem] font-semibold text-ink">
              Outlet
            </label>
            <select
              id="outlet"
              value={selectedOutletNum}
              onChange={(e) => setSelectedOutletNum(e.target.value)}
              className="mt-1.5 w-full rounded-full border border-gold/40 bg-white px-4 py-2.5 text-[0.9rem] text-ink focus:border-gold focus:outline-none"
            >
              <option value="">Pilih outlet...</option>
              {outlets.map((outlet) => (
                <option key={outlet.num} value={outlet.num}>
                  {outlet.name}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="search" className="text-[0.8rem] font-semibold text-ink">
              Cari menu
            </label>
            <input
              id="search"
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Misal: mentai, kuah, wonton..."
              className="mt-1.5 w-full rounded-full border border-gold/40 bg-white px-4 py-2.5 text-[0.9rem] text-ink placeholder:text-ink-soft/60 focus:border-gold focus:outline-none"
            />
          </div>
        </div>

        <MenuList items={filteredItems} cart={cart} onChangeQty={handleChangeQty} />
      </div>

      <CartPanel
        outlet={selectedOutlet}
        lines={cartLines}
        total={total}
        onRemoveLine={(key) => handleChangeQty(key, 0)}
        customerName={customerName}
        onCustomerNameChange={setCustomerName}
        phone={phone}
        onPhoneChange={setPhone}
        note={note}
        onNoteChange={setNote}
        onSubmit={handleSubmit}
        isSubmitDisabled={isSubmitDisabled}
      />
    </div>
  );
}
