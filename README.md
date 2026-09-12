# Test Watt

Next.js 16 (App Router) rebuild of the Test Watt marketing site — load bank testing and
critical power services.

## Pages

| Route                 | Content                                                                  |
| --------------------- | ------------------------------------------------------------------------ |
| `/`                   | Hero, capability strip, services grid, why-us, testing process + chart, standards table, CTA |
| `/load-bank-testing`  | Page hero, what the test involves, load bank types, step-load chart, standards, advantages |
| `/repairs-servicing`  | Page hero, why servicing, troubleshooting steps, modernisation options, spare parts |
| `/contact`            | Contact cards, response times, validated enquiry form                     |

## Structure

- `app/globals.css` — the complete design system (colour tokens, typography, every component class, responsive breakpoints)
- `app/layout.tsx` — fonts (Outfit + Plus Jakarta Sans via `next/font`), metadata, Organization JSON-LD, header/footer shell
- `components/` — `site-header`, `site-footer`, `ui.tsx` (Button, Kicker, SectionHeading, ServiceCard, FeatureItem, NumberedItem, CtaBand, StandardsTable), `technical-chart` (Recharts), `contact-form`
- `lib/content.ts` — all page copy and data as typed arrays
- `lib/site.ts` — nav links, routes, contact addresses

## Design tokens

| Token                 | Value     |
| --------------------- | --------- |
| `--color-navy`        | `#0a192f` |
| `--color-navy-dark`   | `#030c1b` |
| `--color-red`         | `#e11d48` |
| `--color-dark`        | `#0f172a` |
| `--color-grey`        | `#475569` |
| `--color-light-grey`  | `#f8fafc` |
| `--color-border`      | `#e2e8f0` |

Display font: **Outfit**. Body font: **Plus Jakarta Sans**.

## Contact form

The enquiry form posts through EmailJS. Copy `.env.example` to `.env.local` and fill in your
own EmailJS credentials — until then the form validates but reports that delivery is not
configured.

```
NEXT_PUBLIC_EMAILJS_SERVICE_ID=
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=
```

## Development

```bash
npm run dev     # http://localhost:3000
npm run build
npm run lint
```
