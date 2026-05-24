# Execution Plan: HubSpot Projects CLI Sunset Kit

Date: 2026-05-24

Primary inputs:

- `/Users/jiawei/Documents/全新项目/research/deep-evaluation-2026-05-24-hubspot-projects-cli-sunset.md`
- `/Users/jiawei/Documents/全新项目/research/keyword-serp-plan-2026-05-24-hubspot-projects-cli-sunset.md`
- `/Users/jiawei/Documents/全新项目/research/opportunity-scan-2026-05-24-1155.md`
- `/Users/jiawei/Documents/全新项目/research/build-brief-2026-05-24-hubspot-projects-cli-sunset.md`
- `/Users/jiawei/Documents/全新项目/research/keyword-serp-plan-2026-05-24-hubspot-projects-cli-sunset-serp-audit.md`

## Decision

Proceed to build/spec preparation. Do not run another broad opportunity scan unless this project is intentionally paused.

Project: HubSpot Projects CLI Sunset Kit

Current decision: Go

Current score: 8.7/10 after focused SERP audit

Core positioning:

> An unofficial, source-linked guide and checklist bundle for HubSpot developers who need to create new public or Marketplace apps with Projects-based CLI workflows after the legacy public app creation sunset.

Critical copy rule:

Do not claim existing legacy public apps break on 2026-05-26 or 2026-06-23. The event disables new legacy public app creation. Existing legacy public apps continue functioning under this specific sunset.

## Build Target

Build a static content site plus Gumroad-ready product artifacts. Do not deploy, buy a domain, or publish Gumroad without user confirmation.

Primary deliverables:

1. Static site PRD and content production package.
2. 12 technical page drafts plus trust pages.
3. Gumroad product copy.
4. First product artifacts:
   - 2-page PDF outline
   - Markdown/Notion checklist
   - CSV app inventory/preflight tracker
   - developer handoff checklist

## Phase 1: Product And Site Spec

Goal: turn research into a buildable, non-ambiguous implementation spec.

Outputs:

- one-page PRD
- sitemap with page intent
- shared layout/content pattern
- CTA strategy
- risk and disclaimer rules
- source-link policy
- acceptance criteria

Acceptance criteria:

- Every page has a unique search/user intent.
- Every technical claim has a source-link slot.
- Footer and product CTA clearly say unofficial / not affiliated with HubSpot.
- No HubSpot logo, official visual imitation, or HubSpot-in-domain recommendation.
- The May/June event is framed as new legacy public app creation sunset only.

## Phase 2: Content Production

Create draft content for these pages:

1. `/hubspot-legacy-public-app-creation-sunset`
2. `/hubspot-projects-cli-checklist`
3. `/hs-project-create-marketplace-app`
4. `/hubspot-legacy-public-app-vs-projects-app`
5. `/hs-app-migrate-vs-hs-project-migrate`
6. `/hubspot-private-app-projects-migration`
7. `/hubspot-developer-platform-2026-03-upgrade`
8. `/hubspot-app-hsmeta-json-structure`
9. `/hubspot-cli-v8-node-20-ci-checklist`
10. `/hubspot-legacy-crm-cards-to-app-cards`
11. `/hubspot-marketplace-listing-checklist-2026`
12. `/hubspot-projects-cli-faq`

Trust/support pages:

13. `/updates`
14. `/about`
15. `/contact`
16. `/privacy`
17. `/terms`

Required blocks for each technical page:

- last updated date
- short unofficial disclaimer
- what changed / what to do next
- source links
- related pages
- checklist/product CTA

Priority order:

1. Pillar page
2. Projects CLI checklist page
3. Command decision page
4. New Marketplace app creation page
5. Private app limitation page
6. File structure troubleshooting page
7. CLI v8 / Node 20 / CI page
8. Marketplace listing checklist
9. Remaining pages

## Phase 3: Gumroad Product Artifacts

Product name:

`Projects CLI App Creation Kit for HubSpot Developers`

Subtitle:

`Unofficial command map, preflight checklist, and app inventory tracker for the 2026 legacy public app creation sunset.`

Price ladder:

