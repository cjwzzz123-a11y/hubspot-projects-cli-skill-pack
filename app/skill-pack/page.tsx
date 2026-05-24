import type { Metadata } from "next";
import { Bot, CheckCircle2 } from "lucide-react";
import { ProductCTA } from "@/components/product-cta";
import { SourceLinks } from "@/components/source-links";
import { officialSources } from "@/data/site";

export const metadata: Metadata = {
  title: "Agent Skill Pack",
  description: "Agent-ready workflow for HubSpot Projects CLI app creation and migration planning.",
  alternates: {
    canonical: "/skill-pack",
  },
};

const steps = [
  "Classify the app as new public, existing legacy public, existing project app, private app, or CRM card modernization.",
  "Open current official HubSpot docs before giving production-affecting commands.",
  "Generate a preflight report with app type, files found, OAuth notes, CI notes, source links, and unresolved risks.",
  "Preserve the May/June scope boundary and do not claim existing legacy apps stop working under this sunset.",
];

export default function SkillPackPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      <section className="rounded-md border border-line bg-white p-7 shadow-sm">
        <div className="flex gap-4">
          <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md bg-[#eaf6f1] text-primary">
            <Bot size={24} aria-hidden="true" />
          </span>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.12em] text-primary">Agent workflow</p>
            <h1 className="mt-2 text-3xl font-semibold leading-tight text-ink md:text-5xl">Projects CLI Skill Pack</h1>
            <p className="mt-4 max-w-3xl text-lg leading-8 text-muted">
              A source-linked workflow for coding agents that need to classify HubSpot app situations, produce developer handoffs, and avoid unsupported migration claims.
            </p>
          </div>
        </div>
      </section>

      <section className="mt-8 grid gap-6 lg:grid-cols-[1fr_0.85fr]">
        <div className="rounded-md border border-line bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-ink">Workflow Rules</h2>
          <ul className="mt-5 grid gap-4">
            {steps.map((step) => (
              <li key={step} className="flex gap-3 text-sm leading-6 text-muted">
                <CheckCircle2 className="mt-1 shrink-0 text-primary" size={16} aria-hidden="true" />
                <span>{step}</span>
              </li>
            ))}
          </ul>
        </div>
        <SourceLinks sources={[officialSources.sunset, officialSources.migrationOverview, officialSources.projectCommands]} />
      </section>

      <div className="mt-8">
        <ProductCTA variant="skill" placement="skill-pack-page" />
      </div>
    </main>
  );
}
