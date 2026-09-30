import HeroEyebrow from "@/components/hero-eyebrow";
import { Button } from "@/components/ui";

export default function Hero() {
  return (
    <section className="lbt-hero" aria-labelledby="lbt-heading">
      <div className="container lbt-hero__container">
        <div className="lbt-hero__content">
          <HeroEyebrow icon="bolt">Critical Power Testing</HeroEyebrow>

          <h1 id="lbt-heading" className="lbt-hero__title">
            <span className="lbt-hero__title-line lbt-hero__title-line--1">
              Full-load proof,
            </span>
            <br />
            <span className="lbt-hero__title-line lbt-hero__title-line--2 lbt-hero__title-accent">
              not a best guess.
            </span>
          </h1>

          <p className="lbt-hero__body">
            We load test standby generators, UPS systems and switchgear on your site,
            right up to their full nameplate rating. Depending on the equipment, we
            use resistive, reactive or hybrid load. When we finish, you get a
            certified report that's ready to show an auditor.
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
