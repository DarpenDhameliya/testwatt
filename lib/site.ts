export type AppRoute =
  | "/"
  | "/load-bank-testing"
  | "/repairs-servicing"
  | "/contact";

export const SITE_URL = "https://www.testwatt.com";
export const SITE_NAME = "Test Watt";

export const SALES_EMAIL = "Sales@TestWatt.com";
export const SUPPORT_EMAIL = "Support@TestWatt.com";

export const NAV_LINKS: { to: AppRoute; label: string }[] = [
  { to: "/", label: "Home" },
  { to: "/load-bank-testing", label: "Load Bank Testing" },
  { to: "/repairs-servicing", label: "Repairs & Servicing" },
  { to: "/contact", label: "Contact" },
];

export const FOOTER_SERVICES = [
  "Load Bank Testing",
  "Repairs & Servicing",
  "Spare Parts Supply",
  "Generator Upgrades",
  "Training & Troubleshooting",
  "Compliance Testing",
];
