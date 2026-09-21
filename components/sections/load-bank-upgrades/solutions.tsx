import Link from "next/link";
import { SectionHeading } from "@/components/ui";
import { UPGRADE_SOLUTIONS } from "@/lib/content";

export default function Solutions() {
  return (
    <section id="upgrade-solutions" className="section section--white" aria-labelledby="solutions-heading">
      <div className="container">
        <SectionHeading
          kicker="Modernisation Pathways"
          heading={<span id="solutions-heading">Targeted retrofit packages for testing fleets</span>}
          body="Whether you need precision automated step ramping, cloud SCADA integration, or variable power factor testing, our engineered retrofit modules transform aging machinery into state-of-the-art testing systems."
          className="section-heading--mb"
        />

        <div className="solutions-grid">
          {UPGRADE_SOLUTIONS.map((solution) => (
            <article key={solution.id} className="solution-card">
              <div className="solution-card__header">
                <h3 className="solution-card__title">{solution.title}</h3>
                <p className="solution-card__tagline">{solution.tagline}</p>
                <p className="solution-card__desc">{solution.description}</p>
              </div>

              <div className="solution-card__body">
                <h4 className="solution-card__subheading">Key Engineering Advantages</h4>
                <ul className="solution-card__checklist">
                  {solution.benefits.map((b) => (
                    <li key={b} className="solution-card__check-item">
                      <svg
                        className="solution-card__check-icon"
                        viewBox="0 0 16 16"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <path d="M3.5 8.5l3 3 6-7" />
                      </svg>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>

                <h4 className="solution-card__subheading" style={{ marginTop: "20px" }}>
                  Hardware Specifications
                </h4>
                <div className="solution-card__specs">
                  {solution.keySpecs.map((spec) => (
                    <span key={spec} className="solution-card__spec-pill">
                      {spec}
                    </span>
                  ))}
                </div>
              </div>

              <div className="solution-card__footer">
                <Link href="/contact" className="btn btn-outline-light btn-sm btn-full">
                  Consult on This Upgrade →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
