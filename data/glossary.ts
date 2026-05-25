import { officialSources } from "./site";

export type GlossaryTerm = {
  term: string;
  slug: string;
  definition: string;
  whyItMatters: string;
  verifyWith: Array<{ label: string; url: string }>;
};

export const glossaryTerms: GlossaryTerm[] = [
  {
    term: "Legacy public app",
    slug: "legacy-public-app",
    definition:
      "A HubSpot public app associated with the legacy Developer Platform creation path. The May/June 2026 sunset discussed on this site concerns new legacy public app creation, not an existing-app shutdown claim.",
    whyItMatters: "This term prevents teams from confusing a creation-path sunset with runtime failure for existing apps.",
    verifyWith: [officialSources.sunset],
  },
  {
    term: "Projects app",
    slug: "projects-app",
    definition:
      "A HubSpot developer platform app managed through Projects-based files and HubSpot CLI workflows.",
    whyItMatters: "New public app work should be evaluated against the Projects-based CLI creation flow.",
    verifyWith: [officialSources.createApp, officialSources.projectCommands],
  },
  {
    term: "hs project create",
    slug: "hs-project-create",
    definition:
      "The HubSpot CLI command path to review when creating a new Projects-based app.",
    whyItMatters: "It fits new app creation and should not be treated as an existing-app migration command.",
    verifyWith: [officialSources.createApp, officialSources.projectCommands],
  },
  {
    term: "hs app migrate",
    slug: "hs-app-migrate",
    definition:
      "A HubSpot CLI migration path to verify for existing public app migration cases.",
    whyItMatters: "It should be considered only after classifying the existing app state and checking current migration docs.",
    verifyWith: [officialSources.migratePublic, officialSources.projectCommands],
  },
  {
    term: "hs project migrate",
    slug: "hs-project-migrate",
    definition:
      "A migration command path associated with existing project-based app or platform-version migration planning.",
    whyItMatters: "It should not be chosen from memory; inspect `hsproject.json`, platform version, and current docs first.",
    verifyWith: [officialSources.migrateLatest, officialSources.projectCommands],
  },
  {
    term: "app-hsmeta.json",
    slug: "app-hsmeta-json",
    definition:
      "A key app configuration file in Projects-based HubSpot app workflows.",
    whyItMatters: "Its identifiers, auth settings, redirect URLs, and scopes can affect upload, install testing, and handoff quality.",
    verifyWith: [officialSources.createApp, officialSources.projectCommands],
  },
  {
    term: "platformVersion",
    slug: "platformversion",
    definition:
      "The project platform version recorded in HubSpot project configuration and used in migration planning.",
    whyItMatters: "A platform-version review is separate from the May/June 2026 legacy public app creation sunset.",
    verifyWith: [officialSources.migrationOverview, officialSources.migrateLatest],
  },
  {
    term: "Marketplace readiness",
    slug: "marketplace-readiness",
    definition:
      "The non-code and code-adjacent preparation needed before a HubSpot app Marketplace listing can be reviewed.",
    whyItMatters: "A valid Projects CLI app can still lack listing copy, support details, privacy URL, testing instructions, or install-flow evidence.",
    verifyWith: [officialSources.marketplace, officialSources.marketplaceRequirements],
  },
  {
    term: "Legacy CRM cards",
    slug: "legacy-crm-cards",
    definition:
      "Classic or legacy CRM cards that have their own modernization workstream and deadline separate from the May/June public app creation sunset.",
    whyItMatters: "Teams should not mix the October 31, 2026 CRM card deadline with the public app creation sunset dates.",
    verifyWith: [officialSources.crmCards, officialSources.crmCardsChangelog],
  },
];
