import type { Metadata } from "next";
import Hero from "@/components/sections/load-bank-upgrades/hero";
import Solutions from "@/components/sections/load-bank-upgrades/solutions";
import Comparison from "@/components/sections/load-bank-upgrades/comparison";
import Process from "@/components/sections/load-bank-upgrades/process";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Load Bank Upgrades | Digital Controls & SCADA Telemetry Retrofits | TestWatt",
  description:
    "Upgrade the load banks you already own with PLC automation, SCADA and cloud telemetry, reactive capacity and multi-voltage conversions, for around 60% less than buying new.",
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
        "Upgrades for existing load banks that replace manual controls with digital automation, remote telemetry and multi-voltage capability.",
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
