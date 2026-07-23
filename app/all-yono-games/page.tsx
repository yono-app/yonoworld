import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AppCard from "../components/AppCard";
import type { Game } from "../types";
import { SITE_NAME, SITE_URL, API_URL } from "@/config/site";

const year = new Date().getFullYear();

async function getAllGames(): Promise<Game[]> {
  try {
    const res = await fetch(`${API_URL}/get-all-game`, { next: { revalidate: 60 } });
    const data = await res.json();
    return (data.data || []).filter(Boolean);
  } catch {
    return [];
  }
}

export async function generateMetadata(): Promise<Metadata> {
  const games = await getAllGames();
  const totalGames = games.length;

  return {
    metadataBase: new URL(SITE_URL),
    title: `All Yono Games List ${year} (${totalGames}+ Verified Apps)`,
    description: `Welcome to the premier destination for All Yono Games. Browse our collection of ${totalGames}+ verified Yono Games, including Yono Rummy, Yono 777, Yono Slots, and Jaiho Games.`,
    keywords: [
      "all yono games",
      "all yono games list",
      "yono games",
      "latest yono games",
      "new yono games",
      "best yono games",
      "all yono apps",
      "yono app download",
      "yono rummy",
      "yono slots",
      "yono earning apps",
      "real money games",
      "yono 777",
      "jaiho games",
      "bonus yono app",
      "withdraw yono games",
    ],
    authors: [{ name: SITE_NAME }],
    creator: SITE_NAME,
    publisher: SITE_NAME,
    category: "Gaming",
    applicationName: SITE_NAME,
    alternates: {
      canonical: `${SITE_URL}/all-yono-games`,
    },
    robots: {
      index: true,
      follow: true,
      nocache: false,
      googleBot: {
        index: true,
        follow: true,
        noimageindex: false,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
    openGraph: {
      type: "website",
      locale: "en_IN",
      url: `${SITE_URL}/all-yono-games`,
      siteName: SITE_NAME,
      title: `All Yono Games List ${year} (${totalGames}+ Apps)`,
      description: `Browse ${totalGames}+ verified Yono Games with signup bonuses, minimum withdrawal limits, ratings and download links.`,
      images: [
        {
          url: `${SITE_URL}/logo.png`,
          width: 1200,
          height: 630,
          alt: "All Yono Games List",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `All Yono Games List ${year}`,
      site: SITE_URL,
      description: "Discover the latest Yono Games with signup bonuses, ratings and download links.",
      images: [`${SITE_URL}/logo.png`],
    },
  };
}

export default async function YonoGamesPage() {
  const allGames = await getAllGames();

  const related = allGames.filter((g) => {
    const lowerTag = "yono";
    return g.name.toLowerCase().includes(lowerTag) || (g.tags || []).some((t) => t.toLowerCase() === lowerTag);
  });

  const totalGames = related.length || allGames.length;
  const gamesList = related.length > 0 ? related : allGames;

  return (
    <div className="min-h-screen flex flex-col bg-[#0B0B0F] text-slate-100 relative overflow-hidden font-sans antialiased">
      {/* Ambient Glow Effects */}
      <div className="absolute top-[-10%] left-[-15%] w-[60%] h-[40%] rounded-full bg-violet-600/10 blur-[140px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-15%] w-[50%] h-[50%] rounded-full bg-indigo-600/10 blur-[140px] pointer-events-none" />

      <Navbar />

      <main className="flex-1 w-full max-w-[680px] mx-auto px-4 sm:px-6 py-10 relative z-10 space-y-6">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs font-semibold text-slate-400">
          <Link href="/" className="hover:text-violet-400 transition-colors">Home</Link>
          <span>/</span>
          <span className="text-violet-300">All Yono Games Directory</span>
        </nav>

        {/* Directory Spotlight Header Card */}
        <div className="relative overflow-hidden bg-gradient-to-br from-[#151628] via-[#1A1B35] to-[#121324] text-white rounded-3xl p-6 border border-violet-500/30 shadow-2xl">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(124,58,237,0.25),transparent_65%)] pointer-events-none" />

          <div className="absolute top-5 right-5 bg-gradient-to-r from-amber-500 to-yellow-400 text-slate-950 text-[10px] font-black tracking-widest uppercase px-3 py-1 rounded-lg shadow-lg">
            <span>👑</span> DIRECTORY HUB
          </div>

          <div className="flex items-start gap-5">
            <div className="relative shrink-0 w-18 h-18 sm:w-20 sm:h-20 rounded-2xl overflow-hidden shadow-xl border border-violet-500/40 ring-4 ring-violet-500/15">
              <Image
                src="/logo.png"
                alt="All Yono Games Logo"
                fill
                style={{ objectFit: "cover" }}
                priority
                unoptimized
              />
            </div>

            <div className="flex-1 min-w-0 pr-20">
              <h1 className="text-2xl font-black tracking-tight text-white">
                All Yono Games Directory
              </h1>
              <p className="text-xs text-slate-300 mt-1.5 leading-relaxed">
                Browse our complete curated list of {totalGames}+ tested Yono apps with real-time bonus details.
              </p>
            </div>
          </div>

          {/* Stat metrics */}
          <div className="grid grid-cols-2 gap-3 mt-6 pt-5 border-t border-white/10">
            <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-2xl p-3.5">
              <span className="text-[10px] text-emerald-400 font-black uppercase tracking-wider">Max Signup Bonus</span>
              <p className="text-emerald-300 font-black text-sm sm:text-base mt-0.5">Up to ₹1500</p>
            </div>
            <div className="bg-rose-500/10 border border-rose-500/20 rounded-2xl p-3.5">
              <span className="text-[10px] text-rose-400 font-black uppercase tracking-wider">Min Withdrawal</span>
              <p className="text-rose-300 font-black text-sm sm:text-base mt-0.5">₹100 Instant</p>
            </div>
          </div>
        </div>

        {/* App List Section */}
        <div className="space-y-4">
          <div className="flex items-center justify-between px-1">
            <h2 className="text-xs font-black text-slate-400 uppercase tracking-widest flex items-center gap-2">
              <span>✨</span>
              <span>All Yono Apps ({totalGames})</span>
            </h2>
            <span className="text-[10px] font-bold text-violet-400 bg-violet-500/10 border border-violet-500/20 px-2.5 py-1 rounded-full">
              UPDATED DAILY
            </span>
          </div>

          <div className="flex flex-col gap-3.5">
            {gamesList.map((game, idx) => (
              <AppCard key={game._id} game={game} index={idx + 1} />
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

