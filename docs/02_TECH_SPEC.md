# Technical Spec

Last updated: 2026-05-24

## Stack

- Next.js App Router with TypeScript.
- Tailwind CSS.
- `lucide-react` for icons.
- Local typed data in `data/*.ts` or `data/*.json`.
- Static content generated from structured page definitions.
- Vercel deployment.
- Gumroad outbound CTAs configured through environment variables.

## Repository Layout

```text
app/
components/
data/
docs/
  official-sources/
  gumroad/
  research/
public/
  assets/generated/
scripts/
skill/
```

## Source Data

Official sources are stored in `docs/official-sources/` for internal traceability. Public site content should summarize and link to official docs, not reproduce long official passages.

## Environment Variables

```text
NEXT_PUBLIC_SITE_URL=
NEXT_PUBLIC_GUMROAD_BUNDLE_URL=
NEXT_PUBLIC_GUMROAD_PDF_URL=
NEXT_PUBLIC_GUMROAD_AGENCY_URL=
NEXT_PUBLIC_ADSENSE_CLIENT=
```

All variables are optional in local development. Missing Gumroad URLs render placeholder CTAs.

## Deployment

Primary target is Vercel. The user will provide the final domain later. Until then, deploy to Vercel preview/production URL without custom domain, then add domain when available.

## Data Contracts

Page data should include:

```ts
type GuidePage = {
  slug: string;
  title: string;
  description: string;
  intent: string;
  lastChecked: string;
  disclaimer: string;
  sections: Array<{ heading: string; body: string[] }>;
  checks?: string[];
  sources: Array<{ label: string; url: string }>;
  related: string[];
  cta: "bundle" | "checklist" | "skill";
};
```

## Skill Pack

The `skill/` directory contains:

- `SKILL.md`
- `references/source-map.json`
- `references/decision-tree.md`
- `references/preflight-checklist.md`
- `references/developer-handoff-template.md`

The skill must instruct agents to verify current official docs before production-affecting recommendations.

## Build Commands

```bash
pnpm install
pnpm build
pnpm lint
pnpm dev
```

## Quality Gates

- TypeScript build passes.
- Main pages render without runtime errors.
- Mobile layout verified.
- Footer disclaimer visible on all pages.
- No official logos or official visual imitation.
- All external official links use descriptive labels.

