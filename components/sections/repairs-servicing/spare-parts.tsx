import { SectionHeading } from "@/components/ui";
// import { SPARE_PARTS } from "@/lib/content";

const CATEGORY_ICONS: Record<string, React.ReactNode> = {
  "Resistance Elements": (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
    </svg>
  ),
  "Control Systems": (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="4" y="4" width="16" height="16" rx="2" />
      <rect x="9" y="9" width="6" height="6" />
      <line x1="9" y1="1" x2="9" y2="4" />
      <line x1="15" y1="1" x2="15" y2="4" />
      <line x1="9" y1="20" x2="9" y2="23" />
      <line x1="15" y1="20" x2="15" y2="23" />
    </svg>
  ),
  "Switchgear & Protection": (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  ),
  "Cooling & Auxiliary": (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M14.31 8l5.74 9.94M9.69 8h11.48M7.38 12l5.74-9.94M9.69 16L3.95 6.06M14.31 16H2.83M16.62 12l-5.74 9.94" />
    </svg>
  ),
};

export default function SpareParts() {
  return (
    <section className="section section--white" aria-labelledby="parts-heading">
      <div className="container">
        <SectionHeading
          kicker="Spare Parts"
          heading={
            <span id="parts-heading">OEM-grade parts with documented provenance</span>
          }
          body="We supply OEM-specification replacement parts for load banks and associated power equipment. Every part is supplied with full documentation of origin, specification and traceability. No substitute grades. No undocumented sourcing."
          className="section-heading--mb-sm"
        />

        {/* <div className="spare-cards-grid">
          {SPARE_PARTS.map((group) => (
            <article key={group.category} className="spare-card">
              <div className="spare-card__header">
                <div className="spare-card__icon" aria-hidden="true">
                  {CATEGORY_ICONS[group.category]}
                </div>
                <h3 className="spare-card__heading">{group.category}</h3>
              </div>

              <ul className="spare-card__list" aria-label={group.category}>
                {group.items.map((item) => (
                  <li key={item} className="spare-card__item">
                    <span className="spare-card__dot" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div> */}

        <div className="spare-note">
          <svg
            className="spare-note__icon"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="16" x2="12" y2="12" />
            <line x1="12" y1="8" x2="12.01" y2="8" />
          </svg>
          <p className="spare-note__text">
            Parts not listed above may be available on request. Contact our support team
            with the equipment make, model and part reference.
          </p>
        </div>
      </div>
    </section>
  );
}
