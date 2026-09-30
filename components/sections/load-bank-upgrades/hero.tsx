import HeroEyebrow from "@/components/hero-eyebrow";
import { Button } from "@/components/ui";

export default function Hero() {
  return (
    <section className="lbt-hero" aria-labelledby="lbu-heading">
      <div className="container lbt-hero__container">
        <div className="lbt-hero__content">
          <HeroEyebrow icon="upgrade">Load Bank Upgrades</HeroEyebrow>

          <h1 id="lbu-heading" className="lbt-hero__title">
            <span className="lbt-hero__title-line lbt-hero__title-line--1">
              Bring an old load bank
            </span>
            <br />
            <span className="lbt-hero__title-line lbt-hero__title-line--2 lbt-hero__title-accent">
              up to a digital standard.
            </span>
          </h1>

          <p className="lbt-hero__body">
            Buying a new load bank isn&apos;t always necessary. We can add PLC
            automation, cloud telemetry, extra reactive capacity or multi-voltage
            switching to the units you already own, and it typically costs about 60%
            less than replacing them.
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
