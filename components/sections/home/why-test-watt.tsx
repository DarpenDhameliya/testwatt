import { Kicker } from "@/components/ui";

interface WhyItem {
  number: string;
  badge: string;
  title: string;
  tagline: string;
  body: string;
  icon: (className?: string) => React.ReactNode;
}

const WHY_ITEMS: WhyItem[] = [
  {
    number: "01",
    badge: "Capacity Proof",
    title: "Confirms Real Capacity",
    tagline: "Stop guessing from the nameplate",
    body: "The nameplate is just what the manufacturer says the unit can do. Running it at 100% load for a sustained period is the only way to be sure it will cope when it matters.",
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
    title: "Stops Wet-Stacking",
    tagline: "Burns off what idling leaves behind",
    body: "A diesel generator that runs at low load collects unburnt fuel in the exhaust. A full-load test burns it off before it can damage the engine.",
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
        <path d="M8.5 14.5A2.5 2.5 0 0 0 11 17c1.38 0 2.5-1.12 2.5-2.5 0-1.63-1.04-2.47-1.74-3.5C11.16 9.87 11 8.7 11 8c-2 2-3 4-3 6.5z" />
        <path d="M12 2c5 4.5 7 9 7 13a7 7 0 0 1-14 0c0-4 2-8.5 7-13z" />
      </svg>
    ),
  },
  {
    number: "03",
    badge: "Fault Detection",
    title: "Finds What Idle Hides",
    tagline: "Catches faults before they cause an outage",
    body: "Voltage sag, unstable frequency, governor hunting and cooling problems only appear once the unit is carrying load. We pick them up while the test is running.",
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
        <path d="M2 12h4l2.5-7 4 14 3-9 2.5 4h4" />
        <circle cx="12.5" cy="19" r="1.5" fill="currentColor" />
      </svg>
    ),
  },
  {
    number: "04",
    badge: "Compliance",
    title: "Meets Compliance Requirements",
    tagline: "Paperwork auditors actually accept",
    body: "NFPA 110, NETA, the Uptime Institute and most OEM warranties call for regular load testing. Our reports give you the evidence auditors ask to see.",
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
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
  },
  {
    number: "05",
    badge: "Zero Downtime",
    title: "No Utility Involved",
    tagline: "Your supply stays untouched",
    body: "We bring our own load banks with us, so we don't draw on your supply. There's no load shedding to plan and nothing depends on building power.",
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
        <rect x="3" y="6" width="18" height="12" rx="2" />
        <path d="M7 12h2M15 12h2" />
        <path d="M11 9l-2 3h4l-2 3" />
        <path d="M7 3v3M17 3v3M7 18v3M17 18v3" />
      </svg>
    ),
  },
  {
    number: "06",
    badge: "Warranty Safeguard",
    title: "Protects the Warranty",
    tagline: "Keeps the OEM paperwork covered",
    body: "Many manufacturer warranties require documented testing at regular intervals. Our calibrated equipment and formal reports meet that condition.",
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
        <circle cx="12" cy="9" r="6" />
        <path d="M8.21 13.89L7 22l5-3 5 3-1.21-8.11" />
        <path d="M10 9l1.5 1.5 3-3" />
      </svg>
    ),
  },
];

export default function WhyTestWatt() {
  return (
    <section className="section section--grey why-section-wrap" aria-labelledby="why-heading">
      <div className="container">
        <div className="why-grid">
          {/* Left Sticky Column */}
          <div className="why-grid__sticky">
            <Kicker>Why TestWatt</Kicker>
            <h2 id="why-heading" className="why-grid__title">
              The case for independent load testing
            </h2>
            <p className="why-grid__body">
              A manufacturer's rating and a commissioning sign-off don't prove much on
              their own. The only way to know your critical power equipment will work
              when you need it is to load it to 100% of nameplate, under controlled
              and documented conditions, and see how it behaves.
            </p>
          </div>

          {/* Right Cards Grid (Styled like Service Cards) */}
          <div className="why-cards-grid">
            {WHY_ITEMS.map((item) => (
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
