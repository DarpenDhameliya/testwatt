import Image from "next/image";
import { SectionHeading } from "@/components/ui";

const IMG = "/images/p100";

const STATS = [
  { value: "100 kW", label: "Max Capacity" },
  { value: "120–480 V", label: "Voltage Range" },
  { value: "1Ph | 3Ph", label: "Phase Support" },
  { value: "3000 CFM", label: "Airflow (Unrestricted)" },
];

/** [label, value]. An empty value is shown as a dash (the datasheet leaves it blank). */
const SPECS: [string, string][] = [
  ["Fan / Control Power", "External, 115V, 1-ph., 60Hz, 10A Max"],
  ["Nominal Voltage", "240/480V AC, 3-phase"],
  ["Min Load Steps", "12.5 kW"],
  ["Frequency", "50/60 Hz"],
  ["Duty Cycle", "Continuous"],
  ["Weight", "65 lbs (Approx.)"],
  ["Dimensions", "10 x 22 x 24 inches (Approx.)"],
  ["Options", "Hard transport and storage case with handles and casters"],
];

/** [voltages, phase, kW, load steps, notes] */
const LOAD_STEPS: [string, string, string, string, string][] = [
  ["480/240 VAC", "3 Ph", "100", "12.5 | 12.5 | 25 | 50", "-"],
  ["415/208 VAC", "3 Ph", "75", "9 | 9 | 19 | 37", "-"],
  ["400/200 VAC", "3 Ph", "69", "9 | 9 | 17 | 35", "-"],
  ["380/190 VAC", "3 Ph", "62", "8 | 8 | 16 | 31", "-"],
  ["120 VAC", "3 Ph", "25", "3 | 3 | 6 | 13", "-"],
  ["240 VAC", "1 Ph", "66", "8 | 8 | 17 | 33", "Camlok splitter & extra cable"],
  ["240 VAC", "1 Ph", "50", "6 | 6 | 13 | 25", "-"],
  ["208 VAC", "1 Ph", "50", "6 | 6 | 13 | 25", "Camlok splitter & extra cable"],
  ["208 VAC", "1 Ph", "38", "5 | 5 | 9 | 19", "-"],
  ["120 VAC", "1 Ph", "17", "2 | 2 | 4 | 8", "Camlok splitter & extra cable"],
  ["120 VAC", "1 Ph", "13", "2 | 2 | 3 | 6", "-"],
];

export default function P100Datasheet() {
  return (
    <section id="p100" className="section ds" aria-labelledby="p100-heading">
      <div className="container">
        <SectionHeading
          kicker="Resistive load bank • Product datasheet"
          heading={<span id="p100-heading">P100</span>}
          body="100 kW Resistive Load Bank"
          className="section-heading--mb"
        />

        {/* Headline figures */}
        <div className="ds-stats">
          {STATS.map((s) => (
            <div key={s.label} className="ds-stat">
              <span className="ds-stat__value">{s.value}</span>
              <span className="ds-stat__label">{s.label}</span>
            </div>
          ))}
        </div>

        {/* Overview + power capacity, product render */}
        <div className="ds-row ds-row--media">
          <div>
            <h3 className="ds-heading">Overview</h3>
            <ul className="ds-bullets">
              <li>
                Portable resistive load bank for precision testing of generators, UPS systems and power infrastructure.
                Configurable across single and three-phase voltages with full load-step control.
              </li>
            </ul>

            <h4 className="ds-subheading">Power Capacity</h4>
            <p>
              The P100 supports up to 100 kW at 480/240 VAC, three-phase. Other three-phase ratings include 75 kW at
              415/208 VAC, 69 kW at 400/200 VAC and 62 kW at 380/190 VAC.
            </p>
            <p>
              Single-phase configurations are also available at 240, 208 and 120 VAC, with capacity depending on the
              applied voltage and configuration.
            </p>
            <p>
              Load steps are configurable by voltage and phase; see the detailed{" "}
              <a href="#p100-load-steps" className="ds-link">
                load-step table below
              </a>
              .
            </p>
          </div>

          <div className="ds-product">
            <Image
              src={`${IMG}/p100-grille-side.png`}
              width={970}
              height={1225}
              alt="TestWatt P100 100 kW portable resistive load bank, showing the air intake grille, carry handles and control panel"
              quality={95}
              sizes="(max-width: 900px) 90vw, 440px"
            />
          </div>
        </div>

        {/* Control, safety, specifications */}
        <div className="ds-row">
          <div>
            <h4 className="ds-subheading">Control &amp; Operation</h4>
            <p>
              Robust switchgear components and hardware support load control and power testing. The unit includes phase
              indication and live data capture.
            </p>
            <p>
              Protection features include overheating protection, fan-failure monitoring with safety trip and
              easy-to-replace control-circuit fuses.
            </p>

            <h4 className="ds-subheading">Safety &amp; Monitoring</h4>
            <p>
              Features include control-power status monitoring with safety trip, overheating protection, phase
              indication, fan-failure monitoring with safety trip and live data capture.
            </p>
          </div>

          <div>
            <h3 id="p100-specs-heading" className="ds-heading">
              Specifications
            </h3>
            <table className="ds-spec" aria-labelledby="p100-specs-heading">
              <tbody>
                {SPECS.map(([label, value]) => (
                  <tr key={label}>
                    <th scope="row">{label}</th>
                    <td>{value || "—"}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Key features: load steps per voltage */}
        <h3 id="p100-load-steps" className="ds-heading">
          Key Features
        </h3>
        <div className="ds-table-wrap">
          <table className="ds-table" aria-labelledby="p100-load-steps">
            <thead>
              <tr>
                <th scope="col">Voltages</th>
                <th scope="col">Phase</th>
                <th scope="col">kW</th>
                <th scope="col">Load Steps</th>
                <th scope="col">Notes</th>
              </tr>
            </thead>
            <tbody>
              {LOAD_STEPS.map(([voltage, phase, kw, steps, notes]) => (
                <tr key={`${voltage}-${phase}-${kw}`}>
                  <td>{voltage}</td>
                  <td className="ds-table__center">{phase}</td>
                  <td className="ds-table__center">{kw}</td>
                  <td>{steps}</td>
                  <td>{notes}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Dimensions: front panel and fan side */}
        <h3 className="ds-heading ds-heading--half">Dimensions</h3>
        <div className="ds-dims">
          <figure className="ds-dims__fig">
            <Image
              src={`${IMG}/p100-front-panel.png`}
              width={796}
              height={1600}
              alt="P100 front panel: power meter, operation and load switches, USB port, test jacks, phase and status lamps, load-step switches, fuses and L1, L2, L3 and ground Camlok connectors"
              className="ds-dims__img"
              quality={95}
              sizes="(max-width: 900px) 50vw, 240px"
            />
            {/* <figcaption>Front view · 252.50 W × 553.60 H</figcaption> */}
          </figure>
          <figure className="ds-dims__fig">
            <Image
              src={`${IMG}/p100-fan-side.png`}
              width={912}
              height={1174}
              alt="P100 fan side with twelve cooling fans"
              className="ds-dims__img"
              quality={95}
              sizes="(max-width: 900px) 80vw, 360px"
            />
            {/* <figcaption>Side view · 600.42 D</figcaption> */}
          </figure>
        </div>
        {/* <p className="ds-dims__caption">Dimensions in mm</p> */}
      </div>
    </section>
  );
}
