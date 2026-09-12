import type { AppRoute } from "./site";

export type Service = {
  number: string;
  title: string;
  description: string;
  link: AppRoute;
};

export type FeatureItemData = { title: string; body: string };
export type StepData = { step: string; title: string; desc: string };
export type StandardRow = { code: string; title: string; scope: string };
export type LoadPoint = { time: string; load: number };

export const SERVICES: Service[] = [
  {
    number: "01",
    title: "Load Bank Testing",
    description:
      "Resistive, reactive and hybrid load bank testing at full nameplate rating. We verify that generators, UPS systems and switchgear can deliver their rated output under sustained, controlled load — not just at idle or partial capacity.",
    link: "/load-bank-testing",
  },
  {
    number: "02",
    title: "Repairs & Servicing",
    description:
      "Scheduled and emergency servicing of load banks and associated power equipment. Preventive maintenance, fault diagnosis and component replacement by engineers who understand load testing equipment inside and out.",
    link: "/repairs-servicing",
  },
  {
    number: "03",
    title: "Spare Parts Supply",
    description:
      "OEM-grade replacement parts for load banks, resistive elements, control systems and auxiliary components. Fast turnaround with documented provenance — no substitute parts, no guesswork.",
    link: "/contact",
  },
  {
    number: "04",
    title: "Upgrades & Modernisation",
    description:
      "Control system upgrades, digital metering retrofits, remote monitoring integration and capacity expansions. Extend the life and capability of existing load bank equipment without full replacement.",
    link: "/repairs-servicing",
  },
  {
    number: "05",
    title: "Training & Troubleshooting",
    description:
      "Structured training programmes for in-house operations and maintenance teams. On-site troubleshooting for persistent faults, nuisance trips and unexplained failures across generator, UPS and switchgear installations.",
    link: "/repairs-servicing",
  },
];

export const CAPABILITIES = [
  "Load Bank Testing",
  "Repairs & Servicing",
  "Spare Parts Supply",
  "Load Bank Upgrades",
  "Training & Troubleshooting",
];

export const WHY_TEST_WATT: FeatureItemData[] = [
  {
    title: "Confirms True Rated Capacity",
    body: "A paper rating is not proof. Load testing at 100% nameplate load for a sustained period is the only method that confirms your asset will perform when it must.",
  },
  {
    title: "Prevents Wet-Stacking",
    body: "Diesel generators running at low or no load accumulate unburned fuel in the exhaust — wet-stacking. Regular full-load testing burns off deposits and prevents long-term engine damage.",
  },
  {
    title: "Surfaces Hidden Faults",
    body: "Voltage sag, frequency instability, governor hunting and cooling failures only manifest under load. Our monitoring systems capture every anomaly during the test cycle.",
  },
  {
    title: "Satisfies Compliance Requirements",
    body: "NFPA 110, NETA, Uptime Institute and OEM warranty terms all mandate periodic load testing. Our reports provide the documentary evidence auditors require.",
  },
  {
    title: "Removes Utility Dependence",
    body: "Load testing is performed using our portable load banks — no utility supply interruption, no load-shedding coordination, no site dependency.",
  },
  {
    title: "Protects Warranty Terms",
    body: "Manufacturer warranties often require documented periodic testing to remain valid. Our calibrated test equipment and formal test reports satisfy OEM documentation requirements.",
  },
];

export const TESTING_PROCESS: StepData[] = [
  {
    step: "01",
    title: "Connect",
    desc: "Cable up load banks to the generator output terminals or UPS bus. Verify connections, instrument calibration and pre-test safety checks.",
  },
  {
    step: "02",
    title: "Load",
    desc: "Apply resistive or reactive load in incremental steps — typically 25%, 50%, 75%, 100% of nameplate rating — according to the agreed test programme.",
  },
  {
    step: "03",
    title: "Monitor",
    desc: "Real-time monitoring of voltage, current, frequency, power factor, engine temperature, oil pressure and exhaust emissions throughout each step.",
  },
  {
    step: "04",
    title: "Record",
    desc: "Continuous data capture at defined intervals. All parameters logged to time-stamped records with instrumentation uncertainty documented.",
  },
  {
    step: "05",
    title: "Report",
    desc: "Formal written test report with tabulated results, trend analysis, compliance statement and recommendations issued within agreed timescales.",
  },
];

export const LOAD_BANK_TYPES = [
  {
    type: "Resistive Load Banks",
    icon: "R",
    applications: [
      "Diesel generator commissioning",
      "Scheduled load testing",
      "Wet-stack prevention",
    ],
    detail:
      "Pure resistive load at unity power factor. Converts electrical energy to heat through resistance elements. Industry-standard for generator acceptance and maintenance testing to NFPA 110 and ISO 8528.",
  },
  {
    type: "Reactive Load Banks",
    icon: "X",
    applications: [
      "UPS full-load testing",
      "Power factor testing",
      "Generator stability testing",
    ],
    detail:
      "Inductive and capacitive reactive loading at adjustable power factor. Essential for testing UPS systems, generators designed to supply motor loads, and verifying AVR performance under varying power factor conditions.",
  },
  {
    type: "Hybrid (Combined) Load Banks",
    icon: "Z",
    applications: [
      "Full kVA testing",
      "Complex load simulation",
      "Data centre resilience testing",
    ],
    detail:
      "Simultaneous resistive and reactive loading to simulate real facility load profiles. Allows testing at any combination of kW, kVAR and kVA to match the specific load characteristics of the protected facility.",
  },
];

