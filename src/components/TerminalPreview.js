"use client";

import { useState } from "react";

export default function TerminalPreview() {
  const [activeTab, setActiveTab] = useState("dark"); // "light" | "dark"

  return (
    <section className="section terminal-preview-section" id="terminal-preview">
      <div className="container">

        {/* Section Intro */}
        <div className="section-intro text-center">
          <div className="hero-tag">
            <span className="tag-dot animate-pulse"></span>
            Institutional Workspaces
          </div>
          <h2>Next-Generation Web Terminal</h2>
          <p>
            Experience lightning fast multi-asset execution and robust technical analysis inside our award-winning web trading terminal. Available in gorgeous light and dark aesthetics.
          </p>
        </div>

        {/* Tab Selector matching user's screenshot exactly */}
        <div className="terminal-tabs-wrapper">
          <div className="terminal-capsule-tabs">
            <button
              className={`terminal-tab-btn-pill ${activeTab === "light" ? "active" : ""}`}
              onClick={() => setActiveTab("light")}
              aria-label="Switch to Web Terminal Light Mode"
            >
              <svg className="tab-icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
                <polyline points="16 7 22 7 22 13" />
              </svg>
              <span>Web Terminal</span>
            </button>

            <button
              className={`terminal-tab-btn-pill ${activeTab === "dark" ? "active" : ""}`}
              onClick={() => setActiveTab("dark")}
              aria-label="Switch to Web Terminal Dark Mode"
            >
              <svg className="tab-icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
              </svg>
              <span>Web Terminal (Dark)</span>
            </button>
          </div>
        </div>

        {/* Desktop Browser Mockup Frame with Cross-fade Mockup Images */}
        <div className="terminal-browser-mockup glass-panel frost-border">
          {/* Browser Top Controls bar */}
          <div className="browser-header">
            <div className="browser-dots">
              <span className="dot red"></span>
              <span className="dot yellow"></span>
              <span className="dot green"></span>
            </div>
            <div className="browser-address">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="address-lock"><rect x="3" y="11" width="18" height="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg>
              <span>Trading Terminal Iceberg</span>
            </div>
            <div className="browser-actions-mock">
              <span></span>
              <span></span>
            </div>
          </div>

          {/* Browser viewport area with cross-faded mockups */}
          <div className="browser-viewport">
            {/* Light Mode Mockup */}
            <div className={`viewport-image-container ${activeTab === "light" ? "visible" : "hidden"}`}>
              <img
                src="/assets/images/webterminal-light.png"
                alt="ICEBERG Web Terminal Light Mode Preview"
                className="mockup-img"
                loading="lazy"
              />
            </div>

            {/* Dark Mode Mockup */}
            <div className={`viewport-image-container ${activeTab === "dark" ? "visible" : "hidden"}`}>
              <img
                src="/assets/images/webterminal-dark.png"
                alt="ICEBERG Web Terminal Dark Mode Preview"
                className="mockup-img"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        {/* Powered by WeTrader Badge */}
        <div className="terminal-powered-by">
          Powered by <span>WeTrader</span>
        </div>

      </div>
    </section>
  );
}
