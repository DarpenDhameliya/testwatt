import Image from "next/image";
import Link from "next/link";
import { NAV_LINKS_FOOTER, PHONE_NUMBER, SALES_EMAIL, SUPPORT_EMAIL } from "@/lib/site";

const ICON_PROPS = {
  width: 18,
  height: 18,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
} as const;

function MailIcon() {
  return (
    <svg {...ICON_PROPS}>
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg {...ICON_PROPS}>
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

/**
 * Alternative footer (option B, for client review): same content as the current
 * footer, restyled — centered logo, open contact row, navy legal strip.
 * Not wired into AppFooter; previewed at /footer-preview.
 */
export default function SiteFooterAlt({ variant = "centered" }: { variant?: "centered" | "split" }) {
  const phoneHref = `tel:${PHONE_NUMBER.replace(/[^+\d]/g, "")}`;

  return (
    <footer className={`footer-alt footer-alt--${variant}`}>
      <div className="container footer-alt__grid">
        <div className="footer-alt__brand">
          <Link href="/" aria-label="TestWatt — home">
            <Image
              src="/images/testwatt-logo-trimmed.png"
              alt="TestWatt Logo"
              width={1232}
              height={739}
              className="footer-alt__logo"
            />
          </Link>
        </div>


        <div className="footer-alt__col">
          <ul className="footer-alt__list footer-alt__list--contact">
            <li>
              <a href={`mailto:${SALES_EMAIL}`} className="footer-alt__contact">
                <span className="footer-alt__icon">
                  <MailIcon />
                </span>
                <span>
                  <span className="footer-alt__label">Sales</span>
                  <span className="footer-alt__value">{SALES_EMAIL}</span>
                </span>
              </a>
            </li>
            <li>
              <a href={`mailto:${SUPPORT_EMAIL}`} className="footer-alt__contact">
                <span className="footer-alt__icon">
                  <MailIcon />
                </span>
                <span>
                  <span className="footer-alt__label">Support</span>
                  <span className="footer-alt__value">{SUPPORT_EMAIL}</span>
                </span>
              </a>
            </li>
            <li>
              <a href={phoneHref} className="footer-alt__contact">
                <span className="footer-alt__icon">
                  <PhoneIcon />
                </span>
                <span>
                  <span className="footer-alt__label">Phone</span>
                  <span className="footer-alt__value">{PHONE_NUMBER}</span>
                </span>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-alt__bar">
        <div className="container footer-alt__bar-inner">
          <p className="footer-alt__copy">© {new Date().getFullYear()} TestWatt LLC</p>
          <nav aria-label="Legal" className="footer-alt__legal">
            {NAV_LINKS_FOOTER.map((link) => (
              <Link key={link.label} href={link.to} className="footer-alt__legal-link">
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
