import { NumberedItem, SectionHeading } from "@/components/ui";
import { PARTS_ORDER_STEPS } from "@/lib/content";

export default function Process() {
  return (
    <section className="section section--white" aria-labelledby="order-process-heading">
      <div className="container">
        <SectionHeading
          kicker="Logistics & Dispatch Workflow"
          heading={<span id="order-process-heading">Fast-track dispatch in 4 simple steps</span>}
          body="Our streamlined supply process ensures rapid turnaround from initial serial lookup to arrival at your jobsite or repair workshop."
          className="section-heading--mb"
        />

        <div className="process-grid">
          {PARTS_ORDER_STEPS.map((step, index) => (
            <NumberedItem
              key={step.step}
              step={step}
              last={index === PARTS_ORDER_STEPS.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
