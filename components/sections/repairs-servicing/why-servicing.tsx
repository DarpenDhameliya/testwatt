import { Kicker } from "@/components/ui";

interface ServicingReasonItem {
  number: string;
  badge: string;
  title: string;
  tagline: string;
  body: string;
  icon: (className?: string) => React.ReactNode;
}

const SERVICING_ITEMS: ServicingReasonItem[] = [
  {
    number: "01",
    badge: "Test Accuracy",
    title: "Maintains Test Accuracy",
    tagline: "Calibrated Instrumentation & Valid Data",
    body: "A load bank with degraded resistance elements or drifting instrumentation will produce inaccurate results. Scheduled calibration and component inspection ensures test data remains valid.",
    icon: (className) => (
      <svg
        className={className}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M12 2v3M4.93 4.93l2.12 2.12M2 12h3M19.07 4.93l-2.12 2.12M22 12h-3" />
        <path d="M12 9a7 7 0 0 0-7 7h14a7 7 0 0 0-7-7z" />
        <path d="M12 12l2.5-2.5" />
        <circle cx="12" cy="16" r="1.5" fill="currentColor" />
      </svg>
    ),
  },
  {
    number: "02",
    badge: "Asset Longevity",
    title: "Extends Equipment Life",
    tagline: "Prevent Catastrophic Thermal Degradation",
    body: "Load banks operate at extreme thermal and electrical stress. Regular inspection, cleaning and preventive parts replacement prevents catastrophic failure and extends service life significantly.",
    icon: (className) => (
      <svg
        className={className}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
        <circle cx="12.5" cy="19" r="1.5" fill="currentColor" />
      </svg>
    ),
  },
  {
    number: "03",
    badge: "Zero Downtime",
    title: "Eliminates Unexpected Downtime",
    tagline: "Protect Mission-Critical Schedules",
    body: "Unscheduled load bank failure at a critical test date causes programme delays and compliance risk. Preventive maintenance eliminates the failure modes that cause unexpected unavailability.",
    icon: (className) => (
      <svg
        className={className}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
  },
  {
    number: "04",
    badge: "OEM Warranty",
    title: "Preserves Manufacturer Warranty",
    tagline: "Documented Audit Trails for Claims",
    body: "OEM equipment warranties typically require scheduled maintenance by a competent party. Our service records provide the audit trail to support warranty claims and preserve asset integrity.",
    icon: (className) => (
      <svg
        className={className}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
  },
  {
    number: "05",
    badge: "Audit Proof",
    title: "Supports Compliance Documentation",
    tagline: "Calibrated Test Fleet Certification",
    body: "Regular service records demonstrate that the test equipment used in compliance testing was itself maintained and calibrated — an auditor requirement many operators overlook.",
    icon: (className) => (
      <svg
        className={className}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
      </svg>
    ),
  },
  {
    number: "06",
    badge: "Cost Reduction",
    title: "Reduces Total Cost of Ownership",
    tagline: "Avoid Emergency Repair Premiums",
    body: "Scheduled maintenance is significantly cheaper than emergency repair or replacement. It also avoids the secondary costs of rescheduled tests and extended non-compliance windows.",
    icon: (className) => (
      <svg
        className={className}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <line x1="12" y1="1" x2="12" y2="23" />
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
  },
];

export default function WhyServicing() {
  return (
    <section
      id="why-servicing"
      className="section section--grey why-section-wrap"
      aria-labelledby="why-service-heading"
    >
      <div className="container">
        <div className="why-grid--equal">
          {/* Left Sticky Column (50% width) */}
          <div className="why-grid__sticky">
            <Kicker>Why Servicing Is Necessary</Kicker>
            <h2 id="why-service-heading" className="why-grid__title">
              Load banks need maintenance too
            </h2>
            <p className="why-grid__body">
              A load bank is a high-power resistive or reactive load device operating
              continuously at rated current and voltage. Resistance elements degrade with
              thermal cycling. Contactors and switchgear accumulate contact wear. Cooling
              systems accumulate contamination. Control electronics age.
            </p>
            <p className="why-grid__body">
              An unmaintained load bank may indicate a lower load than it is actually
              applying — or fail to achieve its rated capacity at all. Either outcome means
              the generator test data is invalid: you believe you have tested to 100% when
              you have not.
            </p>
            <p className="why-grid__body">
              TestWatt service intervals are aligned to manufacturer recommendations and
              operating hours. Our engineers carry calibrated instruments for in-situ
              verification of load accuracy alongside all maintenance work.
            </p>
          </div>

          {/* Right Scrolling Cards Column (50% width) */}
          <div className="why-cards-grid--stacked">
            {SERVICING_ITEMS.map((item) => (
              <article key={item.number} className="why-card">
                {/* Card Top: Icon & Meta */}
                <div className="why-card__top">
                  <div className="why-card__icon-wrap">
                    {item.icon("why-card__icon")}
                  </div>
                  <div className="why-card__meta">
                    <span className="why-card__badge">{item.badge}</span>
                    <span className="why-card__num">{item.number}</span>
                  </div>
                </div>

                {/* Heading Group */}
                <div className="why-card__heading-group">
                  <h3 className="why-card__title">{item.title}</h3>
                  <p className="why-card__tagline">{item.tagline}</p>
                </div>

                {/* Description Body */}
                <p className="why-card__body">{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
