import { NumberedItem, SectionHeading } from "@/components/ui";
import { UPGRADE_STEPS } from "@/lib/content";

export default function Process() {
  return (
    <section className="section section--white" aria-labelledby="upgrade-process-heading">
      <div className="container">
        <SectionHeading
          kicker="Engineering Workflow"
          heading={<span id="upgrade-process-heading">From initial fleet audit to site commissioning</span>}
          body="Every retrofit follows the same four stages. That way the hardware fits, the calibration is checked, and your operators know how to use the unit before we leave."
          className="section-heading--mb"
        />

        <div className="process-grid">
          {UPGRADE_STEPS.map((step, index) => (
            <NumberedItem
              key={step.step}
              step={step}
              last={index === UPGRADE_STEPS.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
