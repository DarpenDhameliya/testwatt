import { Kicker, SectionHeading } from "@/components/ui";
import { LOAD_BANK_STANDARDS, LOAD_BANK_TEST_PROFILES } from "@/lib/content";

export default function Standards() {
  return (
    <section className="section section--grey" aria-labelledby="standards-heading">
      <div className="container">
        <SectionHeading
          kicker="Standards & Compliance"
          heading={<span id="standards-heading">The standards that apply to your site</span>}
          body="The edition that applies is the one your AHJ or accrediting body has adopted. CMS and The Joint Commission, for example, still enforce older editions of NFPA 110 and NFPA 99. Tell us which document you're inspected against and we will run to it."
          className="section-heading--mb"
        />

        <div className="compliance-grid">
          {LOAD_BANK_STANDARDS.map((row) => (
            <article key={row.code} className="compliance-card">
              <span className="compliance-card__code">{row.code}</span>
              <div className="compliance-card__row">
                <span className="compliance-card__label">Who It Covers</span>
                <p className="compliance-card__text">{row.appliesTo}</p>
              </div>
              <div className="compliance-card__row">
                <span className="compliance-card__label">What It Requires</span>
                <p className="compliance-card__text">{row.requirement}</p>
              </div>
              <div className="compliance-card__row compliance-card__row--meet">
                <span className="compliance-card__label">How We Meet It</span>
                <p className="compliance-card__text">{row.howWeMeet}</p>
              </div>
            </article>
          ))}
        </div>

        {/* Typical Test Profiles */}
        <div className="advantages-section">
          <Kicker>Test Profiles</Kicker>
          <h2 className="advantages-section__title">Typical compliance test profiles</h2>
          <div className="standards-table-wrap">
            <table className="standards-table">
              <thead>
                <tr>
                  <th scope="col" className="standards-table__th">
                    Test
                  </th>
                  <th scope="col" className="standards-table__th">
                    Load (% of nameplate kW)
                  </th>
                  <th scope="col" className="standards-table__th standards-table__th--last">
                    Duration
                  </th>
                </tr>
              </thead>
              <tbody>
                {LOAD_BANK_TEST_PROFILES.map((row, index) => (
                  <tr
                    key={row.test}
                    className={
                      index % 2 === 0
                        ? "standards-table__row"
                        : "standards-table__row standards-table__row--alt"
                    }
                  >
                    <td className="standards-table__code">{row.test}</td>
                    <td className="standards-table__td">{row.load}</td>
                    <td className="standards-table__td standards-table__td--last">
                      {row.duration}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
