import Link from "next/link";
import { SectionHeading } from "@/components/ui";
import { DETAILED_PARTS_CATALOG } from "@/lib/content";

export default function Catalog() {
  return (
    <section id="parts-catalog" className="section section--white" aria-labelledby="catalog-heading">
      <div className="container">
        <SectionHeading
          kicker="Inventory Catalog"
          heading={<span id="catalog-heading">Critical components &amp; replacement modules</span>}
          body="Engineered specifically to withstand thermal cycling, vibration, and continuous full-load electrical stress. Every part is certified to match original manufacturer design tolerances."
          className="section-heading--mb-sm"
        />

        <div className="parts-cat-grid">
          {DETAILED_PARTS_CATALOG.map((category) => (
            <article key={category.id} className="parts-cat-card">
              <div className="parts-cat-card__header">
                <div className="parts-cat-card__meta">
                  <span className="parts-cat-card__lead-time">{category.leadTime}</span>
                </div>
                <h3 className="parts-cat-card__title">{category.category}</h3>
                <p className="parts-cat-card__desc">{category.description}</p>

                <div className="parts-cat-card__specs">
                  {category.specs.map((spec) => (
                    <span key={spec} className="parts-cat-card__spec-pill">
                      {spec}
                    </span>
                  ))}
                </div>
              </div>

              <div className="parts-cat-card__body">
                <h4 className="parts-cat-card__subheading">Available Stocked Assemblies</h4>
                <div className="parts-cat-card__items-list">
                  {category.items.map((item) => (
                    <div key={item.partCode} className="parts-cat-item">
                      <div className="parts-cat-item__top">
                        <span className="parts-cat-item__name">{item.name}</span>
                        <code className="parts-cat-item__code">{item.partCode}</code>
                      </div>
                      <p className="parts-cat-item__desc">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="parts-cat-card__footer">
                <Link
                  href="/contact"
                  className="btn btn-outline-light btn-sm btn-full parts-cat-card__btn"
                >
                  Request Quote for This Category →
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="spare-note" style={{ marginTop: "32px" }}>
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
            <strong>Custom or legacy load bank?</strong> We reverse-engineer and manufacture replacement resistor grids, control harnesses, and custom busbars to OEM specification for decommissioned or obsolete units.
          </p>
        </div>
      </div>
    </section>
  );
}
