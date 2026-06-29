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
  }, [dispatch]); // eslint-disable-line react-hooks/exhaustive-deps

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
    <div
      className="min-h-screen flex flex-col"
      style={{
        background: "#F5F5F7",
        fontFamily: "-apple-system, BlinkMacSystemFont, 'SF Pro Text', 'Segoe UI', sans-serif",
        WebkitFontSmoothing: "antialiased",
      }}
    >
      <style>{`
        .hc-search {
          background: #fff;
          border: 1px solid #D2D2D7;
          border-radius: 12px;
          color: #1D1D1F;
          font-size: 15px;
          padding: 10px 14px 10px 38px;
          width: 100%;
          outline: none;
          transition: border-color 0.15s, box-shadow 0.15s;
        }
        .hc-search::placeholder { color: #AEAEB2; }
        .hc-search:focus {
          border-color: #0071E3;
          box-shadow: 0 0 0 3px rgba(0,113,227,0.12);
        }
        .hc-tab-wrap {
          display: inline-flex;
          gap: 2px;
          background: #E5E5EA;
          border-radius: 10px;
          padding: 3px;
        }
        .hc-tab {
          padding: 6px 18px;
          border-radius: 8px;
          font-size: 13px;
          font-weight: 500;
          border: none;
          cursor: pointer;
          transition: background 0.15s, color 0.15s;
          background: transparent;
          color: #3A3A3C;
          white-space: nowrap;
        }
        .hc-tab.active {
          background: #fff;
          color: #1D1D1F;
          font-weight: 600;
          box-shadow: 0 1px 3px rgba(0,0,0,0.10);
        }
        .hc-badge {
          display: inline-block;
          background: #34C759;
          color: #fff;
          font-size: 10px;
          font-weight: 700;
          line-height: 1;
          padding: 2px 5px;
          border-radius: 20px;
          margin-left: 5px;
          vertical-align: middle;
        }
        .hc-list {
          background: #fff;
          border-radius: 16px;
          overflow: hidden;
          border: 1px solid #E5E5EA;
        }
        .hc-list > * + * {
          border-top: 1px solid #F2F2F7;
        }
        .hc-featured {
          display: flex;
          align-items: center;
          gap: 14px;
          padding: 14px 16px;
          background: #fff;
          transition: background 0.12s;
        }
        .hc-featured:hover { background: #F9F9FB; }
        .hc-rank {
          position: absolute;
          top: -5px;
          left: -5px;
          background: #FF3B30;
          color: #fff;
          font-size: 9px;
          font-weight: 800;
          width: 17px;
          height: 17px;
          border-radius: 5px;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 10;
          letter-spacing: -0.3px;
        }
        .hc-logo {
          width: 56px;
          height: 56px;
          border-radius: 13px;
          overflow: hidden;
          flex-shrink: 0;
          position: relative;
          box-shadow: 0 1px 4px rgba(0,0,0,0.12);
        }
        .hc-app-name {
          font-size: 15px;
          font-weight: 600;
          color: #1D1D1F;
          line-height: 1.25;
        }
        .hc-meta {
          display: flex;
          flex-direction: column;
          gap: 2px;
          margin-top: 4px;
        }
        .hc-meta-row {
          font-size: 11px;
          font-weight: 500;
          display: flex;
          align-items: center;
          gap: 4px;
        }
        .hc-btn {
          flex-shrink: 0;
          display: inline-flex;
          align-items: center;
          gap: 5px;
          background: #0071E3;
          color: #fff;
          font-size: 12px;
          font-weight: 600;
          padding: 7px 14px;
          border-radius: 20px;
          text-decoration: none;
          letter-spacing: -0.1px;
          transition: transform 0.12s, box-shadow 0.12s, background 0.12s;
          white-space: nowrap;
        }
        .hc-btn:hover {
          background: #0077ED;
          box-shadow: 0 4px 12px rgba(0,113,227,0.30);
          transform: scale(1.03);
        }
        .hc-btn:active { transform: scale(0.97); }
        .hc-spinner {
          width: 28px;
          height: 28px;
          border: 3px solid #E5E5EA;
          border-top-color: #0071E3;
          border-radius: 50%;
          animation: hc-spin 0.7s linear infinite;
        }
        @keyframes hc-spin { to { transform: rotate(360deg); } }
        .hc-empty-title { font-size: 17px; font-weight: 600; color: #1D1D1F; }
        .hc-empty-sub { font-size: 14px; color: #6E6E73; margin-top: 4px; }
        .hc-clear-btn {
          margin-top: 14px;
          font-size: 14px;
          color: #0071E3;
          font-weight: 500;
          background: none;
          border: none;
          cursor: pointer;
        }
        .hc-count {
          font-size: 12px;
          color: #6E6E73;
          font-weight: 400;
        }
        .hc-count-accent { color: #0071E3; }
        .hc-section-label {
          font-size: 12px;
          font-weight: 500;
          color: #AEAEB2;
          letter-spacing: 0.3px;
          text-transform: uppercase;
        }
      `}</style>

      <Navbar />
      <Banner />

      <main style={{ flex: 1, maxWidth: 600, margin: "0 auto", width: "100%", padding: "20px 16px 40px" }}>

        {/* Search */}
        <div style={{ position: "relative", marginBottom: 16 }}>
          <svg
            style={{ position: "absolute", left: 12, top: "50%", transform: "translateY(-50%)", pointerEvents: "none" }}
            width="15" height="15" fill="none" stroke="#AEAEB2" strokeWidth="2" viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input
            type="text"
            placeholder="Search apps…"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="hc-search"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              style={{ position: "absolute", right: 12, top: "50%", transform: "translateY(-50%)", background: "#AEAEB2", border: "none", borderRadius: "50%", width: 18, height: 18, display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", padding: 0 }}
            >
              <svg width="9" height="9" fill="none" stroke="#fff" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          )}
        </div>

        {/* Tabs */}
        <div style={{ display: "flex", justifyContent: "center", marginBottom: 20 }}>
          <div className="hc-tab-wrap">
            {CATEGORIES.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`hc-tab${activeTab === tab ? " active" : ""}`}
              >
                {tab}
                {tab === "New Apps" && newGamesCount > 0 && (
                  <span className="hc-badge">{newGamesCount}</span>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Loading */}
        {loading && (
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "80px 0", gap: 14 }}>
            <div className="hc-spinner" />
            <p style={{ fontSize: 13, color: "#AEAEB2" }}>Loading apps…</p>
          </div>
        )}

        {/* Error */}
        {!loading && error && (
          <div style={{ textAlign: "center", padding: "80px 0" }}>
            <div style={{ fontSize: 40, marginBottom: 12 }}>⚠️</div>
            <p className="hc-empty-title">{error}</p>
            <button onClick={() => window.location.reload()} className="hc-clear-btn">Retry</button>
          </div>
        )}

        {/* Content */}
        {!loading && !error && (
          <>
            {/* Count row */}
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 10, padding: "0 2px" }}>
              <p className="hc-count">
                {filteredGames.length === 0
                  ? "No apps"
                  : `${filteredGames.length} app${filteredGames.length !== 1 ? "s" : ""}`}
                {searchQuery && (
                  <span className="hc-count-accent"> for &quot;{searchQuery}&quot;</span>
                )}
              </p>
              <span className="hc-section-label">{activeTab}</span>
            </div>

            {filteredGames.length > 0 ? (
              <div className="hc-list">
                {/* Featured fixed card */}
                {showFixedCard && (
                  <div className="hc-featured">
                    <div className="hc-logo">
                      <div className="hc-rank">1</div>
                      <Image src="/logo.jpeg" alt="All Yono Games" width={56} height={56} style={{ width: "100%", height: "100%", objectFit: "cover" }} unoptimized />
                    </div>

                    <div style={{ flex: 1, minWidth: 0 }}>
                      <p className="hc-app-name">All Yono Game</p>
                      <div className="hc-meta">
                        <span className="hc-meta-row" style={{ color: "#FF3B30" }}>
                          <span>🎁</span> Sign Up Bonus ₹1000
                        </span>
                        <span className="hc-meta-row" style={{ color: "#34C759" }}>
                          <span>🏠</span> Min. Withdrawal ₹100
                        </span>
                      </div>
                    </div>

                    <Link href="/all-yono-games" className="hc-btn">
                      <svg width="11" height="11" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                      </svg>
                      Download
                    </Link>
                  </div>
                )}

                {filteredGames.map((game, idx) => (
                  <AppCard key={game._id} game={game} index={showFixedCard ? idx + 2 : idx + 1} />
                ))}
              </div>
            ) : (
              <div style={{ textAlign: "center", padding: "80px 0" }}>
                <div style={{ fontSize: 40, marginBottom: 12 }}>🔍</div>
                <p className="hc-empty-title">No apps found</p>
                <p className="hc-empty-sub">Try a different search or browse other categories.</p>
                <button
                  onClick={() => { setSearchQuery(""); setActiveTab("All Apps"); }}
                  className="hc-clear-btn"
                >
                  Clear filters
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