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
          <Link href="/contact" className="btn btn-primary btn-header-demo">Get Demo</Link>
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
