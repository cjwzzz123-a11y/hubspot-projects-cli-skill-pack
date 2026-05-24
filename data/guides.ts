import { officialSources, siteConfig } from "./site";

export type GuidePage = {
  slug: string;
  title: string;
  description: string;
  intent: string;
  lastChecked: string;
  summary: string;
  sections: Array<{ heading: string; body: string[] }>;
  checks?: string[];
  sources: Array<{ label: string; url: string }>;
  related: string[];
  cta: "bundle" | "checklist" | "skill";
};

const lastChecked = "2026-05-24";

export const guidePages: GuidePage[] = [
  {
    slug: "hubspot-legacy-public-app-creation-sunset",
    title: "HubSpot Legacy Public App Creation Sunset: May 26 and June 23, 2026",
    description:
      "A source-linked explanation of who is affected by the HubSpot legacy public app creation sunset and what Projects CLI path to review next.",
    intent: "Understand the deadline and avoid overreacting.",
    lastChecked,
    summary:
      "The May/June sunset disables new legacy public app creation in the legacy UI. It does not mean existing legacy public apps stop functioning under this specific event.",
    sections: [
      {
        heading: "What changed",
        body: [
          "HubSpot's changelog describes a staged sunset for creating new legacy public apps through the legacy Developer Platform UI. Beginning May 26, 2026, developer accounts created on or after that date cannot use that legacy UI path for new public app creation. Beginning June 23, 2026, the same new legacy public app creation path is disabled for developer accounts created before May 26, 2026.",
          "The practical planning question is narrow: does your team need to create a new public or Marketplace app after these dates? If yes, your review should move toward the Projects-based developer platform and CLI app creation docs. If no, this sunset may still be a reason to plan modernization, but it should not be treated as an immediate breakage event for an existing legacy public app.",
          "For searchers landing here in a hurry, the safe wording is: new legacy public app creation is affected. Existing legacy public apps continue functioning under this specific sunset. Any separate platform migration, Marketplace, or CRM card deadline should be evaluated from its own official source.",
        ],
      },
      {
        heading: "Affected vs not affected",
        body: [
          "Affected: a team that needs to create a new public app through the legacy Developer Platform UI after the relevant account-date cutoff. That team should review the Projects-based app creation path and the CLI project commands before starting new work.",
          "Not affected by this specific event: an existing legacy public app simply continuing to run. That app may still deserve an inventory, migration plan, or Marketplace readiness review, but the May 26 and June 23 dates should not be described as a shutdown date for existing legacy public apps.",
          "Adjacent but separate: apps with classic or legacy CRM cards have their own October 31, 2026 modernization deadline. Keep that card workstream separate from the May/June public app creation sunset so teams do not mix two different official notices.",
        ],
      },
      {
        heading: "What to do next",
        body: [
          "First, record whether the developer account was created before or after May 26, 2026 and whether the team needs a net-new public or Marketplace app. Second, classify the app state: new app, existing non-project legacy public app, existing project-based app, private app, or CRM card modernization. Third, open the official HubSpot source linked below before selecting a command.",
          "If the work is a new public app, review `hs project create`. If the work is an existing public app that is not already project-based, review the public app migration docs and `hs app migrate` path. If the work is an existing project app, inspect `hsproject.json` and platform-version guidance before deciding whether `hs project migrate` is relevant.",
          "Use this page as a scope guard. It helps prevent both underreaction and overreaction: do not ignore the creation sunset if you build new public apps, and do not tell stakeholders that existing legacy public apps stop functioning on May 26 or June 23, 2026.",
        ],
      },
    ],
    checks: [
      "Confirm whether you need to create a new public or Marketplace app.",
      "If yes, review the Projects CLI create-app flow.",
      "If no, document whether you only need monitoring, modernization, or app-card planning.",
    ],
    sources: [officialSources.sunset, officialSources.createApp],
    related: ["hubspot-projects-cli-checklist", "hs-project-create-marketplace-app", "hs-app-migrate-vs-hs-project-migrate"],
    cta: "checklist",
  },
  {
    slug: "hubspot-projects-cli-checklist",
    title: "HubSpot Projects CLI Checklist",
    description:
      "A practical preflight checklist for Projects CLI app creation, migration planning, app-hsmeta.json review, Marketplace readiness, and CI notes.",
    intent: "Run a preflight before creating or migrating an app.",
    lastChecked,
    summary:
      "Use this checklist to classify the app, verify local environment, inspect project files, and choose a command path to verify in official docs.",
    sections: [
      {
        heading: "Preflight order",
        body: [
          "Start with classification, not commands. A new public or Marketplace app, an existing non-project legacy public app, an existing project-based app, an existing private app, and a CRM card modernization project each point to different official docs. Writing down the app category first prevents a common failure mode: running a plausible CLI command before the app structure is understood.",
          "After classification, inspect the local and account context. Record HubSpot CLI version, Node version, authenticated account, developer account ID, whether `hsproject.json` exists, current `platformVersion`, and where `app-hsmeta.json` lives. These checks are deliberately simple, because they create the evidence a developer or agent needs before giving production-affecting guidance.",
          "Finally, connect the app inventory to delivery risk: OAuth redirect URLs, scopes, Marketplace listing requirements, support URL, privacy URL, CI secret handling, and a source recheck date. The checklist is meant to produce a handoff that another developer can verify, not a blind migration script.",
        ],
      },
      {
        heading: "How to use this checklist with an agent",
        body: [
          "Paste the app classification, file tree, CLI version, Node version, and target timeline into your coding agent. Ask the agent to return a likely path to verify, open questions, and source links. The packaged skill uses the same sequence and explicitly tells the agent to avoid official, certified, endorsed, or guaranteed claims.",
          "If the agent cannot see current HubSpot docs during the session, require it to say that. This matters because HubSpot platform documentation can change, and the local source archive in this project was checked on 2026-05-24.",
          "For agencies, use the checklist as a client intake artifact. It gives non-developers a way to see why the project is being routed to new app creation, public app migration, project migration, private app manual planning, or CRM card modernization.",
        ],
      },
    ],
    checks: [
      "Run `hs --version` and record the result.",
      "Confirm Node version against current HubSpot CLI guidance.",
      "Authenticate with `hs account auth` for the correct account.",
      "Find `hsproject.json` and record `platformVersion` if present.",
      "Find `app-hsmeta.json` and confirm its expected project location.",
      "Inventory OAuth redirect URLs and scopes.",
      "Document whether `hs project create`, `hs app migrate`, or `hs project migrate` is the path to verify.",
      "Check Marketplace listing requirements before submission.",
    ],
    sources: [officialSources.createApp, officialSources.projectCommands, officialSources.migrationOverview, officialSources.marketplace],
    related: ["hs-app-migrate-vs-hs-project-migrate", "hubspot-app-hsmeta-json-structure", "hubspot-marketplace-listing-checklist-2026"],
    cta: "bundle",
  },
  {
    slug: "hs-project-create-marketplace-app",
    title: "Use hs project create for a New HubSpot Marketplace App",
    description:
      "How to think about the Projects CLI new app path for public or Marketplace app development after the legacy creation sunset.",
    intent: "Create a new app with the Projects-based workflow.",
    lastChecked,
    summary:
      "HubSpot's create-app docs describe new developer platform apps as initialized using the HubSpot CLI, with `hs project create` as the setup command to review.",
    sections: [
      {
        heading: "When this path fits",
        body: [
          "This page is for teams creating a new public or Marketplace app, especially after the legacy public app creation path is no longer available for their developer account. HubSpot's create-app documentation points new developer platform apps toward the CLI-based Projects workflow, with `hs project create` as the setup command to review.",
          "This is not the page to use when you only need to maintain an existing legacy public app. It is also not enough for a private app migration decision. In those cases, classify the app first and follow the relevant migration or private app docs.",
          "The output you want before a developer starts is a short creation brief: target developer account, app name, authentication type, OAuth redirect URLs, scopes, feature list, Marketplace intent, and who owns listing/support/privacy materials.",
        ],
      },
      {
        heading: "Command flow to verify",
        body: [
          "`hs project create` starts the project creation flow to review in the official docs. After setup, teams commonly review project commands for local development, upload, and opening the project in HubSpot.",
          "Treat this flow as a source-controlled project setup, not a one-time UI action. Files such as `hsproject.json` and app configuration files become part of the review surface for CI, code review, and handoff.",
          "Before upload, confirm the target account and install/test flow. For public or Marketplace apps, also check listing requirements early so technical build work does not outpace support, privacy, and review-readiness work.",
        ],
      },
      {
        heading: "Marketplace readiness notes",
        body: [
          "A Projects CLI app can still fail a launch workflow if Marketplace materials are unfinished. Assign owners for support contact, privacy policy, testing instructions, screenshots or assets, and install-flow evidence.",
          "Keep the product language precise with clients: this checklist helps prepare a reviewable workflow, but it does not guarantee Marketplace approval or certify compliance. Marketplace requirements must be checked against HubSpot's current listing documentation before submission.",
          "If the app includes classic CRM cards, create a separate app-card modernization task. The CRM card deadline is not the same as the May/June legacy public app creation sunset.",
        ],
      },
    ],
    checks: ["Confirm the app is public/Marketplace scoped.", "Verify `app-hsmeta.json` before upload.", "Test install flow in a developer or test account."],
    sources: [officialSources.createApp, officialSources.projectCommands, officialSources.marketplace],
    related: ["hubspot-projects-cli-checklist", "hubspot-marketplace-listing-checklist-2026", "hubspot-app-hsmeta-json-structure"],
    cta: "skill",
  },
  {
    slug: "hubspot-legacy-public-app-vs-projects-app",
    title: "Legacy Public App vs Projects App",
    description:
      "A decision guide for understanding the difference between legacy public app creation and Projects-based app development.",
    intent: "Decide whether this is a creation issue or a modernization issue.",
    lastChecked,
    summary:
      "The sunset is about creating new legacy public apps. Projects-based apps are the path HubSpot directs new public app development toward.",
    sections: [
      {
        heading: "The difference that matters",
        body: [
          "A legacy public app and a Projects-based app are not just two labels for the same workflow. The May/June 2026 changelog is about the ability to create new legacy public apps through the legacy Developer Platform UI. The Projects-based developer platform uses CLI and file-based project configuration for new app development.",
          "This distinction matters because stakeholders often compress the announcement into a vague deadline. The safe planning statement is narrower: new legacy public app creation is being disabled; existing legacy public apps continue functioning under that specific sunset.",
          "When you explain this to a client or internal team, separate three questions: Do we need a new public app? Do we need to modernize an existing app? Do we have a separate Marketplace or CRM card deadline?",
        ],
      },
      {
        heading: "Legacy public app creation",
        body: [
          "Legacy UI creation is the path being sunset for new public apps. If a team was planning to create a new public app from the old UI, they should shift their planning to the Projects-based CLI app creation flow.",
          "For existing legacy public apps, the right next step is usually inventory and risk review, not panic migration language. Document installs, OAuth behavior, scopes, webhooks, CRM cards, Marketplace status, and any modernization timeline before assigning a command path.",
          "If the existing app is not project-based and modernization is desired, review the public app migration docs and `hs app migrate` guidance. Do not assume a new-app creation flow is the same as migrating an existing app.",
        ],
      },
      {
        heading: "Projects-based app development",
        body: [
          "Projects-based apps use file-based configuration and HubSpot CLI workflows. That makes the project easier to review in source control, pass through CI checks, and hand off between developers compared with an undocumented UI-only process.",
          "The main planning artifacts are the project files, platform version, app schema/config files, auth configuration, and the commands used for creation, upload, local development, and migration. Those artifacts should be reviewed together instead of scattered across chat notes.",
          "A good handoff ends with the likely path to verify, relevant official source links, and open questions. It should not end with a guaranteed command, because the correct path depends on app type, project state, platform version, and current official docs.",
        ],
      },
    ],
    sources: [officialSources.sunset, officialSources.createApp, officialSources.migrationOverview],
    related: ["hubspot-legacy-public-app-creation-sunset", "hs-project-create-marketplace-app", "hs-app-migrate-vs-hs-project-migrate"],
    cta: "checklist",
  },
  {
    slug: "hs-app-migrate-vs-hs-project-migrate",
    title: "hs app migrate vs hs project migrate",
    description:
      "A source-linked command decision guide for choosing which HubSpot migration path to verify.",
    intent: "Choose the likely migration command path.",
    lastChecked,
    summary:
      "Use app structure and platform version to decide which path to verify. Non-project legacy public app, existing project app, and private app cases should not be collapsed into one generic migration step.",
    sections: [
      {
        heading: "Decision rule",
        body: [
          "Do not choose between `hs app migrate` and `hs project migrate` from memory. Start by inspecting the app: does the repo have `hsproject.json`, what `platformVersion` is recorded, and is the app public, Marketplace-oriented, project-based, or private?",
          "If there is no `hsproject.json` and the app is an existing legacy public app, review the public app migration path and `hs app migrate` guidance. That case is different from creating a brand-new app with `hs project create`.",
          "If the app is already project-based, review platform-version guidance and `hs project migrate` where applicable. If the app is private, review private app documentation and latest-platform limitations before assuming automation.",
        ],
      },
      {
        heading: "What to inspect before running either command",
        body: [
          "Inspect the repository root for `hsproject.json`, then record `platformVersion`. Also find the app configuration files, including `app-hsmeta.json` where relevant, and list any serverless functions, app cards, OAuth settings, webhooks, scopes, and Marketplace listing dependencies.",
          "For an existing public app, check active installs and test-install implications before migration. For a project app, understand whether the work is a platform-version update or a broader feature migration. For a private app, capture backend and token implications because the public-app migration decision tree does not automatically apply.",
          "Write down the command as a path to verify, not a command to run immediately. The final pre-run step should be opening the relevant official HubSpot docs and confirming they still match the local source archive.",
        ],
      },
      {
        heading: "Common wrong turns",
        body: [
          "Wrong turn 1: using `hs project create` for an existing app modernization project. That command belongs to new Projects-based app creation, while migration paths require a separate review.",
          "Wrong turn 2: treating every older project app as a non-project legacy public app. If `hsproject.json` exists, inspect platform-version guidance before selecting a migration path.",
          "Wrong turn 3: promising automatic private app migration. Private app cases have documented limitations and may need manual planning or a net-new app approach depending on features.",
        ],
      },
    ],
    checks: ["Find `hsproject.json`.", "Record `platformVersion`.", "Document app distribution.", "Open the official migration docs before running a command."],
    sources: [officialSources.migrationOverview, officialSources.migratePublic, officialSources.migrateLatest, officialSources.projectCommands],
    related: ["hubspot-private-app-projects-migration", "hubspot-developer-platform-2026-03-upgrade", "hubspot-projects-cli-checklist"],
    cta: "bundle",
  },
  {
    slug: "hubspot-private-app-projects-migration",
    title: "HubSpot Private App Projects Migration",
    description:
      "A cautious guide to private app migration limitations and manual planning for Projects-based app workflows.",
    intent: "Avoid choosing an unsupported automatic path.",
    lastChecked,
    summary:
      "Private app cases require special care. The latest-platform migration docs warn that migrating a legacy non-project-based private app to 2026.03 is not currently supported.",
    sections: [
      {
        heading: "Why this needs caution",
        body: [
          "Private app migration is not the same as public app migration. HubSpot's latest-platform migration documentation explicitly warns that migrating a legacy non-project-based private app to `2026.03` is not currently supported. That single sentence is enough to require cautious language in any checklist or client handoff.",
          "Some private app modernization paths involve manually moving configuration, webhooks, UI extension code, app cards, backend logic, or token-handling assumptions. Treat the work as a technical discovery project before you describe a migration command.",
          "If a private app includes serverless functions or backend behavior that is central to business logic, document the feature list before proposing a path. The correct output may be a manual plan, a net-new project-based app, or a deferred migration until official docs support the needed path.",
        ],
      },
      {
        heading: "Private app intake checklist",
        body: [
          "Capture the app's current auth model, token storage, backend services, webhooks, UI extensions, serverless functions, CRM cards, and any scheduled jobs. A private app that only uses an access token has a different risk profile from a private app with custom UI and backend logic.",
          "Record whether the existing app is legacy non-project-based or already project-based. Then compare that state to the current private app and latest-platform migration docs. If the source docs do not support automatic migration for the case, say that plainly.",
          "For agency handoff, mark private app work as 'manual planning/review' unless a developer has rechecked the current official docs and documented a supported path.",
        ],
      },
      {
        heading: "Safe client wording",
        body: [
          "Use: 'This private app needs source-checked migration planning before we choose a path.' Avoid: 'The CLI will migrate the private app.'",
          "Use: 'The current official docs should be rechecked before any production upload or replacement.' Avoid: 'This checklist guarantees compatibility.'",
          "Use: 'We can inventory configuration and identify a likely path to verify.' Avoid: 'This is an official HubSpot migration plan.'",
        ],
      },
    ],
    checks: ["Confirm whether the app is private.", "Check for serverless functions.", "Document API token and backend implications.", "Read private app docs before choosing a path."],
    sources: [officialSources.migratePrivate, officialSources.migrateLatest, officialSources.migrationOverview],
    related: ["hs-app-migrate-vs-hs-project-migrate", "hubspot-projects-cli-checklist", "hubspot-developer-platform-2026-03-upgrade"],
    cta: "skill",
  },
  {
    slug: "hubspot-developer-platform-2026-03-upgrade",
    title: "HubSpot Developer Platform 2026.03 Upgrade",
    description:
      "A planning guide for checking platformVersion and reviewing HubSpot developer platform 2026.03 migration paths.",
    intent: "Plan version upgrade.",
    lastChecked,
    summary:
      "The 2026.03 platform version is central to current migration docs. Check `hsproject.json`, current `platformVersion`, and supported migration path before making changes.",
    sections: [
      {
        heading: "What to inspect",
        body: [
          "Look for `hsproject.json` and its `platformVersion` property before discussing a `2026.03` upgrade. The migration overview explains how existing platform versions relate to `2026.03`, including cases where no migration is necessary and cases where older versions need more careful review.",
          "A platform-version upgrade is not the same as the May/June 2026 legacy public app creation sunset. The creation sunset affects new legacy public app creation. The `2026.03` workstream affects project structure, platform version, and supported feature migration paths.",
          "If the project is already on `2026.03`, record that and check whether there is any separate Marketplace, CI, or CRM card work. If it is on an older version, open the latest-platform migration docs before changing files or running commands.",
        ],
      },
      {
        heading: "Planning a version review",
        body: [
          "Create a small inventory: current platform version, app type, serverless functions, app cards, static auth or OAuth, Marketplace status, and CI upload flow. This keeps version work tied to actual app features.",
          "For apps on `2025.2`, HubSpot's latest-platform docs describe updating `platformVersion` and re-uploading as part of the 2026.03 path. For older project versions, the docs describe migration guidance that should be followed from the current official page.",
          "Do not apply public app assumptions to private app cases. The latest-platform docs include a private-app limitation for legacy non-project-based private apps, so those cases should be flagged for manual review.",
        ],
      },
      {
        heading: "Handoff output",
        body: [
          "A useful handoff states the current version, the target version to verify, the command or file change to review, and the official docs used. It also lists features that could change migration complexity, such as serverless functions or app cards.",
          "Keep the recommendation reversible until a developer has run the current preflight. The language should be 'likely path to verify,' not 'guaranteed upgrade path.'",
          "Add a source-check date. This repository's official source archive was checked on 2026-05-24, and production decisions should re-open current HubSpot docs.",
        ],
      },
    ],
    checks: ["Record current `platformVersion`.", "Check whether the project is already on 2026.03.", "Review serverless function and app-card implications."],
    sources: [officialSources.migrationOverview, officialSources.migrateLatest, officialSources.projectCommands],
    related: ["hs-app-migrate-vs-hs-project-migrate", "hubspot-projects-cli-checklist", "hubspot-private-app-projects-migration"],
    cta: "bundle",
  },
  {
    slug: "hubspot-app-hsmeta-json-structure",
    title: "HubSpot app-hsmeta.json Structure Checklist",
    description:
      "A Projects CLI file-structure checklist for app-hsmeta.json, identifiers, OAuth URLs, and upload readiness.",
    intent: "Troubleshoot project structure.",
    lastChecked,
    summary:
      "`app-hsmeta.json` is a key app schema file in Projects-based app workflows. Its location and fields should be checked before upload or migration.",
    sections: [
      {
        heading: "What to verify",
        body: [
          "`app-hsmeta.json` is a key app schema file in Projects-based app workflows. Confirm the file exists in the expected project structure for the app path you are using, and review it together with `hsproject.json` rather than as an isolated JSON file.",
          "Review app UID, auth fields, redirect URLs, scopes, and related feature configuration before upload or migration. If a developer changes identifiers casually, the project can become difficult to reason about during install testing or handoff.",
          "Use official create-app, project command, and migration docs for exact structure. This page is a checklist for what to inspect, not a schema reference that replaces HubSpot's documentation.",
        ],
      },
      {
        heading: "Troubleshooting checklist",
        body: [
          "If upload or local development fails, first confirm you are in the project root and that the expected config files are present. Then compare the app's current structure against the official docs for the selected platform version.",
          "For OAuth apps, compare redirect URLs and scopes with the target account and install flow. For Marketplace apps, ensure public-facing support and privacy materials are ready before treating the technical config as complete.",
          "For migrated apps, preserve a record of old and new identifiers, feature files, and platform-version changes. That record is often more useful to a second developer than a vague 'migration completed' note.",
        ],
      },
      {
        heading: "What not to infer",
        body: [
          "Do not infer official approval from a valid-looking `app-hsmeta.json`. Marketplace listing readiness and platform behavior must still be checked through official docs and the HubSpot review process.",
          "Do not infer that every private app can be moved by copying the same file structure. Private app migration has separate limitations and may require manual planning.",
          "Do not treat this file checklist as proof that an existing legacy public app stops functioning under the May/June creation sunset. That sunset is about creating new legacy public apps.",
        ],
      },
    ],
    checks: ["Find `app-hsmeta.json`.", "Check UID changes.", "Check auth mode.", "Check redirect URLs.", "Check scopes and permitted URLs where relevant."],
    sources: [officialSources.createApp, officialSources.migratePrivate, officialSources.projectCommands],
    related: ["hs-project-create-marketplace-app", "hubspot-projects-cli-checklist", "hubspot-cli-node-ci-preflight"],
    cta: "checklist",
  },
  {
    slug: "hubspot-cli-node-ci-preflight",
    title: "HubSpot CLI, Node, and CI Preflight Checklist",
    description:
      "A CI/CD preflight page for HubSpot Projects CLI work, including version checks, account auth, upload commands, secret handling, and source verification.",
    intent: "Prevent environment and CI issues.",
    lastChecked,
    summary:
      "Before a Projects CLI migration or upload, record CLI version, Node version, account auth, and CI secret handling. Recheck the current CLI reference before changing pipelines.",
    sections: [
      {
        heading: "CI preflight",
        body: [
          "CI failures are often planning failures disguised as command failures. Before a migration or upload workflow reaches CI, record the local HubSpot CLI version, local Node version, CI Node version, authenticated account strategy, and where secrets are stored.",
          "Pin or document runtime versions where practical, but avoid unsupported version claims unless you have rechecked the current HubSpot CLI documentation. This page intentionally says 'check Node version' rather than asserting a specific Node requirement from memory.",
          "Avoid relying on implicit account state in CI. A repeatable workflow should make the target account, environment variables, and upload command explicit enough for another developer to review without guessing.",
        ],
      },
      {
        heading: "Secrets and logs",
        body: [
          "Inventory the values CI needs, but do not paste tokens, client secrets, private keys, or account credentials into docs, tickets, or agent prompts. The handoff should say where secrets live, who owns them, and which environment uses them.",
          "Review logs for accidental disclosure. A migration or upload workflow is not ready for client handoff if command output could expose OAuth secrets, tokens, or internal account IDs unnecessarily.",
          "For agencies, separate client-facing evidence from internal build details. The client may need proof of version checks and source verification, not raw secret names or CI internals.",
        ],
      },
      {
        heading: "Pipeline readiness",
        body: [
          "Before enabling an upload/deploy step, confirm the app classification and command path. A pipeline that uploads the wrong project path or target account can create confusion even if every command succeeds.",
          "Add a source-check step to the release checklist: open HubSpot's current CLI reference and project commands docs before production deployment. This is especially important when a platform sunset or migration deadline is driving the work.",
          "If a command changes or official docs differ from this local archive, follow the current official docs and update the checklist for future runs.",
        ],
      },
    ],
    checks: ["Record `hs --version`.", "Record Node version.", "Document account ID handling.", "Document secret storage.", "Run build/upload only after source verification."],
    sources: [officialSources.cliReference, officialSources.projectCommands],
    related: ["hubspot-projects-cli-checklist", "hubspot-app-hsmeta-json-structure", "hs-app-migrate-vs-hs-project-migrate"],
    cta: "bundle",
  },
  {
    slug: "hubspot-legacy-crm-cards-to-app-cards",
    title: "Legacy CRM Cards to App Cards: October 31, 2026 Planning",
    description:
      "A separate planning page for HubSpot legacy/classic CRM card migration to interactive app cards.",
    intent: "Plan adjacent app-card modernization deadline.",
    lastChecked,
    summary:
      "Classic/legacy CRM cards have a separate October 31, 2026 migration deadline. Do not mix this deadline with the May/June public app creation sunset.",
    sections: [
      {
        heading: "Separate track",
        body: [
          "The CRM card deadline is about card rendering and app-card modernization, not the May/June legacy public app creation sunset. HubSpot's CRM card sources describe an October 31, 2026 deadline for existing apps with classic or legacy CRM cards to migrate those cards.",
          "Treat CRM cards as a second workstream if your app includes them. A team may need both a Projects CLI migration plan and a card modernization plan, but the evidence, deadlines, and acceptance criteria are different.",
          "Do not tell stakeholders that the public app creation sunset itself is the CRM card migration deadline. Keep the two official notices separate in planning docs, client emails, and Gumroad copy.",
        ],
      },
      {
        heading: "What to inventory",
        body: [
          "List every classic or legacy CRM card, the CRM objects it appears on, the data source behind it, and whether the card is static or interactive. Include owners for frontend UI, backend data access, scopes, and QA.",
          "Check whether the app is listed or intended for Marketplace listing, because CRM card status can intersect with listing readiness. Then review current app card and CRM card docs for the replacement path.",
          "If the app also needs a Projects CLI platform migration, sequence the work carefully. Card modernization may touch UI extension code and scopes, while Projects migration may touch project files, app configuration, and platform version.",
        ],
      },
      {
        heading: "Safe output for a handoff",
        body: [
          "A good CRM card handoff contains a card inventory, target replacement approach, source links, owner, test plan, and risk notes. It should not be a one-line instruction to run a Projects CLI migration command.",
          "Use October 31, 2026 only for the CRM card migration deadline described in the relevant official sources. Use May 26 and June 23 only for new legacy public app creation.",
          "If current official docs provide newer app-card guidance than this source archive, update the source map and the handoff before client delivery.",
        ],
      },
    ],
    checks: ["Inventory classic CRM cards.", "Review app cards docs.", "Assign modernization owner.", "Plan before October 31, 2026."],
    sources: [officialSources.crmCards, officialSources.crmCardsChangelog],
    related: ["hubspot-projects-cli-checklist", "hubspot-marketplace-listing-checklist-2026", "hubspot-developer-platform-2026-03-upgrade"],
    cta: "skill",
  },
  {
    slug: "hubspot-marketplace-listing-checklist-2026",
    title: "HubSpot Marketplace Listing Checklist 2026",
    description:
      "A Marketplace listing readiness checklist for Projects CLI public app teams.",
    intent: "Prepare listing submission.",
    lastChecked,
    summary:
      "Projects CLI readiness is not the same as Marketplace readiness. Prepare listing fields, support details, privacy URL, testing instructions, and install flow evidence.",
    sections: [
      {
        heading: "Listing readiness",
        body: [
          "Projects CLI readiness is not the same as Marketplace readiness. A project can be correctly structured and still lack support information, privacy URL, testing instructions, install-flow evidence, or policy details required for a reviewable listing.",
          "Review HubSpot listing docs and requirements before submission, then turn them into an owner-based checklist. Assign support, privacy, testing, product copy, screenshots/assets, and technical install flow to named owners.",
          "Keep the claims boundary visible in client-facing material. This independent checklist can help organize readiness work, but it cannot guarantee Marketplace approval and it is not an official HubSpot review artifact.",
        ],
      },
      {
        heading: "What to prepare before submission",
        body: [
          "Prepare a short app description, support contact, privacy policy URL, install/test instructions, authentication notes, and any screenshots or demo materials required for review. Confirm that public-facing claims match the app's implemented behavior.",
          "For OAuth apps, verify redirect URLs, scopes, and test account behavior. For apps with cards or UI extensions, include enough testing context for a reviewer or client developer to reproduce expected behavior.",
          "If the app was migrated, document the source app, command path verified, platform version, and any open limitations. That record can reduce confusion when Marketplace work is reviewed separately from migration work.",
        ],
      },
      {
        heading: "Agency workflow",
        body: [
          "Agencies should keep a reusable listing readiness packet per client: app inventory, source-check date, support/privacy owners, testing instructions, and screenshots/assets status.",
          "Use the paid bundle's CSV tracker to track multiple apps. Each row should include app type, likely path to verify, Marketplace owner, source recheck date, and risk level.",
          "Before submission, re-open current HubSpot listing requirements. If a requirement changed after the local source check date, update both the client handoff and internal checklist.",
        ],
      },
    ],
    checks: ["Support contact ready.", "Privacy policy URL ready.", "Testing instructions drafted.", "Install flow tested.", "Listing owner assigned."],
    sources: [officialSources.marketplace, officialSources.marketplaceRequirements],
    related: ["hs-project-create-marketplace-app", "hubspot-projects-cli-checklist", "hubspot-legacy-crm-cards-to-app-cards"],
    cta: "bundle",
  },
  {
    slug: "hubspot-projects-cli-faq",
    title: "HubSpot Projects CLI FAQ",
    description:
      "Short answers to common HubSpot Projects CLI, migration, and legacy public app sunset questions.",
    intent: "Resolve common confusion.",
    lastChecked,
    summary:
      "Use this FAQ for quick orientation, then open the relevant official HubSpot docs before making production changes.",
    sections: [
      {
        heading: "Common questions",
        body: [
          "Does my existing legacy public app stop working on May 26 or June 23, 2026? Under this specific sunset, no. The change disables new legacy public app creation through the legacy UI for the affected account groups. Existing legacy public apps continue functioning under this event.",
          "Which command should I run? It depends on whether you are creating a new app, migrating a non-project legacy public app, updating an existing project-based app, or planning a private app review. Common paths to verify include `hs project create`, `hs app migrate`, and project migration guidance, but the app state determines the source to open first.",
          "Can private apps be migrated automatically? Do not assume that. The latest-platform migration docs include a limitation for legacy non-project-based private apps moving to `2026.03`, so private app cases should be treated as manual planning/review unless current official docs support the exact path.",
        ],
      },
      {
        heading: "More quick answers",
        body: [
          "Is `2026.03` the same as the May/June sunset? No. `2026.03` is a developer platform version discussed in migration docs. The May/June dates are about new legacy public app creation through the legacy UI.",
          "What should I check first in a repo? Look for `hsproject.json`, record `platformVersion`, find app configuration files such as `app-hsmeta.json` where relevant, and inventory auth, scopes, cards, webhooks, and CI settings.",
          "Is this site official? No. It is an independent educational guide and skill pack. It summarizes and links to public HubSpot documentation, and production-affecting decisions should be verified against current official docs.",
        ],
      },
      {
        heading: "Buyer questions",
        body: [
          "What is in the paid bundle? The bundle is designed to save setup time: command cheatsheet, preflight checklist, CSV inventory tracker, developer handoff template, agent skill folder, and source verification links.",
          "Does the bundle perform a migration? No. It does not automate a HubSpot migration, certify compliance, or guarantee Marketplace approval. It helps classify the work and produce a source-linked handoff.",
          "Can an agency use it for clients? The agency license is intended for internal client delivery workflows. It still requires the agency to verify current official docs and avoid presenting the material as HubSpot-official.",
        ],
      },
    ],
    sources: [officialSources.sunset, officialSources.migrationOverview, officialSources.migratePrivate, officialSources.projectCommands],
    related: ["hubspot-legacy-public-app-creation-sunset", "hs-app-migrate-vs-hs-project-migrate", "hubspot-private-app-projects-migration"],
    cta: "skill",
  },
];

