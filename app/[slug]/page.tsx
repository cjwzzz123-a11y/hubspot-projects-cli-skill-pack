import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
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
      openGraph: {
        title: page.title,
        description: page.description,
        url: `/${page.slug}`,
        type: "article",
      },
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

  const currentIndex = guidePages.findIndex((item) => item.slug === page.slug);
  const previousPage = currentIndex > 0 ? guidePages[currentIndex - 1] : null;
  const nextPage = currentIndex >= 0 && currentIndex < guidePages.length - 1 ? guidePages[currentIndex + 1] : null;
  const pageUrl = `${siteConfig.url}/${page.slug}`;
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: page.title,
    description: page.description,
    dateModified: page.lastChecked,
    mainEntityOfPage: pageUrl,
    isAccessibleForFree: true,
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
  };
  const faqJsonLd = page.faqs?.length
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: page.faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      }
    : null;

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      {faqJsonLd ? <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} /> : null}
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

          <nav aria-label="On this page" className="mt-8 rounded-md border border-line bg-white p-5 shadow-sm">
            <h2 className="text-base font-semibold text-ink">On This Page</h2>
            <div className="mt-4 grid gap-2 sm:grid-cols-2">
              {page.sections.map((section) => (
                <a key={section.heading} href={`#${section.heading.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "")}`} className="text-sm font-medium text-primary hover:text-ink">
                  {section.heading}
                </a>
              ))}
              {page.checks ? (
                <a href="#checklist" className="text-sm font-medium text-primary hover:text-ink">
                  Checklist
                </a>
              ) : null}
              {page.faqs?.length ? (
                <a href="#faq" className="text-sm font-medium text-primary hover:text-ink">
                  FAQ
                </a>
              ) : null}
            </div>
          </nav>

          <div className="mt-8">
            <Disclaimer />
          </div>

          <div className="mt-8 grid gap-6">
            {page.sections.map((section) => (
              <section key={section.heading} id={section.heading.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "")} className="scroll-mt-24 rounded-md border border-line bg-white p-6 shadow-sm">
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
            <section id="checklist" className="mt-8 scroll-mt-24 rounded-md border border-line bg-white p-6 shadow-sm">
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

          {page.faqs?.length ? (
            <section id="faq" className="mt-8 scroll-mt-24 rounded-md border border-line bg-white p-6 shadow-sm">
              <h2 className="text-xl font-semibold text-ink">FAQ</h2>
              <div className="mt-5 grid gap-5">
                {page.faqs.map((faq) => (
                  <div key={faq.question} className="border-t border-line pt-5 first:border-t-0 first:pt-0">
                    <h3 className="font-semibold text-ink">{faq.question}</h3>
                    <p className="mt-2 text-sm leading-6 text-muted">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </section>
          ) : null}

          <div className="mt-8">
            <ProductCTA variant={page.cta} placement={`guide:${page.slug}`} />
          </div>

          <nav aria-label="Guide sequence" className="mt-8 grid gap-4 sm:grid-cols-2">
            {previousPage ? (
              <Link href={`/${previousPage.slug}`} className="rounded-md border border-line bg-white p-4 text-sm hover:border-primary">
                <span className="inline-flex items-center gap-2 font-semibold text-primary">
                  <ArrowLeft size={15} aria-hidden="true" />
                  Previous
                </span>
                <span className="mt-2 block font-medium text-ink">{previousPage.title}</span>
              </Link>
            ) : (
              <div />
            )}
            {nextPage ? (
              <Link href={`/${nextPage.slug}`} className="rounded-md border border-line bg-white p-4 text-right text-sm hover:border-primary">
                <span className="inline-flex items-center gap-2 font-semibold text-primary">
                  Next
                  <ArrowRight size={15} aria-hidden="true" />
                </span>
                <span className="mt-2 block font-medium text-ink">{nextPage.title}</span>
              </Link>
            ) : null}
          </nav>
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
