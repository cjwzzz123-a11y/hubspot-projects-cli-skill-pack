---
name: hubspot-projects-cli-migration
description: Use this skill when a user needs help planning HubSpot Projects CLI app creation or migration, choosing between hs project create, hs app migrate, hs project migrate, private app manual planning, Marketplace readiness, or legacy CRM card modernization. This is an unofficial educational workflow and must source-check official HubSpot docs before production-affecting guidance.
---

# HubSpot Projects CLI Migration Skill

This skill helps an agent produce a source-linked Projects CLI preflight and handoff for HubSpot app creation or migration planning.

It is not affiliated with, endorsed by, or sponsored by HubSpot.

## Safety Rule

Always state this boundary before giving production-affecting instructions:

> This is unofficial educational guidance. Verify critical commands and platform behavior against HubSpot official documentation before deploying.

Never claim:

- official HubSpot status;
- guaranteed migration success;
- automated migration;
- that existing legacy public apps stop functioning on May 26 or June 23, 2026;
- that private apps are automatically supported by every CLI migration path.

## Required Inputs

Ask for or infer:

- app type: new public/Marketplace app, existing legacy public app, existing project-based app, existing private app, or CRM cards modernization;
- whether `hsproject.json` exists;
- current `platformVersion`, if any;
- whether the app uses OAuth, static auth, app cards, CRM cards, webhooks, app events, serverless functions, or Marketplace listing;
- local environment: HubSpot CLI version, Node version, CI provider;
- target account and intended deployment timeline.

## Workflow

1. Read `references/source-map.json` and `references/decision-tree.md`.
2. Classify the app situation.
3. Produce an affected/not affected summary.
4. Pick the likely path to verify:
   - new public/Marketplace app: review `hs project create`;
   - existing non-project legacy public app: review `hs app migrate`;
   - existing project app needing latest platform version: review `hs project migrate` or platformVersion update path;
   - private app: review private app docs and manual planning constraints;
   - legacy CRM cards: treat as a separate October 31, 2026 app-card modernization path.
5. Run the preflight checklist.
6. Create a developer handoff with sources and open questions.

## Output Format

Use this structure:

```md
## Summary

## App Classification

## Likely Path To Verify

## Preflight Checklist

## Files / Config To Inspect

## Marketplace / CI / App Card Notes

## Official Sources

## Open Questions
```

## Source Discipline

- Link to official HubSpot docs for each technical claim.
- If current docs were not rechecked during the session, say so.
- Prefer current official docs over this packaged summary if there is any conflict.

