import Hero from "@/components/Hero";
import TerminalPreview from "@/components/TerminalPreview";
import MediaTicker from "@/components/MediaTicker";
import PriceTicker from "@/components/PriceTicker";
import CoreStats from "@/components/CoreStats";
import MarketsPlayground from "@/components/MarketsPlayground";
import PowerfulFeatures from "@/components/PowerfulFeatures";
import SolutionsHome from "@/components/SolutionsHome";
import GetStartedBanner from "@/components/GetStartedBanner";

export default function Home() {
  return (
    <>
      <Hero />
      <TerminalPreview />
      <MediaTicker />
      <PriceTicker />
      <CoreStats />
      <MarketsPlayground />
      <SolutionsHome />
      <PowerfulFeatures />
      <GetStartedBanner />
    </>
  );
}
