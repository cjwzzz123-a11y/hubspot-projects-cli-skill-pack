# Deep Evaluation: HubSpot Projects CLI Sunset Kit

Run time: 2026-05-24 11:55 Asia/Shanghai

Automation: static content site + Gumroad digital product + SEO event-window opportunity research.

## Verdict

Project name: HubSpot Projects CLI Sunset Kit

One-line positioning: An unofficial, developer-focused checklist and command cheatsheet for teams that must stop creating legacy public HubSpot apps and start using Projects-based CLI app workflows before the May 26 / June 23, 2026 cutoff.

Recommendation: **Go**

Buy Score: **8.6 / 10**

Decision status: Ready for build spec and first Gumroad product outline. Do not do more broad scanning before this is either built or intentionally paused.

## Core Thesis

HubSpot has created a narrow, dated, high-intent developer migration window: new developer accounts lose legacy public app creation on 2026-05-26, existing accounts lose it on 2026-06-23, and new Marketplace/public app development must move to Projects-based CLI workflows. Official documentation exists, but it is split across changelog, app creation docs, migration docs, CLI reference, Marketplace listing docs, CRM card deprecation docs, and community threads.

The opportunity is not to replace official docs. The opportunity is to package a decision tree, CLI command map, preflight checklist, project structure reference, and first-build flow into a compact paid PDF/Notion kit, supported by a free SEO site with 12-16 task-specific pages.

Important scope correction from prior notes: HubSpot says existing legacy public apps continue to function and are not affected by the legacy public app creation sunset. Therefore the urgent copy should be framed around **new public app creation and Projects CLI adoption**, with a secondary migration path for teams choosing to modernize existing public apps.

## Confirmed Facts

1. HubSpot announced "Legacy Public App Creation Sunset" on 2026-04-23, live on 2026-05-26.
2. From 2026-05-26, accounts created on or after that date cannot create new legacy public apps in the Developer Platform UI.
3. From 2026-06-23, accounts created before 2026-05-26 also lose legacy public app creation.
4. Existing legacy public apps continue to function as-is; existing or new legacy private apps are not affected by this specific change.
5. HubSpot directs new Marketplace/public app development to the Projects-based app platform using the HubSpot CLI.
6. HubSpot's create-app docs say apps on the new developer platform are initialized with the CLI and `hs project create`; prerequisites include installing/authenticating the CLI and using CLI v7.6.0 before proceeding.
7. HubSpot's migration docs describe migration paths to developer platform version `2026.03`, including `hs app migrate` for non-project legacy public apps and `hs project migrate` for project-based apps.
8. HubSpot docs state private app automatic CLI migration is not currently supported.
9. HubSpot's CLI reference includes `hs app migrate`, `hs project dev`, `hs project upload`, dependency updates, validation, and project commands.
10. Legacy CRM cards are deprecated on 2026-10-31 and should move to modern app cards.
11. Community threads show real friction around first project creation, feature enablement, app events, CLI v8 breaking changes, Node 20 requirements, `app-hsmeta.json` placement, and CI/CD command compatibility.

## Source Links

Primary official sources:

- HubSpot changelog: Legacy Public App Creation Sunset: https://developers.hubspot.com/changelog/legacy-public-app-creation-sunset
- HubSpot docs: determine migration path to 2026.03: https://developers.hubspot.com/docs/apps/developer-platform/build-apps/migrate-an-app/overview
- HubSpot docs: migrate an existing public app: https://developers.hubspot.com/docs/apps/developer-platform/build-apps/migrate-an-app/migrate-an-existing-public-app
- HubSpot docs: migrate to latest platform version 2026.03: https://developers.hubspot.com/docs/apps/developer-platform/build-apps/migrate-an-app/migrate-to-the-latest-platform-version
- HubSpot docs: migrate an existing private app: https://developers.hubspot.com/docs/apps/developer-platform/build-apps/migrate-an-app/migrate-an-existing-private-app
- HubSpot docs: create a new app using the CLI: https://developers.hubspot.com/docs/apps/developer-platform/build-apps/create-an-app
- HubSpot CLI project commands reference: https://developers.hubspot.com/docs/developer-tooling/local-development/hubspot-cli/project-commands
- HubSpot CLI commands overview: https://developers.hubspot.com/docs/developer-tooling/local-development/hubspot-cli/reference
- HubSpot docs: developer platform overview: https://developers.hubspot.com/docs/apps/developer-platform/build-apps/overview
- HubSpot docs: Marketplace listing your app: https://developers.hubspot.com/docs/apps/developer-platform/list-apps/listing-your-app/listing-your-app
- HubSpot docs: app listing requirements: https://developers.hubspot.com/docs/api/app-marketplace-listing-requirements
- HubSpot docs: legacy CRM cards: https://developers.hubspot.com/docs/api-reference/crm-public-app-crm-cards-v3/guide
- HubSpot changelog: deprecating classic/legacy CRM cards: https://developers.hubspot.com/changelog/deprecating-support-for-classic-crm-cards

