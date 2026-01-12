import type { Metadata } from "next";
import HeaderEN from "./header";

/* =======================
   SEO Metadata (EN)
======================= */
export const metadata: Metadata = {
  metadataBase: new URL("https://www.cmshoeclean.com"),

  alternates: {
    languages: {
      th: "https://www.cmshoeclean.com",
      en: "https://www.cmshoeclean.com/en",
      "x-default": "https://www.cmshoeclean.com/",
    },
  },

  title: {
    default: "Shoe Cleaning Service in Chiang Mai | CM Shoe Clean",
    template: "%s | CM Shoe Clean",
  },

  description:
    "Professional shoe cleaning and shoe care service in Chiang Mai. Established since 2019. Free pick-up & delivery within Chiang Mai city.",

  openGraph: {
    title: "CM Shoe Clean | Shoe Cleaning Service in Chiang Mai",
    description:
      "Professional shoe cleaning and care service in Chiang Mai. Trusted since 2019.",
    url: "https://www.cmshoeclean.com/en",
    siteName: "CM Shoe Clean",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og.jpg",
        width: 1200,
        height: 630,
        alt: "CM Shoe Clean Chiang Mai",
      },
    ],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function EnglishLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <HeaderEN />
      <main>{children}</main>

      <footer className="bg-brand-dark text-white mt-24">
        <div className="max-w-6xl mx-auto px-6 py-10 text-sm text-brand-soft">
          <p>© 2024 CM Shoe Clean</p>
          <p>Professional Shoe Cleaning Service in Chiang Mai, Thailand</p>
        </div>
      </footer>
    </>
  );
}
