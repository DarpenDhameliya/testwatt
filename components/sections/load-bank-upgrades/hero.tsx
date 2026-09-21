import { Button } from "@/components/ui";

export default function Hero() {
  return (
    <section className="lbt-hero" aria-labelledby="lbu-heading">
      <div className="container lbt-hero__container">
        <div className="lbt-hero__content">
          <div className="lbt-hero__badge-row">
            <span className="lbt-hero__badge">
              <span className="lbt-hero__badge-dot" aria-hidden="true" />
              Asset Modernisation &amp; Capital Efficiency
            </span>
          </div>

          <div className="lbt-hero__kicker">
            <span className="lbt-hero__kicker-line" aria-hidden="true" />
            Load Bank Modernisation &amp; Retrofits
          </div>

          <h1 id="lbu-heading" className="lbt-hero__title">
            Modernise legacy load banks{" "}
            <span className="lbt-hero__title-accent">to digital SCADA precision.</span>
          </h1>

          <p className="lbt-hero__body">
            Extend the life and capability of existing load bank fleets without full
            replacement. TestWatt engineers custom digital PLC automation, cloud telemetry,
            reactive capacity expansions, and multi-voltage retrofits at up to 60% lower
            cost than acquiring new units.
          </p>

          {/* <div className="lbt-hero__actions">
            <Button to="/contact" variant="primary" size="lg">
              Discuss Upgrade Project
            </Button>
            <Button href="#upgrade-solutions" variant="outline-light" size="lg">
              Explore Modernisation Paths ↓
            </Button>
          </div> */}

          {/* Quick Technical Highlights Strip */}
          {/* <div className="lbt-hero__specs-strip">
            <div className="lbt-hero__spec-item">
              <span className="lbt-hero__spec-val">-60%</span>
              <span className="lbt-hero__spec-lbl">Capex vs New Unit</span>
            </div>
            <div className="lbt-hero__spec-divider" aria-hidden="true" />
            <div className="lbt-hero__spec-item">
              <span className="lbt-hero__spec-val">0.1 kW</span>
              <span className="lbt-hero__spec-lbl">Precision Step Control</span>
            </div>
            <div className="lbt-hero__spec-divider" aria-hidden="true" />
            <div className="lbt-hero__spec-item">
              <span className="lbt-hero__spec-val">SCADA / IoT</span>
              <span className="lbt-hero__spec-lbl">Live Cloud Telemetry</span>
            </div>
          </div> */}
        </div>
      </div>

      <div className="lbt-hero__bottom-border" aria-hidden="true" />
    </section>
  );
}
