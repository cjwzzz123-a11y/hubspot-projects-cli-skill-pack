export const siteConfig = {
  name: "Projects App Guide",
  tagline: "Unofficial Projects CLI migration guidance for HubSpot developers",
  description:
    "An unofficial, source-linked guide and agent-ready skill pack for HubSpot Projects CLI app creation and migration planning.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://hubspot-projects-cli-skill-pack.vercel.app",
  gumroad: {
    bundle: process.env.NEXT_PUBLIC_GUMROAD_BUNDLE_URL || "",
    pdf: process.env.NEXT_PUBLIC_GUMROAD_PDF_URL || "",
    agency: process.env.NEXT_PUBLIC_GUMROAD_AGENCY_URL || "",
  },
  disclaimer:
    "Independent educational guide. Not affiliated with, endorsed by, or sponsored by HubSpot. Verify critical commands and platform behavior against official HubSpot documentation before deploying.",
};

export const officialSources = {
  sunset: {
    label: "Legacy Public App Creation Sunset",
    url: "https://developers.hubspot.com/changelog/legacy-public-app-creation-sunset",
  },
  createApp: {
    label: "Create a new app using the CLI",
    url: "https://developers.hubspot.com/docs/apps/developer-platform/build-apps/create-an-app",
  },
  migrationOverview: {
    label: "Determine your migration path to 2026.03",
    url: "https://developers.hubspot.com/docs/apps/developer-platform/build-apps/migrate-an-app/overview",
  },
  migratePublic: {
    label: "Migrate an existing public app",
    url: "https://developers.hubspot.com/docs/apps/developer-platform/build-apps/migrate-an-app/migrate-an-existing-public-app",
  },
  migrateLatest: {
    label: "Migrate an existing app to 2026.03",
    url: "https://developers.hubspot.com/docs/apps/developer-platform/build-apps/migrate-an-app/migrate-to-the-latest-platform-version",
  },
  migratePrivate: {
    label: "Migrate an existing private app",
    url: "https://developers.hubspot.com/docs/apps/developer-platform/build-apps/migrate-an-app/migrate-an-existing-private-app",
  },
  projectCommands: {
    label: "HubSpot CLI project commands",
    url: "https://developers.hubspot.com/docs/developer-tooling/local-development/hubspot-cli/project-commands",
  },
  cliReference: {
    label: "HubSpot CLI reference",
    url: "https://developers.hubspot.com/docs/developer-tooling/local-development/hubspot-cli/reference",
  },
  marketplace: {
    label: "Listing your app",
    url: "https://developers.hubspot.com/docs/apps/developer-platform/list-apps/listing-your-app/listing-your-app",
  },
  marketplaceRequirements: {
    label: "App Marketplace listing requirements",
    url: "https://developers.hubspot.com/docs/api/app-marketplace-listing-requirements",
  },
  crmCards: {
    label: "Legacy CRM cards guide",
    url: "https://developers.hubspot.com/docs/api-reference/crm-public-app-crm-cards-v3/guide",
  },
  crmCardsChangelog: {
    label: "Classic CRM cards deprecation changelog",
    url: "https://developers.hubspot.com/changelog/deprecating-support-for-classic-crm-cards",
  },
};
