export default function Hero() {
  return (
    <section className="lbt-hero lbt-hero--full" aria-labelledby="lbu-heading">
      <div className="container lbt-hero__container">
        <div className="lbt-hero__content">
          <p className="hero__eyebrow">Load bank upgrades</p>

          <h1 id="lbu-heading" className="lbt-hero__title">
            <span className="lbt-hero__title-line lbt-hero__title-line--1">
              Get more out of The Load Bank you already have.
            </span>
          </h1>
        </div>
      </div>

      <div className="lbt-hero__bottom-border" aria-hidden="true" />
    </section>
  );
}
