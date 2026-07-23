import Link from "next/link";
import Image from "next/image";
import type { Game } from "../types";

interface AppCardProps {
  game: Game;
  index: number;
}

export default function AppCard({ game, index }: AppCardProps) {
  if (!game) return null;
  return (
    <div className="flex items-center gap-3 sm:gap-4 hover:bg-slate-50/70 p-4 transition-all duration-300 group relative">
      {/* Icon / Logo Container */}
      <div className="relative shrink-0 w-13 h-13 sm:w-16 sm:h-16 ml-0.5">
        {/* Index Badge on Logo */}
        <div className="absolute -top-1.5 -left-1.5 bg-slate-900 text-white font-black text-[9px] sm:text-[10px] w-5 h-5 rounded-md flex justify-center items-center shadow-md z-10 leading-none border border-slate-800">
          {index}
        </div>
        
        {/* Logo Image */}
        <div className="w-full h-full rounded-2xl overflow-hidden shadow-sm border border-slate-200/80 group-hover:scale-[1.03] group-hover:shadow-md transition-all duration-300 bg-gradient-to-br from-indigo-500 to-blue-600 flex items-center justify-center cursor-default">
          {game.logoUrl ? (
            <Image
              src={game.logoUrl}
              alt={game.logoAlt || `${game.name} logo`}
              title={game.logoTitle || game.name}
              width={64}
              height={64}
              className="w-full h-full object-cover"
              unoptimized
            />
          ) : (
            <span className="text-xl sm:text-2xl">{game.icon || "🎮"}</span>
          )}
        </div>
      </div>

      {/* App Info */}
      <div className="flex-1 min-w-0 flex flex-col justify-center">
        <h3 className="font-extrabold text-slate-800 text-[13px] sm:text-base leading-snug group-hover:text-blue-600 transition-colors duration-200 truncate">
          {game.name}
        </h3>
        
        {/* Rating and Size Details row */}
        <div className="flex items-center gap-1.5 mt-0.5 text-[10px] font-bold text-slate-400">
          <span className="flex items-center gap-0.5 text-amber-500">
            ★ <span className="text-slate-500 font-semibold">{game.rating || 4.5}</span>
          </span>
          <span className="text-slate-200">•</span>
          <span className="text-slate-500 font-semibold">{game.size || "34 MB"}</span>
          {game.isNewGame && (
            <>
              <span className="text-slate-200">•</span>
              <span className="text-rose-500 uppercase tracking-wider text-[8px] font-black">NEW</span>
            </>
          )}
        </div>

        <div className="flex flex-col items-start sm:flex-row sm:items-center gap-1 sm:gap-2 mt-2">
          {game.signupBonus != null && (
            <div className="flex items-center gap-1 text-[10px] sm:text-[11px] text-rose-500 font-bold whitespace-nowrap bg-rose-50 px-2 py-0.5 rounded-full border border-rose-100/50">
              <span className="shrink-0 text-[11px] sm:text-[12px] leading-none">🎁</span>
              <span className="truncate">Bonus ₹{game.signupBonus}</span>
            </div>
          )}
          {game.minWithdraw != null && (
            <div className="flex items-center gap-1 text-[10px] sm:text-[11px] text-emerald-600 font-bold whitespace-nowrap bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-100/50">
              <span className="shrink-0 text-[11px] sm:text-[12px] leading-none">🏠</span>
              <span className="truncate">Min ₹{game.minWithdraw}</span>
            </div>
          )}
        </div>
      </div>

      {/* Download Button */}
      <Link
        href={`/${game.slug}`}
        className="shrink-0 flex items-center justify-center gap-1.5 bg-slate-100 hover:bg-blue-600 hover:text-white text-slate-800 text-[11px] sm:text-xs font-black px-3.5 py-2 rounded-xl border border-slate-200/60 shadow-sm active:scale-95 hover:scale-[1.02] transition-all duration-200"
      >
        <svg className="w-3.5 h-3.5 shrink-0" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
        </svg>
        <span>Download</span>
      </Link>
    </div>
  );
}

