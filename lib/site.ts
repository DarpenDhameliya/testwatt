export type AppRoute =
  | "/"
  | "/load-bank-testing"
  | "/repairs-servicing"
  | "/load-bank-upgrades"
  | "/training-troubleshooting"
  | "/contact"
  | "/terms"
  | "/privacy"
  | "/warranty";

export const SITE_URL = "https://www.testwatt.com";
export const SITE_NAME = "TestWatt";

export const SALES_EMAIL = "Sales@TestWatt.com";
export const SUPPORT_EMAIL = "Support@TestWatt.com";
export const PHONE_NUMBER = "+1 (248) 770-4961";

export const NAV_LINKS: { to: AppRoute; label: string }[] = [
  { to: "/", label: "Home" },
  { to: "/load-bank-testing", label: "Load Bank Testing" },
  { to: "/repairs-servicing", label: "Repairs & Servicing" },
  { to: "/load-bank-upgrades", label: "Load Bank Upgrades" },
  { to: "/training-troubleshooting", label: "Training & Troubleshooting" },
  { to: "/contact", label: "Contact" },
];
export const NAV_LINKS_FOOTER: { to: AppRoute; label: string }[] = [
  { to: "/terms", label: "Terms & Conditions" },
  { to: "/privacy", label: "Privacy Policy" },
  { to: "/warranty", label: "Warranty" },
];

export const FOOTER_SERVICES = [
  "Load Bank Testing",
  "Repairs & Servicing",
  "Generator Upgrades",
  "Training & Troubleshooting",
  "Compliance Testing",
];
