"use client";

import { useState } from "react";
import Link from "next/link";
import { SITE_NAME, SITE_HOST, CURRENT_YEAR } from "@/config/site";

interface FooterProps {
  tags?: string[];
}

export default function Footer({ tags = [] }: FooterProps) {
  const seoTags = tags.length ? tags.join(", ") : "";

  const [copied, setCopied] = useState(false);

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
    <footer className="bg-[#08080C] text-slate-400 mt-auto border-t border-white/10 font-sans antialiased">
      {/* Keywords Scroll Ticker */}
      <div className="bg-[#060609] border-b border-white/5 py-3 overflow-hidden">
        <p className="text-slate-500 text-[10px] text-center px-4 leading-relaxed max-w-5xl mx-auto font-mono">
          Download All Yono Games Apps From Here – Joy Rummy, INR Rummy, Boss Rummy, Rummy 888, Rummy 77, Rummy Ludo, Ok Rummy, Game Rummy, Rumble Rummy, Love Rummy, Hi Rummy, Top Rummy, Rummy 91, IND Rummy, Abc Rummy, Jaiho Rummy, Yono Rummy, Gogo Rummy, Ever 777, Yono 777, 777 Game, Svip 777, Hindi 777, 777 Club INR, Yes Spin, Share Slots, Maha Games, Jaiho Win, Jaiho Slots, Jaiho Arcads, Jaiho Spin, IND Club, MQM Bet, MDM Bet, MKM Bet, Rani Slots, Saga Slots, Slots Spin, India Slots, Slots Winner, Spin Winner, Spin Gold, Spin 101, Spin Crush, Yono Games, Yono Slots, Yono Arcade, Yono Vip, Neta Vip, 789 Jackpots, 567 Slots, 101hz, Bingo 101, Bet 213 Slots.
        </p>
      </div>

      {/* SEO Text */}
      <div className="border-b border-white/5 py-4 bg-[#0A0B10]">
        <p className="text-slate-400 text-[11px] text-center px-6 max-w-4xl mx-auto leading-relaxed">
          {SITE_NAME} – Download All Yono Apps, Jaiho Game &amp; Rummy Apps. Get up to ₹1500 Bonus With Min. Redeem ₹100 in Each Yono App.
          {" "}
          {seoTags && `${seoTags}, `}
          Yono 777, Jaiho 777, Spin 777, Ever 777, Yn 777, Hindi 777, 777 Club, Yes Spin, Share Slots, Maha Games, YoYo Slots, Rummy 51, Bet 213 Slots.
        </p>
      </div>

      {/* Main Container */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10">
        {/* Responsible Gaming Notice Card */}
        <div className="bg-[#121320] border border-amber-500/30 rounded-3xl p-6 mb-10 shadow-2xl backdrop-blur-xl">
          <h3 className="text-amber-400 font-extrabold text-xs tracking-wider uppercase mb-3 flex items-center gap-2">
            <span>⚠️</span> Important Responsible Play Notice
          </h3>
          <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
            <strong>{SITE_HOST}</strong> is an independent directory and does <strong>not</strong> operate or control the apps listed here. Real-money gaming can be addictive and carries financial risk. Strictly restricted to{" "}
            <strong className="text-amber-400 font-bold">18+ players</strong>.
          </p>
          <p className="text-slate-400 text-xs mt-3">
            Please review our{" "}
            <Link href="/disclaimer" className="text-violet-400 hover:text-violet-300 underline font-bold transition-colors">
              Disclaimer Page
            </Link>{" "}
            and individual app terms before depositing.
          </p>
          <p className="text-rose-400/90 text-xs mt-3.5 font-medium border-t border-white/10 pt-3">
            State Restrictions: Real-money gaming is restricted by state laws in{" "}
            <strong>Andhra Pradesh, Sikkim, Nagaland, Assam, Telangana, Odisha, and Tamil Nadu</strong>.
          </p>
        </div>

        {/* Feature Highlights Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10 text-xs border-b border-white/10 pb-8">
          <div className="space-y-1.5 p-4 rounded-2xl bg-white/[0.02] border border-white/5">
            <h4 className="text-white font-extrabold tracking-tight text-sm flex items-center gap-2">
              <span className="text-violet-400">⚡</span> Yono Rummy APK
            </h4>
            <p className="text-slate-400 leading-relaxed text-[11px]">
              India&apos;s leading card game app. Download &amp; claim daily signup bonuses with 24/7 withdrawals.
            </p>
          </div>

          <div className="space-y-1.5 p-4 rounded-2xl bg-white/[0.02] border border-white/5">
            <h4 className="text-white font-extrabold tracking-tight text-sm flex items-center gap-2">
              <span className="text-amber-400">👑</span> Yono VIP Access
            </h4>
            <p className="text-slate-400 leading-relaxed text-[11px]">
              High-stakes rummy tables, VIP bonuses, and priority customer support for premium players.
            </p>
          </div>

          <div className="space-y-1.5 p-4 rounded-2xl bg-white/[0.02] border border-white/5">
            <h4 className="text-white font-extrabold tracking-tight text-sm flex items-center gap-2">
              <span className="text-emerald-400">🛡️</span> Verified Downloads
            </h4>
            <p className="text-slate-400 leading-relaxed text-[11px]">
              Fast direct APK links tested for malware, spyware, and security before publication.
            </p>
          </div>
        </div>

        {/* Share Button Row */}
        <div className="flex flex-col sm:flex-row items-center justify-between bg-[#121320] border border-white/10 rounded-2xl p-4 gap-4 mb-8">
          <div className="flex items-center gap-3 text-slate-300 text-xs font-semibold">
            <span className="text-lg">🔗</span>
            <span>Found this useful? Share the directory link with your friends!</span>
          </div>
          <button
            onClick={handleCopy}
            className={`w-full sm:w-auto flex items-center justify-center gap-2 text-white text-xs font-extrabold px-6 py-2.5 rounded-xl shadow-lg transition-all duration-200 cursor-pointer border border-white/10 ${copied
              ? "bg-emerald-600 shadow-emerald-600/20"
              : "bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 shadow-violet-600/20"
              }`}
          >
            <span>{copied ? "✅" : "📤"}</span>
            <span>{copied ? "Link Copied!" : "Copy Share Link"}</span>
          </button>
        </div>

        {/* Navigation Quick Links */}
        <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-3 mb-8 text-xs font-bold">
          {[
            { label: "Home", href: "/" },
            { label: "All Yono Games", href: "/all-yono-games" },
            { label: "About Us", href: "/about" },
            { label: "Blog", href: "/blog" },
            { label: "Store APK", href: "/apk" },
            { label: "Contact Us", href: "/contact" },
            { label: "Privacy Policy", href: "/privacy-policy" },
            { label: "Disclaimer", href: "/disclaimer" },
          ].map((link, idx, arr) => (
            <div key={link.href} className="flex items-center gap-6">
              <Link
                href={link.href}
                className="text-slate-400 hover:text-white transition-colors duration-150"
              >
                {link.label}
              </Link>
              {idx < arr.length - 1 && <span className="text-slate-700 text-[10px] select-none">&bull;</span>}
            </div>
          ))}
        </div>

        {/* Copyright Footer */}
        <div className="border-t border-white/10 pt-6 text-center">
          <p className="text-slate-500 text-[11px] tracking-wide font-medium">
            Copyright © {CURRENT_YEAR} {SITE_NAME} | All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

