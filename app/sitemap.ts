import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.cmshoeclean.com";
  const lastModified = new Date();

  return [
    // ======================
    // TH pages
    // ======================
    {
      url: `${baseUrl}/`,
      lastModified,
    },
    {
      url: `${baseUrl}/services`,
      lastModified,
    },
    {
      url: `${baseUrl}/gallery`,
      lastModified,
    },
    {
      url: `${baseUrl}/reviews`,
      lastModified,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified,
    },

    // ======================
    // EN pages
    // ======================
    {
      url: `${baseUrl}/en`,
      lastModified,
    },
    {
      url: `${baseUrl}/en/services`,
      lastModified,
    },
    {
      url: `${baseUrl}/en/gallery`,
      lastModified,
    },
    {
      url: `${baseUrl}/en/reviews`,
      lastModified,
    },
    {
      url: `${baseUrl}/en/contact`,
      lastModified,
    },
  ];
}
