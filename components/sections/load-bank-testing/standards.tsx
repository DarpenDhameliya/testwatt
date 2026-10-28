import { Kicker, SectionHeading } from "@/components/ui";
import { LOAD_BANK_STANDARDS, LOAD_BANK_TEST_PROFILES } from "@/lib/content";
import AnimatedSteps from "./animated-steps";

export default function Standards() {
  return (
    <section className="section section--grey" aria-labelledby="standards-heading">
      <div className="container">
        <SectionHeading
          // kicker="Standards & Compliance"
          heading={<span id="standards-heading">Manual operation for meeting testing standards</span>}
          body="For the compliance testing, we run the load bank by hand. We switch in each load step manually, hold it for the required time and log it so the record shows precisely what load the genset was carrying and for how long. Manual control also lets us stop or back off load immediately if a reading goes out of range."
          className="section-heading--mb"
        />

        <div className="compliance-grid">
          {LOAD_BANK_STANDARDS.map((row) => (
            <article key={`${row.code}-${row.citation ?? row.appliesTo}`} className="compliance-card">
              <div className="compliance-card__header">
                <span className="compliance-card__code">
                  <span className="compliance-card__code-main">{row.code}</span>
                  {row.citation && (
                    <span className="compliance-card__code-sub">{row.citation}</span>
                  )}
                </span>
                {/* <span className="compliance-card__status-pill">
                  <span className="compliance-card__status-dot" aria-hidden="true" />
                  Verified Spec
                </span> */}
              </div>
              <div className="compliance-card__row">
                <span className="compliance-card__label">
                  <svg className="compliance-card__label-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                  Who It Covers
                </span>
                <p className="compliance-card__text">{row.appliesTo}</p>
              </div>
              <div className="compliance-card__row">
                <span className="compliance-card__label">
                  <svg className="compliance-card__label-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M9 11l3 3L22 4" />
                    <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                  </svg>
                  What It Requires
                </span>
                <p className="compliance-card__text">{row.requirement}</p>
              </div>
              <div className="compliance-card__row compliance-card__row--meet">
                <span className="compliance-card__label">
                  <svg className="compliance-card__label-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                  How We Meet It
                </span>
                <p className="compliance-card__text">{row.howWeMeet}</p>
              </div>
            </article>
          ))}
        </div>

        {/* Typical Test Profiles */}
        <div className="advantages-section">
          <p className="content-body">
            The edition that applies to your site is the one that your AHJ or accrediting body has adopted. CMS and The Joint Commission, for instance: still mandate the older editions of NFPA 110 and NFPA 99. Some engineers specs will actually call for a longer stepped test (e.g., 25%, 50%, 75%, and 100%). Let us know which document you are testing to, and we&apos;ll run to that.
          </p>
          <p className="content-body content-body--label">
            Typical compliance test profiles
          </p>
          <div className="standards-table-wrap">
            <table className="standards-table">
              <thead>
                <tr>
                  <th scope="col" className="standards-table__th">
                    Test
                  </th>
                  <th scope="col" className="standards-table__th">
                    Load (% of nameplate kW)
                  </th>
                  <th scope="col" className="standards-table__th standards-table__th--last">
                    Duration
                  </th>
                </tr>
              </thead>
              <tbody>
                {LOAD_BANK_TEST_PROFILES.map((row, index) => (
                  <tr
                    key={row.test}
                    className={
                      index % 2 === 0
                        ? "standards-table__row"
                        : "standards-table__row standards-table__row--alt"
                    }
                  >
                    <td className="standards-table__code">{row.test}</td>
                    <td className="standards-table__td">{row.load}</td>
                    <td className="standards-table__td standards-table__td--last">
                      {row.duration}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* How we run a compliance test */}
        <div className="advantages-section">
          <p className="content-body content-body--label">
            How we run a compliance test:
          </p>
          <AnimatedSteps steps={COMPLIANCE_TEST_STEPS} />
        </div>

        {/* Parameters monitored during the test */}
        <div className="advantages-section">
          <p className="content-body content-body--label">
            Parameters monitored during the test
          </p>
          <p className="content-body">
            We take the electrical values off the load bank meter and the engine values off the gen controller, logging both at each interval so that we can match any problems to the load step at which they appeared.
          </p>
          {MONITORED_PARAMETER_GROUPS.map((group) => (
            <div key={group.title} className="standards-params">
              <p className="content-body content-body--label">{group.title}</p>
              <div className="standards-table-wrap">
                <table className="standards-table">
                  <thead>
                    <tr>
                      <th scope="col" className="standards-table__th">
                        Parameter
                      </th>
                      <th scope="col" className="standards-table__th standards-table__th--last">
                        Why we record it
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {group.rows.map((row, index) => (
                      <tr
                        key={row.parameter}
                        className={
                          index % 2 === 0
                            ? "standards-table__row"
                            : "standards-table__row standards-table__row--alt"
                        }
                      >
                        <td className="standards-table__code standards-table__code--wrap">
                          {row.parameter}
                        </td>
                        <td className="standards-table__td standards-table__td--last">
                          {row.reason}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const COMPLIANCE_TEST_STEPS = [
  "Review the generator nameplate, the ATS layout and your last set of test records to establish which standard and edition applies.",
  "Before starting, check fluid levels, belts, hoses, battery condition and the area around the load bank's exhaust air.",
  "Connect the load bank with appropriately sized cabling, verify phase rotation and voltage and wire the load dump so that the load bank will dump if there is a real outage during the test.",
  "Start the generator, bring it to operating temperature, then apply load in steps.",
  "Hold each step for the full required time. We record kW, voltage and current per phase, frequency, oil pressure, coolant temperature and exhaust temperature at regular intervals (typically every 15 minutes).",
  "Remove the load and let the engine cool down unloaded. Cool down is not counted as part of the test time.",
  "Issue a signed report with the test profile, all readings, any faults found and all the recommended repairs.",
];

const MONITORED_PARAMETER_GROUPS = [
  {
    title: "Electrical (generator output)",
    rows: [
      { parameter: "Voltage, line to line and line to neutral", reason: "Confirms the voltage regulator holds nominal voltage as load increases" },
      { parameter: "Voltage imbalance between phases", reason: "Points to alternator or connection problems" },
      { parameter: "Load current per phase", reason: "Shows each phase is carrying its share of the load" },
      { parameter: "Neutral current", reason: "Flags unbalanced loading on four-wire systems" },
      { parameter: "Frequency (Hz)", reason: "Shows governor stability under steady load" },
      { parameter: "Real power (kW)", reason: "Proves the generator is carrying the required percentage of nameplate" },
      { parameter: "Apparent power (kVA) and reactive power (kVAR)", reason: "Compared against the alternator rating" },
      { parameter: "Power factor", reason: "Confirms the test load (close to 1.0 on a resistive bank)" },
      { parameter: "Energy delivered (kWh)", reason: "Total output over the test, useful for fuel rate checks" },
      { parameter: "Voltage and frequency dip, overshoot and recovery time", reason: "Captured during block load and transient tests" },
    ],
  },
  {
    title: "Load bank and site conditions",
    rows: [
      { parameter: "Load steps applied and time at each step", reason: "Proves the test profile was followed" },
      { parameter: "Cooling airflow status", reason: "The load bank must shed load if cooling air is lost" },
      { parameter: "Load bank discharge air temperature", reason: "Confirms hot air is not recirculating into the generator intake" },
      { parameter: "Over-temperature and fault alarms", reason: "Any trip is logged with the time and load level" },
      { parameter: "Ambient temperature and humidity", reason: "Needed to apply site derating and explain high coolant or exhaust readings" },
      { parameter: "Start time, end time and engine run hours", reason: "Required by NFPA 110 and surveyors for the test record" },
    ],
  },
];
