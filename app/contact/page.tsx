import type { Metadata } from "next";
import Hero from "@/components/sections/contact/hero";
import ContactSection from "@/components/sections/contact/contact-section";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact TestWatt | Request a Load Test, Service Quote or Support",
  description:
    "Get in touch with TestWatt for a load bank testing proposal, servicing, upgrades or help with critical power equipment.",
  keywords:
    "contact test watt, request load bank test, service quote, load bank support, critical power enquiry",
  alternates: { canonical: "/contact" },
};

const PAGE_SCHEMA = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ContactPage",
      name: "Contact TestWatt",
      url: `${SITE_URL}/contact`,
      description:
        "Ask TestWatt for testing, servicing, maintenance or engineering help.",
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
