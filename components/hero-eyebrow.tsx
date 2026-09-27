import type { ReactNode } from "react";

type EyebrowIcon = "bolt" | "wrench" | "upgrade" | "training" | "mail";

const ICON_PATHS: Record<EyebrowIcon, ReactNode> = {
  bolt: <path d="M13 2 4 14h7l-1 8 9-12h-7l1-8z" />,
  wrench: (
    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
  ),
  upgrade: (
    <>
      <path d="M3 17l6-6 4 4 8-8" />
      <path d="M15 7h6v6" />
    </>
  ),
  training: (
    <>
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="4.5" />
      <circle cx="12" cy="12" r="0.8" fill="currentColor" />
    </>
  ),
  mail: (
    <>
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </>
  ),
};

export default function HeroEyebrow({
  icon,
  children,
}: {
  icon: EyebrowIcon;
  children: ReactNode;
}) {
  return (
    <div className="hero__eyebrow">
      <span className="hero__eyebrow-icon" aria-hidden="true">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {ICON_PATHS[icon]}
        </svg>
      </span>
      {children}
    </div>
  );
}
