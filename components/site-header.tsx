"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { NAV_LINKS, SALES_EMAIL, SUPPORT_EMAIL } from "@/lib/site";

const MARK = "/images/testwatt-logo-trimmed.png";

/** Rotating proof points in the top strip — each states a real capability. */
const CREDENTIALS = [
  "Worldwide on-site testing · Full-load proof at nameplate rating",
  "Resistive · Reactive · Hybrid load banks to 100% capacity",
  "Tested to NFPA 110, ISO 8528 & NETA ATS/MTS",
  "Certified, audit-ready reports with engineer sign-off",
];

const ROTATE_MS = 4200;

function isActive(pathname: string, to: string) {
  return to === "/" ? pathname === "/" : pathname.startsWith(to);
}

function RotatingCredential() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;

    const id = window.setInterval(
      () => setIndex((i) => (i + 1) % CREDENTIALS.length),
      ROTATE_MS,
    );
    return () => window.clearInterval(id);
  }, []);

  return (
    // Decorative marketing copy — the same claims appear in the page content,
    // so it is kept out of the accessibility tree rather than announced on a loop.
    <span className="site-topbar__note" aria-hidden="true">
      <span className="site-topbar__dot" />
      <span key={index} className="site-topbar__text">
        {CREDENTIALS[index]}
      </span>
    </span>
  );
}

function ArrowRight() {
  return (
    <svg
      className="site-header__cta-arrow"
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
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

function MobileNav({
  id,
  open,
  onClose,
  pathname,
}: {
  id: string;
  open: boolean;
  onClose: () => void;
  pathname: string;
}) {
  if (!open) return null;

  return (
    <div
      id={id}
      className="mobile-nav"
      role="dialog"
      aria-label="Navigation menu"
      aria-modal="true"
    >
      <nav aria-label="Mobile navigation">
        {NAV_LINKS.map((link) => (
          <Link
            key={link.label}
            href={link.to}
            onClick={onClose}
            className={`mobile-nav__link${isActive(pathname, link.to) ? " mobile-nav__link--active" : ""
              }`}
          >
            {link.label}
          </Link>
        ))}
      </nav>

      <div className="mobile-nav__actions">
        <Link
          href="/contact"
          onClick={onClose}
          className="btn btn-primary btn-md btn-full site-header__cta"
        >
          Get a Quote
          <ArrowRight />
        </Link>
      </div>

      <div className="mobile-nav__contact">
        <div className="mobile-nav__contact-label">Direct Contact</div>
        <a href={`mailto:${SALES_EMAIL}`} className="mobile-nav__contact-link">
          <span className="mobile-nav__contact-dot" aria-hidden="true" />
          {SALES_EMAIL}
        </a>
        <a href={`mailto:${SUPPORT_EMAIL}`} className="mobile-nav__contact-link">
          <span className="mobile-nav__contact-dot" aria-hidden="true" />
          {SUPPORT_EMAIL}
        </a>
      </div>
    </div>
  );
}

export default function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      {/* Full-width strip: stays at the top of the document and scrolls away. */}
      {/* <div className="site-topbar">
        <div className="site-topbar__inner container">
          <RotatingCredential />
          <span className="site-topbar__links">
            <a href={`mailto:${SALES_EMAIL}`} className="site-topbar__link">
              {SALES_EMAIL}
            </a>
            <span className="site-topbar__sep" aria-hidden="true" />
            <a href={`mailto:${SUPPORT_EMAIL}`} className="site-topbar__link">
              {SUPPORT_EMAIL}
            </a>
          </span>
        </div>
      </div> */}

      {/* Floating pill: sticky, and pulled out of flow so it overlays the hero. */}
      <header className={`site-header${scrolled ? " site-header--scrolled" : ""}`}>
        <div className="site-header__inner container">
          <Link href="/" className="site-header__logo" aria-label="TestWatt — home">
            <Image
              src={MARK}
              alt=""
              width={1032}
              height={639}
              priority
              className="site-header__mark"
            />
          </Link>

          <nav className="site-header__nav" aria-label="Main navigation">
            {NAV_LINKS.map((link, index) => (
              <Link
                key={link.label}
                href={link.to}
                aria-current={isActive(pathname, link.to) ? "page" : undefined}
                style={{ animationDelay: `${80 + index * 70}ms` }}
                className={`site-header__nav-link${isActive(pathname, link.to) ? " site-header__nav-link--active" : ""
                  }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* <div className="site-header__actions">
            <Link href="/contact" className="btn btn-primary btn-sm site-header__cta">
              Get a Quote
              <ArrowRight />
            </Link>
          </div> */}

          <button
            className="site-header__hamburger"
            onClick={() => setOpen(!open)}
            aria-label={open ? "Close navigation" : "Open navigation"}
            aria-expanded={open}
            aria-controls="mobile-nav"
          >
            <span
              className="site-header__bar"
              style={{ transform: open ? "translateY(7px) rotate(45deg)" : undefined }}
            />
            <span
              className="site-header__bar"
              style={{ transform: open ? "scaleX(0)" : undefined, opacity: open ? 0 : 1 }}
            />
            <span
              className="site-header__bar"
              style={{ transform: open ? "translateY(-7px) rotate(-45deg)" : undefined }}
            />
          </button>
        </div>

        <MobileNav
          id="mobile-nav"
          open={open}
          onClose={() => setOpen(false)}
          pathname={pathname}
        />
      </header>
    </>
  );
}
