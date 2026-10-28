import type { ReactNode } from "react";
import { Kicker } from "@/components/ui";

interface ServiceItem {
  title: string;
  body: ReactNode;
  fullWidth?: boolean;
}

const VISIT_ROWS: [string, string][] = [
  [
    "Enclosure and frame",
    "Rust and damage, doors, hinges and seals, signs of water getting in, lifting points, casters and trailer running gear",
  ],
  [
    "Air path",
    "Intake and exhaust screens clear, fan blades and motor bearings, correct fan rotation",
  ],
  [
    "Load elements",
    "Sagging, broken or discolored resistor elements, cracked insulators, resistance of each element and each load step",
  ],
  [
    "Connections and wiring",
    "Loose terminals and hardware, oxidation and corrosion, condition of wire insulation, insulation resistance test",
  ],
  [
    "Switching and protection",
    "Contactors checked for pitting and free movement, fuses and breakers, emergency stop, over-temperature and fan-failure shutdowns working and not bypassed",
  ],
  [
    "Controls and metering",
    "Panel lamps and switches, digital controller and software, remote or PC control link, metering accuracy",
  ],
  ["Cleaning", "Dust and debris blown out with clean, dry compressed air"],
  ["Load test", "Each step and full rated load, with readings recorded"],
  ["Report", "Findings, photos, readings and any recommended work"],
];

