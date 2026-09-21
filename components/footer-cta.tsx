"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

/** Pages where the footer call to action would be redundant. */
const HIDDEN_ON = ["/contact"];

export default function FooterCta() {
  const pathname = usePathname();
  if (HIDDEN_ON.some((path) => pathname.startsWith(path))) return null;

  return (
    <div className="container footer-simple__cta">
      <div className="footer-simple__cta-text">
        <span className="footer-simple__kicker">Get In Touch</span>
        <h2 className="footer-simple__heading">
          Ready to test at <span>full nameplate load?</span>
        </h2>
        <p className="footer-simple__cta-body">
          Tell us what equipment needs testing, servicing or upgrading. Our engineers will
          respond with a clear proposal.
        </p>
      </div>
      <div className="footer-simple__cta-actions">
        <Link href="/contact" className="btn btn-primary btn-lg">
          Request a Free Proposal
        </Link>
        <Link href="/load-bank-testing" className="btn btn-outline-light btn-lg">
          Explore Services
        </Link>
      </div>
    </div>
  );
}
