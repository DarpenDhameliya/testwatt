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
        text: "This Policy applies to Products and Services you purchase directly from TestWatt or from a representative that we have authorized in writing:",
      },
      {
        type: "list",
        items: [
          "Load Bank testing, upgrades, repairs & services, training & troubleshooting, and parts.",
          "Load Bank Upgrades: Manual-to-automatic conversions, Automatic-to-Manual conversions, Interface conversions, Auto Load Leveling, Modbus and Network Communications, Wi-Fi, Power Export Control, and Regenerative Operation.",
          "Control Panels, Switches, Automation Hardware, Heater Elements, and all sorts of other assemblies we build (including custom-engineered and made-to-order equipment).",
          "Replacement and Spare Parts.",
          "Repairs and Servicing (including on equipment made by other manufacturers).",
          "Field Services (including load bank testing, commissioning, troubleshooting, maintenance and training).",
          "Software programs and communication settings that we supply or modify.",
        ],
      },
      {
        type: "paragraph",
        text: "It does not cover any equipment, parts or services which we did not supply, repair, or Service and does not cover any part of your site or your Power System outside of our Scope of Work.",
      },
    ],
  },
  {
    heading: "What we warrant and for how long",
    blocks: [
      {
        type: "paragraph",
        text: "We warrant that our Products will be free from defects in materials and artistry and will perform in accordance with their Manuals and Agreed Specifications. We guarantee that our services will be carried out by trained personnel with reasonable skill and care to the extent of the scope agreed with you.",
      },
      {
        type: "table",
        head: ["What you bought", "What is covered", "Warranty period"],
        rows: [
          ["New equipment", "The complete unit", "**6 months** from shipment"],
          ["Upgrades and Custom Engineered equipment", "The parts we supplied and the work we did, built to the agreed Specification", "**90 days** from shipment"],
          [
            "Spare and Replacement parts",
            "The part",
            "**90 days** from shipment",
          ],
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
            "Software programs",
            "Performance to the agreed specification",
            "**90 days** from start-up or delivery",
          ],
        ],
      },
      {
        type: "paragraph",
        text: "The startup date is the date of our commissioning report. If we didn't do the startup, you'll need to provide your own record of it. Otherwise, the period will be from shipment.",
      },
      {
        type: "paragraph",
        text: "For upgrades, we make no warranty as to whether the existing equipment is being upgraded. For custom work, we make no warranty that the design or rating you specified is suitable for your application. A repair only covers the fault that has been repaired.",
      },
      {
        type: "paragraph",
        text: "A repair or replacement carried out under warranty does not trigger a new warranty period. The repaired or replacement item is covered for the remainder of the original warranty period.",
      },
    ],
  },
  {
    heading: "What we will do",
    paragraphs: [
      "If we confirm a covered defect, we will repair or replace the item, reperform the service or correct the program (whichever we consider appropriate). If none of the above is practical, we may credit what you paid for the defective item or service in accordance with the Quotation or our Terms and Conditions.",
      "We decide where the work is carried out (our premises, an authorized repairer, or your site). A replacement can be a different model or brand provided it has the same ratings and performance as the original.",
    ],
  },
  {
    heading: "How to make a claim",
    blocks: [
      {
        type: "list",
        items: [
          `Email **${SUPPORT_EMAIL}** during the warranty period, and no later than **30 days** after you first notice the problem.`,
          "Include your Order/Invoice number, the model and serial number, the start-up date, and a description of what happened. Photos, fault codes, software screenshots, test data, and maintenance records will help us resolve your claim as quickly as possible.",
          "Don't run the equipment if it could cause further damage or pose a safety risk and keep any failed parts.",
          "Work with our support team on basic remote troubleshooting before we send out a technician or approve a return.",
          "Don't send anything back without an RMA number from us. Pack the item appropriately and ensure the consignment, as the risk of loss in transit to us is yours.",
        ],
      },
      {
        type: "paragraph",
        text: "We will decide whether a claim is covered following a review of the information and inspection of the item. If we find no fault or the cause is excluded under **Section 8**, we will charge for inspection, travel, and freight and will quote any repair before repairing.",
      },
    ],
  },
  {
    heading: "Costs",
    paragraphs: [
      "For an approved claim, we will pay for parts and labor to repair the defect at our facility and for standard ground shipping back to you within the contiguous US. If we agree that on-site service is required, we will cover our labor during normal business hours.",
      "You pay for the shipping of the item to us (expedited freight), removal and reinstallation, rigging and cranes, recommissioning, site access and permits, rental equipment during the time your equipment is out of service, any duties and taxes, and travel time and expenses for on-site visits (unless otherwise agreed in writing). After-hours work is billed at premium rates.",
      "We'll do the warranty work as quickly as we can (subject to parts and supplier lead times). Any time given is an estimate. Delays in the work will not entitle you to any damage or rental costs.",
    ],
  },
  {
    heading: "Your responsibilities",
    paragraphs: ["To keep your warranty valid, you need to:"],
    list: [
      "Have qualified electricians install the equipment in accordance with our Manuals and Drawings, the National Electrical Code and local codes, with correct cable sizing, protection, grounding and phase rotation.",
      "Have the custom-engineered equipment and Control upgrades switched on by TestWatt.",
      "Operate equipment only within its nameplate ratings for Voltage, Current, Frequency, Capacity, Duty Cycle, and Temperature, and maintain all Safety Devices and Alarm Information.",
      "Keep the power supply within the tolerances as specified in the manual and protect the equipment from surges and power quality problems on your system.",
      "Make sure Cooling Fans are running before applying load, keep air paths clear, and stop hot exhaust air from recirculating into the unit or nearby equipment.",
      "Store and use equipment in conditions suited to its enclosure, away from rain, standing water, corrosive air, and conductive dust unless it was built for those conditions.",
      "Carry out the preventive maintenance described in the manual and keep records up to date.",
      "Use only parts we supply or approve and do not modify or repair the equipment during the warranty period without our written approval.",
      "Follow lockout, arc flash, and other electrical safety practices when working on the equipment.",
    ],
  },
  {
    heading: "Load bank testing services",
    paragraphs: [
      "A Load Test is where you run your generator or power system at or near full output. That stress can bring to light and in some cases actually cause failures in components which were already worn or poorly maintained (fuses, resistor elements, breakers and switches etc.). We are not liable for any failure of your equipment during or after a test save in the case where our own negligence has caused the failure.",
      "Before we carry out any testing you are responsible for ensuring that the equipment is maintained and fit to run at the agreed load and for letting us know of any known faults or alarms. You are also responsible for arranging any building load transfers and any outage notices.",
      "Our report records how your equipment performed on the day of the test. It makes no warranty as to future performance or that your system will be able to carry the load in a real outage. We can test to procedures based on standards, but again, you and the agencies determine whether your facility complies.",
    ],
  },
  {
    heading: "What is not covered",
    blocks: [
      {
        type: "paragraph",
        text: "The warranty does not cover damage or failures caused by:",
      },
      {
        type: "list",
        items: [
          "Installation, wiring or startup which did not conform to our documentation.",
          "Overloading, overheating, blocked airflow or running load without the fans on.",
          "Short circuits, surges, lightning, phase imbalance, wrong voltage, wrong frequency or any other electrical problems which originate outside of our equipment.",
          "Generators, switchgear, cables, circuit breakers or any other equipment which we did not supply.",
          "Missed maintenance, misuse, accidents or poor handling, transport or storage.",
          "Unauthorized repairs or modifications or parts which we did not supply or approve.",
          "Corrosion, Moisture, Dust, Chemicals, Pests, Fire, Flood, Storms and other events beyond our control.",
        ],
      },
      {
        type: "paragraph",
        text: "It also excludes normal wear and tears, consumables (fuses, lamps, filters, batteries, power cables and connectors), cosmetic damage and recalibration of power meters.",
      },
      {
        type: "paragraph",
        text: "The warranty on an affected item terminates if the serial number or nameplate is removed, safety devices or interlocks are circumvented, our programs or settings are altered without our permission, or the installed system is relocated without our inspection. We will also suspend it if any invoice for that item remains unpaid.",
      },
    ],
  },
  {
    heading: "Third party parts and software",
    paragraphs: [
      "Our kit consists of components from Third Party Manufacturers (Automation, Power Meters, Contactors, Circuit Breakers, Resistor Elements, Blower Motors etc.). During the warranty period we will deal with claims on these items but our obligation is limited to what the manufacturer will provide for us. Where the manufacturer has a longer warranty we will pass that on where we can. If a part is out of production we may fit an equivalent and cannot guarantee that parts will be available for any particular period of time.",
      "Automation software is licensed to you for use with the equipment it came with (the Load Bank) and we retain ownership of the software. We don't guarantee that the software or communications will run without interruption or error. We have implemented Modbus, Wi-Fi and Remote Monitoring to the agreed specification but your network, your internet service, your cybersecurity and all other connected systems are your own responsibility. The Remote Monitoring and Control features do not in any way replace local protection devices or trained operators.",
      "Warranty support by phone and email is free during normal business hours. All other Engineering, Training or After Warranty support is at our standard rates.",
    ],
  },
  {
    heading: "Limits to our liability",
    paragraphs: [
      "To the maximum extent permitted by applicable law, the only warranties that TestWatt gives are those set out in this policy. All other warranties, both express and implied, are expressly disclaimed. Where the law does not permit an implied warranty to be excluded, such warranty is limited to the warranty period set out in **Section 2**.",
      "The only remedies you have in relation to a Warranty Claim are those set out in **Sections 3 and 7**. To the maximum extent permitted by law we are not liable for any indirect, incidental, special or consequential damages (including lost revenue or production, downtime, testing delays, rental equipment, fuel, lost data or failed inspections), however the claim arises. Our total liability in respect of any claim will not exceed the price you paid for the relevant product or service in question (subject to the final quote and specific customer requirements).",
      "Nothing in this policy limits any liability which the law would not permit us to limit (e.g. liability for personal injury arising out of our negligence). Any claim under this warranty must be brought within one year of when it arises (where the law permits).",
    ],
  },
  {
    heading: "Other terms and contact",
    paragraphs: [
      "This warranty is only for the original purchaser and cannot be passed on to anyone else without our express written consent. If you rent or lease our equipment to anyone else, then the warranty remains with you, and damage caused by your renters is not covered.",
      "For equipment shipped outside the US, we do all the warranty work at our U.S. facility, and you pay international freight both ways plus duties and taxes. You are responsible for compliance with local codes and export rules.",
      "If we alter this policy then your order is governed by the version of the policy that was on our website on the date we accepted your order. If any part of this is found to be unenforceable then the remainder of the policy will still be in force. Only a written agreement signed by a TestWatt officer will change these terms.",
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
          "This page sets out what **TestWatt's warranty** covers, the warranty duration, what you need to do to maintain it, and where our responsibility ends.",
          "If your Quotation, Order Acknowledgment, or Signed Service Agreement contains different “**Warranty Terms**,” then those terms will apply to that order.",
        ]}
        updated="October 18, 2026"
      />
      <LegalContent sections={SECTIONS} />
    </div>
  );
}
