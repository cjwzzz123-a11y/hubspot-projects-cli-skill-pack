# Compliance and Claims Matrix

Last updated: 2026-05-24

## Supported

| Claim | Status | Evidence |
|---|---|---|
| The product is unofficial and educational. | Supported | Our own positioning. |
| HubSpot announced a legacy public app creation sunset. | Supported | HubSpot changelog. |
| May 26, 2026 affects new accounts for new legacy public app creation. | Supported | HubSpot changelog. |
| June 23, 2026 affects existing accounts for new legacy public app creation. | Supported | HubSpot changelog. |
| Existing legacy public apps continue functioning under this sunset. | Supported | HubSpot changelog. |
| New public app development should use Projects-based app platform. | Supported | HubSpot changelog and create-app docs. |
| `hs project create` is used in the new app creation flow. | Supported | HubSpot create-app docs and CLI project commands. |
| `hs app migrate` and `hs project migrate` are distinct migration paths. | Supported | HubSpot migration docs. |

## Requires Soft Wording

| Claim | Safe wording |
|---|---|
| The skill tells you the right command. | The skill helps you identify the likely command path to verify. |
| The checklist prevents migration errors. | The checklist helps catch common preflight risks. |
| The product covers all HubSpot migration cases. | The product covers the documented public app and Projects CLI planning cases in scope. |

## Prohibited

- Official HubSpot guide.
- Certified HubSpot migration checklist.
- Guaranteed migration success.
- Automated migration.
- Existing legacy public apps shut down on May 26 or June 23, 2026.
- Private apps can always be automatically migrated by CLI.

## Required Disclaimers

Use near CTAs, footer, Gumroad page, PDF cover, and skill README:

> Independent educational guide. Not affiliated with, endorsed by, or sponsored by HubSpot. Verify critical commands and platform behavior against official HubSpot documentation before deploying.

