import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Link from "next/link";

const blogPosts = [
  {
    slug: "top-yono-rummy-apps-2026",
    title: "Top 10 High-Paying Yono Rummy Apps in 2026",
    date: "Jan 15, 2026",
    category: "Rummy Guides",
    readTime: "4 min read",
    summary: "Discover the highest signup bonus Yono Rummy games with instant ₹100 bank withdrawals.",
  },
  {
    slug: "yono-vip-bonus-tricks",
    title: "How to Claim Yono VIP Monthly & Weekly Bonuses",
    date: "Jan 10, 2026",
    category: "Tips & Tricks",
    readTime: "3 min read",
    summary: "Learn how to level up your Yono VIP rank and double your weekly referral rewards.",
  },
  {
    slug: "how-to-install-yono-apk-safely",
    title: "Step-by-Step Guide: Installing Yono APK Files on Android",
    date: "Jan 05, 2026",
    category: "Tutorial",
    readTime: "5 min read",
    summary: "Avoid installation errors and enable unknown source permissions safely on Android devices.",
  },
];

export default function BlogPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#0B0B0F] text-slate-100 relative overflow-hidden font-sans antialiased">
      {/* Background Glows */}
      <div className="absolute top-[-10%] left-[-15%] w-[60%] h-[40%] rounded-full bg-violet-600/10 blur-[140px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-15%] w-[50%] h-[50%] rounded-full bg-indigo-600/10 blur-[140px] pointer-events-none" />

      <Navbar />

      <main className="flex-1 max-w-4xl mx-auto w-full px-4 sm:px-6 py-12 relative z-10 space-y-8">
        <div className="space-y-3 text-center sm:text-left">
          <div className="inline-flex items-center gap-1.5 bg-violet-500/10 text-violet-300 border border-violet-500/20 text-[10px] font-black tracking-widest uppercase px-3 py-1 rounded-full">
            <span>📰 NEWS &amp; GUIDES</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white">Yono Gaming Blog</h1>
          <p className="text-slate-400 text-sm sm:text-base">
            Latest news, trick guides, promotional codes, and earning strategy guides for Yono Games.
          </p>
        </div>

        <div className="grid gap-4">
          {blogPosts.map((post) => (
            <article key={post.slug} className="p-6 rounded-3xl bg-[#12131F]/90 border border-white/10 hover:border-violet-500/40 transition-all duration-300 backdrop-blur-xl shadow-xl space-y-3 group">
              <div className="flex items-center gap-3 text-xs font-bold text-slate-400">
                <span className="text-violet-400 bg-violet-500/10 border border-violet-500/20 px-2.5 py-0.5 rounded-full">{post.category}</span>
                <span>•</span>
                <span>{post.date}</span>
                <span>•</span>
                <span>{post.readTime}</span>
              </div>
              <h2 className="text-xl font-extrabold text-white group-hover:text-violet-300 transition-colors">
                {post.title}
              </h2>
              <p className="text-slate-300 text-sm leading-relaxed">
                {post.summary}
              </p>
              <div className="pt-2">
                <Link href={`/all-yono-games`} className="inline-flex items-center gap-2 text-violet-400 font-extrabold text-xs uppercase tracking-wider hover:text-violet-300">
                  <span>Explore Apps</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
