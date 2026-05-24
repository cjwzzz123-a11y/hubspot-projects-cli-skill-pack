import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Check } from "lucide-react";
import { Disclaimer } from "@/components/disclaimer";
import { ProductCTA } from "@/components/product-cta";
import { SourceLinks } from "@/components/source-links";
import { getGuide, guidePages, trustPages } from "@/data/guides";
import { siteConfig } from "@/data/site";

type Props = {
  params: { slug: string };
};

export function generateStaticParams() {
  return [...guidePages.map((page) => ({ slug: page.slug })), ...trustPages.map((page) => ({ slug: page.slug }))];
}

export function generateMetadata({ params }: Props): Metadata {
  const page = getGuide(params.slug);
  if (page) {
    return {
      title: page.title,
      description: page.description,
      alternates: {
        canonical: `/${page.slug}`,
      },
    };
  }

  const trustPage = trustPages.find((item) => item.slug === params.slug);
  return trustPage
    ? {
        title: trustPage.title,
        description: trustPage.description,
        alternates: {
          canonical: `/${trustPage.slug}`,
        },
      }
    : {};
}

export default function GuidePage({ params }: Props) {
  const page = getGuide(params.slug);
  if (!page) {
    const trustPage = trustPages.find((item) => item.slug === params.slug);
    if (!trustPage) {
      notFound();
    }

    return (
      <main className="mx-auto max-w-3xl px-4 py-12">
        <p className="text-sm font-semibold uppercase tracking-[0.12em] text-primary">Trust</p>
        <h1 className="mt-3 text-4xl font-semibold text-ink">{trustPage.title}</h1>
        <div className="mt-8 grid gap-4 rounded-md border border-line bg-white p-6 shadow-sm">
          {trustPage.body.map((paragraph) => (
            <p key={paragraph} className="leading-7 text-muted">
              {paragraph}
            </p>
          ))}
        </div>
      </main>
    );
  }

  return (
    <main>
      <article className="mx-auto grid max-w-6xl gap-8 px-4 py-10 lg:grid-cols-[minmax(0,1fr)_320px]">
        <div className="min-w-0">
          <Link href="/" className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-ink">
            <ArrowLeft size={15} aria-hidden="true" />
            Back to guide hub
          </Link>
          <p className="mt-6 text-sm font-semibold uppercase tracking-[0.12em] text-primary">{page.intent}</p>
          <h1 className="mt-3 text-3xl font-semibold leading-tight text-ink md:text-5xl">{page.title}</h1>
          <p className="mt-5 text-lg leading-8 text-muted">{page.summary}</p>
          <p className="mt-3 text-sm text-muted">Last source check: {page.lastChecked}</p>

          <div className="mt-8">
            <Disclaimer />
          </div>

          <div className="mt-8 grid gap-6">
            {page.sections.map((section) => (
              <section key={section.heading} className="rounded-md border border-line bg-white p-6 shadow-sm">
                <h2 className="text-xl font-semibold text-ink">{section.heading}</h2>
                <div className="mt-4 grid gap-3">
                  {section.body.map((paragraph) => (
                    <p key={paragraph} className="leading-7 text-muted">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </section>
            ))}
          </div>

          {page.checks ? (
            <section className="mt-8 rounded-md border border-line bg-white p-6 shadow-sm">
              <h2 className="text-xl font-semibold text-ink">Checklist</h2>
              <ul className="mt-4 grid gap-3">
                {page.checks.map((check) => (
                  <li key={check} className="flex gap-3 text-sm leading-6 text-muted">
                    <Check className="mt-1 shrink-0 text-primary" size={16} aria-hidden="true" />
                    <span>{check}</span>
                  </li>
                ))}
              </ul>
            </section>
          ) : null}

          <div className="mt-8">
            <ProductCTA variant={page.cta} placement={`guide:${page.slug}`} />
          </div>
        </div>

        <aside className="grid content-start gap-5">
          <SourceLinks sources={page.sources} />
          <section className="rounded-md border border-line bg-white p-5">
            <h2 className="text-lg font-semibold text-ink">Related Guides</h2>
            <div className="mt-4 grid gap-2">
              {page.related.map((slug) => {
                const related = getGuide(slug);
                return related ? (
                  <Link key={slug} href={`/${slug}`} className="rounded-md border border-line px-3 py-3 text-sm font-medium text-ink hover:border-primary">
                    {related.title}
                  </Link>
                ) : null;
              })}
            </div>
          </section>
          <p className="rounded-md border border-line bg-white p-4 text-xs leading-5 text-muted">{siteConfig.disclaimer}</p>
        </aside>
      </article>
    </main>
  );
}
