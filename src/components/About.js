import Link from "next/link";

const VALUES = [
  {
    title: "Building Trust with Transparency",
    desc: "Open communication and honest relationships form the foundation of everything we do, building trust with our clients and partners.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <polyline points="9 12 11 14 15 10" />
      </svg>
    ),
  },
  {
    title: "Empowering Ownership and Impact",
    desc: "We encourage every team member to take ownership and drive meaningful change that creates lasting impact for our organization.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
  },
  {
    title: "Fast Execution, Precise Delivery",
    desc: "Speed without compromise: delivering excellence at the pace of innovation while maintaining the highest quality standards.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
  },
  {
    title: "Innovating with a Product-First Approach",
    desc: "Every solution starts with understanding our clients' needs and exceeding expectations through cutting-edge technology and creative solutions.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 18h6" />
        <path d="M10 22h4" />
        <path d="M12 2a7 7 0 0 0-4 12.7c.6.4 1 1.1 1 1.8V18h6v-1.5c0-.7.4-1.4 1-1.8A7 7 0 0 0 12 2z" />
      </svg>
    ),
  },
  {
    title: "Inclusive Culture, Stronger Together",
    desc: "Diversity of thought and background drives our innovation and success, fostering a culture of teamwork and partnership.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    title: "Customer Focused, Always Driven",
    desc: "Our clients' success is our success. We're invested in your growth and achievements, delivering personalized solutions that drive results.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
  },
];

const JOURNEY = [
  {
    tag: "The Beginning",
    title: "Founded with Bold Vision",
    body: "ICEBERG's journey began driven by a bold vision to empower brokers after seismic shifts in the trading platform landscape. In a world shaken by legacy restrictions and sudden policy changes, we built ICEBERG Trader: a next-generation trading solution focused on freedom, resilience, and scale.",
  },
  {
    tag: "Today",
    title: "A Strategic Partner",
    body: "Today, ICEBERG is more than a technology provider. We are your strategic partner. We've invested deeply, assembled a world-class team, and architected a robust ecosystem that supports brokers from startup to enterprise. Our flagship, ICEBERG Trader, is trusted globally for its innovation and reliability.",
  },
  {
    tag: "Our Commitment",
    title: "Unwavering Support",
    body: "Our commitment is unwavering: to provide the infrastructure, support, and vision brokers need to succeed. We build not just software, but a future for financial leaders who refuse to stand still.",
  },
];

