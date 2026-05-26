"use client";

import { useState, useEffect } from "react";

const marketsData = {
  FX: {
    id: "FX",
    name: "Foreign Exchange",
    subtitle: "Global Currencies",
    icon: "💱",
    badge: "Most Liquid",
    accentColor: "var(--primary-cyan, #00f0ff)",
    statHighlight: "Spreads from 0.0 pips",
    sparklinePath: "M 2 16 Q 15 6, 30 18 T 58 4 T 68 10",
    sparklineColor: "#00f0ff",
    flagship: {
      symbol: "EUR/USD",
      name: "Euro / US Dollar",
      baseBid: 1.0845,
      baseAsk: 1.08453,
      decimals: 5,
      spread: "0.3 pips",
      leverage: "1:500",
      status: "Highly Liquid",
    },
    stars: [
      {
        symbol: "GBP/USD",
        name: "British Pound / US Dollar",
        baseBid: 1.2732,
        baseAsk: 1.27324,
        decimals: 5,
        spread: "0.4 pips",
        leverage: "1:500",
      },
      {
        symbol: "USD/JPY",
        name: "US Dollar / Japanese Yen",
        baseBid: 156.84,
        baseAsk: 156.842,
        decimals: 3,
        spread: "0.2 pips",
        leverage: "1:500",
      },
      {
        symbol: "AUD/USD",
        name: "Australian Dollar / US Dollar",
        baseBid: 0.6651,
        baseAsk: 0.66515,
        decimals: 5,
        spread: "0.5 pips",
        leverage: "1:500",
      },
    ],
    advantages: [
      {
        title: "Zero Commissions",
        desc: "Trade major currency pairs with raw interbank spreads and zero commissions on premium accounts.",
      },
      {
        title: "Institutional Liquidity",
        desc: "Execute multi-million lot orders instantly with deep liquidity aggregated from tier-1 global banks.",
      },
      {
        title: "Sub-Millisecond Execution",
        desc: "Experience lightning-fast order routing via our NY4 Equinix fiber network bridge.",
      },
    ],
    chartData: {
      points:
        "M 0 80 C 40 70, 80 120, 120 90 C 160 60, 200 110, 240 70 C 280 30, 320 85, 360 45 C 400 5, 440 50, 480 30 C 520 10, 560 60, 600 20",
      candles: [
        { x: 50, open: 95, close: 82, high: 105, low: 78, type: "bear" },
        { x: 130, open: 82, close: 102, high: 110, low: 75, type: "bull" },
        { x: 210, open: 102, close: 92, high: 115, low: 88, type: "bear" },
        { x: 290, open: 92, close: 125, high: 135, low: 85, type: "bull" },
        { x: 370, open: 125, close: 105, high: 130, low: 100, type: "bear" },
        { x: 450, open: 105, close: 140, high: 150, low: 95, type: "bull" },
        { x: 530, open: 140, close: 155, high: 165, low: 135, type: "bull" },
      ],
    },
  },
  CRYPTO: {
    id: "CRYPTO",
    name: "Cryptocurrencies",
    subtitle: "Digital Assets",
    icon: "🪙",
    badge: "24/7 Trading",
    accentColor: "var(--color-success, #00e676)",
    statHighlight: "Leverage up to 1:100",
    sparklinePath: "M 2 20 L 12 6 L 24 18 L 38 4 L 48 20 L 58 2 L 68 14",
    sparklineColor: "#00e676",
    flagship: {
      symbol: "BTC/USD",
      name: "Bitcoin / US Dollar",
      baseBid: 67240.5,
      baseAsk: 67242.0,
      decimals: 2,
      spread: "$1.50",
      leverage: "1:100",
      status: "High Volatility",
    },
    stars: [
      {
        symbol: "ETH/USD",
        name: "Ethereum / US Dollar",
        baseBid: 3745.2,
        baseAsk: 3745.6,
        decimals: 2,
        spread: "$0.40",
        leverage: "1:100",
      },
      {
        symbol: "SOL/USD",
        name: "Solana / US Dollar",
        baseBid: 168.45,
        baseAsk: 168.52,
        decimals: 2,
        spread: "$0.07",
        leverage: "1:50",
      },
      {
        symbol: "BNB/USD",
        name: "BNB / US Dollar",
        baseBid: 602.1,
        baseAsk: 602.35,
        decimals: 2,
        spread: "$0.25",
        leverage: "1:50",
      },
    ],
    advantages: [
      {
        title: "24/7/365 Availability",
        desc: "Crypto markets never sleep. Trade digital assets over weekends and holidays with stable liquidity.",
      },
      {
        title: "No Overnight Funding",
        desc: "Hold swap-free leveraged positions on leading digital currencies without paying roll-over rates.",
      },
      {
        title: "Secure Cold Storage",
        desc: "Our clearing agents use state-of-the-art multi-sig custody to secure all digital liquidity pools.",
      },
    ],
    chartData: {
      points:
        "M 0 110 L 50 40 L 100 130 L 150 70 L 200 160 L 250 30 L 300 120 L 350 20 L 400 90 L 450 10 L 500 110 L 550 5 L 600 85",
      candles: [
        { x: 50, open: 110, close: 40, high: 125, low: 30, type: "bear" },
        { x: 130, open: 40, close: 115, high: 125, low: 35, type: "bull" },
        { x: 210, open: 115, close: 60, high: 130, low: 50, type: "bear" },
        { x: 290, open: 60, close: 145, high: 155, low: 50, type: "bull" },
        { x: 370, open: 145, close: 80, high: 150, low: 70, type: "bear" },
        { x: 450, open: 80, close: 155, high: 165, low: 75, type: "bull" },
        { x: 530, open: 155, close: 160, high: 170, low: 145, type: "bull" },
      ],
    },
  },
  STOCKS: {
    id: "STOCKS",
    name: "Stock CFDs",
    subtitle: "Global Equities",
    icon: "🏢",
    badge: "150+ Companies",
    accentColor: "#d500f9",
    statHighlight: "0% Commission CFDs",
    sparklinePath: "M 2 18 L 15 14 L 28 15 L 42 10 L 55 12 L 68 2",
    sparklineColor: "#d500f9",
    flagship: {
      symbol: "AAPL",
      name: "Apple Inc. CFD",
      baseBid: 189.84,
      baseAsk: 189.86,
      decimals: 2,
      spread: "$0.02",
      leverage: "1:20",
      status: "Active Session",
    },
    stars: [
      {
        symbol: "TSLA",
        name: "Tesla Inc. CFD",
        baseBid: 174.95,
        baseAsk: 175.0,
        decimals: 2,
        spread: "$0.05",
        leverage: "1:20",
      },
      {
        symbol: "NVDA",
        name: "NVIDIA Corp. CFD",
        baseBid: 948.2,
        baseAsk: 948.35,
        decimals: 2,
        spread: "$0.15",
        leverage: "1:20",
      },
      {
        symbol: "MSFT",
        name: "Microsoft Corp. CFD",
        baseBid: 429.5,
        baseAsk: 429.56,
        decimals: 2,
        spread: "$0.06",
        leverage: "1:20",
      },
    ],
    advantages: [
      {
        title: "Dividend Adjustments",
        desc: "Receive dividend cash adjustments directly to your account balance on long positions.",
      },
      {
        title: "Flexible Long/Short",
        desc: "Short-sell stock CFDs with the same seamless execution and leverage as traditional buy orders.",
      },
      {
        title: "Fractional Shares",
        desc: "Trade fractionally down to 0.01 shares of major global tech, energy, and finance giants.",
      },
    ],
    chartData: {
      points:
        "M 0 100 C 40 90, 80 85, 120 70 C 160 55, 200 65, 240 50 C 280 35, 320 45, 360 30 C 400 15, 440 25, 480 10 C 520 5, 560 8, 600 2",
      candles: [
        { x: 50, open: 105, close: 95, high: 110, low: 90, type: "bear" },
        { x: 130, open: 95, close: 85, high: 100, low: 80, type: "bear" },
        { x: 210, open: 85, close: 72, high: 88, low: 68, type: "bear" },
        { x: 290, open: 72, close: 58, high: 75, low: 55, type: "bear" },
        { x: 370, open: 58, close: 42, high: 60, low: 38, type: "bear" },
        { x: 450, open: 42, close: 28, high: 45, low: 24, type: "bear" },
        { x: 530, open: 28, close: 12, high: 30, low: 8, type: "bear" },
      ],
    },
  },
  INDICES: {
    id: "INDICES",
    name: "Indices",
    subtitle: "Equity Benchmarks",
    icon: "📊",
    badge: "High Volatility",
    accentColor: "var(--primary-orange, #ff9100)",
    statHighlight: "Tightest Index Spreads",
    sparklinePath: "M 2 18 Q 18 18, 30 10 T 50 12 T 68 4",
    sparklineColor: "#ff9100",
    flagship: {
      symbol: "SPX500",
      name: "S&P 500 Index CFD",
      baseBid: 5304.5,
      baseAsk: 5305.0,
      decimals: 2,
      spread: "0.5 pts",
      leverage: "1:200",
      status: "Highly Active",
    },
    stars: [
      {
        symbol: "NAS100",
        name: "Nasdaq 100 CFD",
        baseBid: 18810.2,
        baseAsk: 18811.0,
        decimals: 2,
        spread: "0.8 pts",
        leverage: "1:200",
      },
      {
        symbol: "US30",
        name: "Dow Jones CFD",
        baseBid: 39065.4,
        baseAsk: 39066.6,
        decimals: 2,
        spread: "1.2 pts",
        leverage: "1:200",
      },
      {
        symbol: "GER40",
        name: "DAX 40 Index CFD",
        baseBid: 18690.5,
        baseAsk: 18691.4,
        decimals: 2,
        spread: "0.9 pts",
        leverage: "1:100",
      },
    ],
    advantages: [
      {
        title: "Broad Market Exposure",
        desc: "Gain massive exposure to entire top economies with single US, European, and Asian index contracts.",
      },
      {
        title: "No Broker Markup",
        desc: "Trade indices with standard interbank spreads and completely transparent order books.",
      },
      {
        title: "Extended Daily Trading",
        desc: "Keep track and execute on global trends day or night with extended 23-hour daily access.",
      },
    ],
    chartData: {
      points:
        "M 0 90 C 50 80, 100 110, 150 95 C 200 80, 250 60, 300 75 C 350 90, 400 40, 450 55 C 500 70, 550 20, 600 30",
      candles: [
        { x: 50, open: 92, close: 82, high: 98, low: 78, type: "bear" },
        { x: 130, open: 82, close: 98, high: 104, low: 78, type: "bull" },
        { x: 210, open: 98, close: 78, high: 108, low: 72, type: "bear" },
        { x: 290, open: 78, close: 68, high: 82, low: 62, type: "bear" },
        { x: 370, open: 68, close: 48, high: 72, low: 42, type: "bear" },
        { x: 450, open: 48, close: 62, high: 68, low: 42, type: "bull" },
        { x: 530, open: 62, close: 38, high: 66, low: 32, type: "bear" },
      ],
    },
  },
  METALS: {
    id: "METALS",
    name: "Precious Metals",
    subtitle: "Safe Havens",
    icon: "🏆",
    badge: "Inflation Hedge",
    accentColor: "#ffd700",
    statHighlight: "Gold spreads from 8¢",
    sparklinePath: "M 2 14 C 15 10, 20 22, 35 15 C 50 8, 55 4, 68 2",
    sparklineColor: "#ffd700",
    flagship: {
      symbol: "XAU/USD",
      name: "Gold Spot CFD",
      baseBid: 2418.6,
      baseAsk: 2418.75,
      decimals: 2,
      spread: "$0.15",
      leverage: "1:200",
      status: "High Volume",
    },
    stars: [
      {
        symbol: "XAG/USD",
        name: "Silver Spot CFD",
        baseBid: 31.85,
        baseAsk: 31.87,
        decimals: 2,
        spread: "$0.02",
        leverage: "1:100",
      },
      {
        symbol: "XPT/USD",
        name: "Platinum Spot CFD",
        baseBid: 1042.3,
        baseAsk: 1043.5,
        decimals: 2,
        spread: "$1.20",
        leverage: "1:50",
      },
      {
        symbol: "PALL/USD",
        name: "Palladium Spot CFD",
        baseBid: 968.4,
        baseAsk: 970.1,
        decimals: 2,
        spread: "$1.70",
        leverage: "1:50",
      },
    ],
    advantages: [
      {
        title: "Inflation Shelter",
        desc: "Protect capital against inflation and currency devaluations with liquid gold spot CFDs.",
      },
      {
        title: "Ultra-Tight Spreads",
        desc: "Experience extremely compressed spreads during active London and New York overlaps.",
      },
      {
        title: "Optimized Swap Rates",
        desc: "Maintain long-term hedge positions with highly optimized and competitive roll-over swaps.",
      },
    ],
    chartData: {
      points: "M 0 110 Q 75 140, 150 90 T 300 40 T 450 70 T 600 20",
      candles: [
        { x: 50, open: 102, close: 122, high: 128, low: 98, type: "bull" },
        { x: 130, open: 122, close: 98, high: 128, low: 92, type: "bear" },
        { x: 210, open: 98, close: 82, high: 108, low: 78, type: "bear" },
        { x: 290, open: 82, close: 48, high: 88, low: 42, type: "bear" },
        { x: 370, open: 48, close: 62, high: 72, low: 42, type: "bull" },
        { x: 450, open: 62, close: 42, high: 68, low: 38, type: "bear" },
        { x: 530, open: 42, close: 28, high: 48, low: 22, type: "bear" },
      ],
    },
  },
  COMMODITIES: {
    id: "COMMODITIES",
    name: "Energies & Commodities",
    subtitle: "Physical Goods",
    icon: "🔥",
    badge: "Global Futures",
    accentColor: "#ff3d00",
    statHighlight: "WTI Crude from $0.03",
    sparklinePath: "M 2 8 Q 15 22, 32 12 T 60 14 T 68 8",
    sparklineColor: "#ff3d00",
    flagship: {
      symbol: "WTI CRUDE",
      name: "WTI Light Sweet Crude Oil",
      baseBid: 79.42,
      baseAsk: 79.45,
      decimals: 2,
      spread: "$0.03",
      leverage: "1:100",
      status: "High Demand",
    },
    stars: [
      {
        symbol: "BRENT",
        name: "Brent Crude Oil CFD",
        baseBid: 83.6,
        baseAsk: 83.64,
        decimals: 2,
        spread: "$0.04",
        leverage: "1:100",
      },
      {
        symbol: "NATGAS",
        name: "Natural Gas Futures CFD",
        baseBid: 2.52,
        baseAsk: 2.522,
        decimals: 3,
        spread: "$0.002",
        leverage: "1:50",
      },
      {
        symbol: "USGAS",
        name: "US Gasoline CFD",
        baseBid: 2.451,
        baseAsk: 2.4525,
        decimals: 4,
        spread: "$0.0015",
        leverage: "1:50",
      },
    ],
    advantages: [
      {
        title: "Direct Futures Spot",
        desc: "Hedge and speculate on global supply chain shocks with futures-linked spot instruments.",
      },
      {
        title: "Leveraged Margins",
        desc: "Gain massive capital efficiency with up to 100x leverage on major global energy CFDs.",
      },
      {
        title: "Zero Physical Cost",
        desc: "Access global commodity spot rate changes directly without physical storage fees or expirations.",
      },
    ],
    chartData: {
      points:
        "M 0 50 C 50 60, 100 20, 150 60 C 200 100, 250 80, 300 120 C 350 160, 400 90, 450 110 C 500 130, 550 50, 600 70",
      candles: [
        { x: 50, open: 58, close: 48, high: 68, low: 42, type: "bear" },
        { x: 130, open: 48, close: 78, high: 82, low: 42, type: "bull" },
        { x: 210, open: 78, close: 68, high: 88, low: 62, type: "bear" },
        { x: 290, open: 68, close: 108, high: 112, low: 58, type: "bull" },
        { x: 370, open: 108, close: 98, high: 118, low: 88, type: "bear" },
        { x: 450, open: 98, close: 128, high: 132, low: 92, type: "bull" },
        { x: 530, open: 128, close: 78, high: 138, low: 72, type: "bear" },
      ],
    },
  },
};

