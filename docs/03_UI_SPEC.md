# UI Spec

Last updated: 2026-05-24

## Brand Direction

Working brand: **Projects App Guide**.

The site should feel like a developer operations guide: calm, structured, precise, and practical. It should not imitate HubSpot's brand, use HubSpot logos, or imply official status.

## Visual Assets

Use generated raster assets for:

- hero background / product visual;
- Gumroad cover image;
- skill pack preview image.

Image prompts must avoid logos, official UI screenshots, official brand marks, and readable trademark text.

## Page Structure

### Homepage

- Hero: product name, deadline clarity, primary CTA to checklist/skill pack.
- Decision panel: five app situations.
- Timeline: May 26, June 23, August 1, October 31.
- Product bundle overview.
- Source trust strip.
- Featured guides.

### Guide Page

- Title and last checked date.
- Unofficial disclaimer.
- "What changed / what to do next" summary.
- Checklist or decision table.
- Source links.
- Related pages.
- Product CTA.

### Skill Pack Page

- Explain how to use the skill with an agent.
- Show included files.
- Show three example prompts.
- CTA to Gumroad bundle.

### Gumroad Page

- Product cards for PDF, bundle, and agency license.
- What's included.
- Refund and accuracy note.
- Placeholder state until Gumroad URLs are supplied.

## Design Tokens

- Background: near-white `#f8faf8`.
- Text: charcoal `#17201b`.
- Muted text: `#5f6f66`.
- Primary: deep green `#176b4d`.
- Accent: amber `#c77700`.
- Border: `#d8e0da`.
- Code surface: `#111816`.
- Warning surface: `#fff7e6`.
- Info surface: `#eaf6f1`.

The palette should not be dominated by purple, beige, dark slate, or orange. Green is used as an action color, not a full monochrome theme.

## Typography

- Use system sans stack.
- Headings are compact and readable.
- Code uses monospace with stable wrapping.
- Do not scale type with viewport width.

## Components

- `Header`
- `Footer`
- `Disclaimer`
- `DeadlineTable`
- `DecisionWizard`
- `SourceLinks`
- `ProductCTA`
- `GuideCard`
- `ChecklistBlock`
- `CommandTable`
- `GumroadProductCard`

## UX Guardrails

- No popup CTAs.
- No official-looking certification badges.
- Limit each page to one primary paid CTA and one secondary source/checklist action.
- Put limitations before result/CTA points.
- Keep cards for repeated items only; avoid nested card layouts.
- Buttons should use icons from `lucide-react` where helpful.

