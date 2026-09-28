import type { AppRoute } from "./site";

export type ServiceCategory = "all" | "testing" | "servicing" | "modernisation";

export type Service = {
  number: string;
  title: string;
  tagline: string;
  badge: string;
  category: "testing" | "servicing" | "modernisation";
  description: string;
  highlights: string[];
  targetEquipment: string[];
  metric: { value: string; label: string };
  link: AppRoute;
  featured?: boolean;
};

export type FeatureItemData = { title: string; body: string };
export type StepData = { step: string; title: string; desc: string };
export type StandardRow = { code: string; title: string; scope: string };
export type LoadPoint = { time: string; load: number };
export type ComplianceStandardRow = {
  code: string;
  appliesTo: string;
  requirement: string;
  howWeMeet: string;
};
export type TestProfileRow = { test: string; load: string; duration: string };
export type IsoLimitRow = {
  limit: string;
  g1: string;
  g2: string;
  g3: string;
};

export const SERVICES: Service[] = [
  {
    number: "01",
    title: "Load Bank Testing",
    tagline: "Full Nameplate Load, Proven On Site",
    badge: "Core Service",
    category: "testing",
    description:
      "We put generators, UPS systems and switchgear under real resistive, reactive or hybrid load at their full nameplate rating, not half capacity. If the plate says 100%, we run it at 100% and check that it holds.",
    highlights: [
      "Resistive, reactive & hybrid power factor testing",
      "Step loading at 25%, 50%, 75%, 100% capacity",
      "Reports built to NFPA 110, ISO 8528 & NETA",
    ],
    targetEquipment: [
      "Standby Generators",
      "UPS Systems",
      "Switchgear",
      "ATS Panels",
    ],
    metric: { value: "100%", label: "Nameplate Load Proof" },
    link: "/load-bank-testing",
    featured: true,
  },
  {
    number: "02",
    title: "Repairs & Servicing",
    tagline: "Scheduled Care, Fast Call-Outs",
    badge: "Field Engineering",
    category: "servicing",
    description:
      "Planned maintenance and emergency call-outs for load banks and the equipment around them. Our engineers work on this gear every week, so they know how it behaves in practice as well as on paper.",
    highlights: [
      "Sensor & instrument calibration",
      "Thermal checks on resistor elements",
      "Preventive servicing that protects your warranty",
    ],
    targetEquipment: [
      "Portable Units",
      "Permanent Installations",
      "Auxiliary Blowers",
    ],
    metric: { value: "24/7", label: "Engineering Dispatch" },
    link: "/repairs-servicing",
  },
  {
    number: "03",
    title: "Load Bank Upgrades",
    tagline: "New Controls On Equipment You Already Own",
    badge: "Asset Life Extension",
    category: "modernisation",
    description:
      "Most load banks don't need replacing. They need better controls. We add digital metering, remote monitoring and extra capacity to units already in your fleet.",
    highlights: [
      "PLC retrofits with automated step sequencing",
      "SCADA, Modbus & cloud data logging",
      "Capacity and power-factor upgrades",
    ],
    targetEquipment: [
      "Legacy Load Banks",
      "Control Consoles",
      "Data Loggers",
    ],
    metric: { value: "-60%", label: "Capex Savings vs New" },
    link: "/load-bank-upgrades",
  },
  {
    number: "04",
    title: "Training & Troubleshooting",
    tagline: "Train Your Team, Or Send Us The Fault",
    badge: "Specialist Advisory",
    category: "servicing",
    description:
      "We train in-house teams, and we get called in when nobody else can pin down a fault: nuisance trips, drift and intermittent failures on generators, UPS systems and switchgear.",
    highlights: [
      "Operator safety & test procedure training",
      "AVR drift, governor hunting & fault isolation",
      "Written diagnosis and corrective plan",
    ],
    targetEquipment: [
      "Facility Engineers",
      "Operations Teams",
      "Maintenance Techs",
    ],
    metric: { value: "Certified", label: "Audit Aligned" },
    link: "/training-troubleshooting",
  },
];

export const CAPABILITIES = [
  "Load Bank Testing",
  "Repairs & Servicing",
  "Load Bank Upgrades",
  "Training & Troubleshooting",
];

export const WHY_TEST_WATT: FeatureItemData[] = [
  {
    title: "Confirms Real Capacity",
    body: "The nameplate is just what the manufacturer says the unit can do. Running it at 100% load for a sustained period is the only way to be sure it will cope when it matters.",
  },
  {
    title: "Stops Wet-Stacking",
    body: "A diesel generator that runs at low load collects unburnt fuel in the exhaust. A full-load test burns it off before it can damage the engine.",
  },
  {
    title: "Finds What Idle Hides",
    body: "Voltage sag, frequency drift, governor hunting and cooling problems only appear once the unit is carrying load. We pick them up during the test, not afterwards.",
  },
  {
    title: "Meets Compliance Requirements",
    body: "NFPA 110, NETA, the Uptime Institute and most OEM warranties call for regular load testing. We give you the paperwork auditors ask for.",
  },
  {
    title: "No Utility Involved",
    body: "We bring our own load banks with us, so we don't draw on your supply. There's no load shedding to plan and nothing depends on building power.",
  },
  {
    title: "Protects the Warranty",
    body: "Many manufacturers make documented testing a condition of the warranty. Calibrated equipment and a formal report meet that condition.",
  },
];

