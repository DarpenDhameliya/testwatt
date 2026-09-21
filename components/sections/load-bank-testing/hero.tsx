import { Button } from "@/components/ui";

export default function Hero() {
  return (
    <section className="lbt-hero" aria-labelledby="lbt-heading">
      <div className="container lbt-hero__container">
        <div className="lbt-hero__content">
          <div className="lbt-hero__badge-row">
            <span className="lbt-hero__badge">
              <span className="lbt-hero__badge-dot" aria-hidden="true" />
              Guaranteed Operational Readiness
            </span>
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

          {/* <div className="lbt-hero__actions">
            <Button to="/contact" variant="primary" size="lg">
              Request a Testing Proposal
            </Button>
            <Button href="#what-it-involves" variant="outline-light" size="lg">
              What&apos;s involved ↓
            </Button>
          </div> */}

          {/* Quick Technical Highlights Strip */}
          {/* <div className="lbt-hero__specs-strip">
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
          </div> */}
        </div>
      </div>

      <div className="lbt-hero__bottom-border" aria-hidden="true" />
    </section>
  );
}
