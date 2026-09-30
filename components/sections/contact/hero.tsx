import HeroEyebrow from "@/components/hero-eyebrow";

export default function Hero() {
  return (
    <section className="hero hero--compact hero--plain" aria-labelledby="contact-heading">
      <div className="hero__inner container">
        <div className="hero__content">
          <HeroEyebrow icon="mail">Contact Us</HeroEyebrow>

          <h1 id="contact-heading" className="hero__title contact-title-stack">
            <span className="contact-title-line contact-title-line--xl">
              Need a load bank
            </span>
            <span className="contact-title-line contact-title-line--sm hero__title-muted">
              repaired, serviced, upgraded or tested?
            </span>
            <span className="contact-title-line contact-title-line--md ">
              Or training for your team?{" "}  Let&apos;s talk.
              {/* <span className="hero__title-accent contact-title-inline-accent">
                Let&apos;s talk.
              </span> */}
            </span>
          </h1>

          <p className="hero__body">
            Every enquiry is read by an <strong>engineer</strong>. Tell us what
            equipment you have and what you need and we&apos;ll send you a{" "}
            <strong>clear, no obligation proposal</strong>.
          </p>
        </div>
      </div>
    </section>
  );
}
