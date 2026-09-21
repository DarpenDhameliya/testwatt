import { FeatureItem, SectionHeading } from "@/components/ui";
import { TROUBLESHOOTING_AREAS } from "@/lib/content";

export default function Troubleshooting() {
  return (
    <section className="section section--alt" aria-labelledby="troubleshooting-heading">
      <div className="container">
        <SectionHeading
          kicker="Specialist Engineering Diagnostics"
          heading={<span id="troubleshooting-heading">Root-cause investigation for persistent faults</span>}
          body="Intermittent trips, harmonic resonance, and governor oscillations cannot be fixed by guesswork or speculative parts replacement. We deploy high-frequency data acquisition equipment to isolate the root mechanism."
          className="section-heading--mb"
        />

        <div className="features-grid">
          {TROUBLESHOOTING_AREAS.map((area) => (
            <FeatureItem key={area.title} item={area} />
          ))}
        </div>
      </div>
    </section>
  );
}
