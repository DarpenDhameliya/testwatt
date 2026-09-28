import type { Metadata } from "next";
import Hero from "@/components/sections/repairs-servicing/hero";
import Capabilities from "@/components/sections/repairs-servicing/capabilities";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Repairs & Servicing | Load Bank Maintenance & Modernisation | TestWatt",
  description:
    "Repairs, servicing, routine maintenance, upgrades and fault-finding for load banks, so your test equipment is accurate and ready when you need it.",
  keywords:
    "load bank servicing, load bank repair, preventative maintenance, load bank modernisation, testing equipment support",
  alternates: { canonical: "/repairs-servicing" },
};

const PAGE_SCHEMA = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      name: "Load Bank Repairs & Servicing",
      provider: { "@id": `${SITE_URL}#organization` },
      serviceType: [
        "Preventive Maintenance",
        "Emergency Repairs",
        "Load Bank Modernisation",
        "Technical Troubleshooting",
      ],
      areaServed: "Worldwide",
      description:
        "Maintenance and repair of portable and fixed load banks, so they read accurately, stay safe to use and are ready for testing.",
    },
  ],
};

export default function RepairsServicingPage() {
  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(PAGE_SCHEMA) }}
      />

      <Hero />
      <Capabilities />
    </div>
  );
}
