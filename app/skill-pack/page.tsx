import type { Metadata } from "next";
import { Bot, CheckCircle2, ClipboardList, FileCode2, FolderOpen, MessageSquareText } from "lucide-react";
import { Disclaimer } from "@/components/disclaimer";
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

const includedFiles = [
  "skill/SKILL.md",
  "skill/references/source-map.json",
  "skill/references/decision-tree.md",
  "skill/references/preflight-checklist.md",
  "skill/references/developer-handoff-template.md",
];

const prompts = [
  "Use the hubspot-projects-cli-migration skill to classify this app and return the likely path to verify. Here is the file tree and app context...",
  "Create a developer handoff for a new Marketplace app using Projects CLI. Include official sources to re-open before production upload.",
  "Review this existing private app context. Do not assume automatic migration; identify manual planning risks and open questions.",
];

export default function SkillPackPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      <section className="rounded-md border border-line bg-white p-7 shadow-sm">
        <div className="flex flex-col gap-5 md:flex-row md:items-start">
          <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md bg-[#eaf6f1] text-primary">
            <Bot size={24} aria-hidden="true" />
          </span>
          <div className="min-w-0">
            <p className="text-sm font-semibold uppercase tracking-[0.12em] text-primary">Agent workflow</p>
            <h1 className="mt-2 text-3xl font-semibold leading-tight text-ink md:text-5xl">Projects CLI Skill Pack</h1>
            <p className="mt-4 max-w-3xl text-lg leading-8 text-muted">
              A source-linked workflow for coding agents that need to classify HubSpot app situations, produce developer handoffs, and avoid unsupported migration claims.
            </p>
            <div className="mt-6">
              <Disclaimer />
            </div>
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

      <section className="mt-8 grid gap-6 lg:grid-cols-3">
        <div className="rounded-md border border-line bg-white p-6 shadow-sm">
          <FolderOpen className="text-primary" size={22} aria-hidden="true" />
          <h2 className="mt-4 text-xl font-semibold text-ink">Included Files</h2>
          <ul className="mt-5 grid gap-3">
            {includedFiles.map((file) => (
              <li key={file} className="break-words rounded-md border border-line bg-[#f8faf8] px-3 py-2 font-mono text-xs text-ink">
                {file}
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-md border border-line bg-white p-6 shadow-sm">
          <FileCode2 className="text-primary" size={22} aria-hidden="true" />
          <h2 className="mt-4 text-xl font-semibold text-ink">Install Shape</h2>
          <p className="mt-4 text-sm leading-6 text-muted">
            Copy the `skill/` folder into the skill location supported by your coding agent, preserving `SKILL.md` and the `references/` directory. Then ask the agent to use `hubspot-projects-cli-migration`.
          </p>
          <p className="mt-3 text-sm leading-6 text-muted">
            The skill is designed for planning and handoff. It should re-open official docs before production-affecting recommendations.
          </p>
        </div>
        <div className="rounded-md border border-line bg-white p-6 shadow-sm">
          <ClipboardList className="text-primary" size={22} aria-hidden="true" />
          <h2 className="mt-4 text-xl font-semibold text-ink">Expected Output</h2>
          <p className="mt-4 text-sm leading-6 text-muted">
            Summary, app classification, likely path to verify, preflight checklist, files/config to inspect, Marketplace or CI notes, official sources, and open questions.
          </p>
        </div>
      </section>

      <section className="mt-8 rounded-md border border-line bg-white p-6 shadow-sm">
        <div className="flex items-start gap-3">
          <MessageSquareText className="mt-1 shrink-0 text-primary" size={22} aria-hidden="true" />
          <div>
            <h2 className="text-xl font-semibold text-ink">Example Prompts</h2>
            <div className="mt-5 grid gap-3">
              {prompts.map((prompt) => (
                <p key={prompt} className="rounded-md border border-line bg-[#f8faf8] p-4 text-sm leading-6 text-muted">
                  {prompt}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="mt-8">
        <ProductCTA variant="skill" placement="skill-pack-page" />
      </div>
    </main>
  );
}
