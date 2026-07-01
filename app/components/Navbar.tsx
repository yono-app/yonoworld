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
          background: rgba(255, 255, 255, 0.75);
          backdrop-filter: blur(24px) saturate(190%);
          -webkit-backdrop-filter: blur(24px) saturate(190%);
          border-bottom: 1px solid rgba(229, 229, 234, 0.4);
          position: sticky;
          top: 0;
          z-index: 50;
          box-shadow: 0 4px 30px rgba(0, 0, 0, 0.02);
        }
        .nb-inner {
          max-width: 1100px;
          margin: 0 auto;
          padding: 0 20px;
          height: 56px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .nb-brand {
          display: flex;
          align-items: center;
          gap: 10px;
          text-decoration: none;
          transition: transform 0.2s ease;
        }
        .nb-brand:hover {
          transform: translateY(-0.5px);
        }
        .nb-logo {
          width: 34px;
          height: 34px;
          border-radius: 9px;
          overflow: hidden;
          position: relative;
          flex-shrink: 0;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
          border: 1px solid rgba(0, 0, 0, 0.05);
        }
        .nb-brand-text {
          font-size: 15px;
          font-weight: 800;
          color: #0f172a;
          letter-spacing: -0.3px;
          line-height: 1;
        }
        .nb-brand-sub {
          font-size: 9.5px;
          color: #64748b;
          font-weight: 500;
          margin-top: 2.5px;
        }
        .nb-nav {
          display: flex;
          align-items: center;
          gap: 4px;
        }
        .nb-link {
          padding: 7px 14px;
          font-size: 13px;
          font-weight: 600;
          color: #475569;
          text-decoration: none;
          border-radius: 10px;
          transition: all 0.2s ease;
        }
        .nb-link:hover {
          background: rgba(15, 23, 42, 0.04);
          color: #0f172a;
        }
        .nb-hamburger {
          display: none;
          background: none;
          border: none;
          padding: 8px;
          border-radius: 10px;
          cursor: pointer;
          color: #0f172a;
          transition: background 0.2s ease;
        }
        .nb-hamburger:hover {
          background: rgba(15, 23, 42, 0.04);
        }
        @media (max-width: 767px) {
          .nb-nav { display: none; }
          .nb-hamburger { display: flex; align-items: center; justify-content: center; }
        }

        /* Drawer */
        .nb-backdrop {
          position: fixed;
          inset: 0;
          background: rgba(15, 23, 42, 0.3);
          backdrop-filter: blur(4px);
          -webkit-backdrop-filter: blur(4px);
          z-index: 60;
          transition: opacity 0.25s ease;
        }
        .nb-drawer {
          position: fixed;
          top: 0;
          right: 0;
          height: 100%;
          width: 270px;
          background: rgba(255, 255, 255, 0.85);
          backdrop-filter: blur(24px) saturate(180%);
          -webkit-backdrop-filter: blur(24px) saturate(180%);
          z-index: 70;
          display: flex;
          flex-direction: column;
          box-shadow: -10px 0 40px rgba(15, 23, 42, 0.08);
          border-left: 1px solid rgba(229, 229, 234, 0.5);
          transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .nb-drawer-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 18px 18px 14px;
          border-bottom: 1px solid rgba(229, 229, 234, 0.5);
        }
        .nb-close {
          background: rgba(15, 23, 42, 0.04);
          border: none;
          border-radius: 50%;
          width: 30px;
          height: 30px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          color: #475569;
          transition: background 0.15s ease, transform 0.15s ease;
        }
        .nb-close:hover {
          background: rgba(15, 23, 42, 0.08);
          transform: scale(1.05);
        }
        .nb-drawer-nav {
          display: flex;
          flex-direction: column;
          padding: 16px 12px;
          flex: 1;
          gap: 4px;
        }
        .nb-drawer-link {
          display: flex;
          align-items: center;
          padding: 12px 14px;
          font-size: 14px;
          font-weight: 600;
          color: #334155;
          text-decoration: none;
          border-radius: 12px;
          transition: background 0.15s ease, color 0.15s ease;
        }
        .nb-drawer-link:hover {
          background: rgba(15, 23, 42, 0.04);
          color: #0f172a;
        }
        .nb-drawer-footer {
          padding: 16px 18px 30px;
          border-top: 1px solid rgba(229, 229, 234, 0.5);
        }
        .nb-tg-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          width: 100%;
          background: linear-gradient(135deg, #0071e3, #005bb5);
          color: #fff;
          font-size: 13px;
          font-weight: 700;
          padding: 11px;
          border-radius: 12px;
          text-decoration: none;
          box-shadow: 0 4px 14px rgba(0, 113, 227, 0.2);
          transition: transform 0.15s ease, box-shadow 0.15s ease;
        }
        .nb-tg-btn:hover {
          transform: scale(1.02);
          box-shadow: 0 6px 18px rgba(0, 113, 227, 0.28);
        }
        .nb-tg-btn:active {
          transform: scale(0.98);
        }
      `}</style>

      <header className="nb-root">
        <div className="nb-inner">

          {/* Brand */}
          <Link href="/" className="nb-brand">
            <div className="nb-logo">
              <Image src="/logo.jpeg" alt="Yono World" fill style={{ objectFit: "cover" }} sizes="34px" />
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
            <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
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
              <div style={{ width: 30, height: 30, borderRadius: 8, overflow: "hidden", position: "relative", flexShrink: 0, boxShadow: "0 2px 8px rgba(0,0,0,0.06)", border: "1px solid rgba(0, 0, 0, 0.05)" }}>
                <Image src="/logo.jpeg" alt="logo" fill style={{ objectFit: "cover" }} sizes="30px" />
              </div>
              <span style={{ fontSize: 14, fontWeight: 800, color: "#0f172a" }}>All Yono Games</span>
            </div>
            <button className="nb-close" onClick={() => setMobileOpen(false)} aria-label="Close menu">
              <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
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
              <span>Join Telegram</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}