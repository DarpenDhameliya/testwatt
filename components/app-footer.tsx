"use client";

import { usePathname } from "next/navigation";
import SiteFooter, { SiteFooterSimple } from "./site-footer";

/** Renders the fuller SiteFooter on /contact, and the compact one everywhere else. */
export default function AppFooter() {
  const pathname = usePathname();

  if (pathname.startsWith("/contact")) {
    return <SiteFooter />;
  }

  return <SiteFooterSimple />;
}