Community and pain sources:

- Community: trying to create app/project; first-step CLI/project friction: https://community.hubspot.com/t5/HubSpot-Native-Apps/Trying-to-create-app-project/m-p/1246945
- Community: HubSpot CLI v8.0.0 breaking changes and CI/CD notes: https://community.hubspot.com/t5/Developer-Announcements/Introducing-HubSpot-CLI-v8-0-0/td-p/1245222
- Community: app-hsmeta.json project-root detection issue: https://community.hubspot.com/t5/APIs-Integrations/hs-project-upload-CLI-can-t-detect-app-hsmeta-json-in-project/m-p/1236157
- Community: App Events disabled during Marketplace project creation: https://community.hubspot.com/t5/CRM/Request-to-Enable-App-Events-Timeline-events-for-dev-account/m-p/1205937

## Scorecard

| Dimension | Score | Notes |
|---|---:|---|
| Event Timing | 10 | New-account cutoff is 2026-05-26; existing-account cutoff is 2026-06-23. |
| Search Demand | 7 | Narrow developer audience, but high-intent queries around CLI, migration, project creation, and errors. |
| Pain Intensity | 8 | Teams building Marketplace apps need a working path; first-build and CLI friction are visible. |
| SERP Gap | 9 | Official docs dominate; little evidence of a compact paid checklist/cheatsheet product. |
| Page Cluster Potential | 8 | 12-16 task pages fit naturally without thin duplication. |
| Product Fit | 9 | PDF cheatsheet, Notion checklist, and Google Sheet audit tracker fit the pain. |
| Competition Risk | 7 | Official docs are comprehensive; product must be faster to use, not more authoritative. |
| Copyright Risk | 8 | Low if no logo, no copied docs, no official-style branding, no HubSpot in domain. |
| Build Speed | 9 | Static site + PDF/Notion can be shipped in 24-48 hours. |
| Maintenance Cost | 6 | Platform docs and CLI versions can change; needs last-updated discipline. |
| Promotion Potential | 8 | HubSpot Community, Developer Slack, LinkedIn RevOps/developer audience, partner agencies. |
| Expansion Potential | 7 | Can expand into app cards, Marketplace listing, private app manual migration, CI/CD scripts. |

Weighted judgment: **8.6 / 10**.

## Target Users

- HubSpot Marketplace app developers starting a new public app after 2026-05-26.
- Existing HubSpot app developers who need to understand Projects-based workflows before 2026-06-23.
- Solutions Partners and CRM/dev agencies maintaining multiple client integrations.
- RevOps engineers who need to brief developers on app creation, Marketplace listing, and app-card migration.
- Freelance HubSpot developers who need a fast command/reference pack.

## User Pain

- "I used to create public apps in the UI; what is the new CLI path?"
- "Which command do I run: `hs get-started`, `hs project create`, `hs app migrate`, or `hs project migrate`?"
- "Is my existing legacy public app broken on May 26? What actually changes?"
- "Can I migrate private apps automatically?"
- "What does the new project structure look like?"
- "Where does `app-hsmeta.json` belong?"
- "Which CLI version and Node version should CI use?"
- "What changes for OAuth, refresh tokens, app cards, and Marketplace listing?"
- "What do I need to check before submitting a Marketplace app?"

