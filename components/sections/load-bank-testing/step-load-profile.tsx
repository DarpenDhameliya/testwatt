import TechnicalChart from "@/components/technical-chart";
import { SectionHeading } from "@/components/ui";
import { STEP_LOAD_PROFILE } from "@/lib/content";

export default function StepLoadProfile() {
  return (
    <section className="section section--navy" aria-labelledby="profile-heading">
      <div className="container">
        <SectionHeading
          kicker="Step-Load Profile"
          heading={
            <span id="profile-heading">Incremental loading to full nameplate rating</span>
          }
          body="Load is applied in 25% incremental steps, each held for a minimum dwell period before progressing. This allows engine and electrical systems to stabilise at each level before full-load is achieved. All parameters are recorded continuously throughout."
          light
          maxWidth={640}
          className="section-heading--mb"
        />
        <TechnicalChart
          data={STEP_LOAD_PROFILE}
          label="Typical Step-Load Test Profile — % Nameplate Rating vs Elapsed Time"
          height={260}
        />
      </div>
    </section>
  );
}
