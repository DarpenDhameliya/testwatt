import { Kicker } from "@/components/ui";

export default function LegalHero({
  kicker,
  title,
  body,
  updated,
}: {
  kicker: string;
  title: string;
  body: string;
  updated: string;
}) {
  return (
    <section className="page-hero page-hero--compact" aria-labelledby="legal-heading">
      <div className="container">
        <div className="page-hero__content">
          <Kicker>{kicker}</Kicker>
          <h1 id="legal-heading" className="page-hero__title">
            {title}
          </h1>
          <p className="page-hero__body page-hero__body--narrow">{body}</p>
          <p className="legal-hero__updated">Last updated: {updated}</p>
        </div>
      </div>
    </section>
  );
}
