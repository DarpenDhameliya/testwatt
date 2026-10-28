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
  citation?: string;
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
  "Training & troubleshooting",
  "Technical Support"
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
    code: "NFPA 110",
    citation: "monthly test (8.4.2)",
    appliesTo: "Emergency and standby power systems",
    requirement:
      "Diesel sets run at least 30 continuous minutes, at no less than 30% of nameplate kW or at the manufacturer's recommended minimum exhaust temperature",
    howWeMeet:
      "We add resistive steps on top of your building load so the generator reaches the 30% threshold for the full 30 minutes",
  },
  {
    code: "NFPA 110",
    citation: "annual supplemental test (8.4.2.3)",
    appliesTo: "Diesel sets that did not reach 30% during monthly tests",
    requirement:
      "30 minutes at no less than 50% of nameplate kW, then 60 minutes at no less than 75%, run continuously for 1.5 hours",
    howWeMeet:
      "We hold each step for the full time, logging readings throughout, and do not count warm up or cool down in the test time",
  },
  {
    code: "NFPA 110",
    citation: "36 months test (8.4.9)",
    appliesTo: "Level 1 systems",
    requirement:
      "At least 4 continuous hours at no less than 30% of nameplate kW or the minimum exhaust temperature",
    howWeMeet:
      "We run the full 4 hours on the load bank. When scheduled together, the annual 50% and 75% steps can be built into the same 4-hour run",
  },
  {
    code: "NFPA 110",
    citation: "installation acceptance (7.13)",
    appliesTo: "New or modified systems",
    requirement:
      "A cold-start test on building load, a cool down of at least 5 minutes, then a 2 hour full load test at 100% of nameplate kW less site derating. The AHJ is notified and witnesses",
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
    code: "The Joint Commission EC.02.05.07 and CMS (K-tag K918)",
    appliesTo: "Accredited and Medicare/Medicaid hospitals",
    requirement:
      "Monthly 30 minute loaded tests at 30% or more, the 1.5 hour annual test when monthly tests fall short, a 4 hour test every 36 months, and a retest after any failed test",
    howWeMeet:
      "Our report layout follows what surveyors ask to see: dates, run times, load levels and readings, with failures and retests recorded",
  },
  {
    code: "NFPA 111",
    appliesTo: "Stored emergency power (UPS and battery systems)",
    requirement:
      "Level 1 systems get an annual full load test for 60% of the full duration of their class",
    howWeMeet:
      "We connect an AC or DC resistive load bank to the UPS or battery output and time the run against the class duration",
  },
  {
    code: "NFPA 70 (NEC) Article 700",
    appliesTo: "Emergency systems",
    requirement:
      "The AHJ conducts or witnesses a test of the complete system at installation, followed by periodic testing",
    howWeMeet:
      "Our acceptance and periodic test records are written for AHJ review",
  },
  {
    code: "ISO 8528-5 and 8528-6",
    appliesTo: "Generator performance and factory or site acceptance",
    requirement:
      "Methods for load tests and limits for voltage and frequency dip, rise and recovery, grouped into classes G1 to G4",
    howWeMeet:
      "Used for block load and transient testing (sections 8 and 9)",
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
  modules?: string[];
  table?: { head: [string, string]; rows: [string, string][] };
  audience?: string;
};