export default function MarketsPlayground() {
  const [activeTab, setActiveTab] = useState("FX");
  const [tickOffset, setTickOffset] = useState(0);
  const [tickDirection, setTickDirection] = useState(null); // "up" | "down" | null

  // Simulate micro-ticking rates to make the static cards feel alive and professional
  useEffect(() => {
    const interval = setInterval(() => {
      const isUp = Math.random() > 0.5;
      const amount = Math.random() * 0.0003 * (isUp ? 1 : -1);

      setTickOffset(amount);
      setTickDirection(isUp ? "up" : "down");

      // Reset tick class after brief flash
      const timer = setTimeout(() => {
        setTickDirection(null);
      }, 500);

      return () => clearTimeout(timer);
    }, 1600);

    return () => clearInterval(interval);
  }, [activeTab]);

  const activeMarket = marketsData[activeTab];

  // Price Calculation Helpers
  const getBidPrice = (baseBid, decimals) => {
    const calculated = baseBid * (1 + tickOffset);
    return calculated.toFixed(decimals);
  };

  const getAskPrice = (baseAsk, decimals) => {
    const calculated = baseAsk * (1 + tickOffset);
    return calculated.toFixed(decimals);
  };

  return (
    <section className="section markets-playground-section" id="markets">
      <div className="container">
        <div className="section-intro text-center">
          <h2 className="glow-text">A Multi-Asset Platform for All Markets</h2>
          <p className="section-subtitle">
            Trade Forex, Cryptocurrencies, Stocks, Commodities, and Indices from
            a single unified margin account. Enjoy ultra-tight interbank
            pricing, raw spreads, and deep institutional liquidity pipelines.
          </p>
        </div>

        <div className="markets-showcase-panel glass-panel frost-border">
          {/* Sidebar Tabs */}
          <div className="markets-sidebar-tabs">
            {Object.values(marketsData).map((market) => (
              <button
                key={market.id}
                className={`market-showcase-tab ${activeTab === market.id ? "active" : ""}`}
                onClick={() => {
                  setActiveTab(market.id);
                  setTickOffset(0);
                }}
                type="button"
                style={{ "--market-theme": market.accentColor }}
              >
                <div className="tab-meta-row">
                  <span className="tab-icon-wrap">{market.icon}</span>
                  <div className="tab-text-group">
                    <span className="tab-title-text">{market.name}</span>
                    <span className="tab-subtitle-text">{market.subtitle}</span>
                  </div>
                </div>

                <div className="tab-visual-row">
                  <span className="tab-highlight-badge">
                    {market.statHighlight}
                  </span>
                  <div className="tab-sparkline-wrap">
                    <svg
                      className="tab-sparkline"
                      width="68"
                      height="20"
                      viewBox="0 0 70 24"
                    >
                      <path
                        d={market.sparklinePath}
                        fill="none"
                        stroke={market.sparklineColor}
                        strokeWidth="2.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>

                <div className="tab-active-indicator" />
              </button>
            ))}
          </div>

          {/* Showroom Area */}
          <div
            className="market-showroom"
            style={{ "--theme-color": activeMarket.accentColor }}
          >
            {/* Showroom Header */}
            <div className="showroom-header">
              <div className="showroom-headline-group">
                <span className="showroom-icon-circle">
                  {activeMarket.icon}
                </span>
                <div>
                  <h3 id="showroom-asset-title">
                    {activeMarket.name} Showcase
                  </h3>
                  <span className="showroom-category-tag">
                    {activeMarket.subtitle}
                  </span>
                </div>
              </div>
              <div className="showroom-badge-status-group">
                <span className="showroom-status-badge live-blink">
                  <span className="blink-dot" /> LIVE FEEDS
                </span>
                <span className="showroom-badge-highlight">
                  {activeMarket.badge}
                </span>
              </div>
            </div>

            {/* Showcase Grid */}
            <div className="showroom-grid">
              {/* Left Column: Popular Symbols & Details */}
              <div className="showroom-details-pane">
                <div className="showroom-sub-panel-title">
                  Typical Asset Specifications
                </div>

                {/* Flagship Asset Display */}
                <div className="flagship-asset-card">
                  <div className="flagship-header">
                    <div className="flagship-identity">
                      <span className="flagship-symbol">
                        {activeMarket.flagship.symbol}
                      </span>
                      <span className="flagship-name">
                        {activeMarket.flagship.name}
                      </span>
                    </div>
                    <span className="flagship-badge">
                      {activeMarket.flagship.status}
                    </span>
                  </div>

                  <div className="flagship-pricing-row">
                    <div
                      className={`flagship-rate-box bid ${tickDirection === "down" ? "flash-down" : ""}`}
                    >
                      <span className="rate-label">INSTITUTIONAL BID</span>
                      <div className="rate-value">
                        {getBidPrice(
                          activeMarket.flagship.baseBid,
                          activeMarket.flagship.decimals,
                        )}
                      </div>
                    </div>
                    <div
                      className={`flagship-rate-box ask ${tickDirection === "up" ? "flash-up" : ""}`}
                    >
                      <span className="rate-label">INSTITUTIONAL ASK</span>
                      <div className="rate-value">
                        {getAskPrice(
                          activeMarket.flagship.baseAsk,
                          activeMarket.flagship.decimals,
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="flagship-stats-row">
                    <div className="flagship-stat">
                      <span className="stat-label">SPREAD</span>
                      <span className="stat-val-highlight">
                        {activeMarket.flagship.spread}
                      </span>
                    </div>
                    <div className="flagship-stat">
                      <span className="stat-label">MAX LEVERAGE</span>
                      <span className="stat-val-highlight">
                        {activeMarket.flagship.leverage}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Popular Assets List */}
                <div className="popular-assets-table-wrap">
                  <table className="showroom-assets-table">
                    <thead>
                      <tr>
                        <th>Symbol</th>
                        <th>Bid Price</th>
                        <th>Ask Price</th>
                        <th>Spread</th>
                        <th>Max Leverage</th>
                      </tr>
                    </thead>
                    <tbody>
                      {activeMarket.stars.map((star, idx) => (
                        <tr key={idx}>
                          <td className="star-symbol">{star.symbol}</td>
                          <td className="star-price bid">
                            {getBidPrice(star.baseBid, star.decimals)}
                          </td>
                          <td className="star-price ask">
                            {getAskPrice(star.baseAsk, star.decimals)}
                          </td>
                          <td className="star-spread">{star.spread}</td>
                          <td className="star-leverage">{star.leverage}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Right Column: Premium SVG Live Chart Widget */}
              <div className="showroom-chart-pane">
                <div className="showroom-sub-panel-title">
                  Interactive Chart Terminal
                </div>

                <div className="chart-widget-container">
                  <div className="chart-widget-header">
                    <div className="chart-title-label">
                      <span className="chart-ticker-name">
                        {activeMarket.flagship.symbol}
                      </span>
                      <span className="chart-resolution">1H</span>
                      <span className="chart-indicator-pill">CANDLESTICKS</span>
                    </div>
                    <div className="chart-legend">
                      <span className="legend-item">
                        <span className="legend-dot bull" /> Bullish
                      </span>
                      <span className="legend-item">
                        <span className="legend-dot bear" /> Bearish
                      </span>
                    </div>
                  </div>

                  {/* SVG Candlestick Mockup */}
                  <div className="svg-chart-wrapper">
                    <svg
                      className="showroom-trading-chart"
                      width="100%"
                      height="100%"
                      viewBox="0 0 600 240"
                      preserveAspectRatio="none"
                    >
                      {/* Grid Lines */}
                      <line
                        x1="0"
                        y1="40"
                        x2="600"
                        y2="40"
                        stroke="rgba(255,255,255,0.03)"
                        strokeWidth="1"
                        strokeDasharray="4 4"
                      />
                      <line
                        x1="0"
                        y1="80"
                        x2="600"
                        y2="80"
                        stroke="rgba(255,255,255,0.03)"
                        strokeWidth="1"
                        strokeDasharray="4 4"
                      />
                      <line
                        x1="0"
                        y1="120"
                        x2="600"
                        y2="120"
                        stroke="rgba(255,255,255,0.03)"
                        strokeWidth="1"
                        strokeDasharray="4 4"
                      />
                      <line
                        x1="0"
                        y1="160"
                        x2="600"
                        y2="160"
                        stroke="rgba(255,255,255,0.03)"
                        strokeWidth="1"
                        strokeDasharray="4 4"
                      />
                      <line
                        x1="0"
                        y1="200"
                        x2="600"
                        y2="200"
                        stroke="rgba(255,255,255,0.03)"
                        strokeWidth="1"
                        strokeDasharray="4 4"
                      />

                      <line
                        x1="100"
                        y1="0"
                        x2="100"
                        y2="240"
                        stroke="rgba(255,255,255,0.02)"
                        strokeWidth="1"
                      />
                      <line
                        x1="200"
                        y1="0"
                        x2="200"
                        y2="240"
                        stroke="rgba(255,255,255,0.02)"
                        strokeWidth="1"
                      />
                      <line
                        x1="300"
                        y1="0"
                        x2="300"
                        y2="240"
                        stroke="rgba(255,255,255,0.02)"
                        strokeWidth="1"
                      />
                      <line
                        x1="400"
                        y1="0"
                        x2="400"
                        y2="240"
                        stroke="rgba(255,255,255,0.02)"
                        strokeWidth="1"
                      />
                      <line
                        x1="500"
                        y1="0"
                        x2="500"
                        y2="240"
                        stroke="rgba(255,255,255,0.02)"
                        strokeWidth="1"
                      />

                      {/* Spark Gradient Area underlay */}
                      <defs>
                        <linearGradient
                          id="chart-area-grad"
                          x1="0"
                          y1="0"
                          x2="0"
                          y2="1"
                        >
                          <stop
                            offset="0%"
                            stopColor={activeMarket.sparklineColor}
                            stopOpacity="0.15"
                          />
                          <stop
                            offset="100%"
                            stopColor={activeMarket.sparklineColor}
                            stopOpacity="0.0"
                          />
                        </linearGradient>
                      </defs>
                      <path
                        d={`${activeMarket.chartData.points} L 600 240 L 0 240 Z`}
                        fill="url(#chart-area-grad)"
                      />

                      {/* Trend Curve Line */}
                      <path
                        d={activeMarket.chartData.points}
                        fill="none"
                        stroke={activeMarket.sparklineColor}
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        opacity="0.85"
                      />

                      {/* Candlesticks overlay */}
                      {activeMarket.chartData.candles.map((candle, idx) => {
                        const isBull = candle.type === "bull";
                        const strokeColor = isBull
                          ? "rgba(0, 230, 118, 0.75)"
                          : "rgba(255, 23, 68, 0.75)";
                        const fillColor = isBull
                          ? "rgba(0, 230, 118, 0.25)"
                          : "rgba(255, 23, 68, 0.25)";
                        const width = 16;
                        const height = Math.abs(candle.close - candle.open);
                        const top = Math.min(candle.open, candle.close);

                        return (
                          <g key={idx}>
                            {/* Wick */}
                            <line
                              x1={candle.x}
                              y1={candle.low}
                              x2={candle.x}
                              y2={candle.high}
                              stroke={strokeColor}
                              strokeWidth="1.5"
                            />
                            {/* Body */}
                            <rect
                              x={candle.x - width / 2}
                              y={top}
                              width={width}
                              height={height}
                              fill={fillColor}
                              stroke={strokeColor}
                              strokeWidth="1.5"
                              rx="1.5"
                            />
                          </g>
                        );
                      })}

                      {/* Floating Indicator Price Badge */}
                      <g transform="translate(500, 48)">
                        <line
                          x1="-500"
                          y1="0"
                          x2="100"
                          y2="0"
                          stroke={activeMarket.sparklineColor}
                          strokeWidth="1"
                          strokeDasharray="3 3"
                          opacity="0.5"
                        />
                        <rect
                          x="35"
                          y="-12"
                          width="62"
                          height="24"
                          fill={activeMarket.sparklineColor}
                          rx="3"
                        />
                        <text
                          x="66"
                          y="4"
                          fill="#040813"
                          fontSize="10"
                          fontFamily="monospace"
                          fontWeight="bold"
                          textAnchor="middle"
                        >
                          {getBidPrice(
                            activeMarket.flagship.baseBid * 1.0001,
                            activeMarket.flagship.decimals -
                              (activeTab === "FX" ? 2 : 0),
                          )}
                        </text>
                      </g>
                    </svg>
                  </div>

                  {/* Chart footer detail */}
                  <div className="chart-widget-footer">
                    <span>
                      Precision quotes powered by ICEBERG Direct Routing™
                    </span>
                    <span>
                      Feed Latency:{" "}
                      <span className="feed-latency-ms">0.72ms</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Section Bottom: Key Advantages Grid */}
            <div className="showroom-advantages-section">
              <div className="showroom-sub-panel-title">
                Key Trading Advantages
              </div>

              <div className="advantages-cards-grid">
                {activeMarket.advantages.map((advantage, index) => (
                  <div key={index} className="showroom-advantage-card">
                    <div className="advantage-icon-row">
                      <span className="advantage-check-bullet">✓</span>
                      <h4 className="advantage-card-title">
                        {advantage.title}
                      </h4>
                    </div>
                    <p className="advantage-card-desc">{advantage.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
