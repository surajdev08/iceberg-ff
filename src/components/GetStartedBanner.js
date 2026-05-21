import Link from "next/link";

export default function GetStartedBanner() {
  return (
    <section className="section get-started-section" id="get-started">
      <div className="container">
        <div className="get-started-banner glass-panel frost-border">
          {/* Decorative Dashed High-Tech Circles in the background */}
          <div className="get-started-decorations">
            <div className="decor-circle decor-circle-1"></div>
            <div className="decor-circle decor-circle-2"></div>
          </div>

          {/* Left Block - Text Content */}
          <div className="get-started-content">
            <div className="get-started-tag">
              <span className="tag-pulse"></span>
              Join the Vanguard
            </div>
            <h2>Elevate Your Brokerage to the Institutional Tier</h2>
            <p>
              Deploy next-generation multi-asset trading terminals, sub-millisecond liquidity routing grids, and automated risk managers. Engineered directly for modern prop firms, prime brokers, and professional trader communities.
            </p>
          </div>

          {/* Right Block - Actions */}
          <div className="get-started-actions">
            <Link href="/contact" className="btn btn-primary">
              Request Instant Demo
            </Link>
            <Link href="/download" className="btn btn-secondary">
              Download Platforms
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
