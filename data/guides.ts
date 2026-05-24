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
        heading: "What changes",
        body: [
          "Beginning May 26, 2026, newly created developer accounts cannot create new legacy public apps through the legacy Developer Platform UI.",
          "Beginning June 23, 2026, accounts created before May 26 also lose that new legacy public app creation path.",
          "New public app development should review the Projects-based app platform and HubSpot CLI workflow.",
        ],
      },
      {
        heading: "What does not change under this sunset",
        body: [
          "Existing legacy public apps continue functioning under this specific sunset.",
          "This page should be used as a triage guide, not as a replacement for HubSpot official documentation.",
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
          "Classify the app first: new public app, legacy public app, project-based app, private app, or CRM card modernization.",
          "Then check CLI, Node, account authentication, project files, OAuth URLs, scopes, Marketplace fields, and CI configuration.",
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
        heading: "Command flow to verify",
        body: [
          "`hs project create` starts the project creation flow.",
          "After project setup, teams commonly review local development, upload, and open commands in the CLI project commands reference.",
        ],
      },
      {
        heading: "Before upload",
        body: [
          "Confirm app identity fields, OAuth redirect URLs, scopes, and target account.",
          "Treat generated config as source-controlled application configuration, not throwaway setup output.",
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
        heading: "Legacy public app creation",
        body: [
          "Legacy UI creation is the path being sunset for new public apps.",
          "Existing legacy public apps continue functioning under the May/June sunset, so modernization should be planned intentionally.",
        ],
      },
      {
        heading: "Projects-based app development",
        body: [
          "Projects-based apps use file-based configuration and HubSpot CLI workflows.",
          "The workflow is better suited to source control, local development, and repeatable deployment checks.",
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
          "If there is no `hsproject.json`, review the non-project legacy app path and `hs app migrate` guidance.",
          "If the app is already project-based, review platform-version guidance and `hs project migrate` where applicable.",
          "If the app is private, review private app documentation and current latest-platform limitations before assuming automation.",
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
          "Private app migration is not the same as public app migration.",
          "Some private app modernization paths involve manually moving configuration, webhooks, UI extension code, or backend logic.",
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
          "Look for `hsproject.json` and its `platformVersion` property.",
          "The migration overview explains how existing platform versions relate to 2026.03.",
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
          "Confirm the file exists in the expected project structure.",
          "Review app UID, auth fields, redirect URLs, and related feature configuration before upload.",
        ],
      },
    ],
    checks: ["Find `app-hsmeta.json`.", "Check UID changes.", "Check auth mode.", "Check redirect URLs.", "Check scopes and permitted URLs where relevant."],
    sources: [officialSources.createApp, officialSources.migratePrivate, officialSources.projectCommands],
    related: ["hs-project-create-marketplace-app", "hubspot-projects-cli-checklist", "hubspot-cli-v8-node-20-ci-checklist"],
    cta: "checklist",
  },
  {
    slug: "hubspot-cli-v8-node-20-ci-checklist",
    title: "HubSpot CLI, Node, and CI Checklist",
    description:
      "A CI/CD preflight page for HubSpot Projects CLI work, including version checks, account auth, upload commands, and source verification.",
    intent: "Prevent environment and CI issues.",
    lastChecked,
    summary:
      "Before a Projects CLI migration or upload, record CLI version, Node version, account auth, and CI secret handling. Recheck current CLI reference before changing pipelines.",
    sections: [
      {
        heading: "CI preflight",
        body: [
          "Pin local and CI runtime versions where practical.",
          "Avoid relying on old command names or implicit account state in CI.",
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
          "The CRM card deadline is about card rendering and app-card modernization.",
          "Treat this as a second workstream if your app includes classic CRM cards.",
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
          "Review HubSpot listing docs and requirements before submission.",
          "Assign owners for support, privacy, testing, and install-flow materials.",
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
          "Does my existing legacy public app stop working on May 26? Under this specific sunset, no; the change disables new legacy public app creation.",
          "Which command should I run? It depends on whether you are creating a new app, migrating a non-project legacy public app, or updating an existing project-based app.",
          "Can private apps be migrated automatically? Do not assume that; review current private app and latest-platform docs.",
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
    body: ["For support, use the contact address that will be added after the final domain and Gumroad account are connected."],
  },
  {
    slug: "privacy",
    title: "Privacy",
    description: "Privacy policy.",
    body: [
      "This site does not require login in v1.",
      "Outbound Gumroad purchases are handled by Gumroad according to Gumroad's own policies.",
      "Analytics may be used to understand page visits and CTA clicks after deployment.",
    ],
  },
  {
    slug: "terms",
    title: "Terms",
    description: "Terms of use.",
    body: [
      siteConfig.disclaimer,
      "The content is provided for educational planning use and does not guarantee migration success, Marketplace approval, or compatibility with future HubSpot platform changes.",
    ],
  },
];

