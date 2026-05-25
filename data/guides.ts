import { officialSources, siteConfig } from "./site";

export type GuidePage = {
  slug: string;
  title: string;
  description: string;
  intent: string;
  lastChecked: string;
  summary: string;
  answerSnapshot?: {
    shortAnswer: string;
    appliesTo: string;
    verify: string;
    boundary: string;
  };
  claims?: Array<{ claim: string; source: { label: string; url: string } }>;
  sections: Array<{ heading: string; body: string[] }>;
  checks?: string[];
  faqs?: Array<{ question: string; answer: string }>;
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
    answerSnapshot: {
      shortAnswer:
        "The May 26 and June 23, 2026 HubSpot dates affect new legacy public app creation through the legacy Developer Platform UI, not existing legacy public app runtime under this specific sunset.",
      appliesTo: "Developer teams planning to create a new public or Marketplace app after the relevant account-date cutoff.",
      verify: "Open HubSpot's legacy public app creation sunset changelog and the Projects CLI create-app docs before choosing a path.",
      boundary: "Do not describe these dates as an existing legacy public app shutdown notice.",
    },
    claims: [
      {
        claim: "May 26, 2026 affects new developer accounts created on or after that date.",
        source: officialSources.sunset,
      },
      {
        claim: "June 23, 2026 affects developer accounts created before May 26, 2026.",
        source: officialSources.sunset,
      },
      {
        claim: "The safer next step for new public app creation is to review the Projects-based CLI app creation path.",
        source: officialSources.createApp,
      },
    ],
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
    faqs: [
      {
        question: "Do existing legacy public apps stop working on May 26 or June 23, 2026?",
        answer:
          "No. This specific sunset affects new legacy public app creation through the legacy Developer Platform UI. It should not be described as a shutdown date for existing legacy public apps.",
      },
      {
        question: "Who should care about the May and June 2026 dates?",
        answer:
          "Teams that need to create a new public or Marketplace app through the legacy UI after the relevant account-date cutoff should review the Projects-based CLI app creation path.",
      },
      {
        question: "What is the safest next step?",
        answer:
          "Classify the app state, record whether the work is new app creation or modernization, then open the current HubSpot changelog and Projects CLI docs before choosing a command path.",
      },
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
    answerSnapshot: {
      shortAnswer:
        "Before running HubSpot Projects CLI commands, classify the app, inspect project files, record environment details, and identify the official command path to verify.",
      appliesTo: "Developers and agencies preparing new app creation, migration planning, Marketplace readiness, or CI upload workflows.",
      verify: "Check current HubSpot CLI create-app, project command, migration, and Marketplace listing docs before production-affecting work.",
      boundary: "This checklist is a planning and handoff aid, not an official HubSpot migration instruction or approval guarantee.",
    },
    claims: [
      {
        claim: "New app creation, public app migration, project migration, private app planning, and CRM card modernization should be classified separately.",
        source: officialSources.migrationOverview,
      },
      {
        claim: "`hs project create`, project upload, and project open commands should be checked against current project command documentation.",
        source: officialSources.projectCommands,
      },
      {
        claim: "Marketplace readiness needs listing and review materials beyond project file readiness.",
        source: officialSources.marketplace,
      },
    ],
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
    faqs: [
      {
        question: "What should I check before running a HubSpot Projects CLI command?",
        answer:
          "Classify the app first, then record CLI version, Node version, authenticated account, project files, platform version, app configuration, scopes, redirect URLs, and source-check date.",
      },
      {
        question: "Can this checklist replace HubSpot documentation?",
        answer:
          "No. It is an independent planning checklist. Production-affecting commands, uploads, submissions, and client handoffs should be verified against current official HubSpot documentation.",
      },
      {
        question: "What does the paid bundle add?",
        answer:
          "The bundle packages the checklist into reusable buyer files, including a command cheatsheet, CSV inventory tracker, developer handoff template, agent skill folder, and source map.",
      },
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
    answerSnapshot: {
      shortAnswer:
        "`hs project create` is the Projects CLI path to review when creating a new HubSpot developer platform app.",
      appliesTo: "Teams creating a new public or Marketplace app rather than modernizing an existing app.",
      verify: "Open the create-app docs, project commands docs, and Marketplace listing docs before upload or submission.",
      boundary: "Do not use new app creation guidance as a substitute for an existing app migration plan.",
    },
    claims: [
      {
        claim: "New developer platform apps are created through the HubSpot CLI workflow.",
        source: officialSources.createApp,
      },
      {
        claim: "`hs project create` is a project command to verify for new app creation.",
        source: officialSources.projectCommands,
      },
      {
        claim: "Marketplace submission has separate listing requirements and review materials.",
        source: officialSources.marketplace,
      },
    ],
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
    faqs: [
      {
        question: "When should I use hs project create?",
        answer:
          "Use it as the official path to review when creating a new Projects-based app. Do not use it as a substitute for planning an existing app migration.",
      },
      {
        question: "Is a Marketplace app automatically ready after project creation?",
        answer:
          "No. Marketplace readiness also requires support, privacy, testing, install-flow, listing, and review materials checked against current HubSpot requirements.",
      },
    ],
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
    answerSnapshot: {
      shortAnswer:
        "The key distinction is creation versus modernization: the May/June 2026 sunset affects new legacy public app creation, while migration decisions depend on the existing app state.",
      appliesTo: "Stakeholders deciding whether a HubSpot app needs new app creation, modernization, migration planning, or a separate card workstream.",
      verify: "Compare the sunset changelog with the create-app and migration overview docs before telling a client what changed.",
      boundary: "Do not collapse all older HubSpot app work into one migration deadline.",
    },
    claims: [
      {
        claim: "The legacy public app sunset concerns new legacy public app creation.",
        source: officialSources.sunset,
      },
      {
        claim: "New Projects-based app development should be reviewed from the create-app docs.",
        source: officialSources.createApp,
      },
      {
        claim: "Existing app migration paths should be evaluated from migration documentation.",
        source: officialSources.migrationOverview,
      },
    ],
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
    faqs: [
      {
        question: "Is the legacy public app sunset the same as a migration deadline?",
        answer:
          "No. The May and June 2026 sunset affects new legacy public app creation. Migration and platform-version work should be evaluated from the relevant migration sources.",
      },
      {
        question: "How do I explain the difference to a client?",
        answer:
          "Separate new app creation, existing app modernization, Marketplace readiness, and CRM card modernization as different workstreams with different official sources.",
      },
    ],
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
    answerSnapshot: {
      shortAnswer:
        "Choose between `hs app migrate` and `hs project migrate` only after inspecting whether the app is non-project legacy, already project-based, public, private, and which platform version it uses.",
      appliesTo: "Developers with an existing HubSpot app who need to identify the likely migration command path to verify.",
      verify: "Open the migration overview, public app migration, latest-platform migration, and project command docs before running a command.",
      boundary: "Treat commands as paths to verify, not commands to run from memory.",
    },
    claims: [
      {
        claim: "`hs app migrate` belongs to public app migration guidance, not new app creation.",
        source: officialSources.migratePublic,
      },
      {
        claim: "`hs project migrate` and platform-version decisions should be checked against migration and project command docs.",
        source: officialSources.migrateLatest,
      },
      {
        claim: "The migration path depends on app state and current project structure.",
        source: officialSources.migrationOverview,
      },
    ],
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
    faqs: [
      {
        question: "How do I choose between hs app migrate and hs project migrate?",
        answer:
          "Inspect the repo and app state first. Existing non-project legacy public apps, already project-based apps, and private apps point to different official migration guidance.",
      },
      {
        question: "Should I run a migration command immediately?",
        answer:
          "No. Treat the command as a path to verify after app classification, file inspection, install-risk review, and a current official source check.",
      },
    ],
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
    answerSnapshot: {
      shortAnswer:
        "Private app migration should be treated as source-checked planning; do not assume every private app has an automatic Projects CLI migration path.",
      appliesTo: "Teams reviewing existing private apps, especially legacy non-project-based private apps.",
      verify: "Open current private app migration and latest-platform migration docs before proposing a command or replacement path.",
      boundary: "Do not promise automatic private app migration, compatibility, or official approval.",
    },
    claims: [
      {
        claim: "Private app migration has separate guidance from public app migration.",
        source: officialSources.migratePrivate,
      },
      {
        claim: "Legacy non-project-based private app migration to 2026.03 has documented limitations.",
        source: officialSources.migrateLatest,
      },
      {
        claim: "Private app work may require manual planning depending on current app state and features.",
        source: officialSources.migrationOverview,
      },
    ],
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
    faqs: [
      {
        question: "Can every private app be migrated automatically?",
        answer:
          "No. Private app cases need careful source-checked planning, and documented limitations may apply depending on the app state and target platform version.",
      },
      {
        question: "What should a private app handoff include?",
        answer:
          "Include auth model, token handling, backend services, webhooks, UI extensions, serverless functions, CRM cards, current app state, and current source links.",
      },
    ],
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
    answerSnapshot: {
      shortAnswer:
        "A 2026.03 upgrade starts with `hsproject.json`, current `platformVersion`, app type, and the supported migration path in current HubSpot docs.",
      appliesTo: "Teams maintaining existing project-based apps or evaluating migration to the latest HubSpot developer platform version.",
      verify: "Open the migration overview, latest-platform migration, and project command docs before changing platformVersion or uploading.",
      boundary: "Do not treat 2026.03 platform work as the same event as the May/June legacy public app creation sunset.",
    },
    claims: [
      {
        claim: "`platformVersion` should be inspected in the project configuration before upgrade planning.",
        source: officialSources.migrationOverview,
      },
      {
        claim: "Latest-platform migration guidance includes cases and limitations that should be checked before changes.",
        source: officialSources.migrateLatest,
      },
      {
        claim: "Project command behavior should be checked against current CLI project command docs.",
        source: officialSources.projectCommands,
      },
    ],
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
    faqs: [
      {
        question: "Is platformVersion 2026.03 the same as the May/June creation sunset?",
        answer:
          "No. Platform-version migration is a separate workstream from the legacy public app creation sunset.",
      },
      {
        question: "What file should I inspect first for platform version?",
        answer:
          "Start with `hsproject.json`, then review app type, feature files, serverless functions, app cards, and current migration docs before changing files.",
      },
    ],
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
    answerSnapshot: {
      shortAnswer:
        "`app-hsmeta.json` should be reviewed with the full HubSpot project structure before upload, migration, or install-flow testing.",
      appliesTo: "Developers troubleshooting Projects-based app structure, identifiers, auth settings, redirect URLs, scopes, and upload readiness.",
      verify: "Open create-app, project command, and relevant migration docs before changing app identifiers or auth configuration.",
      boundary: "A valid-looking app file does not prove Marketplace readiness or official approval.",
    },
    claims: [
      {
        claim: "Projects-based app configuration should be reviewed in the context of the project structure.",
        source: officialSources.createApp,
      },
      {
        claim: "Private app cases can have migration limitations and should not be inferred from public app examples.",
        source: officialSources.migratePrivate,
      },
      {
        claim: "Upload and local project commands should be verified from current project command docs.",
        source: officialSources.projectCommands,
      },
    ],
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
    faqs: [
      {
        question: "What is app-hsmeta.json used for?",
        answer:
          "It is a key Projects-based app configuration file. Review it with the rest of the project structure rather than treating it as an isolated JSON snippet.",
      },
      {
        question: "Does a valid-looking app-hsmeta.json prove Marketplace readiness?",
        answer:
          "No. Marketplace readiness, install behavior, support materials, privacy materials, and review requirements still need separate verification.",
      },
    ],
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
    answerSnapshot: {
      shortAnswer:
        "A HubSpot CLI CI preflight should record versions, target account strategy, secret handling, selected command path, and source-check date before upload automation.",
      appliesTo: "Teams adding HubSpot Projects CLI upload or migration steps to local development and CI/CD workflows.",
      verify: "Open the current CLI reference and project command docs before changing pipeline behavior.",
      boundary: "Do not expose HubSpot tokens, client secrets, private keys, or account credentials in logs or prompts.",
    },
    claims: [
      {
        claim: "CLI behavior should be checked against the current HubSpot CLI reference.",
        source: officialSources.cliReference,
      },
      {
        claim: "Project commands should be checked before CI upload automation is enabled.",
        source: officialSources.projectCommands,
      },
    ],
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
    faqs: [
      {
        question: "What should CI record before HubSpot CLI uploads?",
        answer:
          "Record CLI version, Node version, target account strategy, secret storage, selected command path, and a current source-check date.",
      },
      {
        question: "Should CI logs include HubSpot secrets?",
        answer:
          "No. Do not paste tokens, client secrets, private keys, or account credentials into docs, tickets, logs, or agent prompts.",
      },
    ],
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
    answerSnapshot: {
      shortAnswer:
        "Legacy or classic CRM card modernization is a separate app-card workstream and should not be merged with the May/June legacy public app creation sunset.",
      appliesTo: "Apps using classic or legacy CRM cards that need app-card modernization planning.",
      verify: "Open HubSpot CRM card docs and the classic CRM card deprecation changelog before planning card replacement.",
      boundary: "Use October 31, 2026 for CRM card modernization only, not for the public app creation sunset.",
    },
    claims: [
      {
        claim: "Legacy or classic CRM card work has separate official guidance from public app creation.",
        source: officialSources.crmCards,
      },
      {
        claim: "The October 31, 2026 date belongs to the classic CRM cards deprecation workstream.",
        source: officialSources.crmCardsChangelog,
      },
    ],
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
    faqs: [
      {
        question: "Is the CRM card deadline part of the May/June public app creation sunset?",
        answer:
          "No. CRM card modernization is a separate app-card workstream with its own official sources and planning deadline.",
      },
      {
        question: "What should I inventory for CRM card modernization?",
        answer:
          "List each legacy or classic CRM card, object location, data source, UI behavior, scopes, backend owner, and test plan.",
      },
    ],
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
    answerSnapshot: {
      shortAnswer:
        "Marketplace readiness is separate from Projects CLI readiness; a structured project still needs listing, support, privacy, testing, and install-flow evidence.",
      appliesTo: "Teams preparing a HubSpot public or Marketplace app for review or client handoff.",
      verify: "Open current HubSpot listing and Marketplace listing requirements before submission.",
      boundary: "No independent checklist can guarantee Marketplace approval.",
    },
    claims: [
      {
        claim: "Marketplace listing requires its own submission and listing preparation work.",
        source: officialSources.marketplace,
      },
      {
        claim: "Marketplace listing requirements should be checked before submission.",
        source: officialSources.marketplaceRequirements,
      },
    ],
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
    faqs: [
      {
        question: "Does Projects CLI readiness guarantee Marketplace approval?",
        answer:
          "No. A project can be technically organized and still need listing, support, privacy, testing, install-flow, and review materials.",
      },
      {
        question: "What should agencies prepare before submission?",
        answer:
          "Prepare a reusable packet with app inventory, source-check date, support/privacy owners, testing instructions, screenshots/assets status, and current official listing requirements.",
      },
    ],
    sources: [officialSources.marketplace, officialSources.marketplaceRequirements],
    related: ["hs-project-create-marketplace-app", "hubspot-projects-cli-checklist", "hubspot-legacy-crm-cards-to-app-cards"],
    cta: "bundle",
  },
  {
    slug: "hubspot-project-upload-checklist",
    title: "HubSpot hs project upload Checklist",
    description:
      "A source-linked checklist for using hs project upload without confusing upload, build, deploy, account targeting, JSON config changes, and Marketplace readiness.",
    intent: "Prepare a safer project upload.",
    lastChecked,
    summary:
      "`hs project upload` uploads a HubSpot project and creates a build. Teams should verify account targeting, auto-deploy behavior, UID stability, auth configuration, and Marketplace implications before using it for meaningful changes.",
    answerSnapshot: {
      shortAnswer:
        "`hs project upload` uploads the current project to HubSpot and creates a build; if auto-deploy is enabled, a successful build may deploy automatically.",
      appliesTo: "Developers moving a Projects-based HubSpot app from local work toward a sandbox, test account, or main account upload.",
      verify: "Open the current HubSpot CLI project commands docs and create-app docs before uploading to a production-affecting account.",
      boundary: "This checklist does not guarantee a successful build, deployment, install flow, or Marketplace review.",
    },
    claims: [
      {
        claim: "`hs project upload` uploads a project to HubSpot and creates a build.",
        source: officialSources.projectCommands,
      },
      {
        claim: "A project configured to auto-deploy can deploy automatically after a successful build, and new projects are documented as auto-deploy by default.",
        source: officialSources.projectCommands,
      },
      {
        claim: "Changing component UIDs after upload can cause HubSpot to recognize a component as different from previous builds.",
        source: officialSources.createApp,
      },
    ],
    sections: [
      {
        heading: "Before you upload",
        body: [
          "Treat `hs project upload` as a change-management moment, not a casual sync command. The official project commands docs describe it as uploading a project to HubSpot and creating a build, with auto-deploy behavior depending on project settings. That means the checklist should start with the target account, the current project state, and whether a successful build can become a deployed change.",
          "Confirm which account name in `~/.hscli/config.yml` is intended for the upload. HubSpot documents `--account=accountName` for targeting a specific account, including workflows that move from sandbox to main account. For agency work, make the account name explicit in the handoff so a developer is not relying on whichever account was last authenticated in a terminal.",
          "Inspect `hsproject.json`, `app-hsmeta.json`, and feature configuration before upload. If you changed OAuth settings, redirect URLs, scopes, app cards, settings pages, or other JSON configuration, record exactly what changed and why. Keep UID changes especially visible because the create-app docs warn that changed UIDs can make the platform treat a component as different from previous builds.",
        ],
      },
      {
        heading: "Upload vs deploy",
        body: [
          "The most important SEO answer for searchers is simple: upload and deploy are related but not identical. `hs project upload` creates a build. If the project is configured to auto-deploy, that successful build can deploy automatically; if it is not, a manual deploy step may be needed. Always check current project settings and current docs before giving a stakeholder a go-live expectation.",
          "For a sandbox-to-main workflow, use a written release note even if the code change is small. Include the command planned, account target, expected build behavior, rollback owner, and what to test after upload. This is especially useful when an AI agent or junior developer is preparing the command but a senior developer owns the account consequence.",
          "Do not describe this guide as a deployment guarantee. A clean local project and a correct command can still fail because of account permissions, app configuration, platform validation, missing backend OAuth configuration, Marketplace requirements, or changes in HubSpot documentation after this source-check date.",
        ],
      },
      {
        heading: "Production-minded checklist",
        body: [
          "A useful pre-upload packet contains: source-check date, CLI version, target account, project directory, changed files, expected auth mode, redirect URLs, scopes, UID changes, auto-deploy setting, test plan, and owner. That packet is small enough to paste into a pull request, issue, or client delivery note.",
          "For public or Marketplace apps, connect upload readiness to install-flow readiness. HubSpot's create-app docs describe post-upload work around installation and OAuth app credentials. If your backend OAuth server still lacks the correct client ID or client secret, an uploaded project is not the same as a tested app.",
          "After upload, capture build result, deploy result if applicable, app install result, and any manual follow-up. Those notes help the next developer distinguish a command failure from an auth failure, a Marketplace readiness gap, or an unsupported assumption.",
        ],
      },
    ],
    checks: [
      "Record `hs --version` and source-check date.",
      "Confirm the intended HubSpot account and use `--account=accountName` when appropriate.",
      "Check whether the project is configured for auto-deploy.",
      "Review changed JSON configuration files before upload.",
      "Flag UID changes before upload.",
      "Confirm OAuth redirect URLs, scopes, and backend credential readiness when applicable.",
      "Write the post-upload test plan before running the command.",
    ],
    faqs: [
      {
        question: "Does hs project upload deploy automatically?",
        answer:
          "It can, depending on project auto-deploy settings. HubSpot's project command docs say an auto-deploy project deploys after a successful build, and new projects are documented as auto-deploy by default.",
      },
      {
        question: "How do I avoid uploading to the wrong HubSpot account?",
        answer:
          "Record the intended account before upload and review HubSpot's documented `--account=accountName` option for targeting a specific account from your CLI config.",
      },
      {
        question: "Should I change UIDs before upload?",
        answer:
          "Only with deliberate review. HubSpot's create-app docs note that changing a UID after upload may make the platform recognize the component as different from previous builds.",
      },
    ],
    sources: [officialSources.projectCommands, officialSources.createApp, officialSources.marketplaceRequirements],
    related: ["hubspot-projects-cli-checklist", "hubspot-project-dev-local-development", "hubspot-oauth-redirect-scopes-install-checklist"],
    cta: "checklist",
  },
  {
    slug: "hubspot-project-dev-local-development",
    title: "HubSpot hs project dev Local Development Guide",
    description:
      "A practical guide to hs project dev, local UI extension development, JSON config upload boundaries, and source-linked QA notes for HubSpot Projects apps.",
    intent: "Use local development without overtrusting it.",
    lastChecked,
    summary:
      "`hs project dev` starts a local development server for supported HubSpot project extension work. It can refresh supported JSX UI changes, but JSON config changes still need manual upload.",
    answerSnapshot: {
      shortAnswer:
        "`hs project dev` starts a local development server; supported JSX changes can refresh in the browser, while `.json` config changes need `hs project upload`.",
      appliesTo: "Developers building or testing HubSpot app cards, settings pages, and other Projects-based app work locally.",
      verify: "Open the current HubSpot project commands docs and create-app docs before relying on local development behavior.",
      boundary: "Local development preview is not production validation, Marketplace approval, or proof that all app configuration is uploaded.",
    },
    claims: [
      {
        claim: "`hs project dev` starts a local development server for project work.",
        source: officialSources.projectCommands,
      },
      {
        claim: "Supported JSX changes for app cards or settings pages can refresh while the server is running.",
        source: officialSources.projectCommands,
      },
      {
        claim: "Changes to `.json` configuration files need manual upload with `hs project upload`.",
        source: officialSources.projectCommands,
      },
    ],
    sections: [
      {
        heading: "What hs project dev is for",
        body: [
          "`hs project dev` is best understood as a local development loop for supported Projects app work. The project commands docs describe it as starting a local development server, and they call out supported browser refresh behavior for JSX changes when developing app cards or settings pages with UI components.",
          "That makes it useful for fast iteration on interactive UI surfaces, copy tweaks, component behavior, and developer feedback loops. It is less useful as a final source of truth for account configuration, OAuth readiness, Marketplace listing quality, or build/deploy behavior.",
          "Before starting local development, install or test the app according to the current create-app flow, confirm the target account, and write down which feature you are testing. A clear test scope keeps local dev from turning into a vague green light.",
        ],
      },
      {
        heading: "What does not update automatically",
        body: [
          "The official project commands docs make a critical distinction: changes to `.json` config files are not included in the local refresh behavior and need to be manually uploaded with `hs project upload`. This affects planning because many important app decisions live in configuration rather than JSX.",
          "If you change `app-hsmeta.json`, feature schema, auth configuration, scopes, redirect URLs, or other JSON-driven configuration, add a separate upload and verification step. Do not tell a client or product owner that local dev has validated those changes just because a UI surface refreshed in the browser.",
          "A clean workflow separates local UI confidence from project configuration confidence. Use `hs project dev` for the former, then use upload/build/install checks for the latter.",
        ],
      },
      {
        heading: "QA workflow for teams",
        body: [
          "For team handoff, create a short local-dev note: command used, target account, feature tested, files changed, browser behavior observed, JSON config changed or not changed, and next upload required or not required. That note gives a reviewer enough context to understand what was actually proven.",
          "If browser permissions, local network settings, or enterprise device policies interfere with the local development server, document the environment rather than turning the issue into a platform claim. Browser behavior changes over time, so the official docs and the local machine state should both be checked.",
          "For AI-assisted development, paste the local-dev note into the agent prompt and ask for separate next steps for JSX/UI issues, JSON config upload, OAuth install checks, and Marketplace readiness. This mirrors the source boundary and reduces overconfident output.",
        ],
      },
    ],
    checks: [
      "Confirm the app is installed or testable in the intended account.",
      "Run local development from the correct HubSpot project directory.",
      "Separate JSX/UI changes from `.json` configuration changes.",
      "Use `hs project upload` for configuration changes that need to reach HubSpot.",
      "Record browser, account, feature, and files tested in the handoff.",
      "Do not treat local dev as Marketplace or production approval.",
    ],
    faqs: [
      {
        question: "What changes refresh in hs project dev?",
        answer:
          "HubSpot's project command docs call out supported JSX changes for app cards or settings pages using UI components while the local development server is running.",
      },
      {
        question: "Do JSON config files update automatically in local development?",
        answer:
          "No. The project command docs state that `.json` config file changes need to be manually uploaded using `hs project upload`.",
      },
      {
        question: "Is hs project watch still the recommended local loop?",
        answer:
          "The archived HubSpot project commands docs mark `hs project watch` as deprecated in favor of `hs project dev`; verify the current docs before using older workflows.",
      },
    ],
    sources: [officialSources.projectCommands, officialSources.createApp],
    related: ["hubspot-project-upload-checklist", "hubspot-app-hsmeta-json-structure", "hubspot-cli-node-ci-preflight"],
    cta: "skill",
  },
  {
    slug: "hubspot-oauth-redirect-scopes-install-checklist",
    title: "HubSpot OAuth Redirect URL and Scopes Checklist",
    description:
      "A source-linked checklist for HubSpot Projects app OAuth redirect URLs, scopes, static auth boundaries, install testing, and Marketplace listing readiness.",
    intent: "Prepare OAuth and install-flow review.",
    lastChecked,
    summary:
      "For multi-account and Marketplace-oriented HubSpot apps, review OAuth redirect URLs, requested scopes, backend credentials, install testing, and shared-data claims before submission or client handoff.",
    answerSnapshot: {
      shortAnswer:
        "For multi-account or Marketplace HubSpot apps, OAuth redirect URLs, scopes, backend credentials, and install testing should be reviewed together before listing or production handoff.",
      appliesTo: "Developers preparing public, Marketplace, or multi-account HubSpot apps on the Projects developer platform.",
      verify: "Open the current create-app docs and Marketplace listing requirements before finalizing OAuth configuration or listing copy.",
      boundary: "This checklist does not guarantee OAuth install success, Marketplace approval, or policy compliance.",
    },
    claims: [
      {
        claim: "OAuth redirect URLs are configured in `app-hsmeta.json` for OAuth app setup.",
        source: officialSources.createApp,
      },
      {
        claim: "For static auth in a privately distributed app, HubSpot's create-app docs say to remove the `redirectUrls` sub-property.",
        source: officialSources.createApp,
      },
      {
        claim: "Marketplace apps must use OAuth and should only request scopes the app needs.",
        source: officialSources.marketplaceRequirements,
      },
    ],
    sections: [
      {
        heading: "OAuth configuration checklist",
        body: [
          "Start by deciding whether the app is truly OAuth-based. HubSpot's create-app docs distinguish OAuth from static authentication, and the Marketplace requirements add an important boundary for Marketplace apps: OAuth is required and scopes should be limited to what the app needs.",
          "For OAuth apps, inspect `app-hsmeta.json` for redirect URLs and auth configuration before upload. Redirect URLs should match the backend OAuth server and the environment being tested. If a URL points to local development, staging, or production, label that clearly so a reviewer does not confuse a test callback with a final callback.",
          "For privately distributed static-auth apps, do not keep OAuth assumptions in the handoff. The create-app docs state that if static authentication is chosen for a privately distributed app, the `redirectUrls` sub-property should be removed from the `auth` field. That is a concrete source-linked distinction worth exposing in any agent prompt.",
        ],
      },
      {
        heading: "Scopes and shared data",
        body: [
          "Scopes are not just technical fields. They shape install consent, Marketplace review, and user trust. HubSpot's Marketplace requirements say to request only scopes the app needs, and they connect shared-data information to the scopes requested by the app.",
          "Build a scope table with four columns: requested scope, app feature that uses it, read/write behavior, and where the user-facing listing explains the data flow. If a requested scope has no implemented feature or no listing explanation, either remove it or document why it is conditional or optional according to current requirements.",
          "Avoid vague phrases such as 'full CRM access' unless the app truly needs and explains that scope pattern. The safer long-tail SEO answer is: make scopes least-privilege, implemented, and reflected in listing/shared-data claims.",
        ],
      },
      {
        heading: "Install testing before handoff",
        body: [
          "After upload, OAuth apps need backend credentials and an install flow that can be tested. The create-app docs describe configuring client ID and client secret in the backend OAuth server after project upload for OAuth apps. If that step is missing, the project can exist in HubSpot while the install flow is still incomplete.",
          "Test the install in the right account type and record the result. A good install note includes redirect URL used, scopes displayed, account installed into, backend environment, success/failure result, and any error text. That note is valuable for debugging and for Marketplace readiness reviews.",
          "Keep Marketplace submission separate from install success. A working install flow is necessary work, but Marketplace review also evaluates listing materials, policies, support, shared data, and other requirements. This guide is designed to organize the work, not certify the outcome.",
        ],
      },
    ],
    checks: [
      "Classify auth as OAuth or static auth before editing `app-hsmeta.json`.",
      "For OAuth, verify redirect URLs against the backend environment.",
      "For static auth private apps, remove OAuth redirect URL assumptions from the handoff.",
      "Map every requested scope to an implemented feature.",
      "Check Marketplace shared-data language against requested scopes.",
      "Configure backend OAuth credentials after upload when applicable.",
      "Record install test account, redirect URL, scopes, and result.",
    ],
    faqs: [
      {
        question: "When do I need OAuth instead of static auth?",
        answer:
          "Marketplace apps must use OAuth according to HubSpot's Marketplace requirements. Static auth is a separate option for privately distributed app cases and should be checked against the current create-app docs.",
      },
      {
        question: "Where should OAuth redirect URLs be configured?",
        answer:
          "HubSpot's create-app docs show redirect URLs inside the `auth` configuration of `app-hsmeta.json` for OAuth app setup.",
      },
      {
        question: "Should scopes match listing and shared-data claims?",
        answer:
          "Yes. Marketplace requirements connect requested scopes with shared-data accuracy, so requested scopes should match implemented behavior and user-facing data-flow claims.",
      },
    ],
    sources: [officialSources.createApp, officialSources.marketplaceRequirements, officialSources.marketplace],
    related: ["hubspot-app-hsmeta-json-structure", "hubspot-marketplace-listing-checklist-2026", "hubspot-project-upload-checklist"],
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
    answerSnapshot: {
      shortAnswer:
        "The fastest safe workflow is to classify the app, open the relevant official HubSpot source, and use the guide pages to prepare a source-linked handoff.",
      appliesTo: "Developers, agencies, and product stakeholders with quick questions about Projects CLI, migration paths, and the 2026 creation sunset.",
      verify: "Open the current HubSpot changelog, migration docs, private app docs, and project command docs for the specific case.",
      boundary: "This site is an independent educational guide, not official HubSpot documentation.",
    },
    claims: [
      {
        claim: "The May/June 2026 sunset should be understood from the official changelog.",
        source: officialSources.sunset,
      },
      {
        claim: "Migration paths should be checked from current migration overview docs.",
        source: officialSources.migrationOverview,
      },
      {
        claim: "Private app cases need special caution and current source verification.",
        source: officialSources.migratePrivate,
      },
    ],
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
    faqs: [
      {
        question: "Is this site official HubSpot documentation?",
        answer:
          "No. It is an independent educational guide that links to public HubSpot documentation and should be verified against current official sources.",
      },
      {
        question: "Does the paid bundle perform a migration?",
        answer:
          "No. It packages planning files and an agent-ready workflow. It does not automate migration, certify compliance, or guarantee Marketplace approval.",
      },
      {
        question: "What is the fastest way to use the site?",
        answer:
          "Start with the checklist, classify the app, open the relevant official source links, then use the related guide pages for the likely command or planning path.",
      },
    ],
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
