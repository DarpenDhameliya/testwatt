import { Button } from "@/components/ui";

export default function RepairsServicingCta() {
  return (
    <section className="cta-band" aria-labelledby="rs-cta-heading">
      <div className="container">
        <div className="cta-band__inner">
          <div className="cta-band__text">
            <h2 id="rs-cta-heading" className="cta-band__heading">
              Book a service visit
            </h2>
            <p className="cta-band__body">
              Describe your equipment, location and symptoms. We will arrange an
              engineering visit at a time that suits your maintenance programme.
            </p>
          </div>
          <div className="cta-band__actions">
            <Button to="/contact" variant="primary" size="lg">
              Book a Service Visit
            </Button>
            <Button to="/contact" variant="outline-light" size="lg">
              Request Parts
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
