import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import { Providers } from "./providers";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const SITE_NAME = "Yono World";
const SITE_URL = "https://yonoworld.xyz";
const SITE_DESCRIPTION =
  "Discover and download 50+ top Yono earning apps — Yono Rummy, Yono 777, Jaiho Games, Slots & more. Compare signup bonuses, withdrawal limits, and ratings on All Yono Games.";

const ALL_KEYWORDS = [
  "All Yono App, All Yono Games, Yono All Games, New Yono App, New Yono Games, All Yono Apps, Yono Rummy, Yono Games, Yono Slots, New Upcoming Yono App, Yono Rummy App, All Best Yono App, Top 10 Rummy Apps, All Rummy App, All Best Rummy Apps, All Yono Appps, All Yono App, Yono All App, Yono 51 Bonus, New Yono Apps, All Yono App List 51 Bonus, All Yono, Yono All, All Yono App List 41 Bonus, Yono List, All Yono App List, Yono All Apk, Yono Apps List, Yono 51 Apk, Yono Bonus 51 Rupees Free, All Yono Games, All Yono Game, Yono All Game, Yono All Games, Yono Game List, Yono 41 Bonus, All Yono Apk, Yono All Apk, Yono Apk All, All Yono App 51 Bonus, All Yono App Link, All Yono Store, Best Yono App, All Yono App List 2024, Top Yono App, Yono App List, Yono Bonus App Download, All App Yono, All Yono Apk, All New Yono App, All Best Yono App, Dragon Vs Tiger, all yono app 2023, all yono app 2024, all rummy game 2024, all Yono game 551 bonus, all yono games 2024, all yono games 551 bonus, all yono games online, new yono app 551 bonus, new yono apps 2023, yono all apk 551 bonus, yono all app 2023, yono all app 2024, yono all app new 2024, yono all games 2023, yono all games 2024, yono slots, yono new app 2024 download, yono new app 51 bonus 2024, teen patti gold 51 bonus, new rummy app 500 bonus, rummy all app 2024, yono all app new 2024, yono all games 2024, all yono games 2024, all yono app 2024, new yono apps 2023, all yono game 2024, teen patti gold 51 bonus, all yono games online, all yono games online, new yono app 551 bonus, yono all app new 2024, yono all app 2024, yono all games 2024, all yono app 2024, all yono games 500 bonus, new yono apps 2024,all yono game 2024, new yono app 500 bonus, all yono games online, yono all app 2024, yono all app new 2024, yono all app 2023, all yono games 550 bonus, new yono app 500 bonus, all rummy app 2024, all yono game 550 bonus, yono download, new yono apps 2023, all yono app 2023, 111 yono 51 bonus, all best yono app, all yono, all yono 51 bonus, all yono app 2024, all yono app link, all yono app list 2024, all yono app list 51 bonus, all yono application, all yono game 2024, all yono game list, all yono games, all yono games 2024, best yono app, go rummy, holy rummy apk, new yono app, new yono app 2023, new rummy app 2023 500 bonus, new yono app 2023 51 bonus, new yono app 2023 list, new rummy app 2024, new yono app 2024 51 bonus download, new yono apps 2023, royally rummy, yono 100 rupees free, yono 41 bonus, yono 51, yono 51 apk, yono 51 bonus, yono all app, yono all app new 2024, yono all apps, yono all games 2023, yono all games 2024, yono apk download, rummy best, rummy best app, rummy bonus, rummy bonus 50 rupees free, rummy download, rummy earning, rummy game, rummy golds,yono list, yono list 2024,All Yono App List, All Yono Apps, All Yono Games, New Yono App Bonus ?51, Rummy 365, En 365, 101z, Spin 101, Ind Bingo, My 777, Bet 213, GoGo Rummy, Bingo 101, 789 Jackpots, Spin Gold, Spin 777, Spin Lucky, Mdm Bet, Ind Slots, Spin Crush, MBM Bet, MKM BET, Slots Winner, Spin Winner, Yono VIP, 567 Slots, Yono Arcade, Yono 777, Yono Slots, Yono Games, Yono apps, Yono app list, Best Yono apps, rummy list, rummy list 2023, rummy mars, rummy master, rummy modern apk, rummy nabob, rummy new app 2024 download, rummy new app 51 bonus 2024, rummy wealth, rummy wealth 555, rummy win, teen patti 51 bonus, top 20 yono 51 bonus, top yono, top yono app, All Rummy Application, All Rummy App, Rummy All App, Rummy 51 Bonus, New Rummy Apps, All Rummy App List 51 Bonus, All Rummy, Rummy All, All Rummy App List 41 Bonus, Rummy List, All Rummy App List, Rummy All Apk, Rummy Apps List, Rummy 51 Apk, Rummy Bonus 51 Rupees Free, All Rummy Games, All Rummy Game, Rummy All Game, Rummy All Games, Rummy Game List, Rummy 41 Bonus, All Rummy Apk, Rummy All Apk, Rummy Apk All, All Rummy App 51 Bonus, All Rummy App Link, All Rummy Store, Best Rummy App, All Rummy App List 2024, Top Rummy App, Rummy App List, Rummy Bonus App Download, All App Rummy, All Rummy Apk, All New Rummy App, All Best Rummy App, Dragon Vs Tiger, all rummy app 2023, all rummy app 2024, all rummy game 2024, all rummy game 500 bonus, all rummy games 2024, all rummy games 500 bonus, all rummy games online, new rummy app 151 bonus, new rummy apps 2023, rummy all apk 151 bonus,rummy all app 2024, rummy all app new 2024, rummy all games 2023, rummy all games 2024, rummy gold, rummy new app 2024 download, rummy new app 51 bonus 2024, teen patti gold 51 bonus, new rummy app 151 bonus, rummy all app 2024, rummy all app new 2024, rummy all games 2024, all rummy games 2024, all rummy app 2024, new rummy apps 2023, all rummy game 2024, teen patti gold 51 bonus, all rummy games online, all rummy games online, new rummy app 500 bonus, rummy all app new 2024, rummy all app 2024, rummy all games 2024, all rummy app 2024, all rummy games 551 bonus, new rummy apps 2023,all rummy game 2024, new rummy app 500 bonus, all rummy games online, rummy all app 2024, rummy all app new 2024, rummy all app 2023, all rummy games 500 bonus, new rummy app 151 bonus, all rummy app 2024, all rummy game 500 bonus, rummy download, new rummy apps 2023, all rummy app 2023, 111 rummy 51 bonus, all best rummy app, all rummy, all rummy 51 bonus, all rummy app 2024, all rummy app link, all rummy app list 2024, all rummy app list 51 bonus, all rummy application, all rummy game 2024, rummy apk, new rummy app, new rummy app 2023, new rummy app 2023 500 bonus, new rummy app 2023 51 bonus, new rummy app 2024, new rummy app 2024 51 bonus download, new rummy apps 2023, royally rummy, rummy 100 rupees free, rummy 41 bonus, rummy 51, rummy 51 apk, rummy 51 bonus,rummy new app 2024 download, rummy new app 51 bonus 2024, rummy wealth, rummy wealth 555, rummy win, teen patti 51 bonus, top 20 rummy 51 bonus, top rummy, top rummy app"
].join(", ");

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} – Download All Yono Rummy, Slots & Earning Apps`,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  keywords: ALL_KEYWORDS,
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: `${SITE_NAME} – Download All Yono Games`,
    description: SITE_DESCRIPTION,
    images: [
      {
        url: `${SITE_URL}/og-image.png`,
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
    images: [`${SITE_URL}/og-image.png`],
  },
  alternates: {
    canonical: SITE_URL,
  },
};

// Organisation JSON-LD schema
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE_NAME,
  url: SITE_URL,
  logo: `${SITE_URL}/logo.jpeg`,
  sameAs: ["https://t.me/+xiZV9WhjGl05OWU9"],
  contactPoint: {
    "@type": "ContactPoint",
    email: "support@AllYonoGames.com",
    contactType: "customer support",
  },
};

// Website JSON-LD with sitelinks searchbox
const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: SITE_NAME,
  url: SITE_URL,
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${SITE_URL}/?q={search_term_string}`,
    },
    "query-input": "required name=search_term_string",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <head>
        {/* Do NOT place a hardcoded canonical here — Next.js injects per-page
            canonical from each page's `alternates.canonical` metadata export.
            A hardcoded canonical here would override every game page to point
            to the homepage, causing GSC "Alternate page with proper canonical"
            errors across the entire site. */}
        <meta name="geo.region" content="IN" />
        <meta name="geo.placename" content="India" />
        <meta name="language" content="English" />
        <Script
          id="org-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <Script
          id="website-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-slate-50"><Providers>{children}</Providers></body>
    </html>
  );
}
