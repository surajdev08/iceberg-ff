export default function MarketsPlayground() {
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
            <button className="market-tab-btn active" data-asset="FX">
              <span>💱</span> FX
            </button>
            <button className="market-tab-btn" data-asset="STOCKS">
              <span>📈</span> Stocks
            </button>
            <button className="market-tab-btn" data-asset="COMMODITIES">
              <span>🔥</span> Commodities
            </button>
            <button className="market-tab-btn" data-asset="INDICES">
              <span>📊</span> Indices
            </button>
            <button className="market-tab-btn" data-asset="CRYPTO">
              <span>🪙</span> Cryptocurrencies
            </button>
            <button className="market-tab-btn" data-asset="STOCKCFD">
              <span>🏢</span> Stock CFDs
            </button>
            <button className="market-tab-btn" data-asset="METALS">
              <span>🏆</span> Metals
            </button>
            <button className="market-tab-btn" data-asset="TRADECFD">
              <span>🚀</span> Trade CFDs
            </button>
          </div>

          {/* Right-side Trade Execution Panel */}
          <div className="market-execution-sandbox">
            <div className="sandbox-display-header">
              <div className="asset-title-group">
                <span className="sandbox-asset-icon">💱</span>
                <div>
                  <h3 id="sandbox-asset-name">EUR/USD (Euro / US Dollar)</h3>
                  <span className="sandbox-asset-category" id="sandbox-asset-cat">Currency Pair</span>
                </div>
              </div>
              <div className="sandbox-spread-badge">
                SPREAD: <span id="sandbox-spread-val">0.3 pips</span>
              </div>
            </div>

            {/* Pricing Box Grid */}
            <div className="sandbox-pricing-grid">
              <div className="sandbox-price-box sell">
                <span className="price-box-label">SELL RATE</span>
                <h4 id="sandbox-sell-rate">1.08448</h4>
                <p>Fluctuating live</p>
              </div>
              <div className="sandbox-price-box buy">
                <span className="price-box-label">BUY RATE</span>
                <h4 id="sandbox-buy-rate">1.08451</h4>
                <p>Fluctuating live</p>
              </div>
            </div>

            {/* Controller Sliders */}
            <div className="sandbox-controls">
              <div className="control-group">
                <label className="control-label">Leverage Multiplier: <span id="sandbox-leverage-text">1:100</span></label>
                <input type="range" className="sandbox-range" id="sandbox-leverage-slider" min="10" max="500" step="10" defaultValue="100" />
              </div>
              <div className="control-group">
                <label className="control-label">Order Volume (Lots): <span id="sandbox-volume-text">1.00</span></label>
                <input type="range" className="sandbox-range" id="sandbox-volume-slider" min="0.1" max="10.0" step="0.1" defaultValue="1.0" />
              </div>
            </div>

            {/* Instant Actions */}
            <div className="sandbox-actions">
              <button className="btn btn-secondary btn-sandbox-trigger sell" id="btn-sandbox-sell">PLACE SELL ORDER</button>
              <button className="btn btn-primary btn-sandbox-trigger buy" id="btn-sandbox-buy">PLACE BUY ORDER</button>
            </div>

            {/* Live Terminal log window */}
            <div className="sandbox-terminal-log" id="sandbox-terminal-log">
              <div className="terminal-log-line init">&gt; ICEBERG MATCHING ENGINE INITIALIZED...</div>
              <div className="terminal-log-line init">&gt; Awaiting order parameters... Select asset and click BUY or SELL.</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
