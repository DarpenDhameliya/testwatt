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
      "Purely resistive load at unity power factor, which turns electrical energy directly into heat. This is the usual method for generator acceptance and maintenance testing under NFPA 110 and ISO 8528.",
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
      "Inductive and capacitive load with an adjustable power factor. You need it to test UPS systems and generators that supply motors, and to see how the AVR responds when the power factor changes.",
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
      "Resistive and reactive load applied at the same time, so the test looks like your facility's real demand. We can set any mix of kW, kVAR and kVA to match what the protected site actually draws.",
  },
];

export const LOAD_TEST_ADVANTAGES: FeatureItemData[] = [
  {
    title: "Proves Output Under Real Load",
    body: "The nameplate is only the manufacturer's claim. We measure the kW and kVA the unit actually sustains and give you the readings.",
  },
  {
    title: "Catches Voltage & Frequency Problems",
    body: "Governor hunting, AVR drift and voltage sag rarely appear at idle. Step-load testing makes them show up so we can record them.",
  },
  {
    title: "Prevents Wet-Stacking",
    body: "Diesel engines that run lightly loaded or idle collect unburnt fuel residue. Regular full-load runs burn it off and help the engine last.",
  },
  {
    title: "Tests the Whole Transfer, Not Just the Generator",
    body: "We check sensing, changeover timing, load pick-up and retransfer, so you see the full sequence from start to finish.",
  },
  {
    title: "Produces a Report You Can Hand to an Auditor",
    body: "Each test finishes with a written report containing the data tables, trend analysis, a compliance statement and the engineer's sign-off.",
  },
  {
    title: "No Disruption to Your Supply",
    body: "Our load banks are portable, so we bring them to site and connect to your output. There's no shutdown and no load shedding to arrange.",
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
    title: "Keeps Test Results Accurate",
    body: "Worn resistance elements or instrumentation that's drifted out of calibration will give you bad data. Scheduled inspection keeps the numbers trustworthy.",
  },
  {
    title: "Extends Equipment Life",
    body: "Load banks take a beating — heat, electrical stress, constant cycling. Regular inspection and parts replacement stops that turning into a failure.",
  },
  {
    title: "Avoids Downtime You Didn't Plan For",
    body: "A load bank failing right before a scheduled test causes delays and compliance headaches. Preventive maintenance is what stops that happening.",
  },
  {
    title: "Protects the Manufacturer Warranty",
    body: "Most OEM warranties require scheduled maintenance by a competent party. Our service records are the evidence you'd need for a claim.",
  },
  {
    title: "Backs Up Your Compliance Paperwork",
    body: "Auditors sometimes check whether the test equipment itself was maintained and calibrated. It's easy to overlook — our records cover it.",
  },
  {
    title: "Costs Less Than the Alternative",
    body: "Scheduled maintenance is cheaper than an emergency repair, and it avoids the knock-on cost of a rescheduled test.",
  },
];

export const TROUBLESHOOTING_STEPS: StepData[] = [
  {
    step: "01",
    title: "Initial Assessment",
    desc: "We visit the site and survey the equipment. We review its history and the reported problem, then run diagnostics before we change anything.",
  },
  {
    step: "02",
    title: "Structured Diagnosis",
    desc: "We isolate faults using a documented process. Parts are never swapped on a hunch, and each replacement is backed by test evidence.",
  },
  {
    step: "03",
    title: "Correction & Verification",
    desc: "We fit parts with a known source, then test after each repair to confirm the fault has actually gone.",
  },
  {
    step: "04",
    title: "Knowledge Transfer",
    desc: "We talk your team through what we found and what we changed, and leave a written summary with the service record.",
  },
];

