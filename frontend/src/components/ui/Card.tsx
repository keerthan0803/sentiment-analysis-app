import type { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  hoverable?: boolean;
  onClick?: () => void;
}

export default function Card({ children, className = "", hoverable = false, onClick }: CardProps) {
  return (
    <div
      onClick={onClick}
      className={`bg-white/90 backdrop-blur-lg border border-slate-200/80 rounded-2xl p-6 transition-all duration-300 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] ${
        onClick ? "cursor-pointer" : ""
      } ${
        hoverable ? "hover:border-indigo-500/40 hover:shadow-[0_10px_30px_-5px_rgba(99,102,241,0.12)] hover:-translate-y-1" : ""
      } ${className}`}
    >
      {children}
    </div>
  );
}
