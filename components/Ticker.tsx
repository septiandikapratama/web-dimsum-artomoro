const words = [
  "DIMSUM MENTAI",
  "DIMSUM ORIGINAL",
  "DIMSUM KUAH",
  "DIMSUM BAKAR",
  "WONTON CHILI OIL",
];

// Repeat the word list enough times that a single sequence is wider than
// large screens; two identical sequences keep the -50% loop seamless while
// guaranteeing the track always fills the viewport (no empty gap / cut-off).
const REPEAT = 4;

function TickerSequence() {
  return (
    <span className="text-[0.78rem] uppercase tracking-[0.28em] text-gold/90">
      {Array.from({ length: REPEAT }).flatMap((_, r) =>
        words.map((word) => (
          <span key={`${r}-${word}`}>
            {word} <span className="mx-4 text-gold/45">◆</span>{" "}
          </span>
        )),
      )}
    </span>
  );
}

export default function Ticker() {
  return (
    <div
      className="overflow-hidden border-y border-gold/20 bg-maroon-deep py-3.5"
      aria-hidden="true"
    >
      <div className="ticker-track flex w-max whitespace-nowrap">
        <TickerSequence />
        <TickerSequence />
      </div>
    </div>
  );
}
