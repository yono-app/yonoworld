import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Image from "next/image";
import { SITE_NAME } from "@/config/site";

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#0B0B0F] text-slate-100 relative overflow-hidden font-sans antialiased">
      {/* Ambient Glows */}
      <div className="absolute top-[-10%] left-[-15%] w-[60%] h-[40%] rounded-full bg-violet-600/10 blur-[140px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-15%] w-[50%] h-[50%] rounded-full bg-indigo-600/10 blur-[140px] pointer-events-none" />

      <Navbar />

      <main className="flex-1 max-w-4xl mx-auto w-full px-4 sm:px-6 py-12 relative z-10 space-y-8">
        {/* Header */}
        <div className="space-y-3 text-center sm:text-left">
          <div className="inline-flex items-center gap-1.5 bg-violet-500/10 text-violet-300 border border-violet-500/20 text-[10px] font-black tracking-widest uppercase px-3 py-1 rounded-full">
            <span>✨ ABOUT OUR PLATFORM</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white">About {SITE_NAME}</h1>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl">
            India&apos;s most trusted directory platform for real-money card, rummy, slots, and casino gaming applications.
          </p>
        </div>

        {/* Content Box */}
        <div className="bg-[#12131F]/90 rounded-3xl border border-white/10 shadow-2xl backdrop-blur-xl p-6 sm:p-10 space-y-6">
          <div className="flex flex-col sm:flex-row items-center gap-6 pb-6 border-b border-white/10">
            <div className="relative shrink-0 w-24 h-24 rounded-2xl overflow-hidden shadow-xl border border-violet-500/40 ring-4 ring-violet-500/15">
              <Image src="/logo.png" alt={SITE_NAME} fill style={{ objectFit: "cover" }} unoptimized />
            </div>
            <div>
              <h2 className="text-xl font-extrabold text-white">Curated, Verified &amp; Instant APK Access</h2>
              <p className="text-slate-300 text-xs sm:text-sm mt-1.5 leading-relaxed">
                Founded to provide Indian gamers with a safe, transparent, and comprehensive listing of all Yono brand gaming apps. We test each APK before featuring it on our platform.
              </p>
            </div>
          </div>

          <div className="grid sm:grid-cols-3 gap-4 pt-2">
            <div className="p-5 rounded-2xl bg-white/5 border border-white/10 space-y-2">
              <span className="text-2xl">⚡</span>
              <h3 className="font-extrabold text-white text-sm">Fast Direct APKs</h3>
              <p className="text-xs text-slate-400 leading-relaxed">Direct high-speed APK download servers with zero redirect loops.</p>
            </div>
            <div className="p-5 rounded-2xl bg-white/5 border border-white/10 space-y-2">
              <span className="text-2xl">🎁</span>
              <h3 className="font-extrabold text-white text-sm">Verified Bonuses</h3>
              <p className="text-xs text-slate-400 leading-relaxed">Daily updated signup bonuses and minimum withdrawal threshold details.</p>
            </div>
            <div className="p-5 rounded-2xl bg-white/5 border border-white/10 space-y-2">
              <span className="text-2xl">🛡️</span>
              <h3 className="font-extrabold text-white text-sm">Tested for Safety</h3>
              <p className="text-xs text-slate-400 leading-relaxed">Every listed package is scanned for malware and security integrity.</p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
