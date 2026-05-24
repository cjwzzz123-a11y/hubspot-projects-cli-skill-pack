# PRD: Projects CLI Skill Pack

Last updated: 2026-05-24

## Summary

Build an unofficial overseas content site and Gumroad product for HubSpot developers who need to create new public or Marketplace apps using Projects-based CLI workflows after the legacy public app creation sunset. The paid product is not only a PDF; it is an agent-ready skill pack plus concise checklists, source map, and trackers.

## Normalized Idea

For HubSpot public app developers, Solutions Partners, and RevOps engineers facing the May 26 / June 23, 2026 legacy public app creation sunset, this website helps them identify the correct Projects CLI path, run a source-linked preflight, and package the work into developer handoff artifacts, while clearly limiting the product to unofficial educational guidance that must be verified against HubSpot official docs before deployment.

## Primary User

- HubSpot Marketplace/public app developers.
- HubSpot Solutions Partners and agencies.
- RevOps or CRM engineers coordinating app migration work.
- Freelance HubSpot developers who need a reusable checklist.

## Problem

HubSpot official documentation is public and authoritative, but the migration surface is split across changelog posts, create-app docs, migration docs, CLI references, Marketplace listing docs, private app migration docs, and CRM card deprecation docs. Users need a decision workflow, not another long unstructured reading session.

## Current Workaround

Teams manually search multiple HubSpot docs and community threads, copy commands into internal notes, and rely on ad hoc judgment to choose between `hs project create`, `hs app migrate`, `hs project migrate`, or manual private app planning.

## Concrete Consequence

Teams can choose the wrong path, overreact to the May/June deadline, miss CLI or Node preflight requirements, misplace `app-hsmeta.json`, or ship a Marketplace listing without enough readiness checks.

## Product Promise

An unofficial, source-linked Projects CLI skill pack that helps an agent or developer:

- classify the app situation;
- pick the likely command path;
- identify affected vs not affected scenarios;
- run a Projects CLI preflight checklist;
- prepare Marketplace and CI readiness notes;
- generate developer handoff artifacts.

## Known Limitation

The product does not automate a HubSpot migration, does not certify compliance, and does not replace HubSpot official documentation. Commands and platform behavior must be verified against official docs before production use.

## Goals

- Ship a content site with 12 technical SEO pages and trust pages.
- Ship Gumroad-ready artifacts: PDF source Markdown, checklist, CSV tracker, developer handoff, source verification links, and skill folder.
- Keep every technical claim traceable to official sources or marked as research-derived.
- Use non-official branding and explicit disclaimers.
- Prepare Vercel deployment with placeholder Gumroad links until the user supplies final product URLs and domain.

## Non-Goals

- No paid SaaS account system in v1.
- No direct HubSpot account login or OAuth integration.
- No automated modification of customer HubSpot projects in v1.
- No claim of official HubSpot partnership, certification, or approval.
- No copying HubSpot official docs as a paid replacement.

## Must

- Preserve the May/June scope correction: new legacy public app creation is disabled; existing legacy public apps continue functioning under that specific event.
- Include source links and last-checked dates.
- Provide an agent skill workflow.
- Include privacy, terms, about, contact, and updates pages.
- Build with mobile-first responsive UX.

## Should

- Include a lightweight guided decision wizard.
- Include CTA tracking.
- Include Gumroad product cards and placeholder links.
- Include generated visual assets that avoid HubSpot branding and logos.

## Could

- Add a local source refresh script.
- Add downloadable ZIP packaging for the skill pack.
- Add multilingual Chinese internal notes later.

## Core Flow

1. User lands on the deadline or checklist page from search.
2. User sees the unofficial disclaimer and affected/not affected summary.
3. User selects their situation: new public app, existing legacy public app, project-based app, private app, or CRM card modernization.
4. Site returns likely next path and source links.
5. User downloads/buys the Gumroad bundle or uses the free checklist.
6. User runs the skill pack with their agent to produce a project-specific preflight and handoff.

## Routes

- `/`
- `/hubspot-legacy-public-app-creation-sunset`
- `/hubspot-projects-cli-checklist`
- `/hs-project-create-marketplace-app`
- `/hubspot-legacy-public-app-vs-projects-app`
- `/hs-app-migrate-vs-hs-project-migrate`
- `/hubspot-private-app-projects-migration`
- `/hubspot-developer-platform-2026-03-upgrade`
- `/hubspot-app-hsmeta-json-structure`
- `/hubspot-cli-node-ci-preflight`
- `/hubspot-legacy-crm-cards-to-app-cards`
- `/hubspot-marketplace-listing-checklist-2026`
- `/hubspot-projects-cli-faq`
- `/skill-pack`
- `/gumroad`
- `/updates`
- `/about`
- `/contact`
- `/privacy`
- `/terms`

## States

- Default: clear guide content with CTA.
- Wizard incomplete: prompt for app type and project state.
- Wizard result: likely path, checks, warnings, sources.
- Gumroad placeholder: product not yet published; allow email/contact CTA.
- Error/no result: recommend official docs and manual review.

## Analytics Events

- `wizard_started`
- `wizard_completed`
- `gumroad_click`
- `free_checklist_click`
- `source_link_click`
- `skill_pack_click`

## Supported Claims

- Source-linked summaries of official HubSpot docs.
- Product provides educational checklist, source map, and agent workflow.
- Gumroad assets are unofficial and independent.

## Prohibited Claims

- Official, certified, endorsed, guaranteed, complete migration automation.
- Existing legacy public apps stop functioning on May 26 or June 23, 2026.
- Private apps can be automatically migrated by CLI without limitation.
- The site can validate a real HubSpot account without access.

## Risks

- Official docs may change.
- Trademark confusion if branding is too close to HubSpot.
- Gumroad buyers may over-trust a checklist.
- SEO traffic window may be short.

## Success Metrics

- First 48 hours: site deployed, indexed pages submitted, Gumroad product ready.
- First week: source-linked pages live, free checklist downloads, Gumroad clicks.
- First month: search impressions for long-tail CLI/migration queries, paid sales, support questions that inform v2.

## Launch Criteria

- Docs and source map committed.
- Site builds locally.
- Core routes render on desktop and mobile.
- Disclaimers visible.
- Gumroad placeholders or final links configured.
- Vercel deployment verified by sentinel text.

## Open Questions

- Final domain.
- Final Gumroad product URLs.
- Whether to keep `HubSpot` in repository/product SEO titles while using a neutral brand name on the domain.
