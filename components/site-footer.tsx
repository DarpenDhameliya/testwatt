import Image from "next/image";
import Link from "next/link";
import { NAV_LINKS_FOOTER, PHONE_NUMBER, SALES_EMAIL, SUPPORT_EMAIL } from "@/lib/site";
import FooterCta from "./footer-cta";

function MailIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      style={{ flexShrink: 0 }}
    >
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      style={{ flexShrink: 0 }}
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

/**
 * Compact footer: brand, the two mailboxes as tiles and a contact CTA on top;
 * legal line and page links in a slimmer strip below.
 * Used on every page except /contact, which gets the fuller SiteFooter below.
 */
export function SiteFooterSimple() {
  return (
    <footer className="footer-simple">
      <span className="footer-simple__glow" aria-hidden="true" />

      {/* Site-wide call to action; hides itself on the contact page. */}
      <FooterCta />

      <div className="container footer-simple__main">
        <div className="footer-simple__brand">
          <Link href="/" className="footer-simple__logo" aria-label="TestWatt — home">
            <Image
              src="/images/testwatt-logo-trimmed.png"
              alt="TestWatt Logo"
              width={1032}
              height={639}
              className="footer-simple__logo-img"
            />
          </Link>
          <p className="footer-simple__tagline">
            Load bank testing &amp; critical power services.
          </p>
        </div>

        <div className="footer-simple__contact">
          <a href={`mailto:${SALES_EMAIL}`} className="footer-simple__tile">
            <span className="footer-simple__tile-icon">
              <MailIcon />
            </span>
            <span className="footer-simple__tile-text">
              <span className="footer-simple__label">Sales</span>
              <span className="footer-simple__value">{SALES_EMAIL}</span>
            </span>
          </a>
          <a href={`mailto:${SUPPORT_EMAIL}`} className="footer-simple__tile">
            <span className="footer-simple__tile-icon">
              <MailIcon />
            </span>
            <span className="footer-simple__tile-text">
              <span className="footer-simple__label">Support</span>
              <span className="footer-simple__value">{SUPPORT_EMAIL}</span>
            </span>
          </a>
          <a href={`tel:${PHONE_NUMBER.replace(/[^+\d]/g, "")}`} className="footer-simple__tile">
            <span className="footer-simple__tile-icon">
              <PhoneIcon />
            </span>
            <span className="footer-simple__tile-text">
              <span className="footer-simple__label">Phone</span>
              <span className="footer-simple__value">{PHONE_NUMBER}</span>
            </span>
          </a>
        </div>
      </div>

      <div className="footer-simple__bar">
        <div className="container footer-simple__bar-inner">
          <p className="footer-simple__copy">
            © {new Date().getFullYear()} TestWatt LLC
          </p>

          <nav aria-label="Footer" className="footer-simple__nav">
            {NAV_LINKS_FOOTER.map((link) => (
              <Link key={link.label} href={link.to} className="footer-simple__nav-link">
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}

/** Fuller 4-column footer, used only on the /contact page — see AppFooter. */
export default function SiteFooter() {
  return (
    <footer className="site-footer">
      {/* Brand + contact tiles, same look as the compact footer's top row */}
      <div className="container footer-simple__main">
        <div className="footer-simple__brand">
          <Link href="/" className="footer-simple__logo" aria-label="TestWatt — home">
            <Image
              src="/images/testwatt-logo-trimmed.png"
              alt="TestWatt Logo"
              width={1232}
              height={739}
              className="footer-simple__logo-img"
            />
          </Link>
          {/* <p className="footer-simple__tagline">
            Load bank testing &amp; critical power services.
          </p> */}
        </div>

        <div className="footer-simple__contact">
          {/* <a href={`mailto:${SALES_EMAIL}`} className="footer-simple__tile">
            <span className="footer-simple__tile-icon">
              <MailIcon />
            </span>
            <span className="footer-simple__tile-text">
              <span className="footer-simple__label">Sales</span>
              <span className="footer-simple__value">{SALES_EMAIL}</span>
            </span>
          </a>
          <a href={`mailto:${SUPPORT_EMAIL}`} className="footer-simple__tile">
            <span className="footer-simple__tile-icon">
              <MailIcon />
            </span>
            <span className="footer-simple__tile-text">
              <span className="footer-simple__label">Support</span>
              <span className="footer-simple__value">{SUPPORT_EMAIL}</span>
            </span>
          </a> */}
          <a href={`tel:${PHONE_NUMBER.replace(/[^+\d]/g, "")}`} className="footer-simple__tile">
            <span className="footer-simple__tile-icon">
              <PhoneIcon />
            </span>
            <span className="footer-simple__tile-text">
              <span className="footer-simple__label">Phone</span>
              <span className="footer-simple__value">{PHONE_NUMBER}</span>
            </span>
          </a>
        </div>
      </div>
      <div className="footer-simple__bar">
        <div className="container footer-simple__bar-inner">
          <p className="footer-simple__copy">
            © {new Date().getFullYear()} TestWatt LLC
          </p>

          <nav aria-label="Footer" className="footer-simple__nav">
            {NAV_LINKS_FOOTER.map((link) => (
              <Link key={link.label} href={link.to} className="footer-simple__nav-link">
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
