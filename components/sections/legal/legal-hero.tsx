import { Kicker } from "@/components/ui";
import { renderText } from "./legal-content";

export default function LegalHero({
  kicker,
  title,
  body,
  updated,
}: {
  kicker: string;
  title: string;
  body: string | string[];
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
          {(Array.isArray(body) ? body : [body]).map((paragraph) => (
            <p key={paragraph} className="page-hero__body page-hero__body--narrow legal-hero__body">
              {renderText(paragraph)}
            </p>
          ))}
          <p className="legal-hero__updated">Last updated: {updated}</p>
        </div>
      </div>
    </section>
  );
}