export const MODERNISATION_OPTIONS: [string, string][] = [
  ["Digital metering retrofit", "Remote monitoring integration"],
  ["SCADA / BMS connectivity", "Data logging upgrade"],
  ["Control panel refurbishment", "Load step sequence reprogramming"],
  ["Cooling system upgrades", "Resistance element replacement"],
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
    tagline: "Replace the toggle switches with controls you can rely on",
    description:
      "We turn manual load banks into automated ones. You get programmable step ramps, safety interlocks that abort the test automatically, and a touchscreen in place of a panel full of switches.",
    benefits: [
      "Reduces operator mistakes during complex step tests",
      "Automatic ramp-up, soak and ramp-down",
      "Emergency stop and multi-point temperature monitoring included",
    ],
    keySpecs: ["Siemens / Schneider PLC hardware", "7\" or 10\" IP65 HMI Touchscreen", "0.1 kW step precision resolution"],
  },
  {
    id: "scada-telemetry",
    title: "Remote SCADA, Modbus & Cloud Telemetry",
    tagline: "Read the numbers without standing next to the exhaust",
    description:
      "We connect your load bank to a BMS, a SCADA network or a cloud logger. You can watch voltage, current, kW, kVAR, frequency and exhaust temperature live, and a PDF certificate is produced for you automatically.",
    benefits: [
      "Readings logged in real time at sub-second intervals",
      "Audit-ready PDF reports created on site",
      "Run the test from a control room or a vehicle instead of beside the unit",
    ],
    keySpecs: ["Modbus TCP/IP & RTU interfaces", "Ethernet / Wi-Fi / 4G Cellular options", "Sub-second CSV and PDF reporting"],
  },
  {
    id: "reactive-expansion",
    title: "Reactive (kVAR) & Variable Power Factor Expansion",
    tagline: "Turn a resistive-only bank into a full power-factor test unit",
    description:
      "We fit inductive and capacitive elements to an existing resistive load bank, so it can test at the power factor your equipment really runs at. You don't have to buy a new unit.",
    benefits: [
      "Loads the alternator fully, including saturation and heating, which resistive load alone can't do",
      "Power factor adjustable from 0.4 lagging to unity",
      "Usually required for data centre and hospital commissioning",
    ],
    keySpecs: ["Adjustable inductive iron-core chokes", "Capacitor banks with harmonic detuning", "Unified resistive-reactive digital control"],
  },
  {
    id: "cooling-airflow",
    title: "Blower & Thermal Management Overhaul",
    tagline: "Stop the nuisance trips before they wreck your schedule",
    description:
      "Tired fans and worn temperature sensors often cause false over-temperature trips. We replace them with direct-drive fans, VFD speed control and calibrated sensors in several zones.",
    benefits: [
      "Rated to run in 55°C ambient without tripping",
      "Variable fan speed makes the unit quieter at light load",
      "Helps prevent resistor oxidation and hotspot damage",
    ],
    keySpecs: ["High-static direct-drive fan assemblies", "Multi-point RTD / thermocouple arrays", "VFD modulated airflow control"],
  },
  {
    id: "multi-voltage",
    title: "Multi-Voltage Tap & Dual-Frequency Conversions",
    tagline: "One load bank for every voltage you test",
    description:
      "We rewire the resistor groups and add voltage selector switches or transformer taps. One unit then covers 208V, 400V, 480V and 600V, and works with both 50Hz and 60Hz equipment.",
    benefits: [
      "Gets more use out of the fleet you already own",
      "One unit can replace several that were bought for different voltages",
      "Full rated kW output at every voltage setting",
    ],
    keySpecs: ["208V / 400V / 480V / 600V selector link bars", "50Hz & 60Hz compatible fan motors", "Automatic voltage sensing interlocks"],
  },
];

export const UPGRADE_COMPARISON = [
  {
    feature: "Load Control Method",
    legacy: "Manual toggle switches, coarse 25kW–50kW steps",
    upgraded: "Automated digital PLC, 0.1kW resolution with presets",
  },
  {
    feature: "Data Capture & Logging",
    legacy: "Analog gauges read by hand and written on a clipboard",
    upgraded: "High-speed digital logging with waveform capture",
  },
  {
    feature: "Report Generation",
    legacy: "Readings typed into a spreadsheet hours or days later",
    upgraded: "One-click audit report with digital sign-off",
  },
  {
    feature: "Operator Safety",
    legacy: "Operator standing beside the high-voltage exhaust duct",
    upgraded: "Wireless or remote control up to 300m away",
  },
  {
    feature: "Protection & Interlocks",
    legacy: "Basic thermal switch, single fan airflow vane",
    upgraded: "Multi-point RTDs, phase loss detection, auto-ramp abort",
  },
  {
    feature: "Capital Investment",
    legacy: "Full replacement cost for a new unit",
    upgraded: "Up to 60% cheaper than buying new",
  },
];

