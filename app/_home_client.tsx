"use client";

import { useState, useMemo, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import AppCard from "./components/AppCard";
import Footer from "./components/Footer";

import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { fetchAllGames } from "@/store/slices/gameSlice";

const CATEGORIES = ["All Apps", "New Apps"];

type HomeClientProps = {
  showFixedCard?: boolean;
  filterByTag?: string;
};

export default function HomeClient({ showFixedCard = false, filterByTag }: HomeClientProps = {}) {
  const dispatch = useAppDispatch();
  const { games, loading, error } = useAppSelector((state) => state.game);

  const [activeTab, setActiveTab] = useState("All Apps");
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    if (games.length === 0) {
      dispatch(fetchAllGames());
    }
  }, [dispatch]);

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
  }, [activeTab, searchQuery, games]);

  return (
    <div className="min-h-screen flex flex-col bg-slate-50/50 relative overflow-hidden font-sans antialiased">
      {/* Background Glow Blobs for premium depth */}
      <div className="absolute top-[-10%] left-[-15%] w-[60%] h-[40%] rounded-full bg-gradient-to-br from-indigo-200/30 to-blue-200/30 blur-3xl pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-15%] w-[50%] h-[50%] rounded-full bg-gradient-to-br from-purple-200/25 to-rose-200/25 blur-3xl pointer-events-none" />

      <Navbar />
      <Banner />

      <main className="flex-1 w-full max-w-[620px] mx-auto px-4 py-8 relative z-10">
        {/* Modern Search Bar Container */}
        <div className="relative mb-6 group">
          <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
            <svg
              className="w-5 h-5 text-slate-400 group-focus-within:text-blue-500 transition-colors duration-200"
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
            placeholder="Search apps..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-10 py-3.5 bg-white border border-slate-200 rounded-2xl text-slate-800 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all duration-200 shadow-sm shadow-slate-100 hover:border-slate-300"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="absolute inset-y-0 right-4 flex items-center"
            >
              <div className="bg-slate-200 hover:bg-slate-300 text-slate-500 hover:text-slate-700 p-1 rounded-full transition-colors duration-150">
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </div>
            </button>
          )}
        </div>

        {/* Tab switcher */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex gap-1.5 bg-slate-200/50 backdrop-blur-sm p-1.5 rounded-2xl border border-slate-300/30 shadow-inner">
            {CATEGORIES.map((tab) => {
              const isActive = activeTab === tab;
              return (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`flex items-center gap-1.5 px-6 py-2.5 rounded-xl text-sm font-semibold tracking-wide transition-all duration-200 ${
                    isActive
                      ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md shadow-blue-500/25 scale-[1.02]"
                      : "text-slate-600 hover:text-slate-900 hover:bg-slate-300/30"
                  }`}
                >
                  <span>{tab}</span>
                  {tab === "New Apps" && newGamesCount > 0 && (
                    <span className="flex h-5 min-w-5 px-1 items-center justify-center rounded-full bg-rose-500 text-[10px] font-black text-white animate-pulse">
                      {newGamesCount}
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Loading Spinner */}
        {loading && (
          <div className="flex flex-col items-center justify-center py-20 gap-4">
            <div className="relative w-12 h-12">
              <div className="absolute inset-0 rounded-full border-4 border-slate-200"></div>
              <div className="absolute inset-0 rounded-full border-4 border-t-blue-600 border-r-indigo-500 animate-spin"></div>
            </div>
            <p className="text-sm font-medium text-slate-500">Loading Yono apps...</p>
          </div>
        )}

        {/* Error State */}
        {!loading && error && (
          <div className="text-center py-16 px-6 bg-rose-50/50 border border-rose-100 rounded-3xl backdrop-blur-sm">
            <div className="text-4xl mb-4">⚠️</div>
            <h3 className="text-lg font-bold text-slate-800">{error}</h3>
            <p className="text-sm text-slate-500 mt-1 mb-6">Something went wrong while retrieving games.</p>
            <button
              onClick={() => window.location.reload()}
              className="px-6 py-2.5 bg-gradient-to-r from-rose-500 to-red-600 hover:from-rose-600 hover:to-red-700 text-white font-semibold rounded-xl text-sm shadow-md shadow-rose-500/20 active:scale-95 transition-all duration-150"
            >
              Retry Connection
            </button>
          </div>
        )}

        {/* Content list */}
        {!loading && !error && (
          <>
            {/* Stats row & active filter indicators */}
            <div className="flex items-center justify-between mb-4 px-1.5">
              <div className="text-xs font-semibold text-slate-500 flex items-center gap-1.5">
                <span>
                  {filteredGames.length === 0 ? (
                    "No apps matching"
                  ) : (
                    <>
                      Showing <span className="text-blue-600 font-bold">{filteredGames.length}</span> premium app{filteredGames.length !== 1 && "s"}
                    </>
                  )}
                </span>
                {searchQuery && (
                  <span className="text-indigo-600 font-bold italic">
                    for &quot;{searchQuery}&quot;
                  </span>
                )}
              </div>
              <div className="flex items-center gap-1.5 bg-emerald-50 border border-emerald-100/60 px-3 py-1 rounded-full">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-700">Verified &amp; Safe</span>
              </div>
            </div>

            {/* List area */}
            {filteredGames.length > 0 ? (
              <div className="flex flex-col gap-4">
                
                {/* Stunning Spotlight / Editor's Choice Fixed Card */}
                {showFixedCard && (
                  <div className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 text-white rounded-2xl p-5 border border-slate-800/80 shadow-2xl group transition-all duration-300 hover:shadow-indigo-500/10">
                    {/* Decorative beam */}
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(99,102,241,0.25),transparent_60%)] pointer-events-none" />
                    
                    {/* Big stylized background rank */}
                    <div className="absolute right-4 bottom-[-10px] text-indigo-900/15 font-black text-8xl select-none pointer-events-none leading-none">
                      01
                    </div>

                    {/* Spotlight Badge */}
                    <div className="absolute top-4 right-4 bg-gradient-to-r from-amber-500 to-yellow-400 text-slate-950 text-[9px] font-black tracking-wider uppercase px-2.5 py-1 rounded-md shadow-lg shadow-amber-500/15 flex items-center gap-1">
                      <span>👑</span>
                      <span>EDITOR'S CHOICE</span>
                    </div>

                    <div className="flex items-start gap-4">
                      {/* Logo container */}
                      <div className="relative shrink-0 w-16 h-16 rounded-2xl overflow-hidden shadow-lg border border-slate-800 ring-4 ring-indigo-500/10 group-hover:scale-105 transition-transform duration-300">
                        <Image
                          src="/logo.jpeg"
                          alt="All Yono Games Logo"
                          fill
                          style={{ objectFit: "cover" }}
                          unoptimized
                        />
                      </div>

                      {/* Content block */}
                      <div className="flex-1 min-w-0 pr-16">
                        <h2 className="text-lg font-bold tracking-tight text-white group-hover:text-indigo-200 transition-colors duration-200">
                          All Yono Game
                        </h2>
                        <p className="text-xs text-slate-400 mt-1 leading-relaxed line-clamp-1">
                          The official premium bundle app for all classic games.
                        </p>

                        {/* Offers pills */}
                        <div className="flex flex-wrap gap-2 mt-3">
                          <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-[11px] font-bold bg-rose-500/15 text-rose-300 border border-rose-500/25">
                            <span>🎁</span> Sign Up Bonus ₹1000
                          </span>
                          <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-[11px] font-bold bg-emerald-500/15 text-emerald-300 border border-emerald-500/25">
                            <span>🏠</span> Min. Withdrawal ₹100
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Action Row */}
                    <div className="flex justify-between items-center mt-5 pt-4 border-t border-slate-800/80">
                      <span className="text-[11px] text-slate-400 font-medium flex items-center gap-1">
                        <span>⭐</span> 4.9 Rating &bull; Free Download
                      </span>
                      <Link
                        href="/all-yono-games"
                        className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white text-xs font-black px-5 py-2.5 rounded-xl shadow-lg shadow-indigo-500/20 hover:scale-[1.03] transition-all active:scale-[0.97] flex items-center gap-2"
                      >
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                        </svg>
                        <span>GET DOWNLOAD</span>
                      </Link>
                    </div>
                  </div>
                )}

                {/* Main Cards list block wrapper */}
                <div className="bg-white/70 backdrop-blur-md rounded-3xl border border-slate-200/50 shadow-xl shadow-slate-100/40 overflow-hidden divide-y divide-slate-100">
                  {filteredGames.map((game, idx) => (
                    <AppCard
                      key={game._id}
                      game={game}
                      index={showFixedCard ? idx + 2 : idx + 1}
                    />
                  ))}
                </div>

              </div>
            ) : (
              /* Beautiful Empty Search State */
              <div className="text-center py-16 px-6 bg-white/50 border border-slate-100 rounded-3xl backdrop-blur-sm shadow-sm">
                <div className="w-16 h-16 mx-auto mb-4 bg-slate-100 text-slate-400 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <h3 className="text-base font-bold text-slate-800">No Apps Found</h3>
                <p className="text-sm text-slate-500 mt-1 mb-6">We couldn't find any results matching your filters or search query.</p>
                <button
                  onClick={() => {
                    setSearchQuery("");
                    setActiveTab("All Apps");
                  }}
                  className="px-5 py-2.5 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold rounded-xl text-sm shadow-md shadow-blue-500/15 transition-all duration-150"
                >
                  Clear Search &amp; Filters
                </button>
              </div>
            )}
          </>
        )}
      </main>

      <Footer />
    </div>
  );
}