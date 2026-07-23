"use client";

import { useState } from "react";

const faqs = [
  {
    q: "What is All Yono Games?",
    a: "All Yono Games is a general term used to describe multiple mobile applications associated with the Yono name. This page acts as an informational all Yono games list and does not operate or promote any gaming platform.",
  },
  {
    q: "Are Yono games safe to use?",
    a: "Yono games are third-party APK apps. Always download from trusted sources and read each app's disclaimer carefully before installing. We do not endorse or operate any of these apps.",
  },
  {
    q: "Why is there an 18+ restriction on Yono games?",
    a: "Yono games involve real-money card and casino-style gameplay. Such activities are legally restricted to adults aged 18 and above in India. Please play responsibly.",
  },
  {
    q: "Do I get a signup bonus on Yono games?",
    a: "Most Yono apps offer a welcome/signup bonus ranging from ₹50 to ₹1500. The exact amount varies per app and may change at any time. Check each app's page for the latest bonus details.",
  },
  {
    q: "What is the minimum withdrawal amount?",
    a: "Minimum withdrawal limits differ by app, but most Yono apps set a minimum of ₹100 per withdrawal. Some apps may require a higher minimum — always check the app's withdrawal policy before depositing.",
  },
  {
    q: "How to Withdraw from All Yono Games?",
    a: "Open the app → Go to Wallet/Withdraw section → Enter your bank account or UPI details → Enter the withdrawal amount → Submit. Processing time is usually instant to 24 hours depending on the app.",
  },
];

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="max-w-3xl mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-gray-900 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="mt-2 text-sky-500 text-sm md:text-base">
            Everything you want to know about All Yono Games
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className={`border rounded-lg overflow-hidden transition-all duration-200 ${
                  isOpen
                    ? "border-yellow-400 shadow-sm"
                    : "border-gray-200 hover:border-gray-300"
                }`}
              >
                {/* Question row */}
                <button
                  type="button"
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full flex items-center justify-between px-5 py-4 text-left"
                  aria-expanded={isOpen}
                >
                  <span
                    className={`font-bold text-sm md:text-[15px] leading-snug ${
                      isOpen ? "text-gray-900" : "text-gray-800"
                    }`}
                  >
                    {faq.q}
                  </span>
                  {/* Chevron */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={18}
                    height={18}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2.5}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className={`shrink-0 ml-3 text-gray-500 transition-transform duration-200 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  >
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </button>

                {/* Answer (collapsible) */}
                {isOpen && (
                  <div className="border-t border-yellow-300 px-5 py-4 bg-white">
                    <p className="text-sky-600 text-sm md:text-[15px] leading-relaxed">
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
