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
          <HeroEyebrow>Load bank testing and service</HeroEyebrow>

          <h1 id="hero-heading" className="hero__title">
            <span className="lbt-hero__title-line lbt-hero__title-line--1">
              Know your backup power
            </span>
            <br />
            <span className="hero__title-muted lbt-hero__title-line lbt-hero__title-line--2">
              will carry the load!
            </span>
          </h1>

          <p className="hero__body">
            TestWatt tests your standby generators and power systems under real electrical
            load and keeps your load bank equipment in good order.
          </p>
          <p className="hero__body">
            A genset can easily pass its weekly startup test and yet be absolutely useless
            when it comes to actually powering your building. That&apos;s where load bank
            testing comes in. We put a known load on the genset so you can see how it
            actually performs before an outage occurs. We do the tests to the standards that
            your inspectors and insurers require. We also repair, service and upgrade the
            load banks that you own.
          </p>
        </div>
      </div>
    </section>
  );
}
