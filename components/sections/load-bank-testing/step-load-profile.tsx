import TechnicalChart from "@/components/technical-chart";
import { SectionHeading } from "@/components/ui";
// import { STEP_LOAD_PROFILE } from "@/lib/content";

export default function StepLoadProfile() {
  return (
    <section className="section section--navy" aria-labelledby="profile-heading">
      <div className="container">
        <SectionHeading
          kicker="Step-Load Profile"
          heading={
            <span id="profile-heading">Incremental loading to full nameplate rating</span>
          }
          body="We add load in 25% steps and hold each one for a minimum time before going higher. This lets the engine and electrical systems settle at every level on the way to full load. All readings are recorded from start to finish."
          light
          maxWidth={640}
          className="section-heading--mb"
        />
        {/* <TechnicalChart
          data={STEP_LOAD_PROFILE}
          label="Typical Step-Load Test Profile — % Nameplate Rating vs Elapsed Time"
          height={260}
        /> */}
      </div>
    </section>
  );
}
