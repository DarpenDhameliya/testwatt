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

export const SERVICES: Service[] = [
  {
    number: "01",
    title: "Load Bank Testing",
    tagline: "Resistive, Reactive & Hybrid Full-Load Proofing",
    badge: "Core Service",
    category: "testing",
    description:
      "Resistive, reactive and hybrid load bank testing at full nameplate rating. We verify that generators, UPS systems and switchgear can deliver their rated output under sustained, controlled load — not just at idle or partial capacity.",
    highlights: [
      "Resistive, reactive & hybrid power factor testing",
      "Full step-load testing (25%, 50%, 75%, 100% capacity)",
      "Certified test reports to NFPA 110, ISO 8528 & NETA",
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
    tagline: "Preventive Fleet Care & Emergency Response",
    badge: "Field Engineering",
    category: "servicing",
    description:
      "Scheduled and emergency servicing of load banks and associated power equipment. Preventive maintenance, fault diagnosis and component replacement by engineers who understand load testing equipment inside and out.",
    highlights: [
      "Calibrated sensor & instrument tuning",
      "Thermal diagnostics & element inspection",
      "Preventive servicing & warranty preservation",
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
    title: "Spare Parts Supply",
    tagline: "OEM-Grade Certified Replacement Components",
    badge: "Documented Provenance",
    category: "modernisation",
    description:
      "OEM-grade replacement parts for load banks, resistive elements, control systems and auxiliary components. Fast turnaround with documented provenance — no substitute parts, no guesswork.",
    highlights: [
      "Resistive grids & high-temp alloy elements",
      "Heavy-duty contactors, relays & HRC fuses",
      "Digital meters, thermal switches & cables",
    ],
    targetEquipment: [
      "Resistor Banks",
      "Contactors",
      "Fan Motors",
      "Protection Relays",
    ],
    metric: { value: "OEM", label: "Traceable Parts" },
    link: "/spare-parts-supply",
  },
  {
    number: "04",
    title: "Load Bank Upgrades",
    tagline: "Digital Controls & SCADA Telemetry Retrofits",
    badge: "Asset Life Extension",
    category: "modernisation",
    description:
      "Control system upgrades, digital metering retrofits, remote monitoring integration and capacity expansions. Extend the life and capability of existing load bank equipment without full replacement.",
    highlights: [
      "Digital PLC retrofits & automated step sequencing",
      "Remote SCADA, Modbus & cloud data logging",
      "Capacity expansions & variable power factor",
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
    number: "05",
    title: "Training & Troubleshooting",
    tagline: "Root-Cause Diagnosis & Operator Safety Certification",
    badge: "Specialist Advisory",
    category: "servicing",
    description:
      "Structured training programmes for in-house operations and maintenance teams. On-site troubleshooting for persistent faults, nuisance trips and unexplained failures across generator, UPS and switchgear installations.",
    highlights: [
      "In-house operator safety & test procedures",
      "AVR drift, governor hunting & fault isolation",
      "Formal engineering diagnosis & corrective plans",
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
  "Load bank testing",
  "Repairs & servicing",
  "Spare parts supply",
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

/* --------------------------------------------------------------------------
   SPARE PARTS SUPPLY DATA
   -------------------------------------------------------------------------- */

export type DetailedPartCategory = {
  id: string;
  category: string;
  leadTime: string;
  description: string;
  specs: string[];
  items: { name: string; partCode: string; description: string }[];
};

export const DETAILED_PARTS_CATALOG: DetailedPartCategory[] = [
  {
    id: "resistors",
    category: "Resistance Elements & Grids",
    leadTime: "Immediate Stock / 24h",
    description:
      "High-grade nickel-chromium alloy resistive elements designed for extreme thermal cycles without resistance drift or thermal degradation.",
    specs: ["AISI 304 / Incoloy alloy", "Rated to 800°C continuous", "Tolerances within ±2%"],
    items: [
      {
        name: "Expanded Metal Mesh Resistor Banks",
        partCode: "TW-RES-804",
        description: "Heavy-duty continuous grid element modules for 50kW–250kW resistive load blocks.",
      },
      {
        name: "Helical Wire Wound Resistor Modules",
        partCode: "TW-RES-312",
        description: "Precision ceramic-core wirewound resistors for low-kW trimming steps and fine resolution.",
      },
      {
        name: "Fluid-Cooled Resistor Cartridges",
        partCode: "TW-RES-950",
        description: "Immersion-rated liquid cooled heating elements for ultra-compact high-density load banks.",
      },
      {
        name: "Ceramic Insulator Stand-Off Posts",
        partCode: "TW-INS-024",
        description: "Steatite high-temperature dielectric standoff insulators rated to 5kV AC flashover.",
      },
    ],
  },
  {
    id: "controls",
    category: "Control Systems & Automation",
    leadTime: "In Stock / 48h",
    description:
      "Digital load controllers, PLC modules, automated step sequencers, and safety trip relays with calibrated millisecond response times.",
    specs: ["Modbus RTU / TCP compatible", "Fail-safe relay interlocking", "Class 0.2 power metering"],
    items: [
      {
        name: "Load Step Sequencing PLC Controller",
        partCode: "TW-CTRL-PLC2",
        description: "Programmable logic controller configured with multi-tier fail-safe trip algorithms.",
      },
      {
        name: "Digital Touchscreen HMI Display Panel",
        partCode: "TW-HMI-700",
        description: "7-inch IP65 industrial high-contrast color touch console with real-time waveform graphing.",
      },
      {
        name: "Digital Power Quality Transducer",
        partCode: "TW-MTR-300",
        description: "True-RMS 3-phase transducer measuring V, I, kW, kVAR, kVA, PF, and total harmonic distortion.",
      },
      {
        name: "Handheld Remote Test Console",
        partCode: "TW-RMT-100",
        description: "Ruggedized tethered remote control pendant with emergency stop and step-load rocker switches.",
      },
    ],
  },
  {
    id: "switchgear",
    category: "Switchgear & Circuit Protection",
    leadTime: "Immediate Stock / 24h",
    description:
      "Heavy-duty definite-purpose contactors, thermal-magnetic breakers, and high-rupturing-capacity fuses engineered for continuous load switching.",
    specs: ["AC-3 / AC-4 continuous duty", "Silver-cadmium oxide contacts", "100kA breaking capacity fuses"],
    items: [
      {
        name: "High-Amperage Load Switching Contactors",
        partCode: "TW-CON-630",
        description: "3-pole contactors rated up to 630A continuous at 690V with auxiliary status feedback contacts.",
      },
      {
        name: "High Rupturing Capacity (HRC) Fuses",
        partCode: "TW-FUS-500",
        description: "BS88 and DIN standard ultra-rapid semiconductor and motor protection fuse links.",
      },
      {
        name: "Air Circuit Breakers & Moulded Cases",
        partCode: "TW-BRK-120",
        description: "Adjustable electronic trip units with shunt trips and instantaneous short-circuit protection.",
      },
      {
        name: "Heavy Copper Terminal Busbars & Shunts",
        partCode: "TW-BUS-800",
        description: "Tin-plated electrolytic copper busbars rated for heavy continuous current density.",
      },
    ],
  },
  {
    id: "cooling",
    category: "Cooling & Auxiliary Systems",
    leadTime: "In Stock / 24h",
    description:
      "High-velocity forced-air blower assemblies, thermal switches, pressure differential sensors, and air-velocity interlocks.",
    specs: ["Class H high-temp motor insulation", "Airflow proving differential switches", "IP55 weather protection"],
    items: [
      {
        name: "High-CFM Axial Forced-Draft Blowers",
        partCode: "TW-FAN-450",
        description: "Direct-drive balanced aluminum impeller fans rated for high static backpressures.",
      },
      {
        name: "Bimetallic High-Temperature Cutouts",
        partCode: "TW-THM-180",
        description: "Manual and auto-reset snap-action thermal limit switches calibrated to 150°C–220°C.",
      },
      {
        name: "Differential Airflow Pressure Proving Switches",
        partCode: "TW-PRS-015",
        description: "Diaphragm sensors ensuring element de-energisation upon immediate fan failure or intake block.",
      },
      {
        name: "Cam-Lock Connectors & Flexible Test Cables",
        partCode: "TW-CBL-400",
        description: "Single-core flexible neoprene rubber power cables with single-pin 400A Cam-Lock connectors.",
      },
    ],
  },
];

export const PARTS_QUALITY_POINTS: FeatureItemData[] = [
  {
    title: "Documented OEM Provenance",
    body: "Every component is dispatched with manufacturer test certificates, material batch traceability, and formal compliance documentation. No unverified substitutes.",
  },
  {
    title: "Thermal Stability & Calibrated Resistance",
    body: "Resistor grids are fabricated from premium nickel-chrome alloys ensuring negligible temperature coefficient of resistance (TCR), preserving test accuracy across long burn-in runs.",
  },
  {
    title: "100% Pre-Dispatch Quality Bench Testing",
    body: "Critical switches, contactors, and digital meters undergo dielectric flashover testing and functional timing verification in our workshop prior to packing.",
  },
  {
    title: "Preserves Factory Warranty & Compliance",
    body: "Using factory-approved OEM parts guarantees your load bank continues to meet manufacturer safety guidelines and satisfies auditor review for NFPA and ISO testing.",
  },
  {
    title: "Express 24/48-Hour Global Dispatch",
    body: "We maintain stock of high-wear items for immediate emergency courier dispatch to minimise testing fleet downtime during urgent commissioning windows.",
  },
  {
    title: "Engineering Installation Support",
    body: "All replacement modules include wiring schematics, torque specifications, and direct telephone access to our senior field engineers.",
  },
];

export const PARTS_ORDER_STEPS: StepData[] = [
  {
    step: "01",
    title: "Identify Equipment & Part",
    desc: "Send us your equipment make, model, serial number, or existing part photo. Our parts engineers identify the exact factory component or superseded revision.",
  },
  {
    step: "02",
    title: "Verify Fitment & Specifications",
    desc: "We confirm electrical ratings, mounting dimensions, coil voltages, and thermal clearances to eliminate field incompatibility.",
  },
  {
    step: "03",
    title: "Express Packing & Dispatch",
    desc: "Parts are shock-packed, certified, and dispatched via prioritized road or express air freight with end-to-end tracking.",
  },
  {
    step: "04",
    title: "Installation & Commissioning Support",
    desc: "Receive comprehensive wiring diagrams, calibration guidance, and engineer sign-off assistance for rapid return to service.",
  },
];

/* --------------------------------------------------------------------------
   LOAD BANK UPGRADES DATA
   -------------------------------------------------------------------------- */

export type UpgradeSolution = {
  id: string;
  title: string;
  tagline: string;
  description: string;
  benefits: string[];
  keySpecs: string[];
};

export const UPGRADE_SOLUTIONS: UpgradeSolution[] = [
  {
    id: "plc-automation",
    title: "Digital PLC & Touchscreen HMI Retrofits",
    tagline: "Replace fragile analog toggle switches with rugged automation",
    description:
      "Transform manual load banks into automated testing systems. Our PLC retrofits introduce programmable multi-step load ramps, auto-abort safety interlocks, and crisp touchscreen operation.",
    benefits: [
      "Eliminates operator human error during complex step testing",
      "Automated ramp-up, soak time, and ramp-down sequencing",
      "Integrated emergency stop and multi-point thermal monitoring",
    ],
    keySpecs: ["Siemens / Schneider PLC hardware", "7\" or 10\" IP65 HMI Touchscreen", "0.1 kW step precision resolution"],
  },
  {
    id: "scada-telemetry",
    title: "Remote SCADA, Modbus & Cloud Telemetry",
    tagline: "Live telemetry, real-time analytics, and instant audit reporting",
    description:
      "Connect your load bank into building management systems (BMS), industrial SCADA networks, or cloud data loggers. Stream real-time V, I, kW, kVAR, Hz, and exhaust temperatures with automated PDF certification.",
    benefits: [
      "Real-time synchronized data logging at sub-second intervals",
      "Automated audit-ready PDF test certificates generated on-site",
      "Safe standoff distance — operate load bank from control room or vehicle",
    ],
    keySpecs: ["Modbus TCP/IP & RTU interfaces", "Ethernet / Wi-Fi / 4G Cellular options", "Sub-second CSV and PDF reporting"],
  },
  {
    id: "reactive-expansion",
    title: "Reactive (kVAR) & Variable Power Factor Expansion",
    tagline: "Convert pure resistive units into complete 0.8 PF proofing systems",
    description:
      "Upgrade existing resistive-only load banks by integrating modular inductive and capacitive reactive elements. Test generators and UPS systems at their true rated power factor without buying a new test bank.",
    benefits: [
      "Enables full alternator magnetic saturation and heating tests",
      "Variable power factor tuning from 0.4 lagging to unity (1.0)",
      "Essential for mission-critical data center and hospital commissioning",
    ],
    keySpecs: ["Adjustable inductive iron-core chokes", "Capacitor banks with harmonic detuning", "Unified resistive-reactive digital control"],
  },
  {
    id: "cooling-airflow",
    title: "Blower & Thermal Management Overhaul",
    tagline: "High-temperature resilience and silent variable-speed cooling",
    description:
      "Modernize aging cooling systems with high-efficiency direct-drive fans, VFD speed controllers, and calibrated multi-zone duct thermal sensors to eliminate nuisance high-temp trips in hot ambient environments.",
    benefits: [
      "Operates reliably in ambient temperatures up to 55°C",
      "Variable fan speed reduces acoustic noise during light loading",
      "Prevents resistor element oxidation and thermal hotspot damage",
    ],
    keySpecs: ["High-static direct-drive fan assemblies", "Multi-point RTD / thermocouple arrays", "VFD modulated airflow control"],
  },
  {
    id: "multi-voltage",
    title: "Multi-Voltage Tap & Dual-Frequency Conversions",
    tagline: "Test across 208V, 400V, 480V and 600V with a single asset",
    description:
      "Rewire internal resistor grouping and install heavy-duty voltage selector switches or transformer taps. Enable a single load bank to service international voltage standards and 50Hz/60Hz machinery without external gear.",
    benefits: [
      "Maximises utilization rate of your existing equipment fleet",
      "Eliminates the need to mobilise separate load banks for different voltages",
      "Maintains full rated kW capacity across selected voltage configurations",
    ],
    keySpecs: ["208V / 400V / 480V / 600V selector link bars", "50Hz & 60Hz compatible fan motors", "Automatic voltage sensing interlocks"],
  },
];

export const UPGRADE_COMPARISON = [
  {
    feature: "Load Control Method",
    legacy: "Manual toggle switches with coarse 25kW–50kW steps",
    upgraded: "Automated digital PLC with 0.1kW fine resolution and presets",
  },
  {
    feature: "Data Capture & Logging",
    legacy: "Manual clipboard reading of analog needle gauges",
    upgraded: "High-speed digital logging with real-time waveform capture",
  },
  {
    feature: "Report Generation",
    legacy: "Manual spreadsheet transcription hours or days later",
    upgraded: "Instant one-click audit report with digital engineer sign-off",
  },
  {
    feature: "Operator Safety",
    legacy: "Operator standing beside high-voltage exhaust duct",
    upgraded: "Wireless or remote control up to 300m away in control vehicle",
  },
  {
    feature: "Protection & Interlocks",
    legacy: "Basic thermal switch and single fan airflow vane",
    upgraded: "Multi-point RTDs, phase loss detection, and auto-ramp abort",
  },
  {
    feature: "Capital Investment",
    legacy: "Full replacement cost for new modern unit (100% Capex)",
    upgraded: "Saves up to 60% compared to purchasing new equipment",
  },
];

export const UPGRADE_STEPS: StepData[] = [
  {
    step: "01",
    title: "Engineering Audit & Fleet Survey",
    desc: "We inspect the structural integrity, resistor condition, and wiring infrastructure of your current equipment to define feasibility and upgrade scope.",
  },
  {
    step: "02",
    title: "Electrical CAD & Software Design",
    desc: "Our design team produces complete schematics, panel layout drawings, and custom PLC automation logic tailored to your testing protocols.",
  },
  {
    step: "03",
    title: "Workshop Retrofit & FAT Testing",
    desc: "New enclosures, PLCs, busbars, and contactors are assembled and tested under full electrical load in our controlled workshop facility.",
  },
  {
    step: "04",
    title: "On-Site Commissioning & Operator Training",
    desc: "We integrate the modernized asset into your fleet, verify all telemetry calibrations, and certify your operators on the new digital interface.",
  },
];

/* --------------------------------------------------------------------------
   TRAINING & TROUBLESHOOTING DATA
   -------------------------------------------------------------------------- */

export type TrainingCourse = {
  code: string;
  title: string;
  audience: string;
  duration: string;
  format: string;
  description: string;
  modules: string[];
  outcomes: string[];
};

export const TRAINING_COURSES: TrainingCourse[] = [
  {
    code: "TW-TRN-101",
    title: "Critical Power Load Testing & NFPA 110 Compliance",
    audience: "Facility Engineers, Commissioning Managers, Maintenance Teams",
    duration: "2 Days (16 Hours)",
    format: "Classroom Theory + Practical Live-Load Rig Demonstration",
    description:
      "A comprehensive curriculum covering the statutory standards, electrical safety, step-load execution, and report documentation mandated by NFPA 110, ISO 8528, and NETA ATS/MTS.",
    modules: [
      "Standards deep-dive: NFPA 110 Level 1/2, ISO 8528, and healthcare mandates",
      "Load bank sizing, cable ampacity calculation, and grounding safety",
      "Step-load testing protocols: 25%, 50%, 75%, 100%, and 110% overload",
      "Dynamic transient testing: Block loading, frequency drop, and voltage recovery",
      "Generating compliant, audit-ready reports and understanding pass/fail criteria",
    ],
    outcomes: [
      "Certified operator qualification for NFPA 110 testing",
      "Ability to identify generator deficiencies under full load",
      "Elimination of testing hazards and equipment damage risks",
    ],
  },
  {
    code: "TW-TRN-202",
    title: "High-Voltage Electrical Safety & Arc-Flash Hazard Mitigation",
    audience: "Electricians, Test Technicians, Operations Supervisors",
    duration: "1 Day (8 Hours)",
    format: "Hands-on Workshop & Scenario Simulations",
    description:
      "Focused safety training for technicians operating temporary electrical hookups, medium-voltage load banks, high-amperage Cam-Locks, and emergency trip systems.",
    modules: [
      "Arc-flash hazard analysis and PPE boundary selection",
      "Safe cable deployment, phase rotation verification, and torque specifications",
      "Emergency shutdown hierarchy and thermal runaway containment",
      "Lockout / Tagout (LOTO) protocols for temporary testing connections",
    ],
    outcomes: [
      "Zero-incident protocol adherence during high-amperage testing",
      "Rapid and coordinated emergency shutdown execution",
      "Certified compliance with OSHA and NFPA 70E guidelines",
    ],
  },
  {
    code: "TW-TRN-303",
    title: "In-House Load Bank Fleet Maintenance & Calibration",
    audience: "Apparatus Technicians, Rental Fleet Mechanics, In-House Engineers",
    duration: "2 Days (16 Hours)",
    format: "Depot Hands-On Teardown & Calibration Labs",
    description:
      "Master the preventative maintenance, resistance element testing, contactor refurbishment, and instrument calibration required to keep load test fleets reliable.",
    modules: [
      "Micro-ohmmeter resistance measurement and element health assessment",
      "High-potential (Hipot) and insulation resistance testing (Megger)",
      "Contactor inspection, contact wear measurement, and coil testing",
      "Calibrating digital transducers and troubleshooting PLC interlocks",
    ],
    outcomes: [
      "Reduced dependence on third-party service providers",
      "Longer asset lifespan and lower fleet maintenance costs",
      "Documented calibration validity for audit requirements",
    ],
  },
];

export const TROUBLESHOOTING_AREAS: FeatureItemData[] = [
  {
    title: "Governor Hunting & Speed Instability",
    body: "Oscillations in engine speed under load steps often trace to fuel rack binding, actuator deadband, or misconfigured PID speed controller loops. We isolate mechanical vs electronic causes.",
  },
  {
    title: "Automatic Voltage Regulator (AVR) Drift & Droop",
    body: "Voltage sag under load, voltage hunting, or failure to share reactive kVAR in parallel genset setups. We retune AVR excitation loops and verify rotating diode assemblies.",
  },
  {
    title: "Harmonic Distortion & Non-Linear Load Resonance",
    body: "Unexpected trips when testing UPS inverters or variable frequency drives. We deploy power analyzers to identify harmonic current amplification and resonance points.",
  },
  {
    title: "Nuisance Thermal Cutout & Airflow Depletion",
    body: "Load banks tripping on overtemperature during hot weather testing. We evaluate duct static pressure, blower motor slip, and sensor drift to restore reliable continuous cooling.",
  },
  {
    title: "ATS Timing & Transfer Sequence Failures",
    body: "Failure to transfer under emergency power conditions. We analyze contact travel timing, transition delays, and phase sync to ensure seamless building changeover.",
  },
  {
    title: "Insulation Breakdown & Ground Fault Trips",
    body: "Mysterious earth leakage trips when applying load. We perform systematic high-voltage insulation testing to pinpoint degraded cables or cracked ceramic standoffs.",
  },
];

export const DIAGNOSTIC_METHODOLOGY: StepData[] = [
  {
    step: "01",
    title: "Site Survey & Symptom Triangulation",
    desc: "We review operational logs, maintenance history, and site electrical topology before connecting synchronized multi-channel digital power analyzers.",
  },
  {
    step: "02",
    title: "Controlled Step-Load Stress Testing",
    desc: "By applying precise incremental loads with our calibrated mobile load banks, we recreate the fault conditions under safe, closely monitored parameters.",
  },
  {
    step: "03",
    title: "Root-Cause Electrical Isolation",
    desc: "We capture transient waveforms, thermal imaging profiles, and control signal harmonics to pinpoint the root mechanism rather than masking symptoms.",
  },
  {
    step: "04",
    title: "Corrective Action Plan & Verification",
    desc: "We provide an engineering diagnosis report with component-level repair instructions, followed by post-repair load testing to verify fault resolution.",
  },
];
