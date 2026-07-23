import { Suspense } from "react";
import type { Metadata } from "next";
import HomeClient from "./_home_client";
import Script from "next/script";
import type { Game } from "@/store/slices/gameSlice";
import { SITE_NAME, SITE_URL, API_URL } from "@/config/site";

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
        url: `${SITE_URL}/logo.png`,
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
    images: [`${SITE_URL}/logo.png`],
  },
};

async function getGames(): Promise<Game[]> {
  try {
    let page = 1;
    let games: Game[] = [];

    while (true) {
      const res = await fetch(
        `${API_URL}/get-all-game?page=${page}&limit=100`,
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
        url: `${SITE_URL}/${game.slug}`,
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

      <Suspense fallback={null}>
        <HomeClient
          initialGames={games}
          showFixedCard={true}
        />
      </Suspense>
    </>
  );
}

