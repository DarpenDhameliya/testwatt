import Image from "next/image";
import Link from "next/link";
import { FOOTER_SERVICES, NAV_LINKS, SALES_EMAIL, SUPPORT_EMAIL } from "@/lib/site";

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="site-footer__grid">
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
              Specialist load bank testing, servicing and upgrades for generators, UPS
              systems and switchgear worldwide.
            </p>
          </div>

          <div>
            <div className="site-footer__col-heading">Navigation</div>
            <nav aria-label="Footer navigation">
              {NAV_LINKS.map((link) => (
                <Link key={link.to} href={link.to} className="site-footer__link">
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <div className="site-footer__col-heading">Services</div>
            <ul className="site-footer__list" aria-label="Services">
              {FOOTER_SERVICES.map((service) => (
                <li key={service} className="site-footer__list-item">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="site-footer__col-heading">Contact</div>
            <div className="site-footer__contact">
              <div>
                <div className="site-footer__contact-label">Sales</div>
                <a href={`mailto:${SALES_EMAIL}`} className="site-footer__contact-link">
                  {SALES_EMAIL}
                </a>
              </div>
              <div>
                <div className="site-footer__contact-label">Support</div>
                <a href={`mailto:${SUPPORT_EMAIL}`} className="site-footer__contact-link">
                  {SUPPORT_EMAIL}
                </a>
              </div>
              <Link
                href="/contact"
                className="btn btn-secondary btn-sm"
                style={{ marginTop: 8, width: "fit-content" }}
              >
                Get a Quote
              </Link>
            </div>
          </div>
        </div>

        <div className="site-footer__bottom">
          <p className="site-footer__copy">
            © {new Date().getFullYear()} Test Watt. All rights reserved.
          </p>
          <p className="site-footer__copy">
            Specialists in critical power testing and maintenance
          </p>
        </div>
      </div>
    </footer>
  );
}
