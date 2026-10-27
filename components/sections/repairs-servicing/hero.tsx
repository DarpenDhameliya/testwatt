import { Button } from "@/components/ui";

export default function Hero() {
  return (
    <section className="lbt-hero lbt-hero--full" aria-labelledby="rs-heading">
      <div className="container lbt-hero__container">
        <div className="lbt-hero__content">
          <p className="hero__eyebrow">Repairs &amp; Servicing</p>

          <h1 id="rs-heading" className="lbt-hero__title">
            Repairs, preventive maintenance and spare parts for AC/DC and resistive-reactive load banks, onsite or in our shop
          </h1>
          {/* <div className="lbt-hero__actions">
            <Button to="/contact" variant="primary" size="lg">
              Book a Service Visit
            </Button>
            <Button href="#why-servicing" variant="outline-light" size="lg">
              Why Servicing Matters ↓
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
              <span className="lbt-hero__spec-val">24/7</span>
              <span className="lbt-hero__spec-lbl">Rapid Mobilisation</span>
            </div>
            <div className="lbt-hero__spec-divider" aria-hidden="true" />
            <div className="lbt-hero__spec-item">
              <span className="lbt-hero__spec-val">ISO &amp; OEM</span>
              <span className="lbt-hero__spec-lbl">Calibrated Standards</span>
            </div>
          </div> */}
        </div>
      </div>

      <div className="lbt-hero__bottom-border" aria-hidden="true" />
    </section>
  );
}
