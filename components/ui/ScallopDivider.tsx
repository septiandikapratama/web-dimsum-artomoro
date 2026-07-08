type DividerProps = {
  tone?: "cream" | "maroon";
};

export default function ScallopDivider({ tone = "cream" }: DividerProps) {
  const bg = tone === "maroon" ? "bg-maroon" : "bg-cream";

  return (
    <div className={`${bg} flex items-center justify-center gap-4 py-5`}>
      <span className="h-px w-16 bg-gradient-to-r from-transparent to-gold/50 sm:w-28" />
      <span className="text-[0.7rem] text-gold">◆</span>
      <span className="h-px w-16 bg-gradient-to-l from-transparent to-gold/50 sm:w-28" />
    </div>
  );
}
