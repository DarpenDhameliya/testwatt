import type { Metadata } from "next";
import LegalHero from "@/components/sections/legal/legal-hero";
import LegalContent, { LegalSection } from "@/components/sections/legal/legal-content";
import { PHONE_NUMBER, SITE_URL, SUPPORT_EMAIL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Warranty | TestWatt",
  description:
    "The warranty that covers TestWatt's repairs, servicing, parts, upgrades and calibration work on load banks and test equipment.",
  alternates: { canonical: "/warranty" },
};

const PAGE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Warranty",
  url: `${SITE_URL}/warranty`,
};

const SECTIONS: LegalSection[] = [
  {
    heading: "Scope of Warranty",
    paragraphs: [
      "This warranty applies to repairs, servicing, upgrades and calibration work carried out by TestWatt on load banks and related test equipment. It is in addition to, and does not replace, any statutory rights you may have.",
    ],
  },
  {
    heading: "Workmanship Warranty",
    paragraphs: [
      "Labor performed during a repair, servicing or upgrade visit is warranted against defects in workmanship for 12 months from the date of completion. If the same fault recurs within this period due to our workmanship, we will correct it at no additional labor charge.",
    ],
  },
  {
    heading: "Parts Warranty",
    paragraphs: [
      "Replacement parts we supply are warranted against manufacturing defects for 12 months from installation, or for the original manufacturer's warranty period where longer. Parts you supply to us are not covered by this warranty.",
    ],
  },
  {
    heading: "Calibration & Testing Accuracy",
    paragraphs: [
      "Calibration work is warranted to meet the stated tolerance at the time of calibration. If our records or a comparison against a calibrated reference instrument show the calibration was out of tolerance at handover, we will recalibrate at no charge.",
    ],
  },
  {
    heading: "Exclusions",
    paragraphs: ["This warranty does not cover:"],
    list: [
      "Damage from misuse, unauthorized modification, or operation outside rated limits",
      "Normal wear items such as resistor elements, fuses and contactor tips",
      "Faults unrelated to the specific work we performed",
      "Equipment serviced or modified by a third party after our visit",
    ],
  },
  {
    heading: "Making a Warranty Claim",
    paragraphs: [
      `To make a claim, contact ${SUPPORT_EMAIL} with your service report or invoice number and a description of the issue. We will assess the claim and, where it is covered by this warranty, arrange a corrective visit or repair at no additional charge.`,
    ],
  },
  {
    heading: "Limitation of Remedies",
    paragraphs: [
      "Our sole obligation under this warranty is to repair or replace the defective work or part. We are not liable for costs arising from downtime, lost production or consequential loss, except where such liability cannot be excluded by law.",
    ],
  },
  {
    heading: "Manufacturer Warranties",
    paragraphs: [
      "Where a load bank or component remains under an original manufacturer's warranty, we will pass through that warranty and assist with the claim where our service is the qualifying work, subject to the manufacturer's own terms.",
    ],
  },
  {
    heading: "Contact Us",
    paragraphs: [
      `For warranty questions or to start a claim, email ${SUPPORT_EMAIL} or call ${PHONE_NUMBER}.`,
    ],
  },
];

export default function WarrantyPage() {
  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(PAGE_SCHEMA) }}
      />

      <LegalHero
        kicker="Legal"
        title="Warranty"
        body="What's covered on our repairs, servicing, parts, upgrades and calibration work."
        updated="October 1, 2026"
      />
      <LegalContent sections={SECTIONS} />
    </div>
  );
}
