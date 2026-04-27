import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Jay Mark Borja Portfolio",
    short_name: "Jay Mark B.",
    description:
      "Full-stack web developer based in Quezon City, Philippines.",
    start_url: "/",
    display: "standalone",
    background_color: "#0a0f1c",
    theme_color: "#22d3ee",
    icons: [
      {
        src: "/images/mobile-logo.svg",
        sizes: "any",
        type: "image/svg+xml",
        purpose: "any",
      },
    ],
  };
}