- $9 PDF only
- $19 PDF + Markdown/Notion + Sheet bundle
- $49 agency/team license

Artifacts:

1. `projects-cli-command-cheatsheet.md`
   - Page 1: event timeline, affected/not affected table, command decision tree.
   - Page 2: preflight checklist, Marketplace readiness, CI/source verification checklist.
2. `projects-cli-preflight-checklist.md`
   - 12-point free preview plus paid extended checklist.
3. `hubspot-app-inventory-tracker.csv`
   - tabs/sections represented as CSV columns for app inventory, account, command decision, Marketplace readiness, risk owner.
4. `developer-handoff-checklist.md`
   - copy-paste internal handoff for agencies and RevOps teams.

Accuracy note:

The product must tell buyers to verify critical commands against official HubSpot docs before deploying.

## Phase 4: Implementation

Recommended app shape:

- Static Next.js site.
- Content-driven pages from local Markdown/MDX or typed content objects.
- Simple restrained developer-tool visual style.
- CTA to Gumroad placeholder or product link once user confirms.
- `/updates` page with source-check log.

Suggested routes:

- `src/app/[slug]/page.tsx` or explicit route files if the existing project prefers that pattern.
- `src/content/hubspot-pages.ts` or MDX files for page data.
- shared components:
  - `SourceLinks`
  - `Disclaimer`
  - `DeadlineTable`
  - `CommandDecisionTable`
  - `ChecklistBlock`
  - `ProductCTA`
  - `RelatedPages`

Implementation acceptance criteria:

- All pages render locally.
- No console/runtime errors.
- Mobile text does not overflow.
- Source links are visible and descriptive.
- CTA copy does not imply official affiliation.
- Search metadata is unique per page.
- Sitemap/robots exist if the app is prepared for deployment.

## Phase 5: QA And Launch Prep

Do before any deployment:

- verify all dates and scope statements against source files
- scan every page for accidental overclaiming
- check footer disclaimer on every route
- check product copy for "official", "certified", or unsupported guarantee language
- run build/lint/test commands available in the repo
- browser-check desktop and mobile
- prepare Search Console/Bing checklist but do not submit until user confirms deployment

## Suggested Agent Split

Use only disjoint ownership.

Agent A: Content Spec

- Owns PRD, sitemap, 12 page briefs, metadata, source-link blocks.
- Does not edit implementation files.

Agent B: Gumroad Artifacts

- Owns PDF Markdown outline, Notion/Markdown checklist, CSV tracker, developer handoff checklist.
- Does not edit site implementation files.

Agent C: Site Implementation

- Owns Next.js app pages/components/styles.
- Uses content produced by Agent A.
- Does not change product artifact files unless asked.

Main agent:

- integrates outputs
- verifies copy risk
- runs local app/build checks
- decides whether to ask user for deployment/domain/Gumroad confirmation

## Next Prompt For A Build Agent

```text
Use the HubSpot research files in `/Users/jiawei/Documents/全新项目/research/` to create the first build package for the HubSpot Projects CLI Sunset Kit. Prioritize `/Users/jiawei/Documents/全新项目/research/deep-evaluation-2026-05-24-hubspot-projects-cli-sunset.md` and `/Users/jiawei/Documents/全新项目/research/build-brief-2026-05-24-hubspot-projects-cli-sunset.md`.

Do not deploy, buy a domain, or publish Gumroad. Produce:

1. static-site PRD
2. 12 technical page drafts plus trust page outlines
3. source-link blocks
4. Gumroad product copy
5. first Markdown/PDF/CSV artifact drafts

Preserve this rule exactly: the May 26 / June 23 HubSpot event disables new legacy public app creation; existing legacy public apps continue functioning under this specific sunset.

Use an unofficial/non-affiliation disclaimer everywhere relevant. Do not use HubSpot logos, official visual style, or a domain containing `hubspot`.
```

## Immediate Next Action

Start Phase 1 and Phase 3 in parallel:

- Main/spec stream: write PRD + page production spec.
- Product stream: draft the 2-page checklist and CSV tracker.

After those exist, implement the static site.
