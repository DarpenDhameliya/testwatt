import { Kicker } from "@/components/ui";

const REPORT_CONTENTS = [
  "Generator and load bank details",
  "The standard and edition tested to",
  "Each load step with its start and end time",
  "Readings logged at every interval",
  "Any alarms or shutdowns",
  "Findings with recommended repairs",
];

export default function Reporting() {
  return (
    <section
      id="reporting"
      className="section section--grey"
      aria-labelledby="reporting-heading"
    >
      <div className="container">
        <div className="two-col-grid">
          <div>
            <Kicker>Every Test, Documented</Kicker>
            <h2 id="reporting-heading" className="content-heading">
              A report ready for your compliance binder
            </h2>
            <p className="content-body">
              Every TestWatt load bank test ends with a written report. Healthcare
              customers get it in the format surveyors ask for, ready to drop straight
              into the compliance binder.
            </p>
            <p className="content-body">
              Not sure which test your site requires? Send us your generator rating and
              the standard you&apos;re inspected against, and we&apos;ll recommend a test
              plan.
            </p>
          </div>
          <div>
            <div className="params-box">
              <div className="params-box__heading">What&apos;s In The Report</div>
              <ul className="params-list" aria-label="Report contents">
                {REPORT_CONTENTS.map((item) => (
                  <li key={item} className="params-list__item">
                    <span className="params-list__dot" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
