import HeroEyebrow from "@/components/hero-eyebrow";

export default function Hero() {
  return (
    <section className="hero hero--compact hero--plain" aria-labelledby="contact-heading">
      <div className="hero__inner container">
        <div className="hero__content">
          <HeroEyebrow icon="mail">Contact Us</HeroEyebrow>

          <h3 id="contact-heading" className="hero__title contact-title-stack">
            <span className="contact-title-line contact-title-line--xl contact-title-nowrap">
              Need a load bank repaired, serviced, upgraded or tested?
            </span>
            <span className="contact-title-line contact-title-line--md">
              Or training for your team? Let&apos;s talk.
            </span>
          </h3>

          <p className="hero__body">
            Every enquiry is read by an engineer. Tell us what
            equipment you have and what you need and we&apos;ll send you a{" "}
            clear, no obligation proposal
          </p>
        </div>
      </div>
    </section>
  );
}
