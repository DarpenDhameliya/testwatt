import Image from "next/image";
import HeroEyebrow from "@/components/hero-eyebrow";

export default function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-heading">
      <div className="hero__bg" aria-hidden="true">
        <Image src="/images/hero-home.jpg" alt="" width={1920} height={1200} priority />
        <div className="hero__scrim" />
      </div>

      <div className="hero__inner container">
        <div className="hero__content">
          <HeroEyebrow icon="bolt">Critical Power Testing</HeroEyebrow>

          <h1 id="hero-heading" className="hero__title">
            <span className="lbt-hero__title-line lbt-hero__title-line--1">
              Full-load proof,
            </span>
            <br />
            <span className="hero__title-muted lbt-hero__title-line lbt-hero__title-line--2">
              <span className="hero__title-accent">100%</span> nameplate capacity,
            </span>
            <br />
            <span className="hero__title-muted lbt-hero__title-line lbt-hero__title-line--3">
              no guesswork.
            </span>
          </h1>

          <p className="hero__body">
            Running a generator with no load doesn&apos;t show whether it can carry your
            building. We bring mobile{" "}
            <strong>resistive, reactive and hybrid</strong> load banks to your site and take generators, UPS units and switchgear up to{" "}
            <strong>full nameplate capacity</strong>. You finish with reports that meet{" "}
            <strong>NFPA and ISO</strong> requirements.
          </p>
        </div>
      </div>
    </section>
  );
}
