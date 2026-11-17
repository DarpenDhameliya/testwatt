import Image from "next/image";
import type { ReactNode } from "react";

const IMG = "/images/load-bank-upgrades-demo";

const Check = ({ children }: { children: ReactNode }) => (
  <li>
    <span className="ub-check" aria-hidden="true">✓</span>
    <span>{children}</span>
  </li>
);

function Shot({
  name,
  w,
  h,
  alt,
  className = "",
  loading,
}: {
  name: string;
  w: number;
  h: number;
  alt: string;
  className?: string;
  /** "eager" for an image that can be the Largest Contentful Paint (LCP); others stay lazy. */
  loading?: "eager" | "lazy";
}) {
  return (
    <Image
      src={`${IMG}/${name}.png`}
      width={w}
      height={h}
      alt={alt}
      className={`ub-shot ${className}`}
      loading={loading}
      quality={95}
      sizes="(max-width: 900px) 100vw, 1200px"
    />
  );
}

const QUICK_FACTS = [
  { title: "Works With Any Load Bank", text: "Retrofits to existing load banks from any manufacturer." },
  { title: "Manual and Automatic Modes", text: "Operate by toggle switches, touchscreen or software." },
  { title: "Local or Remote Control", text: "Operate from the panel or from a PC, laptop or tablet." },
  { title: "Generator and Data Center Testing", text: "Built-in test programs with data logging and reports." },
];

const COMPARE = [
  {
    from: "From Toggle Switches Only",
    today: "Steps switched by hand, readings written on paper and no record of the test.",
    with: ["Set Any Load on Screen in Seconds", "Tests Run Automatically, Step by Step", "Every Reading Saved and Reported"],
  },
  {
    from: "From Manufacturer Controls",
    today: "Locked to one supplier's hardware and software, ageing screens and slow support.",
    with: ["One Simple Software for All Your Load Banks", "Minimal Changes to Your Load Bank", "Local TestWatt Service, AMC and Training"],
  },
  {
    from: "From Standard Load Bank Capabilities",
    today: "Load bank used for scheduled testing only, with no site power management or remote control.",
    with: ["Auto Load Leveling", "Power Export Control / Regen Control", "Modbus Remote Control"],
  },
];

const PANEL_HIGHLIGHTS = [
  "7-Inch Sunlight-Readable HMI Touchscreen Display",
  "Toggle Switch for Every Load Step",
  "Emergency Stop Push Button",
  "Auto / Manual Mode Selector",
  "Fan and Load Dump Switches",
  "Internal / External Control and Fan Power",
];

const GENERATOR_TESTS = [
  ["Annual Test (NFPA 110)", "50% load for 30 minutes, then 75% for 60 minutes, verifying sustained load capability."],
  ["Monthly Test", "At least 30% of rated load for 30 minutes, confirming readiness for service."],
  ["Full Load Test", "Ramp to 100% and hold, confirming nameplate capacity."],
  ["Custom Generator Test", "Configurable steps, including block load tests that record voltage drop and recovery time."],
];

const DATA_CENTER_TESTS = [
  ["UPS Battery Run Time", "Constant load until battery cut-off, verifying actual backup time."],
  ["Data Hall Heat Load", "Simulated IT load applied in stages, verifying cooling capacity."],
  ["Integrated Systems Test (IST)", "Load is held through utility failure, generator start, transfer and restoration, verifying the complete power chain."],
  ["PDU Load Test", "Load applied at each power distribution unit (PDU), verifying circuits, breakers and branch capacity."],
  ["PDU Switching Test", "Load is held while PDUs transfer between A and B sources, verifying uninterrupted power to IT racks."],
];

const INCLUDED = [
  "TestWatt Control Panel for Any Load Bank",
  "TestWatt Software",
  "Removal of Old Switches or Controller",
  "Wiring Harness to Your Existing Load Steps and Fan",
  "Commissioning and Full Load Check",
  "Operator Training",
  "Optional Annual Maintenance Contract (AMC)",
];

const STEPS = [
  ["Site Survey", "We inspect your load bank and confirm what is reused."],
  ["Panel Build", "Your control panel is built and tested by TestWatt."],
  ["Install and Commission", "Mounted on the load bank or remotely, then proven up to full load."],
  ["Training and Handover", "Your operators are trained on the new screens."],
];

