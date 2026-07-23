import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AppCard from "../components/AppCard";
import Link from "next/link";
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

async function getGameBySlug(slug: string): Promise<Game | null> {
  try {
    const res = await fetch(`${API}/get-all-game`, { next: { revalidate: 60 } });
    const data = await res.json();
    const games: Game[] = (data.data || []).filter(Boolean);
    return games.find((g) => g.slug === slug) || null;
  } catch {
    return null;
  }
}

async function getAllGames(): Promise<Game[]> {
  try {
    const res = await fetch(`${API}/get-all-game`, { next: { revalidate: 60 } });
    const data = await res.json();
    return (data.data || []).filter(Boolean);
  } catch {
    return [];
  }
}

/**
 * Pre-renders all game slug pages at build time so Googlebot always finds
 * fully-rendered HTML. Falls back to on-demand ISR for any new games added
 * after the last build (Next.js default with `revalidate: 60`).
 */
export async function generateStaticParams() {
  const games = await getAllGames();

  return games.map((game) => ({
    slug: game.slug,
  }));
}


export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const game = await getGameBySlug(slug);
  if (!game) return { title: "App Not Found" };

  const plainDescription = (game.longDescription || game.description || "")
    .replace(/<[^>]*>?/gm, "")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, 120);

  const title = `${game.name} APK Download – ₹${game.signupBonus} Bonus`;

  // Natural, unique description per game — avoids the mechanical template that
  // triggers Google's duplicate-content filter.
  const description = [
    `${game.name} is a ${game.category} app`,
    game.signupBonus ? `offering a ₹${game.signupBonus} signup bonus` : "",
    game.minWithdraw ? `with a minimum withdrawal of ₹${game.minWithdraw}` : "",
    `and a ${game.rating || "4"}/5 star rating.`,
    plainDescription ? plainDescription + "." : "",
  ]
    .filter(Boolean)
    .join(" ")
    .slice(0, 160);

  const keywords = [
    game.name,
    `${game.name} APK`,
    `${game.name} download`,
    `${game.name} app`,
    ...(game.tags || []),
    "all yono games",
    "yono games",
    "yonoworld.xyz",
  ].join(", ");

  return {
    title,
    description,
    keywords,
    alternates: { canonical: `${SITE_URL}/${game.slug}` },
    openGraph: {
      type: "website",
      url: `${SITE_URL}/${game.slug}`,
      siteName: SITE_NAME,
      title,
      description,
      images: game.logoUrl ? [{ url: game.logoUrl, width: 128, height: 128, alt: `${game.name} logo` }] : [],
    },
    twitter: {
      card: "summary",
      site: `${SITE_URL}/${game.slug}`,
      title,
      description,
      images: game.logoUrl ? [game.logoUrl] : [],
    },
  };
}

