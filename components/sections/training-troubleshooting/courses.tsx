import Link from "next/link";
import { renderText } from "@/components/sections/legal/legal-content";
import { TRAINING_COURSES } from "@/lib/content";
import { SALES_EMAIL, SUPPORT_EMAIL } from "@/lib/site";

export default function Courses() {
  return (
    <section id="training-courses" className="section section--grey" aria-label="Training courses">
      <div className="container">
        <div className="courses-intro">
          <p>
            Test Watt trains the people who operate and maintain your load banks and we do the troubleshooting of units that aren&apos;t performing to specification. Wherever possible we train at your site on your own equipment, so your team get to learn the controls, the connections and the procedures that they&apos;ll be using during actual testing.
          </p>
          <p>
            We give each training around the equipment you have, your team&apos;s experience and the tests that your site has to carry out
          </p>
        </div>

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
