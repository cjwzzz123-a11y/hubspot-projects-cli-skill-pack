import Link from "next/link";
import Image from "next/image";
import { ArrowRight, FileCheck2, GitBranch, ListChecks, SearchCheck, ShieldCheck, type LucideIcon } from "lucide-react";
import { DeadlineTable } from "@/components/deadline-table";
import { DecisionWizard } from "@/components/decision-wizard";
import { Disclaimer } from "@/components/disclaimer";
import { GuideCard } from "@/components/guide-card";
import { ProductCTA } from "@/components/product-cta";
import { SourceLinks } from "@/components/source-links";
import { guidePages } from "@/data/guides";
import { officialSources, siteConfig } from "@/data/site";

const featured = guidePages.slice(0, 6);
const allGuides = guidePages;

const valueCards: Array<{ title: string; body: string; Icon: LucideIcon }> = [
  { title: "Scope", body: "New legacy public app creation path, not existing app shutdown.", Icon: ShieldCheck },
  { title: "Output", body: "Checklist, command map, tracker, and developer handoff.", Icon: FileCheck2 },
  { title: "Pages", body: "Long-tail task pages mapped to official source links.", Icon: ListChecks },
];

const intentPaths: Array<{ title: string; body: string; href: string; Icon: LucideIcon }> = [
  {
    title: "I need to understand the 2026 dates",
    body: "Clarify May 26 and June 23 without turning the creation sunset into an existing-app shutdown claim.",
    href: "/hubspot-legacy-public-app-creation-sunset",
    Icon: SearchCheck,
  },
  {
    title: "I am creating a new public app",
    body: "Review the Projects-based CLI creation path and Marketplace preparation checkpoints.",
    href: "/hs-project-create-marketplace-app",
    Icon: FileCheck2,
  },
  {
    title: "I need to choose a migration path",
    body: "Separate `hs app migrate`, `hs project migrate`, private app review, and platform-version work.",
    href: "/hs-app-migrate-vs-hs-project-migrate",
    Icon: GitBranch,
  },
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
            <p className="mt-4 max-w-3xl text-sm leading-6 text-muted">
              Use it to classify your app, choose the official HubSpot source to open next, and prepare a developer handoff without claiming official status, certification, endorsement, or guaranteed migration results.
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

      <section className="mx-auto max-w-6xl px-4 py-10">
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.12em] text-primary">Choose your path</p>
            <h2 className="mt-2 text-2xl font-semibold text-ink">Start With The Question You Actually Have</h2>
          </div>
          <Link href="/answers" className="text-sm font-semibold text-primary hover:text-ink">
            Open Answer Hub
          </Link>
        </div>
        <div className="mt-6 grid gap-4 lg:grid-cols-3">
          {intentPaths.map(({ title, body, href, Icon }) => (
            <Link key={href} href={href} className="group rounded-md border border-line bg-white p-5 shadow-sm transition hover:border-primary hover:shadow-soft">
              <Icon className="text-primary" size={22} aria-hidden="true" />
              <h3 className="mt-4 text-lg font-semibold text-ink">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-muted">{body}</p>
              <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary">
                Open path
                <ArrowRight size={15} aria-hidden="true" className="transition group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
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
                Each page targets a concrete search intent and links back to official HubSpot documentation. Start with the closest match, then follow the related guides.
              </p>
            </div>
            <Link href="/answers" className="text-sm font-semibold text-primary hover:text-ink">
              Open Answers
            </Link>
            <Link href="/glossary" className="text-sm font-semibold text-primary hover:text-ink">
              Open Glossary
            </Link>
          </div>
          <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {featured.map((page) => (
              <GuideCard key={page.slug} page={page} />
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-10">
        <div className="rounded-md border border-line bg-white p-6 shadow-sm">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.12em] text-primary">All SEO guides</p>
              <h2 className="mt-2 text-2xl font-semibold text-ink">Browse By Task</h2>
            </div>
            <p className="max-w-xl text-sm leading-6 text-muted">
              Built for long-tail searches around HubSpot Projects CLI, app creation, migration planning, private app limits, Marketplace readiness, and CRM card modernization.
            </p>
          </div>
          <div className="mt-6 grid gap-3 md:grid-cols-2">
            {allGuides.map((page) => (
              <Link key={page.slug} href={`/${page.slug}`} className="flex items-start justify-between gap-4 rounded-md border border-line px-4 py-3 hover:border-primary">
                <span>
                  <span className="block text-sm font-semibold text-ink">{page.title}</span>
                  <span className="mt-1 block text-xs leading-5 text-muted">{page.intent}</span>
                </span>
                <ArrowRight className="mt-1 shrink-0 text-primary" size={15} aria-hidden="true" />
              </Link>
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
