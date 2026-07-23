export default function Marquee() {
  const text =
    "⚠️ WARNING: IF YOU INVEST YOUR MONEY IN ALL THESE APPS, SO YOU CAN LOSE YOUR MONEY.   •   PLAY RESPONSIBLY – 18+ ONLY.   •   GET UP TO RS 1500 SIGN UP BONUS.   •   IF YOU STILL INVEST YOUR MONEY IN ALL THESE APPS, SO YOU CAN LOSE YOUR MONEY.   •   PLAY RESPONSIBLY – 18+ ONLY.   •   ";

  return (
    <div className="bg-[#f5c518] overflow-hidden py-2 relative border-y border-yellow-400">
      <div className="marquee-track flex whitespace-nowrap">
        <span className="marquee-content text-[#1a1a1a] font-bold text-xs sm:text-sm px-4 shrink-0">
          {text}
        </span>
        {/* Duplicate for seamless loop */}
        <span className="marquee-content text-[#1a1a1a] font-bold text-xs sm:text-sm px-4 shrink-0" aria-hidden="true">
          {text}
        </span>
      </div>
    </div>
  );
}
