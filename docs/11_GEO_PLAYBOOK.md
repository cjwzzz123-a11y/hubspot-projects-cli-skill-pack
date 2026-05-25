# GEO Playbook

Last updated: 2026-05-25

This project treats GEO as answer-readiness for search engines, AI search, and assistant workflows. The goal is not to create thin pages for bots. The goal is to make each useful answer clear, source-linked, crawlable, and safe to quote.

## Official SEO Principles Used

- Google's guidance favors helpful, reliable, people-first content over content created only to manipulate rankings.
- Google recommends clear sourcing, trustworthy presentation, and pages that help readers complete their goal.
- Structured data should match visible page content and help search systems understand the page.
- IndexNow can be used to notify participating search engines after important URL changes.

References:

- Google Search Central: Creating helpful, reliable, people-first content
- Google Search Central: Intro to structured data
- IndexNow documentation

## Current GEO Assets

- `/llms.txt`: plain-text site map for AI assistants.
- `/answers`: human-readable direct answer hub.
- `/answers.json`: machine-readable answer, claim, source, FAQ, and natural-language question index.
- `/glossary`: source-linked term definitions with `DefinedTermSet` structured data.
- `/sources`: official HubSpot source index with source-use FAQ.
- Guide pages: Answer Snapshot, Citation Summary, Claim / Source Map, FAQ, related guides, source links, and disclaimers.
- Checklist page: `HowTo` and `ItemList` JSON-LD.
- Gumroad page: `Product`, `Offer`, and checkout link to the configured Gumroad URL.

## Page Pattern

Every important guide page should include:

1. One clear answer above the fold.
2. A narrow applicability statement.
3. A verification statement pointing to official HubSpot docs.
4. A boundary statement that prevents unsupported claims.
5. A Claim / Source Map with official source links.
6. FAQ entries written in natural user language.
7. Related internal links to the next likely task.
8. A visible unofficial / independent disclaimer.

## Compliance Guardrails

- Do not claim official, certified, endorsed, sponsored, or guaranteed status.
- Do not claim existing legacy public apps stop working on May 26 or June 23, 2026 under the legacy public app creation sunset.
- Use the correct wording: those dates affect new legacy public app creation through the legacy Developer Platform UI.
- Treat Gumroad assets as educational planning files, not migration automation or Marketplace approval guarantees.
- Re-open current HubSpot official docs before production-affecting commands, uploads, submissions, or client delivery.

## Next Iteration Ideas

- Add a source-change log when HubSpot official docs are rechecked.
- Add a lightweight internal site search or filter for guide questions.
- Add examples of safe client-facing wording for each guide intent.
- Add a JSON feed for source references if external tools need a smaller file than `answers.json`.
- Review Search Console queries after indexing and add only pages that answer real repeated questions.
