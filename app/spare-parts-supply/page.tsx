import type { Metadata } from "next";
import Hero from "@/components/sections/spare-parts-supply/hero";
import Catalog from "@/components/sections/spare-parts-supply/catalog";
import Provenance from "@/components/sections/spare-parts-supply/provenance";
import Process from "@/components/sections/spare-parts-supply/process";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Spare Parts Supply | Certified OEM Load Bank Components | TestWatt",
  description:
    "Certified replacement resistor grids, contactors, digital controls, blowers and sensors for load banks. OEM provenance, 24/48h express global dispatch.",
  keywords:
    "load bank spare parts, resistor banks, load bank contactors, load bank blowers, Cam-Lock cables, load bank heating elements",
  alternates: { canonical: "/spare-parts-supply" },
};

const PAGE_SCHEMA = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      name: "Spare Parts Supply",
      provider: { "@id": `${SITE_URL}#organization` },
      serviceType: [
        "Spare Parts Supply",
        "OEM Replacement Components",
        "Resistor Grids & Elements",
        "Load Bank Contactors",
        "Emergency Parts Logistics",
      ],
      areaServed: "Worldwide",
      description:
        "OEM-grade replacement parts for load banks, resistive elements, control systems and auxiliary components with full traceability and 24-48h dispatch.",
    },
  ],
};

export default function SparePartsSupplyPage() {
  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(PAGE_SCHEMA) }}
      />

      <Hero />
      <Catalog />
      {/* <Provenance /> */}
      {/* <Process /> */}
    </div>
  );
}
