export default function Faq() {
  return (
    <section className="section faq-section" id="faq">
      <div className="container">
        <div className="section-intro">
          <h2>Frequently Asked Questions</h2>
          <p>Answers to the most frequently asked questions about ICEBERG platform and services.</p>
        </div>

        <div className="faq-container">
          
          <div className="faq-item glass-panel frost-border active">
            <button className="faq-trigger">
              <h3>What makes ICEBERG different from other trading platforms?</h3>
              <span className="faq-icon">
                <svg viewBox="0 0 24 24"><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/></svg>
              </span>
            </button>
            <div className="faq-content" style={{ maxHeight: '200px' }}>
              <div className="faq-content-inner">
                ICEBERG offers institutional-grade technology with ultra-low latency execution, advanced risk management, white-label solutions for brokers, and comprehensive API integration. Our platform is built specifically for professional trading environments.
              </div>
            </div>
          </div>

          <div className="faq-item glass-panel frost-border">
            <button className="faq-trigger">
              <h3>How quickly can I implement ICEBERG for my brokerage?</h3>
              <span className="faq-icon">
                <svg viewBox="0 0 24 24"><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/></svg>
              </span>
            </button>
            <div className="faq-content">
              <div className="faq-content-inner">
                A standard deployment, including brand compilations, server configurations across AWS global zones, and standard CRM links can be fully completed in under 7 business days depending on client configuration scopes.
              </div>
            </div>
          </div>

          <div className="faq-item glass-panel frost-border">
            <button className="faq-trigger">
              <h3>What support do you provide during and after implementation?</h3>
              <span className="faq-icon">
                <svg viewBox="0 0 24 24"><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/></svg>
              </span>
            </button>
            <div className="faq-content">
              <div className="faq-content-inner">
                We provide complete 24/7/365 active technical surveillance. You will be assigned a dedicated engineering team, accessible directly via Slack, Telegram, and hot-line channels to handle all server upgrades, bridge queries, or maintenance operations.
              </div>
            </div>
          </div>

          <div className="faq-item glass-panel frost-border">
            <button className="faq-trigger">
              <h3>Is ICEBERG suitable for both forex brokers and prop firms?</h3>
              <span className="faq-icon">
                <svg viewBox="0 0 24 24"><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/></svg>
              </span>
            </button>
            <div className="faq-content">
              <div className="faq-content-inner">
                Yes, absolutely. ICEBERG has native prop firm and white-label broker tools built directly into its core engine. You can enforce step-1/step-2 rules, set daily/total drawdown stopouts, define leverage restrictions, and audit strategy compliance without purchasing external plugins.
              </div>
            </div>
          </div>

          <div className="faq-item glass-panel frost-border">
            <button className="faq-trigger">
              <h3>Can I customize the platform with my company branding?</h3>
              <span className="faq-icon">
                <svg viewBox="0 0 24 24"><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/></svg>
              </span>
            </button>
            <div className="faq-content">
              <div className="faq-content-inner">
                Yes, completely. Our white-label license allows 100% brand personalization, enabling you to deploy custom logos, fonts, active web domains, color palettes, and styled client cabinets without any back-channel restrictions.
              </div>
            </div>
          </div>

          <div className="faq-item glass-panel frost-border">
            <button className="faq-trigger">
              <h3>What are the technical requirements for ICEBERG?</h3>
              <span className="faq-icon">
                <svg viewBox="0 0 24 24"><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/></svg>
              </span>
            </button>
            <div className="faq-content">
              <div className="faq-content-inner">
                ICEBERG is designed as a cloud-native platform. Client interfaces are built on optimized HTML5 frameworks requiring no local installs. Broker nodes operate on secure global AWS container instances matching deep ledger infrastructure limits.
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