export default async function AppDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const [game, allGames] = await Promise.all([getGameBySlug(slug), getAllGames()]);

  if (!game) notFound();

  // Related: same category, exclude current game, max 6
  const relatedApps = allGames
    .filter((g) => g._id !== game._id && g.category === game.category);

  // If fewer than 3 related in same category, fill with other games
  const related =
    relatedApps.length >= 2
      ? relatedApps
      : allGames.filter((g) => g._id !== game._id).slice(0, 6);

  const rating = game.rating || 0;
  const stars = Array.from({ length: 5 }, (_, i) => ({
    filled: i < Math.floor(rating),
    half: !(i < Math.floor(rating)) && i < rating,
  }));

  return (
    <div className="min-h-screen flex flex-col bg-slate-50/50 relative overflow-hidden font-sans antialiased">
      <style>{`
        .desc-content div {
          max-width: 100% !important;
          margin: 0 !important;
          padding: 0 !important;
          font-family: inherit !important;
          color: inherit !important;
          background: transparent !important;
          line-height: inherit !important;
        }
        .desc-content h1, .desc-content h2, .desc-content h3, .desc-content h4 {
          font-family: inherit !important;
          color: #0f172a !important;
          font-weight: 800 !important;
          margin-top: 0 !important;
          margin-bottom: 0.75rem !important;
          line-height: 1.3 !important;
        }
        .desc-content h1 {
          font-size: 1.3rem !important;
        }
        .desc-content h2 {
          font-size: 1.15rem !important;
          border-bottom: 1px solid rgba(229, 231, 235, 0.5) !important;
          padding-bottom: 0.5rem !important;
        }
        .desc-content h3 {
          font-size: 1.05rem !important;
        }
        .desc-content h4 {
          font-size: 0.95rem !important;
        }
        .desc-content p, .desc-content li, .desc-content td, .desc-content th {
          font-family: inherit !important;
          font-size: 13px !important;
          line-height: 1.625 !important;
          color: #475569 !important;
        }
        .desc-content p {
          margin-bottom: 1rem !important;
        }
        .desc-content ul, .desc-content ol {
          margin-bottom: 1.25rem !important;
          padding-left: 1.25rem !important;
        }
        .desc-content li {
          margin-bottom: 0.5rem !important;
          list-style-type: disc !important;
        }
        .desc-content ol li {
          list-style-type: decimal !important;
        }
        .desc-content table {
          width: 100% !important;
          border-collapse: collapse !important;
          margin: 1.5rem 0 !important;
          font-size: 12.5px !important;
          border: 1px solid #f1f5f9 !important;
          border-radius: 12px !important;
          overflow: hidden !important;
        }
        .desc-content th {
          background: #f8fafc !important;
          font-weight: 700 !important;
          text-align: left !important;
          padding: 10px 14px !important;
          border: 1px solid #f1f5f9 !important;
          color: #334155 !important;
        }
        .desc-content td {
          padding: 10px 14px !important;
          border: 1px solid #f1f5f9 !important;
          color: #475569 !important;
        }
        .desc-content tr:nth-child(even) {
          background: #fbfbfb !important;
        }
      `}</style>

      {/* Background Glow Blobs for premium depth in body */}
      <div className="absolute top-[30%] left-[-15%] w-[60%] h-[35%] rounded-full bg-gradient-to-br from-indigo-200/20 to-blue-200/20 blur-3xl pointer-events-none" />
      <div className="absolute bottom-[10%] right-[-15%] w-[50%] h-[40%] rounded-full bg-gradient-to-br from-purple-200/15 to-rose-200/15 blur-3xl pointer-events-none" />

      <Navbar />

      {/* Full-width Dark Hero Section */}
      <div className="bg-slate-950 text-white border-b border-slate-900 relative overflow-hidden">
        {/* Glow effect overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(99,102,241,0.18),transparent_65%)] pointer-events-none" />

        <div className="max-w-[620px] mx-auto px-4 py-8 relative z-10">
          {/* Breadcrumb (Light styling for dark bg) */}
          <nav className="flex items-center gap-2 text-xs font-semibold text-slate-400 mb-6">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span className="text-slate-200">{game.name}</span>
          </nav>

          {/* Hero Branding Info */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
            {/* Logo */}
            <div className="relative shrink-0 w-20 h-20 sm:w-24 sm:h-24 rounded-3xl overflow-hidden shadow-2xl border border-slate-800 ring-4 ring-indigo-500/10">
              {game.logoUrl ? (
                <Image
                  src={game.logoUrl}
                  alt={game.logoAlt || `${game.name} logo`}
                  title={game.logoTitle || game.name}
                  fill
                  style={{ objectFit: "cover" }}
                  priority
                  unoptimized
                />
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-indigo-600 to-blue-700 flex items-center justify-center">
                  <span className="text-4xl">{game.icon || "🎮"}</span>
                </div>
              )}
            </div>

            {/* Title / Description */}
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-1.5 mb-2">
                <span className="bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-[9px] font-black tracking-widest uppercase px-2 py-0.5 rounded-md">
                  ⚡ VERIFIED APP
                </span>
                {game.isNewGame && (
                  <span className="bg-rose-500/10 text-rose-400 border border-rose-500/20 text-[9px] font-black tracking-widest uppercase px-2 py-0.5 rounded-md">
                    ✨ NEW
                  </span>
                )}
              </div>

              <h1 className="text-2xl sm:text-3xl font-black text-white tracking-tight leading-tight">
                {game.name}
              </h1>

              {/* Stars block */}
              <div className="flex items-center gap-2 mt-2">
                <div className="flex items-center gap-0.5">
                  {stars.map((star, i) => (
                    <svg key={i} className={`w-3.5 h-3.5 ${star.filled ? "text-amber-400" : star.half ? "text-amber-300" : "text-slate-700"}`} fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="text-[11px] text-slate-400 font-bold uppercase tracking-wider">
                  {rating} ({Math.floor(rating * 1000)}+ votes)
                </span>
              </div>
            </div>
          </div>

          {/* CTA Action Row inside Dark Hero */}
          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <a
              href={game.downloadUrl || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-orange-500 to-rose-600 hover:from-orange-600 hover:to-rose-700 text-white font-black text-sm sm:text-base py-3 px-4 text-center rounded-2xl shadow-lg shadow-orange-500/20 hover:scale-[1.01] active:scale-95 transition-all duration-150 uppercase tracking-widest cursor-pointer"
            >
              <svg className="w-5 h-5 shrink-0" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              <span>Download APK</span>
            </a>

            {/* <a
              href="https://t.me/+xiZV9WhjGl05OWU9"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-white/5 border border-white/10 hover:bg-white/10 text-white font-bold text-xs sm:text-sm py-3 px-6 text-center rounded-2xl hover:scale-[1.01] active:scale-95 transition-all duration-150"
            >
              <svg className="w-4 h-4 shrink-0 text-blue-400" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12.002 12.002 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
              </svg>
              <span>Telegram Channel</span>
            </a> */}
          </div>

          {/* Hero Stats Badges Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-6">
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-3 flex flex-col justify-between shadow-inner">
              <span className="text-[9px] text-slate-400 font-bold uppercase tracking-wider">Signup Bonus</span>
              <p className="text-white font-extrabold text-sm sm:text-base mt-1">₹{game.signupBonus}</p>
            </div>
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-3 flex flex-col justify-between shadow-inner">
              <span className="text-[9px] text-slate-400 font-bold uppercase tracking-wider">Min Withdraw</span>
              <p className="text-white font-extrabold text-sm sm:text-base mt-1">₹{game.minWithdraw}</p>
            </div>
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-3 flex flex-col justify-between shadow-inner">
              <span className="text-[9px] text-slate-400 font-bold uppercase tracking-wider">App Package Size</span>
              <p className="text-white font-extrabold text-sm sm:text-base mt-1">{game.size}</p>
            </div>
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-3 flex flex-col justify-between shadow-inner">
              <span className="text-[9px] text-slate-400 font-bold uppercase tracking-wider">Play Rating</span>
              <p className="text-white font-extrabold text-sm sm:text-base mt-1">★ {rating}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Body Section */}
      <main className="flex-1 w-full max-w-[620px] mx-auto px-4 py-6 relative z-10">

        {/* JSON-LD structure mapping */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              name: game.name,
              applicationCategory: "GameApplication",
              operatingSystem: "Android",
              offers: { "@type": "Offer", price: "0", priceCurrency: "INR" },
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: rating,
                ratingCount: Math.floor(rating * 1000),
                bestRating: 5,
                worstRating: 1,
              },
              description: (game.description || "").replace(/<[^>]*>?/gm, ''),
              url: `${SITE_URL}/${game.slug}`,
              image: game.logoUrl,
              author: { "@type": "Organization", name: SITE_NAME },
            }),
          }}
        />

        {/* Specifications Card Table */}
        <div className="bg-white rounded-3xl border border-slate-200/50 shadow-xl shadow-slate-100/20 overflow-hidden mb-6">
          <div className="px-5 py-4 border-b border-slate-100 bg-slate-50/50">
            <h3 className="font-extrabold text-slate-800 text-xs uppercase tracking-wider">App Specifications</h3>
          </div>
          <div className="divide-y divide-slate-100 text-xs sm:text-sm">
            {[
              { label: "App Name", value: game.name },
              { label: "Category", value: game.category },
              { label: "Signup Bonus", value: `₹${game.signupBonus}` },
              { label: "Min Withdrawal", value: `₹${game.minWithdraw}` },
              { label: "File Size", value: game.size },
              { label: "Status", value: "Verified & Secure" },
            ].map((item, idx) => (
              <div key={idx} className="flex p-4 hover:bg-slate-50/30 transition-colors duration-150">
                <span className="w-1/3 text-slate-400 font-bold uppercase tracking-wider text-[10px] sm:text-xs my-auto">{item.label}</span>
                <span className="w-2/3 text-slate-800 font-extrabold">{item.value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Long Description Card */}
        <div className="bg-white rounded-3xl border border-slate-200/50 shadow-xl shadow-slate-100/20 p-5 sm:p-6 mb-6">

          {/* <div className="desc-content text-slate-600 text-xs sm:text-sm leading-relaxed" dangerouslySetInnerHTML={{ __html: game.longDescription || "" }} /> */}

          {/* Tags */}
          {/* {(game.tags || []).length > 0 && (
            <div className="mt-6 pt-5 border-t border-slate-100">
              <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-3">Keywords</h3>
              <div className="flex flex-wrap gap-2">
                {(game.tags || []).map((tag) => (
                  <span key={tag} className="bg-slate-100 text-slate-600 text-[11px] font-bold px-3.5 py-1.5 rounded-full hover:bg-slate-200/80 transition-colors cursor-default border border-slate-200/20">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )} */}
        </div>

        {/* FAQs */}
        {/* {(game.faqs || []).length > 0 && (
          <div className="mt-2 mb-6 flex flex-col gap-3.5">
            <h2 className="px-1 text-xs font-bold text-slate-400 uppercase tracking-widest">
              Frequently Asked Questions
            </h2>
            {game.faqs!.map((faq, idx) => (
              <details key={idx} className="bg-white border border-slate-200/60 text-slate-800 rounded-2xl shadow-sm group overflow-hidden transition-all duration-300 hover:border-slate-300/85">
                <summary className="font-extrabold text-[13px] sm:text-[14px] p-4.5 cursor-pointer list-none flex justify-between items-center bg-slate-50/50 hover:bg-slate-50 transition-colors">
                  <div className="flex items-center gap-2.5">
                    <span className="bg-indigo-500/10 text-indigo-600 font-black text-[10px] px-2 py-0.5 rounded-md">
                      {idx + 1 < 10 ? `0${idx + 1}` : idx + 1}
                    </span>
                    <span>{faq.question}</span>
                  </div>
                  <span className="transition-transform duration-200 group-open:rotate-180 shrink-0 ml-4">
                    <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </summary>
                <div className="text-[13px] whitespace-pre-line leading-relaxed px-5 pb-5 pt-4 border-t border-slate-100/80 text-slate-600">
                  <span className="font-bold text-slate-800 block mb-1">Answer:</span>
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        )} */}

        {/* Related Apps List */}
        {related.length > 0 && (
          <div className="space-y-3">
            <div className="flex items-center gap-1.5 px-1.5 text-xs font-bold text-slate-400 uppercase tracking-widest">
              <span>✨</span>
              <span>People Also Downloaded</span>
            </div>
            <div className="bg-white rounded-3xl border border-slate-200/50 shadow-xl shadow-slate-100/20 overflow-hidden divide-y divide-slate-100">
              {related.map((relGame, idx) => (
                <AppCard key={relGame._id} game={relGame} index={idx + 1} />
              ))}
            </div>
          </div>
        )}
      </main>

      <Footer tags={game.tags} />
    </div>
  );
}
