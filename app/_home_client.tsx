"use client";

import { useState, useMemo, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import AppCard from "./components/AppCard";
import Footer from "./components/Footer";
import { setGames, type Game } from "@/store/slices/gameSlice";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import Marquee from "./components/Marquee";
import YonoOverview from "./components/YonoOverview";
import TelegramCTA from "./components/TelegramCTA";
import SeoContent from "./components/SeoContent";
import FAQ from "./components/FAQ";

// UI Components
import { GameCardSkeleton } from "./components/ui/skeleton/GameCardSkeleton";
import { SpotlightCardSkeleton } from "./components/ui/skeleton/SpotlightCardSkeleton";
import { EmptyState } from "./components/ui/EmptyState";
import { ErrorState } from "./components/ui/ErrorState";
import { Pagination } from "./components/ui/Pagination";

const CATEGORIES = ["All Apps", "New Apps"];

type HomeClientProps = {
  initialGames?: Game[];
  showFixedCard?: boolean;
  filterByTag?: string;
};

export default function HomeClient({
  initialGames = [],
  showFixedCard = false,
  filterByTag,
}: HomeClientProps) {
  const [activeTab, setActiveTab] = useState("All Apps");
  const [searchQuery, setSearchQuery] = useState("");

  const searchParams = useSearchParams();
  const pageParam = Number(searchParams.get("page")) || 1;
  const limitParam = Number(searchParams.get("limit")) || 15;

  const [pageSize, setPageSize] = useState(limitParam);

  useEffect(() => {
    setPageSize(limitParam);
  }, [limitParam]);

  const dispatch = useAppDispatch();

  const {
    games: reduxGames = [],
    loading,
    error,
  } = useAppSelector((state) => state.game);

  const games = reduxGames.length > 0 ? reduxGames : (initialGames ?? []);

  useEffect(() => {
    if (reduxGames.length === 0 && initialGames && initialGames.length > 0) {
      dispatch(setGames(initialGames));
    }
  }, [dispatch, reduxGames.length, initialGames]);

  const newGamesCount = games.filter((g) => g.isNewGame).length;

  const filteredGames = useMemo(() => {
    let result = [...games];
    if (activeTab === "New Apps") result = result.filter((g) => g.isNewGame);
    if (filterByTag) {
      const lowerTag = filterByTag.toLowerCase();
      result = result.filter(
        (g) =>
          g.name.toLowerCase().includes(lowerTag) ||
          (g.tags || []).some((t) => t.toLowerCase() === lowerTag)
      );
    }
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      result = result.filter(
        (g) =>
          g.name.toLowerCase().includes(q) ||
          (g.category || "").toLowerCase().includes(q) ||
          (g.tags || []).some((tag) => tag.toLowerCase().includes(q))
      );
    }
    return result;
  }, [activeTab, searchQuery, filterByTag, games]);

  const totalPages = Math.ceil(filteredGames.length / pageSize) || 1;
  const currentPage = Math.min(Math.max(1, pageParam), totalPages);

  const paginatedGames = useMemo(() => {
    const start = (currentPage - 1) * pageSize;
    return filteredGames.slice(start, start + pageSize);
  }, [filteredGames, currentPage, pageSize]);

  return (
    <div className="min-h-screen flex flex-col bg-[#0B0B0F] text-slate-100 relative overflow-hidden font-sans antialiased">
      {/* Background Ambient Glows */}
      <div className="absolute top-[-10%] left-[-15%] w-[60%] h-[40%] rounded-full bg-violet-600/10 blur-[140px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-15%] w-[50%] h-[50%] rounded-full bg-indigo-600/10 blur-[140px] pointer-events-none" />

      <Navbar />
      <Banner />
      <Marquee />

      <main id="game-list-section" className="flex-1 w-full max-w-[680px] mx-auto px-4 sm:px-6 py-10 relative z-10">
        {/* Modern Search Bar Container */}
        <div className="relative mb-6 group">
          <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
            <svg
              className="w-5 h-5 text-slate-400 group-focus-within:text-violet-400 transition-colors duration-200"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          <input
            type="text"
            placeholder="Search Yono apps by name, bonus, or category..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-10 py-3.5 bg-[#12131F]/90 border border-white/10 rounded-2xl text-white placeholder-slate-400 focus:outline-none focus:border-violet-500 focus:ring-4 focus:ring-violet-500/15 transition-all duration-200 shadow-xl backdrop-blur-xl hover:border-white/20"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="absolute inset-y-0 right-4 flex items-center"
            >
              <div className="bg-white/10 hover:bg-white/20 text-slate-400 hover:text-white p-1.5 rounded-full transition-colors duration-150">
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </div>
            </button>
          )}
        </div>

        {/* Category Tab Switcher */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex gap-2 bg-[#12131F] backdrop-blur-xl p-1.5 rounded-2xl border border-white/10 shadow-xl">
            {CATEGORIES.map((tab) => {
              const isActive = activeTab === tab;
              return (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`flex items-center gap-2 px-6 py-2.5 rounded-xl text-xs sm:text-sm font-bold tracking-wide transition-all duration-200 ${isActive
                    ? "bg-gradient-to-r from-violet-600 to-indigo-600 text-white shadow-lg shadow-violet-600/25 border border-violet-400/30 scale-[1.02]"
                    : "text-slate-400 hover:text-white hover:bg-white/5"
                    }`}
                >
                  <span>{tab}</span>
                  {tab === "New Apps" && newGamesCount > 0 && (
                    <span className="flex h-5 min-w-5 px-1.5 items-center justify-center rounded-full bg-rose-500 text-[10px] font-black text-white animate-pulse">
                      {newGamesCount}
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Loading Skeletons */}
        {loading && (
          <div aria-busy="true" aria-label="Loading games" className="flex flex-col gap-4">
            {showFixedCard && <SpotlightCardSkeleton />}
            {Array.from({ length: 6 }).map((_, idx) => (
              <GameCardSkeleton key={idx} />
            ))}
          </div>
        )}

        {/* Error State */}
        {!loading && error && (
          <ErrorState
            title="Failed to Load Yono Games"
            message={error || "A network error occurred while retrieving app listings."}
            onRetry={() => window.location.reload()}
          />
        )}

        {/* Main Content List */}
        {!loading && !error && (
          <>
            {/* Filter Stats Row */}
            <div className="flex items-center justify-between mb-4 px-1.5">
              <div className="text-xs font-bold text-slate-400 flex items-center gap-1.5">
                <span>
                  {filteredGames.length === 0 ? (
                    "No apps matching filter"
                  ) : (
                    <>
                      Showing <span className="text-violet-400 font-extrabold">{paginatedGames.length}</span> of <span className="text-violet-400 font-extrabold">{filteredGames.length}</span> verified app{filteredGames.length !== 1 && "s"}
                    </>
                  )}
                </span>
                {searchQuery && (
                  <span className="text-indigo-400 font-extrabold italic">
                    for &quot;{searchQuery}&quot;
                  </span>
                )}
              </div>
              <div className="flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-full">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span className="text-[10px] font-black uppercase tracking-wider text-emerald-400">100% Safe APKs</span>
              </div>
            </div>

            {/* List Container */}
            {filteredGames.length > 0 ? (
              <div className="flex flex-col gap-4">
                {/* Editor's Choice / Spotlight Fixed Card */}
                {showFixedCard && currentPage === 1 && (
                  <div className="relative overflow-hidden bg-gradient-to-br from-[#16172D] via-[#1A1C38] to-[#121327] text-white rounded-3xl p-5 sm:p-6 border border-violet-500/40 shadow-2xl shadow-violet-950/40 group transition-all duration-300 hover:border-violet-500/70 hover:shadow-violet-500/25">
                    {/* Background Radial Glow */}
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(124,58,237,0.3),transparent_70%)] pointer-events-none" />

                    {/* Subtle Rank Watermark */}
                    <div className="absolute right-4 bottom-[-20px] text-violet-900/15 font-black text-8xl sm:text-9xl select-none pointer-events-none leading-none">
                      #01
                    </div>

                    {/* Top Header Tag Bar */}
                    <div className="flex items-center justify-between gap-2 mb-4 relative z-10">
                      <div className="inline-flex items-center gap-1.5 bg-gradient-to-r from-amber-500 to-amber-400 text-slate-950 text-[10px] font-black tracking-widest uppercase px-3 py-1 rounded-full shadow-lg shadow-amber-500/25">
                        <span>👑</span>
                        <span>EDITOR&apos;S CHOICE SPOTLIGHT</span>
                      </div>
                      <div className="flex items-center gap-1 bg-white/5 border border-white/10 px-2.5 py-1 rounded-full text-[10px] sm:text-xs font-extrabold text-amber-300">
                        <span>★</span> 4.9 <span className="text-slate-400 font-medium hidden sm:inline">(10k+ reviews)</span>
                      </div>
                    </div>

                    {/* Main Content Layout */}
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 relative z-10">
                      <div className="flex items-center gap-4 min-w-0">
                        {/* Logo Container */}
                        <div className="relative shrink-0 w-16 h-16 sm:w-20 sm:h-20 rounded-2xl overflow-hidden shadow-2xl border border-violet-500/40 ring-4 ring-violet-500/20 group-hover:scale-105 transition-transform duration-300">
                          <Image
                            src="/logo.png"
                            alt="All Yono Games Logo"
                            fill
                            style={{ objectFit: "cover" }}
                            unoptimized
                          />
                        </div>

                        {/* Title & Features */}
                        <div className="min-w-0">
                          <div className="flex items-center gap-2">
                            <h2 className="text-base sm:text-xl font-black tracking-tight text-white group-hover:text-violet-200 transition-colors">
                              All Yono Game Store
                            </h2>
                            <span className="text-[9px] font-black text-emerald-400 bg-emerald-500/15 border border-emerald-500/30 px-2 py-0.5 rounded-full uppercase tracking-wider">
                              ⚡ VERIFIED
                            </span>
                          </div>
                          <p className="text-xs text-slate-300 mt-1 line-clamp-1 leading-relaxed">
                            Official premier bundle app for all classic Yono rummy, slots &amp; casino games.
                          </p>

                          {/* Stats / Offer Pills */}
                          <div className="flex flex-wrap items-center gap-2 mt-2.5">
                            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl text-xs font-extrabold bg-rose-500/15 text-rose-300 border border-rose-500/30">
                              <span>🎁</span> Bonus ₹1000
                            </span>
                            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl text-xs font-extrabold bg-emerald-500/15 text-emerald-300 border border-emerald-500/30">
                              <span>⚡</span> Min. Withdraw ₹100
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Download CTA Button */}
                      <div className="w-full sm:w-auto shrink-0 pt-2 sm:pt-0">
                        <Link
                          href="/all-yono-games"
                          className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-violet-600 via-indigo-600 to-purple-600 hover:from-violet-500 hover:to-purple-500 text-white text-xs sm:text-sm font-black px-6 py-3.5 rounded-2xl shadow-xl shadow-violet-600/35 hover:scale-[1.02] active:scale-95 transition-all border border-violet-400/30 uppercase tracking-widest cursor-pointer"
                        >
                          <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                          </svg>
                          <span>Get Official APK</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                )}

                {/* Cards List Stack */}
                <div className="flex flex-col gap-3.5">
                  {paginatedGames.map((game, idx) => (
                    <AppCard
                      key={game._id}
                      game={game}
                      index={(currentPage - 1) * pageSize + (showFixedCard && currentPage === 1 ? idx + 2 : idx + 1)}
                    />
                  ))}
                </div>

                {/* Pagination Controls */}
                <Pagination
                  currentPage={currentPage}
                  totalPages={totalPages}
                  pageSize={pageSize}
                  onPageSizeChange={(newSize) => setPageSize(newSize)}
                  pageSizeOptions={[15, 25, 50]}
                  scrollTargetId="game-list-section"
                />
              </div>
            ) : (
              /* Empty Search State */
              <EmptyState
                title="No Yono Apps Found"
                description="We couldn't find any results matching your search query or selected tab filter."
                actionText="Reset Search &amp; Filters"
                onAction={() => {
                  setSearchQuery("");
                  setActiveTab("All Apps");
                }}
              />
            )}
          </>
        )}
      </main>

      <YonoOverview />
      <TelegramCTA />
      <SeoContent />
      <FAQ />

      <Footer />
    </div>
  );
}

