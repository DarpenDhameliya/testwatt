import type { Metadata } from "next";
import UpcomingModels, { type UpcomingModelsVariant } from "@/components/sections/home/upcoming-models";

export const metadata: Metadata = {
  title: "Coming soon options | TestWatt",
  robots: "noindex,nofollow",
};

const OPTIONS: { variant: UpcomingModelsVariant; name: string }[] = [
  { variant: "tiles", name: "Option A · light grey band with model tiles (on the home page now)" },
  { variant: "cards", name: "Option B · light cards" },
  { variant: "roadmap", name: "Option C · range roadmap, P100 to P5000" },
  { variant: "banner", name: "Option D · compact banner" },
  { variant: "teaser", name: "Option E · animated teaser tiles with product pictures" },
];

export default function ComingSoonPreviewPage() {
  return (
    <div className="footer-preview">
      <div className="container">
        <h1 className="footer-preview__title">Coming soon section options</h1>
      </div>

      {OPTIONS.map((option) => (
        <section key={option.variant} aria-label={option.name}>
          <p className="footer-preview__label">{option.name}</p>
          <UpcomingModels variant={option.variant} />
        </section>
      ))}
    </div>
  );
}