## 24-48 Hour MVP Scope

Static site:

1. Publish 12 core pages listed in the sitemap below.
2. Add clear "Unofficial guide, not affiliated with HubSpot" disclaimer in footer and near product CTA.
3. Use source-linked, last-updated content blocks on every technical page.
4. Add Gumroad CTA for an early-bird PDF/Notion bundle.

Digital product:

1. 2-page PDF command cheatsheet.
2. Notion checklist or Markdown checklist.
3. Google Sheet app-preflight tracker.
4. Bonus: copy-paste developer handoff checklist.

Do not include untested code beyond CLI commands and config skeletons clearly marked as examples. Do not claim automated migration. Do not use HubSpot logos, official visual style, or official-sounding domain names.

## MVP 12-Page Sitemap

Pillar page:

1. `/hubspot-legacy-public-app-creation-sunset`  
   Keyword: `hubspot legacy public app creation sunset`  
   Purpose: Explain May 26 / June 23 dates, who is affected, and what to do next.

Task pages:

2. `/hubspot-projects-cli-checklist`  
   Keyword: `hubspot projects cli checklist`  
   Purpose: One-page preflight checklist for Node, CLI, auth, account, project, upload.

3. `/hs-project-create-marketplace-app`  
   Keyword: `hs project create marketplace app`  
   Purpose: New public app creation path from CLI to test install.

4. `/hubspot-legacy-public-app-vs-projects-app`  
   Keyword: `hubspot legacy public app vs projects app`  
   Purpose: Decision guide and scope correction.

5. `/hs-app-migrate-vs-hs-project-migrate`  
   Keyword: `hs app migrate vs hs project migrate`  
   Purpose: Command decision tree by app type/version.

6. `/hubspot-private-app-projects-migration`  
   Keyword: `hubspot private app projects migration`  
   Purpose: Explain private app manual path and automatic migration limitation.

7. `/hubspot-developer-platform-2026-03-upgrade`  
   Keyword: `hubspot developer platform 2026.03 upgrade`  
   Purpose: Version path from 2025.1/2025.2/legacy to 2026.03.

8. `/hubspot-app-hsmeta-json-structure`  
   Keyword: `hubspot app-hsmeta.json structure`  
   Purpose: File location, UID caution, and project skeleton.

9. `/hubspot-cli-v8-node-20-ci-checklist`  
   Keyword: `hubspot cli v8 node 20 ci checklist`  
   Purpose: CI/CD checks based on community v8 breaking-change notes.

10. `/hubspot-legacy-crm-cards-to-app-cards`  
    Keyword: `hubspot legacy CRM cards app cards October 31 2026`  
    Purpose: Secondary deadline and migration planning.

11. `/hubspot-marketplace-listing-checklist-2026`  
    Keyword: `hubspot marketplace listing checklist 2026`  
    Purpose: Listing wizard, review info, testing info, support info.

12. `/hubspot-projects-cli-faq`  
    Keyword: `hubspot projects cli faq`  
    Purpose: Answers common confusion with source links.

Trust/support pages:

13. `/updates`  
    Purpose: Last updated, source-change log, official docs checked.

14. `/about`  
15. `/contact`  
16. `/privacy`  
17. `/terms`

## First Gumroad Product Outline

Product title: Projects CLI App Creation Kit for HubSpot Developers

Subtitle: Unofficial command cheatsheet and preflight checklist for the 2026 legacy public app creation sunset.

Format:

- PDF, 2 pages
- Notion checklist
- Google Sheet tracker
- Markdown copy for internal developer handoff

Early-bird price:

- PDF only: $9
- PDF + Notion + Sheet bundle: $19
- Agency license: $49

PDF Page 1: Command map and decision tree

- Who is affected by May 26 and June 23
- Who is not affected by this specific sunset
- New public app path: `hs account auth`, `hs project create`, `hs project upload`, `hs project open`, test install
- Existing public app path: when to consider `hs app migrate`
- Project-based app path: when to use `hs project migrate`
- Private app warning: automatic CLI migration not supported

PDF Page 2: Preflight checklist

