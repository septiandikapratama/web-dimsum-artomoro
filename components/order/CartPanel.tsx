"use client";

import { useState } from "react";
import type { Outlet } from "@/data/outlets";
import type { CartLine } from "@/lib/cart";
import { formatRupiah } from "@/lib/currency";
import Button from "@/components/ui/Button";

type CartPanelProps = {
  outlet: Outlet | null;
  lines: CartLine[];
  total: number;
  onRemoveLine: (key: string) => void;
  customerName: string;
  onCustomerNameChange: (value: string) => void;
  phone: string;
  onPhoneChange: (value: string) => void;
  note: string;
  onNoteChange: (value: string) => void;
  onSubmit: () => void;
  isSubmitDisabled: boolean;
};

function CartBody(props: CartPanelProps) {
  const {
    outlet,
    lines,
    total,
    onRemoveLine,
    customerName,
    onCustomerNameChange,
    phone,
    onPhoneChange,
    note,
    onNoteChange,
    onSubmit,
    isSubmitDisabled,
  } = props;

  return (
    <>
      <h2 className="text-[1.2rem] text-maroon">Ringkasan Pesanan</h2>
      <p className="mt-1 text-[0.82rem] text-ink-soft">
        {outlet ? outlet.name : "Belum pilih outlet"}
      </p>

      {lines.length === 0 ? (
        <p className="mt-6 rounded-brand border border-dashed border-gold/40 px-4 py-6 text-center text-[0.86rem] text-ink-soft">
          Belum ada item dipilih. Tambahkan menu dari daftar di samping.
        </p>
      ) : (
        <ul className="mt-5 flex flex-col gap-3 border-t border-gold/15 pt-4">
          {lines.map((line) => (
            <li key={line.key} className="flex items-start justify-between gap-3 text-[0.88rem]">
              <div>
                <p className="font-medium text-ink">
                  {line.itemName} <span className="text-ink-soft">({line.variantLabel})</span>
                </p>
                <p className="text-[0.8rem] text-ink-soft">
                  {line.qty} x {formatRupiah(line.price)}
                </p>
              </div>
              <div className="flex flex-none items-center gap-2.5">
                <span className="font-display text-[0.95rem] text-gold-dark">
                  {formatRupiah(line.subtotal)}
                </span>
                <button
                  type="button"
                  onClick={() => onRemoveLine(line.key)}
                  aria-label={`Hapus ${line.itemName} (${line.variantLabel})`}
                  className="text-ink-soft transition-colors hover:text-maroon"
                >
                  ✕
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}

      <div className="mt-5 flex items-center justify-between border-t border-gold/20 pt-4">
        <span className="font-display text-[1.05rem] text-maroon">Total</span>
        <span className="font-display text-[1.25rem] text-gold-dark">{formatRupiah(total)}</span>
      </div>

      <div className="mt-6 flex flex-col gap-3">
        <div>
          <label htmlFor="customerName" className="text-[0.8rem] font-semibold text-ink">
            Nama Pemesan
          </label>
          <input
            id="customerName"
            type="text"
            value={customerName}
            onChange={(e) => onCustomerNameChange(e.target.value)}
            placeholder="Nama kamu"
            className="mt-1.5 w-full rounded-full border border-gold/40 bg-white px-4 py-2.5 text-[0.9rem] text-ink placeholder:text-ink-soft/60 focus:border-gold focus:outline-none"
          />
        </div>
        <div>
          <label htmlFor="customerPhone" className="text-[0.8rem] font-semibold text-ink">
            No. HP / WhatsApp
          </label>
          <input
            id="customerPhone"
            type="tel"
            value={phone}
            onChange={(e) => onPhoneChange(e.target.value)}
            placeholder="08xxxxxxxxxx"
            className="mt-1.5 w-full rounded-full border border-gold/40 bg-white px-4 py-2.5 text-[0.9rem] text-ink placeholder:text-ink-soft/60 focus:border-gold focus:outline-none"
          />
        </div>
        <div>
          <label htmlFor="customerNote" className="text-[0.8rem] font-semibold text-ink">
            Catatan <span className="font-normal text-ink-soft">(opsional)</span>
          </label>
          <textarea
            id="customerNote"
            value={note}
            onChange={(e) => onNoteChange(e.target.value)}
            placeholder="Contoh: kurangi pedas, antar jam 6 sore"
            rows={2}
            className="mt-1.5 w-full resize-none rounded-2xl border border-gold/40 bg-white px-4 py-2.5 text-[0.9rem] text-ink placeholder:text-ink-soft/60 focus:border-gold focus:outline-none"
          />
        </div>
      </div>

      <Button onClick={onSubmit} disabled={isSubmitDisabled} className="mt-5 w-full text-center">
        Kirim Pesanan via WhatsApp
      </Button>
      {isSubmitDisabled && (
        <p className="mt-2 text-center text-[0.76rem] text-ink-soft">
          Lengkapi outlet, minimal 1 menu, nama, dan No. HP untuk mengirim.
        </p>
      )}
    </>
  );
}

export default function CartPanel(props: CartPanelProps) {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const itemCount = props.lines.reduce((sum, line) => sum + line.qty, 0);

  return (
    <>
      {/* Desktop: sticky sidebar, always visible */}
      <aside className="hidden rounded-brand border border-gold/30 bg-white p-6 shadow-luxe lg:sticky lg:top-[85px] lg:block lg:self-start">
        <CartBody {...props} />
      </aside>

      {/* Mobile: collapsible bottom sheet */}
      <div className="fixed inset-x-0 bottom-0 z-40 lg:hidden">
        {isMobileOpen && (
          <div className="max-h-[75vh] overflow-y-auto rounded-t-3xl border-t border-gold/30 bg-white p-6 shadow-luxe">
            <CartBody {...props} />
          </div>
        )}
        <button
          type="button"
          onClick={() => setIsMobileOpen((open) => !open)}
          className="flex w-full items-center justify-between border-t border-gold/30 bg-maroon px-6 py-4 text-cream"
        >
          <span className="text-[0.9rem] font-semibold">
            {itemCount > 0 ? `${itemCount} item · ${formatRupiah(props.total)}` : "Keranjang"}
          </span>
          <span className="text-gold">{isMobileOpen ? "Tutup ▾" : "Lihat ▴"}</span>
        </button>
      </div>
    </>
  );
}
