import { Button } from "@/components/ui";

export default function Hero() {
  return (
    <section className="lbt-hero lbt-hero--full" aria-labelledby="lbt-heading">
      <div className="container lbt-hero__container">
        <div className="lbt-hero__content">
          <p className="hero__eyebrow">Load Bank Testing</p>

          <h1 id="lbt-heading" className="lbt-hero__title">
            <span className="lbt-hero__title-line lbt-hero__title-line--1">
              Find out what your generator can carry before an outage comes and put it to the test.
            </span>
          </h1>

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
