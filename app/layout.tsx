import type { Metadata, Viewport } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import { Providers } from "./providers";
import { TELEGRAM_URL, SITE_NAME, SITE_URL, SITE_DESCRIPTION, SUPPORT_EMAIL } from "@/config/site";
import { PwaRegister } from "./components/PwaRegister";
import { GoogleAnalytics } from "@next/third-parties/google";


const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

export const viewport: Viewport = {
  themeColor: "#0B0B0F",
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  manifest: "/site.webmanifest",
  appleWebApp: {
    capable: true,
    title: SITE_NAME,
    statusBarStyle: "black-translucent",
  },

  title: {
    default: `${SITE_NAME} – Download All Yono Rummy, Slots & Earning Apps`,
    template: `%s | ${SITE_NAME}`,
  },

  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,

  authors: [
    {
      name: SITE_NAME,
      url: SITE_URL,
    },
  ],

  creator: SITE_NAME,
  publisher: SITE_NAME,

  alternates: { canonical: SITE_URL },

  robots: {
    index: true,
    follow: true,
    nocache: false,

    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  icons: {
    icon: [
      {
        url: "/favicon.ico",
      },
    ],
  },

  openGraph: {
    type: "website",
    locale: "en_IN",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: "All Yono Apps, Rummy Games & Slots Download | Yono World",

    description: SITE_DESCRIPTION,
    images: [
      {
        url: `${SITE_URL}/logo.png`,
        width: 1200,
        height: 630,
        alt: `${SITE_NAME} – All Yono Games Download`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} – Download All Yono Games`,
    description: SITE_DESCRIPTION,
    images: [`${SITE_URL}/logo.png`],
  },
};

// ===========================
// Organization Schema
// ===========================

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",

  "@id": `${SITE_URL}/#organization`,

  name: SITE_NAME,

  url: SITE_URL,

  description: SITE_DESCRIPTION,

  logo: {
    "@type": "ImageObject",
    "@id": `${SITE_URL}/#logo`,

    url: `${SITE_URL}/logo.png`,
  },

  email: SUPPORT_EMAIL,

  sameAs: [TELEGRAM_URL],
};

// ===========================
// Website Schema
// ===========================
const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,

  name: SITE_NAME,
  url: SITE_URL,
  description: SITE_DESCRIPTION,

  inLanguage: "en-IN",

  publisher: {
    "@id": `${SITE_URL}/#organization`,
  },

  alternateName: [
    "YonoWorld",
    "Yono World",
    "Yono Games",
    "Yono Apps",
    "All Yono Apps Store",
    "All Yono Games",
  ],

  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${SITE_URL}/?q={search_term_string}`,
    },
    "query-input": "required name=search_term_string",
  },
};

// ===========================
// Homepage WebPage Schema
// ===========================

const webPageSchema = {
  "@context": "https://schema.org",

  "@type": "WebPage",

  "@id": `${SITE_URL}/#webpage`,

  url: SITE_URL,

  name: "All Yono Apps, Rummy Games & Slots Download | Yono World",

  description: SITE_DESCRIPTION,

  isPartOf: {
    "@id": `${SITE_URL}/#website`,
  },

  about: {
    "@id": `${SITE_URL}/#organization`,
  },

  primaryImageOfPage: {
    "@type": "ImageObject",

    url: `${SITE_URL}/logo.png`,
  },

  inLanguage: "en-IN",
};

// ===========================
// Homepage CollectionPage
// ===========================

const collectionPageSchema = {
  "@context": "https://schema.org",

  "@type": "CollectionPage",

  "@id": `${SITE_URL}/#collection`,

  url: SITE_URL,

  name: "All Yono Apps",

  description: SITE_DESCRIPTION,

  isPartOf: {
    "@id": `${SITE_URL}/#website`,
  },

  about: {
    "@id": `${SITE_URL}/#organization`,
  },

  inLanguage: "en-IN",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en-IN"
      className={`${outfit.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        {/* Organization Schema */}
        <Script
          id="organization-schema"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />

        {/* Website Schema */}
        <Script
          id="website-schema"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />

        {/* WebPage Schema */}
        <Script
          id="webpage-schema"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(webPageSchema),
          }}
        />

        {/* CollectionPage Schema */}
        <Script
          id="collection-schema"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(collectionPageSchema),
          }}
        />
      </head>

      <body className="min-h-screen flex flex-col bg-[#0B0B0F] text-slate-100 selection:bg-purple-600 selection:text-white" suppressHydrationWarning>
        <GoogleAnalytics gaId="G-6JDN21RQ9Q" />
        <Providers>
          {children}
          <PwaRegister />
        </Providers>
      </body>
    </html>
  );
}
