export default function CoreStats() {
  return (
    <section className="section latency-stats-section">
      <div className="container">
        <div className="grid stats-grid">
          
          <div className="stat-card glass-panel frost-border">
            <div className="stat-num">46+</div>
            <div className="stat-label">Team Members</div>
            <div className="stat-description">Building advanced platform tools and API nodes round the clock.</div>
          </div>

          <div className="stat-card glass-panel frost-border">
            <div className="stat-num">0.72ms</div>
            <div className="stat-label">Average Execution Time</div>
            <div className="stat-description">Lightning speed matching engines connecting directly to prime brokers.</div>
          </div>

          <div className="stat-card glass-panel frost-border">
            <div className="stat-num">1,000+</div>
            <div className="stat-label">Active Instruments</div>
            <div className="stat-description">Multi-asset catalog including major FX, Crypto, Metals, Indices.</div>
          </div>

          <div className="stat-card glass-panel frost-border">
            <div className="stat-num">99.99%</div>
            <div className="stat-label">Server Uptime</div>
            <div className="stat-description">Redundant nodes distributed globally ensuring zero service cuts.</div>
          </div>

        </div>
      </div>
    </section>
  );
}
