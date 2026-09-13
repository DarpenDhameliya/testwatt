import { Kicker, PositiveTag } from "@/components/ui";

export default function Hero() {
  return (
    <section className="contact-hero" aria-labelledby="contact-heading">
      {/* Background ambient lighting and subtle tech grid */}
      <div className="contact-hero__bg" aria-hidden="true">
        <div className="contact-hero__ambient-glow" />
        <div className="contact-hero__grid-pattern" />
      </div>

      <div className="container contact-hero__container">
        <div className="contact-hero__content">
          <PositiveTag>Fast Engineering Response guaranteed</PositiveTag>
          <Kicker>Contact Us</Kicker>

          <h1 id="contact-heading" className="contact-hero__title">
            Let&apos;s discuss your{" "}
            <span className="contact-hero__title-accent">critical power testing needs.</span>
          </h1>

          <p className="contact-hero__body">
            Our power test engineers review every enquiry personally and provide clear,
            tailored engineering proposals. Tell us about your equipment and schedule — we
            are here to support your operation.
          </p>

          {/* Business Commitment Highlights Strip */}
          <div className="contact-hero__specs-strip">
            <div className="contact-hero__spec-item">
              <span className="contact-hero__spec-val">&lt; 2 Hrs</span>
              <span className="contact-hero__spec-lbl">Urgent Response</span>
            </div>
            <div className="contact-hero__spec-divider" aria-hidden="true" />
            <div className="contact-hero__spec-item">
              <span className="contact-hero__spec-val">100%</span>
              <span className="contact-hero__spec-lbl">Engineer Reviewed</span>
            </div>
            <div className="contact-hero__spec-divider" aria-hidden="true" />
            <div className="contact-hero__spec-item">
              <span className="contact-hero__spec-val">Direct</span>
              <span className="contact-hero__spec-lbl">Technical Access</span>
            </div>
            <div className="contact-hero__spec-divider" aria-hidden="true" />
            <div className="contact-hero__spec-item">
              <span className="contact-hero__spec-val">24/7</span>
              <span className="contact-hero__spec-lbl">Critical Support</span>
            </div>
          </div>
        </div>
      </div>

      <div className="contact-hero__bottom-border" aria-hidden="true" />
    </section>
  );
}
