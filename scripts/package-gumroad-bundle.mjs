import { cp, copyFile, mkdir, rm, writeFile } from "node:fs/promises";
import { existsSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { spawn } from "node:child_process";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const outRoot = join(root, "dist", "gumroad");
const kitDir = join(outRoot, "projects-cli-app-creation-kit");
const pdfPath = join(outRoot, "projects-cli-command-cheatsheet.pdf");
const htmlPath = join(outRoot, "projects-cli-command-cheatsheet.html");
const zipPath = join(outRoot, "projects-cli-app-creation-kit.zip");


function run(command, args, options = {}) {
  return new Promise((resolveRun, reject) => {
    const child = spawn(command, args, {
      cwd: root,
      stdio: "inherit",
      ...options,
    });
    child.on("error", reject);
    child.on("exit", (code, signal) => {
      if (code === 0) {
        resolveRun();
      } else {
        reject(new Error(`${command} exited with code ${code} signal ${signal ?? "none"}`));
      }
    });
  });
}

function esc(value) {
  return String(value).replace(/\\/g, "\\\\").replace(/\(/g, "\\(").replace(/\)/g, "\\)");
}

function wrap(text, maxChars) {
  const words = String(text).split(/\s+/);
  const lines = [];
  let line = "";
  for (const word of words) {
    if (!line) {
      line = word;
    } else if (`${line} ${word}`.length <= maxChars) {
      line += ` ${word}`;
    } else {
      lines.push(line);
      line = word;
    }
  }
  if (line) lines.push(line);
  return lines;
}

function createPdf() {
  const pages = [];
  let commands = [];

  function beginPage() {
    commands = ["0.96 0.98 1 rg 0 0 612 792 re f", "0 0 0 rg"];
  }

  function endPage() {
    pages.push(commands.join("\n"));
  }

  function text(x, y, value, size = 9, font = "F1") {
    commands.push(`BT /${font} ${size} Tf ${x} ${y} Td (${esc(value)}) Tj ET`);
  }

  function paragraph(x, y, value, size = 9, font = "F1", maxWidth = 520, lineHeight = size * 1.28) {
    const maxChars = Math.max(18, Math.floor(maxWidth / (size * 0.52)));
    for (const line of wrap(value, maxChars)) {
      text(x, y, line, size, font);
      y -= lineHeight;
    }
    return y;
  }

  function heading(x, y, value) {
    text(x, y, value, 19, "F2");
    return y - 20;
  }

  function subhead(x, y, value) {
    text(x, y, value, 11, "F2");
    commands.push("0.18 0.36 0.55 RG", `${x} ${y - 5} 520 0 l S`, "0 0 0 rg");
    return y - 16;
  }

  function box(x, y, w, h, fill = "0.93 0.96 0.99") {
    commands.push(`${fill} rg ${x} ${y - h} ${w} ${h} re f`, "0.74 0.80 0.86 RG", `${x} ${y - h} ${w} ${h} re S`, "0 0 0 rg");
  }

  function footer() {
    commands.push("0.74 0.80 0.86 RG 36 34 540 0 l S", "0 0 0 rg");
    paragraph(
      36,
      22,
      "Unofficial guide. Not affiliated with, endorsed by, or sponsored by HubSpot. Last source check: 2026-05-24. Verify critical behavior against official HubSpot docs before deploying.",
      7,
      "F1",
      535,
      8,
    );
  }

  beginPage();
  text(36, 754, "Unofficial HubSpot developer checklist - Last source check: 2026-05-24", 8, "F2");
  let y = heading(36, 732, "Projects CLI Command Map");
  y = paragraph(36, y, "For HubSpot developers preparing for the 2026 legacy public app creation sunset.", 10, "F1", 520, 13) - 4;
  y = subhead(36, y, "What changed");
  y = paragraph(36, y, "HubSpot is disabling creation of new legacy public apps in two waves. The key boundary: this event disables new legacy public app creation. It does not shut down existing legacy public apps under this specific sunset.", 9, "F1", 520, 12) - 4;
  box(36, y, 540, 58);
  text(44, y - 14, "Date", 8, "F2");
  text(118, y - 14, "Who it affects", 8, "F2");
  text(300, y - 14, "What changes", 8, "F2");
  text(430, y - 14, "What does not change", 8, "F2");
  text(44, y - 32, "2026-05-26", 8, "F1");
  paragraph(118, y - 32, "Developer accounts created on or after this date", 7.4, "F1", 170, 9);
  paragraph(300, y - 32, "New legacy public app creation is disabled in the UI", 7.4, "F1", 120, 9);
  paragraph(430, y - 32, "Existing legacy public apps continue functioning", 7.4, "F1", 130, 9);
  text(44, y - 50, "2026-06-23", 8, "F1");
  paragraph(118, y - 50, "Developer accounts created before 2026-05-26", 7.4, "F1", 170, 9);
  paragraph(300, y - 50, "New legacy public app creation is disabled in the UI", 7.4, "F1", 120, 9);
  paragraph(430, y - 50, "Existing legacy public apps continue functioning", 7.4, "F1", 130, 9);
  y -= 72;
  y = subhead(36, y, "Pick the right command family");
  const rows = [
    ["Creating a new public or Marketplace app", "Start a Projects-based app", "hs project create"],
    ["Existing non-project legacy public app", "Review public app migration path and limitations", "hs app migrate / public app migration docs"],
    ["Existing project-based app on older platform version", "Review project migration path", "hs project migrate / project migration docs"],
    ["Existing private app", "Treat as manual planning and review", "Private app migration docs"],
    ["Classic CRM cards involved", "Plan a separate modernization workstream", "App cards / UI extension docs"],
  ];
  for (const [a, b, c] of rows) {
    box(36, y, 540, 31, "1 1 1");
    paragraph(44, y - 10, a, 7.7, "F1", 170, 9);
    paragraph(225, y - 10, b, 7.7, "F1", 195, 9);
    paragraph(430, y - 10, c, 7.7, c.startsWith("hs ") ? "F3" : "F1", 130, 9);
    y -= 31;
  }
  y -= 9;
  y = subhead(36, y, "New public app sequence map");
  box(36, y, 250, 112, "0.97 0.98 1");
  [
    "# Check local CLI and authenticate the correct account",
    "hs --version",
    "hs account auth",
    "",
    "# Create a Projects-based app",
    "hs project create",
    "",
    "# Upload and inspect",
    "hs project upload",
    "hs project open",
    "",
    "# Develop locally after install/test setup",
    "hs project dev",
  ].forEach((line, idx) => text(46, y - 13 - idx * 8, line, 7.4, "F3"));
  text(310, y - 4, "Before running commands", 10, "F2");
  let rightY = y - 18;
  for (const item of [
    "Confirm the current HubSpot CLI requirement in official docs.",
    "Confirm local Node version and CI Node version.",
    "Confirm the target developer account and account ID.",
    "Classify the app: new public, existing public, project app, or private.",
    "Confirm OAuth redirect URLs, scopes, support URL, privacy URL, and Marketplace listing needs.",
  ]) {
    rightY = paragraph(310, rightY, `- ${item}`, 8, "F1", 250, 10);
  }
  footer();
  endPage();

  beginPage();
  text(36, 754, "Projects CLI App Creation Kit", 8, "F2");
  y = heading(36, 732, "Projects CLI Preflight Checklist");
  y = paragraph(36, y, "Use this checklist before committing to a command path or handing work to a client/developer.", 10, "F1", 520, 13) - 4;
  y = subhead(36, y, "15-point preflight");
  const checks = [
    "hs --version checked.",
    "Current HubSpot CLI requirement rechecked in official docs.",
    "Local Node version checked.",
    "CI Node version checked.",
    "CLI authenticated with the correct account.",
    "Target developer account ID recorded.",
    "App classified as new public/Marketplace, existing legacy public, existing project app, or private app.",
    "New public app path uses Projects-based app creation.",
    "Existing non-project public app path reviews hs app migrate.",
    "Existing project app path reviews project migration docs.",
    "Private app path is marked for manual review, not automatic migration.",
    "hsproject.json presence or absence recorded.",
    "app-hsmeta.json location checked.",
    "App UID and feature UIDs recorded.",
    "OAuth redirect URLs and required scopes inventoried.",
    "App listing owner assigned.",
    "Support URL/email ready.",
    "Privacy policy URL ready.",
    "Test install or client handoff plan drafted.",
    "Rollback owner identified before upload/deploy.",
  ];
  let leftY = y;
  rightY = y;
  checks.forEach((item, idx) => {
    const x = idx % 2 === 0 ? 36 : 315;
    const currentY = idx % 2 === 0 ? leftY : rightY;
    const nextY = paragraph(x, currentY, `[ ] ${item}`, 8.2, "F1", 250, 10) - 1;
    if (idx % 2 === 0) leftY = nextY;
    else rightY = nextY;
  });
  y = Math.min(leftY, rightY) - 8;
  y = subhead(36, y, "Quick decision tree");
  box(36, y, 540, 120, "0.97 0.98 1");
  [
    "Creating a new public or Marketplace app?",
    "  -> Review Projects-based app creation and hs project create.",
    "",
    "Existing public app that is not already a project?",
    "  -> Review public app migration docs and hs app migrate limitations.",
    "",
    "Already project-based but on an older platform version?",
    "  -> Review project migration path.",
    "",
    "Existing private app?",
    "  -> Use a manual review checklist. Do not assume automatic CLI migration.",
    "",
    "Classic CRM cards or app UI extensions involved?",
    "  -> Add a separate modernization workstream.",
  ].forEach((line, idx) => text(47, y - 13 - idx * 8, line, 7.6, "F3"));
  y -= 136;
  y = subhead(36, y, "Official sources to recheck before deploy");
  const sources = [
    "Legacy public app creation sunset: https://developers.hubspot.com/changelog/legacy-public-app-creation-sunset",
    "Legacy apps overview: https://developers.hubspot.com/docs/apps/legacy-apps/overview",
    "Create app using CLI: https://developers.hubspot.com/docs/apps/developer-platform/build-apps/create-an-app",
    "Project commands: https://developers.hubspot.com/docs/developer-tooling/local-development/hubspot-cli/project-commands",
    "App migration overview: https://developers.hubspot.com/docs/apps/developer-platform/build-apps/migrate-an-app/overview",
    "Migrate existing public app: https://developers.hubspot.com/docs/apps/developer-platform/build-apps/migrate-an-app/migrate-an-existing-public-app",
    "Migrate existing private app: https://developers.hubspot.com/docs/apps/developer-platform/build-apps/migrate-an-app/migrate-an-existing-private-app",
  ];
  sources.forEach((source) => {
    y = paragraph(36, y, source, 6.6, "F1", 530, 8) - 1;
  });
  footer();
  endPage();

  const objects = [];
  objects.push("<< /Type /Catalog /Pages 2 0 R >>");
  objects.push(`<< /Type /Pages /Kids ${pages.map((_, i) => `${3 + i * 2} 0 R`).join(" ")} /Count ${pages.length} >>`);
  pages.forEach((content, i) => {
    const pageObj = `<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Resources << /Font << /F1 << /Type /Font /Subtype /Type1 /BaseFont /Helvetica >> /F2 << /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold >> /F3 << /Type /Font /Subtype /Type1 /BaseFont /Courier >> >> >> /Contents ${4 + i * 2} 0 R >>`;
    const contentObj = `<< /Length ${Buffer.byteLength(content, "latin1")} >>\nstream\n${content}\nendstream`;
    objects.push(pageObj, contentObj);
  });

  let pdf = "%PDF-1.4\n";
  const offsets = [0];
  objects.forEach((object, index) => {
    offsets.push(Buffer.byteLength(pdf, "latin1"));
    pdf += `${index + 1} 0 obj\n${object}\nendobj\n`;
  });
  const xrefOffset = Buffer.byteLength(pdf, "latin1");
  pdf += `xref\n0 ${objects.length + 1}\n0000000000 65535 f \n`;
  offsets.slice(1).forEach((offset) => {
    pdf += `${String(offset).padStart(10, "0")} 00000 n \n`;
  });
  pdf += `trailer\n<< /Size ${objects.length + 1} /Root 1 0 R >>\nstartxref\n${xrefOffset}\n%%EOF\n`;
  return Buffer.from(pdf, "latin1");
}

const html = `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <title>Projects CLI Command Cheatsheet</title>
  <style>
    @page { size: Letter; margin: 0.38in; }
    * { box-sizing: border-box; }
    body {
      margin: 0;
      color: #17202a;
      background: #ffffff;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
      font-size: 9.4px;
      line-height: 1.28;
    }
    .page {
      min-height: 10.1in;
      position: relative;
      page-break-after: always;
      padding-bottom: 0.32in;
    }
    .page:last-child { page-break-after: auto; }
    h1 {
      margin: 0 0 5px;
      font-size: 22px;
      line-height: 1.05;
      color: #111827;
      letter-spacing: 0;
    }
    h2 {
      margin: 9px 0 5px;
      font-size: 12px;
      color: #0f3d5e;
      letter-spacing: 0;
    }
    p { margin: 4px 0; }
    .eyebrow {
      margin-bottom: 4px;
      color: #496171;
      font-size: 8.6px;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0;
    }
    .subtitle {
      margin-bottom: 7px;
      color: #34495e;
      font-size: 10.2px;
    }
    .callout {
      border-left: 4px solid #2563eb;
      background: #f3f7fb;
      padding: 6px 8px;
      margin: 6px 0;
      font-weight: 700;
    }
    table {
      width: 100%;
      border-collapse: collapse;
      margin: 5px 0 7px;
    }
    th, td {
      border: 1px solid #d6dee6;
      padding: 4px 5px;
      vertical-align: top;
      text-align: left;
    }
    th {
      background: #edf3f8;
      color: #18324a;
      font-size: 8.4px;
    }
    code, pre {
      font-family: "SFMono-Regular", Consolas, "Liberation Mono", monospace;
      font-size: 8.7px;
    }
    code {
      background: #eef2f7;
      border-radius: 3px;
      padding: 0 2px;
    }
    pre {
      margin: 5px 0 7px;
      padding: 7px 8px;
      border: 1px solid #d7dee8;
      border-radius: 5px;
      color: #0f172a;
      background: #f8fafc;
      white-space: pre-wrap;
    }
    ul {
      margin: 4px 0 7px 15px;
      padding: 0;
    }
    li { margin: 2px 0; }
    .two-col {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 10px;
      align-items: start;
    }
    .checklist {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 4px 10px;
      margin: 5px 0;
    }
    .checklist div {
      border-bottom: 1px solid #e8edf3;
      padding: 2px 0;
    }
    .sources {
      columns: 2;
      column-gap: 14px;
      font-size: 7.6px;
      overflow-wrap: anywhere;
    }
    .footer {
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      border-top: 1px solid #d7dee8;
      padding-top: 5px;
      color: #536576;
      font-size: 7.5px;
    }
  </style>
</head>
<body>
  <section class="page">
    <div class="eyebrow">Unofficial HubSpot developer checklist · Last source check: 2026-05-24</div>
    <h1>Projects CLI Command Map</h1>
    <p class="subtitle">For HubSpot developers preparing for the 2026 legacy public app creation sunset.</p>

    <h2>What changed</h2>
    <p>HubSpot is disabling creation of new legacy public apps in two waves.</p>
    <table>
      <thead>
        <tr><th>Date</th><th>Who it affects</th><th>What changes</th><th>What does not change under this sunset</th></tr>
      </thead>
      <tbody>
        <tr><td>2026-05-26</td><td>Developer accounts created on or after this date</td><td>New legacy public app creation is disabled in the Developer Platform UI</td><td>Existing legacy public apps continue functioning</td></tr>
        <tr><td>2026-06-23</td><td>Developer accounts created before 2026-05-26</td><td>New legacy public app creation is disabled in the Developer Platform UI</td><td>Existing legacy public apps continue functioning</td></tr>
      </tbody>
    </table>
    <div class="callout">Core rule: the May 26 / June 23 event disables new legacy public app creation. It does not shut down existing legacy public apps under this specific sunset.</div>

    <h2>Pick the right command family</h2>
    <table>
      <thead>
        <tr><th>Your situation</th><th>First path to review</th><th>Command or doc area</th></tr>
      </thead>
      <tbody>
        <tr><td>Creating a new public or Marketplace app</td><td>Start a Projects-based app</td><td><code>hs project create</code></td></tr>
        <tr><td>Existing non-project legacy public app</td><td>Review public app migration path and limitations</td><td><code>hs app migrate</code> / public app migration docs</td></tr>
        <tr><td>Existing project-based app on an older platform version</td><td>Review project migration path</td><td><code>hs project migrate</code> / project migration docs</td></tr>
        <tr><td>Existing private app</td><td>Treat as manual planning and review</td><td>Private app migration docs</td></tr>
        <tr><td>Classic CRM cards involved</td><td>Plan a separate modernization workstream</td><td>App cards / UI extension docs</td></tr>
      </tbody>
    </table>

    <div class="two-col">
      <div>
        <h2>New public app sequence map</h2>
        <pre># Check local CLI and authenticate the correct account
hs --version
hs account auth

# Create a Projects-based app
hs project create

# Upload and inspect
hs project upload
hs project open

# Develop locally after install/test setup
hs project dev</pre>
      </div>
      <div>
        <h2>Before running commands</h2>
        <ul>
          <li>Confirm the current HubSpot CLI requirement in official docs.</li>
          <li>Confirm local Node version and CI Node version.</li>
          <li>Confirm the target developer account and account ID.</li>
          <li>Classify the app: new public, existing public, project app, or private.</li>
          <li>Confirm OAuth redirect URLs, required scopes, support URL, privacy URL, and Marketplace listing needs.</li>
        </ul>
      </div>
    </div>
    <div class="footer">Unofficial guide. Not affiliated with, endorsed by, or sponsored by HubSpot. Verify official docs before deploying.</div>
  </section>

  <section class="page">
    <div class="eyebrow">Projects CLI App Creation Kit</div>
    <h1>Projects CLI Preflight Checklist</h1>
    <p class="subtitle">Use this before committing to a command path or handing work to a client/developer.</p>

    <h2>15-point preflight</h2>
    <div class="checklist">
      <div>[ ] <code>hs --version</code> checked.</div>
      <div>[ ] Current HubSpot CLI requirement rechecked in official docs.</div>
      <div>[ ] Local Node version checked.</div>
      <div>[ ] CI Node version checked.</div>
      <div>[ ] CLI authenticated with the correct account.</div>
      <div>[ ] Target developer account ID recorded.</div>
      <div>[ ] App classified as new public/Marketplace, existing legacy public, existing project app, or private app.</div>
      <div>[ ] New public app path uses Projects-based app creation.</div>
      <div>[ ] Existing non-project public app path reviews <code>hs app migrate</code>.</div>
      <div>[ ] Existing project app path reviews project migration docs.</div>
      <div>[ ] Private app path is marked for manual review, not automatic migration.</div>
      <div>[ ] <code>hsproject.json</code> presence or absence recorded.</div>
      <div>[ ] <code>app-hsmeta.json</code> location checked.</div>
      <div>[ ] App UID and feature UIDs recorded.</div>
      <div>[ ] OAuth redirect URLs and required scopes inventoried.</div>
      <div>[ ] App listing owner assigned.</div>
      <div>[ ] Support URL/email ready.</div>
      <div>[ ] Privacy policy URL ready.</div>
      <div>[ ] Test install or client handoff plan drafted.</div>
      <div>[ ] Rollback owner identified before upload/deploy.</div>
    </div>

    <h2>Quick decision tree</h2>
    <pre>Creating a new public or Marketplace app?
  -> Review Projects-based app creation and hs project create.

Existing public app that is not already a project?
  -> Review public app migration docs and hs app migrate limitations.

Already project-based but on an older platform version?
  -> Review project migration path.

Existing private app?
  -> Use a manual review checklist. Do not assume automatic CLI migration.

Classic CRM cards or app UI extensions involved?
  -> Add a separate modernization workstream.</pre>

    <h2>Official sources to recheck before deploy</h2>
    <div class="sources">
      <p>Legacy public app creation sunset: https://developers.hubspot.com/changelog/legacy-public-app-creation-sunset</p>
      <p>Legacy apps overview: https://developers.hubspot.com/docs/apps/legacy-apps/overview</p>
      <p>Create a new app using the CLI: https://developers.hubspot.com/docs/apps/developer-platform/build-apps/create-an-app</p>
      <p>Project commands reference: https://developers.hubspot.com/docs/developer-tooling/local-development/hubspot-cli/project-commands</p>
      <p>App migration overview: https://developers.hubspot.com/docs/apps/developer-platform/build-apps/migrate-an-app/overview</p>
      <p>Migrate existing public app: https://developers.hubspot.com/docs/apps/developer-platform/build-apps/migrate-an-app/migrate-an-existing-public-app</p>
      <p>Migrate existing private app: https://developers.hubspot.com/docs/apps/developer-platform/build-apps/migrate-an-app/migrate-an-existing-private-app</p>
    </div>
    <div class="footer">Unofficial guide. Not affiliated with, endorsed by, or sponsored by HubSpot. Last source check: 2026-05-24. Verify critical behavior against official HubSpot docs before deploying.</div>
  </section>
</body>
</html>`;

await rm(outRoot, { recursive: true, force: true });
await mkdir(kitDir, { recursive: true });
await writeFile(htmlPath, html, "utf8");
await writeFile(pdfPath, createPdf());

const buyerFiles = [
  [pdfPath, "projects-cli-command-cheatsheet.pdf"],
  [join(root, "docs/gumroad/projects-cli-command-cheatsheet-2026-05-24.md"), "projects-cli-command-cheatsheet.md"],
  [join(root, "docs/gumroad/projects-cli-preflight-checklist-2026-05-24.md"), "projects-cli-preflight-checklist.md"],
  [join(root, "docs/gumroad/hubspot-app-inventory-tracker-2026-05-24.csv"), "hubspot-app-inventory-tracker.csv"],
  [join(root, "docs/gumroad/hubspot-developer-handoff-checklist-2026-05-24.md"), "hubspot-developer-handoff-checklist.md"],
  [join(root, "docs/gumroad/BUYER_DELIVERY_INDEX.md"), "BUYER_DELIVERY_INDEX.md"],
  [join(root, "docs/gumroad/SKILL_PACK_README.md"), "SKILL_PACK_README.md"],
  [join(root, "docs/gumroad/INSTALLATION_INSTRUCTIONS.md"), "INSTALLATION_INSTRUCTIONS.md"],
  [join(root, "docs/gumroad/AGENCY_LICENSE.md"), "AGENCY_LICENSE.md"],
  [join(root, "docs/08_OFFICIAL_SOURCE_MAP.md"), "source-verification-links.md"],
];

for (const [source, target] of buyerFiles) {
  if (!existsSync(source)) {
    throw new Error(`Missing buyer source file: ${source}`);
  }
  await copyFile(source, join(kitDir, target));
}

await cp(join(root, "skill"), join(kitDir, "skill"), { recursive: true });

await writeFile(
  join(kitDir, "README.md"),
  `# Projects CLI App Creation Kit

Unofficial checklist bundle for HubSpot developers preparing new public app creation workflows for the 2026 legacy public app creation sunset.

## Included

- projects-cli-command-cheatsheet.pdf
- projects-cli-command-cheatsheet.md
- projects-cli-preflight-checklist.md
- hubspot-app-inventory-tracker.csv
- hubspot-developer-handoff-checklist.md
- BUYER_DELIVERY_INDEX.md
- SKILL_PACK_README.md
- INSTALLATION_INSTRUCTIONS.md
- AGENCY_LICENSE.md
- source-verification-links.md

## Scope boundary

The May 26 / June 23 HubSpot event disables new legacy public app creation only. Existing legacy public apps continue functioning under this specific sunset.

Unofficial guide. Not affiliated with, endorsed by, or sponsored by HubSpot. Verify critical behavior against official HubSpot docs before deploying.
`,
  "utf8",
);

await rm(zipPath, { force: true });
await run("zip", ["-r", "-q", zipPath, "projects-cli-app-creation-kit"], { cwd: outRoot });

console.log(`PDF: ${pdfPath}`);
console.log(`ZIP: ${zipPath}`);
