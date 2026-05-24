import Link from "next/link";
import { ArrowRight, Download, PackageCheck, WandSparkles } from "lucide-react";
import { siteConfig } from "@/data/site";

type Props = {
  variant?: "bundle" | "checklist" | "skill";
  placement: string;
};

const copy = {
  bundle: {
    title: "Get the full Projects CLI Skill Pack",
    body: "Includes the agent skill, command cheatsheet, checklist, CSV tracker, handoff template, and official source map.",
    icon: PackageCheck,
  },
  checklist: {
    title: "Download the 2-page checklist",
    body: "Use the affected/not affected table, command map, and preflight checklist before choosing a path.",
    icon: Download,
  },
  skill: {
    title: "Use the agent-ready skill workflow",
    body: "Give your coding agent a source-linked workflow for classifying apps and generating a migration handoff.",
    icon: WandSparkles,
  },
};

export function ProductCTA({ variant = "bundle", placement }: Props) {
  const item = copy[variant];
  const Icon = item.icon;
  const href = variant === "checklist" ? siteConfig.gumroad.pdf : siteConfig.gumroad.bundle;
  const target = href || "/gumroad";

  return (
    <section className="rounded-md border border-line bg-ink p-5 text-white">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex gap-3">
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-white/12">
            <Icon size={20} aria-hidden="true" />
          </span>
          <div>
            <h2 className="text-lg font-semibold">{item.title}</h2>
            <p className="mt-1 text-sm text-white/76">{item.body}</p>
            <p className="mt-2 text-xs text-white/55">Placement: {placement}. Gumroad URLs can be swapped in after publishing.</p>
          </div>
        </div>
        <Link href={target} className="inline-flex shrink-0 items-center justify-center gap-2 rounded-md bg-white px-4 py-2 text-sm font-semibold text-ink hover:bg-[#eaf6f1]">
          View products
          <ArrowRight size={16} aria-hidden="true" />
        </Link>
      </div>
    </section>
  );
}

