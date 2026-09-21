import { SectionHeading } from "@/components/ui";
import { UPGRADE_COMPARISON } from "@/lib/content";

export default function Comparison() {
  return (
    <section className="section section--alt" aria-labelledby="comparison-heading">
      <div className="container">
        <SectionHeading
          kicker="Performance Comparison"
          heading={<span id="comparison-heading">Legacy operation vs modernised capability</span>}
          body="Evaluate the operational benefits of modernising your existing fleet versus continuing with outdated manual gear or full capital equipment replacement."
          className="section-heading--mb"
        />

        <div className="standards-table-wrap">
          <table className="standards-table">
            <thead>
              <tr>
                <th scope="col" className="standards-table__th" style={{ width: "24%" }}>
                  System Attribute
                </th>
                <th scope="col" className="standards-table__th" style={{ width: "38%" }}>
                  Legacy / Standard Unit
                </th>
                <th
                  scope="col"
                  className="standards-table__th standards-table__th--last"
                  style={{ width: "38%", color: "var(--color-navy)", background: "#f0fdf4" }}
                >
                  ✓ Upgraded by TestWatt
                </th>
              </tr>
            </thead>
            <tbody>
              {UPGRADE_COMPARISON.map((row, index) => (
                <tr
                  key={row.feature}
                  className={
                    index % 2 === 0
                      ? "standards-table__row"
                      : "standards-table__row standards-table__row--alt"
                  }
                >
                  <td className="standards-table__code" style={{ fontWeight: 600 }}>
                    {row.feature}
                  </td>
                  <td className="standards-table__td" style={{ color: "#64748b" }}>
                    {row.legacy}
                  </td>
                  <td
                    className="standards-table__td standards-table__td--last"
                    style={{ fontWeight: 500, color: "#0f172a" }}
                  >
                    {row.upgraded}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
