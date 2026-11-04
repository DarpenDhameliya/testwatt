"use client";

import { usePathname } from "next/navigation";
import SiteFooter from "./site-footer";

/** Pages whose footer shows only the phone tile, without the Sales and Support tiles. */
const PHONE_ONLY_PATHS = ["/contact", "/warranty", "/privacy", "/terms"];

/** Renders the same SiteFooter on every page, including the landing page. */
export default function AppFooter() {
  const pathname = usePathname();

  // The footer preview page renders its own footers side by side.
  if (pathname === "/footer-preview") {
    return null;
  }

  return <SiteFooter phoneOnly={PHONE_ONLY_PATHS.some((path) => pathname.startsWith(path))} />;
}
