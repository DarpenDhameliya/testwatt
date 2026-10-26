import type { ReactNode } from "react";
import { SectionHeading } from "@/components/ui";

interface UpgradeItem {
  number: string;
  badge: string;
  title: string;
  body: ReactNode;
  icon: (className?: string) => React.ReactNode;
}

const UPGRADE_ITEMS: UpgradeItem[] = [
  {
    number: "01",
    badge: "Upgrade Capability",
    title: "Manual operation to automatic operation conversion",
    body: (
      <>
        <p>
          A manual load bank requires a person at the controls for the entire duration of the
          test, switching steps in and out, monitoring the meters and taking the readings. It
          works, but it occupies a technician and leaves scope for missed readings and uneven
          step timing.
        </p>
        <p>
          We go from manual to automatic by fitting a programmable controller and digital
          metering. Once converted the load bank can then run on its own according to a
          predefined test profile, stepping the load up and down at set intervals and recording
          voltage, current, kW and frequency for the entire run. A manual mode is retained so
          that the operator can take control if they wish.
        </p>
        <p>
          <strong>Typical scope:</strong>
        </p>
        <ul>
          <li>PLC or microprocessor based controller with a touchscreen.</li>
          <li>Digital 3 phase metering with test data saved to USB.</li>
          <li>Programmable load profiles for step load and timed tests.</li>
          <li>Review and upgrade of the existing safety circuits.</li>
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
        <rect x="3" y="4" width="18" height="14" rx="2" />
        <path d="M8 20h8M12 18v2" />
        <path d="M7 9h4M7 13h6" />
      </svg>
    ),
  },
  {
    number: "02",
    badge: "Upgrade Capability",
    title: "Automatic operation to manual operation conversion",
    body: (
      <>
        <p>
          Not every customer wants a touchscreen. Some operators will simply prefer to run their
          load bank the way they&apos;ve always done it in the past: turn a switch, watch the meter
          and know precisely what the unit is doing. We&apos;ll convert an automatically controlled
          load bank to simple manual operation for the customer who wants a unit that&apos;s easy
          to run and easy to maintain.
        </p>
        <p>
          A manual conversion is also a very practical solution when an older controller fails and
          you can&apos;t get any replacement parts. We fit in a switch panel with clearly labelled
          load steps and retain all the safety protection. We can also fit in a digital meter for
          an accurate reading or a Manual/Auto selector if you want to keep both modes.
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
        <circle cx="12" cy="12" r="3" />
        <path d="M12 3v3M12 18v3M3 12h3M18 12h3" />
      </svg>
    ),
  },
  {
    number: "03",
    badge: "Upgrade Capability",
    title: "Auto load level capability",
    body: (
      <>
        <p>
          Diesel generators which are running for long periods at light load are susceptible to
          wet stacking (unburnt fuel and carbon building up in the engine and in the exhaust).
          It&apos;s a fairly common problem with standby sets which are serving a building whose
          actual demand is far below the generator&apos;s rating.
        </p>
        <p>
          Auto Load Level control deals with this by using the load bank as an auxiliary load. The
          current transformers on the building feed tell the controller how much load the building
          is taking. If the building load is low, the controller will add load bank steps to
          maintain the generator at a healthy minimum. As building load increases, the controller
          removes steps so the building is always prioritized. A signal from the transfer switch or
          generator controller normally initiates the prior start on system. It will only operate
          when the load generator is actually carrying the building load.
        </p>
        <p>
          <strong>Typical scope:</strong>
        </p>
        <ul>
          <li>Current transformer installation on the facility load side.</li>
          <li>Load level controller with adjustable minimum load set points and time delays.</li>
          <li>Wiring to the ATS or generator controller start signal.</li>
          <li>Commissioning and setpoint tuning on site.</li>
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
        <path d="M12 22a10 10 0 1 1 7.07-2.93" />
        <path d="M12 12l4.5-4.5" />
        <circle cx="12" cy="12" r="1.5" fill="currentColor" />
      </svg>
    ),
  },
  {
    number: "04",
    badge: "Upgrade Capability",
    title: "Modbus communication capability",
    body: (
      <>
        <p>
          Many sites will already have a BMS, SCADA or generator control panel in place to monitor
          their power equipment. A Modbus upgrade lets your load bank join that system rather than
          being a stand alone unit.
        </p>
        <p>
          We add Modbus RTU (RS-485) or Modbus TCP/IP (Ethernet) to the load bank controller so
          that your control system can read the live electrical values, load bank status and
          alarms. You can of course start tests and select load remotely where you want. We supply
          a register map and work with your controls team or integrator to get the points into
          your system.
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
    badge: "Upgrade Capability",
    title: "Regenerative power capability",
    body: (
      <>
        <p>
          Elevators, Cranes, Hoists and Large motors on VFDs can feed power back to the source when
          they are braking or lowering a load. On the utility power system the grid just takes it.
          A standby generator can&apos;t. Reverse power can drive the alternator, raise the voltage
          and frequency and trip the generator&apos;s reverse power protection which will then drop
          the building load at the most inopportune moment.
        </p>
        <p>
          We incorporate reverse power sensing and control so the load bank steps in to take up the
          regenerated energy as it appears, then steps out again once it&apos;s passed. The steps
          are staged so the applied load tracks the regenerated power. This keeps the generator
          online and stable while the elevators and drives run as normal.
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
    number: "06",
    badge: "Upgrade Capability",
    title: "Power export control capability",
    body: (
      <>
        <p>
          Sites that are running generators in parallel with the utility (for peak shaving, demand
          response, closed transition testing or CHP) will frequently be subject to limits on the
          amount of power they can export back onto the utility network. Some utilities will, in
          fact, allow zero export.
        </p>
        <p>
          Our export control upgrade monitors the power at the utility connection and uses the load
          bank to absorb any excess generation, keeping export at zero or below your agreed limit.
          It&apos;s also useful during paralleled generator testing when the building isn&apos;t
          drawing sufficient load to test the generators properly. Export control operates in
          conjunction with the protective relaying that your utility requires. It does not replace
          it in any way
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
        <path d="M4 12h13" />
        <path d="M13 6l6 6-6 6" />
        <path d="M4 5v14" strokeOpacity="0.4" />
      </svg>
    ),
  },
  {
    number: "07",
    badge: "Upgrade Capability",
    title: "Wi-Fi control capability",
    body: (
      <>
        <p>
          Running the control cables across the site takes time and standing right next to a
          running load bank is going to be hot, noisy and there&apos;s exhaust. The Wi-Fi upgrade
          provides a wireless gateway so the operator can monitor and control the load bank from a
          laptop or tablet at a safe distance.
        </p>
        <p>
          Connections are password protected and wireless access can be turned off when not
          required. If there are multiple load banks on site, they can be linked via Wi-Fi without
          control cabling between the units.
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
        <path d="M5 12.5a11 11 0 0 1 14 0" />
        <path d="M8.5 16a6 6 0 0 1 7 0" />
        <circle cx="12" cy="19" r="1.2" fill="currentColor" />
      </svg>
    ),
  },
  {
    number: "08",
    badge: "Upgrade Capability",
    title: "Customized testing capability",
    body: (
      <>
        <p>
          There is no such thing as a &apos;one size fits all&apos; test. A hospital following
          NFPA 110 and NFPA 99 will have very different requirements from a data center
          commissioning a new hall or a manufacturer testing gensets at the very end of the line.
          Each will have different load profiles, durations and records.
        </p>
        <p>We program your controller around the tests that you actually run.</p>
        <p>
          <strong>That can include:</strong>
        </p>
        <ul>
          <li>Step load sequences matched your NFPA 110 test plan.</li>
          <li>Block load and transient response tests.</li>
          <li>Extended heat runs and heat load testing of the data centers.</li>
          <li>Load profiles that repeat the same test in exactly the same way every time.</li>
          <li>Test reports for your compliance records.</li>
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
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <path d="m9 15 2 2 4-4" />
      </svg>
    ),
  },
  {
    number: "09",
    badge: "Upgrade Capability",
    title: "Networking capability",
    body: (
      <>
        <p>
          Some tests require more capacity than a single load bank can provide or require the load
          to be spread across a building. Networking links several load banks together so they can
          operate as a single system from a single master controller, handheld remote or PC.
        </p>
        <p>
          With networked units, you can achieve greater total test capacity, place smaller load
          banks close to the equipment under test to eliminate long cable runs and combine
          resistive and reactive units for power factor testing. In a data center environment, you
          can also apply load to individual zones to see how the cooling responds. The number of
          units that can be networked is dependent on the control platform, and we&apos;ll confirm
          this as part of the assessment.
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
        <circle cx="5" cy="6" r="2.2" />
        <circle cx="19" cy="6" r="2.2" />
        <circle cx="12" cy="18" r="2.2" />
        <path d="M6.8 7.6 10.5 16M17.2 7.6 13.5 16M7.2 6h9.6" />
      </svg>
    ),
  },
];

export default function Capabilities() {
  return (
    <section
      id="upgrade-capabilities"
      className="section section--white why-section-wrap"
      aria-labelledby="upgrade-capabilities-heading"
    >
      <div className="container">
        <SectionHeading
          kicker="Load Bank Upgrades"
          heading={
            <span id="upgrade-capabilities-heading">
              Get more out of the load bank you already own
            </span>
          }
          body={[
            "A lot of load banks still in service are reliant on toggle switches and analog meters. The resistor elements, the frame and the cooling system are often in fairly good condition. The control side is what's fallen behind. TestWatt can upgrade your existing load bank with modern controls, automation and communications so that it can do more work without the cost and lead time of simply buying a new unit.",
            "We do permanent upgrades to permanently installed, trailer mounted and portable load banks. Each upgrade starts with an inspection of the unit and a clear scope so you know exactly what's going to change, what it's going to cost and how long the unit will be out of service prior to any work commencing.",
          ]}
          className="section-heading--mb"
        />

        <div className="why-grid--equal">
          {/* Left Sticky Column */}
          <div className="why-grid__sticky">
            <h3 className="why-grid__title">1. Why upgrade instead of replace</h3>
            <p className="why-grid__body">
              Replacing a load bank is effectively new equipment, new installation work and often
              new cabling and new pads. In many instances the better value is to keep the bits that
              still work and simply replace the bits that are holding you back.

            </p>
            <p className="why-grid__body">
              <strong>An upgrade can:</strong>
            </p>
            <ul className="why-grid__list">
              <li>Cut the time a technician spends standing at the panel during a test.</li>
              <li>Give you accurate logged test data rather than handwritten readings.</li>
              <li>
                Protect your standby generators from the problems associated with light loading
                and regenerated power.
              </li>
              <li>Connect the load bank to your building management system or SCADA.</li>
              <li>Extend the working life of the equipment you&apos;ve already paid for.</li>
            </ul>
          </div>

          {/* Upgrade services */}
          <div>
            <h3 className="why-grid__title">2. Our upgrade services</h3>
            <div className="why-cards-grid--stacked">
              {UPGRADE_ITEMS.map((item) => (
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
      </div>
    </section>
  );
}
