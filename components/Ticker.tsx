const words = [
  "DIMSUM MENTAI",
  "DIMSUM ORIGINAL",
  "DIMSUM KUAH",
  "DIMSUM BAKAR",
  "WONTON CHILI OIL",
];

function TickerContent() {
  return (
    <span className="font-display text-[1.05rem] tracking-wide text-coklat">
      {words.map((word) => (
        <span key={word}>
          {word} <b className="mx-2.5 text-merah">•</b>{" "}
        </span>
      ))}
    </span>
  );
}

export default function Ticker() {
  return (
    <div
      className="overflow-hidden border-y-[3px] border-coklat bg-kuning py-3"
      aria-hidden="true"
    >
      <div className="ticker-track flex gap-11 whitespace-nowrap">
        <TickerContent />
        <TickerContent />
      </div>
    </div>
  );
}
