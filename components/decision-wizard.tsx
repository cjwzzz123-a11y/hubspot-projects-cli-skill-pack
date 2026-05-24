"use client";

import { useMemo, useState } from "react";
import { CheckCircle2 } from "lucide-react";

const options = [
  {
    id: "new-public",
    label: "New public / Marketplace app",
    result: "Review the Projects-based app creation path and verify `hs project create` in the official create-app and project commands docs.",
  },
  {
    id: "legacy-public",
    label: "Existing non-project legacy public app",
    result: "Review public app migration docs and the `hs app migrate` path before running commands.",
  },
  {
    id: "project-app",
    label: "Existing project-based app",
    result: "Inspect `hsproject.json`, record `platformVersion`, then verify 2026.03 migration guidance and `hs project migrate` where applicable.",
  },
  {
    id: "private-app",
    label: "Existing private app",
    result: "Do not assume automatic migration. Review private app migration docs and current latest-platform limitations.",
  },
  {
    id: "crm-cards",
    label: "Legacy CRM cards involved",
    result: "Treat this as a separate app-card modernization track tied to the October 31, 2026 CRM cards deadline.",
  },
];

export function DecisionWizard() {
  const [selected, setSelected] = useState(options[0].id);
  const active = useMemo(() => options.find((option) => option.id === selected) || options[0], [selected]);

  return (
    <section className="rounded-md border border-line bg-white p-5 shadow-sm">
      <div className="flex items-start gap-3">
        <CheckCircle2 className="mt-1 text-primary" size={20} aria-hidden="true" />
        <div>
          <h2 className="text-lg font-semibold text-ink">Quick Path Finder</h2>
          <p className="mt-1 text-sm text-muted">Pick the closest situation. The result is a path to verify, not a guaranteed command.</p>
        </div>
      </div>
      <div className="mt-5 grid gap-2 sm:grid-cols-2">
        {options.map((option) => (
          <button
            key={option.id}
            type="button"
            onClick={() => setSelected(option.id)}
            className={`rounded-md border px-3 py-3 text-left text-sm transition ${
              selected === option.id ? "border-primary bg-[#eaf6f1] text-ink" : "border-line bg-white text-muted hover:border-primary"
            }`}
          >
            {option.label}
          </button>
        ))}
      </div>
      <div className="mt-5 rounded-md bg-[#f8faf8] p-4 text-sm leading-6 text-ink">{active.result}</div>
    </section>
  );
}

