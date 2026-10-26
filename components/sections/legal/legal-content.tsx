import type { ReactNode } from "react";

// Inline markup: **bold** and [label](url).
export function renderText(text: string): ReactNode[] {
  return text.split(/(\*\*[^*]+\*\*|\[[^\]]+\]\([^)]+\))/g).map((part, i) => {
    const bold = part.match(/^\*\*([^*]+)\*\*$/);
    if (bold) return <strong key={i}>{bold[1]}</strong>;
    const link = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
    if (link) {
      return (
        <a key={i} href={link[2]} target="_blank" rel="noopener noreferrer">
          {link[1]}
        </a>
      );
    }
    return part;
  });
}

export type LegalBlock =
  | { type: "subheading"; text: string }
  | { type: "paragraph"; text: string }
  | { type: "list"; items: string[] }
  | { type: "table"; head: string[]; rows: string[][] };

export type LegalSection = {
  heading: string;
  paragraphs?: string[];
  list?: string[];
  blocks?: LegalBlock[];
};

function renderBlock(block: LegalBlock, index: number) {
  switch (block.type) {
    case "subheading":
      return (
        <h3 key={index} className="legal-section__subheading">
          {block.text}
        </h3>
      );
    case "paragraph":
      return (
        <p key={index} className="legal-section__body">
          {renderText(block.text)}
        </p>
      );
    case "list":
      return (
        <ul key={index} className="legal-section__list">
          {block.items.map((item) => (
            <li key={item}>{renderText(item)}</li>
          ))}
        </ul>
      );
    case "table":
      return (
        <div key={index} className="legal-table-wrap">
          <table className="legal-table">
            <thead>
              <tr>
                {block.head.map((cell) => (
                  <th key={cell} scope="col">
                    {cell}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {block.rows.map((row) => (
                <tr key={row.join("|")}>
                  {row.map((cell) => (
                    <td key={cell}>{renderText(cell)}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
  }
}

export default function LegalContent({ sections }: { sections: LegalSection[] }) {
  return (
    <section className="section section--grey">
      <div className="container">
        <div className="legal-content">
          {sections.map((section, index) => (
            <article key={section.heading} className="legal-section">
              <h2 className="legal-section__heading">
                <span className="legal-section__num">{String(index + 1).padStart(2, "0")}</span>
                {section.heading}
              </h2>
              {section.blocks?.map(renderBlock)}
              {section.paragraphs?.map((paragraph) => (
                <p key={paragraph} className="legal-section__body">
                  {renderText(paragraph)}
                </p>
              ))}
              {section.list && (
                <ul className="legal-section__list">
                  {section.list.map((item) => (
                    <li key={item}>{renderText(item)}</li>
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
