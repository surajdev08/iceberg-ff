"use client";

import { useState, useEffect, useRef } from "react";

const sandboxAssets = {
  FX: { name: 'EUR/USD (Euro / US Dollar)', category: 'Currency Pair', basePrice: 1.08451, spread: '0.3 pips', spreadOffset: 0.00003, decimals: 5, icon: '💱' },
  STOCKS: { name: 'AAPL (Apple Inc. Stock CFD)', category: 'Equities CFD', basePrice: 189.84, spread: '$0.02', spreadOffset: 0.02, decimals: 2, icon: '📈' },
  COMMODITIES: { name: 'WTI CRUDE (WTI Crude Oil)', category: 'Energies Futures', basePrice: 79.42, spread: '$0.03', spreadOffset: 0.03, decimals: 2, icon: '🔥' },
  INDICES: { name: 'SPX500 (S&P 500 Index)', category: 'Index CFD', basePrice: 5304.50, spread: '0.5 pts', spreadOffset: 0.50, decimals: 2, icon: '📊' },
  CRYPTO: { name: 'BTC/USD (Bitcoin)', category: 'Cryptocurrency', basePrice: 67240.25, spread: '$1.50', spreadOffset: 1.50, decimals: 2, icon: '🪙' },
  STOCKCFD: { name: 'TSLA (Tesla Inc. Stock CFD)', category: 'Equities CFD', basePrice: 174.95, spread: '$0.05', spreadOffset: 0.05, decimals: 2, icon: '🏢' },
  METALS: { name: 'XAU/USD (Gold Spot)', category: 'Precious Metals', basePrice: 2418.60, spread: '$0.15', spreadOffset: 0.15, decimals: 2, icon: '🏆' },
  TRADECFD: { name: 'ICE/USD (Iceberg HQ Premium Index)', category: 'Custom Fintech Index', basePrice: 1000.00, spread: '0.1 pts', spreadOffset: 0.10, decimals: 2, icon: '🚀' }
};

