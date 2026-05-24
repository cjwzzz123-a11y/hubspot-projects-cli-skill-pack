# Gumroad Product Pack Draft: HubSpot Projects CLI Sunset Kit

Run time: 2026-05-24 12:34 Asia/Shanghai

Status: Draft product artifact package. Ready for PDF formatting / Notion conversion / Gumroad listing setup after user confirmation.

## Product

Name: `Projects CLI App Creation Kit for HubSpot Developers`

Subtitle: `Unofficial command map, preflight checklist, and app inventory tracker for the 2026 legacy public app creation sunset.`

Short Gumroad description:

`A compact checklist bundle for HubSpot developers and agencies moving new public app creation to Projects-based CLI workflows before the June 23, 2026 cutoff. Includes a 2-page command map, preflight checklist, app inventory tracker, Marketplace readiness checklist, and developer handoff template.`

Non-affiliation note:

`Independent educational checklist. Not affiliated with, endorsed by, or sponsored by HubSpot. Verify critical commands and platform behavior against the official HubSpot documentation before deploying.`

## Target Buyer

- A developer who used to create HubSpot public apps through the legacy Developer Platform UI.
- A Solutions Partner or agency creating new Marketplace/public apps for clients after May 26 / June 23.
- A RevOps/CRM engineer who needs a clear handoff checklist for a developer.

## Pricing Draft

- PDF only: `$9`
- Full bundle: `$19`
- Agency/team license: `$49`

Full bundle contents:

1. `projects-cli-command-cheatsheet.pdf`
2. `projects-cli-preflight-checklist.md`
3. `hubspot-app-inventory-tracker.csv`
4. `developer-handoff-checklist.md`
5. `source-verification-links.md`

## PDF Draft: 2-Page Command Cheatsheet

### Page 1: Timeline + Command Decision Map

Header:

`HubSpot Projects CLI App Creation Cheatsheet`

Subheader:

`Unofficial checklist for the 2026 legacy public app creation sunset. Last checked: 2026-05-24.`

Disclaimer:

`Not official HubSpot documentation. Use this as a planning checklist and verify commands against HubSpot's docs before deploy.`

#### 1. What Changed

| Date | Who it affects | What changes | What does not change under this sunset |
|---|---|---|---|
| 2026-05-26 | Developer accounts created on or after this date | Cannot create new legacy public apps | Existing legacy public apps continue functioning |
| 2026-06-23 | Developer accounts created before 2026-05-26 | Cannot create new legacy public apps | Existing legacy public apps continue functioning |

Core rule:

`For new public/Marketplace app development, start with the Projects-based developer platform and HubSpot CLI workflow.`

#### 2. Pick the Right Path

| Your situation | Likely next step | Verify in official docs |
|---|---|---|
| Creating a new public/Marketplace app | Use Projects-based app creation with CLI | Create an app docs + CLI project commands |
| Existing non-project legacy public app you want to modernize | Review `hs app migrate` path | Migrate existing public app docs |
| Existing project-based app on an older platform version | Review `hs project migrate` path | Migrate to latest platform version docs |
| Existing private app | Do not assume automatic CLI migration | Private app migration docs |
| Legacy CRM card modernization | Plan separate app-card migration before October 31, 2026 | CRM cards changelog/docs |

#### 3. New Public App Command Flow

Use as a sequence map, not as a substitute for official docs:

```bash
# 1. Confirm local CLI and account setup
hs --version
hs account auth

# 2. Create a Projects-based app
hs project create

# 3. Work locally and verify project structure
hs project dev

# 4. Upload when ready
hs project upload

# 5. Open/check project in HubSpot
hs project open
```

Before running:

- Confirm required CLI version in current docs.
- Confirm Node version requirement in current docs / CLI release notes.
- Confirm account access and target account ID.
- Confirm the app type is public/Marketplace, not private.

#### 4. Migration Command Decision

```text
Are you creating a new public app?
  -> Start with Projects CLI app creation.

Do you have an existing non-project legacy public app?
  -> Review `hs app migrate`.

Do you already have a project app and need latest platform version?
  -> Review `hs project migrate`.

Do you have a private app?
  -> Use manual planning; automatic CLI migration is not currently supported.
```

### Page 2: Preflight Checklist + Marketplace Readiness

#### 5. 15-Point Preflight Checklist

CLI and local environment:

- [ ] `hs --version` checked.
- [ ] Node version checked against current CLI guidance.
- [ ] CLI authenticated with `hs account auth`.
- [ ] Target account ID and permissions confirmed.
- [ ] No production deploy before official docs are rechecked.

Project structure:

- [ ] Project created with current Projects CLI flow.
- [ ] `app-hsmeta.json` location verified from project root.
- [ ] App UID / identifiers recorded and not casually regenerated.
- [ ] OAuth redirect URLs inventoried.
- [ ] Required scopes inventoried.

Migration decision:

- [ ] App classified as new public, existing legacy public, project-based app, or private app.
- [ ] `hs app migrate` vs `hs project migrate` decision documented.
- [ ] Private apps flagged for manual planning if relevant.

Marketplace readiness:

- [ ] App listing owner assigned.
- [ ] Support URL/email ready.
- [ ] Privacy policy URL ready.
- [ ] Testing instructions drafted.
- [ ] OAuth install flow tested in a developer/test account.

CI/CD:

- [ ] CI Node version pinned/updated.
- [ ] CLI install step documented.
- [ ] Account/auth secret handling reviewed.
- [ ] Deprecated/changed CLI commands checked against current reference.
- [ ] Rollback owner identified.

#### 6. Source Links to Verify

