import type { Metadata } from "next";
import HeaderEN from "../../components/HeaderEN"; // Ensure you have an English header component
import Link from "next/link";

/* =======================
    SEO Metadata (EN)
======================= */
export const metadata: Metadata = {
  metadataBase: new URL("https://www.cmshoeclean.com"),
  
  alternates: {
    languages: {
      th: "/",
      en: "/en",
      "x-default": "/",
    },
  },

  title: {
    default: "Shoe Cleaning Chiang Mai | Premium Shoe Spa | CM Shoe Clean",
    template: "%s | CM Shoe Clean Chiang Mai",
  },

  description:
    "Chiang Mai's #1 professional shoe cleaning and restoration service. Expert care for all materials, un-yellowing, and mold removal. Free pick-up & delivery in the city area.",

  openGraph: {
    title: "CM Shoe Clean | Professional Shoe Spa & Restoration Chiang Mai",
    description: "Revitalize your favorite pair with our professional-grade solutions and expert techniques. Trusted since 2019.",
    url: "https://www.cmshoeclean.com/en",
    siteName: "CM Shoe Clean Chiang Mai",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-en.jpg",
        width: 1200,
        height: 630,
        alt: "CM Shoe Clean Chiang Mai - Premium Shoe Spa",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "CM Shoe Clean | Premium Shoe Spa Chiang Mai",
    description: "Professional shoe cleaning, restoration, and delivery services in Chiang Mai.",
    images: ["/og-en.jpg"],
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
    <div className="flex flex-col min-h-screen bg-white font-sans overflow-hidden">
      {/* English Header Component */}
      <HeaderEN />

      <main className="flex-grow">{children}</main>

      {/* ================= Footer (Premium Dark Style) ================= */}
      <footer className="bg-[#1e293b] text-white pt-20 pb-10 mt-auto">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16 items-center border-b border-slate-800 pb-12">
            
            {/* Branding & Subtitle */}
            <div className="text-center md:text-left">
              <h2 className="text-2xl font-black tracking-tighter mb-2 uppercase italic">
                CM <span className="text-[#27D7D0]">Shoe Clean</span>
              </h2>
              <p className="text-slate-400 text-sm font-medium">
                Professional Shoe Spa & Restoration in Chiang Mai since 2019
              </p>
            </div>
            
            {/* Legal Links & Operation Hours */}
            <div className="flex flex-col items-center md:items-end gap-4">
              <div className="flex gap-6 text-[10px] font-black tracking-[0.2em] uppercase">
                <Link href="/en/privacy" className="hover:text-[#27D7D0] transition-colors">Privacy Policy</Link>
                <Link href="/en/terms" className="hover:text-[#27D7D0] transition-colors">Terms of Service</Link>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-[#27D7D0] rounded-full animate-pulse"></span>
                <span className="text-[#27D7D0] text-xs font-black tracking-widest uppercase">
                  Open Daily 09:00 - 18:00
                </span>
              </div>
            </div>
          </div>
          
          {/* Copyright Notice */}
          <div className="text-center">
            <p className="text-[10px] font-bold tracking-[0.3em] text-slate-500 uppercase">
              © 2026 CM SHOE CLEAN - CHIANG MAI. ALL RIGHTS RESERVED.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}