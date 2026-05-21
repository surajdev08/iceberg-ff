import About from "@/components/About";
import Faq from "@/components/Faq";

export const metadata = {
  title: "About ICEBERG | Redefining Brokerage Technology for a New Era",
  description:
    "ICEBERG delivers enterprise trading platforms, advanced CRM solutions, and custom-built trading infrastructure for the world's most ambitious brokers and prop firms.",
};

export default function AboutPage() {
  return (
    <>
      <About />
      <Faq />
    </>
  );
}
