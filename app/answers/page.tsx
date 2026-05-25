import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, MessageCircleQuestion } from "lucide-react";
import { Disclaimer } from "@/components/disclaimer";
import { guidePages } from "@/data/guides";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "HubSpot Projects CLI Answer Hub",
  description:
    "Direct answers, source boundaries, and official source links for HubSpot Projects CLI app creation and migration planning questions.",
  alternates: {
    canonical: "/answers",
  },
};

const answerPages = guidePages.filter((page) => page.answerSnapshot);
const faqItems = answerPages.map((page) => ({
  question: page.title,
  answer: page.answerSnapshot?.shortAnswer || page.summary,
  url: `${siteConfig.url}/${page.slug}`,
}));
const naturalLanguageQuestions = answerPages.flatMap((page) =>
  (page.faqs || []).map((faq) => ({
    question: faq.question,
    answer: faq.answer,
    sourceTitle: page.title,
    sourceSlug: page.slug,
  })),
);

export default function AnswersPage() {
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: siteConfig.name,
        item: siteConfig.url,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Answer Hub",
        item: `${siteConfig.url}/answers`,
      },
    ],
  };
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
        url: item.url,
      },
    })),
  };
  const itemListJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "HubSpot Projects CLI direct answers",
    itemListElement: answerPages.map((page, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: page.title,
      url: `${siteConfig.url}/${page.slug}`,
    })),
  };

  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }} />

      <section className="rounded-md border border-line bg-white p-7 shadow-sm">
        <div className="flex flex-col gap-5 md:flex-row md:items-start">
          <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md bg-[#eaf6f1] text-primary">
            <MessageCircleQuestion size={24} aria-hidden="true" />
          </span>
          <div className="min-w-0">
            <p className="text-sm font-semibold uppercase tracking-[0.12em] text-primary">Answer index</p>
            <h1 className="mt-2 text-3xl font-semibold leading-tight text-ink md:text-5xl">HubSpot Projects CLI Answer Hub</h1>
            <p className="mt-4 max-w-3xl text-lg leading-8 text-muted">
              Direct, source-linked answers for HubSpot Projects CLI app creation, migration planning, Marketplace readiness, and CRM card modernization questions.
            </p>
            <p className="mt-4 max-w-3xl text-sm leading-6 text-muted">
              Each answer links to a full guide with an Answer Snapshot, Claim / Source Map, official HubSpot source links, and a compliance boundary.
            </p>
            <div className="mt-6">
              <Disclaimer />
            </div>
          </div>
        </div>
      </section>

      <section className="mt-8 rounded-md border border-line bg-white p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-ink">Machine-Readable Access</h2>
        <p className="mt-3 text-sm leading-6 text-muted">
          A JSON version of this answer index is available for crawlers, QA checks, and AI assistant workflows.
        </p>
        <Link href="/answers.json" className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-ink">
          Open answers.json
          <ArrowRight size={15} aria-hidden="true" />
        </Link>
      </section>

      <section className="mt-8 rounded-md border border-line bg-white p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-ink">Natural-Language Questions Covered</h2>
        <p className="mt-3 text-sm leading-6 text-muted">
          These are the question forms this site is designed to answer. Each answer points back to a fuller guide with official source links and a claim boundary.
        </p>
        <div className="mt-5 grid gap-3 md:grid-cols-2">
          {naturalLanguageQuestions.slice(0, 24).map((item) => (
            <Link key={`${item.sourceSlug}-${item.question}`} href={`/${item.sourceSlug}#faq`} className="rounded-md border border-line px-4 py-3 hover:border-primary">
              <span className="block text-sm font-semibold text-ink">{item.question}</span>
              <span className="mt-1 block text-xs leading-5 text-muted">{item.sourceTitle}</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="mt-8 grid gap-5">
        {answerPages.map((page) => (
          <article key={page.slug} className="rounded-md border border-line bg-white p-6 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-primary">{page.intent}</p>
            <h2 className="mt-2 text-2xl font-semibold text-ink">{page.title}</h2>
            <p className="mt-4 text-base leading-7 text-ink">{page.answerSnapshot?.shortAnswer}</p>
            <dl className="mt-5 grid gap-4 md:grid-cols-3">
              <div>
                <dt className="text-xs font-semibold uppercase tracking-[0.12em] text-primary">Applies To</dt>
                <dd className="mt-1 text-sm leading-6 text-muted">{page.answerSnapshot?.appliesTo}</dd>
              </div>
              <div>
                <dt className="text-xs font-semibold uppercase tracking-[0.12em] text-primary">Verify</dt>
                <dd className="mt-1 text-sm leading-6 text-muted">{page.answerSnapshot?.verify}</dd>
              </div>
              <div>
                <dt className="text-xs font-semibold uppercase tracking-[0.12em] text-primary">Boundary</dt>
                <dd className="mt-1 text-sm leading-6 text-muted">{page.answerSnapshot?.boundary}</dd>
              </div>
            </dl>
            <div className="mt-5 flex flex-wrap gap-3">
              <Link href={`/${page.slug}`} className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-semibold text-white hover:bg-ink">
                Read full guide
                <ArrowRight size={15} aria-hidden="true" />
              </Link>
              {page.sources.slice(0, 2).map((source) => (
                <a key={source.url} href={source.url} target="_blank" rel="noreferrer" className="inline-flex items-center rounded-md border border-line px-4 py-2 text-sm font-semibold text-ink hover:border-primary">
                  {source.label}
                </a>
              ))}
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
