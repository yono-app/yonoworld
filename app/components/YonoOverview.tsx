import { SITE_HOST } from "@/config/site";

const overviewRows = [
  { label: "New Version", value: "2026 (Updated)" },
  { label: "File Size", value: "70 MB – 100 MB" },
  { label: "Bonuses", value: "Rs 50 – Rs 1550 (varies per app)", highlight: true },
  { label: "Supported Games", value: "Rummy, Slots, Arcade, Teen Patti, Bingo, Poker", highlight: true },
  { label: "Platform", value: "Android" },
  { label: "Mod APK Available", value: "Yes (We suggest not to play on MOD APK)" },
  { label: "Old Versions", value: "Available for devices with lower specifications", highlight: true },
];

const apkRows = [
  { name: "Yono Rummy", type: "Official", features: "Cash games, daily tournaments", typeHighlight: true },
  { name: "Yono VIP APK", type: "Mod", features: "Premium tables, exclusive referral offers" },
  { name: "Yono Club", type: "Multi", features: "Game hub for rummy, poker, and more" },
  { name: "Yono All Mod APK", type: "Modded", features: "Unlimited coins, unlocked game rooms" },
  { name: "All Yono 365 APK", type: "Combined", features: "Multiple Yono versions in one bundle", featHighlight: true },
  { name: "Yono MQM", type: "Lite", features: "For older phones, low internet usage" },
];

const steps = [
  <>Download the APK from its official site or a trusted directory like <span className="text-violet-400 font-bold underline cursor-pointer">{SITE_HOST}</span>.</>,
  <>Go to your Android Settings &gt; Security &gt; <span className="text-violet-400 font-bold">Unknown Sources</span> and enable it.</>,
  <>Locate the <span className="text-violet-400 font-bold">downloaded APK file</span> in your Downloads folder and tap <span className="text-violet-400 font-bold">Install</span>.</>,
  <>Once the app is installed, open it and register with your <span className="text-violet-400 font-bold">mobile number</span>.</>,
  <>Use daily promo codes from our <span className="text-violet-400 font-bold">Telegram channel</span> to claim <span className="text-violet-400 font-bold">Daily Bonuses</span>.</>,
];

