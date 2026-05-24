# Build Brief: HubSpot Projects CLI Sunset Kit

Run time: 2026-05-24 12:15 Asia/Shanghai

Status: **Go for spec / build preparation. Do not auto-deploy or buy a domain without user confirmation.**

## Project

Working title: **Projects CLI App Creation Kit for HubSpot Developers**

Site positioning: an unofficial, source-linked guide and checklist for HubSpot developers who need to create new public/Marketplace apps with Projects-based CLI workflows after the legacy public app creation sunset.

Primary event window:

- 2026-05-26: new developer accounts cannot create new legacy public apps.
- 2026-06-23: existing developer accounts also lose new legacy public app creation.
- 2026-08-01: Projects v2025.1 support sunset, relevant to modernization pages.
- 2026-10-31: legacy CRM cards stop rendering, relevant expansion page.

Critical copy rule: existing legacy public apps continue functioning under the May/June public app creation sunset. Do not imply they break immediately.

## MVP Goal

Launch a static Next.js content site plus Gumroad-ready digital product materials within 24-48 hours.

Do not build a SaaS. The first value is content, checklists, command maps, and downloadable templates.

## Audience

- HubSpot Marketplace/public app developers.
- HubSpot Solutions Partners and agencies.
- RevOps/CRM developers briefing engineering teams.
- Freelance HubSpot developers creating or modernizing app workflows.

## User Jobs

- Understand whether May 26 / June 23 affects them.
- Create a new app with the Projects CLI path.
- Choose between `hs app migrate`, `hs project migrate`, and manual paths.
- Avoid private-app migration misunderstanding.
- Check CLI/Node/CI requirements before deploy.
- Prepare Marketplace listing fields.
- Plan related app-card modernization before October 31.

## Initial Site Map

Core content pages:

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

## Page Outline Requirements

Every technical page must include:

- last updated date
- "unofficial, not affiliated with HubSpot" disclaimer
- source links to official docs
- a short "what changed" or "what to do next" box
- internal links to 2-4 related pages
- CTA for the 2-page checklist/product

Priority page copy angles:

- Pillar: deadline clarity and affected/not affected table.
- Checklist: 12-point preflight; make this the main conversion page.
- Create app: shortest path to `hs project create`, upload/deploy/test-install.
- Command decision: when to use `hs app migrate` vs `hs project migrate`; private app warning.
- File structure: `app-hsmeta.json` placement and project-root troubleshooting.
- CI: Node/CLI/CI checks based on v8 community announcement.
- Marketplace: listing readiness checklist.

## Digital Product

Gumroad product name:

`Projects CLI App Creation Kit for HubSpot Developers`

Subtitle:

`Unofficial command map, preflight checklist, and app inventory tracker for the 2026 legacy public app creation sunset.`

Early pricing:

- $9 PDF only
- $19 PDF + Notion/Markdown + Sheet bundle
- $49 agency/team license

Deliverables:

1. 2-page PDF command cheatsheet
2. Markdown/Notion checklist
3. Google Sheet/CSV app inventory and preflight tracker
4. Developer handoff checklist

PDF page 1:

- event timeline
- affected/not affected table
- command decision tree
- new app path
- migration path warning

PDF page 2:

- CLI/Node/account/auth checks
- `app-hsmeta.json`/project structure checks
- Marketplace listing checks
- CI/CD checks
- source verification checklist

## Gumroad Copy Draft

Title: Projects CLI App Creation Kit for HubSpot Developers

Short description:

`A compact, unofficial checklist bundle for HubSpot developers moving new public app creation to Projects-based CLI workflows before the June 23, 2026 cutoff. Includes a command decision tree, preflight checklist, app inventory tracker, and Marketplace readiness checklist.`

Refund/accuracy note:

`This is an independent educational checklist, not official HubSpot documentation. It summarizes public HubSpot docs and links back to source pages. Always verify critical commands against the official docs before deploying.`

## Domain Directions

Do not use `hubspot` in the domain.

Safer directions:

- `appclimigration.com`
- `projectsappguide.com`
- `marketplaceappkit.com`
- `devappmigration.com`
- `publicappchecklist.com`

Avoid:

- `hubspotmigration.com`
- `hubspotclikit.com`
- `officialhubspotguide.com`
- any logo/brand-lookalike domain

## SEO Notes

Primary cluster:

- `hubspot legacy public app creation sunset`
- `hubspot public app creation disabled may 26 2026`
- `hubspot legacy public app june 23 2026`
- `hubspot projects cli checklist`
- `hs project create marketplace app`
- `hs app migrate vs hs project migrate`
- `hubspot private app projects migration`

Use exact dates in titles and headings where natural. Do not stuff keywords into duplicate pages.

## Promotion Plan

First 48 hours:

- Publish a source-linked HubSpot Community reply only where relevant; disclose independence and avoid spam.
- LinkedIn post for HubSpot developers/Solutions Partners: "May 26 vs June 23: what actually changes."
- Dev.to/Hashnode technical article pointing to the free checklist.
- Submit to Bing/Google after pages have source links and disclaimers.

## Risks

- Technical claims can go stale quickly; every page needs last-checked dates.
- HubSpot trademark risk if domain/branding looks official.
- Official docs can outrank; the product wins only if it is faster to use.
- Community promotion can be perceived as spam; post helpful summaries first.
- Private app path must be worded carefully because automatic CLI migration is not supported.

## Build Acceptance Criteria

- At least 12 content pages plus trust pages.
- Every page has unique intent and source links.
- Product CTA present but not misleading.
- Footer disclaimer visible site-wide.
- No HubSpot logo or official branding.
- No claim that existing legacy public apps stop functioning on May 26/June 23.
- `/updates` includes source-check log.
- Product files have at least outline-level content ready for Gumroad listing.

## Next Prompt For Build Agent

```text
Build a static Next.js site spec and initial content package for the HubSpot Projects CLI Sunset Kit using the research files in `/Users/jiawei/Documents/全新项目/research/`. Do not deploy or buy a domain. Create page outlines/content drafts for the 12 technical pages, source-link blocks, Gumroad product copy, and first PDF/Markdown/CSV product artifacts. Preserve the non-affiliation disclaimer and the correction that existing legacy public apps continue functioning.
```
