const key = "51c26ad359a5cf315a4b9f5aa2bd50ac";
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://projectsappguide.com";
const host = new URL(siteUrl).host;

const sitemapResponse = await fetch(`${siteUrl}/sitemap.xml`);
if (!sitemapResponse.ok) {
  throw new Error(`Could not fetch sitemap: ${sitemapResponse.status} ${sitemapResponse.statusText}`);
}

const sitemap = await sitemapResponse.text();
const urls = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map((match) => match[1]);

const response = await fetch("https://api.indexnow.org/indexnow", {
  method: "POST",
  headers: {
    "content-type": "application/json; charset=utf-8",
  },
  body: JSON.stringify({
    host,
    key,
    keyLocation: `${siteUrl}/${key}.txt`,
    urlList: urls,
  }),
});

const text = await response.text();
console.log(JSON.stringify({ status: response.status, statusText: response.statusText, submitted: urls.length, body: text }, null, 2));

if (!response.ok && response.status !== 202) {
  process.exitCode = 1;
}
