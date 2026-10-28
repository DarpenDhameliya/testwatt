const REASONS = [
  "Code compliance: compliance (NFPA 110, NFPA 99, The Joint Commission and CMS) requires loaded testing on a fixed schedule and a load bank is used to fill that gap when the building load is too small.",
  "Wet stacking and carbon build up: diesel engines running lightly loaded leave unburnt fuel and carbon in the exhaust. A sustained load at the correct level will burn it off.",
  "Commissioning a new installation: NFPA 110 acceptance testing requires a 2-hour full load run before accepting the system.",
  "Checking the work following a repair or overhaul: a load run will confirm the engine makes rated power after injector, turbo, governor or regulator work.",
  "Finding the cooling and fuel problems early: clogged radiators, weak fuel delivery and high exhaust temps all tend to manifest themselves only above 50% load.",
  "Proving capacity prior to loading: You won't be connecting a new wing, chiller or server hall until we've confirmed the set can carry the full load.",
  "UPS and battery testing: resistive AC and DC load banks are used to test the runtime and output of the UPS and battery strings.",
  "Docs: Insurers, surveyors and data center clients are increasingly asking for signed test records rather than just an exercise log.",
];

export default function Overview() {
  return (
    <section
      id="overview"
      className="section section--white why-section-wrap"
      aria-labelledby="overview-heading"
    >
      <div className="container">
        <div className="why-grid--equal">
          <div className="why-grid__sticky">
            <p className="why-grid__body">
              A resistive load bank applies a known, measured kW load to your generator or other power source and converts that power into heat. TestWatt uses it to run your equipment at the load levels that your code, your AHJ or your engine manufacturer require. We take all the readings and provide you with a report which you can hand to the inspector
            </p>
            <p className="why-grid__body">
              Resistive loading is a unity power factor so it&apos;s working the engine, the fuel system, the cooling system and the exhaust at real output. It&apos;s the method used for NFPA 110 supplemental tests, the 36-month tests and pretty much all the routine maintenance testing. If you need more than a simple test our testing also includes regenerative power absorption, automatic load leveling, export power control, remote Modbus operation, block loading and transient response.
            </p>
          </div>

          <div className="why-grid__sticky">
            <h2 id="overview-heading" className="why-grid__title">
              Why test with a resistive load bank
            </h2>
            <p className="why-grid__body">
              The vast majority of standby generators spend their lives at light load or no load. The only way to
              properly see how the whole unit behaves at the actual output it was purchased for is to run a load bank
              test.
            </p>
            <h4 className="why-card__subheading overview-subheading">Customers call us for these reasons:</h4>
          </div>

          <ul className="overview-list">
            {REASONS.map((reason) => {
              const split = reason.indexOf(":") + 1;
              return (
                <li key={reason}>
                  <strong className="overview-list__key">{reason.slice(0, split)}</strong>
                  {reason.slice(split)}
                </li>
              );
            })}
          </ul>

          <p className="why-grid__body">
            One thing to be aware of is that a resistive load bank will load the generator right up to its full kW rating at unity power factor. To test the alternator at its full kVA rating (typically at 0.8 power factor) you&apos;d need a resistive-reactive load bank and we can provide that if your specification requires it.
          </p>
        </div>
      </div>
    </section>
  );
}