export default function About() {
  return (
    <>
      {/* ====================================================================== */}
      {/* INTRO HERO */}
      {/* ====================================================================== */}
      <section className="section about-hero-section" id="about-intro">
        <div className="glow-container">
          <div className="radial-glow glow-top-right"></div>
          <div className="radial-glow glow-bottom-left"></div>
        </div>

        <div className="container about-hero-grid">
          <div className="about-hero-content">
            <span className="hero-tag">
              <span className="tag-dot"></span>
              About ICEBERG
            </span>
            <h1>Redefining brokerage technology for a new era</h1>
            <p className="about-hero-sub">
              ICEBERG delivers enterprise trading platforms, advanced CRM solutions, and custom-built trading infrastructure for the world's most ambitious brokers and prop firms.
            </p>

            <div className="about-hero-meta">
              <div className="about-meta-card glass-panel frost-border">
                <span className="about-meta-label">Founded</span>
                <span className="about-meta-value">Since 2022</span>
              </div>
              <div className="about-meta-card glass-panel frost-border">
                <span className="about-meta-label">Reach</span>
                <span className="about-meta-value">Global Coverage</span>
              </div>
              <div className="about-meta-card glass-panel frost-border">
                <span className="about-meta-label">Flagship</span>
                <span className="about-meta-value">ICEBERG Trader</span>
              </div>
            </div>

            <div className="about-hero-actions">
              <Link href="/contact" className="btn btn-primary">Get Started Today</Link>
              <Link href="/solutions" className="btn btn-secondary">Explore Solutions</Link>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================== */}
      {/* WHO WE ARE */}
      {/* ====================================================================== */}
      <section className="section about-section" id="who-we-are">
        <div className="container about-who-grid">
          <div className="about-who-copy">
            <span className="hero-tag">
              <span className="tag-dot"></span>
              Who We Are
            </span>
            <h2>The force behind a new generation of brokerage infrastructure</h2>
            <p>
              ICEBERG is the force behind the ICEBERG HQ ecosystem and ICEBERG Trader, redefining brokerage technology for a new era. Founded by a team of fintech pioneers, we deliver enterprise platforms, advanced CRM solutions, and custom-built trading infrastructure for the world's most ambitious brokers and prop firms.
            </p>
            <p>
              Since our inception, our mission has been simple: empower financial institutions to grow with freedom and confidence. ICEBERG HQ stands at the crossroads of technology and finance, committed to delivering reliable, secure, and fully customizable solutions for a rapidly evolving industry.
            </p>
            <p>
              We are innovators, engineers, and strategists building a foundation where brokers can thrive, adapt, and lead the future of finance.
            </p>
          </div>

          <div className="about-who-panel glass-panel frost-border">
            <div className="about-who-badge">Solving Problems with Vision</div>
            <h3>Client-first by design</h3>
            <p>
              Since our founding, we have remained committed to redefining the financial industry with a client-first approach — engineering systems that adapt to ambitious brokers, not the other way around.
            </p>
            <ul className="about-who-list">
              <li>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                Enterprise trading platforms
              </li>
              <li>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                Advanced multi-tier CRM
              </li>
              <li>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                Custom trading infrastructure
              </li>
              <li>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                Global deployment & support
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* ====================================================================== */}
      {/* JOURNEY & COMMITMENT */}
      {/* ====================================================================== */}
      <section className="section about-journey-section" id="our-journey">
        <div className="container">
          <div className="section-intro">
            <span className="hero-tag">
              <span className="tag-dot"></span>
              Our Journey
            </span>
            <h2>Our Journey and Commitment</h2>
            <p>From a bold founding vision to a globally trusted ecosystem — built for brokers who refuse to stand still.</p>
          </div>

          <div className="about-journey-grid">
            {JOURNEY.map((stage, idx) => (
              <div key={idx} className="about-journey-card glass-panel frost-border">
                <span className="about-journey-num">{String(idx + 1).padStart(2, "0")}</span>
                <span className="about-journey-tag">{stage.tag}</span>
                <h3>{stage.title}</h3>
                <p>{stage.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====================================================================== */}
      {/* CULTURE & VALUES */}
      {/* ====================================================================== */}
      <section className="section about-values-section" id="culture">
        <div className="container">
          <div className="section-intro">
            <span className="hero-tag">
              <span className="tag-dot"></span>
              Culture & Values
            </span>
            <h2>Our Culture and Values</h2>
            <p>The core principles that drive our work and shape our culture, guiding us in delivering exceptional results for our clients.</p>
          </div>

          <div className="about-values-grid">
            {VALUES.map((v, idx) => (
              <div key={idx} className="about-value-card glass-panel frost-border">
                <div className="about-value-icon">{v.icon}</div>
                <h3>{v.title}</h3>
                <p>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====================================================================== */}
      {/* MISSION */}
      {/* ====================================================================== */}
      <section className="section about-mission-section" id="our-mission">
        <div className="glow-container">
          <div className="radial-glow glow-top-right"></div>
        </div>
        <div className="container about-mission-grid">
          <div className="about-mission-left">
            <span className="hero-tag">
              <span className="tag-dot"></span>
              Our Mission
            </span>
            <h2>Transforming Brokerage with Innovation and Integrity</h2>
          </div>

          <div className="about-mission-right">
            <p>
              Our mission is to empower brokers and prop firms to achieve unparalleled success by crafting an ecosystem that fosters growth, innovation, and resilience. We strive to be the catalyst that transforms challenges into opportunities, creating solutions that redefine what's possible in the financial sector.
            </p>
            <p>
              We are not just building tools; we are designing experiences. From seamless integrations to enterprise-level reliability, our goal is to help you stand tall in the ever-evolving financial landscape. With ICEBERG, you're not just a client; you're a partner in shaping the future of brokerage.
            </p>
            <p>
              Driven by the vision to enable brokers of all sizes to compete and thrive, we combine innovation with purpose, ensuring every feature, every platform, and every interaction is designed to empower your growth.
            </p>
          </div>
        </div>
      </section>

      {/* ====================================================================== */}
      {/* CTA */}
      {/* ====================================================================== */}
      <section className="section about-cta-section" id="about-cta">
        <div className="container">
          <div className="about-cta-panel glass-panel frost-border">
            <div className="about-cta-copy">
              <span className="hero-tag">
                <span className="tag-dot"></span>
                Redefining the Future of Brokerage
              </span>
              <h2>Let&apos;s talk growth for your FX/CFD brokerage</h2>
              <p>
                ICEBERG is a global provider of premium trading platforms and advanced solutions that accelerate forex businesses. We have built a robust ecosystem with years of expertise that empowers brokers and prop firms to scale and thrive in the competitive trading landscape.
              </p>
            </div>
            <div className="about-cta-actions">
              <Link href="/contact" className="btn btn-primary">Get Demo</Link>
              <Link href="/solutions" className="btn btn-secondary">View Solutions</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
