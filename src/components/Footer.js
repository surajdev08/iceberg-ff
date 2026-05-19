import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <Link href="/" className="logo">
              <svg className="logo-icon" viewBox="0 0 100 100">
                <polygon
                  points="50,10 85,85 15,85"
                  stroke="var(--primary-cyan)"
                  strokeWidth="6"
                  fill="rgba(0, 240, 255, 0.1)"
                />
                <line
                  x1="15"
                  y1="90"
                  x2="85"
                  y2="90"
                  stroke="var(--primary-cyan)"
                  strokeWidth="4"
                />
              </svg>
              <span>ICEBERG</span>
            </Link>
            <p>
              Iceberg HQ is a premier global provider of next-generation
              institutional trading terminals and high-frequency white-label
              brokerage solutions.
            </p>
            <div className="footer-socials">
              <a href="#" className="footer-social-link" aria-label="LinkedIn">
                <svg viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                </svg>
              </a>
              <a href="#" className="footer-social-link" aria-label="Twitter">
                <svg viewBox="0 0 24 24">
                  <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.54v.05c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.52 8.52 0 0 1-5.3 1.83A9 9 0 0 1 2 19.57 12.1 12.1 0 0 0 6.56 21c7.88 0 12.2-6.53 12.2-12.2 0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z" />
                </svg>
              </a>
              <a href="#" className="footer-social-link" aria-label="GitHub">
                <svg viewBox="0 0 24 24">
                  <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z" />
                </svg>
              </a>
            </div>
          </div>

          <div className="footer-links-col">
            <h4>Platform Solutions</h4>
            <ul className="footer-links-list">
              <li>
                <Link href="/solutions">White Label Brokerage</Link>
              </li>
              <li>
                <Link href="/solutions">Prop Firm Core Engine</Link>
              </li>
              <li>
                <Link href="/solutions">Aggregated Liquidity</Link>
              </li>
              <li>
                <Link href="/solutions">FIX / REST API Access</Link>
              </li>
              <li>
                <Link href="/partners">CRM Ledger Nodes</Link>
              </li>
            </ul>
          </div>

          <div className="footer-links-col">
            <h4>Resources</h4>
            <ul className="footer-links-list">
              <li>
                <Link href="/comparison">Platform Comparison</Link>
              </li>
              <li>
                <Link href="/partners">System Architecture</Link>
              </li>
              <li>
                <Link href="/events">Integration Roadmap</Link>
              </li>
              <li>
                <Link href="/about">Technical FAQ</Link>
              </li>
              <li>
                <Link href="/contact">Lead Consultations</Link>
              </li>
            </ul>
          </div>

          <div className="footer-links-col">
            <h4>Legal Compliances</h4>
            <ul className="footer-links-list">
              <li>
                <Link href="#">Terms of License</Link>
              </li>
              <li>
                <Link href="#">Privacy Protocols</Link>
              </li>
              <li>
                <Link href="#">Cookie Policies</Link>
              </li>
              <li>
                <Link href="#">AML Risk Disclosures</Link>
              </li>
              <li>
                <Link href="#">Regulatory Licenses</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-copyright">
            &copy; 2026 ICEBERG. All institutional rights reserved.
          </div>

          {/* Live Status Indicators */}
          {/* <div className="footer-status-widget">
            <div className="status-indicator">
              <span className="status-pulse-dot"></span>
              ALL SERVERS ACTIVE
            </div>
            <div className="status-uptime">
              Uptime: <span>99.99%</span>
            </div>
            <div className="status-uptime uptime-ping-label">
              Ping: <span id="footer-live-ping">5ms</span>
            </div>
          </div> */}

          {/* Developed with 🎣 in Dammam (Easter Egg Credit) */}
          {/* <div className="creator-credit">
            Developed with <span>🎣</span> in Dammam
          </div> */}
        </div>
      </div>
    </footer>
  );
}
