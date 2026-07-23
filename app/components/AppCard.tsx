import Link from "next/link";
import Image from "next/image";
import type { Game } from "../types";
import { HugeiconsIcon } from "@hugeicons/react";
import { Gift, GiftCard02FreeIcons, Wallet02FreeIcons } from "@hugeicons/core-free-icons";

interface AppCardProps {
  game: Game;
  index: number;
}

export default function AppCard({ game, index }: AppCardProps) {
  if (!game) return null;
  return (
    <div className="group relative flex items-center gap-3 sm:gap-4 p-4 sm:p-4.5 rounded-2xl bg-[#12131F]/80 hover:bg-[#18192A]/90 border border-white/10 hover:border-violet-500/50 transition-all duration-300 shadow-lg hover:shadow-violet-500/15 backdrop-blur-xl">
      {/* Icon & Rank Container */}
      <div className="relative shrink-0 w-14 h-14 sm:w-16 sm:h-16">
        {/* Index Badge */}
        <div className="absolute -top-2 -left-2 bg-gradient-to-br from-violet-600 to-indigo-700 text-white font-black text-[9px] sm:text-[10px] w-5.5 h-5.5 rounded-lg flex justify-center items-center shadow-md z-10 border border-violet-400/30">
          {index < 10 ? `0${index}` : index}
        </div>

        {/* App Logo */}
        <div className="w-full h-full rounded-2xl overflow-hidden shadow-md border border-white/10 group-hover:scale-105 group-hover:border-violet-500/40 transition-all duration-300 bg-gradient-to-br from-violet-900 to-indigo-950 flex items-center justify-center">
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
            <span className="text-2xl sm:text-3xl">{game.icon || "🎮"}</span>
          )}
        </div>
      </div>

      {/* App Information */}
      <div className="flex-1 min-w-0 flex flex-col justify-center">
        <div className="flex items-center gap-2">
          <h3 className="font-extrabold text-white text-sm sm:text-base leading-snug group-hover:text-violet-300 transition-colors duration-200 truncate">
            {game.name}
          </h3>
          <span className="hidden xs:inline-flex items-center gap-1 text-[9px] font-black text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-1.5 py-0.5 rounded uppercase">
            ✓ Safe
          </span>
        </div>

        {/* Rating and Size Details row */}
        <div className="flex items-center gap-2 mt-1 text-[11px] font-bold text-slate-400">
          <span className="flex items-center gap-1 text-amber-400">
            <span aria-hidden="true">★</span> <span className="text-slate-300 font-semibold">{game.rating || 4.8}</span>
          </span>
          <span className="text-slate-600">•</span>
          <span className="text-slate-400 font-medium">{game.size || "35 MB"}</span>
          {game.isNewGame && (
            <>
              <span className="text-slate-600">•</span>
              <span className="bg-rose-500/20 text-rose-400 border border-rose-500/30 uppercase tracking-widest text-[8px] font-black px-1.5 py-0.5 rounded">
                NEW
              </span>
            </>
          )}
        </div>

        {/* Bonus & Withdrawal Tags */}
        <div className="flex flex-col gap-1.5 sm:gap-2 mt-2">
          {game.signupBonus != null && (
            <div className="inline-flex items-center gap-1 text-[10px] sm:text-[11px] text-rose-300 font-bold bg-rose-500/15 border border-rose-500/30 px-2 py-0.5 rounded-full">
              <span className="text-xs">
                <HugeiconsIcon size={18} icon={Gift} />
              </span>
              <span>Signup Bonus ₹{game.signupBonus}</span>
            </div>
          )}
          {game.minWithdraw != null && (
            <div className="inline-flex items-center gap-1 text-[10px] sm:text-[11px] text-emerald-300 font-bold bg-emerald-500/15 border border-emerald-500/30 px-2 py-0.5 rounded-full">

              <HugeiconsIcon size={18} icon={Wallet02FreeIcons} />
              <span>Min Withdrawal ₹{game.minWithdraw}</span>
            </div>
          )}
        </div>
      </div>

      {/* Download Action Button */}
      <Link
        href={`/${game.slug}`}
        className="shrink-0 inline-flex items-center justify-center gap-1.5 bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white text-xs font-extrabold px-3 sm:px-4 py-2.5 rounded-xl border border-violet-400/30 shadow-lg shadow-violet-600/20 active:scale-95 transition-all duration-200 cursor-pointer"
      >
        <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
        </svg>
        <span className="sm:inline">Download</span>
      </Link>
    </div>
  );
}