export const LOAD_TEST_ADVANTAGES: FeatureItemData[] = [
  {
    title: "Confirms rated output under sustained load",
    body: "Nameplate ratings are manufacturer claims. Our tests verify actual sustained output at full kW and kVA — with data to prove it.",
  },
  {
    title: "Detects voltage and frequency instability",
    body: "Governor hunting, AVR drift and voltage sag under load are invisible at idle. Step-load testing reveals instability that predictive maintenance cannot.",
  },
  {
    title: "Prevents wet-stacking in diesel plant",
    body: "Running diesel generators on light or no load causes fuel residue build-up. Periodic full-load testing burns off deposits and preserves engine condition.",
  },
  {
    title: "Validates automatic transfer sequences",
    body: "We test the complete transfer — sensing, changeover timing, load acceptance and return — not just the generator in isolation.",
  },
  {
    title: "Produces a compliance-ready test report",
    body: "Every test generates a formal written report with tabulated data, trend analysis, standards compliance statement and engineer sign-off.",
  },
  {
    title: "Portable — no utility disruption required",
    body: "Our mobile load banks are brought to site and connected to your output. No supply interruption, no load-shedding and no dependency on building loads.",
  },
];

export const MONITORED_PARAMETERS = [
  "Output voltage (L-L and L-N)",
  "Load current per phase",
  "Frequency (Hz)",
  "Real power (kW) and apparent power (kVA)",
  "Power factor",
  "Engine coolant temperature",
  "Engine oil pressure",
  "Fuel consumption rate",
  "Exhaust temperature",
  "Alternator winding temperature",
  "Transfer time (ATS/AMF systems)",
];

export const SERVICING_REASONS: FeatureItemData[] = [
  {
    title: "Maintains Test Accuracy",
    body: "A load bank with degraded resistance elements or drifting instrumentation will produce inaccurate results. Scheduled calibration and component inspection ensures test data remains valid.",
  },
  {
    title: "Extends Equipment Life",
    body: "Load banks operate at extreme thermal and electrical stress. Regular inspection, cleaning and preventive parts replacement prevents catastrophic failure and extends service life significantly.",
  },
  {
    title: "Eliminates Unexpected Downtime",
    body: "Unscheduled load bank failure at a critical test date causes programme delays and compliance risk. Preventive maintenance eliminates the failure modes that cause unexpected unavailability.",
  },
  {
    title: "Preserves Manufacturer Warranty",
    body: "OEM equipment warranties typically require scheduled maintenance by a competent party. Our service records provide the audit trail to support warranty claims.",
  },
  {
    title: "Supports Compliance Documentation",
    body: "Regular service records demonstrate that the test equipment used in compliance testing was itself maintained and calibrated — an auditor requirement many operators overlook.",
  },
  {
    title: "Reduces Total Cost of Ownership",
    body: "Scheduled maintenance is significantly cheaper than emergency repair or replacement. It also avoids the secondary costs of rescheduled tests and extended non-compliance windows.",
  },
];

export const TROUBLESHOOTING_STEPS: StepData[] = [
  {
    step: "01",
    title: "Initial Assessment",
    desc: "Site visit and equipment survey to understand the installation, operating history and any reported symptoms. Diagnostic testing before any work is carried out.",
  },
  {
    step: "02",
    title: "Structured Diagnosis",
    desc: "Systematic fault isolation using documented procedures. We do not replace components speculatively — every replacement is supported by diagnostic evidence.",
  },
  {
    step: "03",
    title: "Correction & Verification",
    desc: "Repair or adjustment carried out with parts of documented provenance. Functional testing after every intervention to confirm the fault is resolved.",
  },
  {
    step: "04",
    title: "Knowledge Transfer",
    desc: "Engineers brief your team on findings, corrective actions and any changed operating procedures. Written summary provided with the service record.",
  },
];

export const MODERNISATION_OPTIONS: [string, string][] = [
  ["Digital metering retrofit", "Remote monitoring integration"],
  ["SCADA / BMS connectivity", "Data logging upgrade"],
  ["Control panel refurbishment", "Load step sequence reprogramming"],
  ["Cooling system upgrades", "Resistance element replacement"],
];

export const SPARE_PARTS = [
  {
    category: "Resistance Elements",
    items: [
      "Wire wound resistor banks",
      "Stainless steel grid elements",
      "Fluid-cooled resistance modules",
      "High-temperature alloy elements",
    ],
  },
  {
    category: "Control Systems",
    items: [
      "Load step controllers",
      "Auto-load sequencing modules",
      "Protection relay upgrades",
      "Metering and instrumentation",
    ],
  },
  {
    category: "Switchgear & Protection",
    items: [
      "Main contactors",
      "HRC fuse links and holders",
      "Circuit breakers",
      "Overcurrent relays",
    ],
  },
  {
    category: "Cooling & Auxiliary",
    items: [
      "Fan motors and blades",
      "Temperature switches",
      "Thermal cutouts",
      "Cable assemblies and connectors",
    ],
  },
];

