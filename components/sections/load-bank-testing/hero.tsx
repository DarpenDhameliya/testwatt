import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui";

export default function Hero() {
  return (
    <section className="lbt-hero" aria-labelledby="lbt-heading">
      {/* Background ambient lighting and subtle tech grid */}
      <div className="lbt-hero__bg" aria-hidden="true">
        <div className="lbt-hero__ambient-glow" />
        <div className="lbt-hero__grid-pattern" />
      </div>

      <div className="container lbt-hero__container">
        {/* Subpage Breadcrumb */}
        {/* <nav className="lbt-hero__breadcrumb" aria-label="Breadcrumb">
          <Link href="/" className="lbt-hero__crumb-link">
            Home
          </Link>
          <span className="lbt-hero__crumb-sep" aria-hidden="true">
            /
          </span>
          <span className="lbt-hero__crumb-category">Services</span>
          <span className="lbt-hero__crumb-sep" aria-hidden="true">
            /
          </span>
          <span className="lbt-hero__crumb-current" aria-current="page">
            Load Bank Testing
          </span>
        </nav> */}

        <div className="lbt-hero__layout">
          {/* Left Column: Value Proposition, Status & CTAs */}
          <div className="lbt-hero__content">
            <div className="lbt-hero__badge-row">
              <span className="lbt-hero__badge">
                <span className="lbt-hero__badge-dot" aria-hidden="true" />
                Guaranteed Operational Readiness
              </span>
              {/* <span className="lbt-hero__code-pill">SPEC // LBT-8528</span> */}
            </div>

            <div className="lbt-hero__kicker">
              <span className="lbt-hero__kicker-line" aria-hidden="true" />
              Critical Power Testing Specialists
            </div>

            <h1 id="lbt-heading" className="lbt-hero__title">
              Full-load proof,{" "}
              <span className="lbt-hero__title-accent">
                uncompromised power security.
              </span>
            </h1>

            <p className="lbt-hero__body">
              Verify your backup generators, UPS systems, and switchgear under full
              nameplate capacity. We provide precise resistive, reactive, and hybrid load
              proofing — empowering facility leaders with certified, audit-ready
              compliance documentation.
            </p>

            <div className="lbt-hero__actions">
              <Button to="/contact" variant="primary" size="lg">
                Request a Testing Proposal
              </Button>
              <Button href="#what-it-involves" variant="outline-light" size="lg">
                What&apos;s involved ↓
              </Button>
            </div>

            {/* Quick Technical Highlights Strip */}
            <div className="lbt-hero__specs-strip">
              <div className="lbt-hero__spec-item">
                <span className="lbt-hero__spec-val">100%</span>
                <span className="lbt-hero__spec-lbl">Nameplate Capacity</span>
              </div>
              <div className="lbt-hero__spec-divider" aria-hidden="true" />
              <div className="lbt-hero__spec-item">
                <span className="lbt-hero__spec-val">0.8 – 1.0</span>
                <span className="lbt-hero__spec-lbl">Power Factor Range</span>
              </div>
              <div className="lbt-hero__spec-divider" aria-hidden="true" />
              <div className="lbt-hero__spec-item">
                <span className="lbt-hero__spec-val">ISO &amp; NFPA</span>
                <span className="lbt-hero__spec-lbl">Audit Compliant</span>
              </div>
            </div>
          </div>

          {/* Right Column: High-Tech Engineering Showcase Card */}
          <div className="lbt-hero__showcase">
            <div className="lbt-hero__card">
              {/* Corner technical registration marks */}
              {/* <span className="lbt-hero__corner lbt-hero__corner--tl" aria-hidden="true" /> */}
              {/* <span className="lbt-hero__corner lbt-hero__corner--tr" aria-hidden="true" /> */}
              {/* <span className="lbt-hero__corner lbt-hero__corner--bl" aria-hidden="true" /> */}
              {/* <span className="lbt-hero__corner lbt-hero__corner--br" aria-hidden="true" /> */}

              {/* Showcase Image Frame */}
              <div className="lbt-hero__img-frame">
                <Image
                  src="/images/hero-load-bank-testing.jpg"
                  alt="Electrical transformer insulators and infrastructure requiring load testing"
                  width={700}
                  height={500}
                  priority
                  className="lbt-hero__img"
                />
                <div className="lbt-hero__img-overlay" aria-hidden="true" />

                {/* Floating Badge: Top-Right (Live Validation) */}
                <div className="lbt-hero__floating-card lbt-hero__floating-card--top">
                  <span className="lbt-hero__pulse-green" aria-hidden="true" />
                  <div>
                    <div className="lbt-hero__fc-title">100% Load Verified</div>
                    <div className="lbt-hero__fc-sub">Step-dwell protocol active</div>
                  </div>
                </div>

                {/* Floating Badge: Bottom-Left (Compliance Status) */}
                <div className="lbt-hero__floating-card lbt-hero__floating-card--bottom">
                  <div className="lbt-hero__fc-icon" aria-hidden="true">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                      <path d="m9 12 2 2 4-4" />
                    </svg>
                  </div>
                  <div>
                    <div className="lbt-hero__fc-title">Certified Documentation</div>
                    <div className="lbt-hero__fc-sub">ISO 8528-6 &amp; NFPA 110</div>
                  </div>
                </div>
              </div>

              {/* Bottom Card Footer: Live System Parameters */}
              {/* <div className="lbt-hero__card-footer">
                <div className="lbt-hero__card-stat">
                  <span className="lbt-hero__stat-name">Methodology</span>
                  <span className="lbt-hero__stat-detail">
                    Resistive • Reactive • Hybrid
                  </span>
                </div>
                <div className="lbt-hero__card-stat">
                  <span className="lbt-hero__stat-name">Deployment</span>
                  <span className="lbt-hero__stat-detail">Calibrated Portable Units</span>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>

      {/* Subtle bottom separator line with accent glow */}
      <div className="lbt-hero__bottom-border" aria-hidden="true" />
    </section>
  );
}