export default function YonoOverview() {
  return (
    <section className="bg-[#0B0B0F] py-12 md:py-16 border-t border-white/10 text-slate-100">
      <div className="max-w-4xl mx-auto px-4 md:px-6">

        {/* Hero heading */}
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-white leading-snug mb-4">
          All Yono Games APK Download (2026) – Rummy, Club &amp; VIP +{" "}
          <span className="text-amber-400">Rs 1500 Bonus</span>
        </h2>

        {/* Intro paragraph */}
        <p className="text-slate-300 text-sm md:text-base leading-relaxed mb-6 text-justify">
          Are you ready to dive into the world of Yono Games all in one place? Whether you&apos;re
          searching for the classic <span className="text-violet-400 font-bold underline cursor-pointer">Yono Rummy</span>{" "}
          app or eager to explore <span className="text-violet-400 font-bold underline cursor-pointer">VIP</span> and
          special features, this guide has everything you need – from{" "}
          <span className="text-violet-400 font-bold underline cursor-pointer">download links</span> to{" "}
          <span className="text-violet-400 font-bold underline cursor-pointer">insider tips</span>. New users can claim up to{" "}
          <strong className="text-amber-400">Rs 1500</strong> as a welcome bonus upon phone registration!
        </p>

        {/* What Are All Yono Games 2026 */}
        <h3 className="text-xl md:text-2xl font-extrabold text-white mt-10 mb-3">
          What Are All Yono Games 2026?
        </h3>
        <p className="text-slate-300 text-sm md:text-base leading-relaxed mb-8 text-justify">
          &ldquo;<span className="text-violet-400 font-bold underline cursor-pointer">All Yono Games</span>&rdquo; refers to the complete ecosystem of mobile gaming apps under the Yono brand. These Android APKs feature card and casino games, including{" "}
          <span className="text-violet-400 font-bold underline cursor-pointer">Rummy, Slots, Teen Patti, Arcade, Bingo</span>,
          and Poker games specifically tailored for players across India.
        </p>

        {/* Overview table */}
        <div className="rounded-3xl overflow-hidden border border-white/10 bg-[#12131F]/90 backdrop-blur-xl shadow-2xl mb-12">
          {/* Table header */}
          <div className="bg-gradient-to-r from-violet-950 via-purple-900 to-indigo-950 px-6 py-4 border-b border-white/10">
            <p className="text-amber-300 font-extrabold text-base md:text-lg">
              Yono All Games &amp; Yono Rummy 2026 Specification Overview
            </p>
          </div>
          {/* Rows */}
          <table className="w-full text-sm">
            <tbody>
              {overviewRows.map((row, i) => (
                <tr
                  key={i}
                  className={`border-b border-white/5 last:border-0 ${
                    i % 2 === 0 ? "bg-white/[0.02]" : "bg-transparent"
                  }`}
                >
                  <td className="px-6 py-3.5 font-bold text-slate-300 w-2/5 align-top">
                    {row.label}
                  </td>
                  <td
                    className={`px-6 py-3.5 align-top font-medium ${
                      row.highlight ? "text-violet-300 font-bold" : "text-slate-300"
                    }`}
                  >
                    {row.value}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Download All Yono Games */}
        <h3 className="text-xl md:text-2xl font-extrabold text-white mb-2">
          Download All Yono Games in One Place
        </h3>
        <p className="text-slate-400 text-sm mb-5">
          Explore the most popular Yono versions with quick feature notes:
        </p>

        <div className="rounded-3xl overflow-hidden border border-white/10 bg-[#12131F]/90 backdrop-blur-xl shadow-2xl mb-4">
          <div className="bg-gradient-to-r from-violet-950 via-purple-900 to-indigo-950 grid grid-cols-3 px-6 py-4 text-xs font-black uppercase tracking-wider border-b border-white/10">
            <span className="text-white">App Name</span>
            <span className="text-amber-300">Version Type</span>
            <span className="text-amber-300">Features Included</span>
          </div>
          <table className="w-full text-sm">
            <tbody>
              {apkRows.map((row, i) => (
                <tr
                  key={i}
                  className={`border-b border-white/5 last:border-0 ${
                    i % 2 === 0 ? "bg-white/[0.02]" : "bg-transparent"
                  }`}
                >
                  <td className="px-6 py-3.5 font-extrabold text-white w-1/3">{row.name}</td>
                  <td
                    className={`px-6 py-3.5 w-1/3 text-xs font-bold ${
                      row.typeHighlight ? "text-violet-400" : "text-slate-400"
                    }`}
                  >
                    {row.type}
                  </td>
                  <td
                    className={`px-6 py-3.5 w-1/3 text-xs ${
                      row.featHighlight ? "text-violet-300 font-semibold" : "text-slate-300"
                    }`}
                  >
                    {row.features}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-slate-400 text-xs mb-10">
          Always use verified directory links to avoid unverified third-party APK packages.
        </p>

        {/* How to Install Yono APK */}
        <h3 className="text-xl md:text-2xl font-extrabold text-white mb-5">
          How to Install Yono APK on Android?
        </h3>
        <ol className="space-y-3 mb-8">
          {steps.map((step, i) => (
            <li key={i} className="flex items-start gap-3 p-4 bg-[#12131F]/80 border border-white/10 rounded-2xl text-sm text-slate-300 leading-relaxed">
              <span className="shrink-0 w-7 h-7 rounded-xl bg-violet-600/30 text-violet-300 border border-violet-500/40 font-black text-xs flex items-center justify-center">
                {i + 1}
              </span>
              <span>{step}</span>
            </li>
          ))}
        </ol>

        {/* Note box */}
        <div className="border border-amber-500/30 bg-amber-500/10 rounded-2xl p-4.5 text-xs sm:text-sm text-amber-200 backdrop-blur-md">
          <strong className="font-bold text-amber-300">Important Tip:</strong>{" "}
          <span>
            Always keep your primary phone number bound to your account to prevent losing welcome bonuses and withdrawal access.
          </span>
        </div>

      </div>
    </section>
  );
}

