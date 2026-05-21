"use client";

import { useState, useEffect, useRef, useLayoutEffect } from "react";

const FEATURES = [
  { key: "order", icon: "🎯", title: "Advanced Order Types", desc: "Implement sophisticated stop-loss, take-profit, OCO, and limit orders instantly." },
  { key: "ai", icon: "🤖", title: "AI-Driven Trading", desc: "Harness artificial intelligence engines for real-time market sentiment updates." },
  { key: "latency", icon: "⚡", title: "Ultra-Low Latency", desc: "Sub-millisecond execution cores bypassing high-frequency trade slippage." },
  { key: "liquidity", icon: "💧", title: "Deep Liquidity", desc: "Aggregated Tier-1 liquid channels ensuring consistent multi-million fills." },
  { key: "risk", icon: "🛡️", title: "Risk Management", desc: "Automated equity protections, margin alerts, and dynamic leverage limits." },
  { key: "analysis", icon: "📊", title: "Market Analysis Tools", desc: "Dozens of premium drawing models, indicator sets, and volume tickers." },
  { key: "data", icon: "📡", title: "Real-Time Data", desc: "Direct binary tick feeds from major global financial exchanges." },
  { key: "multi", icon: "🗺️", title: "Multi-Asset Trading", desc: "Unified catalog containing FX, crypto, stocks, index lists, and commodities." },
  { key: "api", icon: "🔌", title: "Advanced APIs", desc: "Fully compliant standard REST/FIX protocols for algorithmic integrations." },
  { key: "automation", icon: "⚙️", title: "Trading Automation", desc: "Code, compile, test, and run native automated scripts on active nodes." },
  { key: "institution", icon: "🏛️", title: "Institution-Grade Tools", desc: "White-label options custom engineered for modern prop firms and broker systems." },
];

const AUTO_ADVANCE_MS = 2800;
const N = FEATURES.length;
const COPIES = 3;
// Render three copies so we can sweep past either end and silently snap back to the middle copy.
const RENDERED = Array.from({ length: COPIES }, () => FEATURES).flat();

export default function PowerfulFeatures() {
  // `position` is an index into RENDERED. Start in the middle copy at the middle card.
  const [position, setPosition] = useState(N + Math.floor(N / 2));
  const [enableTransition, setEnableTransition] = useState(true);
  const [isPaused, setIsPaused] = useState(false);
  const [trackOffset, setTrackOffset] = useState(0);
  const trackRef = useRef(null);
  const viewportRef = useRef(null);

  const activeIndex = ((position % N) + N) % N;

  useEffect(() => {
    if (isPaused) return;
    const id = setInterval(() => {
      setPosition((p) => p + 1);
    }, AUTO_ADVANCE_MS);
    return () => clearInterval(id);
  }, [isPaused]);

  useLayoutEffect(() => {
    const recalc = () => {
      const track = trackRef.current;
      const viewport = viewportRef.current;
      if (!track || !viewport) return;
      const card = track.children[position];
      if (!card) return;
      const viewportCenter = viewport.clientWidth / 2;
      const cardCenter = card.offsetLeft + card.offsetWidth / 2;
      setTrackOffset(viewportCenter - cardCenter);
    };
    recalc();
    window.addEventListener("resize", recalc);
    return () => window.removeEventListener("resize", recalc);
  }, [position]);

  // Re-enable transition after a silent snap settles.
  useEffect(() => {
    if (enableTransition) return;
    const raf = requestAnimationFrame(() => {
      requestAnimationFrame(() => setEnableTransition(true));
    });
    return () => cancelAnimationFrame(raf);
  }, [enableTransition]);

  const handleTransitionEnd = (e) => {
    if (e.propertyName !== "transform") return;
    if (position >= 2 * N) {
      setEnableTransition(false);
      setPosition(position - N);
    } else if (position < N) {
      setEnableTransition(false);
      setPosition(position + N);
    }
  };

  // Pick the closest copy of the requested logical index so dot/card clicks animate the short way.
  const goToLogical = (logicalIndex) => {
    const candidates = [logicalIndex, logicalIndex + N, logicalIndex + 2 * N];
    let best = candidates[0];
    let bestDist = Math.abs(best - position);
    for (const c of candidates) {
      const d = Math.abs(c - position);
      if (d < bestDist) {
        best = c;
        bestDist = d;
      }
    }
    setPosition(best);
  };

  return (
    <section className="section powerful-features-section" id="features">
      <div className="container">
        <div className="section-intro">
          <h2>Powerful Trading Features</h2>
          <p>Institutional-grade tools engineered for professional trading environments, delivering absolute control and extreme capabilities.</p>
        </div>

        <div
          className="features-carousel"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="carousel-viewport" ref={viewportRef}>
            <div
              className="carousel-track"
              ref={trackRef}
              style={{
                transform: `translate3d(${trackOffset}px, 0, 0)`,
                transition: enableTransition ? undefined : "none",
              }}
              onTransitionEnd={handleTransitionEnd}
            >
              {RENDERED.map((f, i) => {
                const distance = Math.abs(i - position);
                let stateClass = "is-far";
                if (distance === 0) stateClass = "is-active";
                else if (distance === 1) stateClass = "is-near";

                return (
                  <button
                    type="button"
                    key={`${f.key}-${i}`}
                    className={`feature-badge-card glass-panel frost-border ${stateClass}`}
                    data-f={f.key}
                    onClick={() => setPosition(i)}
                    aria-current={distance === 0 ? "true" : undefined}
                    aria-label={`Feature: ${f.title}`}
                    tabIndex={distance === 0 ? 0 : -1}
                  >
                    <div className="f-badge-icon">{f.icon}</div>
                    <h3>{f.title}</h3>
                    <p>{f.desc}</p>
                  </button>
                );
              })}
            </div>
          </div>

        </div>

        <div className="carousel-dots" role="tablist" aria-label="Feature navigation">
          {FEATURES.map((f, i) => (
            <button
              type="button"
              key={f.key}
              className={`carousel-dot ${i === activeIndex ? "is-active" : ""}`}
              onClick={() => goToLogical(i)}
              aria-label={`Go to ${f.title}`}
              aria-selected={i === activeIndex}
              role="tab"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
