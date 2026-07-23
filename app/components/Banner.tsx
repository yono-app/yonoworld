import Image from "next/image";
import { TELEGRAM_URL, SITE_NAME, SITE_URL } from "@/config/site";

export default function Banner() {
  return (
    <section aria-label="Hero Banner" className="w-full bg-[#07080E] text-white border-b border-white/[0.08] py-4 sm:py-5 md:py-6 relative overflow-hidden select-none">
      {/* Premium Ambient Radial Lighting */}
      <div className="absolute -left-20 -top-20 w-80 h-80 rounded-full bg-violet-600/15 blur-[100px] pointer-events-none" />
      <div className="absolute right-0 bottom-0 w-96 h-96 rounded-full bg-indigo-600/15 blur-[120px] pointer-events-none" />
      <div className="absolute left-1/3 -bottom-20 w-72 h-72 rounded-full bg-sky-500/10 blur-[90px] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(124,58,237,0.1),transparent_75%)] pointer-events-none" />

      {/* Cyber Subtle Grid Pattern Overlay */}
      <div
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(rgba(255, 255, 255, 0.4) 1px, transparent 1px)`,
          backgroundSize: "20px 20px",
        }}
      />

      <div className="w-full max-w-[1150px] mx-auto px-4 sm:px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-8">

          {/* Hero Branding Info */}
          <div className="flex flex-row items-center gap-3.5 sm:gap-5 flex-1 min-w-0 w-full">
            {/* Logo Avatar */}
            <div className="relative shrink-0 w-15 h-15 sm:w-20 sm:h-20 rounded-2xl overflow-hidden shadow-xl shadow-violet-950/60 border border-violet-500/35 ring-2 ring-violet-500/20 group hover:scale-[1.03] transition-transform duration-300">
              <Image
                src="/logo.png"
                alt={SITE_NAME}
                fill
                style={{ objectFit: "cover" }}
                sizes="(max-width: 640px) 60px, 80px"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Title & Badge Details */}
            <div className="flex-1 min-w-0">
              {/* Badge & URL Row */}
              <div className="flex flex-wrap items-center gap-2 mb-1">
                <div className="inline-flex items-center gap-1.5 bg-gradient-to-r from-violet-500/15 via-indigo-500/15 to-purple-500/15 text-violet-300 border border-violet-500/30 text-[10px] font-extrabold tracking-wider uppercase px-2.5 py-0.5 rounded-full backdrop-blur-md shadow-sm">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-400"></span>
                  </span>
                  <span>Verified 2026</span>
                </div>

                <a
                  href={`https://${SITE_URL}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-[11px] font-bold text-slate-400 hover:text-violet-300 transition-colors duration-150 group"
                >
                  <span className="text-violet-400 group-hover:scale-110 transition-transform">🌐</span>
                  <span>{SITE_URL}</span>
                  <span className="text-[9px] opacity-60">↗</span>
                </a>
              </div>

              {/* Main Heading */}
              <h1 className="text-xl sm:text-2xl md:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-violet-200 tracking-tight leading-snug truncate">
                {SITE_NAME}
              </h1>

              {/* Feature Chips */}
              <div className="flex flex-wrap gap-1.5 sm:gap-2 mt-2">
                {[
                  { icon: "🎁", label: "Up to ₹1500 Bonus", color: "from-amber-500/10 to-rose-500/10 border-amber-500/25 text-amber-300 hover:border-amber-500/40" },
                  { icon: "💳", label: "Min ₹100 Withdraw", color: "from-emerald-500/10 to-teal-500/10 border-emerald-500/25 text-emerald-300 hover:border-emerald-500/40" },
                  { icon: "📲", label: "70+ Tested Apps", color: "from-violet-500/10 to-indigo-500/10 border-violet-500/25 text-violet-300 hover:border-violet-500/40" },
                ].map(({ icon, label, color }) => (
                  <span
                    key={label}
                    className={`inline-flex items-center gap-1.5 bg-gradient-to-r ${color} border rounded-lg px-2.5 py-0.5 sm:py-1 text-[11px] font-bold cursor-default shadow-sm backdrop-blur-md transition-all duration-200 hover:-translate-y-0.5`}
                  >
                    <span className="text-xs">{icon}</span>
                    <span>{label}</span>
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Telegram Community Compact Card */}
          <div className="w-full md:w-[280px] lg:w-[310px] shrink-0 bg-gradient-to-b from-[#121424]/90 via-[#0e101d]/90 to-[#0a0b14]/90 border border-violet-500/30 rounded-2xl p-3.5 sm:p-4 flex flex-col gap-2.5 shadow-xl shadow-violet-950/40 relative overflow-hidden backdrop-blur-xl group hover:border-sky-500/40 transition-all duration-300">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(56,189,248,0.1),transparent_65%)] pointer-events-none" />

            <div className="flex items-center justify-between relative z-10">
              <div className="flex items-center gap-1.5">
                <span className="relative flex h-2 w-2 shrink-0">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-400"></span>
                </span>
                <span className="text-white font-extrabold text-xs tracking-wide">Telegram Channel</span>
              </div>
              <span className="text-[9px] font-black tracking-wider text-sky-300 bg-sky-500/10 border border-sky-500/25 px-2 py-0.5 rounded-full uppercase">
                Instant Alerts
              </span>
            </div>

            <p className="text-slate-300 text-[11px] sm:text-xs leading-tight relative z-10">
              Get direct alerts for new Yono app releases, exclusive promos & daily codes.
            </p>

            <a
              href={TELEGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-sky-500 via-blue-600 to-indigo-600 hover:from-sky-400 hover:to-indigo-500 text-white text-xs font-extrabold py-2 sm:py-2.5 rounded-xl shadow-lg shadow-sky-500/20 hover:shadow-sky-500/35 transition-all duration-200 active:scale-[0.98] cursor-pointer tracking-wide relative z-10 border border-sky-400/30"
            >
              <svg className="w-3.5 h-3.5 shrink-0" fill="currentColor" viewBox="0 0 24 24">
                <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12.002 12.002 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
              </svg>
              <span>Join Telegram Channel</span>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
