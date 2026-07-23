"use client";

import { useState } from "react";

const faqs = [
  {
    q: "What is All Yono Games Store?",
    a: "All Yono Games Store is an official directory platform listing all verified mobile applications associated with the Yono ecosystem. It allows users to compare signup bonuses, minimum withdrawal limits, ratings, and download official APK files directly.",
  },
  {
    q: "Are all Yono games safe to download and use?",
    a: "Every app listed on our directory is scanned and verified for safety. However, since these are third-party Android APKs, we recommend downloading directly from our verified links and reading each app's terms before playing.",
  },
  {
    q: "Why is there an 18+ age restriction on Yono games?",
    a: "Yono apps feature skill-based real-money card games and casino-style options. Under Indian regulations, real-money gaming activities are legally restricted to adults aged 18 and above. Please play responsibly.",
  },
  {
    q: "How much signup bonus can I claim on Yono apps?",
    a: "Most Yono apps offer welcome signup bonuses ranging from ₹50 up to ₹1500 when you register and bind your mobile number. Bonus amounts are updated daily on our app detail pages.",
  },
  {
    q: "What is the minimum withdrawal limit for Yono games?",
    a: "Minimum withdrawal limits vary by app, with most setting a starting limit of ₹100. Withdrawals can be processed directly to your Bank Account or UPI ID within 24 hours.",
  },
  {
    q: "How do I withdraw earnings from Yono Games?",
    a: "Open your installed Yono App → Navigate to Wallet / Withdraw section → Add your Bank Account or UPI details → Enter the withdrawal amount → Submit your request.",
  },
];

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section className="py-12 md:py-16 bg-[#0B0B0F] border-t border-white/10 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Heading Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-1.5 bg-violet-500/10 text-violet-300 border border-violet-500/20 text-[10px] font-black tracking-widest uppercase px-3 py-1 rounded-full mb-3">
            <span>❓ HELP CENTER</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="mt-2 text-slate-400 text-xs sm:text-sm">
            Everything you need to know about bonuses, downloads, and withdrawals.
          </p>
        </div>

        {/* Accordion Stack */}
        <div className="space-y-3.5">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className={`rounded-2xl transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? "bg-[#161729] border border-violet-500/40 shadow-xl shadow-violet-500/10"
                    : "bg-[#12131F]/80 border border-white/10 hover:border-white/20 hover:bg-[#141525]"
                }`}
              >
                {/* Question Row */}
                <button
                  type="button"
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full flex items-center justify-between px-5 sm:px-6 py-4.5 text-left cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span
                    className={`font-bold text-sm sm:text-base leading-snug transition-colors ${
                      isOpen ? "text-violet-300" : "text-white"
                    }`}
                  >
                    {faq.q}
                  </span>
                  {/* Chevron Icon */}
                  <div className={`p-1 rounded-lg transition-transform duration-300 shrink-0 ml-3 ${
                    isOpen ? "rotate-180 bg-violet-500/20 text-violet-300" : "bg-white/5 text-slate-400"
                  }`}>
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2.5}
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </button>

                {/* Answer Block */}
                {isOpen && (
                  <div className="border-t border-white/10 px-5 sm:px-6 py-4.5 bg-[#121322]">
                    <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                      {faq.a}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

