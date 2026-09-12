import type { Metadata } from "next";
import CapabilityStrip from "@/components/sections/home/capability-strip";
import HomeCta from "@/components/sections/home/cta";
import Hero from "@/components/sections/home/hero";
import Services from "@/components/sections/home/services";
import Standards from "@/components/sections/home/standards";
import TestingProcess from "@/components/sections/home/testing-process";
import WhyTestWatt from "@/components/sections/home/why-test-watt";
import { SITE_NAME, SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Test Watt | Load Bank Testing & Critical Power Services",
  description:
    "Test Watt delivers load bank testing, generator testing, UPS testing, and critical power services to verify performance at full nameplate rating.",
  alternates: { canonical: "/" },
};

const PAGE_SCHEMA = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      name: SITE_NAME,
      url: SITE_URL,
      description:
        "Independent load bank testing and critical power testing services for generators, UPS systems, and switchgear.",
      potentialAction: {
        "@type": "SearchAction",
        target: `${SITE_URL}/?q={search_term_string}`,
        "query-input": "required name=search_term_string",
      },
    },
    {
      "@type": "ProfessionalService",
      name: "Load Bank Testing & Critical Power Services",
      provider: { "@id": `${SITE_URL}#organization` },
      areaServed: "Worldwide",
      serviceType: [
        "Load Bank Testing",
        "Generator Testing",
        "UPS Testing",
        "Switchgear Testing",
        "Critical Power Services",
      ],
    },
  ],
};

export default function HomePage() {
  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(PAGE_SCHEMA) }}
      />

      <Hero />
      <CapabilityStrip />
      <Services />
      <WhyTestWatt />
      <TestingProcess />
      <Standards />
      <HomeCta />
    </div>
  );
}
