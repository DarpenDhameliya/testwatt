import type { ReactNode } from "react";
import { Kicker } from "@/components/ui";

interface ServiceItem {
  number: string;
  badge: string;
  title: string;
  body: ReactNode;
  icon: (className?: string) => React.ReactNode;
}

const SERVICE_ITEMS: ServiceItem[] = [
  {
    number: "01",
    badge: "Service Capability",
    title: "Troubleshooting and repair",
    body: (
      <>
        <p>
          We trace faults to the component: open or shorted resistor elements, failed
          fans and motors, pitted or welded contactors, blown fuses, faulty
          over-temperature and airflow switches, damaged wiring, and controllers or
          meters that no longer respond. We isolate the fault before replacing parts,
          so you pay for what failed and nothing else. If a unit has serious damage,
          you get a written assessment and a quote before work starts, along with our
          view on whether a repair or a rebuild is the better use of your money.
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
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
        <path d="M8 16l-4 4" />
      </svg>
    ),
  },
  {
    number: "02",
    badge: "Service Capability",
    title: "Preventive maintenance",
    body: (
      <>
        <p>
          A scheduled service catches the problems that would otherwise end a load
          test halfway through. We inspect, clean and test the unit, then run it under
          load to confirm every step comes in as it should. How often a unit needs
          service depends on how hard it works. A rental fleet load bank that goes out
          every week needs more attention than a permanently installed unit exercised
          once a month. We can set up annual or twice-yearly visits and keep a service
          history for each unit.
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
        <rect x="3" y="4" width="18" height="18" rx="2" />
        <path d="M16 2v4M8 2v4M3 10h18" />
        <path d="m9 16 2 2 4-4" />
      </svg>
    ),
  },
  {
    number: "03",
    badge: "Service Capability",
    title: "Calibration and metering checks",
    body: (
      <>
        <p>
          If your load bank reports kW, voltage, current and frequency for compliance
          testing, those numbers have to be right. We compare the unit&apos;s metering
          and load steps against calibrated reference instruments and adjust or
          replace anything out of tolerance. You receive a certificate listing the
          as-found and as-left readings and the reference equipment used.
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
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 3" />
      </svg>
    ),
  },
  {
    number: "04",
    badge: "Service Capability",
    title: "Start-up and commissioning",
    body: (
      <>
        <p>
          Before a new or relocated permanent load bank runs for the first time, we
          check power and control wiring, grounding, clearances, cooling air and
          exhaust direction, and communication with remote controls. We then bring the
          unit up in steps and verify it at full rated load. Load banks discharge a
          lot of hot air, so we check where the exhaust goes and whether the room has
          enough make-up air.
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
        <path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
  },
  {
    number: "05",
    badge: "Service Capability",
    title: "Refurbishment and rebuilds",
    body: (
      <>
        <p>
          A rebuild replaces the elements, insulators, contactors, fans, wiring and
          controls that need it and returns the unit to its rated capacity, usually
          for much less than a new unit of the same size. On units where the original
          parts are no longer made, we source equivalents or redesign the affected
          circuit.
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
      </svg>
    ),
  },
  {
    number: "06",
    badge: "Service Capability",
    title: "Spare parts",
    body: (
      <>
        <p>
          We supply the parts that fail most often: resistor elements, ceramic
          insulators, contactors, fuses, fan motors and blades, temperature switches,
          relays, indicator lamps, cables and connectors. We can also build a spares
          kit matched to your fleet, so one failed part doesn&apos;t take a unit out of
          service while you wait on shipping.
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
        <path d="M21 8 12 3 3 8l9 5 9-5z" />
        <path d="M3 8v8l9 5 9-5V8" />
        <path d="M12 13v8" />
      </svg>
    ),
  },
  {
    number: "07",
    badge: "Service Capability",
    title: "Field service or shop repair",
    body: (
      <>
        <p>
          Field service suits permanently installed load banks, trailer and container
          units, and any job where downtime has to be short. A technician comes to
          your site with the test equipment needed to carry out the repair or service.
        </p>
        <p>
          Shop repair suits portable and compact units. You ship or drop off the unit,
          we repair it on the bench, and it goes through a test before it comes back
          to you.
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
        <rect x="1" y="7" width="14" height="10" rx="1" />
        <path d="M15 10h4l3 3v4h-7z" />
        <circle cx="5.5" cy="18.5" r="1.8" />
        <circle cx="17.5" cy="18.5" r="1.8" />
      </svg>
    ),
  },
];

export default function Capabilities() {
  return (
    <section
      id="repair-capabilities"
      className="section section--white why-section-wrap"
      aria-labelledby="repair-capabilities-heading"
    >
      <div className="container">
        <div className="why-grid--equal">
          {/* Left Sticky Column */}
          <div className="why-grid__sticky">
            <Kicker>What We Cover</Kicker>
            <h2 id="repair-capabilities-heading" className="why-grid__title">
              Repairs, maintenance, calibration and parts
            </h2>
            <p className="why-grid__body">
              Repairs, preventive maintenance, calibration and spare parts for AC, DC
              and resistive-reactive load banks. On your site or in our shop.
            </p>
          </div>

          {/* Right Scrolling Cards Column */}
          <div className="why-cards-grid--stacked">
            {SERVICE_ITEMS.map((item) => (
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
