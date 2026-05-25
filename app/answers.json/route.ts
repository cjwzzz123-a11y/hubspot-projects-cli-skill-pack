import { guidePages } from "@/data/guides";
import { siteConfig } from "@/data/site";

export const dynamic = "force-static";

export function GET() {
  const body = {
    name: `${siteConfig.name} Answer Index`,
    url: `${siteConfig.url}/answers`,
    generatedFrom: `${siteConfig.url}/sitemap.xml`,
    disclaimer: siteConfig.disclaimer,
    keyBoundary:
      "The May 26 and June 23, 2026 dates discussed here affect new legacy public app creation through the legacy Developer Platform UI. They should not be described as existing legacy public app shutdown dates under that specific sunset.",
    pages: guidePages.map((page) => ({
      title: page.title,
      url: `${siteConfig.url}/${page.slug}`,
      intent: page.intent,
      lastSourceCheck: page.lastChecked,
      summary: page.summary,
      answerSnapshot: page.answerSnapshot || null,
      claims: page.claims || [],
      officialSources: page.sources,
      faq: page.faqs || [],
      naturalLanguageQuestions: [
        page.title,
        ...(page.faqs || []).map((faq) => faq.question),
      ],
    })),
  };

  return Response.json(body, {
    headers: {
      "cache-control": "public, max-age=0, must-revalidate",
    },
  });
}
