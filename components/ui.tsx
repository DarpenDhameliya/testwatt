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

export function ServiceCard({ service }: { service: Service }) {
  return (
    <article className="service-card">
      <div className="service-card__number">{service.number}</div>
      <h3 className="service-card__title">{service.title}</h3>
      <p className="service-card__body">{service.description}</p>
      <Link href={service.link} className="service-card__link">
        Learn more →
      </Link>
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
      className={`numbered-item${light ? " numbered-item--light" : ""}${
        last ? " numbered-item--last" : ""
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
