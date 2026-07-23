import Link from "next/link";

export default function OfflinePage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0B0B0F] text-slate-100 px-4 relative overflow-hidden font-sans antialiased">
      {/* Ambient Glows */}
      <div className="absolute top-[20%] left-[-10%] w-[50%] h-[35%] rounded-full bg-violet-600/10 blur-[140px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-10%] w-[45%] h-[35%] rounded-full bg-indigo-600/10 blur-[140px] pointer-events-none" />

      <div className="max-w-md w-full text-center bg-[#12131F]/90 border border-white/10 rounded-3xl p-8 sm:p-10 shadow-2xl backdrop-blur-xl space-y-6 relative z-10">
        {/* Offline Wifi Icon Container */}
        <div className="w-20 h-20 rounded-3xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center mx-auto text-amber-400 shadow-xl shadow-amber-500/10">
          <svg className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 5.636a9 9 0 010 12.728m0 0l-2.829-2.829m2.829 2.829L21 21M15.536 8.464a5 5 0 010 7.072m0 0l-2.829-2.829m-4.243 2.829a5 5 0 010-7.072m0 0l2.829 2.829M3.636 5.636a9 9 0 0112.728 0M3 3l18 18" />
          </svg>
        </div>

        <div className="space-y-2">
          <div className="inline-flex items-center gap-1.5 bg-amber-500/15 border border-amber-500/30 text-amber-300 text-[10px] font-black tracking-widest uppercase px-3 py-1 rounded-full">
            <span>📡 NO INTERNET CONNECTION</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
            You are Currently Offline
          </h1>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            Please check your internet connection or Wi-Fi network to continue browsing new Yono apps.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
          <a
            href="/"
            className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-gradient-to-r from-violet-600 via-indigo-600 to-purple-600 hover:from-violet-500 hover:to-purple-500 text-white font-black text-xs sm:text-sm rounded-2xl shadow-xl shadow-violet-600/30 active:scale-95 transition-all duration-150 uppercase tracking-widest border border-violet-400/30 cursor-pointer"
          >
            <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
            <span>Retry Connection</span>
          </a>

          <Link
            href="/"
            className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-white font-bold text-xs sm:text-sm rounded-2xl transition-all duration-150 cursor-pointer"
          >
            <span>Return to Home</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
