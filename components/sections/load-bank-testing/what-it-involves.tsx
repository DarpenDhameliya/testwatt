import { Kicker } from "@/components/ui";
import { MONITORED_PARAMETERS } from "@/lib/content";

export default function WhatItInvolves() {
  return (
    <section
      id="what-it-involves"
      className="section section--white"
      aria-labelledby="involves-heading"
    >
      <div className="container">
        <div className="two-col-grid">
          <div>
            <Kicker>What the Test Involves</Kicker>
            <h2 id="involves-heading" className="content-heading">
              Controlled loading to nameplate rating
            </h2>
            <p className="content-body">
              A load bank test connects a calibrated resistive or reactive load — matched
              to the equipment&apos;s rated output — and applies that load in defined
              incremental steps. Each step is held for a minimum period while parameters
              including voltage, current, frequency, power factor, temperature and fuel
              consumption are recorded continuously.
            </p>
            <p className="content-body">
              The test culminates in a full-duration run at 100% of nameplate rating. Only
              this sustained full-load condition confirms that cooling systems are
              adequate, fuel systems deliver under load, AVR and governor control is
              stable, and transfer systems operate within specification.
            </p>
            <p className="content-body">
              TestWatt engineers operate calibrated portable load banks at your site. The
              only utility supply interruption is the planned transfer to test load — all
              other site power is unaffected throughout.
            </p>
          </div>
          <div>
            <div className="params-box">
              <div className="params-box__heading">Parameters Monitored During Test</div>
              <ul className="params-list" aria-label="Monitored parameters">
                {MONITORED_PARAMETERS.map((parameter) => (
                  <li key={parameter} className="params-list__item">
                    <span className="params-list__dot" aria-hidden="true" />
                    {parameter}
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
