import TechnicalChart from "@/components/technical-chart";
import { NumberedItem, SectionHeading } from "@/components/ui";
import { HOME_LOAD_PROFILE, TESTING_PROCESS } from "@/lib/content";

export default function TestingProcess() {
  return (
    <section className="section section--navy" aria-labelledby="process-heading">
      <div className="container">
        <SectionHeading
          kicker="Testing Process"
          heading={<span id="process-heading">From connection to certified report</span>}
          light
          className="section-heading--mb"
        />
        <div className="steps-grid steps-grid--5">
          {TESTING_PROCESS.map((step, index) => (
            <NumberedItem
              key={step.step}
              step={step}
              light
              last={index === TESTING_PROCESS.length - 1}
            />
          ))}
        </div>
        <TechnicalChart
          data={HOME_LOAD_PROFILE}
          label="Step-Load Test Profile — Generator @ Nameplate Rating (% Load vs Time)"
        />
      </div>
    </section>
  );
}
