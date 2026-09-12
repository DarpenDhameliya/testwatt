import { CAPABILITIES } from "@/lib/content";

export default function CapabilityStrip() {
  return (
    <section className="capability-strip" aria-label="Service capabilities">
      <div className="capability-strip__inner">
        {CAPABILITIES.map((capability, index) => (
          <div
            key={capability}
            className={`capability-strip__item${
              index === 0 ? " capability-strip__item--first" : ""
            }`}
          >
            <span className="capability-strip__dot" aria-hidden="true" />
            <span className="capability-strip__label">{capability}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
