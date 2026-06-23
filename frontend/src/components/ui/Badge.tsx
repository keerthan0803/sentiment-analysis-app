interface BadgeProps {
  label: string;
  type?: "positive" | "negative" | "neutral" | "info";
}

export default function Badge({ label, type = "info" }: BadgeProps) {
  const styles = {
    positive: "bg-emerald-50 text-emerald-700 border border-emerald-200/80 shadow-[0_2px_8px_rgba(16,185,129,0.06)]",
    negative: "bg-rose-50 text-rose-700 border border-rose-200/80 shadow-[0_2px_8px_rgba(244,63,94,0.06)]",
    neutral: "bg-amber-50 text-amber-700 border border-amber-200/80 shadow-[0_2px_8px_rgba(245,158,11,0.06)]",
    info: "bg-indigo-50 text-indigo-700 border border-indigo-200/80 shadow-[0_2px_8px_rgba(99,102,241,0.06)]"
  };

  return (
    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase ${styles[type]}`}>
      {label}
    </span>
  );
}
