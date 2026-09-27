import Image from "next/image";
import Link from "next/link";
import { FOOTER_SERVICES, NAV_LINKS, NAV_LINKS_FOOTER, SALES_EMAIL, SUPPORT_EMAIL } from "@/lib/site";
import FooterCta from "./footer-cta";

function ArrowRight() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      style={{ marginLeft: 6 }}
    >
      <path
        d="M5 12h14M13 6l6 6-6 6"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

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

/**
 * Compact footer: brand, the two mailboxes as tiles and a contact CTA on top;
 * legal line and page links in a slimmer strip below.
 * SiteFooter (below) is kept for later use.
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
        </div>
      </div>

      <div className="footer-simple__bar">
        <div className="container footer-simple__bar-inner">
          <p className="footer-simple__copy">
            © {new Date().getFullYear()} TestWatt LLC. Load bank testing &amp; critical power
            services.
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

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container site-footer__main">
        <div className="site-footer__grid">
          {/* Brand Column */}
          <div className="site-footer__brand">
            <Link href="/" className="site-footer__logo" aria-label="TestWatt — home">
              <Image
                src="/images/testwatt-logo-trimmed.png"
                alt="TestWatt Logo"
                width={1032}
                height={639}
                className="site-footer__logo-img"
              />
            </Link>
            <p className="site-footer__tagline">
              Load bank testing, servicing and compliance reports for generators,
              UPS systems and switchgear, anywhere in the world.
            </p>
            <div className="site-footer__standards-pills">
              <span className="site-footer__pill">NFPA 110</span>
              <span className="site-footer__pill">NETA ATS</span>
              <span className="site-footer__pill">ISO 8528</span>
            </div>
          </div>

          {/* Navigation Column */}
          <div className="site-footer__col">
            <div className="site-footer__col-heading">Navigation</div>
            <nav aria-label="Footer navigation" className="site-footer__nav-list">
              {NAV_LINKS.map((link) => (
                <Link key={link.label} href={link.to} className="site-footer__link">
                  <span className="site-footer__link-bullet" aria-hidden="true" />
                  <span>{link.label}</span>
                </Link>
              ))}
            </nav>
          </div>

          {/* Services Column */}
          <div className="site-footer__col">
            <div className="site-footer__col-heading">Services</div>
            <ul className="site-footer__list" aria-label="Services">
              {FOOTER_SERVICES.map((service) => (
                <li key={service} className="site-footer__list-item">
                  <Link
                    href={
                      service.toLowerCase().includes("repair")
                        ? "/repairs-servicing"
                        : service.toLowerCase().includes("contact")
                          ? "/contact"
                          : "/load-bank-testing"
                    }
                    className="site-footer__link"
                  >
                    <span className="site-footer__link-bullet" aria-hidden="true" />
                    <span>{service}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & CTA Column */}
          <div className="site-footer__col site-footer__col--contact">
            <div className="site-footer__col-heading">Get in Touch</div>
            <div className="site-footer__contact">
              <div className="site-footer__contact-item">
                <span className="site-footer__contact-label">Sales Inquiries</span>
                <a href={`mailto:${SALES_EMAIL}`} className="site-footer__contact-link">
                  <MailIcon />
                  <span>{SALES_EMAIL}</span>
                </a>
              </div>
              <div className="site-footer__contact-item">
                <span className="site-footer__contact-label">Engineering Support</span>
                <a href={`mailto:${SUPPORT_EMAIL}`} className="site-footer__contact-link">
                  <MailIcon />
                  <span>{SUPPORT_EMAIL}</span>
                </a>
              </div>

              <div className="site-footer__action-wrap">
                <Link href="/contact" className="btn btn-primary btn-sm site-footer__cta-btn">
                  <span>Get a Quote</span>
                  <ArrowRight />
                </Link>
                {/* <span className="site-footer__response-note">
                  <span className="site-footer__dot site-footer__dot--emerald" aria-hidden="true" />
                  <span>Responses within 2 hours</span>
                </span> */}
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom Strip */}
        <div className="site-footer__bottom">
          <p className="site-footer__copy">
            © {new Date().getFullYear()} TestWatt LLC. All rights reserved.
          </p>
          <div className="site-footer__bottom-links">
            <Link href="/load-bank-testing" className="site-footer__bottom-link">
              Capabilities
            </Link>
            <span className="site-footer__bottom-sep" aria-hidden="true">·</span>
            <Link href="/repairs-servicing" className="site-footer__bottom-link">
              Servicing
            </Link>
            <span className="site-footer__bottom-sep" aria-hidden="true">·</span>
            <Link href="/contact" className="site-footer__bottom-link">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
