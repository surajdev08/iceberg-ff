import Link from "next/link";

const PARTNER_GROUPS = [
  {
    id: "backend",
    tag: "Backend Infrastructure",
    title: "Backend Infrastructure Partners & Vendors",
    subtitle:
      "Robust backend infrastructure ensuring high-performance, scalable, and reliable trading operations.",
    accent: "cyan",
    partners: [
      {
        name: "Amazon Web Services",
        role: "Cloud Infrastructure",
        desc:
          "Enterprise-grade cloud infrastructure providing scalable computing power, storage, and global network capabilities for mission-critical trading applications.",
        initials: "AWS",
      },
      {
        name: "Docker",
        role: "Containerization",
        desc:
          "Containerization platform enabling consistent deployment, scaling, and management of trading applications across development and production environments.",
        initials: "DK",
      },
      {
        name: "Nginx",
        role: "Web Server / Reverse Proxy",
        desc:
          "High-performance web server and reverse proxy solution ensuring fast, reliable, and secure delivery of trading platform services and APIs.",
        initials: "NX",
      },
      {
        name: "RabbitMQ",
        role: "Message Broker",
        desc:
          "Advanced message broker facilitating reliable communication between trading system components, order routing, and real-time data distribution.",
        initials: "RB",
      },
      {
        name: "Ubuntu Server",
        role: "Linux Environment",
        desc:
          "Enterprise Linux distribution providing stable, secure, and optimised server environments for hosting critical trading infrastructure and applications.",
        initials: "UB",
      },
      {
        name: "Jenkins CI/CD",
        role: "Continuous Delivery",
        desc:
          "Automated deployment and continuous integration platform ensuring reliable, tested, and rapid delivery of trading platform updates and features.",
        initials: "JK",
      },
    ],
  },
  {
    id: "frontend",
    tag: "Frontend Infrastructure",
    title: "Frontend Infrastructure Partners & Vendors",
    subtitle:
      "Modern frontend technologies delivering responsive, intuitive, and high-performance trading interfaces.",
    accent: "cyan",
    partners: [
      {
        name: "Angular Framework",
        role: "Enterprise UI Framework",
        desc:
          "Enterprise-grade TypeScript framework powering dynamic, responsive trading interfaces with real-time data updates and advanced user interactions.",
        initials: "NG",
      },
      {
        name: "JavaScript Ecosystem",
        role: "Interactive Trading UX",
        desc:
          "Modern JavaScript technologies and libraries enabling interactive trading dashboards, real-time charts, and seamless user experiences across devices.",
        initials: "JS",
      },
      {
        name: "Progressive Web Apps",
        role: "Cross-Platform Delivery",
        desc:
          "Advanced web application technologies providing native app-like experiences, offline capabilities, and cross-platform compatibility for trading platforms.",
        initials: "PWA",
      },
      {
        name: "Cloudflare CDN",
        role: "Global Edge Network",
        desc:
          "Global content delivery network ensuring fast loading times, DDoS protection, and optimal performance for trading platforms worldwide.",
        initials: "CF",
      },
    ],
  },
  {
    id: "data",
    tag: "Data Layer",
    title: "Database & Data Partners",
    subtitle:
      "High-performance database solutions and data management systems for secure, fast, and reliable trading data storage.",
    accent: "cyan",
    partners: [
      {
        name: "MySQL Database",
        role: "Relational Storage",
        desc:
          "Enterprise-grade relational database management system ensuring reliable storage, fast retrieval, and secure handling of trading data and transactions.",
        initials: "SQL",
      },
      {
        name: "MongoDB",
        role: "Document Store",
        desc:
          "NoSQL database providing flexible, scalable storage for real-time market data, user preferences, and complex trading analytics.",
        initials: "MG",
      },
      {
        name: "Redis Cache",
        role: "In-Memory Cache",
        desc:
          "In-memory data structure store delivering ultra-fast data access, session management, and real-time caching for high-frequency trading operations.",
        initials: "RD",
      },
      {
        name: "AWS S3 Storage",
        role: "Object Storage",
        desc:
          "Scalable cloud storage solution for secure backup, archival, and distribution of trading data, reports, and compliance documentation.",
        initials: "S3",
      },
      {
        name: "ClickHouse",
        role: "Columnar Analytics",
        desc:
          "High-performance columnar database optimised for real-time analytics, market data processing, and ultra-fast query execution.",
        initials: "CH",
      },
    ],
  },
  {
    id: "security",
    tag: "Security & Monitoring",
    title: "Security & Quality Monitoring Partners",
    subtitle:
      "Advanced security solutions and monitoring tools ensuring platform integrity, compliance, and optimal performance.",
    accent: "cyan",
    partners: [
      {
        name: "Encrypted Gateway",
        role: "Secure Transport",
        desc:
          "Advanced encryption and secure gateway solutions protecting sensitive trading data, transactions, and client information with bank-grade security.",
        initials: "EG",
      },
      {
        name: "Grafana Monitoring",
        role: "Observability",
        desc:
          "Comprehensive monitoring and visualisation platform providing real-time insights into system performance, trading metrics, and infrastructure health.",
        initials: "GF",
      },
      {
        name: "GitHub Enterprise",
        role: "Source Control",
        desc:
          "Secure code repository and collaboration platform ensuring version control, code quality, and secure development practices for trading applications.",
        initials: "GH",
      },
      {
        name: "Aurora Security",
        role: "Threat Detection",
        desc:
          "Advanced security monitoring and threat detection systems providing comprehensive protection against cyber threats and ensuring regulatory compliance.",
        initials: "AS",
      },
    ],
  },
  {
    id: "other",
    tag: "Operations & Automation",
    title: "Other Technology Partners & Vendors",
    subtitle:
      "Additional technology partners supporting various aspects of our trading ecosystem and operational efficiency.",
    accent: "cyan",
    partners: [
      {
        name: "Slack Communication",
        role: "Team Collaboration",
        desc:
          "Enterprise communication platform facilitating real-time collaboration, alerts, and coordination across trading teams and support departments.",
        initials: "SL",
      },
      {
        name: "Telegram Integration",
        role: "Client Notifications",
        desc:
          "Secure messaging platform integration for instant notifications, alerts, and communication channels for trading updates and system status.",
        initials: "TG",
      },
      {
        name: "SendGrid Email",
        role: "Transactional Email",
        desc:
          "Reliable email delivery service ensuring important trading notifications, reports, and communications reach clients and stakeholders promptly.",
        initials: "SG",
      },
      {
        name: "Twilio Communications",
        role: "Voice / SMS / MFA",
        desc:
          "Cloud communications platform providing SMS, voice, and multi-factor authentication services for enhanced security and client communication.",
        initials: "TW",
      },
      {
        name: "Zapier Automation",
        role: "Workflow Automation",
        desc:
          "Workflow automation platform connecting various business applications and streamlining operational processes across the trading ecosystem.",
        initials: "ZP",
      },
      {
        name: "Pabbly Connect",
        role: "Integration Hub",
        desc:
          "Integration platform automating data flows between different systems, enhancing operational efficiency and reducing manual processes.",
        initials: "PB",
      },
      {
        name: "Python Ecosystem",
        role: "Algorithmic Tooling",
        desc:
          "Powerful programming language ecosystem enabling advanced analytics, algorithmic trading strategies, and automated trading system development.",
        initials: "PY",
      },
    ],
  },
];

