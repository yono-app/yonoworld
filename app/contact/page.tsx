import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { TELEGRAM_URL } from "@/config/site";

export default function ContactPage() {
    return (
        <div className="min-h-screen flex flex-col bg-[#0B0B0F] text-slate-100 relative overflow-hidden font-sans antialiased">
            {/* Ambient Background Glows */}
            <div className="absolute top-[15%] left-[-10%] w-[50%] h-[35%] rounded-full bg-violet-600/10 blur-[130px] pointer-events-none" />
            <div className="absolute bottom-[20%] right-[-10%] w-[45%] h-[35%] rounded-full bg-indigo-600/10 blur-[130px] pointer-events-none" />

            <Navbar />

            <main className="flex-1 max-w-3xl mx-auto w-full px-4 sm:px-6 py-12 relative z-10 space-y-6">
                <div className="space-y-2 text-center sm:text-left">
                    <div className="inline-flex items-center gap-1.5 bg-violet-500/10 text-violet-300 border border-violet-500/20 text-[10px] font-black tracking-widest uppercase px-3 py-1 rounded-full">
                        <span>💬 GET IN TOUCH</span>
                    </div>
                    <h1 className="text-3xl sm:text-4xl font-extrabold text-white">Contact Us</h1>
                    <p className="text-slate-400 text-sm">
                        Have questions, suggestions, or business inquiries? We&apos;d love to connect.
                    </p>
                </div>

                <div className="bg-[#12131F]/90 rounded-3xl border border-white/10 shadow-2xl backdrop-blur-xl p-6 sm:p-8 space-y-6">
                    <div className="space-y-4">
                        <a
                            href={TELEGRAM_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-4 p-4.5 bg-gradient-to-r from-blue-600/20 to-indigo-600/20 border border-blue-500/30 rounded-2xl hover:border-blue-400/60 transition-all duration-200 group cursor-pointer"
                        >
                            <div className="w-12 h-12 rounded-xl bg-blue-600 flex items-center justify-center text-white shrink-0 shadow-lg shadow-blue-600/30 group-hover:scale-105 transition-transform">
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.295-.6.295-.002 0-.003 0-.005 0l.213-3.054 5.56-5.022c.24-.213-.054-.334-.373-.121l-6.869 4.326-2.96-.924c-.64-.203-.658-.643.135-.953l11.566-4.458c.538-.196 1.006.128.832.941z" />
                                </svg>
                            </div>
                            <div className="flex-1 min-w-0">
                                <p className="text-xs text-blue-400 font-bold uppercase tracking-wider">Official Telegram Support</p>
                                <p className="text-white font-extrabold text-sm sm:text-base group-hover:text-blue-300 transition-colors">
                                    Join Telegram Channel
                                </p>
                            </div>
                            <svg className="w-5 h-5 text-slate-400 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                        </a>

                        <div className="flex items-center gap-4 p-4.5 bg-white/5 border border-white/10 rounded-2xl">
                            <div className="w-12 h-12 rounded-xl bg-violet-600/30 border border-violet-500/40 flex items-center justify-center text-xl shrink-0">
                                ⚡
                            </div>
                            <div>
                                <p className="text-xs text-violet-300 font-bold uppercase tracking-wider">Response Time</p>
                                <p className="text-white font-extrabold text-sm sm:text-base">Within 24 Hours</p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}

