# Monetization and CTA Spec

Last updated: 2026-05-24

## Product Stack

### PDF Only

Name: Projects CLI Command Cheatsheet

Price draft: $1.90

Includes:

- 2-page command map.
- affected/not affected table.
- preflight checklist.
- source verification links.
- Markdown source and PDF export.

### Full Bundle

Name: Projects CLI Skill Pack for HubSpot Developers

Price draft: $3.90

Includes:

- PDF cheatsheet.
- Markdown/Notion checklist.
- CSV app inventory tracker.
- developer handoff template.
- agent skill folder.
- official source map.
- buyer delivery index.
- installation instructions.

### Agency License

Name: Projects CLI Agency Handoff Kit

Price draft: $5.90

Includes:

- full bundle;
- agency usage language;
- client handoff checklist;
- internal QA checklist.
- permission language for repeated internal client delivery workflows.

## CTA Copy

- Download the 2-page checklist.
- Get the command decision tree.
- Use the agent-ready skill pack.
- Prepare your Projects CLI handoff.
- Avoid choosing the wrong migration path.

## CTA Placement

- Homepage hero: full bundle.
- Deadline page: after affected/not affected table.
- Checklist page: above fold and at end.
- Command decision page: after command table.
- Private app page: after limitation summary.
- Marketplace page: after listing checklist.
- FAQ: after first five questions.

## Gumroad URL Behavior

Before Gumroad URLs are supplied, CTAs should point to `/gumroad`. Product cards should show that checkout URLs are not configured. Do not pretend the product is live and do not invent checkout URLs.

After Gumroad URLs are supplied, wire them through:

```text
NEXT_PUBLIC_GUMROAD_PDF_URL=
NEXT_PUBLIC_GUMROAD_BUNDLE_URL=
NEXT_PUBLIC_GUMROAD_AGENCY_URL=
```

## Accuracy Note

Independent educational checklist. Not affiliated with, endorsed by, or sponsored by HubSpot. Verify critical commands and platform behavior against official HubSpot documentation before deploying.
