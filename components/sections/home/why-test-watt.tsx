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
    title: "Confirms True Rated Capacity",
    tagline: "Eliminate Nameplate Assumptions",
    body: "A paper rating is not proof. Load testing at 100% nameplate load for a sustained period is the only method that confirms your asset will perform when it must.",
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
    title: "Prevents Wet-Stacking",
    tagline: "Carbon Burn-Off & Engine Health",
    body: "Diesel generators running at low or no load accumulate unburned fuel in the exhaust — wet-stacking. Regular full-load testing burns off deposits and prevents long-term engine damage.",
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
    title: "Surfaces Hidden Faults",
    tagline: "Pre-Failure Anomaly Capture",
    body: "Voltage sag, frequency instability, governor hunting and cooling failures only manifest under load. Our monitoring systems capture every anomaly during the test cycle.",
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
    title: "Satisfies Compliance Requirements",
    tagline: "Audit-Proof Regulatory Reports",
    body: "NFPA 110, NETA, Uptime Institute and OEM warranty terms all mandate periodic load testing. Our reports provide the documentary evidence auditors require.",
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
    title: "Removes Utility Dependence",
    tagline: "Zero Facility & Grid Disruption",
    body: "Load testing is performed using our portable load banks — no utility supply interruption, no load-shedding coordination, no site dependency.",
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
    title: "Protects Warranty Terms",
    tagline: "OEM Protection & Asset Security",
    body: "Manufacturer warranties often require documented periodic testing to remain valid. Our calibrated test equipment and formal test reports satisfy OEM documentation requirements.",
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
              Generator manufacturers publish rated outputs. Installers commission to
              spec. But only a full-load test at nameplate rating — under controlled,
              documented conditions — can confirm that your critical power infrastructure
              will actually deliver when called upon.
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
