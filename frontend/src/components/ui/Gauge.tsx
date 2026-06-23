interface GaugeProps {
  value: number; // For Polarity: -1 to 1. For Subjectivity: 0 to 1.
  type: "polarity" | "subjectivity";
}

export default function Gauge({ value, type }: GaugeProps) {
  if (type === "polarity") {
    // Value is from -1 to 1. Convert to percentage from 0 to 100 for the indicator knob position.
    const percentage = ((value + 1) / 2) * 100;
    
    // Choose color based on value
    let colorClass = "bg-amber-400 shadow-[0_2px_8px_rgba(245,158,11,0.4)]";
    if (value > 0.1) {
      colorClass = "bg-emerald-500 shadow-[0_2px_8px_rgba(16,185,129,0.4)]";
    } else if (value < -0.1) {
      colorClass = "bg-rose-500 shadow-[0_2px_8px_rgba(244,63,94,0.4)]";
    }

    return (
      <div className="space-y-2 mt-4">
        <div className="relative h-4 bg-slate-100 rounded-full border border-slate-200 overflow-visible mt-2">
          {/* Zero center marker line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-slate-300 z-0"></div>
          
          {/* Scale labels in track */}
          <div className="absolute inset-0 flex items-center justify-between px-3 text-[9px] text-slate-400 font-mono tracking-wider pointer-events-none select-none z-0">
            <span>-1.0</span>
            <span>0.0</span>
            <span>+1.0</span>
          </div>

          {/* Glowing active range indicator */}
          <div
            className={`absolute top-0 bottom-0 transition-all duration-700 rounded-full ${
              value >= 0 ? "left-1/2" : ""
            }`}
            style={{
              left: value < 0 ? `${percentage}%` : "50%",
              width: `${Math.abs(percentage - 50)}%`,
              backgroundColor: value > 0.1 ? "rgba(16, 185, 129, 0.08)" : value < -0.1 ? "rgba(244, 63, 94, 0.08)" : "rgba(245, 158, 11, 0.08)"
            }}
          />

          {/* Sliding knob */}
          <div
            className={`absolute top-1/2 -translate-y-1/2 -ml-2.5 w-5 h-5 rounded-full border-2 border-white transition-all duration-700 ease-out z-10 ${colorClass}`}
            style={{ left: `${percentage}%` }}
          />
        </div>
        
        <div className="flex justify-between text-xs font-medium px-1">
          <span className="text-rose-600 font-semibold">Negative</span>
          <span className="text-slate-400">Neutral</span>
          <span className="text-emerald-600 font-semibold">Positive</span>
        </div>
      </div>
    );
  } else {
    // Subjectivity is from 0 to 1.
    const percentage = value * 100;
    
    return (
      <div className="space-y-2 mt-4">
        <div className="relative h-4 bg-slate-100 rounded-full border border-slate-200 overflow-hidden mt-2">
          {/* Progress fill */}
          <div
            className="h-full rounded-full transition-all duration-700 ease-out relative bg-gradient-to-r from-indigo-500 to-violet-500 shadow-[0_2px_8px_rgba(99,102,241,0.15)]"
            style={{ width: `${percentage}%` }}
          />
          
          {/* Scale labels */}
          <div className="absolute inset-0 flex items-center justify-between px-3 text-[9px] text-slate-400 font-mono tracking-wider pointer-events-none select-none">
            <span>0%</span>
            <span>50%</span>
            <span>100%</span>
          </div>
        </div>

        <div className="flex justify-between text-xs font-medium px-1">
          <span className="text-indigo-600">Objective (Facts)</span>
          <span className="text-violet-600">Subjective (Opinion)</span>
        </div>
      </div>
    );
  }
}
