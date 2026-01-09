import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://cmshoeclean.com/",
      lastModified: new Date(),
    },
    {
      url: "https://cmshoeclean.com/services",
      lastModified: new Date(),
    },
    {
      url: "https://cmshoeclean.com/gallery",
      lastModified: new Date(),
    },
    {
      url: "https://cmshoeclean.com/reviews",
      lastModified: new Date(),
    },
    {
      url: "https://cmshoeclean.com/contact",
      lastModified: new Date(),
    },
  ];
}
