# Skill Pack README

Skill name: `hubspot-projects-cli-migration`

Last source check: 2026-05-24

## What This Skill Does

This unofficial skill helps a coding agent produce a source-linked Projects CLI preflight and developer handoff for HubSpot app creation or migration planning.

It helps classify:

- new public or Marketplace apps;
- existing non-project legacy public apps;
- existing project-based apps;
- existing private apps;
- legacy/classic CRM card modernization work.

It then asks the agent to identify the likely path to verify, such as `hs project create`, public app migration guidance, project migration guidance, private app manual planning, or CRM card modernization.

## What This Skill Does Not Do

It does not automate a HubSpot migration, certify compliance, guarantee Marketplace approval, or replace HubSpot official documentation.

It is not affiliated with, endorsed by, or sponsored by HubSpot.

## Included Skill Files

- `skill/SKILL.md`
- `skill/references/source-map.json`
- `skill/references/decision-tree.md`
- `skill/references/preflight-checklist.md`
- `skill/references/developer-handoff-template.md`

## Recommended Agent Prompt

```text
Use the hubspot-projects-cli-migration skill.

App context:
- App type:
- Existing repo/project state:
- Does hsproject.json exist?
- Current platformVersion:
- Does app-hsmeta.json exist?
- Public, Marketplace, or private app:
- OAuth/static auth:
- CRM cards/app cards:
- Webhooks/serverless functions:
- CLI version:
- Node version:
- Target account:
- Timeline:

Return a source-linked preflight, likely path to verify, official sources to re-open, risks, and open questions. Do not claim official HubSpot status or guaranteed migration success.
```

## Required Output Boundary

Every production-affecting answer should include:

```text
This is unofficial educational guidance. Verify critical commands and platform behavior against HubSpot official documentation before deploying.
```

## Important Date Boundary

The May 26 / June 23, 2026 sunset affects new legacy public app creation through the legacy Developer Platform UI. It should not be described as a shutdown date for existing legacy public apps.

