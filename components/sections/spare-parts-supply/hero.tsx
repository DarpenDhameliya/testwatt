import { Button } from "@/components/ui";

export default function Hero() {
  return (
    <section className="lbt-hero" aria-labelledby="sp-heading">
      <div className="container lbt-hero__container">
        <div className="lbt-hero__content">
          <div className="lbt-hero__badge-row">
            <span className="lbt-hero__badge">
              <span className="lbt-hero__badge-dot" aria-hidden="true" />
              Traceable Fleet Components &amp; Fast Logistics
            </span>
          </div>

          <div className="lbt-hero__kicker">
            <span className="lbt-hero__kicker-line" aria-hidden="true" />
            Spare Parts Supply &amp; Replacement
          </div>

          <h1 id="sp-heading" className="lbt-hero__title">
            OEM-grade certified components{" "}
            <span className="lbt-hero__title-accent">with documented provenance.</span>
          </h1>

          <p className="lbt-hero__body">
            Eliminate costly test downtime and protect asset warranties. TestWatt
            stocks certified replacement resistor grids, heavy-duty contactors, digital
            instrumentation, and high-temp blowers engineered specifically for load
            testing systems.
          </p>

          {/* <div className="lbt-hero__actions">
            <Button to="/contact" variant="primary" size="lg">
              Request Parts Quotation
            </Button>
            <Button href="#parts-catalog" variant="outline-light" size="lg">
              View Inventory Catalog ↓
            </Button>
          </div> */}

          {/* Quick Technical Highlights Strip */}
          {/* <div className="lbt-hero__specs-strip">
            <div className="lbt-hero__spec-item">
              <span className="lbt-hero__spec-val">100%</span>
              <span className="lbt-hero__spec-lbl">OEM Traceable Parts</span>
            </div>
            <div className="lbt-hero__spec-divider" aria-hidden="true" />
            <div className="lbt-hero__spec-item">
              <span className="lbt-hero__spec-val">24–48h</span>
              <span className="lbt-hero__spec-lbl">Express Air Dispatch</span>
            </div>
            <div className="lbt-hero__spec-divider" aria-hidden="true" />
            <div className="lbt-hero__spec-item">
              <span className="lbt-hero__spec-val">500+</span>
              <span className="lbt-hero__spec-lbl">Critical Spares In Stock</span>
            </div>
          </div> */}
        </div>
      </div>

      <div className="lbt-hero__bottom-border" aria-hidden="true" />
    </section>
  );
}