- CLI version check
- Node version check
- Account/auth check
- Developer test account check
- `platformVersion` check
- `app-hsmeta.json` location check
- OAuth redirect URL check
- UID stability warning
- App cards / legacy CRM cards warning
- Marketplace listing readiness checklist
- CI/CD check for CLI v8, Node 20, `HUBSPOT_ACCOUNT_ID`, and deprecated commands

Google Sheet tabs:

1. App inventory
2. Account and CLI preflight
3. Feature inventory
4. Migration command decision
5. Marketplace listing readiness
6. Risks and owners

## CTA Placement

- Pillar page: after "Who is affected?" and after "What to do this week?"
- Checklist page: above the fold as "Download the 2-page checklist"
- Command decision tree page: after command table
- Private app page: after limitation summary, framed as "avoid choosing the wrong migration path"
- Marketplace listing page: after seven-tab listing checklist
- FAQ: after first five FAQs

## Safe Domain Directions

Avoid `hubspot` in the domain. Use "HubSpot" only descriptively in page title/copy, with no official-affiliation implication.

Options:

- `appclimigration.com`
- `projectsappguide.com`
- `marketplaceappkit.com`
- `devappmigration.com`
- `publicappchecklist.com`

Avoid:

- `hubspotmigrate.com`
- `hubspotclikit.com`
- `officialhubspotguide.com`
- `hubappmigration.com`

## Competition Risk

Primary competition is HubSpot's own documentation, not independent creators. The paid product must win on compression, sequencing, checklists, and deadline-specific clarity.

Specific risks:

- Official docs may add a clearer checklist after the cutoff.
- HubSpot Community answers may solve individual issues for free.
- Developer audience is smaller than Shopify/Google Ads.
- Accuracy mistakes can destroy trust quickly.

Mitigation:

- Link every technical page to official sources.
- Use "last checked" notes.
- Keep paid product compact and operational.
- Avoid claims like "complete migration automation."

## Copyright and Trademark Risk

Risk level: manageable.

Rules:

- No HubSpot logo or sprocket icon.
- No copied official diagrams or screenshots as core assets.
- No official-looking color/brand treatment.
- No HubSpot in domain.
- Prominent disclaimer: "Unofficial guide. Not affiliated with or endorsed by HubSpot."
- Use HubSpot only as descriptive reference.

## Go / No-Go Conditions

Go now if:

- We can ship the pillar + checklist + product page within 24-48 hours.
- The product is positioned as a quick-reference kit, not a replacement for official docs.
- The first PDF stays source-linked and version-stamped.
- Gumroad product is ready before or immediately after the 2026-05-26 new-account cutoff.

No-Go / pause if:

- We cannot produce the checklist without relying on copied official text.
- We cannot keep current with HubSpot CLI/platform changes through at least 2026-06-23.
- HubSpot publishes an official one-page command/checklist kit that removes the compression gap.
- Distribution cannot be done in HubSpot Community, LinkedIn, or partner/dev channels without spam risk.

## Next Task Prompt For Build Agent

Build an SEO-first static Next.js site for an unofficial "Projects CLI App Creation Kit for HubSpot Developers." Use the research files:

- `/Users/jiawei/Documents/全新项目/research/deep-evaluation-2026-05-24-hubspot-projects-cli-sunset.md`
- `/Users/jiawei/Documents/全新项目/research/keyword-serp-plan-2026-05-24-hubspot-projects-cli-sunset.md`

Requirements:

1. Create 12 content pages plus updates/about/contact/privacy/terms.
2. Every technical page needs last-updated date, source links, and disclaimer.
3. Above-the-fold content should solve the task immediately; no generic landing page.
4. CTA points to a placeholder Gumroad product URL until the product exists.
5. No HubSpot logos, no official styling, no copied docs.
6. Include a downloadable free preview checklist as Markdown or PDF if time allows.
7. Use schema-friendly FAQ sections where appropriate.
8. Use concise developer-facing copy and code blocks for commands.

Acceptance:

- Site builds locally.
- All source links work.
- CTA and disclaimer are present.
- Pillar and checklist pages are polished enough to submit to Search Console.
- No official-affiliation language.

