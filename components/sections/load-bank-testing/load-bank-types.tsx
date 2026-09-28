import { SectionHeading } from "@/components/ui";
// import { LOAD_BANK_TYPES } from "@/lib/content";

const TYPE_METADATA = [
  {
    role: "Pure kW Thermal Loading",
    metric: "PF = 1.0 (Unity)",
    modifier: "resistive",
    footerTag: "⚡ NFPA 110 & ISO 8528 Acceptance Standard",
  },
  {
    role: "Inductive & Capacitive Loading",
    metric: "PF = 0.8 (Variable)",
    modifier: "reactive",
    footerTag: "🔄 Critical for AVR & UPS Stability Proofing",
  },
  {
    role: "Simultaneous kW + kVAR Simulation",
    metric: "Total kVA Simulation",
    modifier: "hybrid",
    footerTag: "🏢 Full-Scale Data Centre & Facility Verification",
  },
];

export default function LoadBankTypes() {
  return (
    <section className="section section--grey" aria-labelledby="types-heading">
      <div className="container">
        <SectionHeading
          kicker="Load Bank Technologies"
          heading={
            <span id="types-heading">The right technology for your application</span>
          }
          body="A load test only tells you something if the load bank suits your electrical setup. We have resistive, reactive and hybrid units, and we choose the one that fits your site."
          className="section-heading--mb"
        />

      </div>
    </section>
  );
}
