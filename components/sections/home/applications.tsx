import { SectionHeading } from "@/components/ui";
import { APPLICATIONS, INDUSTRIES } from "@/lib/content";

export default function Applications() {
  return (
    <section className="section section--white" aria-labelledby="applications-heading">
      <div className="container">
        <SectionHeading
          heading={<span id="applications-heading">Where load testing matters</span>}
          body="Any site that relies on standby power needs to prove that power works under load. Those are the jobs we get called out for most."
          className="section-heading--mb"
        />
        <div className="why-card__body">
            <ul>
              {APPLICATIONS.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
        </div>
        <div className="why-card__table-wrap troubleshooting-table-wrap" style={{ marginTop: 28 }}>
          <table className="why-card__table troubleshooting-table">
            <thead>
              <tr>
                <th scope="col">Industry</th>
                <th scope="col">Why they test</th>
              </tr>
            </thead>
            <tbody>
              {INDUSTRIES.map((industry) => (
                <tr key={industry.name}>
                  <td>{industry.name}</td>
                  <td>{industry.why}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
