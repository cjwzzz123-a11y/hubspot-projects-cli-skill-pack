import type { Metadata } from "next";
import Image from "next/image";
import { CheckCircle2, FileText, PackageCheck, Users, type LucideIcon } from "lucide-react";
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

const tiers: Array<{ name: string; price: string; body: string; Icon: LucideIcon }> = [
  { name: "PDF only", price: "$9", body: "Command cheatsheet PDF for quick individual review.", Icon: FileText },
  { name: "Full bundle", price: "$19", body: "PDF, checklist, CSV tracker, handoff template, and source links.", Icon: PackageCheck },
  { name: "Agency/team", price: "$49", body: "Full bundle with internal sharing permission for client teams.", Icon: Users },
];

const files = [
  "projects-cli-command-cheatsheet.pdf",
  "projects-cli-preflight-checklist.md",
  "hubspot-app-inventory-tracker.csv",
  "hubspot-developer-handoff-checklist.md",
  "source-verification-links.md",
];

export default function GumroadPage() {
  const liveBundle = siteConfig.gumroad.bundle;

  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      <section className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_360px]">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.12em] text-primary">Product draft</p>
          <h1 className="mt-3 text-4xl font-semibold leading-tight text-ink md:text-5xl">Projects CLI App Creation Kit</h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-muted">
            A compact, unofficial checklist bundle for HubSpot developers and agencies moving new public app creation to Projects-based CLI workflows during the 2026 legacy public app creation sunset.
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
            {liveBundle ? "A Gumroad bundle URL is configured." : "Gumroad is not published yet. This page uses placeholder product copy until a live URL is approved."}
          </p>
          <a
            href={liveBundle || "mailto:hello@example.com?subject=Projects%20CLI%20App%20Creation%20Kit"}
            className="mt-5 inline-flex w-full items-center justify-center rounded-md bg-primary px-4 py-3 text-sm font-semibold text-white hover:bg-ink"
          >
            {liveBundle ? "Open Gumroad" : "Request the draft bundle"}
          </a>
          <p className="mt-3 text-xs leading-5 text-muted">No payment is collected by this placeholder page.</p>
        </section>
      </section>

      <section className="mt-10 grid gap-4 md:grid-cols-3">
        {tiers.map(({ name, price, body, Icon }) => (
          <div key={name} className="rounded-md border border-line bg-white p-5 shadow-sm">
            <Icon className="text-primary" size={22} aria-hidden="true" />
            <h2 className="mt-4 text-lg font-semibold text-ink">{name}</h2>
            <p className="mt-1 text-2xl font-semibold text-ink">{price}</p>
            <p className="mt-3 text-sm leading-6 text-muted">{body}</p>
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
        </div>
        <SourceLinks sources={[officialSources.sunset, officialSources.createApp, officialSources.projectCommands, officialSources.marketplace]} />
      </section>
    </main>
  );
}
