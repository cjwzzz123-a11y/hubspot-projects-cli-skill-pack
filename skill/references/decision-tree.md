# Projects CLI Decision Tree

Last checked: 2026-05-24

## Scope Boundary

The May 26 / June 23, 2026 HubSpot event disables new legacy public app creation through the legacy Developer Platform UI. Existing legacy public apps continue functioning under that specific sunset.

## Decision Tree

```text
Are you creating a new public or Marketplace app?
  -> Review Projects-based app creation with `hs project create`.

Do you have an existing app with `hsproject.json`?
  -> Check `platformVersion`.
  -> If already 2026.03, no version migration may be needed.
  -> If older, review latest-platform migration docs and `hs project migrate` / platformVersion update guidance.

Do you have an existing legacy public app that is not project-based?
  -> Review `hs app migrate` and public app migration docs.

Do you have an existing private app?
  -> Do not assume automatic migration.
  -> Review private app docs and latest-platform limitations.

Does the app include classic/legacy CRM cards?
  -> Treat as a separate app-card modernization track before October 31, 2026.
```

## Required Verification

Before deploy:

- open the relevant HubSpot official docs;
- confirm current CLI version and Node requirements;
- confirm the target account and permissions;
- confirm app type and distribution;
- confirm Marketplace listing requirements if applicable.

