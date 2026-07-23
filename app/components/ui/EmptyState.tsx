import React from "react";

interface EmptyStateProps {
  title?: string;
  description?: string;
  actionText?: string;
  onAction?: () => void;
  icon?: React.ReactNode;
}

export function EmptyState({
  title = "No Games Found",
  description = "We couldn't find any games matching your current search or category filter.",
  actionText = "Clear Filters & Search",
  onAction,
  icon,
}: EmptyStateProps) {
  return (
    <div
      role="status"
      className="text-center py-14 px-6 bg-[#12131F]/90 border border-white/10 rounded-3xl backdrop-blur-xl shadow-2xl space-y-4 max-w-md mx-auto my-6"
    >
      <div className="w-16 h-16 rounded-2xl bg-violet-600/15 border border-violet-500/30 flex items-center justify-center text-3xl mx-auto text-violet-300">
        {icon || "🔍"}
      </div>

      <div className="space-y-1.5">
        <h3 className="text-lg sm:text-xl font-extrabold text-white">{title}</h3>
        <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">{description}</p>
      </div>

      {onAction && (
        <div className="pt-2">
          <button
            onClick={onAction}
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white font-extrabold text-xs sm:text-sm rounded-xl shadow-lg shadow-violet-600/25 active:scale-95 transition-all duration-150 cursor-pointer border border-violet-400/30 uppercase tracking-wider"
          >
            <span>{actionText}</span>
          </button>
        </div>
      )}
    </div>
  );
}
