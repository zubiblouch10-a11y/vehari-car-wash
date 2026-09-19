import { pageOgImage } from "@/lib/ogImage";

export const alt = "Book a doorstep car wash in Bahrain — Vehari Car Wash";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return pageOgImage({
    kicker: "BOOK ON WHATSAPP",
    title: "Book Your Doorstep Car Wash in Bahrain",
  });
}
