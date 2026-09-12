import { FeatureItem, Kicker } from "@/components/ui";
import { WHY_TEST_WATT } from "@/lib/content";

export default function WhyTestWatt() {
  return (
    <section className="section section--grey" aria-labelledby="why-heading">
      <div className="container">
        <div className="why-grid">
          <div className="why-grid__sticky">
            <Kicker>Why Test Watt</Kicker>
            <h2 id="why-heading" className="why-grid__title">
              The case for independent load testing
            </h2>
            <p className="why-grid__body">
              Generator manufacturers publish rated outputs. Installers commission to
              spec. But only a full-load test at nameplate rating — under controlled,
              documented conditions — can confirm that your critical power infrastructure
              will actually deliver when called upon.
            </p>
          </div>
          <div className="feature-grid">
            {WHY_TEST_WATT.map((item) => (
              <FeatureItem key={item.title} item={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
