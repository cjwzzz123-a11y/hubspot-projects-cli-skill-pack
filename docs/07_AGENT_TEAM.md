# Agent Team Plan

Last updated: 2026-05-24

## Workstreams

### Owner A: Source and Content

Goal: maintain official source map, page copy, and claim boundaries.

Allowed files:

- `docs/official-sources/`
- `docs/04_CONTENT.md`
- `data/pages.ts`

Acceptance:

- all factual claims have source links;
- uncertain statements are softened.

### Owner B: Gumroad Artifacts

Goal: prepare downloadable product files.

Allowed files:

- `docs/gumroad/`
- `skill/`

Acceptance:

- product files are usable without site code;
- non-affiliation notice is present.

### Owner C: Site Implementation

Goal: build Next.js site and components.

Allowed files:

- `app/`
- `components/`
- `data/`
- `public/`
- config files.

Acceptance:

- `pnpm build` passes;
- mobile and desktop render correctly.

### Owner D: Launch QA

Goal: verify routes, CTAs, disclaimers, metadata, and deployment.

Allowed files:

- `docs/10_PLAYBOOK.md`
- QA notes.

Acceptance:

- blockers and residual risks are documented.

## File Ownership Rule

One owner per file at a time. Shared data contracts must be changed by the lead agent only.

