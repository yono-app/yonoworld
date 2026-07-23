/**
 * Global Site Configuration & Constants
 * Central source of truth for all URLs, site names, API endpoints, and metadata across the application.
 * Updating environment variables or defaults here updates the entire website globally.
 */

export const TELEGRAM_URL = process.env.NEXT_PUBLIC_TELEGRAM_URL || "https://t.me/+g_IUbfdZckxmMjJl";

export const SITE_NAME = process.env.NEXT_PUBLIC_SITE_NAME || "All Yono Games Store";

export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || (process.env.NODE_ENV === "production"
  ? "http://localhost:3000"
  : "https://allyonogamesstore.com");

export const API_URL = process.env.NEXT_PUBLIC_API_URL || "https://api.allyonogamesstore.com/api";

export const SUPPORT_EMAIL = process.env.NEXT_PUBLIC_SUPPORT_EMAIL

export const SITE_DESCRIPTION = "Discover and download 50+ top Yono earning apps — Yono Rummy, Yono 777, Jaiho Games, Slots & more. Compare signup bonuses, withdrawal limits, and ratings on All Yono Games.";

export const CURRENT_YEAR = new Date().getFullYear();

/**
 * Helper to safely extract hostname (e.g. "allyonogamesstore.com") from SITE_URL for UI display
 */
export const SITE_HOST = SITE_URL.replace(/^https?:\/\//, "").replace(/\/$/, "");
