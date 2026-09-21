import Link from "next/link";
import { SectionHeading } from "@/components/ui";
import { TRAINING_COURSES } from "@/lib/content";

export default function Courses() {
  return (
    <section id="training-courses" className="section section--white" aria-labelledby="courses-heading">
      <div className="container">
        <SectionHeading
          kicker="Accredited Curriculum"
          heading={<span id="courses-heading">Professional training programmes &amp; certifications</span>}
          body="Structured, hands-on operator courses designed by veteran commissioning engineers. Delivered at your facility or in our dedicated load-testing workshop."
          className="section-heading--mb"
        />

        <div className="courses-grid">
          {TRAINING_COURSES.map((course) => (
            <article key={course.code} className="course-card">
              <div className="course-card__header">
                <div className="course-card__meta-row">
                  <span className="course-card__code">{course.code}</span>
                  <div className="course-card__tags">
                    <span className="course-card__tag">{course.duration}</span>
                    <span className="course-card__tag course-card__tag--alt">{course.format}</span>
                  </div>
                </div>

                <h3 className="course-card__title">{course.title}</h3>
                <p className="course-card__audience">
                  <strong>Target Audience:</strong> {course.audience}
                </p>
                <p className="course-card__desc">{course.description}</p>
              </div>

              <div className="course-card__body">
                <h4 className="course-card__subheading">Key Syllabus Modules</h4>
                <ul className="course-card__module-list">
                  {course.modules.map((m) => (
                    <li key={m} className="course-card__module-item">
                      <span className="course-card__bullet" aria-hidden="true">▸</span>
                      <span>{m}</span>
                    </li>
                  ))}
                </ul>

                <h4 className="course-card__subheading" style={{ marginTop: "20px" }}>
                  Certified Competency Outcomes
                </h4>
                <div className="course-card__outcomes">
                  {course.outcomes.map((o) => (
                    <div key={o} className="course-card__outcome-item">
                      <svg
                        className="course-card__check-icon"
                        viewBox="0 0 16 16"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <path d="M3.5 8.5l3 3 6-7" />
                      </svg>
                      <span>{o}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="course-card__footer">
                <Link href="/contact" className="btn btn-outline-light btn-sm btn-full">
                  Book Course for Your Team →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
