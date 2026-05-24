# Installation Instructions

Last source check: 2026-05-24

## Disclaimer

Independent educational guide. Not affiliated with, endorsed by, or sponsored by HubSpot. Verify critical commands and platform behavior against official HubSpot documentation before deploying.

## Option 1: Use The Markdown Files Directly

Open these files in your editor, Notion, Google Docs, or internal wiki:

- `projects-cli-preflight-checklist-2026-05-24.md`
- `hubspot-developer-handoff-checklist-2026-05-24.md`
- `projects-cli-command-cheatsheet-2026-05-24.md`

This is the fastest path for a one-time review or client intake.

## Option 2: Use The CSV Tracker

Open `hubspot-app-inventory-tracker-2026-05-24.csv` in a spreadsheet tool.

Create one row per app and record:

- app type;
- account creation timing;
- whether a new app is needed;
- likely path to verify;
- platform version;
- Marketplace owner;
- CI owner;
- risk level;
- source recheck date.

## Option 3: Install The Agent Skill

Copy the `skill/` folder into the skill/plugin location supported by your coding agent.

For Codex-style skill folders, preserve this structure:

```text
skill/
  SKILL.md
  references/
    source-map.json
    decision-tree.md
    preflight-checklist.md
    developer-handoff-template.md
```

Then start a new agent session and ask it to use the `hubspot-projects-cli-migration` skill.

## Verification Step Before Production Use

Before running production-affecting commands, uploads, Marketplace submissions, or client handoffs:

1. Re-open HubSpot's official legacy public app creation sunset changelog.
2. Re-open the create-app and project commands docs.
3. Re-open migration docs for the exact app type.
4. Re-open Marketplace listing docs if the app will be submitted publicly.
5. Record the current source-check date in the handoff.

## Gumroad URL Configuration For The Website

The included site can connect to real Gumroad product pages with these environment variables:

```text
NEXT_PUBLIC_GUMROAD_PDF_URL=
NEXT_PUBLIC_GUMROAD_BUNDLE_URL=
NEXT_PUBLIC_GUMROAD_AGENCY_URL=
```

Leave them blank until the real Gumroad products are published. Do not invent placeholder checkout URLs.

