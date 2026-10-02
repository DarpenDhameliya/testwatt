export type LegalSection = {
  heading: string;
  paragraphs?: string[];
  list?: string[];
};

export default function LegalContent({ sections }: { sections: LegalSection[] }) {
  return (
    <section className="section section--white">
      <div className="container">
        <div className="legal-content">
          {sections.map((section, index) => (
            <article key={section.heading} className="legal-section">
              <h2 className="legal-section__heading">
                <span className="legal-section__num">{String(index + 1).padStart(2, "0")}</span>
                {section.heading}
              </h2>
              {section.paragraphs?.map((paragraph) => (
                <p key={paragraph} className="legal-section__body">
                  {paragraph}
                </p>
              ))}
              {section.list && (
                <ul className="legal-section__list">
                  {section.list.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
