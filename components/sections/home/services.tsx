import Link from "next/link";
import { SectionHeading } from "@/components/ui";
import { SERVICES } from "@/lib/content";

type ServicesProps = {
  /** Extra class on the cards grid, used to switch layout. */
  gridClassName?: string;
};

function ServicesSection({ gridClassName = "" }: ServicesProps) {
  return (
    <section className="section section--grey" aria-labelledby="services-heading">
      <div className="container">
        <SectionHeading
          heading={
            <span id="services-heading">Testing and support for your power systems</span>
          }
          body="Two service lines, one team. We test the equipment that keeps your facility running and look after the load banks used to test it."
          className="section-heading--mb"
        />
        <div className={`courses-grid ${gridClassName}`.trim()}>
          {SERVICES.map((service) => (
            <article key={service.number} className="course-card">
              <div className="course-card__header">
                <h3 className="course-card__title">{service.title}</h3>
              </div>
              <div className="course-card__body why-card__body">
                <p>{service.description}</p>
                <ul>
                  {service.highlights.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <div className="course-card__footer">
                <Link href={service.link} className="service-card__link">
                  <span>{service.linkLabel}</span>
                  <svg
                    className="service-card__link-arrow"
                    viewBox="0 0 16 16"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M3 8h10M9 4l4 4-4 4" />
                  </svg>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/** Original design: two boxes per row. */
export default function Services() {
  return <ServicesSection />;
}

/** New design: four boxes in one row above 1500px, otherwise two per row. */
export function ServicesWide() {
  return <ServicesSection gridClassName="courses-grid--services" />;
}
