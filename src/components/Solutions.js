export default function Solutions() {
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
            <button className="solutions-menu-btn active" data-slide="analytics">
              <span className="solutions-btn-num">01</span>
              <div className="solutions-btn-info">
                <h3>Trading Analytics</h3>
                <p>Advanced trading analytics and real-time market data visualization for informed decision making.</p>
              </div>
            </button>

            <button className="solutions-menu-btn" data-slide="risk">
              <span className="solutions-btn-num">02</span>
              <div className="solutions-btn-info">
                <h3>Risk Management</h3>
                <p>Comprehensive risk management tools with real-time monitoring and automated controls.</p>
              </div>
            </button>

            <button className="solutions-menu-btn" data-slide="liquidity">
              <span className="solutions-btn-num">03</span>
              <div className="solutions-btn-info">
                <h3>Liquidity Pools</h3>
                <p>Deep liquidity pools with competitive spreads ensuring optimal execution for all order sizes.</p>
              </div>
            </button>

            <button className="solutions-menu-btn" data-slide="fix-api">
              <span className="solutions-btn-num">04</span>
              <div className="solutions-btn-info">
                <h3>FIX API Integration</h3>
                <p>Professional FIX API integration with ultra-low latency connectivity for institutional trading.</p>
              </div>
            </button>
          </div>

          {/* Display Showcase Panel */}
          <div className="solutions-display-panel glass-panel frost-border">
            
            {/* Slide 1: Analytics */}
            <div className="solutions-display-card active" data-card="analytics">
              <div className="solutions-card-bg" style={{ backgroundImage: 'radial-gradient(circle at center, #0077b6 0%, #030712 100%)' }}></div>
              <div className="solutions-card-overlay"></div>
              <div className="solutions-card-content">
                <span className="solutions-card-tag">Advanced Telemetry</span>
                <h3>High-Fidelity Trading Analytics</h3>
                <p>Access advanced client-side technical charting suites. Render complex moving averages, drawing layers, and indicators. Track client profitability and volume patterns instantly from a secure administrator backoffice panel.</p>
                <a href="#contact" className="btn btn-primary btn-sm">Explore Analytics Demo</a>
              </div>
            </div>

            {/* Slide 2: Risk */}
            <div className="solutions-display-card" data-card="risk">
              <div className="solutions-card-bg" style={{ backgroundImage: 'radial-gradient(circle at center, #ff1744 0%, #030712 100%)' }}></div>
              <div className="solutions-card-overlay"></div>
              <div className="solutions-card-content">
                <span className="solutions-card-tag">Equity Protection</span>
                <h3>Automated Risk Management</h3>
                <p>Perfect for Prop Firms seeking reliable rule enforcements. Control client drawdowns, automate stop-out thresholds, adjust live leverages across accounts, and prevent latency arbitrage instantly using multi-level algorithmic defense guards.</p>
                <a href="#contact" className="btn btn-primary btn-sm">Verify Risk Protocols</a>
              </div>
            </div>

            {/* Slide 3: Liquidity */}
            <div className="solutions-display-card" data-card="liquidity">
              <div className="solutions-card-bg" style={{ backgroundImage: 'radial-gradient(circle at center, #00b4d8 0%, #030712 100%)' }}></div>
              <div className="solutions-card-overlay"></div>
              <div className="solutions-card-content">
                <span className="solutions-card-tag">Tier-1 Feeds</span>
                <h3>Aggregated Liquidity Pools</h3>
                <p>Connect your custom platform to the deepest market pools. Rest easy under heavy volumes with tight institutional spreads, instant matching routes, and custom clearance lanes with key prime brokers worldwide.</p>
                <a href="#contact" className="btn btn-primary btn-sm">Request Liquidity Spreads</a>
              </div>
            </div>

            {/* Slide 4: FIX API */}
            <div className="solutions-display-card" data-card="fix-api">
              <div className="solutions-card-bg" style={{ backgroundImage: 'radial-gradient(circle at center, #030712 0%, #050c18 100%)' }}></div>
              <div className="solutions-card-overlay"></div>
              <div className="solutions-card-content">
                <span className="solutions-card-tag">Institutional Bridge</span>
                <h3>FIX / REST API Interconnections</h3>
                <p>Provide professional algorithmic systems with direct programmatic gateways. Iceberg REST and FIX APIs deliver lightning fast updates and instant order submission pathways under sub-10 millisecond roundtrip times.</p>
                <a href="#contact" className="btn btn-primary btn-sm">Review API Manual</a>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
