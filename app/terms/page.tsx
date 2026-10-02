import type { Metadata } from "next";
import LegalHero from "@/components/sections/legal/legal-hero";
import LegalContent, { LegalSection } from "@/components/sections/legal/legal-content";
import { SALES_EMAIL, SITE_URL, SUPPORT_EMAIL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms & Conditions | TestWatt",
  description:
    "The terms and conditions that apply when you book load bank testing, repairs, servicing, upgrades or training with TestWatt.",
  alternates: { canonical: "/terms" },
};

const PAGE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Terms & Conditions",
  url: `${SITE_URL}/terms`,
};

const SECTIONS: LegalSection[] = [
  {
    heading: "Agreement to Terms",
    paragraphs: [
      "By booking a load bank test, repair, servicing visit, upgrade or training session with TestWatt, you agree to these Terms & Conditions. If you do not agree with any part of these terms, please do not use our services.",
    ],
  },
  {
    heading: "Services Provided",
    paragraphs: [
      "TestWatt provides on-site and in-shop load bank testing, repairs and servicing, load bank upgrades, and operator training for generators, UPS systems, switchgear and related critical power equipment. The exact scope of each engagement is set out in the proposal or quote we send you before work begins.",
    ],
  },
  {
    heading: "Scheduling & Site Access",
    paragraphs: [
      "You are responsible for providing safe, timely access to the equipment and site on the agreed date. Delays caused by restricted access, missing permits, or unsafe site conditions may result in rescheduling fees.",
    ],
  },
  {
    heading: "Client Responsibilities",
    paragraphs: ["Before and during a visit, you agree to:"],
    list: [
      "Disclose known faults, prior incidents or non-standard modifications to the equipment before work begins",
      "Make a qualified site contact available during the visit",
      "Ensure the equipment is isolated and ready for work where required",
      "Carry adequate insurance for the equipment and premises",
    ],
  },
  {
    heading: "Fees & Payment",
    paragraphs: [
      "Fees are set out in your quote or proposal and are due according to the payment terms stated on the invoice. Late payments may accrue interest at the maximum rate permitted by law and may result in a hold on future bookings.",
    ],
  },
  {
    heading: "Cancellations & Rescheduling",
    paragraphs: [
      "We ask for at least 48 hours' notice to cancel or reschedule a booked visit. Cancellations made with less notice may be subject to a call-out or restocking charge to cover committed labor, travel and equipment.",
    ],
  },
  {
    heading: "Limitation of Liability",
    paragraphs: [
      "TestWatt is not liable for indirect, incidental or consequential damages arising from our services, including lost production or lost revenue, except where such liability cannot be excluded by law. Our total liability for any claim is limited to the fees paid for the specific service giving rise to the claim.",
    ],
  },
  {
    heading: "Reports & Intellectual Property",
    paragraphs: [
      "Test reports, calibration certificates and other deliverables we provide remain our intellectual property until the invoice for that engagement is paid in full. Once paid, you receive an unrestricted right to use the deliverable for your own records and compliance purposes.",
    ],
  },
  {
    heading: "Confidentiality",
    paragraphs: [
      "Information you share with us about your equipment, facility or operations is kept confidential and used only to deliver the service you have requested, unless disclosure is required by law or a safety authority.",
    ],
  },
  {
    heading: "Governing Law",
    paragraphs: [
      "These terms are governed by the laws of the state in which the relevant TestWatt office is located, without regard to its conflict of law provisions.",
    ],
  },
  {
    heading: "Changes to These Terms",
    paragraphs: [
      "We may update these terms from time to time. The version posted on this page at the time you book a service is the version that applies to that engagement.",
    ],
  },
  {
    heading: "Contact Us",
    paragraphs: [
      `Questions about these terms can be sent to ${SALES_EMAIL} or ${SUPPORT_EMAIL}.`,
    ],
  },
];

export default function TermsPage() {
  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(PAGE_SCHEMA) }}
      />

      <LegalHero
        kicker="Legal"
        title="Terms & Conditions"
        body="The terms that apply when you book load bank testing, repairs, servicing, upgrades or training with us."
        updated="October 1, 2026"
      />
      <LegalContent sections={SECTIONS} />
    </div>
  );
}
