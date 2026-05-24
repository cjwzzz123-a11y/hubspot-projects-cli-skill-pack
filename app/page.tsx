import Link from "next/link";
import Image from "next/image";
import { ArrowRight, FileCheck2, ListChecks, ShieldCheck, type LucideIcon } from "lucide-react";
import { DeadlineTable } from "@/components/deadline-table";
import { DecisionWizard } from "@/components/decision-wizard";
import { Disclaimer } from "@/components/disclaimer";
import { GuideCard } from "@/components/guide-card";
import { ProductCTA } from "@/components/product-cta";
import { SourceLinks } from "@/components/source-links";
import { guidePages } from "@/data/guides";
import { officialSources, siteConfig } from "@/data/site";

const featured = guidePages.slice(0, 6);

const valueCards: Array<{ title: string; body: string; Icon: LucideIcon }> = [
  { title: "Scope", body: "New legacy public app creation path, not existing app shutdown.", Icon: ShieldCheck },
  { title: "Output", body: "Checklist, command map, tracker, and developer handoff.", Icon: FileCheck2 },
  { title: "Pages", body: "Long-tail task pages mapped to official source links.", Icon: ListChecks },
];

export default function HomePage() {
  return (
    <main>
      <section className="border-b border-line bg-white">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 lg:grid-cols-[1.08fr_0.92fr] lg:py-16">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.12em] text-primary">Independent checklist bundle</p>
            <h1 className="mt-4 max-w-4xl text-4xl font-semibold leading-tight text-ink md:text-5xl">
              HubSpot Projects CLI checklist for the 2026 legacy public app creation sunset
            </h1>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-muted">
              Source-linked pages, a decision workflow, and buyer-ready checklists for teams creating new public apps with Projects-based CLI workflows.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Link href="/hubspot-projects-cli-checklist" className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-4 py-3 text-sm font-semibold text-white hover:bg-ink">
                Start the checklist
                <ArrowRight size={16} aria-hidden="true" />
              </Link>
              <Link href="/gumroad" className="inline-flex items-center justify-center rounded-md border border-line bg-white px-4 py-3 text-sm font-semibold text-ink hover:border-primary">
                View product bundle
              </Link>
            </div>
          </div>
          <div className="grid content-start gap-4">
            <Image
              src="/assets/generated/projects-cli-skill-pack-hero.png"
              width={1672}
              height={941}
              priority
              alt="Abstract developer workflow panels for a Projects CLI skill pack"
              className="aspect-[16/9] w-full rounded-md border border-line object-cover shadow-soft"
            />
            <Disclaimer />
            <DeadlineTable />
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-8 px-4 py-10 lg:grid-cols-[0.95fr_1.05fr]">
        <DecisionWizard />
        <div className="grid gap-4 sm:grid-cols-3">
          {valueCards.map(({ title, body, Icon }) => (
            <div key={title} className="rounded-md border border-line bg-white p-5 shadow-sm">
              <Icon className="text-primary" size={22} aria-hidden="true" />
              <h2 className="mt-4 text-base font-semibold text-ink">{title}</h2>
              <p className="mt-2 text-sm leading-6 text-muted">{body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-line bg-white">
        <div className="mx-auto max-w-6xl px-4 py-10">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <h2 className="text-2xl font-semibold text-ink">Core Guides</h2>
              <p className="mt-2 max-w-2xl text-sm leading-6 text-muted">
                Each page targets a concrete search intent and links back to official HubSpot documentation.
              </p>
            </div>
            <Link href="/hubspot-projects-cli-faq" className="text-sm font-semibold text-primary hover:text-ink">
              Open FAQ
            </Link>
          </div>
          <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {featured.map((page) => (
              <GuideCard key={page.slug} page={page} />
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-6 px-4 py-10 lg:grid-cols-[1fr_0.85fr]">
        <ProductCTA variant="bundle" placement="home-bottom" />
        <SourceLinks sources={[officialSources.sunset, officialSources.createApp, officialSources.projectCommands]} />
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-12">
        <p className="rounded-md border border-line bg-white p-4 text-sm leading-6 text-muted">{siteConfig.disclaimer}</p>
      </section>
    </main>
  );
}
