import { Kicker } from "@/components/ui";
// import { MODERNISATION_OPTIONS } from "@/lib/content";

export default function Modernisation() {
  return (
    <section className="section section--alt" aria-labelledby="mod-heading">
      <div className="container">
        <div className="mod-grid">
          <div>
            <Kicker>Modernisation Options</Kicker>
            <h2 id="mod-heading" className="content-heading">
              Extend capability without full replacement
            </h2>
            <p className="content-body">
              An older load bank can often be brought up to modern standards for far
              less than a new unit would cost. We look at each installation
              individually and only recommend upgrades that really improve accuracy,
              connectivity or capacity.
            </p>
          </div>
          {/* <div className="mod-options-grid">
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
          </div> */}
        </div>
      </div>
    </section>
  );
}
