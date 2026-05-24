# Projects CLI App Creation Cheatsheet

Run time: 2026-05-24 13:14 Asia/Shanghai

Status: Markdown source for the first paid PDF artifact. Ready for formatting into a 2-page PDF after user confirmation. Do not publish as Gumroad without user confirmation.

## Product Context

Product: `Projects CLI App Creation Kit for HubSpot Developers`

Subtitle: `Unofficial command map, preflight checklist, and app inventory tracker for the 2026 legacy public app creation sunset.`

Required disclaimer:

`Unofficial guide. Not affiliated with, endorsed by, or sponsored by HubSpot. Always verify critical commands and platform behavior against the official HubSpot documentation before deploying.`

## Page 1: Timeline And Command Decision Map

### What Changed

HubSpot is disabling creation of new legacy public apps in two waves:

| Date | Who it affects | What changes | What does not change under this sunset |
|---|---|---|---|
| 2026-05-26 | Developer accounts created on or after this date | New legacy public app creation is disabled in the Developer Platform UI | Existing legacy public apps continue functioning |
| 2026-06-23 | Developer accounts created before 2026-05-26 | New legacy public app creation is disabled in the Developer Platform UI | Existing legacy public apps continue functioning |

Core rule:

`The May 26 / June 23 HubSpot event disables new legacy public app creation. Existing legacy public apps continue functioning under this specific sunset.`

### Pick The Right Path

| Your situation | Likely next step | Command or path to review |
|---|---|---|
| Creating a new public or Marketplace app | Start with the Projects-based developer platform and CLI workflow | `hs project create` |
| Existing non-project legacy public app you want to modernize | Review the public app migration path and limitations | `hs app migrate` |
| Existing project-based app on an older platform version | Review project migration to the latest platform version | `hs project migrate` |
| Existing private app | Treat as manual planning/review; do not assume automatic CLI migration | private app migration docs |
| App includes classic CRM cards | Plan a separate app-card modernization path | CRM cards / app cards docs |

### New Public App Command Flow

Use this as a sequence map, not a replacement for HubSpot docs:

```bash
# Confirm local CLI and account setup
hs --version
hs account auth

# Create a Projects-based app
hs project create

# Work locally
hs project dev

# Upload project and trigger a build
hs project upload

# Open/check the project in HubSpot
hs project open
```

Before running commands:

- Confirm the latest CLI requirement in HubSpot docs.
- Confirm local Node version and CI Node version.
- Confirm target developer account and account ID.
- Confirm whether the app is new public/Marketplace, existing public, project-based, or private.
- Confirm OAuth redirect URLs, scopes, and Marketplace listing requirements.

### Migration Decision Tree

```text
Are you creating a new public or Marketplace app?
  -> Use Projects-based app creation. Review hs project create.

Do you have an existing public app that is not already a project?
  -> Review hs app migrate and its limitations.

Do you already have a project-based app on an older platform version?
  -> Review hs project migrate.

Do you have a private app?
  -> Use a manual planning checklist. Do not assume automatic CLI migration.

Does the app include classic CRM cards?
  -> Add a separate app-card modernization workstream.
```

## Page 2: Preflight Checklist And Marketplace Readiness

### 15-Point Preflight Checklist

Environment and account:

- [ ] `hs --version` checked.
- [ ] CLI updated or pinned according to current HubSpot docs.
- [ ] Node version checked locally and in CI.
- [ ] CLI authenticated with the correct account.
- [ ] Target developer account ID recorded.

App classification:

- [ ] App classified as new public/Marketplace, existing legacy public, existing project app, or private app.
- [ ] New public app path uses Projects CLI app creation.
- [ ] Existing non-project public app path reviews `hs app migrate`.
- [ ] Existing project app path reviews `hs project migrate`.
- [ ] Private app path is marked for manual review.

Project and auth:

- [ ] `app-hsmeta.json` location checked.
- [ ] App UID / feature UIDs recorded and treated as stable.
- [ ] OAuth redirect URLs inventoried.
- [ ] Required scopes inventoried.
- [ ] Install/test account flow planned.

Marketplace and delivery:

- [ ] App listing owner assigned.
- [ ] Support URL/email ready.
- [ ] Privacy policy URL ready.
- [ ] Testing instructions drafted.
- [ ] Rollback owner identified before upload/deploy.

### Source Verification Links

- Legacy public app creation sunset: https://developers.hubspot.com/changelog/legacy-public-app-creation-sunset
- Legacy apps overview: https://developers.hubspot.com/docs/apps/legacy-apps/overview
- Create a new app using the CLI: https://developers.hubspot.com/docs/apps/developer-platform/build-apps/create-an-app
- Project commands: https://developers.hubspot.com/docs/developer-tooling/local-development/hubspot-cli/project-commands
- Migration overview: https://developers.hubspot.com/docs/apps/developer-platform/build-apps/migrate-an-app/overview
- Migrate existing public app: https://developers.hubspot.com/docs/apps/developer-platform/build-apps/migrate-an-app/migrate-an-existing-public-app
- Migrate existing private app: https://developers.hubspot.com/docs/apps/developer-platform/build-apps/migrate-an-app/migrate-an-existing-private-app
- Developer platform migration timeline: https://developers.hubspot.com/blog/developer-platform-migration-timeline

## PDF Formatting Notes

- Keep this to two pages.
- Do not use HubSpot logo, official colors as a brand system, or any wording that implies endorsement.
- Put the non-affiliation disclaimer in the footer of both pages.
- Put `Last checked: 2026-05-24` near the title.
- Use the command decision tree as the visual center of page 1.
- Use the checklist as the visual center of page 2.
