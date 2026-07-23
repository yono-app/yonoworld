import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AppCard from "../components/AppCard";
import type { Game } from "../types";

const SITE_URL =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3000"
    : "https://allyonogamesstore.com";
const SITE_NAME = "Yono Game Store";
// const API = process.env.NODE_ENV === "development"
//   ? "http://localhost:3000"
//   : "https://api.yonoworld.xyz/api"

const API = process.env.NEXT_PUBLIC_API_URL || "https://api.yonoworld.xyz/api";

const year = new Date().getFullYear();


// export const metadata: Metadata = {
//   title: `All Yono Games List ${year} | ${SITE_NAME}`,
//   description:
//     "Browse the complete list of All Yono Games — Yono , Yono 777, Jaiho Games, Slots & more. Compare bonuses, ratings. Updated daily.",
//   alternates: { canonical: `${SITE_URL}/all-yono-games` },

//   robots: {
//   index: true,
//   follow: true,
//   googleBot: {
//     index: true,
//     follow: true,
//     "max-snippet": -1,
//     "max-image-preview": "large",
//     "max-video-preview": -1,
//   },
// },
//   openGraph: {
//     title: `All Yono Games List ${year} | ${SITE_NAME}`,
//     description:
//       "Browse the complete list of All Yono Games — Yono , Yono 777, Jaiho Games, Slots & more. Compare bonuses, ratings. Updated daily.",
//     url: `${SITE_URL}/all-yono-games`,
//     siteName: SITE_NAME,
//     images: [{ url: `${SITE_URL}/og-image.png`, width: 1200, height: 630, alt: SITE_NAME }],
//     type: "website",
//   },
//   twitter: {
//     card: "summary_large_image",
//     title: `All Yono Games List 2026 | ${SITE_NAME}`,
//     description: "Browse every Yono  app — compare bonuses, ratings.",
//     images: [`${SITE_URL}/og-image.png`],
//   },
// };

async function getAllGames(): Promise<Game[]> {
  try {
    const res = await fetch(`${API}/get-all-game`, { next: { revalidate: 60 } });
    const data = await res.json();
    return (data.data || []).filter(Boolean);
  } catch {
    return [];
  }
}



/* ---------------------------------------------
   Dynamic Metadata
----------------------------------------------*/

export async function generateMetadata(): Promise<Metadata> {
  const games = await getAllGames();

  const totalGames = games.length;

  return {
    metadataBase: new URL(SITE_URL),


    title: `All Yono Games List ${year} (${totalGames}+ Apps)`,

    description: `Welcome to the premier destination for All Yono Games. We curate a collection of ${totalGames}+ verified Yono Games, including Yono 777, Yono Slots, and Jaiho Games.`,

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
      "online earning games",
      "mobile earning apps",
      "casino games",
      "rummy games",
      "slot games",
    ],

    authors: [
      {
        name: SITE_NAME,
      },
    ],

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

      locale: "en_US",

      url: `${SITE_URL}/all-yono-games`,

      siteName: SITE_NAME,

      title: `All Yono Games List ${year} (${totalGames}+ Apps)`,

      description: `Browse ${totalGames}+ verified Yono Games with signup bonuses, minimum withdrawal limits, ratings and download links.`,

      images: [
        {
          url: `${SITE_URL}/logo.jpeg`,
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

      description:
        "Discover the latest Yono Games with signup bonuses, ratings and download links.",

      images: [`${SITE_URL}/logo.jpeg`],
    },

    verification: {
      google: "YOUR_GOOGLE_VERIFICATION_CODE",
    },
  };
}



