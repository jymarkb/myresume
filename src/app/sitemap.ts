import type { MetadataRoute } from "next";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://jymarkb.info";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const sections = [
    "",
    "#aboutme",
    "#expertise",
    "#services",
    "#projects",
    "#contact",
  ];

  return sections.map((hash) => ({
    url: `${SITE_URL}/${hash}`,
    lastModified,
    changeFrequency: "monthly",
    priority: hash === "" ? 1 : 0.7,
  }));
}