const HERO_STATS = [
  { value: "25+", label: "Trusted Partners" },
  { value: "5", label: "Strategic Categories" },
  { value: "24/7", label: "Global Coverage" },
  { value: "Enterprise", label: "Grade Stack" },
];

export default function Partners() {
  return (
    <>
      {/* ====================================================================== */}
      {/* PARTNERS HERO                                                          */}
      {/* ====================================================================== */}
      <section className="section partners-hero-section" id="partners-intro">
        <div className="glow-container">
          <div className="radial-glow glow-top-right"></div>
          <div className="radial-glow glow-bottom-left"></div>
        </div>

        <div className="container partners-hero-grid">
          <div className="partners-hero-content">
            <span className="hero-tag">
              <span className="tag-dot"></span>
              Our Partner Ecosystem
            </span>
            <h1>The technology ecosystem behind ICEBERG</h1>
            <p className="partners-hero-sub">
              Discover the trusted trading technology partners powering ICEBERG. From institutional liquidity and brokerage tooling to cloud infrastructure and observability, every layer is built on best-in-class providers chosen for performance, reliability, and security.
            </p>

            <div className="partners-hero-badges">
              <span className="partners-hero-badge">
                <span className="badge-dot"></span>
                25+ Partners
              </span>
              <span className="partners-hero-badge">
                <span className="badge-dot"></span>
                Enterprise Grade
              </span>
              <span className="partners-hero-badge">
                <span className="badge-dot"></span>
                Globally Distributed
              </span>
            </div>

            <div className="partners-hero-actions">
              <Link href="/contact" className="btn btn-primary">Become a Partner</Link>
              <Link href="/solutions" className="btn btn-secondary">View Solutions</Link>
            </div>
          </div>

          <div className="partners-hero-stats glass-panel frost-border">
            {HERO_STATS.map((stat, idx) => (
              <div key={idx} className="partners-stat-cell">
                <span className="partners-stat-value">{stat.value}</span>
                <span className="partners-stat-label">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====================================================================== */}
      {/* PARTNER CATEGORY SECTIONS                                              */}
      {/* ====================================================================== */}
      {PARTNER_GROUPS.map((group, gIdx) => (
        <section
          key={group.id}
          className={`section partners-group-section ${gIdx % 2 === 1 ? "alt" : ""}`}
          id={`partners-${group.id}`}
        >
          <div className="container">
            <div className="section-intro partners-section-intro">
              <span className="hero-tag">
                <span className="tag-dot"></span>
                {group.tag}
              </span>
              <h2>{group.title}</h2>
              <p>{group.subtitle}</p>
            </div>

            <div className="partners-card-grid">
              {group.partners.map((p, idx) => (
                <article key={idx} className="partner-card glass-panel frost-border">
                  <header className="partner-card-head">
                    <div className="partner-logo-chip" aria-hidden="true">
                      <span>{p.initials}</span>
                    </div>
                    <div className="partner-card-titles">
                      <h3>{p.name}</h3>
                      <span className="partner-card-role">{p.role}</span>
                    </div>
                  </header>
                  <p className="partner-card-desc">{p.desc}</p>
                  <div className="partner-card-footer">
                    <span className="partner-status">
                      <span className="partner-status-dot"></span>
                      Verified Partner
                    </span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* ====================================================================== */}
      {/* PARTNERSHIP CTA                                                        */}
      {/* ====================================================================== */}
      <section className="section partners-cta-section" id="partners-cta">
        <div className="container">
          <div className="partners-cta-panel glass-panel frost-border">
            <div className="partners-cta-copy">
              <span className="hero-tag">
                <span className="tag-dot"></span>
                Partner with ICEBERG
              </span>
              <h2>Build the next era of brokerage technology with us</h2>
              <p>
                Whether you provide liquidity, infrastructure, analytics, or operational tooling, ICEBERG&apos;s partner program is built for long-term collaboration. Let&apos;s explore how your technology can become part of an ecosystem trusted by ambitious brokers and prop firms worldwide.
              </p>
            </div>
            <div className="partners-cta-actions">
              <Link href="/contact?purpose=partnership" className="btn btn-primary">Start a Partnership</Link>
              <Link href="/about" className="btn btn-secondary">About ICEBERG</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
