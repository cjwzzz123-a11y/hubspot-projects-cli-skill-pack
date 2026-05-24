import { ExternalLink } from "lucide-react";

type Props = {
  sources: Array<{ label: string; url: string }>;
};

export function SourceLinks({ sources }: Props) {
  return (
    <section className="rounded-md border border-line bg-white p-5">
      <h2 className="text-lg font-semibold text-ink">Official Sources</h2>
      <div className="mt-4 grid gap-3">
        {sources.map((source) => (
          <a key={source.url} href={source.url} target="_blank" rel="noreferrer" className="flex items-start justify-between gap-3 rounded-md border border-line px-3 py-3 text-sm text-ink hover:border-primary">
            <span>{source.label}</span>
            <ExternalLink className="mt-0.5 shrink-0 text-muted" size={15} aria-hidden="true" />
          </a>
        ))}
      </div>
    </section>
  );
}

