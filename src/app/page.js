import Hero from "@/components/Hero";
import MediaTicker from "@/components/MediaTicker";
import PriceTicker from "@/components/PriceTicker";
import CoreStats from "@/components/CoreStats";
import MarketsPlayground from "@/components/MarketsPlayground";
import PowerfulFeatures from "@/components/PowerfulFeatures";

export default function Home() {
  return (
    <>
      <Hero />
      <MediaTicker />
      <PriceTicker />
      <CoreStats />
      <MarketsPlayground />
      <PowerfulFeatures />
    </>
  );
}
