import { AlertTriangle } from "lucide-react";
import { siteConfig } from "@/data/site";

export function Disclaimer() {
  return (
    <div className="flex gap-3 rounded-md border border-amber/40 bg-[#fff7e6] p-4 text-sm text-ink">
      <AlertTriangle className="mt-0.5 shrink-0 text-amber" size={18} aria-hidden="true" />
      <p>{siteConfig.disclaimer}</p>
    </div>
  );
}

