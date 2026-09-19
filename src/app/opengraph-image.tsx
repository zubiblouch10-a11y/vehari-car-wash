import { ImageResponse } from "next/og";
import { BUSINESS_NAME, COVERAGE_AREAS, PHONE_DISPLAY } from "@/lib/businessData";

export const alt = `${BUSINESS_NAME} — doorstep car wash and mobile detailing in Bahrain`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Social preview for the whole site (used by every page that has no image of its own).
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "72px 80px",
          background: "linear-gradient(135deg, #09090b 0%, #0c1a1f 100%)",
          color: "#fafafa",
        }}
      >
        <div style={{ fontSize: 30, color: "#00f0ff", letterSpacing: 6, fontWeight: 700 }}>
          VEHARI CAR WASH &amp; DETAILING
        </div>
        <div style={{ fontSize: 72, fontWeight: 800, lineHeight: 1.08, marginTop: 28 }}>
          Doorstep Car Wash &amp; Mobile Detailing in Bahrain
        </div>
        <div style={{ fontSize: 30, color: "#a1a1aa", marginTop: 34 }}>
          {COVERAGE_AREAS.join(" · ")}
        </div>
        <div style={{ display: "flex", alignItems: "center", marginTop: 48, gap: 20 }}>
          <div
            style={{
              display: "flex",
              background: "#10b981",
              color: "#ffffff",
              fontSize: 30,
              fontWeight: 700,
              padding: "14px 28px",
              borderRadius: 16,
            }}
          >
            Book on WhatsApp
          </div>
          <div style={{ fontSize: 30, color: "#d4d4d8" }}>
            {`${PHONE_DISPLAY} · 7 days, 8 AM – 10 PM`}
          </div>
        </div>
      </div>
    ),
    size
  );
}
