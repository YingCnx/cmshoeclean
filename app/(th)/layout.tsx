import type { Metadata } from "next";
import HeaderTH from "../../components/HeaderTH"; // ไฟล์ที่คุณแยก client component ออกไป
import Link from "next/link";

/* =======================
    SEO Metadata (TH)
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
    default: "ซักรองเท้า เชียงใหม่ | สปารองเท้าพรีเมียม | ซักเกิบแอนด์สปา",
    template: "%s | ซักเกิบแอนด์สปา CM Shoe Clean",
  },

  description:
    "ร้านซักรองเท้าและสปารองเท้าอันดับ 1 ในเชียงใหม่ บริการทำความสะอาดรองเท้าทุกประเภท แก้ขอบเหลือง กำจัดเชื้อรา พร้อมบริการรับ-ส่งฟรีในตัวเมืองเชียงใหม่",

  openGraph: {
    title: "ซักเกิบแอนด์สปา | บริการซักรองเท้าและสปารองเท้า เชียงใหม่",
    description: "คืนความใหม่ให้รองเท้าคู่โปรดของคุณ ด้วยน้ำยาเฉพาะทางและมาตรฐานมืออาชีพ",
    url: "https://www.cmshoeclean.com",
    siteName: "ซักเกิบแอนด์สปา CM Shoe Clean",
    locale: "th_TH",
    type: "website",
    images: [
      {
        url: "/og-th.jpg",
        width: 1200,
        height: 630,
        alt: "ซักเกิบแอนด์สปา เชียงใหม่",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "ซักเกิบแอนด์สปา CM Shoe Clean",
    description: "บริการซักรองเท้าพรีเมียมในเชียงใหม่",
    images: ["/og-th.jpg"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function ThaiLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-screen bg-white font-sans overflow-hidden">
      <HeaderTH />

      <main className="flex-grow">{children}</main>

      {/* ================= Footer ================= */}
      <footer className="bg-[#1e293b] text-white pt-20 pb-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16 items-center border-b border-slate-800 pb-12">
            <div className="text-center md:text-left">
              <h2 className="text-2xl font-black tracking-tighter mb-2 italic">
                ซักเกิบ <span className="text-[#27D7D0]">แอนด์สปา</span>
              </h2>
              <p className="text-slate-400 text-sm font-medium">
                บริการซักรองเท้าและสปารองเท้าพรีเมียม ในเชียงใหม่
              </p>
            </div>
            
            <div className="flex flex-col items-center md:items-end gap-4">
               <div className="flex gap-6 text-[10px] font-black tracking-[0.2em] uppercase">
                 <Link href="/privacy" className="hover:text-[#27D7D0] transition-colors">นโยบายความเป็นส่วนตัว</Link>
                 <Link href="/terms" className="hover:text-[#27D7D0] transition-colors">เงื่อนไขการบริการ</Link>
               </div>
               <div className="text-[#27D7D0] text-xs font-black tracking-widest uppercase">
                 <span>Open Daily 09:00 - 18:00</span>
               </div>
            </div>
          </div>
          
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