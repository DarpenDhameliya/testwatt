import type { Metadata } from "next";
import Hero from "@/components/sections/repairs-servicing/hero";
import WhyServicing from "@/components/sections/repairs-servicing/why-servicing";
import Training from "@/components/sections/repairs-servicing/training";
import Modernisation from "@/components/sections/repairs-servicing/modernisation";
import SpareParts from "@/components/sections/repairs-servicing/spare-parts";
// import RepairsServicingCta from "@/components/sections/repairs-servicing/cta"; // CTA now lives in the footer
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Repairs & Servicing | Load Bank Maintenance & Modernisation | TestWatt",
  description:
    "Load bank repairs, servicing, preventive maintenance, modernisation, troubleshooting and OEM-grade spare parts for reliable critical power test equipment.",
  keywords:
    "load bank servicing, load bank repair, preventative maintenance, load bank modernisation, spare parts, testing equipment support",
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
        "Spare Parts Supply",
      ],
      areaServed: "Worldwide",
      description:
        "Maintenance and repair services for portable and fixed load banks to restore accuracy, safety and readiness for critical power testing.",
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
      <WhyServicing />
      <Training />
      <Modernisation />
      <SpareParts />
      {/* <RepairsServicingCta /> */}
    </div>
  );
}
