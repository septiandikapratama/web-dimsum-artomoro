const words = [
  "DIMSUM MENTAI",
  "DIMSUM ORIGINAL",
  "DIMSUM KUAH",
  "DIMSUM BAKAR",
  "WONTON CHILI OIL",
];

function TickerContent() {
  return (
    <span className="text-[0.78rem] uppercase tracking-[0.28em] text-gold/90">
      {words.map((word) => (
        <span key={word}>
          {word} <span className="mx-4 text-gold/45">◆</span>{" "}
        </span>
      ))}
    </span>
  );
}

export default function Ticker() {
  return (
    <div
      className="overflow-hidden border-y border-gold/20 bg-maroon-deep py-3.5"
      aria-hidden="true"
    >
      <div className="ticker-track flex gap-8 whitespace-nowrap">
        <TickerContent />
        <TickerContent />
      </div>
    </div>
  );
}
