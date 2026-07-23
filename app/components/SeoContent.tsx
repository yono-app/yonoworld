import React from "react";
import { SITE_NAME } from "@/config/site";

const cards = [
  {
    title: "Latest Apps List",
    text: "Updated daily with the newest Yono Games, Rummy apps, and Slots releases.",
  },
  {
    title: "Verified Bonuses",
    text: "Clear breakdown of Signup Bonuses, Daily Login offers, and minimum withdrawal limits.",
  },
  {
    title: "Fast Direct APK",
    text: "High-speed mobile-optimized direct APK downloads with zero adware or malware.",
  },
  {
    title: "Telegram Alerts",
    text: "Join our official Telegram community for daily gift codes, promos, and withdrawal proofs.",
  },
];

const downloadSteps = [
  { step: 1, title: "Choose App", text: "Select your favorite Yono game from our directory." },
  { step: 2, title: "Click Download", text: "Tap the download button to access the official APK file." },
  { step: 3, title: "Install & Claim Bonus", text: "Install APK, bind your phone number, and claim signup rewards." },
];

const SeoContent = () => {
  return (
    <section className="py-12 md:py-16 bg-[#0B0B0F] border-t border-white/10 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-10 relative z-10">
        {/* Main Title */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-1.5 bg-violet-500/10 text-violet-300 border border-violet-500/20 text-[10px] font-black tracking-widest uppercase px-3 py-1 rounded-full">
            <span>🚀 OFFICIAL PLATFORM GUIDE</span>
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-white leading-snug">
            All Yono Games Download - Latest Yono Apps List 2026
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-violet-600 to-indigo-600 mx-auto rounded-full" />
        </div>

        {/* Intro Paragraph Card */}
        <div className="p-6 rounded-3xl bg-[#12131F]/90 border border-white/10 backdrop-blur-xl shadow-xl space-y-4 text-slate-300 text-sm md:text-base leading-relaxed text-justify">
          <p>
            <strong className="text-violet-400 font-extrabold">{SITE_NAME}</strong> is your premier destination for the latest verified Yono Games, Rummy Apps, Slots, and Teen Patti applications. Each listed app features detailed insights on welcome bonuses, minimum withdrawal limits, ratings, and instant download links.
          </p>
          <p>
            Browse our directory to discover exclusive welcome offers, daily bonus rewards, and refer-and-earn opportunities. Please verify withdrawal rules and risk notices before depositing funds.
          </p>
        </div>

        {/* Key Features Grid */}
        <div className="grid sm:grid-cols-2 gap-4">
          {cards.map((c, idx) => (
            <div key={idx} className="p-5 rounded-2xl bg-[#12131F]/80 border border-white/10 hover:border-violet-500/40 transition-all duration-300 space-y-1.5">
              <h4 className="font-extrabold text-white text-sm md:text-base flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-violet-500 shrink-0" />
                {c.title}
              </h4>
              <p className="text-xs md:text-sm text-slate-400 leading-relaxed pl-4">{c.text}</p>
            </div>
          ))}
        </div>

        {/* How to Download Steps */}
        <div className="p-6 sm:p-8 rounded-3xl bg-[#12131F]/90 border border-white/10 backdrop-blur-xl space-y-6">
          <h3 className="text-lg md:text-xl font-extrabold text-white flex items-center gap-2.5">
            <span className="w-3 h-3 rounded-full bg-violet-500 inline-block" />
            How To Download All Yono Games?
          </h3>

          <p className="text-slate-300 text-sm md:text-base leading-relaxed">
            Select your preferred app from our list, tap the <span className="font-bold text-violet-400">Download</span> button, download the APK package, and enable &quot;Install from Unknown Sources&quot; in your device settings. Once installed, bind your phone number to receive your welcome bonus.
          </p>

          {/* Process Step Grid */}
          <div className="grid sm:grid-cols-3 gap-3.5 pt-2">
            {downloadSteps.map((s) => (
              <div key={s.step} className="flex items-start gap-3 p-4 bg-white/5 border border-white/10 rounded-2xl">
                <span className="shrink-0 w-8 h-8 rounded-xl bg-gradient-to-br from-violet-600 to-indigo-600 text-white font-extrabold text-xs flex items-center justify-center shadow-lg shadow-violet-600/25">
                  0{s.step}
                </span>
                <div>
                  <h5 className="font-bold text-xs md:text-sm text-white">{s.title}</h5>
                  <p className="text-xs text-slate-400 mt-1 leading-relaxed">{s.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Safety & Compliance Notice Card */}
        <div className="p-5 md:p-6 bg-rose-500/10 border border-rose-500/30 rounded-3xl backdrop-blur-xl space-y-2">
          <div className="flex items-center gap-2.5">
            <span className="text-xl">⚠️</span>
            <h3 className="text-base md:text-lg font-extrabold text-white">
              Important Safety &amp; Responsible Play Notice
            </h3>
            <span className="text-[10px] font-black text-rose-300 bg-rose-500/20 border border-rose-500/40 px-2 py-0.5 rounded-full uppercase ml-auto">
              18+ ONLY
            </span>
          </div>
          <p className="text-slate-300 text-xs md:text-sm leading-relaxed">
            This platform acts solely as an informational directory and direct app store listing. Rummy and card games involve financial risk and can be addictive. Users must be <strong className="text-rose-300 font-bold">18 years or older</strong>. Please play responsibly.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SeoContent;



