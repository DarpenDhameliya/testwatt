import { SectionHeading } from "@/components/ui";
import { APPLICATIONS, INDUSTRIES } from "@/lib/content";

export default function Applications() {
  return (
    <section className="section apps" aria-labelledby="applications-heading">
      <div className="container">
        <SectionHeading
          heading={<span id="applications-heading">Where load testing matters</span>}
          body="Any site that relies on standby power needs to prove that power works under load. Those are the jobs we get called out for most."
          className="section-heading--mb"
        />

        <ul className="apps__pills">
          {APPLICATIONS.map((item) => (
            <li key={item} className="apps__pill">
              {item}
            </li>
          ))}
        </ul>

        <div className="apps__grid">
          {INDUSTRIES.map((industry) => (
            <article key={industry.name} className="apps__card">
              <h3 className="apps__card-title">{industry.name}</h3>
              <p className="apps__card-text">{industry.why}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/** New design (for client review): numbered industry cards with accent bar, check-mark pills. */
export function ApplicationsNew() {
  return (
    <section className="section apps2" aria-labelledby="applications-new-heading">
      <div className="container">
        <SectionHeading
          heading={<span id="applications-new-heading">Where load testing matters</span>}
          body="Any site that relies on standby power needs to prove that power works under load. Those are the jobs we get called out for most."
          className="section-heading--mb"
        />

        <ul className="apps2__pills">
          {APPLICATIONS.map((item) => (
            <li key={item} className="apps2__pill">
              {item}
            </li>
          ))}
        </ul>

        <div className="apps2__grid">
          {INDUSTRIES.map((industry, index) => (
            <article key={industry.name} className="apps2__card">
              <span className="apps2__num" aria-hidden="true">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="apps2__card-title">{industry.name}</h3>
              <p className="apps2__card-text">{industry.why}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
