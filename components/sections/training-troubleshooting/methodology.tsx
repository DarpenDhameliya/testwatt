import { NumberedItem, SectionHeading } from "@/components/ui";
// import { DIAGNOSTIC_METHODOLOGY } from "@/lib/content";

export default function Methodology() {
  return (
    <section className="section section--white" aria-labelledby="methodology-heading">
      <div className="container">
        <SectionHeading
          kicker="Diagnostic Protocol"
          heading={<span id="methodology-heading">4-phase root-cause investigation methodology</span>}
          body="We follow the same four steps on every job. Live waveform capture supports the diagnosis, and you receive a written corrective action plan at the end."
          className="section-heading--mb"
        />

        {/* <div className="process-grid">
          {DIAGNOSTIC_METHODOLOGY.map((step, index) => (
            <NumberedItem
              key={step.step}
              step={step}
              last={index === DIAGNOSTIC_METHODOLOGY.length - 1}
            />
          ))}
        </div> */}
      </div>
    </section>
  );
}
