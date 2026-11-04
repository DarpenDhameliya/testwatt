export default function Hero() {
  return (
    <section className="lbt-hero lbt-hero--full" aria-labelledby="hero-heading">
      <div className="container lbt-hero__container">
        <div className="lbt-hero__content">
          <p className="hero__eyebrow">Load bank testing and service</p>

          <h1 id="hero-heading" className="lbt-hero__title">
            <span className="lbt-hero__title-line lbt-hero__title-line--1">
              Know your backup power will carry the load!
            </span>
          </h1>

          <p className="lbt-hero__body">
            TestWatt tests your standby generators and power systems under real electrical
            load and keeps your load bank equipment in good order.
          </p>
          <p className="lbt-hero__body">
            A genset can easily pass its weekly startup test and yet be absolutely useless
            when it comes to actually powering your building. That&apos;s where load bank
            testing comes in. We put a known load on the genset so you can see how it
            actually performs before an outage occurs. We do the tests to the standards that
            your inspectors and insurers require. We also repair, service and upgrade the
            load banks that you own.
          </p>
        </div>
      </div>

      <div className="lbt-hero__bottom-border" aria-hidden="true" />
    </section>
  );
}
