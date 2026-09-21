import Link from "next/link";
import type { ReactNode } from "react";
import type { AppRoute } from "@/lib/site";
import type { FeatureItemData, Service, StandardRow, StepData } from "@/lib/content";

const SIZES = { sm: "btn-sm", md: "btn-md", lg: "btn-lg" } as const;
const VARIANTS = {
  primary: "btn-primary",
  secondary: "btn-secondary",
  "outline-light": "btn-outline-light",
} as const;

export type ButtonVariant = keyof typeof VARIANTS;

export function Button({
  to,
  href,
  type = "button",
  variant = "primary",
  size = "md",
  fullWidth = false,
  children,
}: {
  to?: AppRoute;
  href?: string;
  type?: "button" | "submit";
  variant?: ButtonVariant;
  size?: keyof typeof SIZES;
  fullWidth?: boolean;
  children: ReactNode;
}) {
  const className = `btn ${VARIANTS[variant]} ${SIZES[size]}${fullWidth ? " btn-full" : ""}`;

  if (to) {
    return (
      <Link href={to} className={className}>
        {children}
      </Link>
    );
  }

  if (href) {
    const external = href.startsWith("http") || href.startsWith("//");
    return (
      <a
        href={href}
        className={className}
        {...(external ? { rel: "noopener noreferrer", target: "_blank" } : {})}
      >
        {children}
      </a>
    );
  }

  return (
    <button type={type} className={className}>
      {children}
    </button>
  );
}

export function Kicker({ children }: { children: ReactNode }) {
  return (
    <div className="kicker">
      <span className="kicker-line" aria-hidden="true" />
      {children}
    </div>
  );
}

export function PositiveTag({ children }: { children: ReactNode }) {
  return (
    <div
      className="positive-tag"
      style={{ marginBottom: "16px", alignSelf: "flex-start" }}
    >
      <span className="positive-dot" aria-hidden="true" />
      {children}
    </div>
  );
}

export function SectionHeading({
  kicker,
  heading,
  body,
  light = false,
  maxWidth,
  className = "",
}: {
  kicker?: string;
  heading: ReactNode;
  body?: string;
  light?: boolean;
  maxWidth?: number;
  className?: string;
}) {
  const style = maxWidth ? { maxWidth } : undefined;
  return (
    <div className={`section-heading ${className}`}>
      {kicker && <Kicker>{kicker}</Kicker>}
      <h2
        className={`section-heading__title${light ? " section-heading__title--light" : ""}`}
        style={style}
      >
        {heading}
      </h2>
      {body && (
        <p
          className={`section-heading__body${light ? " section-heading__body--light" : ""}`}
          style={style}
        >
          {body}
        </p>
      )}
    </div>
  );
}

function ServiceIcon({ id, className = "" }: { id: string; className?: string }) {
  switch (id) {
    case "01":
      return (
        <svg
          className={className}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
          <path d="M21 21l-3-3" strokeWidth="1.5" strokeOpacity="0.7" />
          <path d="M18 15a4 4 0 1 0 0 6 4 4 0 0 0 0-6z" strokeWidth="1.5" />
        </svg>
      );
    case "02":
      return (
        <svg
          className={className}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
          <path d="M8 16l-4 4" />
        </svg>
      );
    case "03":
      return (
        <svg
          className={className}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <rect x="4" y="4" width="16" height="16" rx="2" />
          <rect x="9" y="9" width="6" height="6" />
          <path d="M9 1v3M15 1v3M9 20v3M15 20v3M20 9h3M20 14h3M1 9h3M1 14h3" />
        </svg>
      );
    case "04":
      return (
        <svg
          className={className}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M3 3v18h18" />
          <path d="M7 16l5-6 4 4 6-8" />
          <circle cx="12" cy="10" r="1.5" fill="currentColor" />
          <circle cx="16" cy="14" r="1.5" fill="currentColor" />
          <circle cx="22" cy="6" r="1.5" fill="currentColor" />
        </svg>
      );
    case "05":
      return (
        <svg
          className={className}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
          <circle cx="12" cy="12" r="2" fill="currentColor" />
        </svg>
      );
    default:
      return (
        <svg
          className={className}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
        >
          <path d="M12 2v20M2 12h20" />
        </svg>
      );
  }
}

