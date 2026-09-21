import type { Metadata } from "next";
import Hero from "@/components/sections/load-bank-upgrades/hero";
import Solutions from "@/components/sections/load-bank-upgrades/solutions";
import Comparison from "@/components/sections/load-bank-upgrades/comparison";
import Process from "@/components/sections/load-bank-upgrades/process";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Load Bank Upgrades | Digital Controls & SCADA Telemetry Retrofits | TestWatt",
  description:
    "Digital PLC automation, SCADA cloud telemetry, reactive additions and multi-voltage retrofits. Modernise existing load bank fleets at 60% lower cost than new equipment.",
  keywords:
    "load bank upgrades, load bank modernisation, load bank PLC retrofit, load bank SCADA, load bank reactive addition, load bank automation",
  alternates: { canonical: "/load-bank-upgrades" },
};

const PAGE_SCHEMA = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      name: "Load Bank Upgrades & Modernisation",
      provider: { "@id": `${SITE_URL}#organization` },
      serviceType: [
        "Load Bank Modernisation",
        "Digital PLC Retrofits",
        "SCADA Telemetry Integration",
        "Reactive Power Factor Additions",
        "Cooling & Thermal Overhauls",
      ],
      areaServed: "Worldwide",
      description:
        "Comprehensive modernisation services for existing load banks, replacing manual controls with digital automation, remote telemetry, and multi-voltage capabilities.",
    },
  ],
};

export default function LoadBankUpgradesPage() {
  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(PAGE_SCHEMA) }}
      />

      <Hero />
      <Solutions />
      <Comparison />
      {/* <Process /> */}
    </div>
  );
}
