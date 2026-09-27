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
    title: "Keeps Test Results Accurate",
    tagline: "Worn elements give you bad data",
    body: "Tired resistance elements, or instruments that have drifted out of calibration, produce wrong readings. Regular inspection keeps your numbers reliable.",
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
    tagline: "Heat and cycling take a toll",
    body: "Load banks run hot and carry heavy electrical loads. Inspecting, cleaning and replacing parts on schedule catches wear before it becomes a breakdown.",
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
    title: "Avoids Downtime You Didn't Plan For",
    tagline: "Don't find out on test day",
    body: "If a load bank fails just before a booked test, you face delays and possible compliance problems. Routine maintenance makes that far less likely.",
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
    title: "Protects the Manufacturer Warranty",
    tagline: "Evidence for when you need it",
    body: "Most OEM warranties expect regular maintenance by a competent provider. Our service records give you the proof if you ever need to make a claim.",
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
    title: "Backs Up Your Compliance Paperwork",
    tagline: "The bit auditors sometimes check",
    body: "Auditors sometimes ask whether the test equipment itself was maintained and calibrated. People forget this, and our service records answer it.",
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
    title: "Costs Less Than the Alternative",
    tagline: "Cheaper than an emergency call-out",
    body: "Planned maintenance costs less than an emergency repair, and you avoid paying to rebook a test that got cancelled.",
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
              A load bank spends its working life at rated current and voltage. Heating
              and cooling cycles wear down the resistance elements, contactors burn at
              the contacts, dirt builds up in the cooling system, and the control
              electronics get old. It's the same story as any machine that works hard.
            </p>
            <p className="why-grid__body">
              If a load bank isn't maintained, it may deliver less load than its display
              says, or never reach its rated capacity. The generator results you get from
              it can't be trusted, and you could believe you tested at 100% when you
              didn't.
            </p>
            <p className="why-grid__body">
              We plan service intervals around the manufacturer's advice and the hours the
              unit has actually run. Our engineers also bring calibrated instruments, so
              they can check load accuracy on site while they do the maintenance.
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
