import Link from "next/link";
import { siteConfig } from "@/data/site";

export function Footer() {
  return (
    <footer className="border-t border-line bg-white">
      <div className="mx-auto grid max-w-6xl gap-6 px-4 py-8 text-sm text-muted md:grid-cols-[1.3fr_1fr]">
        <div>
          <p className="font-semibold text-ink">{siteConfig.name}</p>
          <p className="mt-2 max-w-2xl">{siteConfig.disclaimer}</p>
        </div>
        <nav className="flex flex-wrap gap-4 md:justify-end">
          <Link href="/updates">Updates</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/privacy">Privacy</Link>
          <Link href="/terms">Terms</Link>
        </nav>
      </div>
    </footer>
  );
}