export const TRAINING_COURSES: TrainingCourse[] = [
  {
    title: "Operational training",
    description:
      "This training is for the people who actually connect and run the load tests. By the end of it operators should be able to set up a test, apply the load safely, monitor the correct readings and shut the unit down correctly.",
    modules: [
      "Electrical safety, PPE and safe work practices as per **NFPA 70E**.",
      "How your load bank works: resistive and reactive loads, kW, kVA and power factor.",
      "Reading the generator nameplate ratings to select the appropriate test load.",
      "Cable sizing, connections and checking phase rotation prior to load going on.",
      "Start the cooling fans and check airflow prior to applying any load.",
      "Manual step loading and running of the automatic test profiles from the controller or software.",
      "Monitor the voltage, frequency, current and kW during the test and know when to stop.",
      "Recording results of tests required as per **NFPA 110** and as required by your local authority having jurisdiction.",
      "Remove the load, run the cool down and disconnect safely.",
    ],
    audience: "technicians, facility & data center operators and rental fleet staff.",
  },
  {
    title: "Maintenance training",
    description:
      "A load bank that's been sitting around for months can fail on the very day you need it. This training will help your maintenance staff with the routine checks that keep a unit ready and how to identify wear before it becomes a failure.",
    modules: [
      "Visual inspection of the elements, wiring, contactors, fuses and terminals.",
      "Finding any loose or overheated connections and retorquing to specification.",
      "Resistance checks on load elements and resistance testing, Ceramic.",
      "Cleaning of air intakes and exhausts.",
      "Blower motor checks: bearings, fan rotation, motor current and drive.",
      "Function tests for the airflow switches, the over temperature sensors and the emergency stops.",
      "Checking metering accuracy and when to recalibrate.",
      "Inspecting the power cables, connectors and control leads.",
      "Setting the maintenance intervals and maintaining the service records.",
    ],
    audience:
      "in house maintenance teams and electrical technicians looking after the company's own equipment.",
  },
  {
    title: "Troubleshooting training",
    description:
      "Technicians learn a step by step fault finding method using the schematics and meters they already have, then practice on real fault scenarios.",
    modules: [
      "Read the load bank schematics and follow the control logic.",
      "Separating control circuit faults from power circuit faults.",
      "Lockout/tagout on both the main power and the control power (which can remain alive after the main supply has been isolated).",
      "Safely using multimeters, clamp meters and insulation testers on load bank circuits.",
      "Diagnosing loads that won't apply or read low, failed load steps and phase imbalance.",
      "Diagnosing over temperature trips, airflow faults and blower faults.",
      "Controller error messages, comm faults and metering problems.",
      "Deciding when a component can be repaired and when it has to be replaced.",
    ],
    audience: "experienced field technicians and service engineers dealing with field faults.",
  },
  {
    title: "On-site start-up training",
    description:
      "When a new or refurbished load bank arrives, we commission it on site and train your team the same day. Your team sees it properly set up the first time and learns the procedure while the technician is still there.",
    modules: [
      "Inspection and checking for transport damage.",
      "Position the unit with safe clearance around the hot air exhaust.",
      "Connect the supply under test to the control supply.",
      "Verify phase rotation and fan direction on first power up.",
      "Test each load step and verify that the safety interlocks trip as required.",
      "Setting up the remote controller, the panel or the PC software.",
      "Linking up multiple load banks for larger tests (where your system allows it).",
      "Handover of the operating notes and a record of the commissioning tests.",
    ],
    audience: "New equipment owners and sites commissioning generators and switchgear.",
  },
  {
    title: "Troubleshooting support",
    description:
      "If your load bank trips won't hold load or gives you readings you don't trust, our engineers can help. We'll start by discussing the symptoms with you and in many cases, we can identify faults over the phone or via a video call. If we can't identify it remotely, we'll come to site, diagnose the fault and sort it out. You'll always get a written report after each call-out detailing what failed, why it failed and anything else we found that required attention.",
    table: {
      head: ["Symptom", "What we check"],
      rows: [
        ["Load bank won't apply full load or kW reads low", "Failed elements, blown fuses, contactors, loose internal wiring, controller settings"],
        ["Readings unstable or don't match the generator's meters", "Current transformers, voltage sensing, meter calibration"],
        ["Over temperature trip or unit shuts down mid test", "Blocked intake or exhaust, blower motor, fan rotation, temperature sensors"],
        ["Fan won't start or airflow fault on startup", "Fan supply, motor overloads, airflow switch, phase rotation"],
        ["A load step won't switch in or out", "Contactor coil, control voltage, interlocks, controller outputs"],
        ["Phase imbalance under load", "Open elements on one phase, connection faults, fuses"],
        ["Handheld, remote or software can't control the unit", "Communication cables, network settings, Modbus configuration, firmware"],
        ["Burning smell, discoloration or arcing", "Overheated terminals, damaged insulation, failed elements"],
      ],
    },
  },
];
