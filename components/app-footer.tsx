"use client";

import { usePathname } from "next/navigation";
import SiteFooter, { SiteFooterSimple } from "./site-footer";

/** Pages whose footer shows only the phone tile, without the Sales and Support tiles. */
const PHONE_ONLY_PATHS = ["/contact", "/warranty", "/privacy", "/terms"];

/** Renders the compact footer on the landing page, and the fuller SiteFooter everywhere else. */
export default function AppFooter() {
  const pathname = usePathname();

  if (pathname === "/") {
    return <SiteFooterSimple />;
  }

  return <SiteFooter phoneOnly={PHONE_ONLY_PATHS.some((path) => pathname.startsWith(path))} />;
}
