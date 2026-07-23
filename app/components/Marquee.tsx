export default function Marquee() {
  const text =
    "⚠️ RESPONSIBLE PLAY NOTICE: Rummy & gaming apps involve financial risk and may be addictive.   •   PLAY RESPONSIBLY – 18+ PLAYERS ONLY.   •   CLAIM UP TO ₹1500 SIGNUP BONUS.   •   ALWAYS READ APP TERMS & CONDITIONS BEFORE DEPOSITING.   •   ";

  return (
    <div className="bg-amber-500/10 border-y border-amber-500/20 overflow-hidden py-2.5 relative backdrop-blur-md select-none">
      <div className="marquee-track-scroll">
        <span className="text-amber-300 font-bold text-xs sm:text-sm tracking-wider px-4 shrink-0">
          {text}
        </span>
        {/* Duplicated for seamless 360-degree infinite loop */}
        <span className="text-amber-300 font-bold text-xs sm:text-sm tracking-wider px-4 shrink-0" aria-hidden="true">
          {text}
        </span>
      </div>
    </div>
  );
}
