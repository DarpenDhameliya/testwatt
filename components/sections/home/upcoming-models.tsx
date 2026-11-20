import Image from "next/image";
import { Fragment, type CSSProperties } from "react";
import { SectionHeading } from "@/components/ui";

/** Load bank models announced for a future release; shown as a "coming soon" block after the P100 datasheet. */
const UPCOMING_MODELS = ["P300", "P600", "P1200", "P2000", "P3000", "P4000", "P5000"];

/** "P300, P600, … & P5000" */
const MODEL_LIST = `${UPCOMING_MODELS.slice(0, -1).join(", ")} & ${UPCOMING_MODELS[UPCOMING_MODELS.length - 1]}`;
const ANNOUNCEMENT = `Models ${MODEL_LIST} coming soon!`;

/** Design options for the client to choose from; all five are shown one after another at /coming-soon-preview. */
export type UpcomingModelsVariant = "tiles" | "cards" | "roadmap" | "banner" | "teaser";

export default function UpcomingModels({ variant = "tiles" }: { variant?: UpcomingModelsVariant }) {
  const headingId = `upcoming-heading-${variant}`;
  switch (variant) {
    case "cards":
      return <CardsOption headingId={headingId} />;
    case "roadmap":
      return <RoadmapOption headingId={headingId} />;
    case "banner":
      return <BannerOption headingId={headingId} />;
    case "teaser":
      return <TeaserOption headingId={headingId} />;
    default:
      return <TilesOption headingId={headingId} />;
  }
}

function Heading({ headingId, light = false }: { headingId: string; light?: boolean }) {
  return (
    <SectionHeading
      kicker="Coming soon"
      heading={<span id={headingId}>More models on the way</span>}
      body={ANNOUNCEMENT}
      light={light}
      className="section-heading--mb-sm"
    />
  );
}

/** Option A: light grey band, one white tile per model with a pulsing "Coming soon" pill. */
function TilesOption({ headingId }: { headingId: string }) {
  return (
    <section className="section section--grey upcoming upcoming--tiles" aria-labelledby={headingId}>
      <div className="container">
        <Heading headingId={headingId} />
        <ul className="upcoming__grid">
          {UPCOMING_MODELS.map((model) => (
            <li key={model} className="upcoming__item upcoming-tile">
              <p className="upcoming-tile__model">{model}</p>
              <p className="upcoming-tile__status">
                <span className="upcoming-tile__dot" aria-hidden="true" />
                Coming soon
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/** Option B: light section, white cards with a dashed "reserved" outline. */
function CardsOption({ headingId }: { headingId: string }) {
  return (
    <section className="section section--grey upcoming upcoming--cards" aria-labelledby={headingId}>
      <div className="container">
        <Heading headingId={headingId} />
        <ul className="upcoming__grid">
          {UPCOMING_MODELS.map((model) => (
            <li key={model} className="upcoming__item upcoming-card">
              <p className="upcoming-card__model">{model}</p>
              <span className="upcoming-card__bar" aria-hidden="true" />
              <p className="upcoming-card__tag">
                <ClockIcon className="upcoming-card__icon" />
                Coming soon
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/** Option C: the range as a roadmap, starting from the current P100. */
function RoadmapOption({ headingId }: { headingId: string }) {
  return (
    <section className="section section--grey upcoming upcoming--roadmap" aria-labelledby={headingId}>
      <div className="container">
        <Heading headingId={headingId} />
        <ol className="upcoming-roadmap">
          <li className="upcoming-roadmap__step upcoming-roadmap__step--current">
            <span className="upcoming-roadmap__node" aria-hidden="true">
              <svg
                className="upcoming-roadmap__icon"
                viewBox="0 0 16 16"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M3.5 8.5l3 3 6-7" />
              </svg>
            </span>
            <p className="upcoming-roadmap__model">P100</p>
            <p className="upcoming-roadmap__status">Current model</p>
          </li>
          {UPCOMING_MODELS.map((model) => (
            <li key={model} className="upcoming-roadmap__step">
              <span className="upcoming-roadmap__node" aria-hidden="true" />
              <p className="upcoming-roadmap__model">{model}</p>
              <p className="upcoming-roadmap__status">Coming soon</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

/** Option D: one compact announcement banner. */
function BannerOption({ headingId }: { headingId: string }) {
  return (
    <section className="upcoming upcoming--banner" aria-labelledby={headingId}>
      <div className="container">
        <div className="upcoming-banner">
          <span className="upcoming-banner__icon" aria-hidden="true">
            <ClockIcon />
          </span>
          <div>
            <p className="upcoming-banner__kicker">Coming soon</p>
            <h2 id={headingId} className="upcoming-banner__title">
              Models{" "}
              {UPCOMING_MODELS.map((model, index) => (
                <Fragment key={model}>
                  {index > 0 && (index === UPCOMING_MODELS.length - 1 ? " & " : ", ")}
                  <span className="upcoming-banner__model">{model}</span>
                </Fragment>
              ))}{" "}
              coming soon!
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
}

/** Small baked "hologram" pictures of the P-series cabinet, alternated so the tiles are not all the same angle. */
const TEASER_IMAGES = [
  { src: "/images/upcoming/model-teaser-a.webp", width: 420, height: 541 },
  { src: "/images/upcoming/model-teaser-b.webp", width: 420, height: 530 },
];

/**
 * Option E: teaser tiles. Each upcoming model gets a ghosted "hologram" picture that floats, with a light scan
 * sweeping through it, plus its name and a "Coming soon" tag. Seven across on wide screens, 4 + 3 on tablets, 2 per row on phones.
 */
function TeaserOption({ headingId }: { headingId: string }) {
  return (
    <section className="section section--navy upcoming upcoming--teaser" aria-labelledby={headingId}>
      <div className="container">
        <Heading headingId={headingId} light />
        <ul className="teaser-grid">
          {UPCOMING_MODELS.map((model, index) => {
            const image = TEASER_IMAGES[index % TEASER_IMAGES.length];
            return (
              <li key={model} className="teaser" style={{ "--i": index } as CSSProperties}>
                <div className="teaser__stage">
                  <div className="teaser__art" style={{ "--teaser-img": `url(${image.src})` } as CSSProperties}>
                    <Image
                      src={image.src}
                      alt=""
                      width={image.width}
                      height={image.height}
                      sizes="(max-width: 799px) 45vw, 200px"
                      quality={75}
                      className="teaser__img"
                    />
                    <span className="teaser__scan" aria-hidden="true" />
                  </div>
                </div>
                <h3 className="teaser__model">{model}</h3>
                <p className="teaser__status">
                  <span className="teaser__dot" aria-hidden="true" />
                  Coming soon
                </p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

function ClockIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </svg>
  );
}