export const ENQUIRY_SERVICES = [
  "Load bank testing — generator",
  "Load bank testing — UPS system",
  "Load bank testing — switchgear",
  "Repairs & servicing — load bank",
  "Spare parts enquiry",
  "Generator upgrade / modernisation",
  "Training & troubleshooting",
  "General enquiry",
];

export const STANDARDS_HOME: StandardRow[] = [
  {
    code: "NFPA 110",
    title: "Standard for Emergency and Standby Power Systems",
    scope: "Generator acceptance & periodic load testing requirements",
  },
  {
    code: "NFPA 111",
    title: "Standard on Stored Electrical Energy Emergency Systems",
    scope: "UPS and battery system testing procedures",
  },
  {
    code: "IEEE 446",
    title: "Recommended Practice for Emergency Power Systems",
    scope: "Design and testing of emergency/standby power",
  },
  {
    code: "ISO 8528",
    title:
      "Reciprocating Internal Combustion Engine Driven Alternating Current Generating Sets",
    scope: "Performance, ratings and test methods for gensets",
  },
  {
    code: "ISO 8573",
    title: "Compressed Air — Contaminants and Purity Classes",
    scope: "Air quality standards for pneumatically actuated switchgear",
  },
  {
    code: "BS EN 12601",
    title: "Generating Sets — Safety",
    scope: "European safety requirements for generating set installations",
  },
  {
    code: "NETA ATS/MTS",
    title: "Acceptance/Maintenance Testing Specifications",
    scope: "Electrical equipment testing and commissioning",
  },
  {
    code: "TIA-942",
    title: "Telecommunications Infrastructure Standard",
    scope: "Data centre generator and UPS compliance tiers",
  },
  {
    code: "Uptime Institute",
    title: "Tier Standard: Operational Sustainability",
    scope: "Tier I–IV data centre infrastructure testing",
  },
  {
    code: "Manufacturer OEM Spec",
    title: "Original Equipment Manufacturer Test Procedures",
    scope: "Warranty preservation and factory acceptance criteria",
  },
];

export const STANDARDS_LOAD_BANK: StandardRow[] = [
  {
    code: "NFPA 110",
    title: "Emergency and Standby Power Systems",
    scope: "Generator acceptance & periodic load testing requirements",
  },
  {
    code: "NFPA 111",
    title: "Stored Electrical Energy Emergency Systems",
    scope: "UPS and battery system testing procedures",
  },
  {
    code: "IEEE 446",
    title: "Emergency Power Systems — Recommended Practice",
    scope: "Design and test of emergency/standby power",
  },
  {
    code: "ISO 8528",
    title: "AC Generating Sets — Performance & Test Methods",
    scope: "Ratings, test methods and acceptance criteria for gensets",
  },
  {
    code: "NETA ATS/MTS",
    title: "Acceptance/Maintenance Testing Specifications",
    scope: "Electrical equipment commissioning and maintenance testing",
  },
  {
    code: "TIA-942 / Uptime Institute",
    title: "Telecommunications Infrastructure / Tier Standard",
    scope: "Data centre generator and UPS compliance",
  },
  {
    code: "Manufacturer OEM Spec",
    title: "Original Equipment Manufacturer Procedures",
    scope: "Warranty preservation and factory acceptance criteria",
  },
];

export const HOME_LOAD_PROFILE: LoadPoint[] = [
  { time: "00:00", load: 0 },
  { time: "00:05", load: 0 },
  { time: "00:10", load: 25 },
  { time: "00:15", load: 25 },
  { time: "00:20", load: 50 },
  { time: "00:25", load: 50 },
  { time: "00:30", load: 75 },
  { time: "00:35", load: 75 },
  { time: "00:40", load: 100 },
  { time: "00:50", load: 100 },
  { time: "01:00", load: 100 },
  { time: "01:05", load: 75 },
  { time: "01:10", load: 50 },
  { time: "01:15", load: 25 },
  { time: "01:20", load: 0 },
];

export const STEP_LOAD_PROFILE: LoadPoint[] = [
  { time: "T+0", load: 0 },
  { time: "T+5m", load: 0 },
  { time: "T+10m", load: 25 },
  { time: "T+25m", load: 25 },
  { time: "T+30m", load: 50 },
  { time: "T+45m", load: 50 },
  { time: "T+50m", load: 75 },
  { time: "T+65m", load: 75 },
  { time: "T+70m", load: 100 },
  { time: "T+100m", load: 100 },
  { time: "T+110m", load: 100 },
  { time: "T+115m", load: 75 },
  { time: "T+120m", load: 50 },
  { time: "T+125m", load: 25 },
  { time: "T+130m", load: 0 },
];

export const RESPONSE_TIMES = [
  { label: "Sales enquiries", value: "Within 1 business day" },
  { label: "Technical support", value: "Same business day" },
  { label: "Emergency callout", value: "Contact support directly" },
];
