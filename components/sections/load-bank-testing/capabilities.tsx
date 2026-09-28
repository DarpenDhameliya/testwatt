import type { ReactNode } from "react";
import { Kicker } from "@/components/ui";
import { ISO_TRANSIENT_LIMITS } from "@/lib/content";

interface CapabilityItem {
  number: string;
  badge: string;
  title: string;
  body: ReactNode;
  icon: (className?: string) => React.ReactNode;
}

const CAPABILITY_ITEMS: CapabilityItem[] = [
  {
    number: "01",
    badge: "Advanced Capability",
    title: "Regen capability",
    body: (
      <>
        <p>
          Elevators, cranes, hoists and other drive-controlled motors give energy back
          when they brake or lower a heavy load. On utility power the grid absorbs it.
          On generator power there is nowhere for it to go, so it flows back into the
          alternator and tries to drive the engine. The result can be engine overspeed,
          a reverse power trip or an unplanned shutdown in the middle of an outage.
        </p>
        <p>
          A load bank with regenerative power absorption control prevents this. It
          senses the direction and size of power flow at the generator. When reverse
          power appears, it switches in load steps automatically so the regenerated
          energy is burned off as heat in the resistors instead of reaching the engine.
          When the regeneration stops, the steps drop out again.
        </p>
        <p>During testing we check that the regen function will work when it is needed:</p>
        <ul>
          <li>
            Current transformer placement and polarity, since a CT installed backwards
            reads regeneration as normal load
          </li>
          <li>The reverse power pickup setting and the time delay before each step is applied</li>
          <li>Step response under a simulated reverse power signal</li>
          <li>Coordination with the generator&apos;s own reverse power relay, so the load bank acts first</li>
          <li>Load bank capacity against the largest regenerative load on site, usually the elevator group</li>
        </ul>
        <p>
          If your site has regenerative drives on emergency power and no absorption on
          the generator side, we can size and retrofit a regen control package on an
          existing load bank.
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
          Many generators are sized far larger than the load they actually serve. A
          1,000 kW set feeding a 150 kW building runs at 15% during every monthly
          exercise and every outage, which is where wet stacking starts.
        </p>
        <p>
          Auto load leveling fixes this without anyone standing at the panel. A current
          transformer measures the building load, and the controller adds or removes
          load bank steps to hold the generator at a set minimum, commonly 30% to 50%
          of its rating. As building load rises, the load bank backs off. As it falls,
          the load bank picks up the difference.
        </p>
        <p>What we set up and verify:</p>
        <ul>
          <li>
            The minimum load setpoint, chosen from the engine manufacturer&apos;s
            recommendation and your NFPA 110 target
          </li>
          <li>Step add and step remove delays, so the load bank does not hunt when building load swings</li>
          <li>Correct CT location on the building side of the load bank connection</li>
          <li>
            The load dump or load reduction behavior during a real outage, set to match
            how your engineer wants the system to act
          </li>
          <li>Alarms for over-temperature and loss of cooling air, with contacts back to your BMS</li>
        </ul>
        <p>
          With leveling in place, your monthly test can reach the 30% threshold on its
          own, which may remove the need for a separate annual supplemental test.
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
          Sites that run generators in parallel with the utility, for peak shaving,
          closed-transition transfer, cogeneration or alongside solar, usually have an
          interconnection agreement that limits how much power may flow back to the
          grid. Some agreements allow no export at all. If on-site generation outruns
          building demand, the protective relay trips or the site breaks its agreement
          with the utility.
        </p>
        <p>
          Export power control uses the load bank as a controllable sink. A meter at
          the point of interconnection tells the controller how much power is leaving
          the site. When export approaches the allowed limit, the load bank switches in
          steps to absorb the surplus. When building demand recovers, the steps drop
          out.
        </p>
        <p>
          The same function helps during testing. With export control active, a
          paralleled generator can be run at full output for a load test while the
          utility connection stays inside its limit.
        </p>
        <p>Our work on export control includes:</p>
        <ul>
          <li>Confirming the export limit and relay settings from your interconnection documents</li>
          <li>Checking the metering point, CT ratios and power direction</li>
          <li>Setting the pickup level and response delays so the load bank acts before the utility relay does</li>
          <li>A witnessed functional test with the generator paralleled, recorded in the report</li>
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
          Modern load bank controllers can be run and monitored over Modbus, the open
          protocol most building management, SCADA and PLC systems already speak.
          Modbus RTU runs over an RS-485 serial link, and Modbus TCP runs over your
          Ethernet network.
        </p>
        <p>Through Modbus, your system can read:</p>
        <ul>
          <li>kW, kVA, voltage and current per phase, frequency and power factor</li>
          <li>Which load steps are on</li>
          <li>Alarms such as over-temperature, loss of cooling airflow and blower motor overload</li>
        </ul>
        <p>
          And, where permitted, it can write commands such as load on and off, a kW
          setpoint for the load controller and a reject-all-load command.
        </p>
        <p>
          This lets a facility team start and log a monthly test from the control room,
          pull test data straight into its maintenance records and see load bank alarms
          on the same screen as the generator. For multi-site owners it means one
          engineer can supervise tests at several buildings.
        </p>
        <p>
          We map the load bank&apos;s register list into your BMS, SCADA or PLC, test
          each read and write point end to end, and document the register map. Remote
          writes should sit behind the load bank&apos;s own safety interlocks, and we
          confirm those interlocks still trip load locally no matter what the remote
          system commands.
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
          When the utility fails and the transfer switch closes, your generator does
          not get its load gently. It gets the whole emergency load in one hit. A block
          load test reproduces that moment on purpose, by switching a large block of
          load onto the running generator in a single step.
        </p>
        <p>
          We record how far voltage and frequency dip, how long they take to recover,
          and whether the engine bogs down, smokes heavily or trips. NFPA 110
          acceptance testing includes this kind of pickup from a cold start, and a
          Level 1, Type 10 system has to restore power within 10 seconds of the outage.
        </p>
        <p>
          Block size matters. Modern low-emission engines often cannot accept 100% of
          rated load in one step, and ISO 8528-5 itself tests load acceptance in
          defined steps rather than one jump from zero to full load. We set the block
          from the engine manufacturer&apos;s published load acceptance data and the
          largest step your facility actually applies, then confirm the result against
          your specification.
        </p>
        <p>
          Block load testing is useful after governor or voltage regulator changes,
          after adding large motor or UPS loads to the emergency system, and whenever
          the generator has struggled to pick up load during a real outage.
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
    body: (
      <>
        <p>
          Transient testing looks at the first few seconds after load changes, which is
          where sensitive equipment gets hurt. We apply and remove load steps,
          including full load rejection, and capture the voltage and frequency response
          with a recording instrument fast enough to show the true dip and overshoot.
          The steady-state reading on a panel meter misses this entirely.
        </p>
        <p>
          Results are compared against the performance class your generator was
          specified to, from ISO 8528-5:
        </p>
        <div className="why-card__table-wrap">
          <table className="why-card__table">
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
          G1 suits simple loads such as lighting and heating. G2 is typical for general
          commercial buildings. G3 is usually specified where the generator feeds UPS
          systems, data processing or telecom equipment.
        </p>
        <p>
          A transient test tells you more than pass or fail. A slow recovery or deep
          dip points us toward governor gain, voltage regulator settings,
          under-frequency roll-off or a turbocharger that is slow to respond. We note
          these findings in the report so they can be corrected before the next outage.
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
          <div className="why-cards-grid--stacked">
            {CAPABILITY_ITEMS.map((item) => (
              <article key={item.number} className="why-card why-card--detailed">
                <div className="why-card__top">
                  <div className="why-card__icon-wrap">
                    {item.icon("why-card__icon")}
                  </div>
                  <div className="why-card__meta">
                    <span className="why-card__badge">{item.badge}</span>
                    <span className="why-card__num">{item.number}</span>
                  </div>
                </div>

                <div className="why-card__heading-group">
                  <h3 className="why-card__title">{item.title}</h3>
                </div>

                <div className="why-card__body">{item.body}</div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
