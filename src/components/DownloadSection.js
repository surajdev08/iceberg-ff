"use client";

import Link from "next/link";

export default function DownloadSection() {
  return (
    <section className="section download-page-section">
      <div className="container">
        
        {/* HERO SECTION */}
        <div className="download-hero text-center">
          <div className="hero-tag">
            <span className="tag-dot animate-pulse"></span>
            Unified Institutional Suite
          </div>
          <h1 className="gradient-text">Download Iceberg Professional Trading Platform</h1>
          <p className="hero-subtitle">
            Enjoy seamless trading experiences with our cross-platform apps. Request your customized credentials to download the latest version for your device or access the platform on your preferred system.
          </p>

          <div className="hero-actions download-hero-ctas">
            <Link href="/contact?purpose=demo" className="btn btn-primary">
              <span className="btn-glow-effect"></span>
              Get Demo Account
            </Link>
            <Link href="/contact?purpose=download" className="btn btn-secondary">
              Download Platform
            </Link>
          </div>
        </div>

        {/* MAIN BODY: FEATURE COLUMN & HIGH-FIDELITY PREVIEW */}
        <div className="download-features-grid unified-layout">
          
          {/* Feature List Column */}
          <div className="d-feat-info-column">
            <div className="hero-tag compact">
              <span className="tag-dot"></span>
              Core Features
            </div>
            <h2>Iceberg Desktop Trading Platform</h2>
            <p className="d-section-lead">
              Trade Smarter, Trade Faster with Your Professional Trading Terminal.
            </p>

            <div className="d-features-list">
              <div className="d-feature-card glass-panel">
                <div className="d-feat-icon">
                  <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-4 6h-4v2h4v2h-4v2h4v2H9V7h6v2z"/>
                  </svg>
                </div>
                <div className="d-feat-text">
                  <h3>Advanced Trading Technology</h3>
                  <p>Experience unmatched performance with Iceberg&apos;s desktop terminal, offering real-time market data, advanced analytics, and seamless execution across Forex, CFDs, and cryptocurrency markets.</p>
                </div>
              </div>

              <div className="d-feature-card glass-panel">
                <div className="d-feat-icon">
                  <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                    <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"/>
                  </svg>
                </div>
                <div className="d-feat-text">
                  <h3>Cross-Platform Compatibility</h3>
                  <p>Trade seamlessly on any desktop operating system. Iceberg&apos;s terminal is optimized to provide a robust and highly stable trading experience for every user.</p>
                </div>
              </div>

              <div className="d-feature-card glass-panel">
                <div className="d-feat-icon">
                  <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                    <path d="M3 13h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm4 4h14v-2H7v2zm0 4h14v-2H7v2zm0-8h14V7H7v2z"/>
                  </svg>
                </div>
                <div className="d-feat-text">
                  <h3>Customizable Trading Environment</h3>
                  <p>Personalize your trading terminal to suit your needs with customizable layouts, multi-chart views, and advanced tool integration to optimize your trading workflow.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Premium Desktop Terminal Preview Card */}
          <div className="d-simulator-column">
            <div className="terminal-browser-mockup glass-panel frost-border">
              <div className="browser-header">
                <div className="browser-dots">
                  <span className="dot red"></span>
                  <span className="dot yellow"></span>
                  <span className="dot green"></span>
                </div>
                <div className="browser-address">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="address-lock" width="11" height="11">
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                  </svg>
                  <span>Iceberg Desktop Terminal</span>
                </div>
                <div className="browser-actions-mock">
                  <span></span>
                  <span></span>
                </div>
              </div>

              {/* Viewport showing the premium dark terminal build */}
              <div className="browser-viewport" style={{ position: "relative", minHeight: "350px", overflow: "hidden" }}>
                <img
                  src="/assets/images/trading-terminal-dark.png"
                  alt="Iceberg Professional Trading Terminal Preview"
                  className="mockup-img"
                  style={{ width: "100%", height: "auto", display: "block" }}
                />
                
                {/* Floating neon badge indicating high-end performance */}
                <div className="floating-element float-execution" style={{ bottom: "20px", right: "20px", position: "absolute", zIndex: 10 }}>
                  <div className="floating-icon">⚡</div>
                  <div className="floating-text">Sub-1ms Speed</div>
                  <div className="floating-sub">Aggregated Liquidity</div>
                </div>
              </div>
            </div>

            {/* Quick Access Card */}
            <div className="glass-panel frost-border text-center" style={{ padding: "2.5rem", borderRadius: "12px", background: "rgba(10, 15, 26, 0.3)" }}>
              <h3>Request Platform Access</h3>
              <p style={{ fontSize: "0.95rem", color: "var(--text-secondary)", margin: "0.8rem 0 1.8rem" }}>
                Get immediate access credentials, setup instructions, and dedicated institutional assistance.
              </p>
              <Link href="/contact?subject=PlatformAccess" className="btn btn-primary" style={{ width: "100%" }}>
                <span className="btn-glow-effect"></span>
                Get Setup Credentials
              </Link>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