export default function MarketsPlayground() {
  const [activeAssetKey, setActiveAssetKey] = useState("FX");
  const [prices, setPrices] = useState(() => {
    const initial = {};
    Object.entries(sandboxAssets).forEach(([key, asset]) => {
      initial[key] = asset.basePrice;
    });
    return initial;
  });
  const [priceTickDirection, setPriceTickDirection] = useState(null); // "up" | "down" | null
  const [leverage, setLeverage] = useState(100);
  const [volume, setVolume] = useState(1.0);
  
  // Format Helper for current time
  const formatTime = () => {
    const now = new Date();
    return now.toTimeString().split(" ")[0];
  };

  const [logs, setLogs] = useState([
    { text: "&gt; ICEBERG MATCHING ENGINE INITIALIZED...", type: "init" },
    { text: "&gt; Awaiting order parameters... Select asset and click BUY or SELL.", type: "init" }
  ]);

  const logRef = useRef(null);

  // Auto-scroll terminal log to bottom on updates
  useEffect(() => {
    if (logRef.current) {
      logRef.current.scrollTop = logRef.current.scrollHeight;
    }
  }, [logs]);

  // Log asset switch
  const handleAssetChange = (key) => {
    if (key === activeAssetKey) return;
    setActiveAssetKey(key);
    const asset = sandboxAssets[key];
    
    // Reset specific prices on tab change to avoid massive deviations
    setPrices(prev => ({
      ...prev,
      [key]: asset.basePrice
    }));

    setLogs(prev => [
      ...prev,
      {
        text: `&gt; [${formatTime()}] SWITCHED ASSET: Loaded ${asset.name} feeds.`,
        type: "init"
      }
    ]);
  };

  // Continuous price fluctuation for active asset
  useEffect(() => {
    const interval = setInterval(() => {
      const changePercent = (Math.random() - 0.5) * 0.0006;
      
      setPrices(prev => {
        const currentPrice = prev[activeAssetKey];
        const newPrice = currentPrice + currentPrice * changePercent;
        return {
          ...prev,
          [activeAssetKey]: newPrice
        };
      });

      const direction = changePercent > 0 ? "up" : "down";
      setPriceTickDirection(direction);
    }, 900);

    return () => clearInterval(interval);
  }, [activeAssetKey]);

  // Clear flash transition styling after 400ms
  useEffect(() => {
    if (priceTickDirection) {
      const timer = setTimeout(() => setPriceTickDirection(null), 400);
      return () => clearTimeout(timer);
    }
  }, [priceTickDirection]);

  // Simulated trade execution workflow
  const executeSimulatedTrade = (type) => {
    const asset = sandboxAssets[activeAssetKey];
    const currentBasePrice = prices[activeAssetKey];
    const rate = type === "BUY" ? currentBasePrice + asset.spreadOffset : currentBasePrice;
    const orderVol = parseFloat(volume).toFixed(2);
    
    // Phase 1: Request Placement Log
    const newLog1 = {
      text: `&gt; [${formatTime()}] PLACING ${type} ORDER: ${orderVol} Lots ${activeAssetKey} @ ${rate.toFixed(asset.decimals)} (Leverage 1:${leverage})`,
      type: "process"
    };

    setLogs(prev => [...prev, newLog1]);

    // Phase 2: Routing Log after 250ms
    setTimeout(() => {
      setLogs(prev => [
        ...prev,
        {
          text: `&gt; [${formatTime()}] ROUTING: Seeking execution path through Prime Liquidity Pool...`,
          type: "process"
        }
      ]);
    }, 250);

    // Phase 3: Fill Execution Success Log after 550ms
    setTimeout(() => {
      setLogs(prev => [
        ...prev,
        {
          text: `&gt; [${formatTime()}] SUCCESS: Filled ${orderVol} Lots ${activeAssetKey} @ ${rate.toFixed(asset.decimals)} in <span class="cyan">0.72ms</span>. Slipped 0.00 pips.`,
          type: "success"
        }
      ]);
    }, 550);
  };

  const activeAsset = sandboxAssets[activeAssetKey];
  const sellPrice = prices[activeAssetKey];
  const buyPrice = sellPrice + activeAsset.spreadOffset;

  return (
    <section className="section markets-playground-section" id="markets">
      <div className="container">
        <div className="section-intro">
          <h2>A Platform for Every Market</h2>
          <p>Trade everything in one place: FX, crypto, stocks, commodities, indices, and more with ICEBERG&apos;s unified trading platform. Experience instant mock trade executions.</p>
        </div>

        <div className="markets-playground glass-panel frost-border">
          {/* Left-side Asset Tabs */}
          <div className="markets-tabs">
            {Object.entries(sandboxAssets).map(([key, asset]) => {
              let label = key.charAt(0) + key.slice(1).toLowerCase();
              if (key === "CRYPTO") label = "Cryptocurrencies";
              if (key === "STOCKCFD") label = "Stock CFDs";
              if (key === "TRADECFD") label = "Trade CFDs";

              return (
                <button
                  key={key}
                  className={`market-tab-btn ${activeAssetKey === key ? "active" : ""}`}
                  onClick={() => handleAssetChange(key)}
                  type="button"
                >
                  <span>{asset.icon}</span> {label}
                </button>
              );
            })}
          </div>

          {/* Right-side Trade Execution Panel */}
          <div className="market-execution-sandbox">
            <div className="sandbox-display-header">
              <div className="asset-title-group">
                <span className="sandbox-asset-icon">{activeAsset.icon}</span>
                <div>
                  <h3 id="sandbox-asset-name">{activeAsset.name}</h3>
                  <span className="sandbox-asset-category" id="sandbox-asset-cat">{activeAsset.category}</span>
                </div>
              </div>
              <div className="sandbox-spread-badge">
                SPREAD: <span id="sandbox-spread-val">{activeAsset.spread}</span>
              </div>
            </div>

            {/* Pricing Box Grid */}
            <div className="sandbox-pricing-grid">
              <div className={`sandbox-price-box sell ${priceTickDirection === "down" ? "tick-down" : ""}`}>
                <span className="price-box-label">SELL RATE</span>
                <h4 id="sandbox-sell-rate">{sellPrice.toFixed(activeAsset.decimals)}</h4>
                <p>Fluctuating live</p>
              </div>
              <div className={`sandbox-price-box buy ${priceTickDirection === "up" ? "tick-up" : ""}`}>
                <span className="price-box-label">BUY RATE</span>
                <h4 id="sandbox-buy-rate">{buyPrice.toFixed(activeAsset.decimals)}</h4>
                <p>Fluctuating live</p>
              </div>
            </div>

            {/* Controller Sliders */}
            <div className="sandbox-controls">
              <div className="control-group">
                <label className="control-label">
                  Leverage Multiplier: <span id="sandbox-leverage-text">1:{leverage}</span>
                </label>
                <input
                  type="range"
                  className="sandbox-range"
                  id="sandbox-leverage-slider"
                  min="10"
                  max="500"
                  step="10"
                  value={leverage}
                  onChange={(e) => setLeverage(parseInt(e.target.value))}
                />
              </div>
              <div className="control-group">
                <label className="control-label">
                  Order Volume (Lots): <span id="sandbox-volume-text">{volume.toFixed(2)}</span>
                </label>
                <input
                  type="range"
                  className="sandbox-range"
                  id="sandbox-volume-slider"
                  min="0.1"
                  max="10.0"
                  step="0.1"
                  value={volume}
                  onChange={(e) => setVolume(parseFloat(e.target.value))}
                />
              </div>
            </div>

            {/* Instant Actions */}
            <div className="sandbox-actions">
              <button
                className="btn btn-secondary btn-sandbox-trigger sell"
                id="btn-sandbox-sell"
                type="button"
                onClick={() => executeSimulatedTrade("SELL")}
              >
                PLACE SELL ORDER
              </button>
              <button
                className="btn btn-primary btn-sandbox-trigger buy"
                id="btn-sandbox-buy"
                type="button"
                onClick={() => executeSimulatedTrade("BUY")}
              >
                PLACE BUY ORDER
              </button>
            </div>

            {/* Live Terminal log window */}
            <div className="sandbox-terminal-log" id="sandbox-terminal-log" ref={logRef}>
              {logs.map((log, index) => (
                <div
                  key={index}
                  className={`terminal-log-line ${log.type}`}
                  dangerouslySetInnerHTML={{ __html: log.text }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
