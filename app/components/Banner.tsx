import Image from "next/image";

const TELEGRAM_LINK = "https://t.me/+xiZV9WhjGl05OWU9";
const SITE_URL = "yonoworld.xyz";
const SITE_NAME = "Yono World";

export default function Banner() {
  return (
    <div className="w-full bg-slate-950 text-white border-y border-slate-900 py-8 md:py-10 relative overflow-hidden">
      {/* Glowing background aura effects */}
      <div className="absolute -left-32 -top-32 w-96 h-96 rounded-full bg-indigo-600/10 blur-3xl pointer-events-none" />
      <div className="absolute -right-32 -bottom-32 w-96 h-96 rounded-full bg-purple-600/10 blur-3xl pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(99,102,241,0.12),transparent_70%)] pointer-events-none" />

      <div className="w-full max-w-[1100px] mx-auto px-4 sm:px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 md:gap-12">

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 sm:gap-6 flex-1 min-w-0">
            {/* Logo container */}
            <div className="relative shrink-0 w-20 h-20 sm:w-24 sm:h-24 rounded-3xl overflow-hidden shadow-2xl border border-slate-900 ring-4 ring-indigo-500/10 transition-transform duration-300">
              <Image
                src="/logo.jpeg"
                alt={SITE_NAME}
                fill
                style={{ objectFit: "cover" }}
                sizes="96px"
                priority
              />
            </div>

            {/* Text content block */}
            <div className="flex-1 min-w-0">
              <div className="inline-flex items-center gap-1.5 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 text-indigo-300 border border-indigo-500/20 text-[9px] font-black tracking-widest uppercase px-2.5 py-0.5 rounded-md mb-2">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-indigo-400"></span>
                </span>
                <span>ALL YONO APPS HUB</span>
              </div>

              <h1 className="text-2xl sm:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-slate-300 tracking-tight leading-none">
                {SITE_NAME}
              </h1>

              <a
                href={`https://${SITE_URL}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-[11px] font-extrabold text-indigo-400 hover:text-indigo-300 tracking-wider mt-1 transition-colors duration-150"
              >
                <span>🌐</span>
                <span>{SITE_URL}</span>
                <span className="text-[9px] opacity-60">↗</span>
              </a>

              {/* Frosted Chips */}
              <div className="flex flex-wrap gap-2 mt-4">
                {[
                  { icon: "🎁", label: "₹300 Signup Bonus", color: "from-rose-500/10 to-orange-500/10 border-rose-500/20 text-rose-300" },
                  { icon: "💳", label: "Min ₹100 Withdraw", color: "from-emerald-500/10 to-teal-500/10 border-emerald-500/20 text-emerald-300" },
                  { icon: "📲", label: "15+ Top Apps", color: "from-blue-500/10 to-indigo-500/10 border-blue-500/20 text-blue-300" },
                ].map(({ icon, label, color }) => (
                  <span
                    key={label}
                    className={`inline-flex items-center gap-1.5 bg-gradient-to-r ${color} border transition-all duration-200 rounded-xl px-3 py-1 text-[11px] font-bold cursor-default shadow-sm hover:scale-[1.02]`}
                  >
                    <span className="text-xs">{icon}</span>
                    <span>{label}</span>
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Telegram CTA Box */}
          <div className="w-full md:w-[280px] lg:w-[320px] shrink-0 bg-slate-900/40 border border-slate-900 rounded-2xl p-4 flex flex-col gap-3 shadow-inner relative overflow-hidden backdrop-blur-sm">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(59,130,246,0.1),transparent_60%)] pointer-events-none" />
            <div className="flex items-center gap-2 relative z-10">
              <span className="relative flex h-2 w-2 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              <span className="text-slate-200 font-extrabold text-xs">Join our Telegram Channel</span>
            </div>
            <p className="text-slate-400 text-[11px] leading-relaxed relative z-10">
              Get immediate alerts about new Yono app releases, exclusive bonuses, and withdrawal guides.
            </p>
            <a
              href={TELEGRAM_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-1.5 bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white text-xs font-black py-2.5 rounded-xl shadow-md shadow-blue-500/15 hover:scale-[1.01] transition-all duration-150 active:scale-95 cursor-pointer uppercase tracking-wider relative z-10"
            >
              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12.002 12.002 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
              </svg>
              <span>Join Telegram</span>
            </a>
          </div>

        </div>
      </div>
    </div>
  );
}