import Image from "next/image";
import type { Metadata } from "next";
import {
  Button,
  CtaBand,
  FeatureItem,
  Kicker,
  NumberedItem,
  PositiveTag,
  SectionHeading,
} from "@/components/ui";
import {
  MODERNISATION_OPTIONS,
  SERVICING_REASONS,
  SPARE_PARTS,
  TROUBLESHOOTING_STEPS,
} from "@/lib/content";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Repairs & Servicing | Load Bank Maintenance & Modernisation | Test Watt",
  description:
    "Load bank repairs, servicing, preventive maintenance, modernisation, troubleshooting and OEM-grade spare parts for reliable critical power test equipment.",
  keywords:
    "load bank servicing, load bank repair, preventative maintenance, load bank modernisation, spare parts, testing equipment support",
  alternates: { canonical: "/repairs-servicing" },
};

const PAGE_SCHEMA = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      name: "Load Bank Repairs & Servicing",
      provider: { "@id": `${SITE_URL}#organization` },
      serviceType: [
        "Preventive Maintenance",
        "Emergency Repairs",
        "Load Bank Modernisation",
        "Technical Troubleshooting",
        "Spare Parts Supply",
      ],
      areaServed: "Worldwide",
      description:
        "Maintenance and repair services for portable and fixed load banks to restore accuracy, safety and readiness for critical power testing.",
    },
  ],
};

export default function RepairsServicingPage() {
  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(PAGE_SCHEMA) }}
      />

      <section className="page-hero" aria-labelledby="rs-heading">
        <div className="container">
          <div className="page-hero__grid">
            <div className="page-hero__content">
              <PositiveTag>Precision Maintenance &amp; Service Protection</PositiveTag>
              <Kicker>Repairs &amp; Servicing</Kicker>
              <h1 id="rs-heading" className="page-hero__title">
                Maximum uptime &amp; peak performance{" "}
                <span className="page-hero__title-muted">for your test fleet.</span>
              </h1>
              <p className="page-hero__body">
                Keep your load testing assets operating at 100% capacity. Test Watt provides
                comprehensive preventive maintenance, rapid engineering response, control
                system modernizations, and genuine replacement parts.
              </p>
              <Button to="/contact" variant="primary" size="lg">
                Book a Service Visit
              </Button>
            </div>
            <div className="page-hero__image" aria-hidden="true">
              <Image
                src="/images/hero-repairs-servicing.jpg"
                alt="Electrical control panel with circuit breakers and wiring — requiring regular servicing and maintenance"
                width={700}
                height={500}
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section section--white" aria-labelledby="why-service-heading">
        <div className="container">
          <div className="two-col-grid">
            <div>
              <Kicker>Why Servicing Is Necessary</Kicker>
              <h2 id="why-service-heading" className="content-heading">
                Load banks need maintenance too
              </h2>
              <p className="content-body">
                A load bank is a high-power resistive or reactive load device operating
                continuously at rated current and voltage. Resistance elements degrade with
                thermal cycling. Contactors and switchgear accumulate contact wear. Cooling
                systems accumulate contamination. Control electronics age.
              </p>
              <p className="content-body">
                An unmaintained load bank may indicate a lower load than it is actually
                applying — or fail to achieve its rated capacity at all. Either outcome means
                the generator test data is invalid: you believe you have tested to 100% when
                you have not.
              </p>
              <p className="content-body">
                Test Watt service intervals are aligned to manufacturer recommendations and
                operating hours. Our engineers carry calibrated instruments for in-situ
                verification of load accuracy alongside all maintenance work.
              </p>
            </div>
            <div className="feature-grid">
              {SERVICING_REASONS.map((item) => (
                <FeatureItem key={item.title} item={item} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section section--grey" aria-labelledby="training-heading">
        <div className="container">
          <SectionHeading
            kicker="Training & Troubleshooting"
            heading={
              <span id="training-heading">
                Structured fault investigation and skills transfer
              </span>
            }
            className="section-heading--mb"
          />
          <div className="steps-grid steps-grid--4">
            {TROUBLESHOOTING_STEPS.map((step, index) => (
              <NumberedItem
                key={step.step}
                step={step}
                last={index === TROUBLESHOOTING_STEPS.length - 1}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="section section--navy" aria-labelledby="mod-heading">
        <div className="container">
          <div className="mod-grid">
            <div>
              <Kicker>Modernisation Options</Kicker>
              <h2 id="mod-heading" className="content-heading content-heading--light">
                Extend capability without full replacement
              </h2>
              <p className="content-body content-body--light">
                Existing load bank equipment can often be upgraded to current capability
                standards at significantly lower cost than replacement. Test Watt engineers
                assess each installation individually and specify upgrades that deliver
                measurable improvements in accuracy, connectivity or capacity.
              </p>
            </div>
            <div className="mod-options-grid">
              {MODERNISATION_OPTIONS.map(([left, right], index) => (
                <div key={index} className="mod-options-row">
                  <div className="mod-options-cell mod-options-cell--border-right">
                    <span className="mod-options-dot" aria-hidden="true" />
                    <span className="mod-options-text">{left}</span>
                  </div>
                  <div className="mod-options-cell">
                    <span className="mod-options-dot" aria-hidden="true" />
                    <span className="mod-options-text">{right}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section section--white" aria-labelledby="parts-heading">
        <div className="container">
          <SectionHeading
            kicker="Spare Parts"
            heading={
              <span id="parts-heading">OEM-grade parts with documented provenance</span>
            }
            body="We supply OEM-specification replacement parts for load banks and associated power equipment. Every part is supplied with full documentation of origin, specification and traceability. No substitute grades. No undocumented sourcing."
            maxWidth={640}
            className="section-heading--mb-sm"
          />
          <div className="spare-parts-grid">
            {SPARE_PARTS.map((group) => (
              <div key={group.category} className="spare-parts-col">
                <div className="spare-parts-col__heading">{group.category}</div>
                <ul className="spare-parts-col__list" aria-label={group.category}>
                  {group.items.map((item) => (
                    <li key={item} className="spare-parts-col__item">
                      <span className="spare-parts-col__dot" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="parts-note">
            <span className="parts-note__dot" aria-hidden="true" />
            <p className="parts-note__text">
              Parts not listed above may be available on request. Contact our support team
              with the equipment make, model and part reference.
            </p>
          </div>
        </div>
      </section>

      <CtaBand
        heading="Book a service visit"
        body="Describe your equipment, location and symptoms. We will arrange an engineering visit at a time that suits your maintenance programme."
        actions={[
          { label: "Book a Service Visit", to: "/contact", variant: "primary" },
          { label: "Request Parts", to: "/contact", variant: "outline-light" },
        ]}
      />
    </div>
  );
}
