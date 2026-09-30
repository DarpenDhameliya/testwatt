import { Kicker } from "@/components/ui";

const ADVANCED_CAPABILITIES = [
  "Regenerative power absorption",
  "Automatic load leveling",
  "Export power control",
  "Remote Modbus operation",
  "Block loading",
  "Transient response",
];

export default function Overview() {
  return (
    <section
      id="overview"
      className="section section--white"
      aria-labelledby="overview-heading"
    >
      <div className="container">
        <div className="two-col-grid">
          <div>
            <Kicker>Resistive Load Bank Testing</Kicker>
            <h2 id="overview-heading" className="content-heading">
              Real load, measured and logged
            </h2>
            <p className="content-body">
              A resistive load bank puts a controlled, measured kW load on your generator,
              UPS or other power source and turns that energy into heat. We use it to run
              your equipment at the load levels your code, your AHJ or your engine
              manufacturer calls for, and log every reading into a report you can hand to
              an inspector.
            </p>
            <p className="content-body">
              Resistive loading runs at unity power factor, so it works the engine, fuel
              system and exhaust at real output. It is the standard method for NFPA 110
              supplemental tests, 36-month tests and most routine maintenance testing. When
              your site needs more than a basic step test, our testing also covers{" "}
              <strong>regenerative power absorption</strong>,{" "}
              <strong>automatic load leveling</strong>, <strong>export power control</strong>,{" "}
              <strong>remote Modbus operation</strong>, <strong>block loading</strong> and{" "}
              <strong>transient response</strong>.
            </p>
          </div>
          <div>
            <div className="params-box">
              <div className="params-box__heading">When Your Site Needs More</div>
              <ul className="params-list" aria-label="Advanced testing capabilities">
                {ADVANCED_CAPABILITIES.map((capability) => (
                  <li key={capability} className="params-list__item">
                    <span className="params-list__dot" aria-hidden="true" />
                    {capability}
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
