export default function Contact() {
  return (
    <section className="section contact-section" id="contact">
      <div className="container grid contact-grid">
        
        {/* Info panel */}
        <div className="contact-info-panel">
          <div className="hero-tag">
            <span className="tag-dot"></span>
            Connect with Experts
          </div>
          <h2>Scale your Brokerage or Prop Firm today</h2>
          <p>Schedule a live 1-on-1 demonstration with our engineering specialists. Let us show you how the ICEBERG ecosystem can optimize your operational margins and execution flows.</p>
          
          <div className="contact-details">
            <div className="contact-detail-card">
              <div className="c-detail-icon">
                <svg viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
              </div>
              <div className="c-detail-text">
                <span>direct operations email</span>
                <p>solutions@iceberghq.com</p>
              </div>
            </div>

            <div className="contact-detail-card" style={{ alignItems: "flex-start" }}>
              <div className="c-detail-icon" style={{ marginTop: "4px" }}>
                <svg viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
              </div>
              <div className="c-detail-text">
                <span>Location</span>
                <p style={{ lineHeight: "1.6" }}>
                  Iceberg Global Information Technology LLC
                  <br />
                  <br />
                  Suite 2907 / 2908
                  <br />
                  Floor 29
                  <br />
                  Iris Bay Tower - Business Bay,
                  <br />
                  Dubai, UAE
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Lead Form */}
        <div className="contact-form-panel glass-panel frost-border">
          <form id="iceberg-contact-form">
            <div className="form-group">
              <label className="form-label" htmlFor="c-name">Full Name</label>
              <input type="text" id="c-name" className="form-input" placeholder="e.g., Alex Carter" required />
            </div>
            
            <div className="form-group">
              <label className="form-label" htmlFor="c-email">Business Email</label>
              <input type="email" id="c-email" className="form-input" placeholder="e.g., alex@firmname.com" required />
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="c-firm">Company Name</label>
              <input type="text" id="c-firm" className="form-input" placeholder="e.g., Carter Prop Solutions" required />
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="c-msg">Brokerage Requirements / Project Scope</label>
              <textarea id="c-msg" className="form-input" placeholder="Outline your active assets, target client size, or white-label goals..." required></textarea>
            </div>

            <button type="submit" className="btn btn-primary form-submit-btn">REQUEST ACCESS DEMO</button>
            <div className="form-feedback" id="contact-form-feedback"></div>
          </form>
        </div>

      </div>
    </section>
  );
}
