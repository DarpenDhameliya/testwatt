import Image from "next/image";
import Link from "next/link";
import { FOOTER_SERVICES, NAV_LINKS, SALES_EMAIL, SUPPORT_EMAIL } from "@/lib/site";

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

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container site-footer__main">
        <div className="site-footer__grid">
          {/* Brand Column */}
          <div className="site-footer__brand">
            <Link href="/" className="site-footer__logo" aria-label="Test Watt — home">
              <Image
                src="/images/testwatt-logo-trimmed.png"
                alt="Test Watt Logo"
                width={1032}
                height={639}
                className="site-footer__logo-img"
              />
            </Link>
            <p className="site-footer__tagline">
              Specialist load bank testing, servicing and certified compliance for
              generators, UPS systems and switchgear worldwide.
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
                <Link key={link.to} href={link.to} className="site-footer__link">
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
            © {new Date().getFullYear()} Test Watt Ltd. All rights reserved.
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
