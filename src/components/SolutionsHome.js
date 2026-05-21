import Link from "next/link";

export default function SolutionsHome() {
  const solutions = [
    {
      id: "forex",
      title: "Forex Broker Solutions",
      subtitle: "Complete Brokerage Infrastructure",
      brief: "Complete forex brokerage platform powered by ICEBERG Trader with advanced trading technology, liquidity access, and regulatory compliance tools.",
      features: [
        "ICEBERG Trader Engine",
        "Deep Liquidity Access",
        "Advanced CRM Modules",
        "Multi-Level Risk Management"
      ],
      icon: (
        <svg viewBox="0 0 24 24" width="36" height="36" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
          <path d="M2 12h20" />
        </svg>
      )
    },
    {
      id: "prop",
      title: "Prop Firm Solutions",
      subtitle: "Specialized Prop Trading Suite",
      brief: "Specialized ICEBERG Trader platform for proprietary trading firms with advanced risk management, trader evaluation, and profit-sharing systems.",
      features: [
        "Ultra-Low Latency Matcher",
        "Real-Time Market Feed",
        "Evaluator & Profit-Share",
        "Automated Drawdown Guards"
      ],
      icon: (
        <svg viewBox="0 0 24 24" width="36" height="36" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <path d="M12 8v8M9 11l3 3 3-3" />
        </svg>
      )
    },
    {
      id: "data",
      title: "Market Data Feeds",
      subtitle: "Real-Time Institutional Feeds",
      brief: "Real-time market data distribution across all major asset classes with enterprise-grade reliability and performance.",
      features: [
        "Real-Time Forex & Crypto Quotes",
        "Indices & Commodities Archive",
        "Level 2 Depth Analytics",
        "Redundant Feed Infrastructure"
      ],
      icon: (
        <svg viewBox="0 0 24 24" width="36" height="36" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
        </svg>
      )
    },
    {
      id: "stock",
      title: "Stock Broker Solutions",
      subtitle: "Comprehensive Equity Access",
      brief: "ICEBERG Trader platform for equity trading with comprehensive market access, portfolio management, and institutional connectivity.",
      features: [
        "Multi-Exchange Gateways",
        "Real-Time Portfolio Telemetry",
        "Institutional Connectors",
        "Algorithmic Order Management"
      ],
      icon: (
        <svg viewBox="0 0 24 24" width="36" height="36" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 3v18h18" />
          <path d="M18.7 8l-5.1 5.2-2.8-2.7L7 14.3" />
        </svg>
      )
    },
    {
      id: "custom",
      title: "Custom Platform Solutions",
      subtitle: "Tailored Platform Architectures",
      brief: "Tailored ICEBERG platform configurations for specialized trading requirements and unique business models.",
      features: [
        "Custom White-Label Branding",
        "Flexible Microservices API",
        "API / REST Integration",
        "Scalable Cloud Infrastructure"
      ],
      icon: (
        <svg viewBox="0 0 24 24" width="36" height="36" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
        </svg>
      )
    }
  ];

  return (
    <section className="section solutions-grid-section" id="solutions-grid">
      <div className="container">
        
        {/* Decorative Background Radial Glows */}
        <div className="glow-container">
          <div className="radial-glow glow-top-right"></div>
          <div className="radial-glow glow-bottom-left"></div>
        </div>

        <div className="solutions-grid-intro">
          <span className="hero-tag">
            <span className="tag-dot"></span>
            Institutional Offerings
          </span>
          <h2>Platform Solutions</h2>
          <p>
            ICEBERG provides advanced, multi-tier trading systems custom engineered to scale modern brokerage structures and proprietary trading firms.
          </p>
        </div>

        <div className="solutions-grid-container">
          {solutions.map((sol) => (
            <div key={sol.id} className="solution-flip-card">
              <div className="solution-flip-card-inner">
                
                {/* FRONT FACE */}
                <div className="solution-flip-card-front">
                  <div className="solution-icon-container">
                    {sol.icon}
                  </div>
                  <h3>{sol.title}</h3>
                  <p className="solution-card-subtitle">{sol.subtitle}</p>
                </div>

                {/* BACK FACE */}
                <div className="solution-flip-card-back">
                  <h3>{sol.title}</h3>
                  <p className="solution-card-subtitle-back">{sol.subtitle}</p>
                  <p className="solution-brief-desc">{sol.brief}</p>
                  
                  <ul className="solution-bullet-list">
                    {sol.features.map((feat, idx) => (
                      <li key={idx} className="solution-bullet-item">
                        <svg className="solution-bullet-icon" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        {feat}
                      </li>
                    ))}
                  </ul>
                </div>

              </div>
            </div>
          ))}
        </div>

        <div className="solutions-grid-actions">
          <Link href="/solutions" className="btn btn-primary">
            Explore All Solutions
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </Link>
        </div>

      </div>
    </section>
  );
}
