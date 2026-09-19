import { BUSINESS_NAME, DOMAIN, PHONE_DISPLAY, COVERAGE_AREAS, HOURS_OPEN, HOURS_CLOSE } from "@/lib/businessData";
import { SERVICE_PAGES } from "@/lib/servicePages";
import { LOCATION_PAGES } from "@/lib/locationPages";

// /llms.txt — a plain-text summary for AI search engines. Generated from the same data as the pages,
// so it can never drift out of date.
export const dynamic = "force-static";

export function GET() {
  const body = `# ${BUSINESS_NAME}

> ${BUSINESS_NAME} is a doorstep (mobile) car wash and detailing service in Bahrain. A fully equipped team comes to your home, office or car park in ${COVERAGE_AREAS.join(", ")} — no water or power needed from the customer. Open 7 days a week, ${HOURS_OPEN}–${HOURS_CLOSE}.

- Website: ${DOMAIN}
- Phone / WhatsApp: ${PHONE_DISPLAY}
- Booking: ${DOMAIN}/booking (confirmed on WhatsApp; pricing agreed after confirmation)

## Services

${SERVICE_PAGES.map((p) => `- [${p.name}](${DOMAIN}/${p.slug}): ${p.metaDescription}`).join("\n")}

## Areas served

${LOCATION_PAGES.map((p) => `- [${p.area}](${DOMAIN}/${p.slug})`).join("\n")}

## Hubs

- [All services](${DOMAIN}/services)
- [All areas](${DOMAIN}/areas)
`;

  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8", "Cache-Control": "public, max-age=3600" },
  });
}
