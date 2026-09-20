import type { MetadataRoute } from "next";
import { DOMAIN } from "@/lib/businessData";

// Crawlers follow the MOST SPECIFIC group that matches them and ignore "*" entirely, so every
// named group below repeats the same disallow list instead of relying on the "*" group.
const DISALLOW = ["/admin"];

// Classic search engines — the pages Google/Bing/Apple/DuckDuckGo index and rank.
const SEARCH_BOTS = [
  "Googlebot",
  "Googlebot-Image",
  "Bingbot",
  "Applebot",
  "DuckDuckBot",
];

// AI answer engines. A local service business wants to be cited and recommended, so all of them are allowed:
//   search / citation bots  -> ChatGPT Search, Perplexity, Claude search, Copilot (via Bingbot)
//   user-triggered fetchers -> fetch a page live when someone asks about it
//   training / grounding    -> Gemini, Apple Intelligence, Meta AI, Alexa and the open web corpus
const AI_BOTS = [
  "OAI-SearchBot",
  "ChatGPT-User",
  "GPTBot",
  "PerplexityBot",
  "Perplexity-User",
  "ClaudeBot",
  "Claude-SearchBot",
  "Claude-User",
  "Google-Extended",
  "Applebot-Extended",
  "meta-externalagent",
  "Amazonbot",
  "CCBot",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/", disallow: DISALLOW },
      { userAgent: SEARCH_BOTS, allow: "/", disallow: DISALLOW },
      { userAgent: AI_BOTS, allow: "/", disallow: DISALLOW },
    ],
    sitemap: `${DOMAIN}/sitemap.xml`,
  };
}
