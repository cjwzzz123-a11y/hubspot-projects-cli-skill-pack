# Developer Handoff Checklist: HubSpot Projects CLI Sunset Kit

Run time: 2026-05-24 13:14 Asia/Shanghai

Status: Product artifact draft for agency/RevOps handoff. Ready for PDF appendix, Notion page, or client-facing Markdown after user confirmation.

## Disclaimer

Unofficial checklist. Not affiliated with, endorsed by, or sponsored by HubSpot. Verify critical commands and platform behavior against the official HubSpot documentation before deploying.

## Handoff Context

- Client / team:
- HubSpot account name:
- HubSpot account ID:
- Developer account creation date:
- App name:
- App type:
- Current platform version:
- Target launch or migration date:
- Internal owner:
- Developer owner:
- Reviewer:
- Marketplace listing owner:
- CI/CD owner:

## Critical Scope Statement

HubSpot is sunsetting new legacy public app creation on May 26 / June 23, 2026. Existing legacy public apps continue functioning under this specific sunset. New public or Marketplace app development should use the Projects-based CLI workflow.

## Required Decision

Choose one primary path before development starts:

- [ ] New public/Marketplace app: use Projects-based app creation and review `hs project create`.
- [ ] Existing non-project legacy public app: review `hs app migrate`.
- [ ] Existing project-based app on older platform version: review `hs project migrate`.
- [ ] Existing private app: use manual planning/review; do not assume automatic CLI migration.
- [ ] Classic CRM cards present: create separate app-card modernization task.

## Developer Tasks

Environment:

- [ ] Verify official HubSpot changelog and docs.
- [ ] Confirm HubSpot CLI version.
- [ ] Confirm local Node version.
- [ ] Confirm CI Node version.
- [ ] Authenticate CLI to the correct account.
- [ ] Confirm target developer account ID.

App/project:

- [ ] Confirm whether `hsproject.json` exists.
- [ ] Record `platformVersion`.
- [ ] Confirm `app-hsmeta.json` location.
- [ ] Record stable app and feature UIDs.
- [ ] Inventory OAuth redirect URLs.
- [ ] Inventory required scopes.
- [ ] Document test-install plan.

Marketplace/public app:

- [ ] Confirm app distribution model.
- [ ] Assign Marketplace listing owner.
- [ ] Prepare support URL/email.
- [ ] Prepare privacy policy URL.
- [ ] Draft testing instructions.
- [ ] Confirm install flow in developer/test account.

Risk controls:

- [ ] Recheck official docs before production upload/deploy.
- [ ] Do not print secrets, tokens, or client IDs in logs or public docs.
- [ ] Document rollback owner.
- [ ] Flag any unsupported migration features.
- [ ] Record open questions before client signoff.

## Client/PM Questions

- Will the team need to create new public apps after 2026-06-23?
- Is this only maintenance of an existing legacy public app?
- Is this a public/Marketplace app or a private app?
- Does the app have active installs?
- Does the app include classic CRM cards, settings pages, timeline events, or serverless functions?
- Who owns Marketplace listing materials?
- Who owns support and privacy policy URLs?
- What date must the developer finish source verification?

## Final Signoff

- [ ] App path selected.
- [ ] Official source links rechecked.
- [ ] CLI and Node versions recorded.
- [ ] OAuth/scopes/UIDs documented.
- [ ] Marketplace readiness reviewed.
- [ ] CI/CD owner assigned.
- [ ] Rollback owner assigned.
- [ ] Non-affiliation and source-verification notes included in any client-facing output.

## Source Links

- Legacy public app creation sunset: https://developers.hubspot.com/changelog/legacy-public-app-creation-sunset
- Create a new app using the CLI: https://developers.hubspot.com/docs/apps/developer-platform/build-apps/create-an-app
- Project commands: https://developers.hubspot.com/docs/developer-tooling/local-development/hubspot-cli/project-commands
- Migration overview: https://developers.hubspot.com/docs/apps/developer-platform/build-apps/migrate-an-app/overview
- Migrate existing public app: https://developers.hubspot.com/docs/apps/developer-platform/build-apps/migrate-an-app/migrate-an-existing-public-app
- Migrate existing private app: https://developers.hubspot.com/docs/apps/developer-platform/build-apps/migrate-an-app/migrate-an-existing-private-app