export const TESTING_PROCESS: StepData[] = [
  {
    step: "01",
    title: "Connect",
    desc: "We cable the load banks to the generator output or UPS bus, and complete calibration and safety checks before anything is switched on.",
  },
  {
    step: "02",
    title: "Load",
    desc: "We add load in steps, usually 25%, 50%, 75% and 100% of nameplate, following the test programme agreed beforehand.",
  },
  {
    step: "03",
    title: "Monitor",
    desc: "Throughout the test we watch voltage, current, frequency, power factor, engine temperature, oil pressure and exhaust readings.",
  },
  {
    step: "04",
    title: "Record",
    desc: "Every reading is logged at set intervals with a timestamp, and the instrument uncertainty is noted next to it.",
  },
  {
    step: "05",
    title: "Report",
    desc: "Within the agreed timescale you receive a written report with tabulated results, trend charts, a compliance statement and any recommendations.",
  },
];

export const ENQUIRY_SERVICES = [
  "Load bank testing",
  "Repairs & servicing",
  "Load bank upgrade",
  "Training & troubleshooting"
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

export const LOAD_BANK_STANDARDS: ComplianceStandardRow[] = [
  {
    code: "NFPA 110 — Monthly Test (8.4.2)",
    appliesTo: "Emergency and standby power systems",
    requirement:
      "Diesel sets run at least 30 continuous minutes at no less than 30% of nameplate kW, or at the manufacturer's minimum exhaust temperature",
    howWeMeet:
      "We add resistive steps on top of your building load so the generator reaches the 30% threshold for the full 30 minutes",
  },
  {
    code: "NFPA 110 — Annual Supplemental (8.4.2.3)",
    appliesTo: "Diesel sets that didn't reach 30% during monthly tests",
    requirement:
      "30 minutes at no less than 50% of nameplate kW, then 60 minutes at no less than 75%, run continuously for 1.5 hours",
    howWeMeet:
      "We hold each step for its full time, logging readings throughout, and don't count warm-up or cool-down in the test time",
  },
  {
    code: "NFPA 110 — 36-Month Test (8.4.9)",
    appliesTo: "Level 1 systems",
    requirement:
      "At least 4 continuous hours at no less than 30% of nameplate kW, or the minimum exhaust temperature",
    howWeMeet:
      "We run the full 4 hours on the load bank. When scheduled together, the annual 50% and 75% steps can be built into the same run",
  },
  {
    code: "NFPA 110 — Installation Acceptance (7.13)",
    appliesTo: "New or modified systems",
    requirement:
      "A cold-start test on building load, a cool-down of at least 5 minutes, then a 2-hour full-load test at 100% of nameplate kW less site derating, witnessed by the AHJ",
    howWeMeet:
      "We supply the load bank capacity to make up the difference between building load and 100%, and prepare the records the AHJ asks for",
  },
  {
    code: "NFPA 99",
    appliesTo: "Hospitals and other healthcare facilities",
    requirement:
      "Points to NFPA 110 for generator testing. Monthly tests happen 12 times a year, 20 to 40 days apart",
    howWeMeet:
      "We schedule and document to the NFPA 110 profiles and keep the interval dates on the report",
  },
  {
    code: "The Joint Commission EC.02.05.07 / CMS K-tag K918",
    appliesTo: "Accredited and Medicare/Medicaid hospitals",
    requirement:
      "Monthly 30-minute loaded tests at 30% or more, the 1.5-hour annual test when monthly tests fall short, a 4-hour test every 36 months, and a retest after any failed test",
    howWeMeet:
      "Our report layout follows what surveyors ask to see: dates, run times, load levels and readings, with failures and retests recorded",
  },
  {
    code: "NFPA 111",
    appliesTo: "Stored emergency power (UPS and battery systems)",
    requirement:
      "Level 1 systems get an annual full-load test for 60% of the full duration of their class",
    howWeMeet:
      "We connect an AC or DC resistive load bank to the UPS or battery output and time the run against the class duration",
  },
  {
    code: "NFPA 70 (NEC) Article 700",
    appliesTo: "Emergency systems",
    requirement:
      "The AHJ conducts or witnesses a test of the complete system at installation, followed by periodic testing",
    howWeMeet: "Our acceptance and periodic test records are written for AHJ review",
  },
  {
    code: "ISO 8528-5 and 8528-6",
    appliesTo: "Generator performance and factory or site acceptance",
    requirement:
      "Methods for load tests and limits for voltage and frequency dip, rise and recovery, grouped into classes G1 to G4",
    howWeMeet: "Used for our block load and transient testing",
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

export const LOAD_BANK_TEST_PROFILES: TestProfileRow[] = [
  { test: "Monthly supplement", load: "30% or more", duration: "30 min" },
  {
    test: "Annual supplemental",
    load: "50%, then 75%",
    duration: "30 min + 60 min (1.5 h continuous)",
  },
  { test: "36-month (Level 1)", load: "30% or more", duration: "4 h continuous" },
  { test: "Installation acceptance", load: "100% less derating", duration: "2 h" },
];

export const ISO_TRANSIENT_LIMITS: IsoLimitRow[] = [
  { limit: "Maximum frequency dip", g1: "−15%", g2: "−10%", g3: "−7%" },
  { limit: "Maximum frequency rise", g1: "+18%", g2: "+12%", g3: "+10%" },
  { limit: "Frequency recovery time", g1: "10 s", g2: "5 s", g3: "3 s" },
  { limit: "Maximum voltage dip", g1: "−25%", g2: "−20%", g3: "−15%" },
  { limit: "Maximum voltage rise", g1: "+35%", g2: "+25%", g3: "+20%" },
  { limit: "Voltage recovery time", g1: "10 s", g2: "6 s", g3: "4 s" },
];

export const RESPONSE_TIMES = [
  { label: "Sales enquiries", value: "Within 1 business day" },
  { label: "Technical support", value: "Same business day" },
  { label: "Emergency callout", value: "Contact support directly" },
];


/* --------------------------------------------------------------------------
   TRAINING & TROUBLESHOOTING DATA
   -------------------------------------------------------------------------- */

export type TrainingCourse = {
  title: string;
  description: string;
  modules: string[];
  audience: string;
};

export const TRAINING_COURSES: TrainingCourse[] = [
  {
    title: "Operational training",
    description:
      "This is for the people who connect and run load tests. By the end, operators should be able to set up a test, apply load safely, watch the right readings, and shut the unit down properly.",
    modules: [
      "Electrical safety, PPE and safe work practices under NFPA 70E",
      "How your load bank works: resistive and reactive loads, kW, kVA and power factor",
      "Reading generator and UPS nameplate ratings to choose the right test load",
      "Cable sizing, connections and checking phase rotation before load goes on",
      "Starting the cooling fans and confirming airflow before any load is applied",
      "Manual step loading and running automatic test profiles from the controller or software",
      "Watching voltage, frequency, current and kW during the test, and knowing when to stop",
      "Recording results for tests required under NFPA 110 and by your local authority having jurisdiction",
      "Removing load, running the cool-down, and disconnecting safely",
    ],
    audience: "Technicians, facility and data center operators, and rental fleet staff.",
  },
  {
    title: "Maintenance training",
    description:
      "A load bank that sits unused for months can fail on the day you need it. This course teaches your maintenance staff the routine checks that keep a unit ready, and how to spot wear before it becomes a failure.",
    modules: [
      "Visual inspection of elements, wiring, contactors, fuses and terminals",
      "Finding loose or overheated connections and re-torquing to specification",
      "Resistance checks on load elements and insulation resistance testing",
      "Cleaning air intakes, exhausts and element chambers",
      "Blower motor checks: fan rotation and motor current",
      "Function tests for airflow switches, over-temperature sensors and emergency stops",
      "Checking metering accuracy and when to recalibrate",
      "Inspecting power cables, connectors and control leads",
      "Setting maintenance intervals and keeping service records",
    ],
    audience:
      "In-house maintenance teams and electrical technicians responsible for owned equipment.",
  },
  {
    title: "Troubleshooting training",
    description:
      "Technicians learn a step-by-step way to find faults, using the schematics and meters they already have, and then practice on real fault scenarios.",
    modules: [
      "Reading load bank schematics and following the control logic",
      "Separating control circuit faults from power circuit faults",
      "Lockout/tagout for both main power and control power, which can stay live after the main supply is isolated",
      "Diagnosing load that won't apply or reads low, failed load steps and phase imbalance",
      "Diagnosing over-temperature trips, airflow faults and blower failures",
      "Controller error messages, communication faults and metering problems",
      "Deciding when a part can be repaired and when it must be replaced",
    ],
    audience: "Experienced technicians and service engineers who handle faults in the field.",
  },
  {
    title: "On-site start-up training",
    description:
      "When a new or refurbished load bank arrives, we commission it at your site and train your team. Your staff see the unit set up correctly the first time and learn the procedure while the technician is still there.",
    modules: [
      "Receiving inspection and checking for shipping damage",
      "Positioning the unit with safe clearance around the hot air exhaust",
      "Connecting the supply under test and the external blower and control supply",
      "Verifying phase rotation and fan direction at first power-up",
      "Testing each load step and confirming safety interlocks trip correctly",
      "Setting up the handheld controller, remote panel or PC software",
      "Linking multiple load banks for larger tests, where your system supports it",
      "Handover of operating notes and a record of the commissioning tests",
    ],
    audience:
      "New equipment owners, and sites commissioning generators, UPS systems or switchgear.",
  },
];
