import { SectionHeading } from "@/components/ui";
import { LOAD_BANK_TYPES } from "@/lib/content";

const TYPE_METADATA = [
  {
    role: "Pure kW Thermal Loading",
    metric: "PF = 1.0 (Unity)",
    modifier: "resistive",
    footerTag: "⚡ NFPA 110 & ISO 8528 Acceptance Standard",
  },
  {
    role: "Inductive & Capacitive Loading",
    metric: "PF = 0.8 (Variable)",
    modifier: "reactive",
    footerTag: "🔄 Critical for AVR & UPS Stability Proofing",
  },
  {
    role: "Simultaneous kW + kVAR Simulation",
    metric: "Total kVA Simulation",
    modifier: "hybrid",
    footerTag: "🏢 Full-Scale Data Centre & Facility Verification",
  },
];

export default function LoadBankTypes() {
  return (
    <section className="section section--grey" aria-labelledby="types-heading">
      <div className="container">
        <SectionHeading
          kicker="Load Bank Technologies"
          heading={
            <span id="types-heading">The right technology for your application</span>
          }
          body="A load test only tells you something if the load bank suits your electrical setup. We have resistive, reactive and hybrid units, and we choose the one that fits your site."
          className="section-heading--mb"
        />

        <div className="tech-bank-grid">
          {LOAD_BANK_TYPES.map((bank, index) => {
            const meta = TYPE_METADATA[index] || TYPE_METADATA[0];
            return (
              <article
                key={bank.type}
                className={`tech-bank-card tech-bank-card--${meta.modifier}`}
              >
                {/* Top color indicator bar */}
                <div className="tech-bank-card__top-bar" aria-hidden="true" />

                {/* Header: Symbol Badge + Metric + Index */}
                <div className="tech-bank-card__header">
                  <div className="tech-bank-card__badge-wrap">
                    <div className="tech-bank-card__symbol-box" aria-hidden="true">
                      {bank.icon}
                    </div>
                    <span className="tech-bank-card__metric-tag">{meta.metric}</span>
                  </div>
                  <span className="tech-bank-card__index">{`0${index + 1}`}</span>
                </div>

                {/* Title & Technical Role */}
                <div className="tech-bank-card__title-group">
                  <h3 id={`bank-type-title-${index}`} className="tech-bank-card__title">
                    {bank.type}
                  </h3>
                  <span className="tech-bank-card__role">{meta.role}</span>
                </div>

                {/* Description */}
                <p className="tech-bank-card__body">{bank.detail}</p>

                {/* Divider */}
                <div className="tech-bank-card__divider" aria-hidden="true" />

                {/* Typical Applications Checklist */}
                <div className="tech-bank-card__apps-section">
                  <div className="tech-bank-card__apps-label">
                    <span className="tech-bank-card__apps-dot" aria-hidden="true" />
                    Typical Applications
                  </div>
                  <ul
                    className="tech-bank-card__apps-list"
                    aria-labelledby={`bank-type-title-${index}`}
                  >
                    {bank.applications.map((application) => (
                      <li key={application} className="tech-bank-card__app-item">
                        <svg
                          className="tech-bank-card__check-icon"
                          viewBox="0 0 16 16"
                          fill="none"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            d="M13.3 4.3L6.5 11.2L2.7 7.4"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        <span>{application}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Footer Standard Tag */}
                {/* <div className="tech-bank-card__footer">
                  <span className="tech-bank-card__footer-tag">{meta.footerTag}</span>
                </div> */}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
