import ContactForm from "@/components/contact-form";
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

              <a
                href={`mailto:${SALES_EMAIL}`}
                className="contact-card contact-card--navy"
                aria-label={`New Enquiries — email ${SALES_EMAIL}`}
              >
                <div className="contact-card__icon-box" aria-hidden="true">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect width="20" height="16" x="2" y="4" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                </div>
                <div className="contact-card__content">
                  <span className="contact-card__title">New Enquiries</span>
                  <span className="contact-card__email">{SALES_EMAIL}</span>
                </div>
                {/* <div className="contact-card__arrow" aria-hidden="true">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14M13 5l7 7-7 7" />
                  </svg>
                </div> */}
              </a>

              <a
                href={`mailto:${SUPPORT_EMAIL}`}
                className="contact-card contact-card--red"
                aria-label={`Existing Customers — email ${SUPPORT_EMAIL}`}
              >
                <div className="contact-card__icon-box" aria-hidden="true">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
                    <path d="M8 16l-4 4" />
                  </svg>
                </div>
                <div className="contact-card__content">
                  <span className="contact-card__title">Existing Customers</span>
                  <span className="contact-card__email">{SUPPORT_EMAIL}</span>
                </div>
                {/* <div className="contact-card__arrow" aria-hidden="true">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14M13 5l7 7-7 7" />
                  </svg>
                </div> */}
              </a>
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
