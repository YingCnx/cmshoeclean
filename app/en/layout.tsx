import type { Metadata } from "next";
import Link from "next/link";

/* =======================
   SEO Metadata (EN)
======================= */
export const metadata: Metadata = {
  metadataBase: new URL("https://cmshoeclean.com"),

  alternates: {
    languages: {
      th: "https://cmshoeclean.com",
      en: "https://cmshoeclean.com/en",
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
    url: "https://cmshoeclean.com/en",
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

/* =======================
   English Layout
======================= */
export default function EnglishLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* ================= Header ================= */}
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur border-b border-brand-soft">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          
          {/* Logo */}
          <div className="leading-tight">
            <Link
              href="/"
              className="block text-2xl font-extrabold tracking-tight text-brand-primary"
            >
              ซักเกิบแอนด์สปา
              <span className="block text-base font-semibold text-brand-accent">
                CM Shoe Clean
              </span>
            </Link>
          </div>

          {/* Navigation + Language */}
          <div className="flex items-center gap-6">
            <nav className="flex gap-6 text-sm">
              <Link href="/en" className="hover:text-brand-primary">
                Home
              </Link>
              <Link href="/en/services" className="hover:text-brand-primary">
                Services
              </Link>
              <Link href="/en/gallery" className="hover:text-brand-primary">
                Gallery
              </Link>
              <Link href="/en/reviews" className="hover:text-brand-primary">
                Reviews
              </Link>
              <Link href="/en/contact" className="hover:text-brand-primary">
                Contact
              </Link>
            </nav>

            {/* Language Switcher */}
            <div className="flex items-center gap-3 text-sm border-l border-slate-300 pl-4">
              <Link href="/" className="hover:text-brand-primary">
                TH
              </Link>
              <span className="text-slate-400">|</span>
              <span className="font-medium text-brand-primary">
                EN
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* ================= Main ================= */}
      <main>{children}</main>

      {/* ================= Footer ================= */}
      <footer className="bg-brand-dark text-white mt-24">
        <div className="max-w-6xl mx-auto px-6 py-10 text-sm text-brand-soft">
          <p>© 2024 CM Shoe Clean</p>
          <p>Professional Shoe Cleaning Service in Chiang Mai, Thailand</p>
        </div>
      </footer>
    </>
  );
}
