import { buildLlmsFullTxt } from "@/lib/llms";

// /llms-full.txt — every service and area page as plain text, so AI engines can read the whole site in one fetch.
export const dynamic = "force-static";

export function GET() {
  return new Response(buildLlmsFullTxt(), {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=86400, stale-while-revalidate=604800",
    },
  });
}
