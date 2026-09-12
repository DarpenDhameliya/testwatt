import type { Metadata } from "next";
import ContactForm from "@/components/contact-form";
import { Kicker, PositiveTag } from "@/components/ui";
import { RESPONSE_TIMES } from "@/lib/content";
import { SALES_EMAIL, SITE_URL, SUPPORT_EMAIL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact Test Watt | Request a Load Test, Service Quote or Support",
  description:
    "Contact Test Watt for load bank testing proposals, equipment servicing, spare parts enquiries and critical power support.",
  keywords:
    "contact test watt, request load bank test, service quote, load bank support, critical power enquiry",
  alternates: { canonical: "/contact" },
};

const PAGE_SCHEMA = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ContactPage",
      name: "Contact Test Watt",
      url: `${SITE_URL}/contact`,
      description:
        "Page for requesting testing, servicing, maintenance and engineering support from Test Watt.",
    },
  ],
};

export default function ContactPage() {
  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(PAGE_SCHEMA) }}
      />

      <section className="page-hero page-hero--compact" aria-labelledby="contact-heading">
        <div className="container">
          <PositiveTag>Fast Engineering Response guaranteed</PositiveTag>
          <Kicker>Contact Us</Kicker>
          <h1 id="contact-heading" className="page-hero__title">
            Let&apos;s discuss your critical power testing needs.
          </h1>
          <p className="page-hero__body page-hero__body--narrow">
            Our power test engineers review every enquiry personally and provide clear,
            tailored engineering proposals. Tell us about your equipment and schedule — we
            are here to support your operation.
          </p>
        </div>
      </section>

      <section
        className="section section--grey"
        aria-label="Contact details and enquiry form"
      >
        <div className="container">
          <div className="contact-layout">
            <aside aria-label="Direct contact information">
              <div className="contact-cards">
                <div className="contact-cards__label">Direct Contact</div>

                <div className="contact-card contact-card--navy">
                  <div className="contact-card__kicker">Sales &amp; Quotations</div>
                  <h3 className="contact-card__title">New Enquiries</h3>
                  <p className="contact-card__body">
                    For testing proposals, service quotations, spare parts pricing and new
                    project enquiries.
                  </p>
                  <a href={`mailto:${SALES_EMAIL}`} className="contact-card__email">
                    {SALES_EMAIL}
                  </a>
                </div>

                <div className="contact-card contact-card--red">
                  <div className="contact-card__kicker">Technical Support</div>
                  <h3 className="contact-card__title">Existing Customers</h3>
                  <p className="contact-card__body">
                    For service-related questions, equipment faults, parts orders and
                    ongoing project support.
                  </p>
                  <a href={`mailto:${SUPPORT_EMAIL}`} className="contact-card__email">
                    {SUPPORT_EMAIL}
                  </a>
                </div>
              </div>

              <div className="response-times" aria-label="Response times">
                <div className="response-times__heading">Response Times</div>
                {RESPONSE_TIMES.map((row) => (
                  <div key={row.label} className="response-times__row">
                    <span className="response-times__label">{row.label}</span>
                    <span className="response-times__value">{row.value}</span>
                  </div>
                ))}
              </div>
            </aside>

            <div className="contact-form-panel">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
