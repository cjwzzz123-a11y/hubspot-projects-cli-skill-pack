# Projects CLI Preflight Checklist

Last checked: 2026-05-24

## Classify

- [ ] New public/Marketplace app.
- [ ] Existing non-project legacy public app.
- [ ] Existing project-based app.
- [ ] Existing private app.
- [ ] Uses classic/legacy CRM cards.

## Environment

- [ ] HubSpot CLI installed.
- [ ] `hs --version` recorded.
- [ ] Node version recorded and checked against current docs.
- [ ] `hs account auth` completed for the correct account.
- [ ] Account ID and permissions confirmed.

## Project Files

- [ ] `hsproject.json` exists or absence is documented.
- [ ] `platformVersion` recorded.
- [ ] `app-hsmeta.json` location verified.
- [ ] OAuth redirect URLs inventoried.
- [ ] Required scopes inventoried.
- [ ] UID/identifier changes reviewed before upload.

## Command Path

- [ ] `hs project create` reviewed for new app creation.
- [ ] `hs app migrate` reviewed for non-project legacy public apps.
- [ ] `hs project migrate` reviewed for project-based migration.
- [ ] Private app manual limitations reviewed.

## Marketplace

- [ ] App listing owner assigned.
- [ ] Privacy policy URL ready.
- [ ] Support URL/email ready.
- [ ] Testing instructions drafted.
- [ ] OAuth install flow tested in a developer/test account.

## CI/CD

- [ ] Node version pinned.
- [ ] CLI install/update step documented.
- [ ] Secret/account handling reviewed.
- [ ] Deprecated commands checked against current CLI reference.
- [ ] Rollback owner identified.

