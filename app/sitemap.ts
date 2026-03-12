import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://martenslab.com",
      lastModified: new Date(),
    },
    {
      url: "https://martenslab.com/progetti",
      lastModified: new Date(),
    },
    {
      url: "https://martenslab.com/contatti",
      lastModified: new Date(),
    },
  ];
}