"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function ContactForm() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    companyName: "",
    preferredContact: "email", // "email" | "whatsapp" | "phone"
    agreedToPrivacy: false,
  });

  // Turnstile Verification State
  const [turnstileState, setTurnstileState] = useState("idle"); // "idle" | "verifying" | "success"
  const [errors, setErrors] = useState({});

  // Trigger simulated Turnstile verification when entering step 2
  useEffect(() => {
    if (step === 2) {
      setTurnstileState("verifying");
      const timer = setTimeout(() => {
        setTurnstileState("success");
      }, 1800);
      return () => clearTimeout(timer);
    }
  }, [step]);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
    // Clear error
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handlePreferenceSelect = (pref) => {
    setFormData((prev) => ({
      ...prev,
      preferredContact: pref,
    }));
  };

  const validateStep1 = () => {
    const newErrors = {};
    if (!formData.firstName.trim()) newErrors.firstName = "First name is required";
    if (!formData.lastName.trim()) newErrors.lastName = "Last name is required";

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNextStep = () => {
    if (validateStep1()) {
      setStep(2);
    }
  };

  const handlePrevStep = () => {
    setStep(1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (step === 2 && formData.agreedToPrivacy && turnstileState === "success") {
      setStep(3); // Go to Success Screen
    }
  };

  return (
    <section className="section contact-section" id="contact">
      <div className="container contact-container">

        {/* Step Indicators / Headers */}
        <div className="contact-header-panel">
          <div className="hero-tag">
            <span className="tag-dot animate-pulse"></span>
            ICEBERG PLATFORM DEMO
          </div>
          <h2>Scale your Brokerage or Prop Firm today</h2>
          <p>
            Schedule a live 1-on-1 demonstration with our engineering specialists. Let us show you how the ICEBERG ecosystem can optimize your operational margins and execution flows.
          </p>

          {/* Graphical Progress Bar */}
          <div className="form-progressbar">
            <div className={`progressbar-step ${step >= 1 ? "active" : ""}`}>
              <span className="step-number">1</span>
              <span className="step-label">Contact Details</span>
            </div>
            <div className="progressbar-line">
              <div className="progressbar-line-fill" style={{ width: step > 1 ? "100%" : "0%" }}></div>
            </div>
            <div className={`progressbar-step ${step >= 2 ? "active" : ""}`}>
              <span className="step-number">2</span>
              <span className="step-label">Verification</span>
            </div>
            <div className="progressbar-line">
              <div className="progressbar-line-fill" style={{ width: step > 2 ? "100%" : "0%" }}></div>
            </div>
            <div className={`progressbar-step ${step >= 3 ? "active" : ""}`}>
              <span className="step-number">3</span>
              <span className="step-label">Confirmation</span>
            </div>
          </div>
        </div>

        {/* Dynamic Multi-Step Wrapper */}
        <div className="contact-form-panel glass-panel frost-border multi-step-panel">

          {step === 1 && (
            <div className="step-content fade-in">
              <h3 className="form-step-title">Contact Information</h3>

              <div className="form-grid">
                <div className="form-group">
                  <label className="form-label" htmlFor="firstName">First Name *</label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    className={`form-input ${errors.firstName ? "error-border" : ""}`}
                    placeholder="First name"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                  />
                  {errors.firstName && <span className="error-message">{errors.firstName}</span>}
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="lastName">Last Name *</label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    className={`form-input ${errors.lastName ? "error-border" : ""}`}
                    placeholder="Last name"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required
                  />
                  {errors.lastName && <span className="error-message">{errors.lastName}</span>}
                </div>
              </div>

              <div className="form-group mt-15">
                <label className="form-label" htmlFor="email">Email Address *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className={`form-input ${errors.email ? "error-border" : ""}`}
                  placeholder="you@company.com"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
                {errors.email && <span className="error-message">{errors.email}</span>}
              </div>

              <div className="form-grid mt-15">
                <div className="form-group">
                  <label className="form-label" htmlFor="phone">Phone Number</label>
                  <div className="phone-input-wrapper">
                    <div className="phone-country-dropdown">
                      <span className="phone-flag">🇺🇸</span>
                      <span className="phone-code">+1</span>
                    </div>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="form-input phone-field"
                      placeholder="201-555-0123"
                      value={formData.phone}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="companyName">Company Name</label>
                  <input
                    type="text"
                    id="companyName"
                    name="companyName"
                    className="form-input"
                    placeholder="Company name"
                    value={formData.companyName}
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              {/* Preference Selector */}
              <div className="pref-section mt-25">
                <h4 className="pref-heading">How would you prefer us to contact you?</h4>
                <div className="pref-grid">
                  <button
                    type="button"
                    className={`pref-btn ${formData.preferredContact === "email" ? "active" : ""}`}
                    onClick={() => handlePreferenceSelect("email")}
                  >
                    <svg className="pref-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22,6 12,13 2,6" />
                    </svg>
                    <span>Email</span>
                  </button>

                  <button
                    type="button"
                    className={`pref-btn ${formData.preferredContact === "whatsapp" ? "active" : ""}`}
                    onClick={() => handlePreferenceSelect("whatsapp")}
                  >
                    <svg className="pref-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                    </svg>
                    <span>WhatsApp</span>
                  </button>

                  <button
                    type="button"
                    className={`pref-btn ${formData.preferredContact === "phone" ? "active" : ""}`}
                    onClick={() => handlePreferenceSelect("phone")}
                  >
                    <svg className="pref-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                    <span>Phone Call</span>
                  </button>
                </div>
              </div>

              {/* Navigation Controls */}
              <div className="form-actions mt-30">
                <Link href="/" className="btn btn-back">
                  <svg className="action-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="19" y1="12" x2="5" y2="12" /><polyline points="12 19 5 12 12 5" />
                  </svg>
                  Back
                </Link>

                <button
                  type="button"
                  className="btn btn-submit"
                  onClick={handleNextStep}
                >
                  Next Step
                  <svg className="action-icon ml-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
                  </svg>
                </button>
              </div>
            </div>
          )}

          {step === 2 && (
            <form onSubmit={handleSubmit} className="step-content fade-in">
              <h3 className="form-step-title">Verification & Agreement</h3>

              {/* Consent Section */}
              <div className="consent-card">
                <label className="checkbox-container">
                  <input
                    type="checkbox"
                    name="agreedToPrivacy"
                    checked={formData.agreedToPrivacy}
                    onChange={handleInputChange}
                    required
                  />
                  <span className="checkmark-box"></span>
                  <span className="consent-text">
                    I agree to the <span className="highlight-link">Privacy Policy</span> and consent to ICEBERG contacting me about their services. I understand that I will receive demo login credentials via email and may be contacted by a team member to schedule a demonstration.
                  </span>
                </label>
              </div>

              {/* High-Tech Cloudflare Turnstile Simulator Widget */}
              <div className="turnstile-wrapper mt-25">
                <div className={`turnstile-widget ${turnstileState === "success" ? "verified" : ""}`}>
                  {turnstileState === "verifying" ? (
                    <div className="turnstile-loader">
                      <div className="spinner"></div>
                      <span className="turnstile-text">Verifying security parameters...</span>
                    </div>
                  ) : (
                    <div className="turnstile-success fade-in">
                      <div className="success-check">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      </div>
                      <span className="turnstile-text font-semibold">Success!</span>
                    </div>
                  )}

                  {/* Cloudflare Branded End */}
                  <div className="turnstile-brand">
                    <svg className="cf-logo" viewBox="0 0 48 48">
                      <path fill="#f38020" d="M37.4,18.4c-0.4-3.8-3.6-6.7-7.5-6.7c-2,0-3.9,0.8-5.3,2.2c-1.4-1.4-3.3-2.2-5.3-2.2c-3.9,0-7.1,2.9-7.5,6.7C7.4,19.2,4,22.7,4,27c0,4.8,3.9,8.7,8.7,8.7h24.6c4.8,0,8.7-3.9,8.7-8.7C46,22.7,42.6,19.2,37.4,18.4z" />
                      <path fill="#faae40" d="M24.6,13.9c-1.4-1.4-3.3-2.2-5.3-2.2c-3.9,0-7.1,2.9-7.5,6.7c-4.4,0.8-7.8,4.3-7.8,8.6c0,4.8,3.9,8.7,8.7,8.7h13.9C24.3,31.7,23,26.4,24.6,13.9z" />
                    </svg>
                    <div className="turnstile-brand-text">
                      <span className="cf-name">CLOUDFLARE</span>
                      <span className="cf-links">Privacy • Help</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Navigation Controls */}
              <div className="form-actions mt-30">
                <button
                  type="button"
                  className="btn btn-back"
                  onClick={handlePrevStep}
                >
                  <svg className="action-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="19" y1="12" x2="5" y2="12" /><polyline points="12 19 5 12 12 5" />
                  </svg>
                  Back
                </button>

                <button
                  type="submit"
                  className="btn btn-submit"
                  disabled={!formData.agreedToPrivacy || turnstileState !== "success"}
                >
                  Submit Demo Request
                  <svg className="action-icon ml-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="22" y1="2" x2="11" y2="13" /><polygon points="22 2 15 22 11 13 2 9 22 2" />
                  </svg>
                </button>
              </div>
            </form>
          )}

          {step === 3 && (
            <div className="step-content success-screen fade-in">
              <div className="success-radar-wrapper">
                <div className="success-radar">
                  <div className="radar-circle circle-1"></div>
                  <div className="radar-circle circle-2"></div>
                  <div className="radar-circle circle-3"></div>
                  <div className="radar-center">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                </div>
              </div>

              <h3 className="success-title">Demo Access Provisioned!</h3>
              <p className="success-subtitle">
                Your ICEBERG sandboxed trading terminal is being deployed.
              </p>

              {/* Interactive simulated deployment logs */}
              <div className="simulated-deployment-console">
                <div className="console-header">
                  <div className="console-dot red"></div>
                  <div className="console-dot yellow"></div>
                  <div className="console-dot green"></div>
                  <div className="console-title">ICEBERG CORE COMPLIANCE ENGINE</div>
                </div>
                <div className="console-body">
                  <div className="console-line"><span className="cyan">[INFO]</span> Initializing secure node session for {formData.firstName}...</div>
                  <div className="console-line"><span className="cyan">[INFO]</span> Establishing prime aggregate clearance lanes...</div>
                  <div className="console-line"><span className="cyan">[INFO]</span> Creating institutional white-label demo account...</div>
                  <div className="console-line"><span className="green">[SUCCESS]</span> Environment status: ACTIVE [0.72ms Latency]</div>
                  <div className="console-line"><span className="green">[SUCCESS]</span> Credentials routed securely to: <span className="yellow">{formData.email}</span></div>
                </div>
              </div>

              {/* Recap Box */}
              <div className="recap-box mt-20">
                <div className="recap-row">
                  <span className="recap-label">Applicant Name:</span>
                  <span className="recap-val">{formData.firstName} {formData.lastName}</span>
                </div>
                {formData.companyName && (
                  <div className="recap-row">
                    <span className="recap-label">Company:</span>
                    <span className="recap-val">{formData.companyName}</span>
                  </div>
                )}
                <div className="recap-row">
                  <span className="recap-label">Preferred Channel:</span>
                  <span className="recap-val capitalize">{formData.preferredContact}</span>
                </div>
                <div className="recap-row">
                  <span className="recap-label">Fulfillment Status:</span>
                  <span className="recap-val text-green font-semibold">Ready to Trade</span>
                </div>
              </div>

              <div className="success-actions mt-25">
                <Link href="/" className="btn btn-primary w-full">
                  Return to Headquarters
                </Link>
              </div>
            </div>
          )}

        </div>

        {/* Contact Info Footer Grid */}
        <div className="contact-page-info" style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "2rem",
          marginTop: "4rem",
          paddingTop: "3rem",
          borderTop: "1px solid rgba(255, 255, 255, 0.06)"
        }}>
          <div className="contact-detail-card" style={{ alignItems: "flex-start", background: "rgba(255, 255, 255, 0.02)", padding: "2rem", borderRadius: "12px", border: "1px solid rgba(255, 255, 255, 0.05)" }}>
            <div className="c-detail-icon" style={{ flexShrink: 0 }}>
              <svg viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
            </div>
            <div className="c-detail-text">
              <span>direct operations email</span>
              <p style={{ marginTop: "0.5rem", fontWeight: "600" }}>solutions@iceberghq.com</p>
            </div>
          </div>

          <div className="contact-detail-card" style={{ alignItems: "flex-start", background: "rgba(255, 255, 255, 0.02)", padding: "2rem", borderRadius: "12px", border: "1px solid rgba(255, 255, 255, 0.05)" }}>
            <div className="c-detail-icon" style={{ marginTop: "4px", flexShrink: 0 }}>
              <svg viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
            </div>
            <div className="c-detail-text">
              <span>Location</span>
              <p style={{ lineHeight: "1.6", marginTop: "0.5rem", fontWeight: "500" }}>
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
    </section>
  );
}
