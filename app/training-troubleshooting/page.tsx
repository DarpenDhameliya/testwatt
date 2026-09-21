import type { Metadata } from "next";
import Hero from "@/components/sections/training-troubleshooting/hero";
import Courses from "@/components/sections/training-troubleshooting/courses";
import Troubleshooting from "@/components/sections/training-troubleshooting/troubleshooting";
import Methodology from "@/components/sections/training-troubleshooting/methodology";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Training & Troubleshooting | Load Bank Certification & Diagnostics | TestWatt",
  description:
    "Accredited operator training courses and on-site electrical root-cause diagnosis for load banks, generators, and UPS systems. Audit-aligned with NFPA 110.",
  keywords:
    "load bank training, load bank troubleshooting, NFPA 110 training, generator diagnostic services, AVR hunting, load bank operator certification",
  alternates: { canonical: "/training-troubleshooting" },
};

const PAGE_SCHEMA = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      name: "Training & Troubleshooting",
      provider: { "@id": `${SITE_URL}#organization` },
      serviceType: [
        "Load Bank Operator Training",
        "NFPA 110 Compliance Courses",
        "Root-Cause Electrical Diagnostics",
        "AVR & Governor Tuning",
        "Power Quality & Harmonic Analysis",
      ],
      areaServed: "Worldwide",
      description:
        "Structured training programmes for facility maintenance teams and expert on-site troubleshooting for generator, UPS, and load bank electrical anomalies.",
    },
  ],
};

export default function TrainingTroubleshootingPage() {
  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(PAGE_SCHEMA) }}
      />

      <Hero />
      <Courses />
      {/* <Troubleshooting /> */}
      {/* <Methodology /> */}
    </div>
  );
}
