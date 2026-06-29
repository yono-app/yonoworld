"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Contact Us", href: "/contact" },
  { label: "Disclaimer", href: "/disclaimer" },
  { label: "Privacy & Policy", href: "/privacy-policy" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <style>{`
        .nb-root {
          background: rgba(255,255,255,0.85);
          backdrop-filter: saturate(180%) blur(20px);
          -webkit-backdrop-filter: saturate(180%) blur(20px);
          border-bottom: 1px solid #E5E5EA;
          position: sticky;
          top: 0;
          z-index: 50;
          font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Text', 'Segoe UI', sans-serif;
          -webkit-font-smoothing: antialiased;
        }
        .nb-inner {
          max-width: 1100px;
          margin: 0 auto;
          padding: 0 16px;
          height: 52px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .nb-brand {
          display: flex;
          align-items: center;
          gap: 10px;
          text-decoration: none;
        }
        .nb-logo {
          width: 32px;
          height: 32px;
          border-radius: 8px;
          overflow: hidden;
          position: relative;
          flex-shrink: 0;
          box-shadow: 0 1px 4px rgba(0,0,0,0.12);
        }
        .nb-brand-text {
          font-size: 15px;
          font-weight: 700;
          color: #1D1D1F;
          letter-spacing: -0.2px;
          line-height: 1;
        }
        .nb-brand-sub {
          font-size: 10px;
          color: #AEAEB2;
          font-weight: 400;
          margin-top: 1px;
        }
        .nb-nav {
          display: flex;
          align-items: center;
          gap: 2px;
        }
        .nb-link {
          padding: 6px 12px;
          font-size: 13px;
          font-weight: 500;
          color: #3A3A3C;
          text-decoration: none;
          border-radius: 8px;
          transition: background 0.12s, color 0.12s;
        }
        .nb-link:hover { background: #F2F2F7; color: #1D1D1F; }
        .nb-hamburger {
          display: none;
          background: none;
          border: none;
          padding: 6px;
          border-radius: 8px;
          cursor: pointer;
          color: #1D1D1F;
          transition: background 0.12s;
        }
        .nb-hamburger:hover { background: #F2F2F7; }
        @media (max-width: 767px) {
          .nb-nav { display: none; }
          .nb-hamburger { display: flex; align-items: center; justify-content: center; }
        }

        /* Drawer */
        .nb-backdrop {
          position: fixed;
          inset: 0;
          background: rgba(0,0,0,0.25);
          z-index: 60;
          transition: opacity 0.2s;
        }
        .nb-drawer {
          position: fixed;
          top: 0;
          right: 0;
          height: 100%;
          width: 260px;
          background: #fff;
          z-index: 70;
          display: flex;
          flex-direction: column;
          box-shadow: -4px 0 30px rgba(0,0,0,0.10);
          transition: transform 0.25s cubic-bezier(.4,0,.2,1);
        }
        .nb-drawer-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 16px 16px 12px;
          border-bottom: 1px solid #F2F2F7;
        }
        .nb-close {
          background: #F2F2F7;
          border: none;
          border-radius: 50%;
          width: 28px;
          height: 28px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          color: #3A3A3C;
          transition: background 0.12s;
        }
        .nb-close:hover { background: #E5E5EA; }
        .nb-drawer-nav {
          display: flex;
          flex-direction: column;
          padding: 12px 10px;
          flex: 1;
        }
        .nb-drawer-link {
          display: flex;
          align-items: center;
          padding: 11px 12px;
          font-size: 15px;
          font-weight: 500;
          color: #1D1D1F;
          text-decoration: none;
          border-radius: 10px;
          transition: background 0.12s;
        }
        .nb-drawer-link:hover { background: #F2F2F7; }
        .nb-drawer-footer {
          padding: 12px 16px 24px;
          border-top: 1px solid #F2F2F7;
        }
        .nb-tg-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 7px;
          width: 100%;
          background: #0071E3;
          color: #fff;
          font-size: 13px;
          font-weight: 600;
          padding: 10px;
          border-radius: 12px;
          text-decoration: none;
          transition: background 0.12s, box-shadow 0.12s;
        }
        .nb-tg-btn:hover {
          background: #0077ED;
          box-shadow: 0 4px 12px rgba(0,113,227,0.28);
        }
      `}</style>

      <header className="nb-root">
        <div className="nb-inner">

          {/* Brand */}
          <Link href="/" className="nb-brand">
            <div className="nb-logo">
              <Image src="/logo.jpeg" alt="Yono World" fill style={{ objectFit: "cover" }} sizes="32px" />
            </div>
            <div>
              <div className="nb-brand-text">Yono World</div>
              <div className="nb-brand-sub">yonoworld.xyz</div>
            </div>
          </Link>

          {/* Desktop links */}
          <nav className="nb-nav">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="nb-link">
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Mobile hamburger */}
          <button
            className="nb-hamburger"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
          >
            <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </header>

      {/* Mobile drawer */}
      <div className="md:hidden">
        {/* Backdrop */}
        <div
          aria-hidden="true"
          onClick={() => setMobileOpen(false)}
          className="nb-backdrop"
          style={{ opacity: mobileOpen ? 1 : 0, pointerEvents: mobileOpen ? "auto" : "none" }}
        />

        {/* Drawer */}
        <div
          className="nb-drawer"
          style={{ transform: mobileOpen ? "translateX(0)" : "translateX(100%)" }}
        >
          {/* Header */}
          <div className="nb-drawer-header">
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <div style={{ width: 28, height: 28, borderRadius: 7, overflow: "hidden", position: "relative", flexShrink: 0, boxShadow: "0 1px 4px rgba(0,0,0,0.1)" }}>
                <Image src="/logo.jpeg" alt="logo" fill style={{ objectFit: "cover" }} sizes="28px" />
              </div>
              <span style={{ fontSize: 14, fontWeight: 600, color: "#1D1D1F" }}>All Yono Games</span>
            </div>
            <button className="nb-close" onClick={() => setMobileOpen(false)} aria-label="Close menu">
              <svg width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Links */}
          <nav className="nb-drawer-nav">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="nb-drawer-link"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Telegram CTA */}
          <div className="nb-drawer-footer">
            <a
              href="https://t.me/+xiZV9WhjGl05OWU9"
              target="_blank"
              rel="noopener noreferrer"
              className="nb-tg-btn"
            >
              <svg width="15" height="15" fill="currentColor" viewBox="0 0 24 24">
                <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12.002 12.002 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
              </svg>
              Join Telegram
            </a>
          </div>
        </div>
      </div>
    </>
  );
}