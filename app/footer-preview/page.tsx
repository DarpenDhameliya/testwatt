import type { Metadata } from "next";
import SiteFooter from "@/components/site-footer";
import SiteFooterAlt from "@/components/site-footer-alt";

export const metadata: Metadata = {
  title: "Footer options | TestWatt",
  robots: "noindex,nofollow",
};

export default function FooterPreviewPage() {
  return (
    <div className="footer-preview">
      <div className="container">
        <h1 className="footer-preview__title">Footer options</h1>
      </div>

      <section aria-label="Option A">
        <p className="footer-preview__label">Option A · current footer</p>
        <SiteFooter />
      </section>

      <section aria-label="Option B">
        <p className="footer-preview__label">Option B · new footer</p>
        <SiteFooterAlt />
      </section>

      <section aria-label="Option C">
        <p className="footer-preview__label">Option C · new footer</p>
        <SiteFooterAlt variant="split" />
      </section>
    </div>
  );
}