export function getGuide(slug: string) {
  return guidePages.find((page) => page.slug === slug);
}

export const trustPages = [
  {
    slug: "updates",
    title: "Updates",
    description: "Source-check log and product update notes.",
    body: [
      `Last source check: ${lastChecked}.`,
      "Official docs were archived from HubSpot developer documentation and the public llms.txt index.",
      "Future updates should re-fetch official docs before changing technical recommendations.",
    ],
  },
  {
    slug: "about",
    title: "About",
    description: "About this independent guide.",
    body: [
      "Projects App Guide is an independent educational project for developers planning HubSpot Projects CLI app creation and migration work.",
      siteConfig.disclaimer,
    ],
  },
  {
    slug: "contact",
    title: "Contact",
    description: "Contact and support notes.",
    body: [
      "For product support, use the support contact configured in the final Gumroad listing after publication.",
      "Before Gumroad publication, treat this page as the support policy placeholder: buyers should receive help with file access, missing bundle contents, and clarification of the checklist workflow.",
      "This project does not provide official HubSpot support, custom migration services, or guaranteed Marketplace approval.",
    ],
  },
  {
    slug: "privacy",
    title: "Privacy",
    description: "Privacy policy.",
    body: [
      "This site does not require login in v1.",
      "Outbound Gumroad purchases are handled by Gumroad according to Gumroad's own policies.",
      "Analytics may be used to understand page visits and CTA clicks after deployment.",
      "Do not submit HubSpot tokens, client secrets, private app access tokens, or customer account credentials through this site.",
    ],
  },
  {
    slug: "terms",
    title: "Terms",
    description: "Terms of use.",
    body: [
      siteConfig.disclaimer,
      "The content is provided for educational planning use and does not guarantee migration success, Marketplace approval, or compatibility with future HubSpot platform changes.",
      "You are responsible for rechecking current HubSpot official documentation before production deployment, Marketplace submission, client handoff, or account-affecting changes.",
      "Gumroad purchases, refunds, and delivery are handled through Gumroad after the real product URLs are configured.",
    ],
  },
];
