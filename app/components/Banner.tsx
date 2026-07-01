import Image from "next/image";

const TELEGRAM_LINK = "https://t.me/+xiZV9WhjGl05OWU9";
const TELEGRAM_DISPLAY = "https://t.me/+xiZV9WhjGl05OWU9";
const SITE_URL = "yonoworld.xyz";
const SITE_NAME = "Yono World";

export default function Banner() {
  return (
    <div className="w-full max-w-[620px] mx-auto px-4 mt-6">
      <div className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 text-white rounded-3xl p-5 sm:p-6 border border-slate-800/80 shadow-2xl group transition-all duration-300">
        {/* Glowing aura effect */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(99,102,241,0.22),transparent_65%)] pointer-events-none" />

        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 relative z-10">
          {/* Logo container */}
          <div className="relative shrink-0 w-16 h-16 sm:w-18 sm:h-18 rounded-2xl overflow-hidden shadow-xl border border-slate-800 ring-4 ring-indigo-500/10 group-hover:scale-[1.03] transition-transform duration-300">
            <Image
              src="/logo.jpeg"
              alt={SITE_NAME}
              fill
              style={{ objectFit: "cover" }}
              sizes="72px"
              priority
            />
          </div>

          {/* Text content block */}
          <div className="flex-1 min-w-0">
            <div className="inline-flex items-center gap-1.5 bg-blue-500/10 text-blue-300 border border-blue-500/20 text-[9px] font-black tracking-widest uppercase px-2 py-0.5 rounded-md mb-2">
              <span>🔥</span>
              <span>ALL YONO APPS HUB</span>
            </div>
            <h1 className="text-xl sm:text-2xl font-black text-white tracking-tight leading-tight">
              {SITE_NAME}
            </h1>
            <p className="text-xs text-slate-400 font-semibold mt-0.5">
              {SITE_URL}
            </p>

            {/* Frosted Chips */}
            <div className="flex flex-wrap gap-2 mt-3.5">
              {[
                { icon: "🎁", label: "₹300 Signup Bonus" },
                { icon: "💳", label: "Min ₹100 Withdraw" },
                { icon: "📲", label: "15+ Top Apps" },
              ].map(({ icon, label }) => (
                <span
                  key={label}
                  className="inline-flex items-center gap-1.5 bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-200 rounded-full px-3 py-1 text-[11px] font-bold text-slate-200 cursor-default shadow-sm"
                >
                  <span className="text-xs">{icon}</span>
                  <span>{label}</span>
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Telegram CTA Bar */}
        <div className="relative z-10 bg-slate-950/45 border border-slate-800/80 rounded-2xl p-3.5 mt-5 flex items-center justify-between gap-4 shadow-inner">
          <div className="flex items-center gap-3">
            {/* Live Indicator pulse */}
            <span className="relative flex h-2 w-2 shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            <div className="text-xs">
              <span className="text-slate-300 font-bold block sm:inline">Join our Telegram channel</span>
              <span className="text-slate-500 hidden sm:inline"> for immediate updates &amp; support</span>
            </div>
          </div>
          
          <a
            href={TELEGRAM_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center justify-center bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white text-xs font-black px-4.5 py-2 rounded-xl shadow-md shadow-blue-500/15 hover:scale-[1.03] transition-all duration-150 active:scale-95 cursor-pointer uppercase tracking-wider"
          >
            Join
          </a>
        </div>
      </div>
    </div>
  );
}