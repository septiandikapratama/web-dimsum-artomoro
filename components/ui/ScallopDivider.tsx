type ScallopDividerProps = {
  toDark?: boolean;
};

export default function ScallopDivider({ toDark = false }: ScallopDividerProps) {
  return <div className={`kukusan${toDark ? " ke-merah" : ""}`} />;
}
