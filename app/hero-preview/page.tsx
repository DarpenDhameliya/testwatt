import type { Metadata } from "next";
import Hero from "@/components/sections/repairs-servicing/hero";

export const metadata: Metadata = {
  title: "Hero options | TestWatt",
  robots: "noindex,nofollow",
};

const OPTIONS = [
  { id: "a", name: "Option A · current navy", hex: "#0a192f" },
  { id: "e", name: "Option E · between A and B", hex: "#0c203c" },
  { id: "b", name: "Option B · deep blue", hex: "#0f2748" },
  { id: "c", name: "Option C · royal navy", hex: "#16355f" },
  { id: "d", name: "Option D · steel blue", hex: "#1f4577" },
];

export default function HeroPreviewPage() {
  return (
    <div className="hero-preview">
      <div className="container">
        <h1 className="footer-preview__title">Hero background options</h1>
      </div>

      {OPTIONS.map((option) => (
        <section key={option.id} aria-label={option.name} className={`hero-preview--${option.id}`}>
          <p className="footer-preview__label">
            {option.name} · {option.hex}
          </p>
          <Hero />
        </section>
      ))}
    </div>
  );
}
