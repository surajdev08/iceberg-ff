export default function MobileSection() {
  return (
    <section className="section mobile-section" id="mobile">
      <div className="container grid mobile-grid">
        
        {/* Elegant Smartphone Canvas Simulator Mockup */}
        <div className="phone-mockup-wrapper">
          <div className="phone-mockup">
            <div className="phone-notch"></div>
            <div className="phone-screen">
              <div className="phone-header">
                <span>ICEBERG MOBILE</span>
                <span className="phone-logo">ICE</span>
              </div>
              
              {/* Smartphone Dynamic Canvas Chart */}
              <div className="phone-chart-widget">
                <div className="phone-chart-meta">
                  <span className="phone-symbol">EUR/USD</span>
                  <span className="phone-price" id="phone-price-val">1.08451</span>
                </div>
                <div className="phone-chart-visual">
                  <canvas id="phone-canvas"></canvas>
                </div>
              </div>

              <div className="phone-actions">
                <button className="phone-btn buy">BUY ORDER</button>
                <button className="phone-btn sell">SELL ORDER</button>
              </div>
            </div>
          </div>
        </div>

        {/* Details list */}
        <div className="mobile-details">
          <div className="hero-tag">
            <span className="tag-dot"></span>
            Seamless Mobility
          </div>
          <h2>Markets in your Pocket</h2>
          <p style={{ marginBottom: '3rem' }}>ICEBERG&apos;s mobile-first interface ensures direct access to order matching and trading analytics, wherever you go.</p>

          <div className="mobile-features-list">
            <div className="mobile-feature-item">
              <div className="m-feat-icon-box">
                <svg viewBox="0 0 24 24"><path d="M17 1.01L7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 19H7V5h10v14z"/></svg>
              </div>
              <div className="m-feat-text">
                <h3>Native Mobile Experience</h3>
                <p>Optimized for iOS and Android with intuitive touch controls and seamless navigation designed for professional traders on the go.</p>
              </div>
            </div>

            <div className="mobile-feature-item">
              <div className="m-feat-icon-box">
                <svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg>
              </div>
              <div className="m-feat-text">
                <h3>Real-Time Market Data</h3>
                <p>Live quotes, advanced charts, and instant order execution with the same speed and reliability as our desktop platform.</p>
              </div>
            </div>

            <div className="mobile-feature-item">
              <div className="m-feat-icon-box">
                <svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/></svg>
              </div>
              <div className="m-feat-text">
                <h3>Bank-Grade Security</h3>
                <p>Biometric authentication, encrypted data transmission, and secure account management protect your trading capital 24/7.</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
