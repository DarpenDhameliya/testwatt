import { SectionHeading, ServiceCard } from "@/components/ui";
import { SERVICES } from "@/lib/content";

export default function Services() {
  return (
    <section className="section section--white" aria-labelledby="services-heading">
      <div className="container">
        <SectionHeading
          kicker="What We Do"
          heading={
            <span id="services-heading">Services for critical power infrastructure</span>
          }
          className="section-heading--mb"
        />
        <div className="services-grid">
          {SERVICES.map((service) => (
            <ServiceCard key={service.number} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}
