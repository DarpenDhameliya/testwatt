import { SectionHeading } from "@/components/ui";
// import { TROUBLESHOOTING_STEPS } from "@/lib/content";

export default function Training() {
  return (
    <section className="section section--white" aria-labelledby="training-heading">
      <div className="container">
        <SectionHeading
          kicker="Training & Troubleshooting"
          heading={
            <span id="training-heading">
              Structured fault investigation and skills transfer
            </span>
          }
          className="section-heading--mb"
        />

        {/* <div className="training-cards-grid">
          {TROUBLESHOOTING_STEPS.map((step) => (
            <article key={step.step} className="training-card">
              <span className="training-card__step">{step.step}</span>
              <h3 className="training-card__title">{step.title}</h3>
              <p className="training-card__desc">{step.desc}</p>
            </article>
          ))}
        </div> */}
      </div>
    </section>
  );
}
