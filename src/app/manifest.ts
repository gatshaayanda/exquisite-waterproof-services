import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    id: "/exquisite-waterproof-services",
    name: "Exquisite Waterproof Services",
    short_name: "Exquisite Waterproof",
    description:
      "Roofing and wall waterproofing. Free Damage Analysis. Flexible Payment Terms.",
    start_url: "/",
    scope: "/",
    display: "standalone",
    background_color: "#08140F",
    theme_color: "#123B2A",
    orientation: "portrait-primary",
    lang: "en",
    categories: ["business", "construction"],
    prefer_related_applications: false,
    icons: [
      {
        src: "/icons/exquisite-192.svg",
        sizes: "192x192",
        type: "image/svg+xml",
        purpose: "any",
      },
      {
        src: "/icons/exquisite-512.svg",
        sizes: "512x512",
        type: "image/svg+xml",
        purpose: "maskable",
      },
    ],
  };
}