export default function UpgradeBrochure() {
  return (
    <section id="upgrade-brochure" className="section section--grey ub" aria-label="Control panel and software upgrade">
      <div className="container">
        {/* 1. Intro */}
        <header className="ub-block ub-intro">
          <h2 className="ub-title">Upgrade Your Load Bank Controls</h2>
          <p className="ub-lead">
            Replace old toggle switches or a manufacturer&apos;s proprietary hardware and software with the{" "}
            <strong>TestWatt Control Panel</strong> and <strong>TestWatt Software</strong>, providing an operator-friendly
            interface, automated test sequences and comprehensive test data recording.
          </p>

          <div className="ub-facts">
            {QUICK_FACTS.map((f, i) => (
              <div key={f.title} className={`ub-fact${i % 2 ? " ub-fact--red" : ""}`}>
                <h3>{f.title}</h3>
                <p>{f.text}</p>
              </div>
            ))}
          </div>

          <div className="ub-compare" role="table" aria-label="Upgrade comparison">
            <div className="ub-compare__head" role="row">
              <div role="columnheader">Upgrade from</div>
              <div role="columnheader">Today</div>
              <div role="columnheader" className="ub-compare__with">With TestWatt</div>
            </div>
            {COMPARE.map((row) => (
              <div className="ub-compare__row" role="row" key={row.from}>
                <h3 role="cell">{row.from}</h3>
                <p role="cell">{row.today}</p>
                <ul role="cell" className="ub-checks">
                  {row.with.map((w) => (
                    <Check key={w}>{w}</Check>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </header>

        {/* 2. Control panel */}
        <div className="ub-block">
          <h2 className="ub-title">TestWatt Control Panel</h2>
          <p className="ub-lead">
            A new control panel that replaces the existing controls and operates the existing load bank. The load bank body,
            resistive elements and cooling fan are retained.
          </p>
          <figure className="ub-figure">
            <Shot
              name="panel"
              w={2160}
              h={1385}
              alt="TestWatt Control Panel in Automatic Mode (Local Control)"
              className="ub-shot--panel"
              loading="eager"
            />
            <figcaption>TestWatt Control Panel in Automatic Mode (Local Control)</figcaption>
          </figure>

          <div className="ub-two">
            <div>
              <h3 className="ub-subtitle">Installation Options</h3>
              <div className="ub-callout">
                <h4>Mounted on the Load Bank</h4>
                <p>The panel is fitted directly to the load bank enclosure.</p>
              </div>
              <div className="ub-callout">
                <h4>Remote Mounted</h4>
                <p>
                  The panel is connected to the load bank through a TestWatt wiring harness, allowing operation from a safe
                  distance.
                </p>
              </div>
            </div>
            <div>
              <h3 className="ub-subtitle">Panel Highlights</h3>
              <ul className="ub-checks">
                {PANEL_HIGHLIGHTS.map((h) => (
                  <Check key={h}>{h}</Check>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* 3. Operating modes */}
        <div className="ub-block">
          <h2 className="ub-title">Operating Modes</h2>
          <p className="ub-lead">
            A mode selector on the panel switches between Manual and Automatic. In Automatic mode, Local or Remote operation is
            selectable from the display.
          </p>

          <div className="ub-split">
            <Shot name="manual-mode" w={872} h={527} alt="Manual mode display" />
            <div>
              <span className="ub-tag">Manual Mode</span>
              <h3 className="ub-subtitle">Toggle Switches</h3>
              <p>Load steps are switched on and off using the toggle switches on the panel, with the mode selector set to MAN.</p>
              <ul className="ub-checks">
                <Check>Toggle Switch for Every Load Step</Check>
                <Check>Display Shows Voltage, Current, Power and Frequency</Check>
                <Check>No Computer Required</Check>
              </ul>
            </div>
          </div>

          <div className="ub-mode">
            <span className="ub-tag ub-tag--red">Automatic Mode · Local</span>
            <h3 className="ub-subtitle">Panel Display</h3>
            <p>Operated from the 7-inch touchscreen, with the mode selector at AUTO and Local selected on the display.</p>
            <div className="ub-two">
              <figure className="ub-figure">
                <Shot name="basic-controls" w={936} h={564} alt="Basic Controls screen" />
                <h4>Basic Controls</h4>
                <p>Switch individual load steps and the fan on or off, with live power, voltage, current and frequency.</p>
              </figure>
              <figure className="ub-figure">
                <Shot name="advanced-controls" w={936} h={564} alt="Advanced Controls screen" />
                <h4>Advanced Controls</h4>
                <p>Enter a kW setpoint, apply or drop load, and start or stop saved load profiles.</p>
              </figure>
            </div>
          </div>

          <div className="ub-split">
            <Shot name="remote-software" w={871} h={547} alt="TestWatt software home screen" />
            <div>
              <span className="ub-tag ub-tag--red">Automatic Mode · Remote</span>
              <h3 className="ub-subtitle">PC, Laptop or Tablet</h3>
              <p>
                The load bank is operated from an external PC, laptop or tablet running TestWatt software, with Remote selected
                on the display.
              </p>
              <ul className="ub-checks">
                <Check>Automated Generator and Data Center Tests</Check>
                <Check>Data Logging and Reports</Check>
                <Check>Control of Multiple Linked Load Banks</Check>
              </ul>
            </div>
          </div>
        </div>

        {/* 4. Testing applications */}
        <div className="ub-block">
          <h2 className="ub-title">Testing Applications</h2>
          <p className="ub-lead">
            Preconfigured test programs for standby generators and data centers, adjustable to each site&apos;s requirements.
          </p>

          <div className="ub-two">
            <article className="ub-card">
              <h3>Generator Testing</h3>
              <p>
                Load testing verifies that standby generators deliver rated power when required and helps prevent wet stacking
                in lightly loaded diesel engines.
              </p>
              <h4 className="ub-label">Built-in tests</h4>
              {GENERATOR_TESTS.map(([t, d]) => (
                <p key={t}>
                  <strong>{t}:</strong> {d}
                </p>
              ))}
              <h4 className="ub-label">Ideal for</h4>
              <p>Hospitals, Commercial Buildings, Telecom Sites, Generator Rental Fleets and Service Companies</p>
            </article>

            <article className="ub-card ub-card--red">
              <h3>Data Center Testing</h3>
              <p>
                Power and cooling systems must be verified at design load before IT equipment is installed. TestWatt provides a
                controlled resistive load in place of the IT load.
              </p>
              <h4 className="ub-label">Built-in tests</h4>
              {DATA_CENTER_TESTS.map(([t, d]) => (
                <p key={t}>
                  <strong>{t}:</strong> {d}
                </p>
              ))}
              <h4 className="ub-label">Ideal for</h4>
              <p>Rental Companies, Data Center Commissioning and Data Center Construction Companies</p>
            </article>
          </div>

          <div className="ub-platform">
            <h3>One Platform for Your Entire Fleet</h3>
            <p>
              TestWatt integrates load banks from different manufacturers onto a single control platform. Operators use the same
              screens, test programs and reports across every unit in the fleet, regardless of make or model.
            </p>
            <ul className="ub-inline">
              <Check>Mixed-Brand Fleets Supported</Check>
              <Check>One Operator Training Program</Check>
              <Check>Unified Test Records</Check>
            </ul>
          </div>
          <p className="ub-note">
            Load profiles, durations (seconds to hours) and repeat cycles are adjustable for every test. Additional procedures
            can be configured as Custom Tests.
          </p>
        </div>

        {/* 5. Additional capabilities */}
        <div className="ub-block">
          <h2 className="ub-title">Additional Capabilities</h2>
          <p className="ub-lead">
            Control functions that extend the load bank beyond scheduled testing to continuous site power management.
          </p>

          <div className="ub-feature">
            <Shot name="auto-load-leveling" w={1038} h={652} alt="Auto Load Leveling screen" />
            <div>
              <h3 className="ub-subtitle">Auto Load Leveling</h3>
              <p>
                Maintains generator load at or above a set minimum by applying load automatically as site demand falls. An
                external CT at the generator output monitors generator loading, with the option to include or exclude load bank
                power in the calculation.
              </p>
              <ul className="ub-checks">
                <Check>Prevents Wet Stacking at Light Load</Check>
                <Check>Adjustable Minimum Load and Response Time</Check>
                <Check>Load Bank Contribution Limited to a Set Maximum</Check>
              </ul>
            </div>
          </div>

          <div className="ub-feature">
            <Shot name="power-export-control" w={1040} h={651} alt="Power Export Control / Regen Control screen" />
            <div>
              <h3 className="ub-subtitle">Power Export Control / Regen Control</h3>
              <p>
                An external CT, connected with an additional power meter in the load bank, senses reverse current. Load is
                applied until reverse current is zero or within the accepted limit.
              </p>
              <ul className="ub-checks">
                <Check>Prevents Unwanted Export to the Utility Grid</Check>
                <Check>Adjustable Accepted Reverse Power</Check>
                <Check>Fail-Safe Load on Loss of Meter Signal</Check>
              </ul>
            </div>
          </div>

          <div className="ub-feature">
            <Shot name="modbus-control" w={1038} h={652} alt="Modbus Control screen" />
            <div>
              <h3 className="ub-subtitle">Modbus Control</h3>
              <p>Allows BMS, SCADA and PLC systems to start, stop and set the load bank remotely.</p>
              <ul className="ub-checks">
                <Check>Modbus TCP (Ethernet) and Modbus RTU (RS-485)</Check>
                <Check>Local Panel or Remote Control Selection</Check>
                <Check>Documented Register Map</Check>
              </ul>
            </div>
          </div>
        </div>

        {/* 6. Software features */}
        <div className="ub-block">
          <h2 className="ub-title">Software Features</h2>
          <p className="ub-lead">TestWatt software runs on an external PC, laptop or tablet in Automatic Remote mode.</p>
          <div className="ub-two">
            <figure className="ub-figure">
              <Shot name="run-a-test" w={1063} h={667} alt="Run a Test screen" />
              <h4>Run a Test</h4>
              <p>
                Ready-made generator and data center tests. Set load profiles from seconds to hours and repeat tests
                automatically.
              </p>
            </figure>
            <figure className="ub-figure">
              <Shot name="testing-data" w={1063} h={667} alt="Testing Data screen" />
              <h4>Testing Data</h4>
              <p>
                Voltage, frequency, power, power factor, voltage drop, recovery time and phase balance, with per-phase details
                for technicians.
              </p>
            </figure>
            <figure className="ub-figure">
              <Shot name="units" w={1062} h={668} alt="Units screen" />
              <h4>Units</h4>
              <p>Link several load banks and control them as one system, with the status of every unit at a glance.</p>
            </figure>
            <figure className="ub-figure">
              <Shot name="reports" w={1062} h={668} alt="Reports screen" />
              <h4>Reports</h4>
              <p>Every test saved by date and time. Save PDF reports, export data to Excel or email a report.</p>
            </figure>
          </div>
        </div>

        {/* 7. Engineering support */}
        <div className="ub-block">
          <h2 className="ub-title">Engineering Support Beyond the Upgrade</h2>
          <p className="ub-lead">
            TestWatt works alongside clients from specification through delivery, so every load bank is the right fit for the
            application.
          </p>
          <div className="ub-facts ub-facts--three">
            <div className="ub-fact">
              <h3>Load Bank Selection</h3>
              <p>
                Guidance in selecting the right load bank model from available manufacturers, based on the requirements of each
                application.
              </p>
            </div>
            <div className="ub-fact ub-fact--red">
              <h3>Custom Load Bank Development</h3>
              <p>Load banks designed and developed to meet specific site, rating and test requirements.</p>
            </div>
            <div className="ub-fact">
              <h3>Early Risk Identification</h3>
              <p>Potential limitations identified at the design stage, before they affect cost, schedule or performance.</p>
            </div>
          </div>

          <div className="ub-two">
            <div>
              <h3 className="ub-subtitle">What&apos;s Included</h3>
              <ul className="ub-checks">
                {INCLUDED.map((i) => (
                  <Check key={i}>{i}</Check>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="ub-subtitle">How the Upgrade Works</h3>
              <ol className="ub-steps">
                {STEPS.map(([t, d], i) => (
                  <li key={t}>
                    <span className="ub-steps__num">{i + 1}</span>
                    <div>
                      <h4>{t}</h4>
                      <p>{d}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
