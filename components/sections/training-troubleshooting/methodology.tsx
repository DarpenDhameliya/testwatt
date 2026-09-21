import { NumberedItem, SectionHeading } from "@/components/ui";
import { DIAGNOSTIC_METHODOLOGY } from "@/lib/content";

export default function Methodology() {
  return (
    <section className="section section--white" aria-labelledby="methodology-heading">
      <div className="container">
        <SectionHeading
          kicker="Diagnostic Protocol"
          heading={<span id="methodology-heading">4-phase root-cause investigation methodology</span>}
          body="A systematic approach to diagnosing complex power anomalies, backed by real-time waveform capture and formal engineering corrective action plans."
          className="section-heading--mb"
        />

        <div className="process-grid">
          {DIAGNOSTIC_METHODOLOGY.map((step, index) => (
            <NumberedItem
              key={step.step}
              step={step}
              last={index === DIAGNOSTIC_METHODOLOGY.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
