"use client";

import { useEffect, useRef, useState } from "react";

const STEP_STAGGER_MS = 650;

export default function AnimatedSteps({ steps }: { steps: string[] }) {
  const listRef = useRef<HTMLOListElement>(null);
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    const list = listRef.current;
    if (!list) return;

    const items = Array.from(list.children) as HTMLElement[];
    if (
      typeof IntersectionObserver === "undefined" ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    setAnimated(true);
    const observer = new IntersectionObserver(
      (entries) => {
        // Steps that enter together are staggered so they play one after another.
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => items.indexOf(a.target as HTMLElement) - items.indexOf(b.target as HTMLElement));

        visible.forEach((entry, order) => {
          const el = entry.target as HTMLElement;
          const delay = order * STEP_STAGGER_MS;
          el.style.setProperty("--delay", `${delay}ms`);
          el.classList.add("is-visible");
          observer.unobserve(el);
          // Drop the delay once played so hover transitions stay instant.
          window.setTimeout(() => el.style.removeProperty("--delay"), delay + 1600);
        });
      },
      { threshold: 0.5 },
    );
    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  return (
    <ol
      ref={listRef}
      className={animated ? "standards-steps standards-steps--animated" : "standards-steps"}
    >
      {steps.map((step, index) => (
        <li key={step} className="standards-steps__item">
          <span className="standards-steps__node" aria-hidden="true">
            {index + 1}
          </span>
          <p className="standards-steps__text">{step}</p>
        </li>
      ))}
    </ol>
  );
}
