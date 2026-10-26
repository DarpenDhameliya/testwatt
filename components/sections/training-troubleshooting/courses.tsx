import Link from "next/link";
import { SectionHeading } from "@/components/ui";
import { renderText } from "@/components/sections/legal/legal-content";
import { TRAINING_COURSES } from "@/lib/content";
import { SALES_EMAIL, SUPPORT_EMAIL } from "@/lib/site";

export default function Courses() {
  return (
    <section id="training-courses" className="section section--white" aria-labelledby="courses-heading">
      <div className="container">
        <SectionHeading
          kicker="Training & Troubleshooting"
          heading={
            <span id="courses-heading">Training built around the equipment you run</span>
          }
          body={[
            "Test Watt trains the people who operate and maintain your load banks and we do the troubleshooting of units that aren't performing to specification. Wherever possible we train at your site on your own equipment, so your team get to learn the controls, the connections and the procedures that they'll be using during actual testing.",
            "We give each training around the equipment you have, your team's experience and the tests that your site has to carry out",
          ]}
          className="section-heading--mb"
        />

        <div className="courses-grid">
          {TRAINING_COURSES.map((course) => (
            <article
              key={course.title}
              className={`course-card${course.table ? " course-card--full" : ""}`}
            >
              <div className="course-card__header">
                <h3 className="course-card__title">{course.title}</h3>
                <p className="course-card__desc">{course.description}</p>
              </div>

              <div className="course-card__body">
                {course.modules && (
                  <>
                    <h4 className="course-card__subheading">What We Cover</h4>
                    <ul className="course-card__module-list">
                      {course.modules.map((m) => (
                        <li key={m} className="course-card__module-item">
                          <span className="course-card__bullet" aria-hidden="true">▸</span>
                          <span>{renderText(m)}</span>
                        </li>
                      ))}
                    </ul>
                  </>
                )}

                {course.table && (
                  <div className="why-card__table-wrap troubleshooting-table-wrap">
                    <table className="why-card__table troubleshooting-table">
                      <thead>
                        <tr>
                          {course.table.head.map((h) => (
                            <th key={h} scope="col">
                              {h}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {course.table.rows.map(([symptom, check]) => (
                          <tr key={symptom}>
                            <td>{symptom}</td>
                            <td>{check}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}

                {course.audience && (
                  <p className="course-card__audience">
                    <strong>Who It&apos;s For:</strong> {course.audience}
                  </p>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
