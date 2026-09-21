import { Button } from "@/components/ui";

export default function Hero() {
  return (
    <section className="lbt-hero" aria-labelledby="tt-heading">
      <div className="container lbt-hero__container">
        <div className="lbt-hero__content">
          <div className="lbt-hero__badge-row">
            <span className="lbt-hero__badge">
              <span className="lbt-hero__badge-dot" aria-hidden="true" />
              Technical Competency &amp; Root-Cause Diagnostics
            </span>
          </div>

          <div className="lbt-hero__kicker">
            <span className="lbt-hero__kicker-line" aria-hidden="true" />
            Specialist Engineering Advisory
          </div>

          <h1 id="tt-heading" className="lbt-hero__title">
            Expert root-cause diagnosis{" "}
            <span className="lbt-hero__title-accent">&amp; certified operator training.</span>
          </h1>

          <p className="lbt-hero__body">
            Resolve persistent electrical faults, governor hunting, and nuisance breaker
            trips with data-backed engineering diagnostics. Empower your in-house
            facility engineers with accredited, practical training courses aligned with
            NFPA 110 and NETA standards.
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
