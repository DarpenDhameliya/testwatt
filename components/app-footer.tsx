"use client";

import { usePathname } from "next/navigation";
import SiteFooter, { SiteFooterSimple } from "./site-footer";

const FULL_FOOTER_PATHS = ["/contact", "/terms", "/warranty", "/privacy"];

/** Renders the fuller SiteFooter on /contact, /terms, /warranty and /privacy, and the compact one everywhere else. */
export default function AppFooter() {
  const pathname = usePathname();

  if (FULL_FOOTER_PATHS.some((path) => pathname.startsWith(path))) {
    return <SiteFooter />;
  }

  return <SiteFooterSimple />;
}
