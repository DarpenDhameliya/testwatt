import { FeatureItem, SectionHeading } from "@/components/ui";
import { PARTS_QUALITY_POINTS } from "@/lib/content";

export default function Provenance() {
  return (
    <section className="section section--alt" aria-labelledby="provenance-heading">
      <div className="container">
        <SectionHeading
          kicker="Quality Assurance & Traceability"
          heading={<span id="provenance-heading">Why genuine OEM specification matters</span>}
          body="Load bank components operate under extreme continuous thermal loads. Non-certified substitute parts suffer resistance drift, dielectric breakdown, or thermal runaway, jeopardizing valuable test assets."
          className="section-heading--mb"
        />

        <div className="features-grid">
          {PARTS_QUALITY_POINTS.map((point) => (
            <FeatureItem key={point.title} item={point} />
          ))}
        </div>
      </div>
    </section>
  );
}
