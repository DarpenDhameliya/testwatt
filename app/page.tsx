import type { Metadata } from "next";
import CapabilityStrip from "@/components/sections/home/capability-strip";
// import HomeCta from "@/components/sections/home/cta"; // CTA now lives in the footer
import Hero from "@/components/sections/home/hero";
import Services from "@/components/sections/home/services";
import Standards from "@/components/sections/home/standards";
import TestingProcess from "@/components/sections/home/testing-process";
import WhyTestWatt from "@/components/sections/home/why-test-watt";
import { SITE_NAME, SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "TestWatt | Load Bank Testing & Critical Power Services",
  description:
    "TestWatt provides load bank testing for generators, UPS systems and switchgear, and checks that they perform at their full nameplate rating.",
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
        "Independent load bank testing for generators, UPS systems and switchgear.",
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
      {/* <CapabilityStrip /> */}
      {/* <Services /> */}
      <WhyTestWatt />
      {/* <TestingProcess /> */}
      <Standards />
      {/* <HomeCta /> */}
    </div>
  );
}
