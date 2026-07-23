import React from "react";
import { TELEGRAM_URL } from "@/config/site";

const TelegramIcon = ({ size = 22 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.295-.6.295-.002 0-.003 0-.005 0l.213-3.054 5.56-5.022c.24-.213-.054-.334-.373-.121l-6.869 4.326-2.96-.924c-.64-.203-.658-.643.135-.953l11.566-4.458c.538-.196 1.006.128.832.941z" />
  </svg>
);

const TelegramCTA = () => {
  return (
    <section className="py-6 md:py-8 bg-[#0B0B0F] border-t border-white/10 relative overflow-hidden">
      <div className="flex justify-center px-4 relative z-10">
        <a
          href={TELEGRAM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 hover:from-blue-500 hover:to-violet-500 text-white font-extrabold px-6 sm:px-10 py-3.5 rounded-2xl shadow-xl shadow-blue-600/25 border border-blue-400/30 transition-all duration-300 hover:scale-[1.02] active:scale-95 cursor-pointer text-sm sm:text-base tracking-wide"
        >
          <TelegramIcon size={22} />
          <span>Join Official Telegram Channel</span>
          <svg className="w-4 h-4 text-blue-200 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default TelegramCTA;

