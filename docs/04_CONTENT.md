# Content Source of Truth

Last checked: 2026-05-24

## Positioning

Projects App Guide is an independent, unofficial guide and skill pack for HubSpot Projects CLI app creation and migration planning.

## Core Facts

1. HubSpot announced the legacy public app creation sunset for the Developer Platform UI.
2. Beginning May 26, 2026, new developer accounts created on or after that date cannot create new legacy public apps through the legacy UI.
3. Beginning June 23, 2026, accounts created before May 26, 2026 also cannot create new legacy public apps through the legacy UI.
4. Existing legacy public apps continue functioning under this specific sunset.
5. New public app development should use the Projects-based app platform.
6. Apps on the new developer platform are initialized using the HubSpot CLI.
7. The create-app docs use `hs project create`.
8. The project commands reference lists `hs project create` and shows the target platform version default as `2026.03`.
9. Migration docs distinguish project-based and non-project-based paths, including `hs project migrate` and `hs app migrate`.
10. Migrating a legacy non-project-based private app to `2026.03` is not currently supported in the latest-platform migration doc.
11. Classic/legacy CRM cards have a separate October 31, 2026 migration deadline.
12. Marketplace listing and listing requirements should be checked before app submission.

## Source Files

See [Official Source Map](08_OFFICIAL_SOURCE_MAP.md) and `docs/official-sources/`.

## Copy Rules

- Say "unofficial" and "not affiliated with HubSpot" near product CTAs.
- Use "likely next path" for decision outputs, not "guaranteed migration path."
- Always advise checking official docs before deploy.
- Never imply existing legacy public apps break on May 26 or June 23, 2026.
- Never use HubSpot logos or official visual style.

## Standard Disclaimer

This is an independent educational guide and skill pack. It is not affiliated with, endorsed by, or sponsored by HubSpot. Always verify critical commands and platform behavior against HubSpot official documentation before deploying.

