# Projects CLI Preflight Checklist

Run time: 2026-05-24 13:14 Asia/Shanghai

Status: Markdown/Notion-ready product artifact. Ready to convert into Notion, PDF appendix, or a static site download preview after user confirmation.

## Disclaimer

Unofficial guide. Not affiliated with, endorsed by, or sponsored by HubSpot. Always verify critical commands and platform behavior against the official HubSpot documentation before deploying.

## Critical Scope Rule

The May 26 / June 23 HubSpot event disables new legacy public app creation. Existing legacy public apps continue functioning under this specific sunset.

## Step 1: Classify The App

- [ ] New public or Marketplace app.
- [ ] Existing legacy public app.
- [ ] Existing project-based public app.
- [ ] Existing private app.
- [ ] App includes classic CRM cards.
- [ ] App includes settings pages.
- [ ] App includes webhooks.
- [ ] App includes custom workflow actions.
- [ ] App includes timeline events.
- [ ] App includes serverless functions.

Decision note:

`Do not choose a migration command until the app type and current platform/project state are clear.`

## Step 2: Confirm Deadline Relevance

- [ ] Developer account created on or after 2026-05-26.
- [ ] Developer account created before 2026-05-26.
- [ ] Team needs to create a new public app after 2026-06-23.
- [ ] Team only needs to maintain an existing legacy public app.
- [ ] Team needs to modernize an existing public app.
- [ ] Team needs to migrate or review a private app.

## Step 3: Prepare Local CLI

- [ ] Install or update HubSpot CLI according to current docs.
- [ ] Run `hs --version`.
- [ ] Confirm local Node version.
- [ ] Confirm CI Node version.
- [ ] Authenticate with the correct HubSpot account.
- [ ] Record target developer account ID.
- [ ] Confirm the developer has required account access.

## Step 4: Choose Command Path

| App situation | Review first | Notes |
|---|---|---|
| New public/Marketplace app | `hs project create` | Use latest Projects-based app creation path |
| Existing non-project legacy public app | `hs app migrate` | Review prerequisites, limitations, and Marketplace/install conditions |
| Existing project-based app on older platform version | `hs project migrate` | Check current `platformVersion` first |
| Existing private app | private app migration docs | Treat as manual planning/review |
| Classic CRM cards present | app-card modernization docs | Separate workstream from the May/June creation sunset |

## Step 5: Inventory Project And Auth Details

- [ ] Project root identified.
- [ ] `hsproject.json` present or absence documented.
- [ ] `platformVersion` recorded.
- [ ] `app-hsmeta.json` location checked.
- [ ] App UID recorded.
- [ ] Feature UIDs recorded.
- [ ] OAuth client ID/secret handling documented.
- [ ] OAuth redirect URLs inventoried.
- [ ] Required scopes inventoried.
- [ ] Install URL / test install flow documented.

## Step 6: Marketplace Readiness

- [ ] Marketplace listing owner assigned.
- [ ] App name and short description drafted.
- [ ] Support email or URL ready.
- [ ] Privacy policy URL ready.
- [ ] Terms URL ready if required.
- [ ] Testing instructions drafted.
- [ ] Demo/test account flow ready.
- [ ] Screenshots/assets reviewed for accuracy and permissions.

## Step 7: CI/CD Readiness

- [ ] Node version pinned or documented.
- [ ] CLI install/update command reviewed.
- [ ] Account/auth secret handling reviewed.
- [ ] Upload/deploy command reviewed.
- [ ] Logs do not print tokens or secrets.
- [ ] Rollback owner identified.
- [ ] Source docs will be rechecked before production deploy.

## Step 8: Migration Risk Notes

- [ ] Existing app installs and auth behavior reviewed before migration.
- [ ] Unsupported migration features checked in HubSpot docs.
- [ ] CRM card replacement plan drafted if needed.
- [ ] Settings page replacement plan drafted if needed.
- [ ] Timeline event endpoint changes reviewed if relevant.
- [ ] Private app serverless-function limitations reviewed if relevant.
- [ ] Client owner understands that this checklist is not official documentation.

## Step 9: Final Source Verification

Before deploy or client handoff, re-open:

- Legacy public app creation sunset changelog.
- Create app using CLI docs.
- Project commands docs.
- Migration overview.
- Migrate existing public app docs.
- Migrate existing private app docs.
- Marketplace listing docs if publishing publicly.
- Developer platform migration timeline if CRM cards or platform-version deadlines apply.

## Site Preview Split

Free preview on site:

- Step 1 app classification.
- Step 2 deadline relevance.
- Step 4 command path table.
- A short source verification list.

Paid bundle:

- Full checklist.
- PDF command map.
- CSV tracker.
- Developer handoff checklist.
