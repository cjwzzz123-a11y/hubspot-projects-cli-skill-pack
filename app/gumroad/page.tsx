import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, CheckCircle2, FileText, PackageCheck, Users, type LucideIcon } from "lucide-react";
import { Disclaimer } from "@/components/disclaimer";
import { SourceLinks } from "@/components/source-links";
import { officialSources, siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Projects CLI App Creation Kit",
  description: "Buyer-facing bundle page for the unofficial Projects CLI App Creation Kit.",
  alternates: {
    canonical: "/gumroad",
  },
};

const tiers: Array<{ key: "pdf" | "bundle" | "agency"; name: string; price: string; body: string; bestFor: string; Icon: LucideIcon }> = [
  {
    key: "pdf",
    name: "PDF only",
    price: "$9",
    body: "A concise command map and affected/not affected checklist for an individual developer review.",
    bestFor: "One developer who wants the two-page command cheatsheet.",
    Icon: FileText,
  },
  {
    key: "bundle",
    name: "Full bundle",
    price: "$19",
    body: "PDF, Markdown checklist, CSV tracker, developer handoff, agent skill folder, and source map.",
    bestFor: "Developers or small teams preparing a source-linked Projects CLI handoff.",
    Icon: PackageCheck,
  },
  {
    key: "agency",
    name: "Agency/team",
    price: "$49",
    body: "Full bundle with agency license language for repeated internal client delivery workflows.",
    bestFor: "Agencies and Solutions Partners reviewing multiple client apps.",
    Icon: Users,
  },
];

const files = [
  "projects-cli-command-cheatsheet-2026-05-24.md and PDF export",
  "projects-cli-preflight-checklist.md",
  "hubspot-app-inventory-tracker.csv",
  "hubspot-developer-handoff-checklist.md",
  "buyer-delivery-index.md",
  "agency-license.md",
  "skill/ folder with SKILL.md and references",
];

function getTierUrl(key: "pdf" | "bundle" | "agency") {
  return siteConfig.gumroad[key];
}

function ProductButton({ href }: { href: string }) {
  if (!href) {
    return (
      <span className="mt-5 inline-flex w-full items-center justify-center rounded-md border border-line bg-[#f8faf8] px-4 py-3 text-sm font-semibold text-muted">
        Gumroad URL not configured
      </span>
    );
  }

  return (
    <a href={href} className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-md bg-primary px-4 py-3 text-sm font-semibold text-white hover:bg-ink">
      Open Gumroad
      <ArrowUpRight size={16} aria-hidden="true" />
    </a>
  );
}

export default function GumroadPage() {
  const hasAnyUrl = Boolean(siteConfig.gumroad.pdf || siteConfig.gumroad.bundle || siteConfig.gumroad.agency);

  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      <section className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_360px]">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.12em] text-primary">Product draft</p>
          <h1 className="mt-3 text-4xl font-semibold leading-tight text-ink md:text-5xl">Projects CLI App Creation Kit</h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-muted">
            A compact, unofficial checklist bundle for HubSpot developers and agencies moving new public app creation to Projects-based CLI workflows during the 2026 legacy public app creation sunset.
          </p>
          <p className="mt-4 max-w-3xl text-sm leading-6 text-muted">
            This page is ready for real Gumroad checkout URLs through environment variables. Until those URLs are supplied, no checkout link is invented and no payment is collected here.
          </p>
          <div className="mt-7">
            <Disclaimer />
          </div>
        </div>
        <section className="rounded-md border border-line bg-white p-5 shadow-sm">
          <Image
            src="/assets/generated/projects-cli-skill-pack-hero.png"
            width={1672}
            height={941}
            alt="Abstract product cover for a Projects CLI skill pack"
            className="mb-5 aspect-[16/9] w-full rounded-md border border-line object-cover"
          />
          <h2 className="text-lg font-semibold text-ink">Checkout Status</h2>
          <p className="mt-3 text-sm leading-6 text-muted">
            {hasAnyUrl ? "At least one Gumroad URL is configured. Product buttons below will open only configured URLs." : "Gumroad is not published yet. Add real product URLs with NEXT_PUBLIC_GUMROAD_PDF_URL, NEXT_PUBLIC_GUMROAD_BUNDLE_URL, and NEXT_PUBLIC_GUMROAD_AGENCY_URL after publishing."}
          </p>
          <Link href="/hubspot-projects-cli-checklist" className="mt-5 inline-flex w-full items-center justify-center rounded-md bg-primary px-4 py-3 text-sm font-semibold text-white hover:bg-ink">
            Preview the free checklist
          </Link>
          <p className="mt-3 text-xs leading-5 text-muted">No official affiliation, certification, endorsement, or migration guarantee is implied.</p>
        </section>
      </section>

      <section className="mt-10 grid gap-4 md:grid-cols-3">
        {tiers.map(({ key, name, price, body, bestFor, Icon }) => (
          <div key={name} className="rounded-md border border-line bg-white p-5 shadow-sm">
            <Icon className="text-primary" size={22} aria-hidden="true" />
            <h2 className="mt-4 text-lg font-semibold text-ink">{name}</h2>
            <p className="mt-1 text-2xl font-semibold text-ink">{price}</p>
            <p className="mt-3 text-sm leading-6 text-muted">{body}</p>
            <p className="mt-3 text-xs leading-5 text-muted">Best for: {bestFor}</p>
            <ProductButton href={getTierUrl(key)} />
          </div>
        ))}
      </section>

      <section className="mt-10 grid gap-6 lg:grid-cols-[1fr_0.8fr]">
        <div className="rounded-md border border-line bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-ink">Bundle Files</h2>
          <ul className="mt-5 grid gap-3">
            {files.map((file) => (
              <li key={file} className="flex gap-3 text-sm text-muted">
                <CheckCircle2 className="mt-0.5 shrink-0 text-primary" size={16} aria-hidden="true" />
                <span>{file}</span>
              </li>
            ))}
          </ul>
          <div className="mt-6 rounded-md border border-line bg-[#fff7e6] p-4 text-sm leading-6 text-muted">
            Accuracy note: the local source archive was checked on 2026-05-24. Buyers should re-open official HubSpot documentation before production-affecting commands, uploads, submissions, or client delivery.
          </div>
        </div>
        <SourceLinks sources={[officialSources.sunset, officialSources.createApp, officialSources.projectCommands, officialSources.marketplace]} />
      </section>
    </main>
  );
}
