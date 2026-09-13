import { Kicker, SectionHeading, StandardsTable } from "@/components/ui";
import { LOAD_TEST_ADVANTAGES, STANDARDS_LOAD_BANK } from "@/lib/content";

export default function Standards() {
  return (
    <section className="section section--white" aria-labelledby="standards-heading">
      <div className="container">
        {/* Standards to which we test (Restored to original table view) */}
        <SectionHeading
          kicker="Standards & Compliance"
          heading={<span id="standards-heading">Standards to which we test</span>}
          className="section-heading--mb-sm"
        />
        <StandardsTable standards={STANDARDS_LOAD_BANK} scopeLabel="Application" />

        {/* Advantages Section */}
        <div className="advantages-section">
          <Kicker>Advantages</Kicker>
          <h2 className="advantages-section__title">Six reasons to load test</h2>
          <div className="simple-advantages-grid">
            {LOAD_TEST_ADVANTAGES.map((item, index) => (
              <article key={item.title} className="simple-advantage-card">
                <div className="simple-advantage-card__header">
                  <span className="simple-advantage-card__num">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="simple-advantage-card__check" aria-hidden="true">
                    <svg
                      width="13"
                      height="13"
                      viewBox="0 0 16 16"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="3.5 8.5 6.5 11.5 12.5 4.5" />
                    </svg>
                  </span>
                </div>
                <h3 className="simple-advantage-card__title">{item.title}</h3>
                <p className="simple-advantage-card__body">{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
