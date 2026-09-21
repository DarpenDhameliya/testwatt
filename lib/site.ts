export type AppRoute =
  | "/"
  | "/load-bank-testing"
  | "/repairs-servicing"
  | "/spare-parts-supply"
  | "/load-bank-upgrades"
  | "/training-troubleshooting"
  | "/contact";

export const SITE_URL = "https://www.testwatt.com";
export const SITE_NAME = "TestWatt";

export const SALES_EMAIL = "Sales@TestWatt.com";
export const SUPPORT_EMAIL = "Support@TestWatt.com";

export const NAV_LINKS: { to: AppRoute; label: string }[] = [
  { to: "/", label: "Home" },
  { to: "/load-bank-testing", label: "Load Bank Testing" },
  { to: "/repairs-servicing", label: "Repairs & Servicing" },
  { to: "/spare-parts-supply", label: "Spare Parts Supply" },
  { to: "/load-bank-upgrades", label: "Load Bank Upgrades" },
  { to: "/training-troubleshooting", label: "Training & Troubleshooting" },
  { to: "/contact", label: "Contact" },
];
export const NAV_LINKS_FOOTER: { to: AppRoute; label: string }[] = [
  { to: "/load-bank-testing", label: "Terms & condition" },
  { to: "/repairs-servicing", label: "Privecy policy " }
];

export const FOOTER_SERVICES = [
  "Load Bank Testing",
  "Repairs & Servicing",
  "Spare Parts Supply",
  "Generator Upgrades",
  "Training & Troubleshooting",
  "Compliance Testing",
];
