"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { TELEGRAM_URL, SITE_NAME } from "@/config/site";

const topNavLinks = [
  { label: "Disclaimer", href: "/disclaimer" },
  { label: "Blog", href: "/blog" },
  { label: "All Yono Games", href: "/all-yono-games" },
  { label: "All Yono Store APK", href: "/apk" },
];

const secondMenuLinks = [
  {
    label: "Home",
    href: "/",
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
  },
  {
    label: "About",
    href: "/about",
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
  },
  {
    label: "Contact",
    href: "/contact",
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
  },
  {
    label: "Policy",
    href: "/privacy-policy",
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    label: "T&C",
    href: "/disclaimer",
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },

  {
    label: "Developer",
    href: "https://dinestx.com",
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const [spacerHeight, setSpacerHeight] = useState<number>(0);
  const maxRef = useRef<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    if (containerRef.current) {
      const updateHeight = () => {
        if (!containerRef.current) return;
        const height = containerRef.current.getBoundingClientRect().height;
        if (height > maxRef.current) {
          maxRef.current = height;
          setSpacerHeight(height);
        }
      };

      updateHeight();

      const resizeObserver = new ResizeObserver(() => {
        if (!containerRef.current) return;
        const height = containerRef.current.getBoundingClientRect().height;

        // If window.scrollY is 0, we can reset maxRef.current to allow shrinking (e.g. from desktop to mobile resize)
        if (window.scrollY === 0) {
          maxRef.current = height;
          setSpacerHeight(height);
        } else if (height > maxRef.current) {
          maxRef.current = height;
          setSpacerHeight(height);
        }
      });

      resizeObserver.observe(containerRef.current);

      return () => {
        window.removeEventListener("scroll", handleScroll);
        resizeObserver.disconnect();
      };
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {/* ── Fixed Wrapper Container ── */}
      <div
        ref={containerRef}
        className="fixed top-0 left-0 right-0 z-50 flex flex-col pointer-events-auto"
      >
        {/* ── Top Announcement Bar ── */}
        <div className={`bg-gradient-to-r from-violet-950 via-purple-900 to-indigo-950 text-white text-xs sm:text-sm font-medium text-center flex items-center justify-center gap-2 relative transition-all duration-300 ${scrolled
          ? "max-h-0 opacity-0 py-0 border-b-0 overflow-hidden"
          : "max-h-12 opacity-100 py-2 border-b border-white/10"
          }`}>
          <span className="relative flex h-2 w-2 shrink-0">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="text-purple-200">🎁 SIGN-UP &amp; CLAIM UP TO ₹1500 REWARDS!</span>
          <a
            href={TELEGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="underline font-bold text-amber-300 hover:text-amber-200 transition-colors"
          >
            Join Telegram
          </a>
        </div>

        {/* ── Main Glass Header ── */}
        <header className={`w-full transition-all duration-300 ${scrolled
          ? "bg-[#0F101A]/95 backdrop-blur-2xl border-b border-violet-500/20 shadow-lg shadow-violet-950/20"
          : "bg-[#0F101A]/90 backdrop-blur-xl border-b border-white/10 shadow-2xl"
          }`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className={`flex items-center justify-between transition-all duration-300 ${scrolled ? "h-14 sm:h-16" : "h-16 sm:h-20"
              }`}>
              {/* Logo + Brand Name */}
              <Link href="/" className="flex items-center gap-3 group">
                <div className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-2xl overflow-hidden ring-2 ring-violet-500/50 group-hover:ring-violet-400 transition-all duration-300 shadow-lg shadow-violet-500/20">
                  <Image
                    src="/logo.png"
                    alt="All Yono Games Logo"
                    fill
                    className="object-cover"
                    sizes="44px"
                  />
                </div>
                <div className="flex flex-col leading-tight">
                  <div className="flex items-center gap-1.5">
                    <span className="text-white font-extrabold text-base sm:text-lg tracking-tight group-hover:text-violet-300 transition-colors">
                      {SITE_NAME}
                    </span>
                    <span className="bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-[9px] font-black px-1.5 py-0.5 rounded uppercase">
                      Verified
                    </span>
                  </div>
                  <span className="text-slate-400 text-[10px] sm:text-xs font-medium">
                    ⭐ Official Rummy &amp; Slots Directory 2026
                  </span>
                </div>
              </Link>

              {/* Desktop Top Links */}
              <nav className="hidden lg:flex items-center gap-1 bg-white/5 border border-white/10 p-1.5 rounded-2xl backdrop-blur-md">
                {topNavLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="px-3.5 py-1.5 text-slate-300 hover:text-white font-medium text-xs xl:text-sm rounded-xl hover:bg-violet-600/30 hover:border-violet-500/30 transition-all duration-200 whitespace-nowrap"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>

              {/* CTA Download APK */}
              <div className="flex items-center gap-3">
                <Link
                  href="/apk"
                  className="hidden sm:flex items-center gap-2 bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white font-bold text-xs sm:text-sm px-4 py-2.5 rounded-xl shadow-lg shadow-violet-600/25 active:scale-95 transition-all duration-200 border border-violet-400/30 shrink-0"
                >
                  <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                  <span>Download App Hub</span>
                </Link>

                {/* Mobile Hamburger Button */}
                <button
                  className="lg:hidden text-slate-300 hover:text-white p-2 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition"
                  onClick={() => setMobileOpen(true)}
                  aria-label="Open Menu"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* ── Desktop Secondary Menu Bar ── */}
          <div className="hidden md:block bg-[#0B0C14]/80 border-t border-white/5 shadow-inner">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex items-center justify-center gap-2 py-2">
                {secondMenuLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="flex items-center gap-2 px-4 py-1.5 text-slate-400 hover:text-violet-300 font-semibold text-xs rounded-xl hover:bg-white/5 transition-all duration-200 whitespace-nowrap"
                  >
                    <span className="text-violet-400">{link.icon}</span>
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </header>
      </div>

      {/* Spacer to prevent layout overlap */}
      <div
        className="h-[100px] md:h-[140px] lg:h-[157px] shrink-0 pointer-events-none"
        style={spacerHeight ? { height: `${spacerHeight}px` } : undefined}
      />

      {/* ── Mobile Drawer Overlay ── */}
      <div className="lg:hidden">
        {/* Backdrop */}
        <div
          aria-hidden="true"
          onClick={() => setMobileOpen(false)}
          className="fixed inset-0 bg-black/80 backdrop-blur-md z-[60] transition-opacity duration-300"
          style={{ opacity: mobileOpen ? 1 : 0, pointerEvents: mobileOpen ? "auto" : "none" }}
        />

        {/* Drawer panel */}
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Navigation Menu"
          className="fixed top-0 right-0 h-full w-80 bg-[#0F101A] border-l border-white/10 z-[70] shadow-2xl flex flex-col transition-transform duration-300 ease-in-out"
          style={{ transform: mobileOpen ? "translateX(0)" : "translateX(100%)" }}
        >
          {/* Drawer Header */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-white/10 bg-white/5">
            <div className="flex items-center gap-3">
              <div className="relative w-9 h-9 rounded-xl overflow-hidden shrink-0 border border-violet-500/40">
                <Image src="/logo.png" alt="logo" fill className="object-cover" sizes="36px" />
              </div>
              <div className="flex flex-col">
                <span className="text-white font-bold text-sm">{SITE_NAME}</span>
                <span className="text-violet-400 text-[10px] font-semibold">Store &amp; Directory</span>
              </div>
            </div>
            <button
              onClick={() => setMobileOpen(false)}
              aria-label="Close Menu"
              className="text-slate-400 hover:text-white p-2 rounded-xl bg-white/5 border border-white/10 transition"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Drawer Links */}
          <nav className="flex flex-col gap-1.5 px-4 py-6 flex-1 overflow-y-auto">
            <div className="text-[10px] font-black text-slate-500 uppercase tracking-widest px-3 mb-1">
              Navigation
            </div>
            {secondMenuLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="flex items-center gap-3.5 px-4 py-3 text-slate-300 hover:text-white font-medium text-sm rounded-xl hover:bg-violet-600/20 hover:border-violet-500/30 border border-transparent transition-all duration-200"
              >
                <span className="text-violet-400">{link.icon}</span>
                {link.label}
              </Link>
            ))}

            <div className="text-[10px] font-black text-slate-500 uppercase tracking-widest px-3 mt-4 mb-1">
              Directory &amp; Resources
            </div>
            {topNavLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="flex items-center gap-3.5 px-4 py-2.5 text-slate-400 hover:text-slate-200 font-medium text-sm rounded-xl hover:bg-white/5 transition-all duration-200"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-violet-500 shrink-0" />
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Drawer Actions Footer */}
          <div className="p-5 border-t border-white/10 bg-white/5 space-y-2.5">
            <a
              href={TELEGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white text-xs font-bold py-3 rounded-xl shadow-lg transition-all duration-200"
            >
              <svg className="w-4 h-4 shrink-0" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12.002 12.002 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
              </svg>
              Join Telegram Community
            </a>
            <Link
              href="/apk"
              className="flex items-center justify-center gap-2 w-full bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-500 hover:to-purple-500 text-white text-xs font-bold py-3 rounded-xl transition-all duration-200 border border-violet-400/30"
            >
              <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              <span>Download Official Hub APK</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