export function ServiceCard({ service }: { service: Service }) {
  return (
    <article className={`service-card${service.featured ? " service-card--featured" : ""}`}>
      {/* Top Header */}
      <div className="service-card__top">
        <div className="service-card__icon-wrap">
          <ServiceIcon id={service.number} className="service-card__icon" />
        </div>
        <div className="service-card__meta">
          {service.badge && (
            <span className="service-card__badge">{service.badge}</span>
          )}
          <span className="service-card__num">{service.number}</span>
        </div>
      </div>

      {/* Title & Tagline */}
      <div className="service-card__heading-group">
        <h3 className="service-card__title">{service.title}</h3>
        {service.tagline && (
          <p className="service-card__tagline">{service.tagline}</p>
        )}
      </div>

      {/* Description */}
      <p className="service-card__body">{service.description}</p>

      {/* Key Highlights Checklist */}
      {service.highlights && service.highlights.length > 0 && (
        <div className="service-card__highlights">
          <span className="service-card__section-label">Key Capabilities</span>
          <ul className="service-card__list">
            {service.highlights.map((item) => (
              <li key={item} className="service-card__list-item">
                <svg
                  className="service-card__list-icon"
                  viewBox="0 0 16 16"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M3.5 8.5l3 3 6-7" />
                </svg>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Target Equipment */}
      {service.targetEquipment && service.targetEquipment.length > 0 && (
        <div className="service-card__equipment">
          <span className="service-card__section-label">Target Equipment</span>
          <div className="service-card__tags">
            {service.targetEquipment.map((eq) => (
              <span key={eq} className="service-card__tag">
                {eq}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Footer: Metric & Action */}
      <div className="service-card__footer">
        {service.metric && (
          <div className="service-card__metric">
            <span className="service-card__metric-val">{service.metric.value}</span>
            <span className="service-card__metric-lbl">{service.metric.label}</span>
          </div>
        )}
        <Link href={service.link} className="service-card__link">
          <span>Explore Service</span>
          <svg
            className="service-card__link-arrow"
            viewBox="0 0 16 16"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M3 8h10M9 4l4 4-4 4" />
          </svg>
        </Link>
      </div>
    </article>
  );
}

export function FeatureItem({
  item,
  prefix,
}: {
  item: FeatureItemData;
  prefix?: string;
}) {
  return (
    <div className="feature-item">
      <div className="feature-item__bar" aria-hidden="true" />
      <h4 className="feature-item__title">
        {prefix && <span className="feature-item__prefix">{prefix}</span>}
        {item.title}
      </h4>
      <p className="feature-item__body">{item.body}</p>
    </div>
  );
}

export function NumberedItem({
  step,
  light = false,
  last = false,
}: {
  step: StepData;
  light?: boolean;
  last?: boolean;
}) {
  return (
    <div
      className={`numbered-item${light ? " numbered-item--light" : ""}${last ? " numbered-item--last" : ""
        }`}
    >
      <div className="numbered-item__number" aria-hidden="true">
        {step.step}
      </div>
      <h4 className="numbered-item__title">{step.title}</h4>
      <p className="numbered-item__body">{step.desc}</p>
    </div>
  );
}

export function CtaBand({
  heading,
  body,
  actions,
}: {
  heading: string;
  body: string;
  actions: { label: string; to: AppRoute; variant?: ButtonVariant }[];
}) {
  return (
    <section className="cta-band" aria-labelledby="cta-heading">
      <div className="container">
        <div className="cta-band__inner">
          <div className="cta-band__text">
            <h2 id="cta-heading" className="cta-band__heading">
              {heading}
            </h2>
            <p className="cta-band__body">{body}</p>
          </div>
          <div className="cta-band__actions">
            {actions.map((action) => (
              <Button
                key={action.label}
                to={action.to}
                variant={action.variant ?? "primary"}
                size="lg"
              >
                {action.label}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function StandardsTable({
  standards,
  scopeLabel = "Scope",
}: {
  standards: StandardRow[];
  scopeLabel?: string;
}) {
  return (
    <div className="standards-table-wrap">
      <table className="standards-table">
        <thead>
          <tr>
            <th scope="col" className="standards-table__th">
              Standard
            </th>
            <th scope="col" className="standards-table__th">
              Full Title
            </th>
            <th scope="col" className="standards-table__th standards-table__th--last">
              {scopeLabel}
            </th>
          </tr>
        </thead>
        <tbody>
          {standards.map((row, index) => (
            <tr
              key={row.code}
              className={
                index % 2 === 0
                  ? "standards-table__row"
                  : "standards-table__row standards-table__row--alt"
              }
            >
              <td className="standards-table__code">{row.code}</td>
              <td className="standards-table__td">{row.title}</td>
              <td className="standards-table__td standards-table__td--last">
                {row.scope}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export type StandardsCardVariant = "dossier" | "tech" | "minimal";

export function StandardsCards({
  standards,
  scopeLabel = "Scope",
  variant = "dossier",
}: {
  standards: StandardRow[];
  scopeLabel?: string;
  variant?: StandardsCardVariant;
}) {
  return (
    <ul className={`standards-cards standards-cards--${variant}`}>
      {standards.map((row) => {
        if (variant === "tech") {
          return (
            <li key={row.code} className="standard-card standard-card--tech">
              <div className="standard-card__tech-top">
                <span className="standard-card__tech-chip">{row.code}</span>
                <span className="standard-card__tech-icon-wrap" aria-hidden="true">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="standard-card__tech-icon"
                  >
                    <path
                      d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </div>
              <h3 className="standard-card__title standard-card__title--tech">
                {row.title}
              </h3>
              <div className="standard-card__tech-footer">
                <span className="standard-card__tech-label">{scopeLabel}</span>
                <p className="standard-card__tech-desc">{row.scope}</p>
              </div>
            </li>
          );
        }

        if (variant === "minimal") {
          return (
            <li key={row.code} className="standard-card standard-card--minimal">
              <div className="standard-card__minimal-header">
                <span className="standard-card__minimal-code">{row.code}</span>
                <span className="standard-card__minimal-tag">Standard Spec</span>
              </div>
              <h3 className="standard-card__title standard-card__title--minimal">
                {row.title}
              </h3>
              <div className="standard-card__minimal-scope">
                <span className="standard-card__label">{scopeLabel}</span>
                <p className="standard-card__text">{row.scope}</p>
              </div>
            </li>
          );
        }

        // Default & Recommended: "dossier" (Certified Technical Spec Card)
        return (
          <li key={row.code} className="standard-card standard-card--dossier">
            <div className="standard-card__header">
              <div className="standard-card__code-badge">
                <svg
                  className="standard-card__shield-icon"
                  viewBox="0 0 20 20"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  aria-hidden="true"
                >
                  <path d="M10 2s6 2.5 6 7c0 5-3.5 8-6 9-2.5-1-6-4-6-9 0-4.5 6-7 6-7z" />
                  <path
                    d="M7.5 9.5l2 2 3.5-3.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span>{row.code}</span>
              </div>
              <span className="standard-card__status-pill">
                <span className="standard-card__status-dot" aria-hidden="true" />
                Verified Spec
              </span>
            </div>

            <h3 className="standard-card__title">{row.title}</h3>

            <div className="standard-card__scope-pod">
              <div className="standard-card__scope-tag">
                <svg
                  className="standard-card__scope-icon"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm3.854-8.646a.5.5 0 0 0-.708-.708L7.5 9.293 5.354 7.146a.5.5 0 1 0-.708.708l2.5 2.5a.5.5 0 0 0 .708 0l4.5-4.5z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>{scopeLabel}</span>
              </div>
              <p className="standard-card__scope-text">{row.scope}</p>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
