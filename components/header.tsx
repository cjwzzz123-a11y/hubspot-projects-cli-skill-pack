import Link from "next/link";
import { BookOpenCheck, ShoppingBag } from "lucide-react";
import { siteConfig } from "@/data/site";

export function Header() {
  return (
    <header className="border-b border-line bg-paper/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <Link href="/" className="flex items-center gap-2 font-semibold text-ink">
          <span className="flex h-9 w-9 items-center justify-center rounded-md bg-primary text-white">
            <BookOpenCheck size={19} aria-hidden="true" />
          </span>
          <span>{siteConfig.name}</span>
        </Link>
        <nav className="hidden items-center gap-6 text-sm text-muted md:flex">
          <Link href="/hubspot-projects-cli-checklist" className="hover:text-ink">
            Checklist
          </Link>
          <Link href="/hs-app-migrate-vs-hs-project-migrate" className="hover:text-ink">
            Commands
          </Link>
          <Link href="/skill-pack" className="hover:text-ink">
            Skill Pack
          </Link>
          <Link href="/answers" className="hover:text-ink">
            Answers
          </Link>
          <Link href="/glossary" className="hover:text-ink">
            Glossary
          </Link>
          <Link href="/gumroad" className="inline-flex items-center gap-2 rounded-md bg-ink px-3 py-2 text-white hover:bg-primary">
            <ShoppingBag size={16} aria-hidden="true" />
            Products
          </Link>
        </nav>
      </div>
    </header>
  );
}
