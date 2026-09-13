import type { Metadata } from "next";
import Hero from "@/components/sections/contact/hero";
import ContactSection from "@/components/sections/contact/contact-section";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact Test Watt | Request a Load Test, Service Quote or Support",
  description:
    "Contact Test Watt for load bank testing proposals, equipment servicing, spare parts enquiries and critical power support.",
  keywords:
    "contact test watt, request load bank test, service quote, load bank support, critical power enquiry",
  alternates: { canonical: "/contact" },
};

const PAGE_SCHEMA = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ContactPage",
      name: "Contact Test Watt",
      url: `${SITE_URL}/contact`,
      description:
        "Page for requesting testing, servicing, maintenance and engineering support from Test Watt.",
    },
  ],
};

export default function ContactPage() {
  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(PAGE_SCHEMA) }}
      />

      <Hero />
      <ContactSection />
    </div>
  );
}
