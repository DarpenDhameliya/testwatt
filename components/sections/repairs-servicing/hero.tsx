import Image from "next/image";
import { Button } from "@/components/ui";

export default function Hero() {
  return (
    <section className="lbt-hero" aria-labelledby="rs-heading">
      {/* Background ambient lighting and subtle tech grid */}
      <div className="lbt-hero__bg" aria-hidden="true">
        <div className="lbt-hero__ambient-glow" />
        <div className="lbt-hero__grid-pattern" />
      </div>

      <div className="container lbt-hero__container">
        <div className="lbt-hero__layout">
          {/* Left Column: Value Proposition, Status & CTAs */}
          <div className="lbt-hero__content">
            <div className="lbt-hero__badge-row">
              <span className="lbt-hero__badge">
                <span className="lbt-hero__badge-dot" aria-hidden="true" />
                Precision Maintenance &amp; Service Protection
              </span>
            </div>

            <div className="lbt-hero__kicker">
              <span className="lbt-hero__kicker-line" aria-hidden="true" />
              Repairs &amp; Servicing Specialists
            </div>

            <h1 id="rs-heading" className="lbt-hero__title">
              Maximum uptime &amp; peak performance{" "}
              <span className="lbt-hero__title-accent">for your test fleet.</span>
            </h1>

            <p className="lbt-hero__body">
              Keep your load testing assets operating at 100% capacity. Test Watt provides
              comprehensive preventive maintenance, rapid engineering response, control
              system modernizations, and genuine replacement parts.
            </p>

            <div className="lbt-hero__actions">
              <Button to="/contact" variant="primary" size="lg">
                Book a Service Visit
              </Button>
              <Button href="#why-servicing" variant="outline-light" size="lg">
                Why Servicing Matters ↓
              </Button>
            </div>

            {/* Quick Technical Highlights Strip */}
            <div className="lbt-hero__specs-strip">
              <div className="lbt-hero__spec-item">
                <span className="lbt-hero__spec-val">100%</span>
                <span className="lbt-hero__spec-lbl">OEM Traceable Parts</span>
              </div>
              <div className="lbt-hero__spec-divider" aria-hidden="true" />
              <div className="lbt-hero__spec-item">
                <span className="lbt-hero__spec-val">24/7</span>
                <span className="lbt-hero__spec-lbl">Rapid Mobilisation</span>
              </div>
              <div className="lbt-hero__spec-divider" aria-hidden="true" />
              <div className="lbt-hero__spec-item">
                <span className="lbt-hero__spec-val">ISO &amp; OEM</span>
                <span className="lbt-hero__spec-lbl">Calibrated Standards</span>
              </div>
            </div>
          </div>

          {/* Right Column: High-Tech Engineering Showcase Card */}
          <div className="lbt-hero__showcase">
            <div className="lbt-hero__card">
              {/* Showcase Image Frame */}
              <div className="lbt-hero__img-frame">
                <Image
                  src="/images/hero-repairs-servicing.jpg"
                  alt="Electrical control panel with circuit breakers and wiring — requiring regular servicing and maintenance"
                  width={700}
                  height={500}
                  priority
                  className="lbt-hero__img"
                />
                <div className="lbt-hero__img-overlay" aria-hidden="true" />

                {/* Floating Badge: Top-Right (Active Service Response) */}
                <div className="lbt-hero__floating-card lbt-hero__floating-card--top">
                  <span className="lbt-hero__pulse-green" aria-hidden="true" />
                  <div>
                    <div className="lbt-hero__fc-title">Rapid Service Response</div>
                    <div className="lbt-hero__fc-sub">Certified mobile engineers</div>
                  </div>
                </div>

                {/* Floating Badge: Bottom-Left (Genuine Parts Guarantee) */}
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
                    <div className="lbt-hero__fc-title">OEM Parts Guarantee</div>
                    <div className="lbt-hero__fc-sub">Full warranty preservation</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Subtle bottom separator line with accent glow */}
      <div className="lbt-hero__bottom-border" aria-hidden="true" />
    </section>
  );
}
