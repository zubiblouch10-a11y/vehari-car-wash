import type { MetadataRoute } from "next";
import { BUSINESS_NAME } from "@/lib/businessData";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: BUSINESS_NAME,
    short_name: "Vehari Car Wash",
    description:
      "Bahrain's premier doorstep mobile car wash and detailing service — delivered to your home across Manama, Seef, Riffa, Juffair, and more.",
    start_url: "/",
    display: "standalone",
    orientation: "portrait",
    background_color: "#09090b",
    theme_color: "#09090b",
    icons: [
      {
        src: "/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}
