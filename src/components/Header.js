import Link from "next/link";

export default function Header() {
  return (
    <header className="header">
      <div className="nav-wrapper">
        <Link href="/" className="logo" id="header-logo">
          <svg className="logo-icon" viewBox="0 0 100 100">
            <polygon points="50,10 85,85 15,85" stroke="var(--primary-cyan)" strokeWidth="6" fill="rgba(0, 240, 255, 0.1)"/>
            <polyline points="50,25 65,55 35,55 50,25" stroke="var(--primary-cyan)" strokeWidth="3" fill="none"/>
            <line x1="15" y1="90" x2="85" y2="90" stroke="var(--primary-cyan)" strokeWidth="4"/>
          </svg>
          <span>ICEBERG</span>
        </Link>

        <nav>
          <ul className="nav-links">
            <li><Link href="/" className="nav-link">Home</Link></li>
            <li><Link href="/solutions" className="nav-link">Solutions</Link></li>
            <li><Link href="/comparison" className="nav-link">Comparison</Link></li>
            <li><Link href="/download" className="nav-link">Download</Link></li>
            <li><Link href="/events" className="nav-link">Events</Link></li>
            <li><Link href="/partners" className="nav-link">Partners</Link></li>
            <li><Link href="/about" className="nav-link">About</Link></li>
            <li><Link href="/contact" className="nav-link">Contact</Link></li>
          </ul>
        </nav>

        <div className="header-actions">
          <button className="theme-toggle-btn" id="theme-toggle" aria-label="Toggle Color Theme">
            <svg className="theme-toggle-icon" viewBox="0 0 24 24">
              <path fill="currentColor" d="M12,18C11.11,18 10.26,17.8 9.5,17.45C11.56,16.5 13,14.42 13,12C13,9.58 11.56,7.5 9.5,6.55C10.26,6.2 11.11,6 12,6A6,6 0 0,1 18,12A6,6 0 0,1 12,18M20,8.69V4H15.31L12,0.69L8.69,4H4V8.69L0.69,12L4,15.31V20H8.69L12,23.31L15.31,20H20V15.31L23.31,12L20,8.69Z"/>
            </svg>
          </button>
          <a href="#contact" className="btn btn-primary btn-header-demo">Get Demo</a>
        </div>

        <button className="mobile-nav-toggle" aria-label="Toggle Navigation">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
}
