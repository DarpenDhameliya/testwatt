import { Button, Kicker, PositiveTag } from "@/components/ui";

export default function HomeCta() {
  return (
    <section className="cta-band" aria-labelledby="cta-heading">
      <div className="container">
        <div className="cta-band__inner">
          <div className="cta-band__text">
            {/* <PositiveTag>24/7 Nationwide Mobilization</PositiveTag> */}
            <Kicker>Get In Touch</Kicker>
            <h2 id="cta-heading" className="cta-band__heading">
              Ready to test at{" "}
              <span style={{ color: "var(--color-red)" }}>full nameplate load?</span>
            </h2>
            <p className="cta-band__body">
              Tell us which equipment needs testing, servicing or upgrading, and one of our engineers will reply with a clear proposal.
            </p>
          </div>
          <div className="cta-band__actions">
            <Button to="/contact" variant="primary" size="lg">
              Request a Free Proposal
            </Button>
            <Button to="/load-bank-testing" variant="outline-light" size="lg">
              Explore Services
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
