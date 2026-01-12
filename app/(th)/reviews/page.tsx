import Script from "next/script";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "รีวิวร้านซักรองเท้า เชียงใหม่ | ลูกค้าจริง | ซักเกิบแอนด์สปา",
  description:
    "รีวิวจากลูกค้าจริงของร้านซักรองเท้าและสปารองเท้าในเชียงใหม่ ซักเกิบแอนด์สปา การันตีคุณภาพ บริการรับ–ส่ง ฟรีในเขตเมืองเชียงใหม่",
  alternates: {
    canonical: "/reviews",
  },
};

export default function ReviewsPage() {
  return (
    <>
      {/* ================= Review + LocalBusiness Schema (SEO) ================= */}
      <Script
        id="review-schema-th"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "ซักเกิบแอนด์สปา (CM Shoe Clean)",
            url: "https://www.cmshoeclean.com/reviews",
            image: "https://www.cmshoeclean.com/og.jpg",
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
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "5",
              reviewCount: "50",
            },
            review: [
              {
                "@type": "Review",
                author: {
                  "@type": "Person",
                  name: "ลูกค้าจากเชียงใหม่",
                },
                reviewBody:
                  "บริการซักรองเท้าในเชียงใหม่ งานสะอาด คราบออกชัด รองเท้าไม่เสียทรง มีบริการรับส่งและให้คำแนะนำดีมาก ประทับใจและจะกลับมาใช้บริการอีก",
                reviewRating: {
                  "@type": "Rating",
                  ratingValue: "5",
                },
              },
              {
                "@type": "Review",
                author: {
                  "@type": "Person",
                  name: "ลูกค้าส่งจากกรุงเทพ",
                },
                reviewBody:
                  "ซักรองเท้าสะอาดมาก งานละเอียด เหมือนได้รองเท้าใหม่ ราคาเหมาะสม แนะนำร้านซักรองเท้าเชียงใหม่ร้านนี้เลย",
                reviewRating: {
                  "@type": "Rating",
                  ratingValue: "5",
                },
              },
            ],
          }),
        }}
      />

      <section className="bg-background py-20">
        <div className="max-w-6xl mx-auto px-6">
          {/* ================= Header ================= */}
          <header className="text-center mb-16">
            <h1 className="text-4xl font-bold text-brand-primary mb-4">
              รีวิวร้านซักรองเท้าและสปารองเท้าในเชียงใหม่
            </h1>
            <p className="text-slate-600">
              ความไว้วางใจจากลูกค้าที่ใช้บริการซักรองเท้าและสปารองเท้ากับซักเกิบแอนด์สปา
              <br />
              <span className="text-sm block mt-2">
                เปิดให้บริการทุกวัน เวลา 09.00 – 18.00 น.
              </span>
            </p>
          </header>

          {/* ================= Highlight Reviews ================= */}
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            <ReviewCard
              name="ลูกค้าจากเชียงใหม่"
              text="บริการดี งานสะอาด คราบออกชัด รองเท้าไม่เสียทรง ทางร้านให้คำแนะนำดี มีบริการรับ–ส่ง ราคาเหมาะสม โดยรวมประทับใจ ไว้จะกลับมาใช้บริการอีก"
            />
            <ReviewCard
              name="ลูกค้าส่งจากกรุงเทพ"
              text="ซักรองเท้าสะอาดมาก คราบออกจริง งานละเอียด เหมือนได้คู่ใหม่เลย ราคาโอเค แนะนำร้านซักรองเท้าเชียงใหม่ร้านนี้ครับ 👍"
            />
            <ReviewCard
              name="ลูกค้าประจำ"
              text="เป็นร้านซักรองเท้าและสปารองเท้าที่ประทับใจมาก ตั้งแต่ซัก อบ โอโซน แก้ขอบเหลือง รองเท้าเหมือนได้คู่ใหม่ บริการรับ–ส่งสะดวก ราคาไม่แพง เจ้าของร้านน่ารักค่ะ"
            />
          </div>

          {/* ================= Google Reviews ================= */}
          <div className="bg-brand-soft rounded-2xl p-8 mb-20">
            <h2 className="text-2xl font-semibold text-brand-primary mb-6 text-center">
              Google Reviews
            </h2>

            <div className="aspect-[4/3] w-full overflow-hidden rounded-xl bg-white">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3776.5603799813234!2d98.99649889999999!3d18.8177353!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30da3be24689a1c7%3A0x57bb9237131d9646!2z4LiL4Lix4LiB4LmA4LiB4Li04Lia4LmB4Lit4LiZ4LiU4LmM4Liq4Lib4LiyIOC5gOC4iuC4teC4ouC4h-C5g-C4q-C4oeC5iCAo4LiL4Lix4LiB4Lij4Lit4LiH4LmA4LiX4LmJ4LiyKQ!5e0!3m2!1sth!2sth!4v1767880749191!5m2!1sth!2sth"
                width="100%"
                height="100%"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <p className="text-center text-slate-500 mt-4 text-sm">
              * รีวิวทั้งหมดมาจาก Google Maps
            </p>
          </div>

          {/* ================= CTA ================= */}
          <div className="text-center">
            <h2 className="text-2xl font-semibold text-brand-primary mb-6">
              พร้อมใช้บริการกับร้านซักรองเท้าเชียงใหม่ที่ลูกค้าไว้ใจ
            </h2>

            <a
              href="https://line.me/R/ti/p/@708dfith"
              target="_blank"
              className="inline-block bg-brand-primary text-white px-10 py-4 rounded-full font-medium hover:bg-brand-dark transition"
            >
              ติดต่อ LINE
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

function ReviewCard({
  name,
  text,
}: {
  name: string;
  text: string;
}) {
  return (
    <div className="bg-white border border-brand-soft rounded-2xl p-6">
      <p className="text-slate-600 mb-4">“{text}”</p>
      <p className="text-sm text-brand-primary font-medium">
        — {name}
      </p>
    </div>
  );
}
