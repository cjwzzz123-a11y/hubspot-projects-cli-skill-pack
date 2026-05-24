import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { GuidePage } from "@/data/guides";

export function GuideCard({ page }: { page: GuidePage }) {
  return (
    <Link href={`/${page.slug}`} className="group rounded-md border border-line bg-white p-5 shadow-sm transition hover:border-primary hover:shadow-soft">
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-primary">{page.intent}</p>
      <h3 className="mt-3 text-lg font-semibold text-ink">{page.title}</h3>
      <p className="mt-2 text-sm leading-6 text-muted">{page.description}</p>
      <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary">
        Open guide
        <ArrowRight size={15} aria-hidden="true" className="transition group-hover:translate-x-1" />
      </span>
    </Link>
  );
}

