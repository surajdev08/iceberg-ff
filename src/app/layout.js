import Script from "next/script";
import "./globals.css";
import "../../public/assets/css/styles.css";

import BackgroundGlow from "@/components/BackgroundGlow";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "ICEBERG | Next-Gen Multi-Asset Trading Platform & CRM Solutions",
  description:
    "ICEBERG delivers next-generation institutional trading platform technology. Sub-millisecond execution, deep aggregated liquidity pools, and fully branded white-label solutions for forex brokers and prop firms.",
  keywords: [
    "trading platform",
    "white label broker",
    "forex crm",
    "prop firm technology",
    "multi-asset liquidity",
    "institutional trading engine",
  ],
  authors: [{ name: "ICEBERG HQ" }],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <BackgroundGlow />
        <Header />
        <main>{children}</main>
        <Footer />
        <Script src="/assets/js/app.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
