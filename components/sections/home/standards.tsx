import { SectionHeading, StandardsTable } from "@/components/ui";
import { STANDARDS_HOME } from "@/lib/content";

export default function Standards() {
  return (
    <section className="section section--white" aria-labelledby="standards-heading">
      <div className="container">
        <SectionHeading
          kicker="Standards & Compliance"
          heading={
            <span id="standards-heading">We test to the standards that matter</span>
          }
          className="section-heading--mb-sm"
        />
        <StandardsTable standards={STANDARDS_HOME} />
      </div>
    </section>
  );
}
