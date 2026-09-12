import type { Metadata } from "next";
import { Outfit, Plus_Jakarta_Sans } from "next/font/google";
import ScrollToTop from "@/components/scroll-to-top";
import SiteFooter from "@/components/site-footer";
import SiteHeader from "@/components/site-header";
import { SALES_EMAIL, SITE_NAME, SITE_URL, SUPPORT_EMAIL } from "@/lib/site";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Test Watt | Load Bank Testing & Critical Power Services",
  description:
    "Test Watt delivers load bank testing, generator testing, UPS testing, and critical power services to verify performance at full nameplate rating.",
  keywords:
    "load bank testing, generator testing, UPS testing, switchgear testing, critical power services, full-load testing",
  robots: "index,follow",
  alternates: { canonical: "/" },
  // Icons come from the app/icon.png and app/apple-icon.png file conventions.
  openGraph: {
    type: "website",
    siteName: SITE_NAME,
    url: SITE_URL,
    title: "Test Watt | Load Bank Testing & Critical Power Services",
    description:
      "Independent load bank testing and critical power services for generators, UPS systems and switchgear.",
    images: ["/og-image.svg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Test Watt | Load Bank Testing & Critical Power Services",
    description:
      "Independent load bank testing and critical power services for generators, UPS systems and switchgear.",
    images: ["/og-image.svg"],
  },
  other: { "theme-color": "#0F2748" },
};

const ORGANIZATION_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${SITE_URL}#organization`,
  name: SITE_NAME,
  url: SITE_URL,
  logo: `${SITE_URL}/og-image.svg`,
  email: SALES_EMAIL,
  sameAs: [
    "https://www.linkedin.com",
    "https://www.facebook.com",
    "https://twitter.com",
  ],
  contactPoint: [
    {
      "@type": "ContactPoint",
      contactType: "sales",
      email: SALES_EMAIL,
      availableLanguage: ["en"],
    },
    {
      "@type": "ContactPoint",
      contactType: "support",
      email: SUPPORT_EMAIL,
      availableLanguage: ["en"],
    },
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${outfit.variable} ${jakarta.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(ORGANIZATION_SCHEMA) }}
        />
        <a href="#main-content" className="skip-link">
          Skip to content
        </a>
        <div className="app-shell">
          <SiteHeader />
          <main id="main-content">{children}</main>
          <SiteFooter />
        </div>
        <ScrollToTop />
      </body>
    </html>
  );
}
