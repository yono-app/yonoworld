import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Link from "next/link";
import { SITE_NAME } from "@/config/site";

export default function ApkStorePage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#0B0B0F] text-slate-100 relative overflow-hidden font-sans antialiased">
      {/* Background Glows */}
      <div className="absolute top-[-10%] left-[-15%] w-[60%] h-[40%] rounded-full bg-violet-600/10 blur-[140px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-15%] w-[50%] h-[50%] rounded-full bg-indigo-600/10 blur-[140px] pointer-events-none" />

      <Navbar />

      <main className="flex-1 max-w-4xl mx-auto w-full px-4 sm:px-6 py-12 relative z-10 space-y-8">
        <div className="space-y-3 text-center sm:text-left">
          <div className="inline-flex items-center gap-1.5 bg-violet-500/10 text-violet-300 border border-violet-500/20 text-[10px] font-black tracking-widest uppercase px-3 py-1 rounded-full">
            <span>📦 OFFICIAL APK STORE</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white">Yono App Store APK Package</h1>
          <p className="text-slate-400 text-sm sm:text-base">
            Download the official {SITE_NAME} hub APK to manage and download all Yono games from one single mobile app.
          </p>
        </div>

        <div className="bg-[#12131F]/90 rounded-3xl border border-white/10 shadow-2xl backdrop-blur-xl p-6 sm:p-10 space-y-6 text-center sm:text-left">
          <div className="flex flex-col sm:flex-row items-center gap-6 pb-6 border-b border-white/10">
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-violet-600 to-indigo-600 flex items-center justify-center text-3xl font-black text-white shadow-xl shadow-violet-600/30">
              APK
            </div>
            <div className="space-y-1">
              <h2 className="text-2xl font-extrabold text-white">{SITE_NAME} v2026.1</h2>
              <p className="text-xs text-slate-400">Package Size: 12.5 MB • Android 5.0+</p>
            </div>
          </div>

          <p className="text-slate-300 text-sm leading-relaxed">
            Get instant notifications when new Yono Rummy, Slots, and Teen Patti games release. Receive exclusive daily promo codes directly inside the app store hub.
          </p>

          <div className="pt-2">
            <Link
              href="/all-yono-games"
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white font-black text-sm px-8 py-3.5 rounded-2xl shadow-xl shadow-violet-600/25 border border-white/10 uppercase tracking-widest"
            >
              <span>Browse All Games Directory</span>
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
