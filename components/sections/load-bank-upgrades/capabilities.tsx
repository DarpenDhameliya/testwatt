import type { ReactNode } from "react";
import { Kicker } from "@/components/ui";

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
          Many older load banks are run from a row of switches, with a technician
          adding load steps by hand and writing readings on a clipboard. We convert
          these units to PLC-based control with a touchscreen operator panel.
        </p>
        <p>
          After conversion, the load bank can run a programmed test on its own. It
          steps load up in set kW increments, holds each step for a set time, steps
          back down, and records voltage, current, frequency, kW, and power factor the
          whole way through. Operators can still switch to manual control at the panel
          whenever they need to. Existing safety interlocks, including airflow,
          over-temperature, and emergency stop, are wired into the new control logic.
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
          Not every customer wants a touchscreen. Some operators prefer to control a
          load bank the way they always have: turn a switch, watch the meter, and know
          exactly what the unit is doing. We convert automatically controlled load
          banks to simple manual operation for customers who want a unit that&apos;s
          easy to run and easy to fix.
        </p>
        <p>
          A manual conversion is also a practical fix when an older controller fails
          and replacement parts are no longer available. We install a switch panel
          with labeled load steps and keep every safety protection in place. We can
          also add a digital meter for accurate readings or a Manual/Auto selector if
          you&apos;d like to keep both options.
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
          Diesel generators that run lightly loaded for long periods build up
          unburned fuel and carbon in the exhaust system, a condition known as wet
          stacking. Auto load level keeps the generator above a minimum load whenever
          it runs, whether during a monthly exercise or a real outage.
        </p>
        <p>
          Current transformers measure the building load. When building load falls
          below the setpoint, the load bank adds steps to make up the difference. As
          building load rises, the load bank removes steps, so the generator is never
          overloaded. The CTs must be installed on the building side of the
          connection, downstream of the load bank, and we set the thresholds to match
          your generator rating and the load bank&apos;s step sizes.
        </p>
        <p>
          This is a practical option for facilities where the connected building load
          isn&apos;t enough to meet NFPA 110 monthly exercise requirements.
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
    number: "04",
    badge: "Upgrade Capability",
    title: "Modbus communication capability",
    body: (
      <>
        <p>
          We add Modbus RTU (RS-485) or Modbus TCP (Ethernet) so the load bank can
          share data with a PLC, SCADA system, building management system, or
          generator controller. Readings such as kW, voltage, current, frequency,
          applied load, and alarm status become available to your system, and with
          remote control enabled, an outside system can apply and remove load.
        </p>
        <p>
          For building management systems that run on BACnet, we can add a gateway
          that translates between the two protocols. Every Modbus upgrade comes with a
          register map for your integrator.
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
          Elevators, cranes, hoists, and some motor drives send energy back into the
          electrical system when they brake or lower a load. On utility power the grid
          absorbs it. On a standby generator, that energy has nowhere to go. The
          generator is pushed toward reverse power, voltage and frequency climb, and
          protective relays can trip the generator offline at the moment the building
          depends on it.
        </p>
        <p>
          With this upgrade, the load bank holds a base load on the generator and
          responds to returning power, absorbing it as heat so the generator only sees
          forward load. It is common in buildings with regenerative elevator drives
          and on job sites with cranes running from generator power.
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
          Sites with a generator, CHP unit, or solar array running in parallel with
          the utility often operate under an export limit, and some are allowed no
          export at all. If on-site load drops suddenly, generation can exceed demand
          and push power back onto the utility, tripping reverse power protection or
          breaking the terms of the interconnection agreement.
        </p>
        <p>
          With export control, the load bank monitors power at the utility connection
          point and adds load as export approaches the limit. It holds the site under
          that limit until the generation source ramps down. The same function is
          useful when testing a generator in parallel with the utility.
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
          A Wi-Fi module lets your technician run and monitor the load bank from a
          laptop or tablet, away from the heat, noise and exhaust around the
          generator. It is especially useful on portable units that move between
          sites. The load bank can broadcast its own password-protected network, so it
          doesn&apos;t depend on the customer&apos;s IT system, and test data can be
          downloaded straight to the device.
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
          Standard step tests don&apos;t fit every site. We program test profiles to
          match your procedures or your customer&apos;s specifications, including
          NFPA 110 annual load bank tests, block load and transient response tests,
          extended duration runs, and UPS and battery discharge tests.
        </p>
        <p>
          Reports can be set up to your format, with site and equipment details,
          readings logged at set intervals, and pass/fail results against your
          limits. Results export as PDF or CSV for your records or your
          customer&apos;s compliance file.
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
          For tests larger than any single load bank, we can link multiple units so
          they act as one, controlled from a master panel that shows total applied
          load across the group. We can also connect load banks to your facility
          network for remote monitoring and alarm reporting from a control room or
          office.
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
        <div className="why-grid--equal">
          {/* Left Sticky Column */}
          <div className="why-grid__sticky">
            <Kicker>Load Bank Upgrades</Kicker>
            <h2 id="upgrade-capabilities-heading" className="why-grid__title">
              Get more out of the load bank you already own
            </h2>
            <p className="why-grid__body">
              TestWatt upgrades existing load banks with automatic controls, manual
              controls, communications, site-specific functions and more.
            </p>
            <p className="why-grid__body">
              The resistor elements, cooling system and enclosure on a well-kept load
              bank often have years of life left after the controls have fallen
              behind. Analog meters and controllers whose parts are no longer made are
              usually what limit an older unit. Replacing the control side brings the
              load bank up to date and keeps the parts that still work.
            </p>
            <p className="why-grid__body">
              Before we quote an upgrade, we inspect the whole unit: resistor
              elements, contactors, fuses, blower, wiring and components. A new
              controller won&apos;t help a load bank with sagging elements or a
              failing blower motor, so we tell you up front if anything else needs
              attention.
            </p>
          </div>

          {/* Right Scrolling Cards Column */}
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
    </section>
  );
}
