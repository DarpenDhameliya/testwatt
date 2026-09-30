import HeroEyebrow from "@/components/hero-eyebrow";
import { Button } from "@/components/ui";

export default function Hero() {
  return (
    <section className="lbt-hero" aria-labelledby="tt-heading">
      <div className="container lbt-hero__container">
        <div className="lbt-hero__content">
          <HeroEyebrow icon="training">Training &amp; Troubleshooting</HeroEyebrow>

          <h1 id="tt-heading" className="lbt-hero__title">
            <span className="lbt-hero__title-line lbt-hero__title-line--1">
              Root-cause diagnosis
            </span>
            <br />
            <span className="lbt-hero__title-line lbt-hero__title-line--2 lbt-hero__title-accent">
              and training that actually sticks.
            </span>
          </h1>

          <p className="lbt-hero__body">
            We find the cause of recurring electrical faults, governor hunting and
            breaker trips that have no obvious reason, using proper engineering
            diagnostics. We also give your own team practical, accredited training
            that follows NFPA 110 and NETA standards.
          </p>

          {/* <div className="lbt-hero__actions">
            <Button to="/contact" variant="primary" size="lg">
              Request Diagnostic Support
            </Button>
            <Button href="#training-courses" variant="outline-light" size="lg">
              View Training Programmes ↓
            </Button>
          </div> */}

          {/* Quick Technical Highlights Strip */}
          {/* <div className="lbt-hero__specs-strip">
            <div className="lbt-hero__spec-item">
              <span className="lbt-hero__spec-val">NFPA 110</span>
              <span className="lbt-hero__spec-lbl">Audit-Aligned Training</span>
            </div>
            <div className="lbt-hero__spec-divider" aria-hidden="true" />
            <div className="lbt-hero__spec-item">
              <span className="lbt-hero__spec-val">Level 1–3</span>
              <span className="lbt-hero__spec-lbl">Operator Certification</span>
            </div>
            <div className="lbt-hero__spec-divider" aria-hidden="true" />
            <div className="lbt-hero__spec-item">
              <span className="lbt-hero__spec-val">Root-Cause</span>
              <span className="lbt-hero__spec-lbl">Systematic Fault Isolation</span>
            </div>
          </div> */}
        </div>
      </div>

      <div className="lbt-hero__bottom-border" aria-hidden="true" />
    </section>
  );
}