export default async function YonoGamesPage() {
  const allGames = await getAllGames();

  const related = allGames.filter((g) => {
    const lowerTag = "yono";

    return g.name.toLowerCase().includes(lowerTag) || (g.tags || []).some((t) => t.toLowerCase() === lowerTag);
  });

  const totalGames = related.length;

  const totalBonus =
    related.reduce((acc, game) => {
      const bonus = Number(game.signupBonus || 0);

      return acc + bonus;
    }, 0) || 0;


  /* ---------------------------------------------
  Structured Data
----------------------------------------------*/

  const webpageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: `All Yono Games List ${year}`,
    url: `${SITE_URL}/all-yono-games`,
    description:
      "Browse every verified Yono Game with signup bonus, withdrawal limit, ratings and download links.",
    inLanguage: "en",
    isPartOf: {
      "@type": "WebSite",
      name: SITE_NAME,
      url: SITE_URL,
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",

    "@type": "BreadcrumbList",

    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: SITE_URL,
      },

      {
        "@type": "ListItem",
        position: 2,
        name: "All Yono Games",
        item: `${SITE_URL}/all-yono-games`,
      },
    ],
  };

  const collectionSchema = {
    "@context": "https://schema.org",

    "@type": "CollectionPage",

    name: "All Yono Games",

    url: `${SITE_URL}/all-yono-games`,

    description:
      "Complete collection of Yono Games including slots, rummy and casino games.",

    numberOfItems: totalGames,
  };

  const itemListSchema = {
    "@context": "https://schema.org",

    "@type": "ItemList",

    name: "All Yono Games",

    numberOfItems: totalGames,

    itemListElement: related.map((game, index) => ({
      "@type": "ListItem",

      position: index + 1,

      url: `${SITE_URL}/${game.slug}`,

      name: game.name,
    })),
  };

  const faqSchema = {
    "@context": "https://schema.org",

    "@type": "FAQPage",

    mainEntity: [
      {
        "@type": "Question",

        name: "What are Yono Games?",

        acceptedAnswer: {
          "@type": "Answer",

          text: "Yono Games are online gaming applications that offer rummy, slots, casino and other real-money gaming experiences.",
        },
      },

      {
        "@type": "Question",

        name: "How often is this list updated?",

        acceptedAnswer: {
          "@type": "Answer",

          text: "This page is updated regularly with newly released Yono Games and bonus offers.",
        },
      },

      {
        "@type": "Question",

        name: "Can I compare signup bonuses?",

        acceptedAnswer: {
          "@type": "Answer",

          text: "Yes. Every listed app includes signup bonus, minimum withdrawal, ratings and download information.",
        },
      },
    ],
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50/50 relative overflow-hidden font-sans antialiased">
      {/* Background Glow Blobs for premium depth */}
      <div className="absolute top-[-10%] left-[-15%] w-[60%] h-[40%] rounded-full bg-gradient-to-br from-indigo-200/30 to-blue-200/30 blur-3xl pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-15%] w-[50%] h-[50%] rounded-full bg-gradient-to-br from-purple-200/25 to-rose-200/25 blur-3xl pointer-events-none" />

      <Navbar />

      <main className="flex-1 w-full max-w-[620px] mx-auto px-4 py-8 relative z-10">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs font-semibold text-slate-400 mb-6">
          <Link href="/" className="hover:text-blue-600 transition-colors">Home</Link>
          <span>/</span>
          <span className="text-blue-600">All Yono Games</span>
        </nav>

        {/* App Detail Card for All Yono Games */}
        <div className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 text-white rounded-2xl p-5 border border-slate-800/80 shadow-2xl group transition-all duration-300 hover:shadow-indigo-500/10 mb-6">
          {/* Decorative beam */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(99,102,241,0.25),transparent_60%)] pointer-events-none" />

          {/* Spotlight Badge */}
          <div className="absolute top-4 right-4 bg-gradient-to-r from-amber-500 to-yellow-400 text-slate-950 text-[9px] font-black tracking-wider uppercase px-2.5 py-1 rounded-md shadow-lg shadow-amber-500/15 flex items-center gap-1">
            <span>👑</span>
            <span>HUB SPOTLIGHT</span>
          </div>

          <div className="flex items-start gap-4">
            {/* Logo */}
            <div className="relative shrink-0 w-16 h-16 rounded-2xl overflow-hidden shadow-lg border border-slate-800 ring-4 ring-indigo-500/10 group-hover:scale-105 transition-transform duration-300">
              <Image
                src="/logo.jpeg"
                alt="All Yono Games logo"
                fill
                style={{ objectFit: "cover" }}
                priority
                unoptimized
              />
            </div>

            {/* Title + Info */}
            <div className="flex-1 min-w-0 pr-24">
              <h1 className="text-lg font-bold tracking-tight text-white group-hover:text-indigo-200 transition-colors duration-200">
                All Yono Games
              </h1>
              <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                Your primary gateway for the best Yono slots, rummy, and earning apps.
              </p>
            </div>
          </div>

          <div className="mt-5 pt-4 border-t border-slate-800/80 flex flex-col gap-3">
            {/* <a
              href="https://t.me/+xiZV9WhjGl05OWU9"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-extrabold text-xs py-3 rounded-xl shadow-lg shadow-indigo-500/20 hover:scale-[1.02] active:scale-95 transition-all duration-200"
            >
              <svg className="w-4 h-4 shrink-0" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12.002 12.002 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
              </svg>
              <span>JOIN OUR TELEGRAM CHANNEL</span>
            </a> */}
          </div>
        </div>

        {/* Description */}
        <div className="bg-white/80 backdrop-blur-md rounded-2xl border border-slate-200/60 shadow-lg shadow-slate-100/50 p-5 mb-6">
          <h2 className="text-slate-800 font-extrabold text-base mb-2 pb-2.5 border-b border-slate-100">
            All Yono Games Collection
          </h2>
          <p className="text-slate-600 text-xs leading-relaxed">
            Welcome to the ultimate hub for All Yono Games! Browse our curated selection below to discover new apps with the biggest signup bonuses and the lowest withdrawal limits. We regularly update this collection, so check back often or join our Telegram channel for the fastest updates!
          </p>

          <div className="mt-4 grid grid-cols-2 gap-3">
            <div className="bg-emerald-500/5 border border-emerald-200/20 rounded-xl p-3">
              <span className="text-[10px] text-emerald-600 font-bold uppercase tracking-wider">Max Signup Bonus</span>
              <p className="text-emerald-700 font-extrabold text-sm mt-0.5">Up to ₹1000</p>
            </div>
            <div className="bg-rose-500/5 border border-rose-200/20 rounded-xl p-3">
              <span className="text-[10px] text-rose-500 font-bold uppercase tracking-wider">Min Withdraw</span>
              <p className="text-rose-700 font-extrabold text-sm mt-0.5">₹100</p>
            </div>
          </div>
        </div>

        {/* Related Apps List */}
        {related.length > 0 && (
          <div className="space-y-3">
            <div className="flex items-center gap-1.5 px-1.5 text-xs font-bold text-slate-500 uppercase tracking-wider">
              <span>✨</span>
              <span>All Yono Games List ({related.length})</span>
            </div>
            <div className="bg-white/70 backdrop-blur-md rounded-3xl border border-slate-200/50 shadow-xl shadow-slate-100/40 overflow-hidden divide-y divide-slate-100">
              {related.map((relGame, idx) => (
                <AppCard key={relGame._id} game={relGame} index={idx + 1} />
              ))}
            </div>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
