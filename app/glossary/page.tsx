import type { Metadata } from "next";
import Link from "next/link";
import { BookOpenCheck, ExternalLink } from "lucide-react";
import { Disclaimer } from "@/components/disclaimer";
import { glossaryTerms } from "@/data/glossary";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "HubSpot Projects CLI Glossary",
  description:
    "Definitions for HubSpot Projects CLI, legacy public app creation, migration commands, app-hsmeta.json, platformVersion, Marketplace readiness, and CRM cards.",
  alternates: {
    canonical: "/glossary",
  },
};

export default function GlossaryPage() {
  const glossaryJsonLd = {
    "@context": "https://schema.org",
    "@type": "DefinedTermSet",
    name: "HubSpot Projects CLI Glossary",
    url: `${siteConfig.url}/glossary`,
    hasDefinedTerm: glossaryTerms.map((item) => ({
      "@type": "DefinedTerm",
      name: item.term,
      description: item.definition,
      url: `${siteConfig.url}/glossary#${item.slug}`,
    })),
  };

  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(glossaryJsonLd) }} />
      <section className="rounded-md border border-line bg-white p-7 shadow-sm">
        <div className="flex flex-col gap-5 md:flex-row md:items-start">
          <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md bg-[#eaf6f1] text-primary">
            <BookOpenCheck size={24} aria-hidden="true" />
          </span>
          <div className="min-w-0">
            <p className="text-sm font-semibold uppercase tracking-[0.12em] text-primary">GEO reference</p>
            <h1 className="mt-2 text-3xl font-semibold leading-tight text-ink md:text-5xl">HubSpot Projects CLI Glossary</h1>
            <p className="mt-4 max-w-3xl text-lg leading-8 text-muted">
              Short, source-linked definitions for terms that appear in HubSpot Projects CLI app creation, migration planning, Marketplace readiness, and CRM card modernization.
            </p>
            <div className="mt-6">
              <Disclaimer />
            </div>
          </div>
        </div>
      </section>

      <section className="mt-8 rounded-md border border-line bg-white p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-ink">Terms</h2>
        <div className="mt-5 grid gap-3 md:grid-cols-2">
          {glossaryTerms.map((item) => (
            <a key={item.slug} href={`#${item.slug}`} className="rounded-md border border-line px-4 py-3 text-sm font-medium text-ink hover:border-primary">
              {item.term}
            </a>
          ))}
        </div>
      </section>

      <section className="mt-8 grid gap-6">
        {glossaryTerms.map((item) => (
          <article key={item.slug} id={item.slug} className="scroll-mt-24 rounded-md border border-line bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-semibold text-ink">{item.term}</h2>
            <p className="mt-4 text-base leading-7 text-muted">{item.definition}</p>
            <div className="mt-5 grid gap-4 md:grid-cols-[1fr_0.8fr]">
              <div className="rounded-md border border-line bg-[#f8faf8] p-4">
                <h3 className="text-sm font-semibold uppercase tracking-[0.12em] text-primary">Why it matters</h3>
                <p className="mt-2 text-sm leading-6 text-muted">{item.whyItMatters}</p>
              </div>
              <div className="rounded-md border border-line p-4">
                <h3 className="text-sm font-semibold uppercase tracking-[0.12em] text-primary">Verify with</h3>
                <div className="mt-3 grid gap-2">
                  {item.verifyWith.map((source) => (
                    <a key={source.url} href={source.url} target="_blank" rel="noreferrer" className="inline-flex items-start gap-2 text-sm font-medium text-primary hover:text-ink">
                      {source.label}
                      <ExternalLink className="mt-0.5 shrink-0" size={14} aria-hidden="true" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </article>
        ))}
      </section>

      <section className="mt-8 rounded-md border border-line bg-white p-5 text-sm leading-6 text-muted">
        <p>{siteConfig.disclaimer}</p>
        <p className="mt-3">
          For the main workflow, start with the <Link href="/hubspot-projects-cli-checklist" className="font-semibold text-primary hover:text-ink">HubSpot Projects CLI checklist</Link>.
        </p>
      </section>
    </main>
  );
}
