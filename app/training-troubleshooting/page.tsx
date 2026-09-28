import type { Metadata } from "next";
import Hero from "@/components/sections/training-troubleshooting/hero";
import Courses from "@/components/sections/training-troubleshooting/courses";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Training & Troubleshooting | Load Bank Operator Training | TestWatt",
  description:
    "On-site operational, maintenance, troubleshooting and start-up training for load banks, taught on your own equipment and tailored to your team's experience.",
  keywords:
    "load bank training, load bank troubleshooting, NFPA 110 training, load bank maintenance training, on-site start-up training, load bank operator training",
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
        "Operational Training",
        "Maintenance Training",
        "Troubleshooting Training",
        "On-Site Start-Up Training",
      ],
      areaServed: "Worldwide",
      description:
        "On-site training for the people who run, maintain and troubleshoot load banks, plus commissioning training when a new or refurbished unit arrives.",
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
    </div>
  );
}
