import { Kicker } from "@/components/ui";
// import { MONITORED_PARAMETERS } from "@/lib/content";

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
              We hook up a calibrated resistive or reactive load bank that matches the
              equipment&apos;s rated output, then bring the load on in set steps. Each
              step is held for a minimum time, and throughout we log voltage, current,
              frequency, power factor, temperatures and fuel use.
            </p>
            <p className="content-body">
              The last stage is a full-duration run at 100% of nameplate rating. Only
              a sustained run at full load shows whether the cooling system keeps up,
              whether the fuel system can deliver, whether the AVR and governor stay
              steady, and whether the transfer equipment does what it should.
            </p>
            <p className="content-body">
              Our engineers bring calibrated portable load banks to your site. Your
              supply is only interrupted for the planned transfer onto the test load.
              Everything else on site carries on as normal.
            </p>
          </div>
          <div>
            <div className="params-box">
              <div className="params-box__heading">Parameters Monitored During Test</div>
              {/* <ul className="params-list" aria-label="Monitored parameters">
                {MONITORED_PARAMETERS.map((parameter) => (
                  <li key={parameter} className="params-list__item">
                    <span className="params-list__dot" aria-hidden="true" />
                    {parameter}
                  </li>
                ))}
              </ul> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
