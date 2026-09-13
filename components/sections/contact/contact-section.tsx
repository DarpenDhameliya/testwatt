import ContactForm from "@/components/contact-form";
import { RESPONSE_TIMES } from "@/lib/content";
import { SALES_EMAIL, SUPPORT_EMAIL } from "@/lib/site";

export default function ContactSection() {
  return (
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
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                    className="contact-card__email-icon"
                  >
                    <rect width="20" height="16" x="2" y="4" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
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
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                    className="contact-card__email-icon"
                  >
                    <rect width="20" height="16" x="2" y="4" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                  {SUPPORT_EMAIL}
                </a>
              </div>
            </div>

            <div className="response-times" aria-label="Response times">
              <div className="response-times__heading">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                  className="response-times__icon"
                >
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
                Response Times
              </div>
              {RESPONSE_TIMES.map((row) => (
                <div key={row.label} className="response-times__row">
                  <span className="response-times__label">{row.label}</span>
                  <span className="response-times__value">{row.value}</span>
                </div>
              ))}
            </div>
          </aside>

          <div className="contact-form-panel" id="contact-form">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