- Legacy Public App Creation Sunset: https://developers.hubspot.com/changelog/legacy-public-app-creation-sunset
- Create a new app with CLI: https://developers.hubspot.com/docs/apps/developer-platform/build-apps/create-an-app
- Migration overview: https://developers.hubspot.com/docs/apps/developer-platform/build-apps/migrate-an-app/overview
- Migrate existing public app: https://developers.hubspot.com/docs/apps/developer-platform/build-apps/migrate-an-app/migrate-an-existing-public-app
- Migrate to latest platform version: https://developers.hubspot.com/docs/apps/developer-platform/build-apps/migrate-an-app/migrate-to-the-latest-platform-version
- Private app migration: https://developers.hubspot.com/docs/apps/developer-platform/build-apps/migrate-an-app/migrate-an-existing-private-app
- CLI reference: https://developers.hubspot.com/docs/developer-tooling/local-development/hubspot-cli/reference
- Project commands: https://developers.hubspot.com/docs/developer-tooling/local-development/hubspot-cli/project-commands
- Marketplace listing: https://developers.hubspot.com/docs/apps/developer-platform/list-apps/listing-your-app/listing-your-app

## Markdown / Notion Checklist Draft

Title: `Projects CLI Preflight Checklist`

### Step 1: Classify the app

- [ ] New public/Marketplace app.
- [ ] Existing legacy public app.
- [ ] Existing project-based app.
- [ ] Existing private app.
- [ ] App includes legacy CRM cards.

Decision note:

`The May/June 2026 event concerns new legacy public app creation. It is not an immediate shutdown of existing legacy public apps.`

### Step 2: Confirm deadline relevance

- [ ] Account created on or after 2026-05-26.
- [ ] Account created before 2026-05-26.
- [ ] Team needs to create new public apps after 2026-06-23.
- [ ] Existing app only, no new public app creation needed.

### Step 3: Prepare local CLI

- [ ] Install/update HubSpot CLI.
- [ ] Run `hs --version`.
- [ ] Confirm Node version.
- [ ] Authenticate with `hs account auth`.
- [ ] Confirm target account.

### Step 4: Choose command path

- [ ] New app: review `hs project create`.
- [ ] Existing non-project public app: review `hs app migrate`.
- [ ] Existing project app: review `hs project migrate`.
- [ ] Private app: document manual rebuild/review path.

### Step 5: Verify project structure

- [ ] Project root identified.
- [ ] `app-hsmeta.json` present where expected.
- [ ] UID/identifier handling documented.
- [ ] OAuth redirect URLs documented.
- [ ] Scopes documented.

### Step 6: Marketplace readiness

- [ ] App name and description drafted.
- [ ] Support contact ready.
- [ ] Privacy policy ready.
- [ ] Install/testing instructions ready.
- [ ] Demo/test account flow ready.

### Step 7: CI/CD readiness

- [ ] Node version pinned.
- [ ] CLI install command reviewed.
- [ ] Secrets/account IDs stored safely.
- [ ] Upload command reviewed.
- [ ] Rollback/owner documented.

### Step 8: Source verification before deploy

- [ ] Legacy sunset changelog checked.
- [ ] Create app docs checked.
- [ ] Migration docs checked.
- [ ] CLI reference checked.
- [ ] Marketplace listing docs checked.

## Developer Handoff Checklist

Use this when a RevOps lead, agency PM, or technical lead hands the work to a developer.

### Context

- Account name:
- HubSpot account ID:
- App name:
- App type:
- Target launch date:
- Owner:
- Reviewer:

### Required decision

The team must decide:

- Is this a new public/Marketplace app?
- Is this an existing legacy public app to modernize?
- Is this an existing project-based app to upgrade?
- Is this a private app requiring manual planning?

### What changed

`HubSpot is sunsetting new legacy public app creation on May 26 / June 23, 2026. Existing legacy public apps continue functioning under this specific sunset. New public/Marketplace app development should use the Projects-based CLI workflow.`

### Developer tasks

- [ ] Verify official HubSpot changelog and docs.
- [ ] Confirm CLI and Node versions.
- [ ] Authenticate CLI to the correct account.
- [ ] Create or inspect project structure.
- [ ] Choose command path.
- [ ] Inventory OAuth redirects, scopes, cards, timeline/events, webhooks, and listing requirements.
- [ ] Test in a developer/test account.
- [ ] Document deploy and rollback path.

### Links

- Official changelog:
- Create app docs:
- Migration docs:
- CLI docs:
- Marketplace docs:
- Internal repo:
- Internal runbook:

## Gumroad Listing Draft

### Headline

`Projects CLI App Creation Kit for HubSpot Developers`

### Subheadline

`A 2026 command map, preflight checklist, and app inventory tracker for teams moving new public app creation to HubSpot's Projects CLI workflow.`

### Bullets

- Know whether May 26 or June 23 actually affects your app workflow.
- Pick the right path: new Projects app, `hs app migrate`, `hs project migrate`, or manual private-app planning.
- Run a fast CLI/account/project preflight before you touch production.
- Track OAuth, scopes, Marketplace listing fields, CI checks, and owners in one CSV.
- Hand a developer a clear checklist instead of a pile of links.

### Important Note

`This bundle is independent and educational. It is not official HubSpot documentation and does not guarantee migration success. Always verify commands, dates, and platform behavior against HubSpot's official docs before deploying.`

## Next Production Step

Convert the PDF draft to a two-page layout and the checklist to a Notion-compatible Markdown page. Use the CSV tracker file created alongside this pack for the spreadsheet artifact.
