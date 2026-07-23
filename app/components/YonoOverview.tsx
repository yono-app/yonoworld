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
  <>Download the APK from its official site or a trusted website like <span className="text-indigo-600 underline cursor-pointer">allyonogamesstore.com</span>.</>,
  <>Go to your Android Settings &gt; Security &gt; <span className="text-indigo-600">Unknown Sources</span> and enable it.</>,
  <>Locate the <span className="text-indigo-600">downloaded file</span> in your phone and tap <span className="text-indigo-600">Install</span>.</>,
  <>Once the app is installed, open the app and register with your <span className="text-indigo-600">phone number</span>.</>,
  <>Use <span className="text-indigo-600">daily promocode</span> from <span className="text-indigo-600">Telegram channel</span> to get <span className="text-indigo-600">Daily bonus</span>.</>,
];

export default function YonoOverview() {
  return (
    <section className="bg-white py-10 md:py-14">
      <div className="max-w-4xl mx-auto px-4 md:px-6">

        {/* ── Hero heading ── */}
        <h2 className="text-xl md:text-2xl lg:text-3xl font-extrabold text-gray-900 leading-snug mb-3">
          All Yono Games APK Download (2026) – Rummy, Club &amp; VIP +{" "}
          <span className="text-orange-500">Rs 1500 Bonus</span>
        </h2>

        {/* Intro paragraph */}
        <p className="text-gray-700 text-sm md:text-[15px] leading-7 mb-4 text-justify">
          Are you ready to dive into the world of Yono Games all in one place? Whether you&apos;re
          searching for the classic <span className="text-indigo-600 underline cursor-pointer">Yono Rummy</span>{" "}
          app or eager to explore <span className="text-indigo-600 underline cursor-pointer">VIP</span> and
          mod features, this guide has everything you need – from{" "}
          <span className="text-indigo-600 underline cursor-pointer">download links</span> to{" "}
          <span className="text-indigo-600 underline cursor-pointer">insider tips</span>. And if
          you are a new user, you can get up to{" "}
          <strong>Rs 1500</strong> as a welcome bonus when you sign up with mobile number.
          Let&apos;s explore the <span className="text-indigo-600 underline cursor-pointer">latest versions</span>{" "}
          of the Yono apps, know the{" "}
          <span className="text-indigo-600 underline cursor-pointer">installation steps</span>, and{" "}
          <span className="text-indigo-600 underline cursor-pointer">get</span> to know the features
          so that you can enjoy easy winnings!
        </p>

        {/* ── What Are All Yono Games 2026? ── */}
        <h3 className="text-lg md:text-xl font-extrabold text-gray-900 mt-8 mb-2">
          What Are All Yono Games 2026?
        </h3>
        <p className="text-gray-700 text-sm md:text-[15px] leading-7 mb-6 text-justify">
          &ldquo;<span className="text-indigo-600 underline cursor-pointer">All Yono Games</span>&rdquo; is a
          term that refers to the huge collection of mobile gaming apps under the Yono brand.
          These Android APKs feature a diverse range of card and casino-style games, including{" "}
          <span className="text-indigo-600 underline cursor-pointer">Rummy, Slots, Teen Patti, Arcade, Bingo</span>,
          and Poker games specifically curated for{" "}
          <span className="text-indigo-600 underline cursor-pointer">Indian players</span>.
        </p>

        {/* ── Overview table ── */}
        <div className="rounded-lg overflow-hidden border border-gray-200 mb-10">
          {/* Table header */}
          <div className="bg-gray-900 px-5 py-3">
            <p className="text-yellow-400 font-bold text-sm md:text-base">
              Yono All Games &amp; Yono Rummy 2026 Overview
            </p>
          </div>
          {/* Rows */}
          <table className="w-full text-sm">
            <tbody>
              {overviewRows.map((row, i) => (
                <tr
                  key={i}
                  className={`border-b border-gray-100 last:border-0 ${
                    i % 2 === 0 ? "bg-white" : "bg-gray-50/60"
                  }`}
                >
                  <td className="px-5 py-3 font-semibold text-gray-800 w-2/5 align-top">
                    {row.label}
                  </td>
                  <td
                    className={`px-5 py-3 align-top ${
                      row.highlight ? "text-indigo-600" : "text-gray-700"
                    }`}
                  >
                    {row.value}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* ── Download All Yono Games in One Place ── */}
        <h3 className="text-lg md:text-xl font-extrabold text-gray-900 mb-1">
          Download All Yono Games in One Place
        </h3>
        <p className="text-gray-600 text-sm mb-4">
          Here are the most popular APK with quick notes:
        </p>

        <div className="rounded-lg overflow-hidden border border-gray-200 mb-3">
          {/* APK table header */}
          <div className="bg-gray-900 grid grid-cols-3 px-4 py-3 text-sm font-bold">
            <span className="text-white">App Name</span>
            <span className="text-yellow-400">Version Type</span>
            <span className="text-yellow-400">Features Included</span>
          </div>
          {/* APK rows */}
          <table className="w-full text-sm">
            <tbody>
              {apkRows.map((row, i) => (
                <tr
                  key={i}
                  className={`border-b border-gray-100 last:border-0 ${
                    i % 2 === 0 ? "bg-white" : "bg-gray-50/50"
                  }`}
                >
                  <td className="px-4 py-3 font-bold text-gray-900 w-1/3">{row.name}</td>
                  <td
                    className={`px-4 py-3 w-1/3 ${
                      row.typeHighlight ? "text-indigo-600" : "text-gray-700"
                    }`}
                  >
                    {row.type}
                  </td>
                  <td
                    className={`px-4 py-3 w-1/3 ${
                      row.featHighlight ? "text-indigo-600" : "text-gray-600"
                    }`}
                  >
                    {row.features}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-gray-400 text-xs mb-8">
          To download, always use trusted websites and avoid unofficial forums that may bundle malware.
        </p>

        {/* ── How to Install Yono APK? ── */}
        <h3 className="text-lg md:text-xl font-extrabold text-gray-900 mb-4">
          How to Install Yono APK?
        </h3>
        <ol className="space-y-2 mb-5">
          {steps.map((step, i) => (
            <li key={i} className="flex items-start gap-2.5 text-sm md:text-[15px] text-gray-700 leading-relaxed">
              <span className="shrink-0 font-bold text-gray-900">{i + 1}.</span>
              <span>{step}</span>
            </li>
          ))}
        </ol>

        {/* Note box */}
        <div className="border border-yellow-300 bg-yellow-50 rounded-md px-4 py-3 text-sm text-yellow-800">
          <strong>Note:</strong>{" "}
          <span className="text-indigo-600">
            Avoid using mod APKs with your primary account as they may violate terms of service.
          </span>
        </div>

      </div>
    </section>
  );
}
