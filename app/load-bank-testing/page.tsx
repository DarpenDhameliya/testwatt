import Image from "next/image";
import type { Metadata } from "next";
import TechnicalChart from "@/components/technical-chart";
import {
  Button,
  CtaBand,
  FeatureItem,
  Kicker,
  PositiveTag,
  SectionHeading,
  StandardsTable,
} from "@/components/ui";
import {
  LOAD_BANK_TYPES,
  LOAD_TEST_ADVANTAGES,
  MONITORED_PARAMETERS,
  STANDARDS_LOAD_BANK,
  STEP_LOAD_PROFILE,
} from "@/lib/content";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Load Bank Testing | Generator, UPS & Switchgear Testing | Test Watt",
  description:
    "Independent full-load load bank testing for generators, UPS systems and switchgear. Resistive, reactive and hybrid testing at nameplate rating with certified reports.",
  keywords:
    "load bank testing, generator load testing, UPS load test, switchgear testing, resistive load bank, reactive load bank, hybrid load bank",
  alternates: { canonical: "/load-bank-testing" },
};

const PAGE_SCHEMA = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      name: "Load Bank Testing",
      provider: { "@id": `${SITE_URL}#organization` },
      serviceType: [
        "Generator Load Bank Testing",
        "UPS Load Bank Testing",
        "Switchgear Load Bank Testing",
        "Reactive Load Bank Testing",
        "Hybrid Load Bank Testing",
      ],
      areaServed: "Worldwide",
      description:
        "Full-load proof testing for critical energy systems under controlled, documented conditions at full nameplate rating.",
    },
  ],
};

export default function LoadBankTestingPage() {
  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(PAGE_SCHEMA) }}
      />

      <section className="page-hero" aria-labelledby="lbt-heading">
        <div className="container">
          <div className="page-hero__grid">
            <div className="page-hero__content">
              <PositiveTag>Guaranteed Operational Readiness</PositiveTag>
              <Kicker>Load Bank Testing</Kicker>
              <h1 id="lbt-heading" className="page-hero__title">
                Full-load proof,{" "}
                <span className="page-hero__title-muted">
                  uncompromised power security.
                </span>
              </h1>
              <p className="page-hero__body">
                Verify your backup generators, UPS systems, and switchgear under full
                nameplate capacity. We provide precise resistive, reactive, and hybrid load
                proofing — empowering facility leaders with certified, audit-ready
                compliance documentation.
              </p>
              <div className="page-hero__actions">
                <Button to="/contact" variant="primary" size="lg">
                  Request a Testing Proposal
                </Button>
                <Button href="#what-it-involves" variant="outline-light" size="lg">
                  What&apos;s involved ↓
                </Button>
              </div>
            </div>
            <div className="page-hero__image" aria-hidden="true">
              <Image
                src="/images/hero-load-bank-testing.jpg"
                alt="Electrical transformer insulators and infrastructure requiring load testing"
                width={700}
                height={500}
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <section
        id="what-it-involves"
        className="section section--white"
        aria-labelledby="involves-heading"
      >
        <div className="container">
          <div className="two-col-grid">
            <div>
              <Kicker>What the Test Involves</Kicker>
              <h2 id="involves-heading" className="content-heading">
                Controlled loading to nameplate rating
              </h2>
              <p className="content-body">
                A load bank test connects a calibrated resistive or reactive load — matched
                to the equipment&apos;s rated output — and applies that load in defined
                incremental steps. Each step is held for a minimum period while parameters
                including voltage, current, frequency, power factor, temperature and fuel
                consumption are recorded continuously.
              </p>
              <p className="content-body">
                The test culminates in a full-duration run at 100% of nameplate rating. Only
                this sustained full-load condition confirms that cooling systems are
                adequate, fuel systems deliver under load, AVR and governor control is
                stable, and transfer systems operate within specification.
              </p>
              <p className="content-body">
                Test Watt engineers operate calibrated portable load banks at your site. The
                only utility supply interruption is the planned transfer to test load — all
                other site power is unaffected throughout.
              </p>
            </div>
            <div>
              <div className="params-box">
                <div className="params-box__heading">Parameters Monitored During Test</div>
                <ul className="params-list" aria-label="Monitored parameters">
                  {MONITORED_PARAMETERS.map((parameter) => (
                    <li key={parameter} className="params-list__item">
                      <span className="params-list__dot" aria-hidden="true" />
                      {parameter}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--grey" aria-labelledby="types-heading">
        <div className="container">
          <SectionHeading
            kicker="Load Bank Types"
            heading={
              <span id="types-heading">The right technology for your application</span>
            }
            className="section-heading--mb"
          />
          <div className="bank-types-grid">
            {LOAD_BANK_TYPES.map((bank, index) => (
              <article key={bank.type} className="bank-type-card">
                <div className="bank-type-card__icon" aria-hidden="true">
                  {bank.icon}
                </div>
                <h3 id={`bank-type-title-${index}`} className="bank-type-card__title">
                  {bank.type}
                </h3>
                <p className="bank-type-card__body">{bank.detail}</p>
                <div>
                  <div className="bank-type-card__apps-label">Typical Applications</div>
                  <ul
                    className="bank-type-card__apps"
                    aria-labelledby={`bank-type-title-${index}`}
                  >
                    {bank.applications.map((application) => (
                      <li key={application} className="bank-type-card__app-item">
                        <span className="bank-type-card__app-dot" aria-hidden="true" />
                        {application}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--navy" aria-labelledby="profile-heading">
        <div className="container">
          <SectionHeading
            kicker="Step-Load Profile"
            heading={
              <span id="profile-heading">Incremental loading to full nameplate rating</span>
            }
            body="Load is applied in 25% incremental steps, each held for a minimum dwell period before progressing. This allows engine and electrical systems to stabilise at each level before full-load is achieved. All parameters are recorded continuously throughout."
            light
            maxWidth={640}
            className="section-heading--mb"
          />
          <TechnicalChart
            data={STEP_LOAD_PROFILE}
            label="Typical Step-Load Test Profile — % Nameplate Rating vs Elapsed Time"
            height={260}
          />
        </div>
      </section>

      <section className="section section--white" aria-labelledby="standards-heading">
        <div className="container">
          <SectionHeading
            kicker="Standards & Compliance"
            heading={<span id="standards-heading">Standards to which we test</span>}
            className="section-heading--mb-sm"
          />
          <StandardsTable standards={STANDARDS_LOAD_BANK} scopeLabel="Application" />

          <div className="advantages-section">
            <Kicker>Advantages</Kicker>
            <h2 className="advantages-section__title">Six reasons to load test</h2>
            <div className="feature-grid feature-grid--numbered">
              {LOAD_TEST_ADVANTAGES.map((item, index) => (
                <FeatureItem
                  key={item.title}
                  prefix={`${String(index + 1).padStart(2, "0")} — `}
                  item={item}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <CtaBand
        heading="Ready to schedule your load test?"
        body="Describe your equipment and site. We will provide a test specification and cost proposal."
        actions={[{ label: "Request a Test", to: "/contact", variant: "primary" }]}
      />
    </div>
  );
}
