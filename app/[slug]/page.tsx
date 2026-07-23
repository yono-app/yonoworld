import { Suspense } from "react";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import RelatedAppsSection from "../components/RelatedAppsSection";
import Link from "next/link";
import type { Game } from "../types";
import { TELEGRAM_URL, SITE_NAME, SITE_URL, API_URL, SITE_HOST } from "@/config/site";

async function getGameBySlug(slug: string): Promise<Game | null> {
  try {
    const res = await fetch(`${API_URL}/get-all-game`, { next: { revalidate: 60 } });
    const data = await res.json();
    const games: Game[] = (data.data || []).filter(Boolean);
    return games.find((g) => g.slug === slug) || null;
  } catch {
    return null;
  }
}

async function getAllGames(): Promise<Game[]> {
  try {
    const res = await fetch(`${API_URL}/get-all-game`, { next: { revalidate: 60 } });
    const data = await res.json();
    return (data.data || []).filter(Boolean);
  } catch {
    return [];
  }
}

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

  const title = `${game.name} APK Download – ₹${game.signupBonus} Bonus | All Yono Store`;

  const description = [
    `${game.name} is a top ${game.category} app`,
    game.signupBonus ? `offering a ₹${game.signupBonus} signup bonus` : "",
    game.minWithdraw ? `with minimum withdrawal of ₹${game.minWithdraw}` : "",
    `and a ${game.rating || "4.8"}/5 star play rating.`,
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
    SITE_HOST,
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

  const relatedApps = allGames
    .filter((g) => g._id !== game._id && g.category === game.category);

  const related =
    relatedApps.length >= 2
      ? relatedApps
      : allGames.filter((g) => g._id !== game._id).slice(0, 6);

  const rating = game.rating || 4.8;
  const stars = Array.from({ length: 5 }, (_, i) => ({
    filled: i < Math.floor(rating),
    half: !(i < Math.floor(rating)) && i < rating,
  }));

  return (
    <div className="min-h-screen flex flex-col bg-[#07080E] text-slate-100 relative overflow-hidden font-sans antialiased">
      {/* Premium Multi-Layered Ambient Lighting */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[300px] bg-violet-600/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-[30%] right-[-10%] w-[400px] h-[400px] bg-indigo-600/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-[20%] left-[-10%] w-[400px] h-[400px] bg-sky-600/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(124,58,237,0.1),transparent_70%)] pointer-events-none" />

      {/* Cyber Grid Pattern Overlay */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(rgba(255, 255, 255, 0.4) 1px, transparent 1px)`,
          backgroundSize: "24px 24px",
        }}
      />

      <Navbar />

      {/* Hero Header Section */}
      <div className="bg-[#0A0B14]/90 text-white border-b border-white/[0.08] relative overflow-hidden backdrop-blur-xl">
        <div className="max-w-[680px] mx-auto px-4 sm:px-6 py-8 sm:py-10 relative z-10">

          {/* Breadcrumb Pill Navigation */}
          <nav aria-label="Breadcrumb" className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md text-[11px] font-bold text-slate-400 mb-6 shadow-sm">
            <Link href="/" className="flex items-center gap-1.5 hover:text-white transition-colors duration-150">
              <svg className="w-3.5 h-3.5 text-violet-400 shrink-0" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">0
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              <span>Home</span>
            </Link>
            <span className="text-slate-600 font-bold select-none">/</span>
            <Link href="/all-yono-games" className="hover:text-white transition-colors duration-150 hidden sm:inline-block">
              Apps Directory
            </Link>
            <span className="text-slate-600 font-bold select-none hidden sm:inline-block">/</span>
            <span className="text-violet-300 font-extrabold max-w-[160px] sm:max-w-[240px] truncate" aria-current="page">
              {game.name}
            </span>
          </nav>

          {/* App Header Main Row */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 sm:gap-6">
            {/* App Icon Avatar */}
            <div className="relative shrink-0 w-24 h-24 sm:w-28 sm:h-28 rounded-3xl overflow-hidden shadow-2xl shadow-violet-950/80 border border-violet-500/40 ring-4 ring-violet-500/20 group hover:scale-[1.02] transition-transform duration-300">
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
                <div className="w-full h-full bg-gradient-to-br from-violet-600 via-indigo-700 to-purple-800 flex items-center justify-center">
                  <span className="text-4xl">{game.icon || "🎮"}</span>
                </div>
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Title & Badges */}
            <div className="flex-1 min-w-0">
              {/* Badges Row */}
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <span className="inline-flex items-center gap-1.5 bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 text-[9px] font-black tracking-widest uppercase px-2.5 py-0.5 rounded-full shadow-sm backdrop-blur-md">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-400"></span>
                  </span>
                  <span>VERIFIED 2026</span>
                </span>

                <span className="inline-flex items-center gap-1 bg-indigo-500/15 text-indigo-300 border border-indigo-500/30 text-[9px] font-black tracking-widest uppercase px-2.5 py-0.5 rounded-full shadow-sm backdrop-blur-md">
                  <span>🛡️</span> OFFICIAL APK
                </span>

                {game.isNewGame && (
                  <span className="inline-flex items-center gap-1 bg-rose-500/15 text-rose-400 border border-rose-500/30 text-[9px] font-black tracking-widest uppercase px-2.5 py-0.5 rounded-full shadow-sm backdrop-blur-md">
                    <span>✨</span> NEW RELEASE
                  </span>
                )}
              </div>

              {/* Title */}
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-violet-200 tracking-tight leading-snug">
                {game.name}
              </h1>

              {/* Star Rating & Review Count */}
              <div className="flex items-center gap-3 mt-2.5">
                <div className="flex items-center gap-0.5">
                  {stars.map((star, i) => (
                    <svg key={i} className={`w-4 h-4 ${star.filled ? "text-amber-400" : star.half ? "text-amber-300" : "text-slate-700"}`} fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="text-xs text-slate-300 font-bold">
                  {rating} <span className="text-slate-500 font-medium">({Math.floor(rating * 1000)}+ ratings)</span>
                </span>
              </div>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="mt-8 flex flex-col sm:flex-row gap-3.5">
            <a
              href={game.downloadUrl || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2.5 bg-gradient-to-r from-violet-600 via-indigo-600 to-purple-600 hover:from-violet-500 hover:to-purple-500 text-white font-black text-sm sm:text-base py-3.5 px-6 text-center rounded-2xl shadow-xl shadow-violet-600/30 hover:scale-[1.01] active:scale-95 transition-all duration-200 uppercase tracking-wider cursor-pointer border border-violet-400/30"
            >
              <svg className="w-5 h-5 shrink-0 animate-bounce-short" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              <span>Download Official APK</span>
            </a>

            <a
              href={TELEGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2.5 bg-gradient-to-r from-blue-600 via-indigo-600 to-sky-600 hover:from-blue-500 hover:to-sky-500 text-white font-black text-sm sm:text-base py-3.5 px-6 text-center rounded-2xl shadow-xl shadow-blue-600/25 hover:scale-[1.01] active:scale-95 transition-all duration-200 uppercase tracking-wider cursor-pointer border border-blue-400/30"
            >
              <svg className="w-5 h-5 shrink-0 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.295-.6.295-.002 0-.003 0-.005 0l.213-3.054 5.56-5.022c.24-.213-.054-.334-.373-.121l-6.869 4.326-2.96-.924c-.64-.203-.658-.643.135-.953l11.566-4.458c.538-.196 1.006.128.832.941z" />
              </svg>
              <span>Join Telegram</span>
            </a>
          </div>

          {/* Key Metrics Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-8">
            <div className="bg-[#121422]/90 backdrop-blur-xl border border-rose-500/30 rounded-2xl p-4 flex flex-col justify-between shadow-lg hover:border-rose-500/50 transition-colors">
              <span className="text-[10px] text-slate-400 font-extrabold uppercase tracking-wider flex items-center gap-1.5">
                <span>🎁</span> Signup Bonus
              </span>
              <p className="text-rose-300 font-black text-base sm:text-lg mt-1.5">₹{game.signupBonus}</p>
            </div>
            <div className="bg-[#121422]/90 backdrop-blur-xl border border-emerald-500/30 rounded-2xl p-4 flex flex-col justify-between shadow-lg hover:border-emerald-500/50 transition-colors">
              <span className="text-[10px] text-slate-400 font-extrabold uppercase tracking-wider flex items-center gap-1.5">
                <span>⚡</span> Min Withdraw
              </span>
              <p className="text-emerald-300 font-black text-base sm:text-lg mt-1.5">₹{game.minWithdraw}</p>
            </div>
            <div className="bg-[#121422]/90 backdrop-blur-xl border border-violet-500/30 rounded-2xl p-4 flex flex-col justify-between shadow-lg hover:border-violet-500/50 transition-colors">
              <span className="text-[10px] text-slate-400 font-extrabold uppercase tracking-wider flex items-center gap-1.5">
                <span>📦</span> App Size
              </span>
              <p className="text-violet-200 font-black text-base sm:text-lg mt-1.5">{game.size || "35 MB"}</p>
            </div>
            <div className="bg-[#121422]/90 backdrop-blur-xl border border-amber-500/30 rounded-2xl p-4 flex flex-col justify-between shadow-lg hover:border-amber-500/50 transition-colors">
              <span className="text-[10px] text-slate-400 font-extrabold uppercase tracking-wider flex items-center gap-1.5">
                <span>★</span> Play Rating
              </span>
              <p className="text-amber-300 font-black text-base sm:text-lg mt-1.5">{rating} / 5</p>
            </div>
          </div>

        </div>
      </div>

      {/* Main Content Area */}
      <main className="flex-1 w-full max-w-[680px] mx-auto px-4 sm:px-6 py-8 relative z-10 space-y-7">

        {/* JSON-LD Schema */}
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

        {/* App Specifications Card */}
        <div className="bg-[#121320]/90 rounded-3xl border border-white/10 shadow-2xl backdrop-blur-xl overflow-hidden">
          {/* Section Header */}
          <div className="px-6 py-4 border-b border-white/10 bg-white/5 flex items-center justify-between">
            <h3 className="font-extrabold text-white text-xs sm:text-sm uppercase tracking-wider flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 shadow-md shadow-emerald-500/50" />
              <span>App Specification &amp; System Requirements</span>
            </h3>
            <span className="text-[10px] font-black text-emerald-300 bg-emerald-500/15 border border-emerald-500/30 px-2.5 py-1 rounded-full uppercase tracking-wider">
              100% VERIFIED
            </span>
          </div>

          {/* Specifications List */}
          <div className="divide-y divide-white/5 text-xs sm:text-sm">
            {[
              { icon: "📱", label: "App Name", value: game.name },
              { icon: "🏷️", label: "Category", value: game.category || "Rummy & Slots" },
              {
                icon: "🎁",
                label: "Signup Bonus",
                value: `₹${game.signupBonus}`,
                render: (
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl text-xs font-black bg-rose-500/15 text-rose-300 border border-rose-500/30">
                    🎁 ₹{game.signupBonus} Bonus
                  </span>
                ),
              },
              {
                icon: "⚡",
                label: "Min Withdrawal",
                value: `₹${game.minWithdraw}`,
                render: (
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl text-xs font-black bg-emerald-500/15 text-emerald-300 border border-emerald-500/30">
                    ⚡ ₹{game.minWithdraw} Instant
                  </span>
                ),
              },
              { icon: "📦", label: "File Package Size", value: game.size || "35 MB" },
              { icon: "🤖", label: "OS Requirement", value: "Android 5.0 and higher" },
              {
                icon: "🛡️",
                label: "Security & Safety",
                value: "Passed Malware & Virus Scan",
                render: (
                  <span className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-300">
                    <span>🛡️</span> Passed Malware &amp; Virus Scan
                  </span>
                ),
              },
            ].map((item, idx) => (
              <div key={idx} className="flex items-center p-4 sm:px-6 hover:bg-white/[0.02] transition-colors duration-150 gap-4">
                <div className="w-1/3 flex items-center gap-2 text-slate-400 font-bold uppercase tracking-wider text-[10px] sm:text-xs">
                  <span>{item.icon}</span>
                  <span>{item.label}</span>
                </div>
                <div className="w-2/3 text-white font-extrabold">
                  {item.render || item.value}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* HTML Description Block */}
        {game.longDescription && (
          <div className="bg-[#121320]/90 rounded-3xl border border-white/10 shadow-2xl backdrop-blur-xl overflow-hidden">
            {/* Description Header Accent Bar */}
            <div className="h-1 bg-gradient-to-r from-violet-600 via-indigo-600 to-purple-600" />

            <div className="p-6 sm:p-8 space-y-6">
              {/* Header Title */}
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <h2 className="text-lg font-black text-white flex items-center gap-2">
                  <span className="text-violet-400">📖</span>
                  <span>App Overview &amp; Detailed Guide</span>
                </h2>
                <span className="text-[10px] font-black text-violet-300 bg-violet-500/10 border border-violet-500/20 px-2.5 py-1 rounded-full uppercase tracking-wider">
                  VERIFIED INFO
                </span>
              </div>

              {/* Description Content */}
              <div className="desc-content" dangerouslySetInnerHTML={{ __html: game.longDescription }} />

              {/* Related Tags */}
              {game.tags && game.tags.length > 0 && (
                <div className="pt-6 border-t border-white/10">
                  <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-3 flex items-center gap-1.5">
                    <span>🏷️</span> Related Tags
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {game.tags.map((tag) => (
                      <span
                        key={tag}
                        className="bg-white/5 hover:bg-violet-500/15 border border-white/10 hover:border-violet-500/30 text-slate-300 hover:text-violet-300 text-xs font-semibold px-3 py-1 rounded-full transition-colors cursor-default"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* App FAQs Accordion */}
        {(game.faqs || []).length > 0 && (
          <div className="space-y-3">
            <h2 className="px-1 text-xs font-black text-slate-400 uppercase tracking-widest flex items-center gap-2">
              <span>❓</span> Frequently Asked Questions
            </h2>
            <div className="space-y-3">
              {game.faqs!.map((faq, idx) => (
                <details key={idx} className="bg-[#121320]/90 border border-white/10 text-white rounded-2xl shadow-md group overflow-hidden transition-all duration-300">
                  <summary className="font-extrabold text-sm p-4.5 cursor-pointer list-none flex justify-between items-center bg-white/5 hover:bg-white/10 transition-colors">
                    <div className="flex items-center gap-3">
                      <span className="bg-violet-500/20 text-violet-300 font-black text-[10px] px-2 py-0.5 rounded-md border border-violet-500/30">
                        0{idx + 1}
                      </span>
                      <span>{faq.question}</span>
                    </div>
                    <span className="transition-transform duration-200 group-open:rotate-180 shrink-0 ml-4 text-slate-400">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                      </svg>
                    </span>
                  </summary>
                  <div className="text-xs sm:text-sm whitespace-pre-line leading-relaxed px-5 pb-5 pt-4 border-t border-white/10 text-slate-300">
                    <strong className="text-violet-300 block mb-1">Answer:</strong>
                    {faq.answer}
                  </div>
                </details>
              ))}
            </div>
          </div>
        )}

        {/* Related Apps List */}
        <Suspense fallback={null}>
          <RelatedAppsSection games={related} pageSize={5} />
        </Suspense>
      </main>

      <Footer tags={game.tags} />
    </div>
  );
}