import { ImageResponse } from "next/og";
import { BUSINESS_NAME, PHONE_DISPLAY } from "@/lib/businessData";

export const OG_SIZE = { width: 1200, height: 630 } as const;

/** Branded 1200x630 social-preview image for a single page. */
export function pageOgImage({ kicker, title }: { kicker: string; title: string }) {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          background: "linear-gradient(135deg, #09090b 0%, #0c1a1f 100%)",
          color: "#fafafa",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 28, color: "#00f0ff", letterSpacing: 5, fontWeight: 700 }}>{kicker}</div>
          <div style={{ fontSize: 68, fontWeight: 800, lineHeight: 1.1, marginTop: 28 }}>{title}</div>
        </div>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ fontSize: 32, fontWeight: 700 }}>{BUSINESS_NAME}</div>
          <div
            style={{
              display: "flex",
              background: "#047857",
              color: "#ffffff",
              fontSize: 28,
              fontWeight: 700,
              padding: "12px 26px",
              borderRadius: 14,
            }}
          >
            {PHONE_DISPLAY}
          </div>
        </div>
      </div>
    ),
    OG_SIZE
  );
}
