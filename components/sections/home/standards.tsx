"use client";

import { useState } from "react";
import { SectionHeading, StandardsCards, StandardsCardVariant } from "@/components/ui";
import { STANDARDS_HOME } from "@/lib/content";

export default function Standards() {
  const [variant, setVariant] = useState<StandardsCardVariant>("dossier");

  return (
    <section className="section section--white" aria-labelledby="standards-heading">
      <div className="container">
        <div className="standards-section-header">
          <SectionHeading
            kicker="Standards & Compliance"
            heading={
              <span id="standards-heading">We test to the standards that matter</span>
            }
            className="section-heading--mb-sm"
          />

          <div
            className="standards-variant-switcher"
            role="tablist"
            aria-label="Standards Card Design Options"
          >
            <span className="standards-variant-label">Card Style:</span>
            <button
              type="button"
              className={`standards-variant-btn ${variant === "dossier" ? "is-active" : ""}`}
              onClick={() => setVariant("dossier")}
            >
              1. Certified Spec (Recommended)
            </button>
            <button
              type="button"
              className={`standards-variant-btn ${variant === "tech" ? "is-active" : ""}`}
              onClick={() => setVariant("tech")}
            >
              2. Tech Tag
            </button>
            <button
              type="button"
              className={`standards-variant-btn ${variant === "minimal" ? "is-active" : ""}`}
              onClick={() => setVariant("minimal")}
            >
              3. Modern Minimal
            </button>
          </div>
        </div>

        <StandardsCards standards={STANDARDS_HOME} variant={variant} />
      </div>
    </section>
  );
}
