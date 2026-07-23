import React from "react";

interface ErrorStateProps {
  title?: string;
  message?: string;
  onRetry?: () => void;
}

export function ErrorState({
  title = "Unable to Load Games",
  message = "A temporary network error occurred while connecting to our servers. Please check your connection and retry.",
  onRetry,
}: ErrorStateProps) {
  return (
    <div
      role="alert"
      className="text-center py-14 px-6 bg-rose-500/10 border border-rose-500/30 rounded-3xl backdrop-blur-xl shadow-2xl space-y-4 max-w-md mx-auto my-6"
    >
      <div className="w-16 h-16 rounded-2xl bg-rose-500/20 border border-rose-500/40 flex items-center justify-center text-3xl mx-auto text-rose-400">
        ⚠️
      </div>

      <div className="space-y-1.5">
        <h3 className="text-lg sm:text-xl font-extrabold text-white">{title}</h3>
        <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">{message}</p>
      </div>

      {onRetry && (
        <div className="pt-2">
          <button
            onClick={onRetry}
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-rose-600 to-red-600 hover:from-rose-500 hover:to-red-500 text-white font-black text-xs sm:text-sm rounded-xl shadow-xl shadow-rose-600/30 active:scale-95 transition-all duration-150 cursor-pointer uppercase tracking-widest border border-rose-400/30"
          >
            <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
            <span>Retry Connection</span>
          </button>
        </div>
      )}
    </div>
  );
}
