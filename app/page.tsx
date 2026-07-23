// Server component — exports SEO metadata and renders client component
import type { Metadata } from "next";
import HomeClient from "./_home_client";
import Script from "next/script";


import type { Game } from "@/store/slices/gameSlice";


const SITE_URL =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3000"
    : "https://allyonogamesstore.com";
const SITE_NAME = "Yono Game Store";

export const metadata: Metadata = {
  title: `${SITE_NAME} – All Yono Games Download Link | Yono Games `,
  description:
    "Discover 70+ Yono apps — compare signup bonuses, min withdrawal limits & user ratings. Find the best Yono , Slots & casino apps, updated daily.",
  alternates: { canonical: SITE_URL },
  metadataBase: new URL(SITE_URL),
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: `${SITE_NAME} – Yono Games`,
    description:
      "Browse 50+ Yono apps with bonuses, ratings  — updated daily on All Yono Games.",
    images: [
      {
        url: `${SITE_URL}/logo.jpeg`,
        width: 1200,
        height: 630,
        alt: SITE_NAME
      }
    ],
  },


  twitter: {
    card: "summary_large_image",
    site: SITE_URL,
    title: `${SITE_NAME} – Best Yono Apps 2026`,
    description: "Compare & download the top Yono, Slots & casino apps with the highest signup bonuses.",
    images: [`${SITE_URL}/logo.jpeg`],
  },
};


async function getGames(): Promise<Game[]> {
  try {
    let page = 1;
    let games: Game[] = [];

    while (true) {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/get-all-game?page=${page}&limit=100`,
        {
          next: {
            revalidate: 60,
          },
        }
      );

      if (!res.ok) break;

      const data = await res.json();

      const batch = (data.data || []).filter(Boolean);

      if (batch.length === 0) break;

      games.push(...batch);

      if (batch.length < 100) break;

      page++;
    }

    return games;
  } catch (err) {
    console.error(err);
    return [];
  }
}



export default async function HomePage() {

  const games = await getGames();
  // console.log("Server games:", games.length);

  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "@id": `${SITE_URL}/#itemlist`,

    name: `${SITE_NAME}`,

    description:
      "Collection of Yono earning apps, Rummy apps, Slots and Casino games.",

    itemListOrder: "https://schema.org/ItemListOrderAscending",

    numberOfItems: games.length,

    itemListElement: games.map((game, index) => ({
      "@type": "ListItem",

      position: index + 1,

      item: {
        "@type": "SoftwareApplication",
        name: game.name,
        url: `${SITE_URL}/${game.slug}`, // Adjust to your route
        applicationCategory: "Game",
        operatingSystem: "Android",
      },
    })),
  };

  return (
    <>
      <Script
        id="homepage-itemlist"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(itemListSchema),
        }}
      />

      <HomeClient
        initialGames={games}
        showFixedCard={true}
      />
    </>
  );
}
