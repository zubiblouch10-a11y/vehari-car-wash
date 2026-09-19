import { pageOgImage } from "@/lib/ogImage";

export const alt = "Mobile car wash areas in Bahrain — Vehari Car Wash";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return pageOgImage({
    kicker: "WHERE WE WORK",
    title: "Mobile Car Wash Areas We Cover in Bahrain",
  });
}
