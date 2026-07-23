import React from "react";

const cards = [
  {
    title: "Latest Apps",
    text: "New Yono Games Aur Updated Apps Regularly List Kiye Jaate Hain.",
  },
  {
    title: "Bonus Details",
    text: "Signup Bonus, Minimum Withdraw Aur App Offers Clear Format Me Milte Hain.",
  },
  {
    title: "Fast Download",
    text: "Har App Ka Download Page Direct Aur Mobile Friendly Banaya Gaya Hai.",
  },
  {
    title: "Telegram Updates",
    text: "New App Updates Aur Promo Code Ke Liye Telegram Channel Join Kar Sakte Hain.",
  },
];

const downloadSteps = [
  { step: 1, title: "Choose App", text: "Select your favorite Yono game from our list." },
  { step: 2, title: "Click Download", text: "Tap the download link to get the direct APK." },
  { step: 3, title: "Install & Bonus", text: "Install APK, bind mobile number & claim signup bonus." },
];

const SeoContent = () => {
  return (
    <section className="py-10 md:py-14 bg-white border-t border-slate-100">
      <div className="max-w-4xl mx-auto px-4 md:px-6 space-y-8">
        {/* Main Title */}
        <div className="text-center space-y-2">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-extrabold text-slate-900 leading-snug">
            All Yono Games Download - Latest Yono Apps List
          </h2>
          <div className="w-16 h-1 bg-indigo-600 mx-auto rounded-full" />
        </div>

        {/* Intro Paragraphs */}
        <div className="space-y-4 text-slate-700 text-sm md:text-base leading-7 text-justify">
          <p>
            <strong className="text-indigo-600 font-semibold">AllYonoGamesStore.Com</strong> Par Aapko
            Latest Yono Games, Rummy Apps, Slots Apps Aur Teen Patti Type Gaming Apps Ki
            Updated List Milti Hai. Har App Ke Page Par Download Link, Signup Bonus,
            Minimum Withdrawal Aur Important Details Simple Format Me Diye Gaye Hain.
          </p>
          <p>
            Yaha Listed Apps Me Alag-Alag Welcome Bonus, Daily Login Bonus, Refer Bonus
            Aur Promo Code Offers Mil Sakte Hain. App Download Karne Se Pehle Bonus
            Amount, Withdrawal Rules Aur Risk Notice Ko Dhyan Se Check Karein.
          </p>
        </div>

        {/* Key Features Grid */}
        <div className="grid sm:grid-cols-2 gap-x-8 gap-y-5 pt-2">
          {cards.map((c, idx) => (
            <div key={idx} className="pl-3.5 border-l-2 border-indigo-600 space-y-1">
              <h4 className="font-bold text-slate-900 text-sm md:text-base">{c.title}</h4>
              <p className="text-xs md:text-sm text-slate-600 leading-relaxed">{c.text}</p>
            </div>
          ))}
        </div>

        {/* How to download section */}
        <div className="pt-4 space-y-4">
          <h3 className="text-lg md:text-xl font-extrabold text-slate-900 flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-indigo-600 inline-block" />
            How To Download All Yono Games?
          </h3>

          <p className="text-slate-700 text-sm md:text-base leading-7 text-justify">
            List Me Se Apna Pasand Ka App Choose Karein,{" "}
            <span className="font-semibold text-indigo-600">Download Button</span> Par Click
            Karein, App Page Open Hone Ke Baad APK Download Karke Install Karein. Install Ke
            Baad Mobile Number Bind Karke Signup Bonus Claim Kar Sakte Hain.
          </p>

          {/* Clean Step Process */}
          <div className="grid sm:grid-cols-3 gap-3 pt-2">
            {downloadSteps.map((s) => (
              <div key={s.step} className="flex items-start gap-3 p-3 bg-indigo-50/50 rounded-lg">
                <span className="shrink-0 w-7 h-7 rounded-full bg-indigo-600 text-white font-bold text-xs flex items-center justify-center">
                  {s.step}
                </span>
                <div>
                  <h5 className="font-bold text-xs md:text-sm text-slate-900">{s.title}</h5>
                  <p className="text-xs text-slate-600 mt-0.5">{s.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Safety Notice */}
        <div className="p-4 md:p-5 bg-rose-50/60 border-l-4 border-rose-500 rounded-r-xl space-y-1.5">
          <div className="flex items-center gap-2">
            <h3 className="text-base md:text-lg font-bold text-slate-900">
              Important Safety Notice
            </h3>
            <span className="text-[11px] font-bold text-white bg-rose-600 px-2 py-0.5 rounded-md uppercase">
              18+ Only
            </span>
          </div>
          <p className="text-slate-700 text-xs md:text-sm leading-relaxed">
            Ye Website Sirf App Information Aur Download Listing Ke Liye Hai. Kisi Bhi App
            Me Paisa Lagana Aapki Apni Zimmedari Hai.{" "}
            <strong className="text-rose-700 font-semibold">18+ Users</strong> Hi Gaming Apps Use
            Karein Aur Financial Risk Samajh Kar Hi Decision Lein.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SeoContent;


