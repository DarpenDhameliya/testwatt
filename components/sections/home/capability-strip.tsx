import Link from "next/link";
import type { AppRoute } from "@/lib/site";

interface CapabilityItem {
  id: string;
  label: string;
  href: AppRoute;
  icon: (className?: string) => React.ReactNode;
}

const CAPABILITY_ITEMS: CapabilityItem[] = [
  {
    id: "testing",
    label: "Load Bank Testing",
    href: "/load-bank-testing",
    icon: (className) => (
      <svg
        className={className}
        viewBox="0 0 20 20"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M11 2L4 11h5l-1 7 7-9h-5l1-7z" />
      </svg>
    ),
  },
  {
    id: "repairs",
    label: "Repairs & Servicing",
    href: "/repairs-servicing",
    icon: (className) => (
      <svg
        className={className}
        viewBox="0 0 20 20"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M14.7 3.3a3.5 3.5 0 0 0-4.9 4.9L3.5 14.5a1.5 1.5 0 0 0 2.1 2.1l6.3-6.3a3.5 3.5 0 0 0 4.9-4.9l-2.1 2.1-2.1-2.1 2.1-2.1z" />
      </svg>
    ),
  },
  {
    id: "upgrades",
    label: "Load Bank Upgrades",
    href: "/repairs-servicing",
    icon: (className) => (
      <svg
        className={className}
        viewBox="0 0 20 20"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M3 16l5.5-5.5 3.5 3.5 6-7" />
        <path d="M13 7h5v5" />
      </svg>
    ),
  },
  {
    id: "training",
    label: "Training & Troubleshooting",
    href: "/repairs-servicing",
    icon: (className) => (
      <svg
        className={className}
        viewBox="0 0 20 20"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <circle cx="10" cy="10" r="7.5" />
        <circle cx="10" cy="10" r="3" />
        <path d="M10 2.5v2.5M10 15v2.5M2.5 10H5M15 10h2.5" />
      </svg>
    ),
  },
];

export default function CapabilityStrip() {
  return (
    <section className="capability-strip" aria-label="Core Service Capabilities">
      <div className="capability-strip__inner">
        <nav className="capability-strip__grid" aria-label="Capabilities navigation">
          {CAPABILITY_ITEMS.map((item, index) => (
            <Link
              key={item.id}
              href={item.href}
              className={`capability-strip__item capability-strip__item--${item.id}${index === 0 ? " capability-strip__item--first" : ""
                }`}
              title={`View ${item.label}`}
            >
              <div className="capability-strip__meta">
                {item.icon("capability-strip__icon")}
              </div>
              <span className="capability-strip__label">{item.label}</span>
              <svg
                className="capability-strip__arrow"
                viewBox="0 0 16 16"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M6 3.5l4.5 4.5L6 12.5" />
              </svg>
            </Link>
          ))}
        </nav>
      </div>
    </section>
  );
}
