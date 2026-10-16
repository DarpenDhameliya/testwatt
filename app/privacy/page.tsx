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
        text: "This policy explains how TestWatt collects, uses, shares and protects personal information. It covers our website at **www.Testwatt.com** and our dealings with customers, suppliers, contractors, business partners and job applicants.",
      },
      {
        type: "paragraph",
        text: "We provide load bank testing and load bank repair, servicing, spare parts and upgrades. Most of our customers are businesses, so most of the information we handle is business contact information for the people who work there. Technical information about your equipment or facility that doesn't identify a person isn't covered by this policy. Our Terms and Conditions and any agreement we have with you cover its confidentiality.",
      },
    ],
  },
  {
    heading: "What we collect",
    blocks: [
      {
        type: "paragraph",
        text: "We collect only the information we need for the work you ask us to do and for running our business.",
      },
      { type: "subheading", text: "Information you give us" },
      {
        type: "paragraph",
        text: "This usually comes from emails, phone calls, the Website inquiry form, quotations, orders and service requests.",
      },
      { type: "paragraph", text: "It can include:" },
      {
        type: "list",
        items: [
          "Your name, Company, Job title, Email address, Phone number and Mailing, Billing and Shipping addresses.",
          "What you ask us for and details about your equipment such as Make, Model, Serial Number, Ratings, Service history and Faults.",
          "Order, Invoice and payment records (we don't take payments through the Website, and if you pay by card, our payment processor handles the card details).",
          "For on-site work, the site address, Access and Safety requirements, Site contacts, Test witnesses, Signatures on service tickets, Test reports and Photos of equipment.",
          "Network details or Access credentials, if you ask us to support connected equipment remotely.",
          "Warranty, Repair and Return details, such as Proof of purchase and Photos of the problem.",
          "For suppliers and Contractors, Contract, Invoice, Insurance and Tax information such as a Form W-9.",
          "For job applicants, your resume, Work history, Certifications and References.",
        ],
      },
      { type: "subheading", text: "Information from other sources" },
      {
        type: "paragraph",
        text: "A colleague may give us your details as a site or billing contact. Manufacturers, Distributors and Partners may refer you to us. Carriers and Payment processors confirm Deliveries and Payments. We may also find business contact details on company websites and in professional directories.",
      },
      { type: "subheading", text: "Information collected automatically" },
      {
        type: "paragraph",
        text: "The Website doesn't use Cookies, Analytics or Advertising trackers. Our hosting provider does keep standard server logs, which record your IP address, Browser and Device type, the pages you view, the page you came from and the Time of your visit. **Section 5** explains this further.",
      },
      {
        type: "paragraph",
        text: "Please don't send us sensitive Information, such as Social Security numbers or Health information, unless we ask for it for a specific Legal or Tax reason.",
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
          "Answer inquiries and Prepare quotations.",
          "Schedule and Perform Testing, Field service, Repairs, Upgrades and Training and Prepare test reports and Service records.",
          "Process orders, Ship parts and Return repaired equipment.",
          "Provide technical support and Handle warranty, Repair and Return claims.",
          "Invoice, Collect payment and keep Accounting records.",
          "Manage our relationships with customers, Suppliers and Partners and Consider job applicants.",
          "Keep the Website, our Systems and Work sites Safe and Secure and Prevent fraud.",
          "Improve our Services and the Website.",
          "Comply with the law and establish or defend legal claims.",
          "Send occasional marketing emails, which you can stop at any time (**see Section 8**).",
        ],
      },
      {
        type: "paragraph",
        text: "We may also use Test and Service data in De-identified, Combined form. For example to track Common components Failure.",
      },
      {
        type: "paragraph",
        text: "If you are in the European Economic Area or the United Kingdom, our legal bases are: Performing a Contract with you or your Organization. Our legitimate interest in running our business and staying in touch with business contacts, Complying with legal obligations and your Consent, where the law requires it.",
      },
    ],
  },
  {
    heading: "Who we share it with",
    blocks: [
      {
        type: "paragraph",
        text: "We don't sell personal information and we don't share it for targeted advertising. We share it only when we need to, with:",
      },
      {
        type: "list",
        items: [
          "Service providers that host our Website and Email, Store our files, Run our accounting software or Support our IT.",
          "Shipping carriers and Payment processors.",
          "Equipment manufacturers and parts suppliers, when we order Parts or Process a warranty claim.",
          "Subcontractors and Partners who help us carry out a job.",
          "Our Customer and anyone the customer asks us to send Test Reports to, such as the facility Owner, Consulting Engineer, Insurer or Inspector.",
          "Our Lawyers, Accountants and Insurers.",
          "Courts, Regulators or Law Enforcement, when the law requires it or to protect people's Rights and Safety.",
          "A Buyer or Successor if our Business is Sold, Merged or Reorganized.",
          "Anyone else, with your consent.",
        ],
      },
      {
        type: "paragraph",
        text: "We expect everyone we share information with to Protect it and Use it only for the Purpose we gave it to them.",
      },
    ],
  },
  {
    heading: "Our website and cookies",
    blocks: [
      {
        type: "paragraph",
        text: "The Website is a simple information site. You don't create an account on it and you can't pay online.",
      },
      {
        type: "paragraph",
        text: "The inquiry form on the Contact page doesn't send anything to our servers. It opens your own email program with a message addressed to **Sales@TestWatt.com** or **Support@TestWatt.com**. Nothing reaches us until you send that email.",
      },
      {
        type: "paragraph",
        text: "The Website doesn't set cookies or use Analytics, Advertising or Social media tracking. It does load fonts from Google Fonts, so your browser sends your IP address and browser details to Google when a page opens. The [Google Privacy Policy](https://policies.google.com/privacy) covers how Google uses that data.",
      },
      {
        type: "paragraph",
        text: "Because we don't track visitors or sell data, Do Not Track and Global Privacy Control signals don't change how the Website works. If we add cookies or analytics, we will update this policy first and ask for your consent where the law requires it.",
      },
      {
        type: "paragraph",
        text: "The Website links to other sites, such as standards Organizations and Manufacturers. Their privacy practices are their own.",
      },
    ],
  },
  {
    heading: "How we protect it",
    blocks: [
      {
        type: "paragraph",
        text: "We use reasonable Administrative, Technical and Physical safeguards to protect personal information. We limit access to people who need it for their Work, Protect our email and File accounts with access controls, run the Website over HTTPS and keep paper records secure.",
      },
      {
        type: "paragraph",
        text: "No system is completely secure, and we can't guarantee the security of information sent to us by email or over the internet. Please don't email passwords, Network credentials or Tax ID numbers. Ask us for a safer way to send them. If a security breach affects your information, we will notify you as the law requires.",
      },
    ],
  },
  {
    heading: "How long we keep it",
    blocks: [
      {
        type: "paragraph",
        text: "We keep personal information only as long as we need it for the reasons in this policy or as long as the law requires.",
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
        text: "We may keep information longer if we need it for a legal claim or investigation. When we no longer need it, we delete it or remove anything that identifies you.",
      },
    ],
  },
  {
    heading: "Marketing emails",
    blocks: [
      {
        type: "paragraph",
        text: "We may send business contacts occasional emails about our services. To stop them, use the unsubscribe link in the email or write to **Sales@TestWatt.com** with \"**Unsubscribe**\" in the subject line. We'll stop within 10 business days. You'll still receive messages about your Orders, Scheduled work, Reports and Invoices.",
      },
    ],
  },
  {
    heading: "Your privacy rights",
    blocks: [
      {
        type: "paragraph",
        text: "Wherever you live, you can ask us to give you a copy of your Personal Information, correct it, delete it or stop sending you marketing. Depending on where you live, you may also have the right to receive your data in a Portable format, to object to or limit certain uses and to appeal if we turn down your request.",
      },
      {
        type: "paragraph",
        text: "To make a request Email: **Support@TestWatt.com** with \"**Privacy request**\" in the subject line. We'll confirm your identity first, usually by checking your details against our records or replying to the email address we have on file. Someone else can make a request for you with your signed permission. We aim to reply within 45 days.",
      },
      {
        type: "paragraph",
        text: "Some requests have limits. For example: We must keep Tax Records and we can't erase records of work we actually performed for a customer. If we can't do what you ask, we'll explain why. If your state gives you the right to appeal, reply to our decision with \"**Appeal**\" in the subject line. We won't treat you differently for using any of these rights.",
      },
    ],
  },
  {
    heading: "State and international privacy laws",
    blocks: [
      {
        type: "paragraph",
        text: "California and several other states, including Colorado, Connecticut, New Jersey, Texas and Virginia, have Consumer Privacy Laws. These laws apply only to businesses above certain size thresholds and many of them exclude people acting in a business role. We honor the rights in **Section 9** whether or not a particular law applies to us.",
      },
      { type: "subheading", text: "California residents" },
      {
        type: "paragraph",
        text: "In the past 12 months we have collected identifiers (such as Name, Email address and IP address), Customer and Commercial records (such as Orders, Invoices and Signatures), website log data, Photos taken during service work and Professional information (such as Job Title). We collected this information from the sources and for the purposes in **Sections 2** and **3** and disclosed it only to the recipients in **Section 4**. We have not sold personal information or shared it for targeted advertising, including that of anyone **under 16**. We use sensitive information such as a supplier's tax ID, only for the purpose it was given. We don't share personal information with third parties for their own direct marketing.",
      },
      { type: "subheading", text: "Outside the United States" },
      {
        type: "paragraph",
        text: "We are based in the United States and store information here. Information you send us from another country is transferred to the United States, where privacy laws may differ from yours. People in the European Economic Area, the United Kingdom or Switzerland may also object to processing based on our legitimate interests and complain to their local data protection authority. In Canada, you can contact the Office of the Privacy Commissioner of Canada.",
      },
    ],
  },
  {
    heading: "Children",
    blocks: [
      {
        type: "paragraph",
        text: "Our Website and services are meant for Businesses and Adults. We don't knowingly collect information from anyone **under 16**. If you think a child has sent us Information, Contact Us and we'll delete it.",
      },
    ],
  },
  {
    heading: "Changes to this policy",
    blocks: [
      {
        type: "paragraph",
        text: "We may update this policy when our practices or the law change. We'll post the new version on this page and change the \"**Last updated**\" date. For significant changes, we'll also give notice on the Website or by Email.",
      },
    ],
  },
  {
    heading: "Contact us",
    blocks: [
      {
        type: "paragraph",
        text: `For Questions about this Policy or your Information, write to Email **${SUPPORT_EMAIL}** with "**Privacy request**" in the subject line.`,
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
        body="How we collect, use and protect your information when you visit our site or use our services."
        updated="October 13, 2026"
      />
      <LegalContent sections={SECTIONS} />
    </div>
  );
}
