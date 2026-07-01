"use client";

import { useState } from "react";
import Link from "next/link";

export default function Footer() {
  const [copied, setCopied] = useState(false);
  const year = new Date().getFullYear();

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy link: ", err);
    }
  };

  return (
    <footer className="bg-slate-950 text-slate-400 mt-auto border-t border-slate-900 font-sans antialiased">
      {/* Keywords scroll ticker */}
      <div className="bg-slate-950 border-b border-slate-900 py-3.5 overflow-hidden">
        <p className="text-slate-500 text-[10px] text-center px-4 leading-relaxed max-w-4xl mx-auto">
          Download All Yono Games Apps From Here – Joy Rummy, INR Rummy, Boss Rummy, Rummy 888, Rummy 77, Rummy Ludo, Ok Rummy, Game Rummy, Rumble Rummy, Love Rummy, Hi Rummy, Top Rummy, Rummy 91, IND Rummy, Abc Rummy, Jaiho Rummy, Yono Rummy, Gogo Rummy, Ever 777, Yono 777, 777 Game, Svip 777, Hindi 777, 777 Club INR, Yes Spin, Share Slots, Maha Games, Jaiho Win, Jaiho Slots, Jaiho Arcads, Jaiho Spin, IND Club, MQM Bet, MDM Bet, MKM Bet, Rani Slots, Saga Slots, Slots Spin, India Slots, Slots Winner, Spin Winner, Spin Gold, Spin 101, Spin Crush, Yono Games, Yono Slots, Yono Arcade, Yono Vip, Neta Vip, 789 Jackpots, 567 Slots, 101hz, Bingo 101, Bet 213 Slots.
        </p>
      </div>

      {/* SEO text */}
      <div className="border-b border-slate-900/60 py-4">
        <p className="text-slate-400 text-[11px] text-center px-6 max-w-3xl mx-auto leading-relaxed">
          All Yono Games – Download All Yono Apps, Jaiho Game &amp; Rummy Apps Get ₹100 Bonus With Min. Redeem ₹100 in Each Yono Games. Yono 777, Jaiho 777, Spin 777, Ever 777, Yn 777, Jaiho 777, Spin 777, Hindi 777, 777 Club, Yes Spin, Share Slots, Maha Games, YoYo Slots, Rummy 51, Bet 213 Slots.
        </p>
      </div>

      {/* Important Notice + content */}
      <div className="max-w-3xl mx-auto px-4 py-8">
        {/* Disclaimer notice */}
        <div className="bg-slate-900/40 border border-slate-800/80 rounded-2xl p-5 mb-8 shadow-xl shadow-slate-950/20 backdrop-blur-sm">
          <h3 className="text-amber-400 font-extrabold text-xs tracking-wider uppercase mb-2.5 flex items-center gap-2">
            <span>⚠️</span> Important Notice All Yono Game
          </h3>
          <p className="text-slate-300 text-xs leading-relaxed">
            <strong>yonoworld.xyz</strong> does <strong>not</strong> run or control the apps listed here. The{" "}
            <strong>rummy app</strong> can be addictive and financially risky, so please play responsibly. Only for{" "}
            <strong className="text-amber-400">18+ players</strong>.
          </p>
          <p className="text-slate-400 text-xs mt-3.5">
            Please read our{" "}
            <Link href="/disclaimer" className="text-blue-400 hover:text-blue-300 underline transition-colors duration-150">
              Disclaimer page
            </Link>{" "}
            and the specific disclaimer for each app.
          </p>
          <p className="text-rose-400/90 text-xs mt-3 font-medium border-t border-slate-800/40 pt-3">
            Alert: <strong>Rummy</strong>, a skill-based game, is banned by the government in{" "}
            <strong>Andhra Pradesh, Sikkim, Nagaland, Assam, Arunachal Pradesh, Tamil Nadu, Odisha, and Telangana</strong>.
          </p>
        </div>

        {/* Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 text-xs border-b border-slate-900 pb-8">
          {/* Yono Rummy section */}
          <div className="space-y-1">
            <h4 className="text-white font-extrabold tracking-tight text-sm">Yono Rummy Apk :-</h4>
            <p className="text-slate-400 leading-relaxed">
              <a href="https://yonoworld.xyz/yono-rummy/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">
                Yonorummy
              </a>{" "}
              is India's top rummy platform. Download and get a daily bonus of ₹68. Offer valid for a limited time for all users.
            </p>
          </div>

          {/* Yono VIP section */}
          <div className="space-y-1">
            <h4 className="text-white font-extrabold tracking-tight text-sm">Yono VIP Apk :-</h4>
            <p className="text-slate-400 leading-relaxed">
              <a href="https://yonoworld.xyz/yono-vip/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">
                Yonovip
              </a>{" "}
              features high-stakes action. Play slots, poker, and rummy with 24/7 withdrawals. Best-in-class gaming experience.
            </p>
          </div>

          {/* Yono Games section */}
          <div className="space-y-1">
            <h4 className="text-white font-extrabold tracking-tight text-sm">Yono Games :-</h4>
            <p className="text-slate-400 leading-relaxed">
              <a href="https://yonoworld.xyz/yono-games/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">
                Yonogames
              </a>{" "}
              provides smooth slots and casino machines. Instant withdrawal and high-speed gameplay. Signup today and claim ₹89 free bonus.
            </p>
          </div>
        </div>

        {/* Big SEO paragraph */}
        <div className="mb-8 text-xs text-slate-500 leading-relaxed text-center max-w-2xl mx-auto">
          <h4 className="text-slate-300 font-bold text-xs tracking-normal mb-2 leading-snug">
            All Yono Games List Apk {year} ~ Latest Yono Games Slots, Bingo, Rummy Etc. Download today to showcase your skills and win daily rewards. Claim ₹500 to ₹1500 sign-up bonus with ₹100 minimum withdrawal on each app.
          </h4>
          <p>
            Yono Rummy | rummy Ludo | Rummy77 | Hindi 777 | Abc Rummy | Yono Vip | Ok Rummy | Yes Spin | India Slots | Yono 777 App | Yono Games | Yono App | Ok Rummy | 91 CLUB | RUMBLE RUMMY | Yono Vip | All Yono Games | Yono All Games | Ind Slots | Inr Rummy | Joy Rummy | Rummy 888 &nbsp;Yono All Games. Get signup bonuses ranging from ₹551 to ₹789 free in {year}.
          </p>
        </div>

        {/* Thanks */}
        <p className="text-center text-emerald-500/90 text-xs mb-6 font-bold tracking-widest uppercase">
          ✦ Thanks For Reading ✦
        </p>

        {/* Share row */}
        <div className="flex flex-col sm:flex-row items-center justify-between bg-slate-900/30 border border-slate-800/80 rounded-2xl p-4 gap-4 mb-8 shadow-inner">
          <div className="flex items-center gap-2.5 text-slate-300 text-xs font-semibold">
            <span className="text-base">🔗</span>
            <span>Spread the word! Share this list with friends.</span>
          </div>
          <button
            onClick={handleCopy}
            className={`w-full sm:w-auto flex items-center justify-center gap-2 text-white text-xs font-extrabold px-5 py-2.5 rounded-xl shadow-lg active:scale-95 transition-all duration-150 cursor-pointer ${copied
                ? "bg-gradient-to-r from-emerald-600 to-teal-600 shadow-emerald-600/10"
                : "bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 shadow-indigo-600/10"
              }`}
          >
            <span>{copied ? "✅" : "📤"}</span>
            <span>{copied ? "Copied!" : "Copy Share Link"}</span>
          </button>
        </div>

        {/* Footer links */}
        <div className="flex flex-wrap justify-center items-center gap-x-5 gap-y-2 mb-6 text-xs font-medium">
          {[
            { label: "Disclaimer", href: "/disclaimer" },
            { label: "Contact Us", href: "/contact" },
            { label: "Privacy Policy", href: "/privacy-policy" },
          ].map((link, idx, arr) => (
            <div key={link.href} className="flex items-center gap-5">
              <Link
                href={link.href}
                className="text-slate-400 hover:text-white transition-colors duration-150"
              >
                {link.label}
              </Link>
              {idx < arr.length - 1 && <span className="text-slate-800 text-[10px] select-none">&bull;</span>}
            </div>
          ))}
        </div>

        {/* Telegram CTA */}
        <div className="text-center mb-8 bg-gradient-to-r from-indigo-950/20 via-slate-900/40 to-indigo-950/20 border border-slate-900 rounded-3xl p-6 shadow-xl shadow-slate-950/20">
          <p className="text-slate-300 font-bold text-sm mb-3">Stay updated with new releases via Telegram:</p>
          <a
            href="https://t.me/+xiZV9WhjGl05OWU9"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white text-xs font-black px-6 py-2.5 rounded-xl shadow-lg shadow-blue-500/20 transition-all duration-200 hover:scale-[1.03]"
          >
            <svg className="w-4 h-4 shrink-0" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12.002 12.002 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
            </svg>
            <span>JOIN OUR TELEGRAM CHANNEL</span>
          </a>
        </div>

        {/* Copyright */}
        <div className="border-t border-slate-900/60 pt-5 text-center">
          <p className="text-slate-600 text-[10px] tracking-wide font-medium">
            Copyright © {year} All Yono Games | Powered by{" "}
            <a href="https://dinestx.com" target="_blank" rel="noopener noreferrer" className="hover:text-slate-400 transition-colors duration-150">
              Debbugers Inc.
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
