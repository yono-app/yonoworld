import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Prevent /game-name/ trailing-slash duplicates from being indexed separately
  trailingSlash: false,

  // 301-redirect non-www to www at the framework level.
  // Note: for production, also configure this at your CDN/host (Vercel, Cloudflare, Nginx)
  // so the redirect fires before Next.js even boots.
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "yonoworld.xyz" }],
        destination: "https://www.yonoworld.xyz/:path*",
        permanent: true, // 301
      },
    ];
  },

  // Tells Next.js to mask /sitemap_index.xml and serve the app's auto-generated sitemap instead
  async rewrites() {
    return [
      {
        source: "/sitemap_index.xml",
        destination: "/sitemap.xml",
      },
    ];
  },

  async headers() {
    return [
      // Public pages
      {
        source: "/:path*",
        headers: [
          {
            key: "X-Robots-Tag",
            value: "index, follow",
          },
        ],
      },

      // Don't index API routes
      {
        source: "/api/:path*",
        headers: [
          {
            key: "X-Robots-Tag",
            value: "noindex, nofollow",
          },
        ],
      },
    ];
  },


  allowedDevOrigins: ["www.yonoworld.xyz", "yonoworld.xyz"],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ui-avatars.com",
        pathname: "/api/**",
      },
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
