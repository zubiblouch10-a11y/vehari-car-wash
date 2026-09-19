import { pageOgImage } from "@/lib/ogImage";

export const alt = "Doorstep car wash and detailing services in Bahrain — Vehari Car Wash";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return pageOgImage({
    kicker: "OUR SERVICES",
    title: "Doorstep Car Wash & Detailing Services in Bahrain",
  });
}
