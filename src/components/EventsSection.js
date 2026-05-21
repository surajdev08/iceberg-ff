"use client";

import Link from "next/link";

export default function EventsSection() {
  return (
    <section className="section events-page-section">
      <div className="container">
        
        {/* HERO SECTION */}
        <div className="section-intro text-center" style={{ marginBottom: "4rem" }}>
          <div className="hero-tag">
            <span className="tag-dot animate-pulse"></span>
            Events & Exhibitions
          </div>
          <h1 className="gradient-text" style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)", fontWeight: 800 }}>
            Meet Iceberg at Global Trading Events
          </h1>
          <p className="hero-subtitle" style={{ maxWidth: "800px", margin: "1.5rem auto 0", fontSize: "1.15rem", lineHeight: "1.8", color: "var(--text-secondary)" }}>
            Join us at leading financial conferences and exhibitions worldwide. Connect with our team, explore Iceberg&apos;s latest features, and discover how our platform can transform your trading operations.
          </p>
        </div>

        {/* STATIC STATUS VIEWPORT (NO TABS / NO PAST EVENTS) */}
        <div className="events-content-viewport" style={{ minHeight: "260px", marginBottom: "6rem" }}>
          {/* EMPTY STATE FOR UPCOMING EVENTS */}
          <div className="events-empty-state glass-panel frost-border text-center animate-fade-in">
            <div className="empty-state-icon-container">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="empty-calendar-svg">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                <line x1="16" y1="2" x2="16" y2="6" />
                <line x1="8" y1="2" x2="8" y2="6" />
                <line x1="3" y1="10" x2="21" y2="10" />
                <path d="M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01M16 18h.01" />
              </svg>
              <div className="empty-glow-spot"></div>
            </div>
            
            <h3 style={{ fontSize: "1.6rem", fontWeight: 700, margin: "1.5rem 0 0.8rem", color: "var(--text-primary)" }}>
              No Upcoming Events
            </h3>
            
            <p style={{ maxWidth: "520px", margin: "0 auto 2rem", color: "var(--text-secondary)", fontSize: "1rem", lineHeight: "1.6" }}>
              We don&apos;t have any scheduled events at the moment. Check back soon for updates on where you can meet us next!
            </p>
            
            <div className="empty-state-notify-box glass-panel compact" style={{ maxWidth: "420px", margin: "0 auto", padding: "1.2rem", background: "rgba(10, 15, 26, 0.25)" }}>
              <span style={{ fontSize: "0.85rem", color: "var(--text-muted)", display: "block", marginBottom: "0.8rem", fontWeight: 600 }}>
                🔔 BE THE FIRST TO KNOW ABOUT ICEBERG ROADSHOWS
              </span>
              <form 
                onSubmit={(e) => {
                  e.preventDefault();
                  alert("Subscription successful! We will notify you of upcoming expo announcements.");
                  e.target.reset();
                }} 
                style={{ display: "flex", gap: "0.5rem" }}
              >
                <input 
                  type="email" 
                  required 
                  placeholder="Enter corporate email" 
                  className="form-input" 
                  style={{ padding: "0.6rem 1rem", fontSize: "0.9rem", flex: 1, margin: 0 }}
                />
                <button type="submit" className="btn btn-primary btn-sm" style={{ padding: "0.6rem 1.2rem", margin: 0 }}>
                  Notify Me
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* BOTTOM DUAL CTA: GET STARTED TODAY */}
        <div className="events-footer-cta glass-panel frost-border text-center" style={{ overflow: "hidden", position: "relative", padding: "4rem 2rem", borderRadius: "16px", background: "linear-gradient(135deg, rgba(16, 22, 35, 0.4) 0%, rgba(8, 11, 20, 0.7) 100%)" }}>
          <div className="spotlight-overlay" style={{ background: "radial-gradient(circle at 50% 50%, rgba(0, 240, 255, 0.04) 0%, transparent 60%)" }}></div>
          
          <div style={{ position: "relative", zIndex: 2 }}>
            <div className="hero-tag compact" style={{ display: "inline-flex" }}>
              <span className="tag-dot"></span>
              Get Started Today
            </div>
            
            <h2 className="gradient-text" style={{ fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 800, margin: "1.2rem 0", letterSpacing: "-0.02em" }}>
              Let&apos;s talk growth for your FX/CFD brokerage
            </h2>
            
            <p style={{ maxWidth: "820px", margin: "0 auto 2.5rem", fontSize: "1.1rem", lineHeight: "1.8", color: "var(--text-secondary)" }}>
              Iceberg is a global provider of premium trading platforms and advanced solutions that accelerate forex businesses. We have built a robust ecosystem with years of expertise that empowers brokers and prop firms to scale and thrive in the competitive trading landscape.
            </p>
            
            <Link href="/contact?purpose=demo" className="btn btn-primary btn-lg" style={{ padding: "1.2rem 3rem", display: "inline-flex" }}>
              <span className="btn-glow-effect"></span>
              Get Demo
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
