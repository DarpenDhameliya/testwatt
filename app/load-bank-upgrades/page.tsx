import type { Metadata } from "next";
import Hero from "@/components/sections/load-bank-upgrades/hero";
import Capabilities from "@/components/sections/load-bank-upgrades/capabilities";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Load Bank Upgrades | Controls, Modbus & Remote Capability Retrofits | TestWatt",
  description:
    "Upgrade the load bank you already own with automatic or manual control conversions, auto load leveling, Modbus communication, regenerative power handling and more.",
  keywords:
    "load bank upgrades, load bank PLC conversion, load bank Modbus, load bank auto load level, load bank Wi-Fi control, load bank networking",
  alternates: { canonical: "/load-bank-upgrades" },
};

const PAGE_SCHEMA = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      name: "Load Bank Upgrades",
      provider: { "@id": `${SITE_URL}#organization` },
      serviceType: [
        "Manual to Automatic Control Conversion",
        "Automatic to Manual Control Conversion",
        "Auto Load Level Capability",
        "Modbus Communication Capability",
        "Regenerative Power Capability",
        "Power Export Control Capability",
        "Wi-Fi Control Capability",
        "Customized Testing Capability",
        "Networking Capability",
      ],
      areaServed: "Worldwide",
      description:
        "Upgrades for existing load banks, including control conversions, auto load leveling, Modbus communication, regenerative power handling, export control, Wi-Fi control, customized testing and networking.",
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
      <Capabilities />
    </div>
  );
}
