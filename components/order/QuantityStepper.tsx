type QuantityStepperProps = {
  qty: number;
  label: string;
  onIncrement: () => void;
  onDecrement: () => void;
};

export default function QuantityStepper({
  qty,
  label,
  onIncrement,
  onDecrement,
}: QuantityStepperProps) {
  return (
    <div className="flex flex-none items-center gap-2.5">
      <button
        type="button"
        onClick={onDecrement}
        disabled={qty === 0}
        aria-label={`Kurangi ${label}`}
        className="grid h-8 w-8 flex-none place-items-center rounded-full border border-gold/40 text-maroon transition-colors hover:bg-gold/10 disabled:opacity-30 disabled:hover:bg-transparent"
      >
        −
      </button>
      <span className="w-5 text-center text-[0.95rem] font-semibold tabular-nums text-ink">
        {qty}
      </span>
      <button
        type="button"
        onClick={onIncrement}
        aria-label={`Tambah ${label}`}
        className="grid h-8 w-8 flex-none place-items-center rounded-full border border-gold/40 text-maroon transition-colors hover:bg-gold/10"
      >
        +
      </button>
    </div>
  );
}
