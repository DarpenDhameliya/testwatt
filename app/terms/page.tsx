import type { Metadata } from "next";
import LegalHero from "@/components/sections/legal/legal-hero";
import LegalContent, { LegalSection } from "@/components/sections/legal/legal-content";
import { SITE_URL } from "@/lib/site";

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
    heading: "About These Terms",
    paragraphs: [
      "These Terms and Conditions apply to your use of TestWatt website and to every Quote, Order, Product and Service, to doing business with TestWatt. You agree to them when you access the Website, when you accept a Quote, when you place an Order or when our engineer commence work on any site. If you are acting on behalf of a Company you confirm that you have the authority to bind it.",
      "We sell to Businesses, Institutions and Consumers. A signed Quote or Service Agreement may contain its own Terms which will take precedence over these Terms in the event of any conflict on a particular point. Terms printed on your Purchase Orders or Vendor forms will not apply unless such terms are accepted by us in writing.",
    ],
  },
  {
    heading: "Using Our Website",
    paragraphs: [
      "Our website describes TestWatt and how to get in contact with us. Nothing on it is an offer to sell and the Services, Test Procedures and Upgrade options described on the site are only applicable to your equipment once a Quote has confirmed them. You may view and print the pages for your own business use but you must not copy or republish the content.",
      "Don't send false information, spam or malicious code via the Enquiry Form. Don't attempt to break into or disrupt the site or scrape content and email addresses from it. We may block anyone who does.",
      "The enquiry form will open your own email programmed. Sending an enquiry does not book you a date or fix you a price. Please don't email us passwords, card numbers or bank details. We only use what you send us to answer your enquiry and to do the work. We may change or remove parts of the site at any time and we can't guarantee it will always be available.",
    ],
  },
  {
    heading: "What We Offer",
    blocks: [
      { type: "paragraph", text: "TestWatt provides:" },
      {
        type: "list",
        items: [
          "Load bank testing of generators and other power sources (including step load, block load, transient and extended run tests).",
          "Load Bank repairs, troubleshooting, upgrades and maintenance on site or in our shop.",
          "Spare parts for load banks.",
          "Load Bank Upgrades (including the custom engineering work).",
          "Operator Training.",
        ],
      },
      {
        type: "paragraph",
        text: "We do the work as described in your quote. Any work beyond that (including work which becomes necessary because of conditions we discover upon commencement) will be charged at our current rates and we will always check with you first if reasonably possible. We may of course use qualified subcontractors and remain responsible for their work. We may of course turn down any job.",
      },
      {
        type: "paragraph",
        text: "Our website and reports will refer to standards. Unless your quote states otherwise we are not your compliance consultant or your engineer of record. It is your responsibility to determine which codes apply to your facility and to ensure that you comply with them.",
      },
    ],
  },
  {
    heading: "Quotes, Orders and Payment",
    paragraphs: [
      "A Quote is valid for 30 days (unless otherwise stated). We price it on the information you provide us with. If that information turns out to be incorrect we may alter the Quote. A Repair Price given prior to us having opened and inspected the equipment is an estimate and we will seek your approval before going over it by more than 10%.",
      "An Order becomes binding upon our written confirmation or upon the commencement of the work. All prices are in US dollars and do not include taxes, freight, permits and duties. Quotes are issued on a normal business day basis. Work carried out after hours, on weekends, on holidays and in emergencies will be charged at our standard rates as will any time our engineers are waiting for access to the site. Travel, fuel and equipment transport will be charged as per the quote. Upgrades, customs work and special order parts may require a deposit which will be non-refundable once we have commenced engineering or ordered materials.",
      "Approved credit accounts pay within 30 days of the Invoice Date or pay in advance. Overdue balances accrue interest at 1.5% per month (or the legal maximum if that is lower) plus reasonable collection costs. Whilst the balance is overdue, we are entitled to suspend work and to hold shipments, equipment and reports. If you have a dispute with an invoice you must notify us in writing within 15 days and you must pay the undisputed amount on time. You may not set off a claim against us against the amount you owe.",
    ],
  },
  {
    heading: "Your Responsibilities on Site",
    blocks: [
      { type: "paragraph", text: "Service dates are indicative unless your Quote has assigned a task to us." },
      { type: "paragraph", text: "You are responsible for:" },
      {
        type: "list",
        items: [
          "Safe and timely access to the site and equipment (including badges, escorts and any safety induction).",
          "Accurate information on your equipment, its ratings, its maintenance history and any known faults.",
          "The generator is Ready to Test, has sufficient fuel, coolant, oil and is battery charged.",
          "A level, ventilated location for the load bank, away from anything that could catch fire and safe connection points rated for the test.",
          "Permits and any Utility or Landlord approvals, plus advance notice to Occupants, Building Management and your fire alarm monitoring company.",
          "A person on site with the authority to make decisions regarding The Facility.",
        ],
      },
      {
        type: "paragraph",
        text: "If we can't get started or can't finish due to the site, equipment or approvals not being ready then we can charge you for standby time and return trips. You determine when and whether your building will run on generator power during a test and we take no responsibility for the impact this has on your operations or your tenants.",
      },
    ],
  },
  {
    heading: "Safety and Testing Risks",
    paragraphs: [
      "A Load Bank test is intended to stress the power system. Equipment that is already worn or defective may fail during or after a properly conducted test. We are not liable for that failure or any consequences thereof unless it is the result of our gross negligence or willful misconduct.",
      "Our engineers are absolutely entitled to refuse to start or stop any work which they consider to be unsafe. Common reasons for this would be undersized cabling, odd readings, poor ventilation, bad weather and a request to skip a safety step. Both parties are of course bound by applicable safety law and practice (including standards and Lockout/Tagout). A running load bank will discharge very hot air so people and anything that can burn must be kept well out of the exhaust path and work zone.",
      "Any equipment which we have supplied or worked on must be installed and operated by trained personnel, within its ratings, in accordance with the manufacturer's instructions and ours. Any injury or damage arising out of our work must be reported to us immediately.",
    ],
  },
  {
    heading: "Test Reports and Technical Information",
    paragraphs: [
      "A Test Report records what we measured on The Day at The Loads and in the conditions that existed at the time. It does not in any way predict how the equipment will perform at a later date or during a real outage. The readings will of course have the normal instrument tolerances and our findings are entirely dependent upon the Information and Records you provide.",
      "Our recommendations are the product of our professional judgement and it is up to you whether or not to act on them. The report does not in any way certify that your facility meets a Code, Accreditation or Insurance requirement unless the Quote specifically states that it will. The technical information on our website is general information only and is not engineering advice in relation to your equipment.",
      "Once you've paid you can use our reports in your business and pass them on to your Insurers, Auditors, Regulators and Advisers. No one else can rely on them without our Written Agreement and you may not amend a Report and present it as ours.",
    ],
  },
  {
    heading: "Repairs, Parts and Upgrades",
    paragraphs: [
      "**Repairs:** Diagnosing equipment may be subject to an evaluation fee which we will credit against the repair if you go ahead with it. Load Banks will often suffer damage which only becomes apparent upon opening or energizing and the estimates do not cover that. We will fit new, remanufactured or equivalent parts. Equipment sent to our shop will require an order/return authorization number, will have to be free of any hazardous materials and will have to remain insured by you in transit and whilst with us. You are responsible for payment when you send the Load Banks to us. Equipment not collected within 30 days of us notifying you that it is ready may be subject to storage charges and if it is still with us after 90 days, we may treat it as abandoned and dispose of it as permitted by law. We do service Load Banks from other manufacturers but are not authorized agents and our work may impact on their warranty.",
      "**Parts:** The specs and pictures on our site are purely for guidance. Manufacturers change parts at any time without notice and lead times are estimates. Unless we confirm in writing that a part is compatible, you're on your own in selecting the right part. If a part becomes unavailable we'll refund you the amount you paid for it.",
      "**Upgrades and custom work:** We build each upgrade to the requirements set out in your quote and to the drawings/settings you approve. Any changes after approval will require a written change in order. Because we are upgrading equipment we haven’t built, we are not responsible for the original design of that equipment, or for any parts we don't replace. An upgrade to a Load Bank may avoid the original manufacturer's warranty or listing. Regenerative and export control functions will generally require Futility approval (you will need to obtain this unless the quote states that we will). Where an upgrade includes Modbus, Ethernet or Wi-Fi, then you are responsible for your own network security and for determining who can access the equipment remotely. Any software or firmware that we supply is licensed for use with that equipment only.",
      "**Training:** We train your staff to operate the equipment covered safely. Training does not in any way certify anyone as qualified and it is up to you as to who is permitted to operate or maintain your equipment.",
    ],
  },
  {
    heading: "Delivery and Acceptance",
    paragraphs: [
      "Unless otherwise stated in the Quote the goods will be dispatched from either our facility or our supplier and the risk of loss or damage will pass to you upon collection by the carrier. Delivery dates are indicative only. Any shortfalls or visible damage must be notified in writing to us within 5 business days of delivery. You take ownership of the goods once we have been paid for in full. On-site work is deemed to be accepted unless you notify us in writing within 5 business days of completion as to what has not been done as agreed.",
    ],
  },
  {
    heading: "Cancellations, Returns and Refunds",
    paragraphs: [
      "If you cancel or reschedule on-site work less than 2 business days prior to it commencing or after we have dispatched then you are liable for the travel, rental and other costs which we are unable to recover plus any cancellation fee as stated in the quote. Special orders and made to order parts are non-cancellable once we have placed the order. If you cancel an upgrade or a custom job you will be charged for the work and materials that have been done and ordered up to that point and we may apply your deposit towards that amount.",
      "Standard parts can be returned within 30 days, with our prior authorization, unused, and in original packaging. You are responsible for return shipping and a restocking fee. We do not accept returns on special order items, parts that have been installed or energized, or activated software. Approved refunds are issued within 30 days of receipt of the returned item. Completed services are not refundable (although our warranty may cover them).",
      "We may cancel or suspend an order if you fail to make a payment, become insolvent, seriously breach these Terms or if the site becomes unsafe. You then pay for the work done and for any costs incurred.",
    ],
  },
  {
    heading: "Warranty",
    paragraphs: [
      "For 90 days after completion we warrant that our Services, Repair work and Upgrade work will be carried out in a workmanlike manner and that this Work and any Parts we install with it will be free from defects in workmanship and materials. Parts we resell are covered only by their Manufacturer's Warranty (which we will pass on to you where we can).",
      "To make a claim you must write to us with in the Warranty Period and within 15 days of discovering The Problem. We will then redo the work, repair or replace the part, or refund the amount you paid (whichever we decide). That is your sole remedy under this warranty.",
      "The warranty doesn't cover normal wear and tear, inadequate cooling, overloading, power surges, operation outside of rated limits, work carried out by anyone other than the purchaser, faults in your own equipment or network, any of the parts of the load bank which we didn't work on or anything which hasn't yet been paid for.",
      "EXCEPT FOR THE WARRANTY ABOVE, OUR PRODUCTS, SERVICES AND WEBSITE ARE PROVIDED \"AS IS\" AND WE DISCLAIM ALL OTHER WARRANTIES, INCLUDING IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE. WE DO NOT WARRANT THAT ANY POWER SYSTEM WILL WORK DURING AN ACTUAL OUTAGE OR THAT TESTING WILL FIND EVERY DEFECT. The website may contain errors or out-of-date information. We may correct it at any time and an error on the website does not bind us.",
    ],
  },
  {
    heading: "Limits On Our Liability",
    paragraphs: [
      "To the fullest extent permitted by law, we will not be liable for any indirect, incidental, special or consequential damages, including lost profits, downtime, lost data, the cost of substitute power or any damage to property other than the equipment we worked on. Our total liability in respect of any claim shall be limited to the amount you have paid us for the product or service in respect of which the claim is made.",
      "These limitations do not apply in respect of death or personal injury arising out of our negligence, fraud or where the law prohibits such limitations. A claim must be brought within one month of the date on which the claim arises. Our prices are subject to these limitations.",
      "You will defend and indemnify TestWatt and its personnel against any and all claims and costs (including reasonable legal fees) which may arise as a result of the condition or failure of your equipment or electrical system (unless such failure is due to our gross negligence or willful misconduct), any inaccurate information you have provided to us, any site hazards which you have failed to disclose, the actions of your own staff or contractors, your use of our products or reports or your breach of these Terms or the law. We will indemnify you to the extent set out above against any third-party claim for injury or for damage to property to the extent that such injury or damage is due to our negligence at your site.",
    ],
  },
  {
    heading: "Intellectual Property and Third Parties",
    paragraphs: [
      "We own the website content, the TestWatt name and logo and our Test Procedures, Designs, Drawings, Software and know how. You may use what we supply to Operate and maintain your own equipment, but you must not copy our Designs or build equipment from them. Your own Drawings and Data are yours. Each party will keep the other's Non-Public Business and Technical information confidential (which will include our pricing).",
      "Manufacturer names and trademarks on our website belong to their respective owners. We use them purely to identify the equipment we're working on. The fact that we refer to the equipment in this way in no way implies that the owner of the name or trademark endorses us. Links to other websites are provided for convenience only and we take no responsibility for the content or offerings of those sites.",
    ],
  },
  {
    heading: "Events Beyond Our Control",
    paragraphs: [
      "We are not liable for any Delay or Failure resulting from events beyond our Reasonable Control (e.g. severe weather, utility failures, pandemics, government action, labor disputes, supply shortages or carrier delays). Our deadlines will be extended for the duration of the event. If the event continues for more than 90 days, either party may cancel the affected work and you will pay for what has been done. This in no way entitles you to any extension of time for payment.",
    ],
  },
  {
    heading: "Governing Law and Disputes",
    paragraphs: [
      "If a dispute arises, the party raising it will give written notice and both parties will make every effort to resolve it in good faith within 30 days. Any dispute not settled must be brought in state or federal court. We may also bring proceedings to recover any unpaid invoices in any court which has jurisdiction. EACH PARTY WAIVES ANY RIGHT TO A JURY TRIAL AND AGREES NOT TO BRING CLAIMS AS PART OF A CLASS ACTION. The prevailing party may recover its reasonable legal fees.",
    ],
  },
  {
    heading: "Other Terms",
    paragraphs: [
      "We may amend these Terms by posting a new version on this page. The version in force at the time we accept your order will apply to that order. We are an independent contractor. You may not assign an order to any third party without our prior consent. If any provision of these Terms is found to be unenforceable by a court, then the remainder of the Terms will continue in full force and effect and a delay in enforcing any right will not constitute a waiver of that right. These Terms, together with your quote and order, constitute an entire agreement between us.",
    ],
  },
  {
    heading: "Contact us",
    paragraphs: [
      "Email **sales@testwatt.com** for quotes and orders and **support@testwatt.com** for service, repairs, warranty claims and returns.",
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
        body=""
        updated="October 18, 2026"
        banner
      />
      <LegalContent sections={SECTIONS} />
    </div>
  );
}
