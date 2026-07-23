import Link from "next/link";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col bg-[#0B0B0F] text-slate-100 relative overflow-hidden font-sans antialiased">
      {/* Background Glows */}
      <div className="absolute top-[20%] left-[-15%] w-[60%] h-[40%] rounded-full bg-violet-600/10 blur-[140px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-15%] w-[50%] h-[50%] rounded-full bg-indigo-600/10 blur-[140px] pointer-events-none" />

      <Navbar />

      <main className="flex-1 flex flex-col items-center justify-center text-center px-4 py-16 relative z-10 space-y-6">
        <div className="space-y-2">
          <span className="text-6xl sm:text-8xl font-black bg-gradient-to-r from-violet-500 via-indigo-400 to-purple-500 bg-clip-text text-transparent">
            404
          </span>
          <h1 className="text-2xl sm:text-4xl font-extrabold text-white">App Page Not Found</h1>
          <p className="text-slate-400 text-sm max-w-md mx-auto">
            The Yono app or page you are looking for might have been updated, renamed, or moved.
          </p>
        </div>

        <div className="pt-2">
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white font-extrabold text-xs sm:text-sm px-7 py-3 rounded-2xl shadow-xl shadow-violet-600/25 border border-white/10 uppercase tracking-widest"
          >
            <span>Back To Homepage</span>
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}
