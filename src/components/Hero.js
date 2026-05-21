import Link from "next/link";

export default function Hero() {
  return (
    <section className="section hero" id="home">
      {/* Confined Snowfall Canvas */}
      <canvas id="snowfall-canvas"></canvas>

      <div className="container grid hero-grid">

        {/* Hero Details & Primary CTAs */}
        <div className="hero-content">
          <h1>Advanced Trading Platform Powered by Iceberg HQ</h1>
          <p className="hero-subtitle">
            Experience next-generation trading with the ICEBERG platform. Powered by Iceberg HQ technology, delivering institutional-grade execution, advanced analytics, and seamless multi-asset trading for professional brokerages and prop firms.
          </p>

          <div className="hero-actions">
            <Link href="/contact" className="btn btn-primary">Start Trading Demo</Link>
            <a href="#terminal-preview" className="btn btn-secondary">Web Terminal Preview</a>
          </div>

          {/* <div className="hero-latency-badge">
            <div className="latency-item">
              <span className="latency-title">Average Execution</span>
              <span className="latency-value green">0.72ms</span>
            </div>
            <div className="latency-item">
              <span className="latency-title">Active Instruments</span>
              <span className="latency-value">1,000+</span>
            </div>
            <div className="latency-item">
              <span className="latency-title">Global Latency</span>
              <span className="latency-value">&lt; 16ms</span>
            </div>
          </div> */}
        </div>

        {/* Interactive High-Tech Trading Dashboard Mockup */}
        <div className="hero-visual">
          <div className="dashboard-mockup glass-panel frost-border" id="hero-dashboard-mockup">

            {/* Terminal Header Controls */}
            <div className="terminal-header">
              <div className="terminal-dots">
                <span></span>
                <span></span>
                <span></span>
              </div>
              <div className="terminal-title">
                <svg width="12" height="12" fill="currentColor" viewBox="0 0 16 16"><path d="M11 2a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1V2zM5 5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V5zm-4 4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V9z" /></svg>
                ICEBERG Terminal
              </div>
              <div className="terminal-toggle">
                <button className="active" id="btn-term-dark">DARK</button>
                <button id="btn-term-light">LIGHT</button>
              </div>
            </div>

            {/* Terminal Interior */}
            <div className="terminal-body">

              {/* Real-time Chart Sandbox */}
              <div className="terminal-chart-area">
                <div className="chart-legend">
                  <span className="chart-symbol">BTC/USD (BITCOIN)</span>
                  <span>Interval: 1m</span>
                </div>
                <div className="chart-canvas-container">
                  <canvas id="hero-canvas"></canvas>
                </div>
              </div>

              {/* Order Book Widget */}
              <div className="terminal-sidebar">
                <div className="sidebar-title">Order Book Ledger</div>
                <div className="order-book" id="live-order-book">
                  {/* JS dynamically populates order grids */}
                </div>
                <div className="trade-latency-ping">
                  <svg width="10" height="10" viewBox="0 0 100 100" style={{ fill: 'currentColor' }}><circle cx="50" cy="50" r="40"></circle></svg>
                  <span>GATEWAY OK (0.72ms)</span>
                </div>
              </div>

            </div>
          </div>

          {/* Decorative Floating Indicators */}
          <div className="floating-element float-execution">
            <div className="floating-icon">⚡</div>
            <div className="floating-text">Sub-1ms Latency</div>
            <div className="floating-sub">Direct Tier-1 Execution</div>
          </div>
          <div className="floating-element float-liquidity">
            <div className="floating-icon">💧</div>
            <div className="floating-text">Aggregated Pools</div>
            <div className="floating-sub">Deep Institutional Depth</div>
          </div>

          {/* Floating Polar Bear Scalper on Iceberg */}
          <div className="floating-bear-card glass-panel frost-border">
            <img src="/assets/images/polar_bear_trading.png" alt="Polar Bear Trading on Iceberg" className="bear-img" />
            <div className="bear-caption">
              <span className="bear-dot"></span>
              ICE-BEAR PRO-SCALPER v1.0
            </div>
          </div>
        </div>

      </div>

      {/* Bottom Iceberg & Ocean Water visual divider */}
      <div className="hero-bottom-divider">

        {/* LAYER 1: Deep Back Wave SVG */}
        <svg className="ice-ocean-svg wave-svg-back" viewBox="0 0 1440 160" preserveAspectRatio="none">
          <defs>
            <linearGradient id="grad-ocean-deep" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#040914" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#02040a" stopOpacity="1" />
            </linearGradient>
          </defs>
          <path className="ocean-wave-deep" d="M0,90 C360,130 720,50 1080,110 C1260,140 1380,110 1440,90 L1440,160 L0,160 Z" fill="url(#grad-ocean-deep)"></path>
        </svg>

        {/* Majestic Faceted Vector Iceberg 1 (Left, Large) - sandwiched behind Middle wave */}
        <svg className="real-iceberg iceberg-left" viewBox="0 0 200 300" preserveAspectRatio="none">
          <defs>
            <linearGradient id="iceberg-underwater-grad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#0081a0" stopOpacity="0.6" />
              <stop offset="40%" stopColor="#004a5c" stopOpacity="0.35" />
              <stop offset="100%" stopColor="#040914" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="ice-light-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="100%" stopColor="#d4f9fc" />
            </linearGradient>
            <linearGradient id="ice-cyan-grad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#00f0ff" />
              <stop offset="100%" stopColor="#00a2ff" />
            </linearGradient>
          </defs>
          {/* Submerged Base (Tip of the Iceberg) */}
          <polygon points="30,160 100,285 170,160" fill="url(#iceberg-underwater-grad)" />
          {/* Above-Water Shadow Facets */}
          <polygon points="100,20 30,160 100,160" fill="#0d4f5c" />
          <polygon points="100,20 100,160 135,160" fill="#063b46" />
          {/* Midtone Facets */}
          <polygon points="100,20 65,100 100,160" fill="#156e82" />
          <polygon points="100,20 100,160 125,110" fill="#208b9f" />
          {/* Neon & Frost Highlight Facets */}
          <polygon points="100,20 30,160 65,100" fill="url(#ice-light-grad)" />
          <polygon points="100,20 125,110 170,160" fill="url(#ice-cyan-grad)" />
          {/* Center Sharp Crystalline Crest */}
          <polygon points="100,20 92,90 100,160" fill="#ffffff" opacity="0.9" />
        </svg>

        {/* LAYER 2: Middle Glacier Wave SVG */}
        <svg className="ice-ocean-svg wave-svg-mid" viewBox="0 0 1440 160" preserveAspectRatio="none">
          <defs>
            <linearGradient id="grad-ocean-mid" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#002f3c" stopOpacity="0.3" />
              <stop offset="50%" stopColor="#006b85" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#002f3c" stopOpacity="0.3" />
            </linearGradient>
          </defs>
          <path className="ocean-wave-mid" d="M0,110 C240,70 480,130 720,100 C960,70 1200,130 1440,110 L1440,160 L0,160 Z" fill="url(#grad-ocean-mid)"></path>
        </svg>

        {/* Majestic Faceted Vector Iceberg 2 (Right, Medium) - sandwiched behind Front wave */}
        <svg className="real-iceberg iceberg-right" viewBox="0 0 160 220" preserveAspectRatio="none">
          {/* Submerged Base */}
          <polygon points="25,120 80,205 135,120" fill="url(#iceberg-underwater-grad)" />
          {/* Shadow Facets */}
          <polygon points="80,15 25,120 80,120" fill="#0c4b57" />
          <polygon points="80,15 80,120 115,120" fill="#05333d" />
          {/* Midtones */}
          <polygon points="80,15 55,70 80,120" fill="#126274" />
          <polygon points="80,15 80,120 105,80" fill="#1c7c8e" />
          {/* Neon & Frost Highlights */}
          <polygon points="80,15 25,120 55,70" fill="url(#ice-light-grad)" />
          <polygon points="80,15 105,80 135,120" fill="url(#ice-cyan-grad)" />
          {/* Center Crest */}
          <polygon points="80,15 74,60 80,120" fill="#ffffff" opacity="0.95" />
        </svg>

        {/* LAYER 3: Front Wave SVG */}
        <svg className="ice-ocean-svg wave-svg-front" viewBox="0 0 1440 160" preserveAspectRatio="none">
          <defs>
            <linearGradient id="grad-ocean-front" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#00f0ff" stopOpacity="0.12" />
              <stop offset="50%" stopColor="#00f0ff" stopOpacity="0.25" />
              <stop offset="100%" stopColor="#00f0ff" stopOpacity="0.12" />
            </linearGradient>
          </defs>
          <path className="ocean-wave-front" d="M0,130 C300,160 600,110 900,140 C1200,170 1350,140 1440,130 L1440,160 L0,160 Z" fill="url(#grad-ocean-front)"></path>
        </svg>
      </div>
    </section>
  );
}
