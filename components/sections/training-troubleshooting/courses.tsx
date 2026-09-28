import Link from "next/link";
import { SectionHeading } from "@/components/ui";
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
          body="TestWatt trains the people who run and maintain your load banks, and we troubleshoot units that aren't performing as they should. Wherever we can, we train at your site on your own equipment. Your team learns the controls, connections and procedures they'll use on real tests, not a generic classroom version. We tailor each course to the equipment you own, your team's experience and the tests your facility has to run."
          className="section-heading--mb"
        />

        <div className="courses-grid">
          {TRAINING_COURSES.map((course) => (
            <article key={course.title} className="course-card">
              <div className="course-card__header">
                <h3 className="course-card__title">{course.title}</h3>
                <p className="course-card__desc">{course.description}</p>
              </div>

              <div className="course-card__body">
                <h4 className="course-card__subheading">What We Cover</h4>
                <ul className="course-card__module-list">
                  {course.modules.map((m) => (
                    <li key={m} className="course-card__module-item">
                      <span className="course-card__bullet" aria-hidden="true">▸</span>
                      <span>{m}</span>
                    </li>
                  ))}
                </ul>

                <p className="course-card__audience">
                  <strong>Who It&apos;s For:</strong> {course.audience}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
