export default function TechStack() {
  return (
    <section className="section tech-stack-section" id="technology">
      <div className="container">
        <div className="section-intro">
          <h2>Powered by Industry-Leading Technologies</h2>
          <p>Our robust tech stack ensures scalability, reliability, and cutting-edge performance for institutional-grade trading platforms.</p>
        </div>

        <div className="grid tech-grid">
          
          {/* Technology Selector Cards Grid */}
          <div className="tech-cards-container">
            <div className="tech-card glass-panel frost-border active" data-tech="python">
              <div className="tech-icon-box">
                <svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/></svg>
              </div>
              <h3>Python Core</h3>
              <p>High-performance backend services and algorithmic trading engines powered by Python&apos;s robust ecosystem.</p>
            </div>

            <div className="tech-card glass-panel frost-border" data-tech="angular">
              <div className="tech-icon-box">
                <svg viewBox="0 0 24 24"><path d="M12 2L2 7l10 5 10-5-10-5zm0 10L2 17l10 5 10-5-10-5z"/></svg>
              </div>
              <h3>Angular UI</h3>
              <p>Modern, responsive trading interfaces built with Angular for seamless user experience and real-time data visualization.</p>
            </div>

            <div className="tech-card glass-panel frost-border" data-tech="aurora">
              <div className="tech-icon-box">
                <svg viewBox="0 0 24 24"><path d="M12 2c5.52 0 10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2zm1 10h3l-4-4-4 4h3v4h2v-4z"/></svg>
              </div>
              <h3>AWS Aurora</h3>
              <p>Enterprise-grade database performance with Aurora&apos;s MySQL and PostgreSQL compatibility for mission-critical data.</p>
            </div>

            <div className="tech-card glass-panel frost-border" data-tech="rabbitmq">
              <div className="tech-icon-box">
                <svg viewBox="0 0 24 24"><path d="M4 15h16v-2H4v2zm0 4h16v-2H4v2zm0-8h16V9H4v2zm0-6v2h16V5H4z"/></svg>
              </div>
              <h3>RabbitMQ Broker</h3>
              <p>Reliable message queuing for high-frequency trading operations and real-time market data distribution.</p>
            </div>

            <div className="tech-card glass-panel frost-border" data-tech="redis">
              <div className="tech-icon-box">
                <svg viewBox="0 0 24 24"><path d="M12 2c5.52 0 10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2zm1 10V7h-2v5H7v2h4v5h2v-5h4v-2h-4z"/></svg>
              </div>
              <h3>Redis Cache</h3>
              <p>Ultra-fast in-memory caching and session management for sub-millisecond data access and trading execution.</p>
            </div>

            <div className="tech-card glass-panel frost-border" data-tech="kubernetes">
              <div className="tech-icon-box">
                <svg viewBox="0 0 24 24"><path d="M12 2L2 7l10 5 10-5-10-5zm0 10L2 17l10 5 10-5-10-5z"/></svg>
              </div>
              <h3>Kubernetes Grid</h3>
              <p>Scalable container orchestration ensuring high availability and seamless deployment of trading infrastructure.</p>
            </div>
          </div>

          {/* Dynamic Details Output Display Panel */}
          <div className="tech-detail-panel glass-panel frost-border">
            <div className="tech-detail-header">
              <div className="tech-detail-icon" id="tech-detail-icon">
                <svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/></svg>
              </div>
              <div className="tech-detail-title">
                <span id="tech-detail-sub">Algorithmic Engines & Analytics</span>
                <h3 id="tech-detail-title-text">Python Core</h3>
              </div>
            </div>
            <div className="tech-detail-body">
              <p id="tech-detail-desc">Our high-performance core uses optimized Cython and native multi-threading algorithms to process immense sets of real-time financial matrices. Built directly for institutional traders requiring sub-millisecond mathematical analysis and custom strategy integrations.</p>
              
              <div className="tech-metrics-list">
                <div className="tech-metric-row">
                  <span className="tech-metric-name">PROCESSING SPEED</span>
                  <span className="tech-metric-val cyan" id="m-latency">&lt; 0.45ms Processing</span>
                </div>
                <div className="tech-metric-row">
                  <span className="tech-metric-name">TRANSACTION CAPACITY</span>
                  <span className="tech-metric-val" id="m-capacity">500,000 strategy loops/sec</span>
                </div>
                <div className="tech-metric-row">
                  <span className="tech-metric-name">SYSTEM ISOLATION</span>
                  <span className="tech-metric-val" id="m-security">Isolated Sandbox Environments</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
