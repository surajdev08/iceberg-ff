"use client";

import { useState } from "react";

const FAQ_ITEMS = [
  {
    q: "What makes ICEBERG different from other trading platforms?",
    a: "ICEBERG offers institutional-grade technology with ultra-low latency execution, advanced risk management, white-label solutions for brokers, and comprehensive API integration. Our platform is built specifically for professional trading environments.",
  },
  {
    q: "How quickly can I implement ICEBERG for my brokerage?",
    a: "A standard deployment, including brand compilations, server configurations across AWS global zones, and standard CRM links can be fully completed in under 7 business days depending on client configuration scopes.",
  },
  {
    q: "What support do you provide during and after implementation?",
    a: "We provide complete 24/7/365 active technical surveillance. You will be assigned a dedicated engineering team, accessible directly via Slack, Telegram, and hot-line channels to handle all server upgrades, bridge queries, or maintenance operations.",
  },
  {
    q: "Is ICEBERG suitable for both forex brokers and prop firms?",
    a: "Yes, absolutely. ICEBERG has native prop firm and white-label broker tools built directly into its core engine. You can enforce step-1/step-2 rules, set daily/total drawdown stopouts, define leverage restrictions, and audit strategy compliance without purchasing external plugins.",
  },
  {
    q: "Can I customize the platform with my company branding?",
    a: "Yes, completely. Our white-label license allows 100% brand personalization, enabling you to deploy custom logos, fonts, active web domains, color palettes, and styled client cabinets without any back-channel restrictions.",
  },
  {
    q: "What are the technical requirements for ICEBERG?",
    a: "ICEBERG is designed as a cloud-native platform. Client interfaces are built on optimized HTML5 frameworks requiring no local installs. Broker nodes operate on secure global AWS container instances matching deep ledger infrastructure limits.",
  },
];

export default function Faq({ items = FAQ_ITEMS, intro }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggle = (idx) => {
    setActiveIndex((curr) => (curr === idx ? -1 : idx));
  };

  return (
    <section className="section faq-section" id="faq">
      <div className="container">
        <div className="section-intro">
          <h2>{intro?.title || "Frequently Asked Questions"}</h2>
          <p>{intro?.subtitle || "Answers to the most frequently asked questions about ICEBERG platform and services."}</p>
        </div>

        <div className="faq-container">
          {items.map((item, idx) => {
            const isOpen = activeIndex === idx;
            return (
              <div
                key={idx}
                className={`faq-item glass-panel frost-border ${isOpen ? "active" : ""}`}
              >
                <button
                  type="button"
                  className="faq-trigger"
                  onClick={() => toggle(idx)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${idx}`}
                >
                  <h3>{item.q}</h3>
                  <span className="faq-icon">
                    <svg viewBox="0 0 24 24">
                      <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
                    </svg>
                  </span>
                </button>
                <div
                  id={`faq-panel-${idx}`}
                  className="faq-content"
                  style={{ maxHeight: isOpen ? "600px" : "0px" }}
                >
                  <div className="faq-content-inner">{item.a}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
