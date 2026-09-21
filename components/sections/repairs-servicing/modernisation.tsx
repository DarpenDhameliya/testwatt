import { Kicker } from "@/components/ui";
import { MODERNISATION_OPTIONS } from "@/lib/content";

export default function Modernisation() {
  return (
    <section className="section section--navy" aria-labelledby="mod-heading">
      <div className="container">
        <div className="mod-grid">
          <div>
            <Kicker>Modernisation Options</Kicker>
            <h2 id="mod-heading" className="content-heading content-heading--light">
              Extend capability without full replacement
            </h2>
            <p className="content-body content-body--light">
              Existing load bank equipment can often be upgraded to current capability
              standards at significantly lower cost than replacement. TestWatt engineers
              assess each installation individually and specify upgrades that deliver
              measurable improvements in accuracy, connectivity or capacity.
            </p>
          </div>
          <div className="mod-options-grid">
            {MODERNISATION_OPTIONS.map(([left, right], index) => (
              <div key={index} className="mod-options-row">
                <div className="mod-options-cell mod-options-cell--border-right">
                  <span className="mod-options-dot" aria-hidden="true" />
                  <span className="mod-options-text">{left}</span>
                </div>
                <div className="mod-options-cell">
                  <span className="mod-options-dot" aria-hidden="true" />
                  <span className="mod-options-text">{right}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
