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
    heading: "What this Policy Covers",
    blocks: [
      // {
      //   type: "paragraph",
      //   text: "This page explains what **TestWatt's Warranty** covers, how long it lasts, what you need to do to keep it valid and where our responsibility ends.",
      // },
      // {
      //   type: "paragraph",
      //   text: "If your Quotation, Order acknowledgment or a Signed Service agreement gives different \"**Warranty Terms**\", those terms apply to that order.",
      // },
      {
        type: "paragraph",
        text: "This Policy applies to Products and Services you buy directly from **TestWatt** or from a representative we have authorized in writing:",
      },
      {
        type: "list",
        items: [
          "Load Banks Testing, Upgrades, Repairs & Services, Training & Troubleshooting and Parts.",
          "Load Bank Upgrades, such as Manual to Automatic Conversions, Auto Load Leveling, Modbus and Network Communications, Wi-Fi, Power export control and Regenerative Operation.",
          "Control Panels, PLCs, HMIs, Heater Elements and other assemblies we build, including Custom engineered and Made to Order equipment.",
          "Replacement and Spare Parts.",
          "Repairs and Servicing, including on equipment made by other manufacturers.",
          "Field Services, including Load Bank Testing, Commissioning, Troubleshooting, Maintenance and Training.",
          "PLC and HMI Programs and Communication settings we supply or change.",
        ],
      },
      {
        type: "paragraph",
        text: "It does not cover equipment we did not supply, repair or service or any part of your site or Power System outside our Scope of work.",
      },
    ],
  },
  {
    heading: "What we warrant and for how long",
    blocks: [
      {
        type: "paragraph",
        text: "We warrant that our Products will be free from defects in Materials and Workmanship and will perform as described in their Manuals and agreed Specifications. We warrant that our services will be carried out with reasonable Skill and Care, by trained people, to the scope we agreed with you.",
      },
      {
        type: "table",
        head: ["What you bought", "What is covered", "Warranty period"],
        rows: [
          ["New equipment", "The complete unit", "**12 months** from shipment"],
          [
            "Upgrades and Custom Engineered equipment",
            "The parts we supplied and the work we did, built to the agreed Specification",
            "**90 days** from shipment",
          ],
          ["Spare and Replacement parts", "The part", "**90 days** from shipment"],
          [
            "Repairs",
            "The fault we repaired and the parts we installed",
            "**90 days** from return shipment or completion on site",
          ],
          [
            "Services, including Load Bank Testing",
            "Our Workmanship",
            "**90 days** from completion",
          ],
          [
            "PLC and HMI programs",
            "Performance to the agreed specification",
            "**90 days** from start-up or delivery",
          ],
        ],
      },
      {
        type: "paragraph",
        text: "The start-up date is the date on our commissioning report. If we did not perform start-up, you will need to show us your own record of it. Otherwise, the period runs from shipment.",
      },
      {
        type: "paragraph",
        text: "For upgrades, we do not warrant the existing equipment being upgraded and for custom work we do not warrant that a design or rating you specified suits your application. A repair covers the repaired fault only, not the rest of the unit.",
      },
      {
        type: "paragraph",
        text: "A Repair or Replacement under warranty does not start a new warranty period. The repaired or replacement item is covered for whatever time is left on the original one.",
      },
    ],
  },
  {
    heading: "What we will do",
    paragraphs: [
      "If we confirm a covered defect, we will repair or replace the item, reperform the service or correct the program, whichever we decide is appropriate. Where none of these is practical, we may refund or credit what you paid for the defective item or service, in accordance with the Quotation or our Terms and Conditions.",
      "We decide where the work is done: at our facility, at an authorized repair shop or at your site. A replacement may be a different model or brand, as long as it matches the original's ratings and function.",
    ],
  },
  {
    heading: "How to make a claim",
    blocks: [
      {
        type: "list",
        items: [
          `Email **${SUPPORT_EMAIL}** within the warranty period and no later than **30 days** after you notice the problem.`,
          "Include your Order or Invoice number, the model and Serial number, the start-up date and a description of what happened. Photos, Fault Codes, HMI screenshots, Test data and Maintenance records help us resolve claims faster.",
          "Stop using the equipment if running it could cause more damage or a safety risk and keep any failed parts.",
          "Work with our support team on basic remote troubleshooting before we send a technician or approve a return.",
          "Do not ship anything back without a Return Material Authorization (RMA) number from us. Pack the item properly and insure the shipment, since the risk of loss in transit to us is yours.",
        ],
      },
      {
        type: "paragraph",
        text: "We decide whether a claim is covered after reviewing the information and inspecting the item. If we find no defect or the cause is excluded under **Section 8**, we will charge for Inspection, Travel and Freight and quote any repair before doing it.",
      },
    ],
  },
  {
    heading: "Costs",
    paragraphs: [
      "For an approved claim, we pay for the Parts and Labor to fix the defect at our facility and for standard ground shipping back to you within the contiguous United States. When we agree that on-site service is needed, we cover our labor during normal business hours.",
      "You pay for shipping the item to us, Expedited freight, Removal and Reinstallation, Rigging and Cranes, Recommissioning, Site access and Permits, Rental equipment while yours is out of service and any duties or taxes. Travel time and expenses for on-site visits are also yours unless we agree otherwise in writing and after-hours work is billed at premium rates.",
      "We will do warranty work as quickly as we reasonably can, but turnaround depends on parts and supplier lead times. Any time we give is an estimate and delays do not entitle you to damages or rental costs.",
    ],
  },
  {
    heading: "Your responsibilities",
    paragraphs: ["To keep your warranty valid, you need to:"],
    list: [
      "Have qualified electricians install the equipment according to our Manuals and Drawings, the National Electrical Code and local codes, with correct cable sizing, Protection, Grounding and Phase rotation.",
      "Have custom engineered Equipment and Control Upgrades started up by TestWatt.",
      "Operate equipment only within its Nameplate ratings for Voltage, Current, Frequency, Capacity, Duty cycle and Temperature and keep all Safety Devices and Alarms in service.",
      "Keep the Power Supply within the tolerances in the Manual and protect the equipment from Surges and Power quality problems on your system.",
      "Make sure Cooling Fans are running before Load is applied, keep air paths clear and stop hot exhaust air from recirculating into the unit or nearby equipment.",
      "Store and use equipment in conditions suited to its enclosure, away from rain, standing water, corrosive air and conductive dust unless it was built for those conditions.",
      "Carry out the preventive maintenance in the manual and keep dated records of it.",
      "Use only parts we supply or approve and not modify or repair the equipment during the warranty period without our written approval.",
      "Follow lockout, arc flash and other electrical safety practices when working on the equipment.",
    ],
  },
  {
    heading: "Load bank testing services",
    paragraphs: [
      "A Load Test runs your generator or power system at or near full output. That stress can expose, and sometimes trigger, failures in parts that were already worn or poorly maintained, such as Fuses, Resistor elements, Breakers and Switches. We are not responsible for failures of your equipment during or after a test unless our negligence caused them.",
      "Before we test, you are responsible for making sure the equipment is maintained and fit to run at the agreed load and for telling us about any known Faults or Alarms. You also arrange building load transfers and any outage notices.",
      "Our report records how your equipment performed on the day of the test. It does not guarantee future performance or that your system will carry load in a real outage. We can test to procedures based on NFPA 110 and NFPA 99, but whether your facility complies is decided by you and the authority having jurisdiction.",
    ],
  },
  {
    heading: "What is not covered",
    paragraphs: ["The warranty does not cover damage or failures caused by:"],
    list: [
      "Installation, Wiring or start-up that did not follow our Documentation.",
      "Overloading, Overheating, Blocked Airflow or Running Load without the Fans On.",
      "Short Circuits, Surges, Lightning, Phase Imbalance, Wrong Voltage or Frequency or other electrical problems that start outside our equipment.",
      "Generators, Switchgear, Cables, Circuit Breakers or other Equipment we did not supply.",
      "Missed Maintenance, Misuse, Accidents or Poor Handling, Transport or Storage.",
      "Unauthorized Repairs or Modifications or Parts we did not supply or approve.",
      "Corrosion, Moisture, Dust, Chemicals, Pests, Fire, Flood, Storms and other events outside our control.",
      "It also does not cover normal wear and tear, consumable items such as Fuses, Lamps, Filters, Batteries, Power Cables and Connectors, Cosmetic Damage or Recalibration of Power Meters.",
      "The warranty ends for an affected item if its serial number or nameplate is removed, Safety Devices or Interlocks are bypassed, our programs or settings are changed without our approval or an installed system is moved without our inspection. It is also suspended while any invoice for that item is unpaid.",
    ],
  },
  {
    heading: "Third party parts and software",
    paragraphs: [
      "Our equipment includes components from Third Party Manufacturers, such as PLCs, HMIs, Power Meters, Contactors, Circuit Breakers, Resistor Elements, Blower Motors and more. During the warranty period we handle claims on these for you, but our obligation for the component itself is limited to what its manufacturer provides to us. Where a manufacturer offers a longer warranty, we will pass it on where we can. If a part has been discontinued, we may fit an equivalent substitute and we cannot promise that parts will remain available for any set time.",
      "PLC and HMI programs are licensed to you for use with the Load Bank they came with and we keep ownership of them. We do not promise that Software or Communications will run without Interruption or Error. We set up Modbus, Wi-Fi and Remote Monitoring features to the agreed Specification, but your Network, Internet service, cybersecurity and other connected systems are your responsibility. Remote Monitoring and Control features do not replace local protection devices or trained operators.",
      "Warranty support by Phone and Email is free during normal business hours. Other Engineering, Training or After Warranty support is charged at our Standard rates.",
    ],
  },
  {
    heading: "Limits on our liability",
    paragraphs: [
      "TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, THE WARRANTIES IN THIS POLICY ARE THE ONLY WARRANTIES TESTWATT GIVES. WE DISCLAIM ALL OTHER WARRANTIES, EXPRESS OR IMPLIED, INCLUDING THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE. Where the law does not allow an implied warranty to be excluded, it is limited to the Warranty period in Section 2.",
      "The Remedies in **Sections 3 and 7** are your only remedies for a Warranty Claim. To the maximum extent permitted by law, we are not liable for Indirect, Incidental, Special or Consequential Damages, including Lost Revenue or Production, Downtime, Testing Delays, Rental Equipment, Fuel, Lost Data or Failed Inspections, however the claim arises. Our total liability for any claim will not exceed the price you paid for the specific product or service involved, **Subject to the final Quote and Specific customer requirements.**",
      "Nothing in this policy limits liability that the law does not allow us to limit, such as for personal injury caused by our negligence. Any legal claim under this Warranty must be brought within one year of when it arises, where the law allows.",
    ],
  },
  {
    heading: "Other terms and contact",
    paragraphs: [
      "This Warranty applies only to the original buyer and cannot be transferred without our written consent. If you rent or lease our equipment to others, the warranty stays with you and damage caused by your renters is not covered.",
      "For equipment shipped outside the United States, warranty work is done at our U.S. facility and you pay international freight both ways, plus duties and taxes. You are responsible for meeting local codes and export rules.",
      "If we change this policy, your order is governed by the version posted on our website on the date we accepted it. If any part is found unenforceable, the rest still applies. Only a signed written agreement from a TestWatt officer can change these terms.",
      `**Warranty claims and support:** ${SUPPORT_EMAIL}`,
      "**Extended coverage and sales:** Sales@TestWatt.com",
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
        body={[
          "This page explains what **TestWatt's Warranty** covers, how long it lasts, what you need to do to keep it valid and where our responsibility ends.",
          "If your Quotation, Order acknowledgment or a Signed Service agreement gives different “**Warranty Terms**”, those terms apply to that order.",
        ]}
        updated="October 15, 2026"
      />
      <LegalContent sections={SECTIONS} />
    </div>
  );
}
