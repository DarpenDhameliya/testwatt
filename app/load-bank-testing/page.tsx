import type { Metadata } from "next";
import Hero from "@/components/sections/load-bank-testing/hero";
import WhatItInvolves from "@/components/sections/load-bank-testing/what-it-involves";
import LoadBankTypes from "@/components/sections/load-bank-testing/load-bank-types";
import StepLoadProfile from "@/components/sections/load-bank-testing/step-load-profile";
import Standards from "@/components/sections/load-bank-testing/standards";
// import LoadBankTestingCta from "@/components/sections/load-bank-testing/cta"; // CTA now lives in the footer
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Load Bank Testing | Generator, UPS & Switchgear Testing | TestWatt",
  description:
    "Independent on-site load bank testing for generators, UPS systems and switchgear. We test at full nameplate rating using resistive, reactive or hybrid load and give you a certified report.",
  keywords:
    "load bank testing, generator load testing, UPS load test, switchgear testing, resistive load bank, reactive load bank, hybrid load bank",
  alternates: { canonical: "/load-bank-testing" },
};

const PAGE_SCHEMA = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      name: "Load Bank Testing",
      provider: { "@id": `${SITE_URL}#organization` },
      serviceType: [
        "Generator Load Bank Testing",
        "UPS Load Bank Testing",
        "Switchgear Load Bank Testing",
        "Reactive Load Bank Testing",
        "Hybrid Load Bank Testing",
      ],
      areaServed: "Worldwide",
      description:
        "On-site full-load testing of generators, UPS systems and switchgear at their nameplate rating, with every reading documented.",
    },
  ],
};

export default function LoadBankTestingPage() {
  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(PAGE_SCHEMA) }}
      />

      <Hero />
      <WhatItInvolves />
      <LoadBankTypes />
      <StepLoadProfile />
      <Standards />
      {/* <LoadBankTestingCta /> */}
    </div>
  );
}
