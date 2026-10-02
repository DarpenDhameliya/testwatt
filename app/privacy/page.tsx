import type { Metadata } from "next";
import LegalHero from "@/components/sections/legal/legal-hero";
import LegalContent, { LegalSection } from "@/components/sections/legal/legal-content";
import { SITE_URL, SUPPORT_EMAIL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy | TestWatt",
  description:
    "How TestWatt collects, uses and protects your information when you use our website or our testing, servicing and training services.",
  alternates: { canonical: "/privacy" },
};

const PAGE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Privacy Policy",
  url: `${SITE_URL}/privacy`,
};

const SECTIONS: LegalSection[] = [
  {
    heading: "Introduction",
    paragraphs: [
      "This Privacy Policy explains how TestWatt collects, uses and protects information when you visit our website, request a quote, or use our testing, servicing, upgrade or training services.",
    ],
  },
  {
    heading: "Information We Collect",
    list: [
      "Contact details you provide through our enquiry form, such as name, company, email and phone number",
      "Equipment details you share with us, such as make, model, serial number and site location",
      "Usage data collected automatically when you browse our website, such as pages visited and browser type",
    ],
  },
  {
    heading: "How We Use Your Information",
    paragraphs: [
      "We use the information you provide to respond to enquiries, prepare quotes and proposals, schedule and carry out services, and send you reports, invoices and service reminders. We do not sell your information to third parties.",
    ],
  },
  {
    heading: "Sharing Your Information",
    paragraphs: [
      "We share information with subcontractors or manufacturers only where necessary to deliver a service, such as sourcing a replacement part, and with authorities where required by law. We do not share your information for third-party marketing.",
    ],
  },
  {
    heading: "Data Security",
    paragraphs: [
      "We use reasonable technical and organizational measures to protect the information we hold, including restricted access and secure storage. No method of transmission over the internet is completely secure, so we cannot guarantee absolute security.",
    ],
  },
  {
    heading: "Cookies & Website Analytics",
    paragraphs: [
      "Our website may use cookies or similar technologies to understand how visitors use the site and to improve its performance. You can disable cookies in your browser settings, though some site features may not work as intended.",
    ],
  },
  {
    heading: "Your Rights",
    paragraphs: [
      "Depending on where you are located, you may have the right to access, correct or request deletion of the personal information we hold about you. To exercise these rights, contact us using the details below.",
    ],
  },
  {
    heading: "Data Retention",
    paragraphs: [
      "We keep enquiry and project records for as long as needed to provide our services, meet legal and compliance obligations, and resolve any disputes, after which they are securely deleted or anonymized.",
    ],
  },
  {
    heading: "Children's Privacy",
    paragraphs: [
      "Our services are intended for businesses and professionals. We do not knowingly collect information from children, and our website is not directed at them.",
    ],
  },
  {
    heading: "Changes to This Policy",
    paragraphs: [
      "We may update this policy from time to time to reflect changes in our practices or legal requirements. The date at the top of this page shows when it was last revised.",
    ],
  },
  {
    heading: "Contact Us",
    paragraphs: [`Questions about this policy or your information can be sent to ${SUPPORT_EMAIL}.`],
  },
];

export default function PrivacyPage() {
  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(PAGE_SCHEMA) }}
      />

      <LegalHero
        kicker="Legal"
        title="Privacy Policy"
        body="How we collect, use and protect your information when you visit our site or use our services."
        updated="October 1, 2026"
      />
      <LegalContent sections={SECTIONS} />
    </div>
  );
}
