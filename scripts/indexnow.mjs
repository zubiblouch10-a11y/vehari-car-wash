// Tells IndexNow-enabled search engines (Bing, Yandex, Seznam, Naver, Yep…) about every URL in the sitemap.
// Google does NOT use IndexNow — for Google, submit the sitemap in Search Console (see README).
//
// Run AFTER the site is live on its real domain:   npm run indexnow
// The key file public/<key>.txt must be reachable at https://<host>/<key>.txt (it ships with the site).

import { readdirSync } from "node:fs";

const HOST = "www.veharicarwashanddetailingservices.com";
const SITE = `https://${HOST}`;

const keyFile = readdirSync("public").find((f) => /^[a-f0-9]{32}\.txt$/.test(f));
if (!keyFile) {
  console.error("No IndexNow key file found in public/ (expected <32 hex chars>.txt).");
  process.exit(1);
}
const key = keyFile.replace(".txt", "");

// 1. The key file must be live, otherwise engines reject the submission.
const keyRes = await fetch(`${SITE}/${keyFile}`);
if (!keyRes.ok || (await keyRes.text()).trim() !== key) {
  console.error(`Key file not reachable at ${SITE}/${keyFile} yet — deploy and connect the domain first.`);
  process.exit(1);
}

// 2. Collect URLs from the live sitemap.
const xml = await (await fetch(`${SITE}/sitemap.xml`)).text();
const urlList = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
if (urlList.length === 0) {
  console.error("Sitemap contains no URLs.");
  process.exit(1);
}

// 3. Submit.
const res = await fetch("https://api.indexnow.org/indexnow", {
  method: "POST",
  headers: { "Content-Type": "application/json; charset=utf-8" },
  body: JSON.stringify({ host: HOST, key, keyLocation: `${SITE}/${keyFile}`, urlList }),
});

console.log(`Submitted ${urlList.length} URLs -> HTTP ${res.status} ${res.status === 200 || res.status === 202 ? "(accepted)" : ""}`);
if (res.status >= 400) console.log(await res.text());
