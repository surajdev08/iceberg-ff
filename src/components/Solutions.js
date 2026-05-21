"use client";

import { useState } from "react";
import Link from "next/link";

export default function Solutions() {
  const [activeSlide, setActiveSlide] = useState("forex");

  const detailedSolutions = [
    {
      id: "forex",
      num: "01",
      menuTitle: "Forex Broker Solutions",
      menuDesc: "Complete brokerage platform powered by ICEBERG with advanced trading technology and liquidity access.",
      tag: "Turnkey Brokerage",
      headline: "Complete Forex Brokerage Infrastructure",
      description: "Deploy a premium institutional-grade brokerage infrastructure powered by ICEBERG. Complete with state-of-the-art charting engines, aggregated Tier-1 liquidity routing, and advanced regulatory compliance tools. Deliver an unmatched trading experience under tight spreads and lightning-fast execution.",
      features: [
        "ICEBERG Trader Platform",
        "Multi-Tier Liquidity Access",
        "Advanced CRM System",
        "Risk Management Tools",
        "Payment Gateway Integration",
        "Regulatory Compliance Suite",
        "Mobile Trading Interface",
        "24/7 Technical Support"
      ],
      bgGrad: "radial-gradient(circle at center, #0077b6 0%, #030712 100%)",
      ctaText: "Get Broker Demo"
    },
    {
      id: "prop",
      num: "02",
      menuTitle: "Prop Firm Solutions",
      menuDesc: "Specialized ICEBERG engine for proprietary trading firms with evaluation and risk systems.",
      tag: "Evaluation Engine",
      headline: "Specialized Prop Trading Infrastructure",
      description: "Scale your proprietary trading firm with the robust ICEBERG evaluation engine. Control risk in real-time, automate drawdown boundaries, manage multi-step trader evaluations, and handle profit-splitting payouts from a single secure administrator dashboard.",
      features: [
        "Ultra-Low Latency Execution",
        "Real-Time Market Data",
        "Advanced Charting Tools",
        "Multi-Asset Trading",
        "Automated Trading Support",
        "Cross-Platform Compatibility",
        "Custom Evaluation Rules",
        "Profit-Sharing Manager"
      ],
      bgGrad: "radial-gradient(circle at center, #ff1744 0%, #030712 100%)",
      ctaText: "Launch Prop Engine"
    },
    {
      id: "data",
      num: "03",
      menuTitle: "Market Data Feeds",
      menuDesc: "Real-time market data distribution across all major asset classes with high reliability.",
      tag: "Institutional Feeds",
      headline: "Enterprise Market Data Feeds",
      description: "Deliver real-time market data across all major asset classes with enterprise-grade reliability. Iceberg's redundant feed infrastructure provides sub-millisecond price streams, Level 2 depth of market metrics, and rich historical data archives directly into your platform.",
      features: [
        "Real-Time Forex Quotes",
        "Cryptocurrency Data",
        "Indices & Commodities",
        "Historical Data Archive",
        "Level 2 Order Book",
        "Market Depth Analytics",
        "Custom Data Normalization",
        "Redundant Feed Infrastructure"
      ],
      bgGrad: "radial-gradient(circle at center, #00b4d8 0%, #030712 100%)",
      ctaText: "Connect Feed API"
    },
    {
      id: "stock",
      num: "04",
      menuTitle: "Stock Broker Solutions",
      menuDesc: "ICEBERG platform for equity trading with comprehensive market access and portfolio tools.",
      tag: "Equity Access",
      headline: "Comprehensive Stock Brokerage Suite",
      description: "Enable global equity trading with deep market connectivity and rich portfolio management suites. The ICEBERG stock broker package offers comprehensive order management, real-time portfolio telemetry, and compliant connections to major stock exchanges globally.",
      features: [
        "Multi-Exchange Access",
        "Portfolio Management",
        "Order Management System",
        "Real-Time Analytics",
        "Algorithmic Trading",
        "Compliance Tools",
        "Direct Market Access (DMA)",
        "Custodian Integrations"
      ],
      bgGrad: "radial-gradient(circle at center, #050c18 0%, #030712 100%)",
      ctaText: "Request Stock Suite"
    },
    {
      id: "custom",
      num: "05",
      menuTitle: "Custom Platform Solutions",
      menuDesc: "Bespoke platform configurations for specialized requirements and unique models.",
      tag: "Bespoke Configs",
      headline: "Tailored ICEBERG Platform Configurations",
      description: "Tailor the platform configuration to your exact business specifications. Our scalable microservices architecture enables bespoke third-party integrations, proprietary layouts, specialized branding wrappers, and dedicated cloud deployments.",
      features: [
        "Custom Branding & Themes",
        "Flexible Microservices",
        "API & REST Integrations",
        "Scalable Infrastructure",
        "Cloud Deployments",
        "24/7 Dedicated Support",
        "Custom Matching Engine",
        "Multi-Asset Expansions"
      ],
      bgGrad: "radial-gradient(circle at center, #030712 0%, #081125 100%)",
      ctaText: "Consult Architecture"
    }
  ];

  return (
    <section className="section solutions-section" id="solutions">
      <div className="container">
        
        <div className="section-intro">
          <h2>Trading Solutions</h2>
          <p>Iceberg provides deep multi-tier modules custom engineered to scale modern forex brokerages and proprietary firms.</p>
        </div>

        <div className="solutions-wrapper">
          
          {/* Side Selection Menu */}
          <div className="solutions-menu">
            {detailedSolutions.map((sol) => (
              <button 
                key={sol.id} 
                className={`solutions-menu-btn ${activeSlide === sol.id ? "active" : ""}`} 
                onClick={() => setActiveSlide(sol.id)}
              >
                <span className="solutions-btn-num">{sol.num}</span>
                <div className="solutions-btn-info">
                  <h3>{sol.menuTitle}</h3>
                  <p>{sol.menuDesc}</p>
                </div>
              </button>
            ))}
          </div>

          {/* Display Showcase Panel */}
          <div className="solutions-display-panel glass-panel frost-border">
            {detailedSolutions.map((sol) => (
              <div 
                key={sol.id} 
                className={`solutions-display-card ${activeSlide === sol.id ? "active" : ""}`} 
                data-card={sol.id}
              >
                <div className="solutions-card-bg" style={{ backgroundImage: sol.bgGrad }}></div>
                <div className="solutions-card-overlay"></div>
                
                <div className="solutions-card-content" style={{ display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'space-between' }}>
                  <div>
                    <span className="solutions-card-tag">{sol.tag}</span>
                    <h3>{sol.headline}</h3>
                    <p>{sol.description}</p>
                  </div>
                  
                  <div>
                    <h4 style={{ color: 'var(--primary-cyan)', fontSize: '0.9rem', marginBottom: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Key Capabilities</h4>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem 1.5rem', marginBottom: '2rem' }}>
                      {sol.features.slice(0, 6).map((feat, idx) => (
                        <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                          <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="var(--primary-cyan)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                          {feat}
                        </div>
                      ))}
                    </div>
                    <Link href="/contact" className="btn btn-primary btn-sm">
                      {sol.ctaText}
                    </Link>
                  </div>
                </div>

              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