const SERVICE_ITEMS: ServiceItem[] = [
  {
    title: "Troubleshooting and Repairs",
    body: (
      <>
        <p>
          We&apos;ll trace the fault to the component (open or short resistor elements, failed fans and motors,
          pitted/welded contactors, blown fuses, faulty over temperature and airflow switches, damaged wiring,
          controllers or meters that won&apos;t respond etc.). We&apos;ll isolate the fault prior to part replacement so you only
          pay for what has failed. If a unit is severely damaged we&apos;ll provide you with a written assessment and a
          quote prior to work commencing and our view as to whether a repair or a rebuild is the better option.
        </p>
      </>
    ),
  },
  {
    title: "Preventive maintenance",
    body: (
      <>
        <p>
          A scheduled service will catch problems that would otherwise cause a load test to be aborted midway
          through. We inspect, clean and test the unit then run it underload to confirm all the steps come in as they
          should. How often a unit needs service depends on how hard it is working. A weekly rental fleet load
          bank will require far more attention than a permanently installed unit, which may only be exercised once
          a month. We can arrange annual or twice annual visits and maintain a service history for each unit.
        </p>
      </>
    ),
  },
  {
    title: "Start up and commissioning",
    body: (
      <>
        <p>
          Before a new or relocated permanent load bank runs for the first time, we check the power and control
          wiring, grounding, clearances, cooling air and exhaust direction and communication with the remote
          controls. We then bring it up in steps and verify it at full rated load. Load banks produce a lot of hot air,
          so we check where the exhaust goes and whether the room has sufficient makeup air.

        </p>
      </>
    ),
  },
  {
    title: "Refurbishment and rebuilds",
    body: (
      <>
        <p>
          Many of the older load banks will have a sound frame and enclosure with worn internals. A rebuild will
          replace the elements, insulators, contactors, fans, wiring and controls as required and get the unit back to
          its rated capacity, generally at a fraction of the cost of a new unit of the same size. On units where the
          original parts are no longer available we will source equivalents or redesign the relevant circuit.

        </p>
      </>
    ),
  },
  {
    title: "Spare parts",
    body: (
      <>
        <p>
          We supply the bits that break most frequently: resistor elements, ceramic insulators, contactors, fuses, fan
          motors and blades, temperature switches, relays, indicator lamps, cables and connectors. We can also put
          together a spares kit to match your fleet so one failing item doesn&apos;t put a unit out of action while you wait
          for it to arrive
        </p>
      </>
    ),
  },
  {
    title: "Field service or shop repair",
    fullWidth: true,
    body: (
      <>
        <p>
          Field service to troubleshoot the permanently installed load banks, trailer and container units and any job
          where downtime has to be minimal. A technician comes to your site with the test equipment and common
          parts.
        </p>
        <p>
          Shop repair of the portable and compact units. You ship or drop them off, we repair them on the bench,
          and they go through a full load test before we return them to you.
        </p>
        <h4 className="why-card__subheading">What a service visit covers</h4>
        <div className="why-card__table-wrap troubleshooting-table-wrap">
          <table className="why-card__table troubleshooting-table">
            <thead>
              <tr>
                <th scope="col">Area</th>
                <th scope="col">What we check</th>
              </tr>
            </thead>
            <tbody>
              {VISIT_ROWS.map(([area, check]) => (
                <tr key={area}>
                  <td>{area}</td>
                  <td>{check}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </>
    ),
  },
  {
    title: "Load banks we work on",
    body: (
      <>
        <p>
          Resistive, resistive-reactive and DC load banks in portable, stationary, trailer mounted
          and containerized formats.
        </p>
        <h4 className="why-card__subheading">How it works</h4>
        <ol>
          <li>
            Send us the make, model, serial number, rating of the unit and let us know what it&apos;s
            doing or what service you require.
          </li>
          <li>
            We&apos;ll confirm whether field service or shop repair is the right option and issue you
            with a quote.
          </li>
          <li>We do the work and only replace what needs replacing.</li>
          <li>We test the unit at full rated load before sign-off.</li>
          <li>You get a service report for your records.</li>
        </ol>
      </>
    ),
  },
  {
    title: "Service plans",
    body: (
      <>
        <p>
          A service plan sees your load banks on a fixed maintenance schedule with priority booking. Each visit is
          logged so you have a service history ready to go should an auditor or insurer come along and ask to see it.
        </p>
      </>
    ),
  },
];

export default function Capabilities() {
  return (
    <section
      id="repair-capabilities"
      className="section section--grey why-section-wrap"
      aria-labelledby="repair-capabilities-heading"
    >
      <div className="container">
        <div className="why-grid--equal">
          {/* Left Sticky Column */}
          <div className="why-grid__sticky">
            {/* <Kicker>What We Cover</Kicker>
            <h2 id="repair-capabilities-heading" className="why-grid__title">
              Repairs, maintenance, calibration and parts
            </h2>
            <p className="why-grid__body">
              Repairs, preventive maintenance and spare parts for AC/DC and resistive-reactive load banks, onsite or in our shop.
            </p> */}
            <p className="why-grid__body">
              A load bank can well sit for weeks and then be required to carry full rated load on the day you&apos;re testing a
              generator or commissioning a UPS. Most of the problems that occur are down to heat and switching. The
              resistor elements get very hot, the fans will pull a large volume of air through the enclosure and the
              contactors will make and break heavy current every time you step the load. Over time the elements will
              sag and burn open, the ceramic insulators will crack, the connections will loosen and corrode and the
              meters will drift out of tolerance. TestWatt do load bank repairs and maintenance so that they&apos;re fit to run
              when you need them and will give you readings which you can put in your test report.
            </p>
          </div>

          {/* Static demo card in the previous card design, for client comparison only. */}
          {/* <article className="why-card why-card--detailed">
            <div className="why-card__top why-card__top--inline">
              <div className="why-card__icon-wrap">
                <svg
                  className="why-card__icon"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
                  <path d="M8 16l-4 4" />
                </svg>
              </div>
              <h3 className="why-card__title">Troubleshooting and repair</h3>
            </div>

            <div className="why-card__body">
              <p>
                We&apos;ll trace the fault to the component (open or short resistor elements, failed
                fans and motors, pitted/welded contactors, blown fuses, faulty over temperature and
                airflow switches, damaged wiring, controllers or meters that won&apos;t respond
                etc.). We&apos;ll isolate the fault prior to part replacement so you only pay for
                what has failed. If a unit is severely damaged we&apos;ll provide you with a written
                assessment and a quote prior to work commencing and our view as to whether a repair
                or a rebuild is the better option.
              </p>
            </div>
          </article> */}

          <div className="courses-grid">
            {SERVICE_ITEMS.map((item) => (
              <article
                key={item.title}
                className={`course-card${item.fullWidth ? " course-card--full" : ""}`}
              >
                <div className="course-card__header">
                  <h3 className="course-card__title">{item.title}</h3>
                </div>

                <div className="course-card__body why-card__body">{item.body}</div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
