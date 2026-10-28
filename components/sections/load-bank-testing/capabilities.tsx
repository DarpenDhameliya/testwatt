import type { ReactNode } from "react";
import { Kicker } from "@/components/ui";
import { ISO_TRANSIENT_LIMITS } from "@/lib/content";

interface CapabilityItem {
  number: string;
  badge: string;
  title: string;
  body: ReactNode;
  icon: (className?: string) => React.ReactNode;
  fullWidth?: boolean;
}

const CAPABILITY_ITEMS: CapabilityItem[] = [
  {
    number: "01",
    badge: "Advanced Capability",
    title: "Regen capability",
    body: (
      <>
        <p>
          Elevators, cranes, hoists and all the other drive controlled motors give back energy when they brake or are lowering a heavy load. On utility power the grid takes it up. On generator power there&apos;s no place for it to go so it flows back into the alternator and tries to drive the engine. That can result in overspeed, a reverse power trip or an unplanned shutdown in the middle of an outage.
        </p>
        <p>
          A load bank with regenerative power absorption control will do this. It will sense the direction and magnitude of power flow at the generator. If reverse power appears, it will automatically switch in load in steps so the regenerative power is dissipated as heat in the resistors rather than fed back to the engine. When the regeneration ceases, the steps will then drop out again.
        </p>
        <p>During testing, we check that the regen function will work when it is needed:</p>
        <ul>
          <li>
            Current transformer placement and polarity, since a CT installed backward reads regeneration as normal load.
          </li>
          <li>The reverse power pickup setting and the time delay before each step is applied.</li>
          <li>Step response under a simulated reverse power signal.</li>
          <li>Coordination with the generator&apos;s own reverse power relay, so the load bank acts first.</li>
          <li>Load bank capacity against the largest regenerative load on site, usually the elevator group.</li>
        </ul>
        <p>
          If your site has regenerative drives on emergency power and no absorption on the generator side we can size and retrofit a regen control package onto an existing load bank.
        </p>
      </>
    ),
    icon: (className) => (
      <svg
        className={className}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M3 12a9 9 0 1 0 3-6.7" />
        <path d="M3 3v5h5" />
        <path d="M13 9l-2 3h4l-2 3" />
      </svg>
    ),
  },
  {
    number: "02",
    badge: "Advanced Capability",
    title: "Auto load leveling",
    body: (
      <>
        <p>
          Many gensets are sized far above the load they serve. A 1000kW set feeding a 150kW building will run at 15% during every monthly exercise and every outage, which is where wet stacking begins.
        </p>
        <p>
          Auto load leveling handles this without anyone needing to be at the panel. A current transformer measures the building load, and the controller then adds or removes load bank steps to keep the generator at a set minimum (typically 30% to 50% of its rating). As the building load increases, the load bank steps back off. As the building load decreases, the load bank steps in to make up the difference.
        </p>
        <p>What we set up and verify:</p>
        <ul>
          <li>The minimum load setpoint, chosen from the engine manufacturer&apos;s recommendation and your NFPA 110 target.</li>
          <li>Step add and step remove delays, so the load bank does not hunt when building load swings.</li>
          <li>Correct CT location on the building side of the load bank connection.</li>
          <li>The load dump or load reduction behavior during a real outage (set to match how your engineer wants the system to behave).</li>
          <li>Alarms for over temperature and loss of cooling air, with contacts back to your BMS.</li>
        </ul>
        <p>
          With leveling in place, your monthly test can reach the 30% threshold on its own, which could remove the need for a separate annual supplemental test.
        </p>
      </>
    ),
    icon: (className) => (
      <svg
        className={className}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M12 22a10 10 0 1 1 7.07-2.93" />
        <path d="M12 12l4.5-4.5" />
        <circle cx="12" cy="12" r="1.5" fill="currentColor" />
      </svg>
    ),
  },
  {
    number: "03",
    badge: "Advanced Capability",
    title: "Export power control",
    body: (
      <>
        <p>
          Sites running generators in parallel with the utility (for peak shaving, closed transition transfer, cogeneration or in conjunction with solar) will normally have an interconnection agreement that caps the amount of power that can be exported back to the grid. Some agreements will in fact permit zero export. If on site generation exceeds building demand, the protective relay will trip or the site will breach its agreement with the utility.
        </p>
        <p>
          Export power control uses the load bank as a controllable sink. A meter at the point of interconnection tells the controller how much power is leaving the site. As exports approach the limit, the load bank steps in to take the excess. As demand on the site recovers, the steps out.
        </p>
        <p>
          The same function is of course useful during testing. With export control in operation, you can run a parallel generator at full output for a load test and the utility connection will remain within its limits.
        </p>
        <p>Our work on export control includes:</p>
        <ul>
          <li>Confirming the export limit and relay settings from your interconnection documents.</li>
          <li>Checking the metering point, CT ratios and power direction.</li>
          <li>Setting the pickup level and response delays so the load bank acts before the utility relay does.</li>
          <li>A witnessed functional test with the generator paralleled, recorded in the report.</li>
        </ul>
      </>
    ),
    icon: (className) => (
      <svg
        className={className}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M4 12h13" />
        <path d="M13 6l6 6-6 6" />
        <path d="M4 5v14" strokeOpacity="0.4" />
      </svg>
    ),
  },
  {
    number: "04",
    badge: "Advanced Capability",
    title: "Operation through remote Modbus",
    body: (
      <>
        <p>
          Modern load bank controllers can be run and monitored via Modbus (the open protocol that virtually all building management, SCADA and PLC systems already use). Modbus RTU runs over an RS-485 serial link and Modbus TCP runs over your Ethernet network.
        </p>
        <p>Through Modbus, your system can read:</p>
        <ul>
          <li>kW, kVA, voltage and current per phase, frequency and power factor.</li>
          <li>Which load steps are on.</li>
          <li>Alarms such as over-temperature, loss of cooling airflow and blower motor overload.</li>
        </ul>
        <p>
          where allowed, it can write commands such as load on and off, a kW setpoint for the load controller and a reject all load command.
        </p>
        <p>
          This enables a facility team to initiate and log a monthly test from the control room, pull the test data directly into their maintenance records and view the load bank alarms on the same screen as the generator. For multi site owners, it means one engineer can look after tests across multiple sites.
        </p>
        <p>
          We map the load bank&apos;s register list into your BMS, SCADA or PLC, test each read and write point end to end and document the register map. Remote writes should be behind the load bank&apos;s own safety interlocks and we will verify those interlocks still trip load locally irrespective of what the remote system is commanding.
        </p>
      </>
    ),
    icon: (className) => (
      <svg
        className={className}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <rect x="3" y="4" width="18" height="12" rx="2" />
        <path d="M8 20h8M12 16v4" />
        <path d="M7 9h2M11 9h6" strokeOpacity="0.6" />
      </svg>
    ),
  },
  {
    number: "05",
    badge: "Advanced Capability",
    title: "Block load operation",
    body: (
      <>
        <p>
          When the utility goes down and the transfer switch operates, the generator doesn&apos;t take on its load gently. It gets the entire emergency load in one go. A block load test replicates that moment by switching a large block of load onto the running generator in one step.
        </p>
        <p>
          We record the depth of the voltage and frequency dip, the recovery time and whether the engine bores down, smoke excessively or trips. That&apos;s exactly what NFPA 110 acceptance testing does (cold start testing in particular) and a Level 1, Type 10 system must restore power within 10 seconds of the outage.
        </p>
        <p>
          Block size is important. Modern low emission engines often can&apos;t take 100% of their rated load in a single step and ISO 8528-5 tests load acceptance in steps rather than a single jump from zero to full load. We take the block from the engine manufacturer&apos;s published load acceptance data and the largest step your facility applies, then confirm the result against your specification.
        </p>
        <p>
          Block load testing is useful after a governor or voltage regulator change, after adding a large motor or UPS load to the emergency system, and any time the generator has had to struggle to take up load during a real outage.
        </p>
      </>
    ),
    icon: (className) => (
      <svg
        className={className}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M12 2 3 7l9 5 9-5-9-5z" />
        <path d="M3 12l9 5 9-5" strokeOpacity="0.6" />
        <path d="M3 17l9 5 9-5" strokeOpacity="0.35" />
      </svg>
    ),
  },
  {
    number: "06",
    badge: "Advanced Capability",
    title: "Transient load operation",
    fullWidth: true,
    body: (
      <>
        <p>
          Transient testing looks at what happens in the first few seconds after a load change (when sensitive equipment can be damaged). We apply and remove load steps (including full load rejection) and use a recording instrument which is fast enough to record the actual dip and overshoot in both voltage and frequency. The steady state reading on a panel meter misses that completely.
        </p>
        <p>
          Results are compared against the performance class your generator was specified to, from ISO 8528-5:
        </p>
        <div className="why-card__table-wrap troubleshooting-table-wrap">
          <table className="why-card__table troubleshooting-table">
            <thead>
              <tr>
                <th scope="col">Limit (ISO 8528-5)</th>
                <th scope="col">G1</th>
                <th scope="col">G2</th>
                <th scope="col">G3</th>
              </tr>
            </thead>
            <tbody>
              {ISO_TRANSIENT_LIMITS.map((row) => (
                <tr key={row.limit}>
                  <td>{row.limit}</td>
                  <td>{row.g1}</td>
                  <td>{row.g2}</td>
                  <td>{row.g3}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p>
          G1 is for simple loads (lighting and heating, etc.). G2 is the normal choice for general commercial buildings. Specify G3 if the generator would feed UPSs, data processing, and telecom equipment.
        </p>
        <p>
          A transient test tells you far more than pass or fail. A slow recovery or a deep dip will point to governor gain, voltage regulator settings, under frequency roll off or a turbo that&apos;s just slow to respond. We&apos;ll note those in the report so they can be rectified prior to the next outage.
        </p>
      </>
    ),
    icon: (className) => (
      <svg
        className={className}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M2 12h4l2-7 4 14 2-9 2 5h6" />
      </svg>
    ),
  },
];

export default function Capabilities() {
  return (
    <section
      id="capabilities"
      className="section section--white why-section-wrap"
      aria-labelledby="capabilities-heading"
    >
      <div className="container">
        <div className="why-grid--equal">
          {/* Left Sticky Column */}
          <div className="why-grid__sticky">
            <Kicker>Advanced Testing Capabilities</Kicker>
            <h2 id="capabilities-heading" className="why-grid__title">
              When a basic step test isn&apos;t enough
            </h2>
            <p className="why-grid__body">
              When your site needs more than a basic step test, our testing also covers
              regenerative power absorption, automatic load leveling, export power
              control, remote Modbus operation, block loading and transient response.
            </p>
            <p className="why-grid__body">
              Each of these is a real failure mode we&apos;ve seen on real sites — an
              elevator group tripping a generator on reverse power, an oversized set
              wet-stacking every month, a paralleled generator breaking its utility
              agreement. We test that the protection actually works before you need it.
            </p>
          </div>

          {/* Right Scrolling Cards Column */}
          <div className="courses-grid courses-grid--single courses-grid--tinted">
            {CAPABILITY_ITEMS.map((item) => (
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
