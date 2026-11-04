interface WhyItem {
  number: string;
  title: string;
  body: string;
  icon: (className?: string) => React.ReactNode;
}

const WHY_ITEMS: WhyItem[] = [
  {
    number: "01",
    title: "We know load banks inside and out",
    body: "We repair and upgrade the load banks and we use them. That means far fewer surprises on test day and if anything does go wrong during the test, we can often fix it on site.",
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
    number: "02",
    title: "Tests built around the standard you answer to",
    body: "We'll design each test to the relevant requirement (NFPA 110 for emergency/standby power, NFPA 99 for healthcare, etc.) and document it so that it's inspection ready.",
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
    number: "03",
    title: "Reports you can use",
    body: "Every test ends with a report that includes the load steps, the readings and any problems encountered. That report will go to an inspector or be filed for your records.",
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
    number: "04",
    title: "More life from the equipment you own",
    body: "An upgrade can often be cheaper than a new unit. An older unit can frequently be brought up to specification with automatic control, load leveling and Modbus capability.",
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
    number: "05",
    title: "Straight answers from the right person",
    body: "Send sales queries to Sales@TestWatt.com and technical issues to Support@TestWatt.com. So, you're speaking to someone who can actually help.",
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
    <section id="why-testwatt" className="section section--grey why-section-wrap" aria-labelledby="why-heading">
      <div className="container">
        <div className="why-grid--equal">
          {/* Left Sticky Column */}
          <div className="why-grid__sticky">
            <h2 id="why-heading" className="why-grid__title">
              Why customers call Test Watt
            </h2>
          </div>

          <ol className="why-list">
            {WHY_ITEMS.map((item) => (
              <li key={item.number} className="why-list__item">
                <span className="why-list__number" aria-hidden="true">
                  {item.number}
                </span>
                <div className="why-list__content">
                  <h3 className="course-card__title">{item.title}</h3>
                  <div className="why-card__body">
                    <p>
                      {item.body.split(/([\w.]+@[\w.]+\.com)/).map((part, i) =>
                        i % 2 === 1 ? <strong key={i}>{part}</strong> : part,
                      )}
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
