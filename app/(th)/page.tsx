import Image from "next/image";
import Script from "next/script";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ซักรองเท้า เชียงใหม่ | สปารองเท้า เชียงใหม่ | ซักเกิบแอนด์สปา",
  description:
    "ร้านซักรองเท้าและสปารองเท้าในเชียงใหม่ ดูแลโดยผู้เชี่ยวชาญเฉพาะทาง เปิดให้บริการตั้งแต่ปี 2019 พร้อมบริการรับ–ส่งฟรีในเขตเมืองเชียงใหม่ เปิดทุกวัน 09.00–18.00 น.",
};

export default function Home() {
  return (
    <>
      {/* ================= SEO: LocalBusiness Schema ================= */}
      <Script
        id="local-business-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "ซักเกิบแอนด์สปา (CM Shoe Clean)",
            image: "https://cmshoeclean.com/og.jpg",
            url: "https://cmshoeclean.com",
            telephone: "0953620244",
            address: {
              "@type": "PostalAddress",
              addressLocality: "เชียงใหม่",
              addressCountry: "TH",
            },
            areaServed: {
              "@type": "AdministrativeArea",
              name: "เชียงใหม่",
            },
            openingHours: "Mo-Su 09:00-18:00",
            sameAs: [
              "https://www.facebook.com/ซักเกิบแอนด์สปา",
              "https://line.me/R/ti/p/@708dfith",
            ],
          }),
        }}
      />

      {/* ================= HERO ================= */}
      <section className="min-h-[90vh] flex">
        {/* Image */}
        <div className="hidden lg:block w-1/2 relative">
          <Image
            src="/images/Hero1.jpg"
            alt="ซักรองเท้าและสปารองเท้าในเชียงใหม่"
            fill
            priority
            className="object-cover"
          />
        </div>

        {/* Content */}
        <div className="w-full lg:w-1/2 flex items-center px-8 lg:px-20">
          <div>
            {/* H1 */}
            <h1 className="text-5xl md:text-6xl font-bold text-brand-primary mb-6 leading-tight">
              ซักรองเท้า & สปารองเท้า เชียงใหม่
            </h1>

            {/* Brand */}
            <p className="text-brand-accent text-lg mb-4 font-medium">
              ซักเกิบแอนด์สปา · CM Shoe Clean
            </p>

            {/* Description */}
            <p className="max-w-md text-base md:text-lg text-slate-700 mb-10 leading-relaxed space-y-1">
              <span className="block">
                ร้านซักรองเท้าและสปารองเท้าในเชียงใหม่ ให้บริการทำความสะอาดรองเท้าทุกประเภทอย่างพิถีพิถัน
              </span>
              <span className="block">
                ดูแลโดยผู้เชี่ยวชาญเฉพาะทาง เปิดให้บริการตั้งแต่ปี 2019
              </span>
              <span className="block">
                ใส่ใจในรายละเอียด เพื่อยืดอายุรองเท้าคู่โปรดของคุณ
              </span>
              <span className="block font-medium text-slate-800">
                บริการรับ–ส่งรองเท้าฟรี ในพื้นที่เมืองเชียงใหม่
              </span>
              <span className="block text-sm text-slate-600">
                เปิดให้บริการทุกวัน เวลา 09.00 – 18.00 น.
              </span>
            </p>

            {/* CTA Buttons */}
            <div className="flex gap-4 flex-wrap">
              <a
                href="https://line.me/R/ti/p/@708dfith"
                target="_blank"
                className="bg-brand-primary text-white px-8 py-4 rounded-full font-medium hover:bg-brand-dark transition"
              >
                ติดต่อ LINE
              </a>

              <a
                href="/services"
                className="border border-brand-primary text-brand-primary px-8 py-4 rounded-full hover:bg-brand-primary hover:text-white transition"
              >
                ดูบริการซักรองเท้า
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ================= WHY US ================= */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-4 gap-6">
          {[
            {
              title: "✓ ประสบการณ์ตั้งแต่ปี 2019",
              desc: "ให้บริการซักรองเท้าและสปารองเท้าในเชียงใหม่มาอย่างยาวนาน",
            },
            {
              title: "✓ ประเมินเป็นรายคู่",
              desc: "เลือกวิธีดูแลรองเท้าให้เหมาะกับวัสดุและสภาพจริง",
            },
            {
              title: "✓ น้ำยาเฉพาะทาง",
              desc: "ปลอดภัยต่อสี วัสดุ และโครงสร้างรองเท้า",
            },
            {
              title: "✓ รับ–ส่งฟรีในเชียงใหม่",
              desc: "สะดวก ไม่ต้องเดินทาง ภายในเขตเมืองเชียงใหม่",
            },
          ].map((item, i) => (
            <div key={i} className="border border-slate-200 p-6">
              <h3 className="font-semibold text-brand-primary mb-2">
                {item.title}
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="bg-brand-dark/90 py-20 text-center">
        <h2 className="text-3xl font-bold text-white mb-6">
          ร้านซักรองเท้าและสปารองเท้าในเชียงใหม่ ที่ลูกค้าไว้ใจ
        </h2>

        <p className="text-brand-accent text-lg font-medium mb-10">
          ติดต่อเพื่อประเมินสภาพรองเท้า และแนะนำบริการที่เหมาะสม
          <span className="block text-sm mt-2">
            เปิดให้บริการทุกวัน เวลา 09.00 – 18.00 น.
          </span>
        </p>

        <a
          href="https://line.me/R/ti/p/@708dfith"
          target="_blank"
          className="bg-white text-brand-primary px-10 py-4 rounded-full font-semibold hover:bg-brand-soft transition"
        >
          ติดต่อ LINE
        </a>
      </section>
    </>
  );
}
