import type { Metadata } from "next";
import Hero from "@/components/sections/training-troubleshooting/hero";
import Courses from "@/components/sections/training-troubleshooting/courses";
import Troubleshooting from "@/components/sections/training-troubleshooting/troubleshooting";
import Methodology from "@/components/sections/training-troubleshooting/methodology";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Training & Troubleshooting | Load Bank Certification & Diagnostics | TestWatt",
  description:
    "Accredited operator training and on-site fault diagnosis for load banks, generators and UPS systems. Our courses follow NFPA 110 and are built to satisfy auditors.",
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
        "Training courses for facility maintenance teams, plus on-site troubleshooting of electrical faults in generators, UPS systems and load banks.",
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
