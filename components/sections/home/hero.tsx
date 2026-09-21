import Image from "next/image";
import { Button, Kicker, PositiveTag } from "@/components/ui";

export default function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-heading">
      <div className="hero__bg" aria-hidden="true">
        <Image src="/images/hero-home.jpg" alt="" width={1920} height={1200} priority />
        <div className="hero__scrim" />
      </div>

      <div className="hero__inner container">
        <div className="hero__content">
          <PositiveTag>Built on Engineering Expertise. Defined by Exceptional Service.</PositiveTag>
          <Kicker>Critical Power Testing Specialists</Kicker>
          <h1 id="hero-heading" className="hero__title">
            Full-load proof,
            <br />
            <span className="hero__title-muted">
              <span className="hero__title-accent">100%</span> nameplate capacity. Zero guesswork.
            </span>
          </h1>
          <p className="hero__body">
            A no-load test run won&apos;t tell you if your backup power can carry the building.
            TestWatt brings mobile resistive, reactive, and hybrid load banks directly to your
            site—stress-testing generators, UPS units, and switchgear up to 100% nameplate
            capacity with certified NFPA and ISO compliance reports.
          </p>
          {/* <div className="hero__actions">
            <Button to="/contact" variant="primary" size="lg">
              Request a Free Proposal
            </Button>
            <Button to="/load-bank-testing" variant="outline-light" size="lg">
              Explore Testing Capabilities
            </Button>
          </div> */}
        </div>
      </div>
    </section>
  );
}
