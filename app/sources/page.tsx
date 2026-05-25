import type { Metadata } from "next";
import { ExternalLink, ShieldCheck } from "lucide-react";
import { officialSources, siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Official Source Index",
  description:
    "Official HubSpot source index used by Projects App Guide for Projects CLI app creation, migration planning, Marketplace readiness, and CRM card modernization.",
  alternates: {
    canonical: "/sources",
  },
};

const sourceGroups = [
  {
    name: "Creation sunset and new app creation",
    sources: [officialSources.sunset, officialSources.createApp, officialSources.projectCommands],
  },
  {
    name: "Migration planning",
    sources: [officialSources.migrationOverview, officialSources.migratePublic, officialSources.migrateLatest, officialSources.migratePrivate],
  },
  {
    name: "Marketplace and listing readiness",
    sources: [officialSources.marketplace, officialSources.marketplaceRequirements],
  },
  {
    name: "CRM card modernization",
    sources: [officialSources.crmCards, officialSources.crmCardsChangelog],
  },
  {
    name: "CLI reference",
    sources: [officialSources.cliReference],
  },
];

const sourceFaqs = [
  {
    question: "Are these sources enough for production-affecting HubSpot work?",
    answer:
      "No. This index shows the official HubSpot sources used by this independent guide, but developers should re-open current HubSpot documentation before production-affecting commands, uploads, submissions, or client delivery.",
  },
  {
    question: "Does this site claim official HubSpot affiliation?",
    answer:
      "No. Projects App Guide is an unofficial, independent educational guide and does not claim HubSpot affiliation, certification, endorsement, sponsorship, or guaranteed migration results.",
  },
  {
    question: "How should the May 26 and June 23, 2026 dates be described?",
    answer:
      "Describe them as dates affecting new legacy public app creation through the legacy Developer Platform UI. Do not describe them as existing legacy public app shutdown dates under this specific sunset.",
  },
];

export default function SourcesPage() {
  const collectionJsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Official Source Index",
    description: metadata.description,
    url: `${siteConfig.url}/sources`,
    hasPart: sourceGroups.flatMap((group) =>
      group.sources.map((source) => ({
        "@type": "WebPage",
        name: source.label,
        url: source.url,
        isPartOf: group.name,
      })),
    ),
  };
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: siteConfig.name,
        item: siteConfig.url,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Official Source Index",
        item: `${siteConfig.url}/sources`,
      },
    ],
  };
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: sourceFaqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <section className="rounded-md border border-line bg-white p-7 shadow-sm">
        <div className="flex flex-col gap-5 md:flex-row md:items-start">
          <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md bg-[#eaf6f1] text-primary">
            <ShieldCheck size={24} aria-hidden="true" />
          </span>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.12em] text-primary">Source index</p>
            <h1 className="mt-2 text-3xl font-semibold leading-tight text-ink md:text-5xl">Official Sources Used By This Guide</h1>
            <p className="mt-4 max-w-3xl text-lg leading-8 text-muted">
              This index lists the HubSpot documentation and changelog sources that support the guide pages. Re-open current official docs before production-affecting commands, uploads, submissions, or client delivery.
            </p>
            <p className="mt-4 max-w-3xl text-sm leading-6 text-muted">{siteConfig.disclaimer}</p>
          </div>
        </div>
      </section>

      <section className="mt-8 grid gap-6">
        {sourceGroups.map((group) => (
          <div key={group.name} className="rounded-md border border-line bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-ink">{group.name}</h2>
            <div className="mt-5 grid gap-3 md:grid-cols-2">
              {group.sources.map((source) => (
                <a key={source.url} href={source.url} target="_blank" rel="noreferrer" className="flex items-start justify-between gap-3 rounded-md border border-line px-4 py-3 text-sm text-ink hover:border-primary">
                  <span>
                    <span className="block font-semibold">{source.label}</span>
                    <span className="mt-1 block break-all text-xs leading-5 text-muted">{source.url}</span>
                  </span>
                  <ExternalLink className="mt-0.5 shrink-0 text-muted" size={15} aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
        ))}
      </section>

      <section className="mt-8 rounded-md border border-line bg-white p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-ink">Source Use FAQ</h2>
        <div className="mt-5 grid gap-5">
          {sourceFaqs.map((faq) => (
            <div key={faq.question} className="border-t border-line pt-5 first:border-t-0 first:pt-0">
              <h3 className="font-semibold text-ink">{faq.question}</h3>
              <p className="mt-2 text-sm leading-6 text-muted">{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