export const UPGRADE_STEPS: StepData[] = [
  {
    step: "01",
    title: "Engineering Audit & Fleet Survey",
    desc: "We inspect the structure, resistors and wiring of your current units to see what can realistically be done.",
  },
  {
    step: "02",
    title: "Electrical CAD & Software Design",
    desc: "Our designers prepare the schematics, panel layout and PLC logic around the way you run your tests.",
  },
  {
    step: "03",
    title: "Workshop Retrofit & FAT Testing",
    desc: "We fit new enclosures, PLCs, busbars and contactors, then run the unit at full load in our workshop before it leaves.",
  },
  {
    step: "04",
    title: "On-Site Commissioning & Operator Training",
    desc: "We install the upgrade on your fleet, verify every telemetry calibration and train your operators on the new interface.",
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
      "Explains the standards, safety rules and reporting involved in load testing under NFPA 110, ISO 8528 and NETA ATS/MTS. It combines classroom sessions with hands-on work on a live rig.",
    modules: [
      "Standards deep-dive: NFPA 110 Level 1/2, ISO 8528, and healthcare mandates",
      "Load bank sizing, cable ampacity calculation, and grounding safety",
      "Step-load testing protocols: 25%, 50%, 75%, 100%, and 110% overload",
      "Dynamic transient testing: block loading, frequency drop, voltage recovery",
      "Building compliant, audit-ready reports and reading pass/fail criteria",
    ],
    outcomes: [
      "Qualified to carry out NFPA 110 load testing",
      "Able to recognise generator faults that appear at full load",
      "Knows how to avoid hazards that damage equipment",
    ],
  },
  {
    code: "TW-TRN-202",
    title: "High-Voltage Electrical Safety & Arc-Flash Hazard Mitigation",
    audience: "Electricians, Test Technicians, Operations Supervisors",
    duration: "1 Day (8 Hours)",
    format: "Hands-on Workshop & Scenario Simulations",
    description:
      "Safety training for anyone who works with temporary electrical connections, medium-voltage load banks, high-amp cam-locks and emergency trip systems.",
    modules: [
      "Arc-flash hazard analysis and PPE boundary selection",
      "Safe cable deployment, phase rotation verification, and torque specifications",
      "Emergency shutdown hierarchy and thermal runaway containment",
      "Lockout / Tagout (LOTO) protocols for temporary testing connections",
    ],
    outcomes: [
      "Follows arc-flash procedures without prompting",
      "Can carry out an emergency shutdown quickly and in the correct order",
      "Meets OSHA and NFPA 70E requirements",
    ],
  },
  {
    code: "TW-TRN-303",
    title: "In-House Load Bank Fleet Maintenance & Calibration",
    audience: "Apparatus Technicians, Rental Fleet Mechanics, In-House Engineers",
    duration: "2 Days (16 Hours)",
    format: "Depot Hands-On Teardown & Calibration Labs",
    description:
      "Practical maintenance and calibration training. It covers resistance testing, contactor refurbishment and instrument calibration, which is what your team needs to keep a load bank fleet reliable in-house.",
    modules: [
      "Micro-ohmmeter resistance measurement and element health assessment",
      "High-potential (Hipot) and insulation resistance testing (Megger)",
      "Contactor inspection, contact wear measurement, and coil testing",
      "Calibrating digital transducers and troubleshooting PLC interlocks",
    ],
    outcomes: [
      "Less dependence on outside service contractors",
      "Equipment lasts longer and is cheaper to maintain",
      "Calibration records that stand up in an audit",
    ],
  },
];

export const TROUBLESHOOTING_AREAS: FeatureItemData[] = [
  {
    title: "Governor Hunting & Speed Instability",
    body: "When engine speed swings under load, the cause is usually a sticking fuel rack, actuator deadband or a poorly tuned PID loop. We work out which one it is.",
  },
  {
    title: "Automatic Voltage Regulator (AVR) Drift & Droop",
    body: "If you see voltage sag, hunting, or gensets that won't share reactive load in parallel, we retune the excitation loop and check the rotating diode assemblies.",
  },
  {
    title: "Harmonic Distortion & Non-Linear Load Resonance",
    body: "UPS inverters and variable frequency drives can trip for no clear reason. We use power analysers to find the harmonic amplification behind it.",
  },
  {
    title: "Nuisance Thermal Cutout & Airflow Depletion",
    body: "A load bank that trips on over-temperature in hot weather usually has a duct pressure problem, a slipping blower or a sensor that has drifted. We check all three.",
  },
  {
    title: "ATS Timing & Transfer Sequence Failures",
    body: "When a transfer doesn't go cleanly in an emergency, we examine contact travel time, transition delay and phase sync until we locate the fault.",
  },
  {
    title: "Insulation Breakdown & Ground Fault Trips",
    body: "An earth leakage trip that only appears under load often points to damaged cable or a cracked standoff insulator. We test step by step until we find it.",
  },
];

export const DIAGNOSTIC_METHODOLOGY: StepData[] = [
  {
    step: "01",
    title: "Site Survey & Symptom Triangulation",
    desc: "Before we connect our multi-channel power analysers, we read through the operating logs, the maintenance history and the site's electrical layout.",
  },
  {
    step: "02",
    title: "Controlled Step-Load Stress Testing",
    desc: "Using our own calibrated mobile load banks, we add load in small steps to reproduce the fault safely while we watch closely.",
  },
  {
    step: "03",
    title: "Root-Cause Electrical Isolation",
    desc: "We use transient waveforms, thermal imaging and control signal analysis to find the real cause, so the fix isn't just hiding the symptom.",
  },
  {
    step: "04",
    title: "Corrective Action Plan & Verification",
    desc: "You receive a written diagnosis with repair instructions down to component level. After the repair we load test again to confirm it worked.",
  },
];
