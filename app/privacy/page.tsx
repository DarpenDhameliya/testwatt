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
    heading: "About this policy",
    blocks: [
      {
        type: "paragraph",
        text: "This policy sets out how TestWatt collects, uses, discloses and protects personal information. It applies to our website at **www.Testwatt.com** and to our interactions with customers, suppliers, contractors, business partners and job applicants.",
      },
      {
        type: "paragraph",
        text: "We do load bank testing, load bank repair, servicing, spares and upgrades. The majority of our customers are businesses and as such the majority of the information we come across is business contact details for the people working at that business. Technical information relating to your equipment or facility which doesn't identify an individual is not covered by this policy. Our Terms and Conditions and any agreement we have with you will cover the confidentiality of that information.",
      },
    ],
  },
  {
    heading: "What we collect",
    blocks: [
      {
        type: "paragraph",
        text: "We only collect the information necessary to carry out the work you have asked us to do and to run our business.",
      },
      { type: "subheading", text: "Information you give us" },
      {
        type: "paragraph",
        text: "This is generally via email, phone call, the website enquiry form, quotations, orders and service requests.",
      },
      { type: "paragraph", text: "It can include:" },
      {
        type: "list",
        items: [
          "Your name, Company, Job title, Email address, Phone number and Mailing/Billing/Shipping addresses.",
          "What you ask us for and details of your equipment (make, model, serial number, product documentation & files, product pictures, ratings, service history and faults).",
          "Order, invoice and payment records (we don't take any payments via the website and if you pay by card then the card details are handled by our payment processor).",
          "For on-site work: the site address, access and safety requirements, site contacts, test witnesses, signatures on service tickets, test reports, and photos of equipment.",
          "Network details or access credentials (if we're to provide remote support for connected equipment).",
          "Warranty, Repair and Return details (Proof of purchase, photos of the problem etc.)",
          "For suppliers and contractors: contract, Invoice, Insurance, and Tax information (e.g., a Form W-9).",
          "For job applicants: Your Resume, Work History, Certifications and References.",
        ],
      },
      { type: "subheading", text: "Information from other sources" },
      {
        type: "paragraph",
        text: "A colleague may supply you with their details as a site/billing contact. The manufacturer, distributor or partner may refer you to us. The carrier and the payment processor will confirm the delivery and payment respectively. We may also pick up the business contact details from a company's website or from a professional directory.",
      },
      { type: "subheading", text: "Information collected automatically" },
      {
        type: "paragraph",
        text: "The site doesn't use cookies, analytics or advertising trackers of any kind. Our hosting provider will maintain standard server logs which will record your IP address, browser and device type, the pages you viewed, the page you came from and the time of your visit. **Section 5** covers this in more detail.",
      },
      {
        type: "paragraph",
        text: "Please don't send us any sensitive information such as your SSN or health information unless we specifically ask for it for a legal or tax purpose.",
      },
    ],
  },
  {
    heading: "How we use it",
    blocks: [
      { type: "paragraph", text: "We use personal information to:" },
      {
        type: "list",
        items: [
          "Answer enquiries and prepare quotations.",
          "Schedule and perform testing, field service, repairs, upgrades and training. Prepare test reports and service records.",
          "Process orders, ship the parts and return the repaired equipment.",
          "Provide technical support and handle warranty, repair and return claims.",
          "Invoice, collect the payment and maintain the accounting records.",
          "Manage relationships with customers, suppliers, and partners, and consider job applicants.",
          "Keep the website, our systems and work sites safe and secure and prevent fraud.",
          "Improve our services and the website.",
          "Comply with the law and establish or defend claims.",
          "Send out occasional marketing emails (you can of course stop at any time, **see Section 8**).",
        ],
      },
      {
        type: "paragraph",
        text: "We can also use Test and Service data in de-identified, combined form. For example, tracking common component failure.",
      },
      {
        type: "paragraph",
        text: "If you're in the European Economic Area or the UK our legal basis is the performance of a contract with you or your organization, our legitimate interest in running our business and staying in touch with business contacts, compliance with our legal obligations and your consent where required by law.",
      },
    ],
  },
  {
    heading: "Who we share it with",
    blocks: [
      {
        type: "paragraph",
        text: "We don't sell personal information or share it for targeted advertising. We share it only when necessary, with:",
      },
      {
        type: "list",
        items: [
          "Service providers that host our website and email, store our files, run our accounting software and support our IT.",
          "Shipping carriers and payment processors.",
          "Equipment manufacturers and parts suppliers, when we order parts or process a warranty claim.",
          "Subcontractors and Partners who help us do the job.",
          "Our customer and anyone that the customer asks us to send the test reports to (i.e. the facility owner, consulting engineer, insurer or inspector).",
          "Our Lawyers, Accountants and Insurers.",
          "Courts, Regulators or Law Enforcement (when the law requires it or to protect people's rights and safety).",
          "A Buyer or Successor if our business is sold, merged or reorganized.",
          "Anyone else, with your consent.",
        ],
      },
      {
        type: "paragraph",
        text: "We expect everybody we share information with to protect it and to use it only for the purpose we've given it to them.",
      },
    ],
  },
  {
    heading: "Our website and cookies",
    blocks: [
      {
        type: "paragraph",
        text: "The site is purely an information site. You don't need to sign up and there's no facility for online payment.",
      },
      {
        type: "paragraph",
        text: "The inquiry form on the Contact page does nothing at all. It simply opens your email client with an email addressed to **Sales@TestWatt.com** or **Support@TestWatt.com**. Nothing gets sent to us until you actually send that email.",
      },
      {
        type: "paragraph",
        text: "The site doesn't set any cookies and doesn't use any analytics, advertising or social media tracking. It does however load fonts from Google Fonts so when a page loads your IP address and browser details will be sent to Google. The [Google Privacy Policy](https://policies.google.com/privacy) governs how Google uses that data.",
      },
      {
        type: "paragraph",
        text: "As we don't track visitors or sell any data then DNT and GPC signals have no effect on the operation of the Website. If we do add cookies or analytics we will update this policy and will seek your consent where required by law.",
      },
      {
        type: "paragraph",
        text: "The site links to other sites (e.g. standards organizations and manufacturers). The privacy practices of those sites are their own.",
      },
    ],
  },
  {
    heading: "How we protect it",
    blocks: [
      {
        type: "paragraph",
        text: "We use appropriate administrative, technical and physical measures to protect personal information. Access is restricted to those who need it for their work, our email and file accounts are protected with access controls, the website is served over HTTPS and paper records are kept secure.",
      },
      {
        type: "paragraph",
        text: "No system is 100% secure and we can't guarantee the security of information you send us via email or over the internet. Don't email us passwords, network credentials or tax ID numbers. Ask us for a safer way to send those. If there is a security breach which affects your information we will notify you in accordance with the law.",
      },
    ],
  },
  {
    heading: "How long do we keep it",
    blocks: [
      {
        type: "paragraph",
        text: "We will only hold your personal information for as long as is necessary for the purposes set out in this policy or as required by law.",
      },
      { type: "paragraph", text: "As a general guide:" },
      {
        type: "table",
        head: ["Record", "How long we keep it"],
        rows: [
          ["Inquiries that don't lead to work", "Up to 2 years"],
          ["Quotations, Orders, Invoices and Payment records", "5 years"],
          [
            "Test reports, Service records and Warranty claims",
            "As long as we service the customer or equipment, plus 5 years",
          ],
          ["Supplier and Contractor records", "5 years after the relationship ends"],
          ["Job applications", "1 year after the hiring decision"],
        ],
      },
      {
        type: "paragraph",
        text: "We may retain the information for longer if it is required for a legal claim or investigation. When it is no longer required we will delete it or remove anything which identifies you.",
      },
    ],
  },
  {
    heading: "Marketing emails",
    blocks: [
      {
        type: "paragraph",
        text: "We may send business contacts from time-to-time emails about our services. To opt out simply use the unsubscribe link in the email or write to **Sales@TestWatt.com** with \"**Unsubscribe**\" in the subject line. We'll stop within 10 business days. You will still receive messages relating to your orders, scheduled work, reports and invoices.",
      },
    ],
  },
  {
    heading: "Your privacy rights",
    blocks: [
      {
        type: "paragraph",
        text: "Anywhere you are you can ask us to provide you with a copy of your personal data, to correct it, to delete it or to stop us sending you marketing. Depending on your location you may also have the right to have your data provided to you in a portable format, the right to object to or restrict certain uses and the right to appeal if we refuse your request.",
      },
      {
        type: "paragraph",
        text: "To make a request you email **Support@TestWatt.com** with 'Privacy request' in the subject line. We'll verify your identity first (typically by checking your details against our records or by replying to the email address we have on file). Someone else can make the request on your behalf with your signed consent. We aim to get back to you within 45 days.",
      },
      {
        type: "paragraph",
        text: "Some requests are subject to limits. We're required to retain tax records and we can't delete records of work we've actually done for a customer. If we're unable to do what you're asking we'll let you know why. If your state allows you to appeal we can of course reply to our decision with \"**Appeal**\" in the subject line. We won't treat you any differently for exercising any of these rights.",
      },
    ],
  },
  {
    heading: "State and international privacy laws",
    blocks: [
      {
        type: "paragraph",
        text: "California and a number of other states (Colorado, Connecticut, New Jersey, Texas and Virginia) have consumer privacy laws. Those laws only apply to businesses above certain size thresholds and many of them expressly exclude people acting in a business capacity. We will of course respect the rights in **Section 9** whether or not a particular law applies to us.",
      },
      { type: "subheading", text: "California residents" },
      {
        type: "paragraph",
        text: "Over the last 12 months, we have collected identifiers (name, email address, IP address, etc.), customer and commercial records (orders, invoices, signatures, etc.), website log data, photos taken during the course of the work, and professional information (job title, etc.). We collected this information from the sources and for the purposes set out in sections 2 and 3, and we have disclosed it only to the recipients set out in **Section 4**. We have not sold any personal information, and we have not shared it with any third party for targeted advertising (including that of any person **under 16**). We use sensitive information such as a supplier's tax ID solely for the purpose for which it was provided. We do not share personal information with any third party for their own direct marketing.",
      },
      { type: "subheading", text: "Outside the United States" },
      {
        type: "paragraph",
        text: "We're based in the US and we store our information there. Any information you send us from another country will be transferred to the US where privacy laws may be different to those in your country. Individuals in the EEA, the UK or Switzerland may have the right to object to our processing on the grounds of our legitimate interests and may raise a complaint with their local data protection authority. In Canada you can contact the Office of the Privacy Commissioner of Canada.",
      },
    ],
  },
  {
    heading: "Children",
    blocks: [
      {
        type: "paragraph",
        text: "Our website and services are for businesses and adults. We don't knowingly collect information from anyone **under 16**. If you suspect a child has sent us information please get in touch and we'll delete it.",
      },
    ],
  },
  {
    heading: "Changes to this policy",
    blocks: [
      {
        type: "paragraph",
        text: "We may amend this policy at any time should our practices or the law change. The amended version will be posted on this page and the 'Last updated' date will be changed accordingly. Where there is a significant change we will also provide notice on the Website or by email.",
      },
    ],
  },
  {
    heading: "Contact us",
    blocks: [
      {
        type: "paragraph",
        text: `For any questions regarding this policy or your information please write to **${SUPPORT_EMAIL}** with "**Privacy request**" in the subject line.`,
      },
    ],
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
        body=""
        updated="October 18, 2026"
        banner
      />
      <LegalContent sections={SECTIONS} />
    </div>
  );
}
