import { Kicker, SectionHeading } from "@/components/ui";
import { LOAD_BANK_STANDARDS, LOAD_BANK_TEST_PROFILES } from "@/lib/content";

export default function Standards() {
  return (
    <section className="section section--grey" aria-labelledby="standards-heading">
      <div className="container">
        <SectionHeading
          // kicker="Standards & Compliance"
          heading={<span id="standards-heading">Manual operation for meeting testing standards</span>}
          body="For compliance testing, a TestWatt technician runs the load bank by hand. Each load step is switched in deliberately, held for the required time and logged, so the record shows exactly what the generator carried and for how long. Manual control also lets us stop or back off load the moment a reading goes out of range."
          className="section-heading--mb"
        />

        <div className="compliance-grid">
          {LOAD_BANK_STANDARDS.map((row) => (
            <article key={`${row.code}-${row.citation ?? row.appliesTo}`} className="compliance-card">
              <div className="compliance-card__header">
                <span className="compliance-card__code">
                  <span className="compliance-card__code-main">{row.code}</span>
                  {row.citation && (
                    <span className="compliance-card__code-sub">{row.citation}</span>
                  )}
                </span>
                {/* <span className="compliance-card__status-pill">
                  <span className="compliance-card__status-dot" aria-hidden="true" />
                  Verified Spec
                </span> */}
              </div>
              <div className="compliance-card__row">
                <span className="compliance-card__label">
                  <svg className="compliance-card__label-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                  Who It Covers
                </span>
                <p className="compliance-card__text">{row.appliesTo}</p>
              </div>
              <div className="compliance-card__row">
                <span className="compliance-card__label">
                  <svg className="compliance-card__label-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M9 11l3 3L22 4" />
                    <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                  </svg>
                  What It Requires
                </span>
                <p className="compliance-card__text">{row.requirement}</p>
              </div>
              <div className="compliance-card__row compliance-card__row--meet">
                <span className="compliance-card__label">
                  <svg className="compliance-card__label-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                  How We Meet It
                </span>
                <p className="compliance-card__text">{row.howWeMeet}</p>
              </div>
            </article>
          ))}
        </div>

        {/* Typical Test Profiles */}
        <div className="advantages-section">
          <p className="content-body">
            The edition that applies to your site is the one your AHJ or accrediting body has
            adopted. CMS and The Joint Commission, for
            example, still enforce older editions of NFPA 110 and NFPA 99. Some engineers'
            specifications also call for a longer stepped test such as 25%, 50%, 75% and
            100%. Tell us which document you are tested against and we will run to it.
          </p>
          <p className="content-body content-body--label">
            Typical compliance test profiles
          </p>
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
