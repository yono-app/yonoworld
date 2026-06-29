// Server component — exports SEO metadata and renders client component
import type { Metadata } from "next";
import HomeClient from "./_home_client";

const SITE_URL = "https://www.yonoworld.xyz";
const SITE_NAME = "All Yono Games";

const allKeywords = [
  "All Yono App, All Yono Games, Yono All Games, New Yono App, New Yono Games, All Yono Apps, Yono Rummy, Yono Games, Yono Slots, New Upcoming Yono App, Yono Rummy App, All Best Yono App, Top 10 Rummy Apps, All Rummy App, All Best Rummy Apps, All Yono Appps, All Yono App, Yono All App, Yono 51 Bonus, New Yono Apps, All Yono App List 51 Bonus, All Yono, Yono All, All Yono App List 41 Bonus, Yono List, All Yono App List, Yono All Apk, Yono Apps List, Yono 51 Apk, Yono Bonus 51 Rupees Free, All Yono Games, All Yono Game, Yono All Game, Yono All Games, Yono Game List, Yono 41 Bonus, All Yono Apk, Yono All Apk, Yono Apk All, All Yono App 51 Bonus, All Yono App Link, All Yono Store, Best Yono App, All Yono App List 2026, Top Yono App, Yono App List, Yono Bonus App Download, All App Yono, All Yono Apk, All New Yono App, All Best Yono App, Dragon Vs Tiger, all yono app 2026, all yono app 2026, all rummy game 2026, all Yono game 551 bonus, all yono games 2026, all yono games 551 bonus, all yono games online, new yono app 551 bonus, new yono apps 2026, yono all apk 551 bonus, yono all app 2026, yono all app 2026, yono all app new 2026, yono all games 2026, yono all games 2026, yono slots, yono new app 2026 download, yono new app 51 bonus 2026, teen patti gold 51 bonus, new rummy app 500 bonus, rummy all app 2026, yono all app new 2026, yono all games 2026, all yono games 2026, all yono app 2026, new yono apps 2026, all yono game 2026, teen patti gold 51 bonus, all yono games online, all yono games online, new yono app 551 bonus, yono all app new 2026, yono all app 2026, yono all games 2026, all yono app 2026, all yono games 500 bonus, new yono apps 2026,all yono game 2026, new yono app 500 bonus, all yono games online, yono all app 2026, yono all app new 2026, yono all app 2026, all yono games 550 bonus, new yono app 500 bonus, all rummy app 2026, all yono game 550 bonus, yono download, new yono apps 2026, all yono app 2026, 111 yono 51 bonus, all best yono app, all yono, all yono 51 bonus, all yono app 2026, all yono app link, all yono app list 2026, all yono app list 51 bonus, all yono application, all yono game 2026, all yono game list, all yono games, all yono games 2026, best yono app, go rummy, holy rummy apk, new yono app, new yono app 2026, new rummy app 2026 500 bonus, new yono app 2026 51 bonus, new yono app 2026 list, new rummy app 2026, new yono app 2026 51 bonus download, new yono apps 2026, royally rummy, yono 100 rupees free, yono 41 bonus, yono 51, yono 51 apk, yono 51 bonus, yono all app, yono all app new 2026, yono all apps, yono all games 2026, yono all games 2026, yono apk download, rummy best, rummy best app, rummy bonus, rummy bonus 50 rupees free, rummy download, rummy earning, rummy game, rummy golds,yono list, yono list 2026,All Yono App List, All Yono Apps, All Yono Games, New Yono App Bonus ?51, Rummy 365, En 365, 101z, Spin 101, Ind Bingo, My 777, Bet 213, GoGo Rummy, Bingo 101, 789 Jackpots, Spin Gold, Spin 777, Spin Lucky, Mdm Bet, Ind Slots, Spin Crush, MBM Bet, MKM BET, Slots Winner, Spin Winner, Yono VIP, 567 Slots, Yono Arcade, Yono 777, Yono Slots, Yono Games, Yono apps, Yono app list, Best Yono apps, rummy list, rummy list 2026, rummy mars, rummy master, rummy modern apk, rummy nabob, rummy new app 2026 download, rummy new app 51 bonus 2026, rummy wealth, rummy wealth 555, rummy win, teen patti 51 bonus, top 20 yono 51 bonus, top yono, top yono app, All Rummy Application, All Rummy App, Rummy All App, Rummy 51 Bonus, New Rummy Apps, All Rummy App List 51 Bonus, All Rummy, Rummy All, All Rummy App List 41 Bonus, Rummy List, All Rummy App List, Rummy All Apk, Rummy Apps List, Rummy 51 Apk, Rummy Bonus 51 Rupees Free, All Rummy Games, All Rummy Game, Rummy All Game, Rummy All Games, Rummy Game List, Rummy 41 Bonus, All Rummy Apk, Rummy All Apk, Rummy Apk All, All Rummy App 51 Bonus, All Rummy App Link, All Rummy Store, Best Rummy App, All Rummy App List 2026, Top Rummy App, Rummy App List, Rummy Bonus App Download, All App Rummy, All Rummy Apk, All New Rummy App, All Best Rummy App, Dragon Vs Tiger, all rummy app 2026, all rummy app 2026, all rummy game 2026, all rummy game 500 bonus, all rummy games 2026, all rummy games 500 bonus, all rummy games online, new rummy app 151 bonus, new rummy apps 2026, rummy all apk 151 bonus, rummy all app 2026, rummy all app new 2026, rummy all games 2026, rummy all games 2026, rummy gold, rummy new app 2026 download, rummy new app 51 bonus 2026, teen patti gold 51 bonus, new rummy app 151 bonus, rummy all app 2026, rummy all app new 2026, rummy all games 2026, all rummy games 2026, all rummy app 2026, new rummy apps 2026, all rummy game 2026, teen patti gold 51 bonus, all rummy games online, all rummy games online, new rummy app 500 bonus, rummy all app new 2026, rummy all app 2026, rummy all games 2026, all rummy app 2026, all rummy games 551 bonus, new rummy apps 2026,all rummy game 2026, new rummy app 500 bonus, all rummy games online, rummy all app 2026, rummy all app new 2026, rummy all app 2026, all rummy games 500 bonus, new rummy app 151 bonus, all rummy app 2026, all rummy game 500 bonus, rummy download, new rummy apps 2026, all rummy app 2026, 111 rummy 51 bonus, all best rummy app, all rummy, all rummy 51 bonus, all rummy app 2026, all rummy app link, all rummy app list 2026, all rummy app list 51 bonus, all rummy application, all rummy game 2026, rummy apk, new rummy app, new rummy app 2026, new rummy app 2026 500 bonus, new rummy app 2026 51 bonus, new rummy app 2026, new rummy app 2026 51 bonus download, new rummy apps 2026, royally rummy, rummy 100 rupees free, rummy 41 bonus, rummy 51, rummy 51 apk, rummy 51 bonus,rummy new app 2026 download, rummy new app 51 bonus 2026, rummy wealth, rummy wealth 555, rummy win, teen patti 51 bonus, top 20 rummy 51 bonus, top rummy, top rummy app"
].join(", ");

export const metadata: Metadata = {
  title: `${SITE_NAME} – Download Yono`,
  description:
    "Discover 50+ Yono apps — compare signup bonuses, min withdrawal limits & user ratings. Find the best Yono , Slots & casino apps, updated daily.",
  keywords: allKeywords,
  alternates: { canonical: SITE_URL },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: `${SITE_NAME} – Yono Games`,
    description:
      "Browse 50+ Yono apps with bonuses, ratings  — updated daily on All Yono Games.",
    images: [{ url: `${SITE_URL}/og-image.png`, width: 1200, height: 630, alt: SITE_NAME }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} – Best Yono Apps 2026`,
    description: "Compare & download the top Yono, Slots & casino apps with the highest signup bonuses.",
    images: [`${SITE_URL}/og-image.png`],
  },
};

export default function HomePage() {
  return <HomeClient showFixedCard={true} />;
}
