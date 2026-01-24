import Script from "next/script";
import type { Metadata } from "next";

// ================= SEO: Metadata (จากของเดิมที่คุณให้มา) =================
export const metadata: Metadata = {
  title: "รีวิวร้านซักรองเท้า เชียงใหม่ | ลูกค้าจริง | ซักเกิบแอนด์สปา",
  description:
    "รีวิวจากลูกค้าจริงของร้านซักรองเท้าและสปารองเท้าในเชียงใหม่ ซักเกิบแอนด์สปา การันตีคุณภาพ บริการรับ–ส่ง ฟรีในเขตเมืองเชียงใหม่",
  alternates: {
    canonical: "/reviews",
  },
};

export default function ReviewsPage() {
  // ข้อมูลรูปภาพรีวิว (สามารถเพิ่ม path รูปที่แคปมาได้ที่นี่)
  const reviewImages = [
    { src: "/images/reviews/chat-1.jpg", alt: "รีวิวลูกค้าซักรองเท้า เชียงใหม่ 1" },
    { src: "/images/reviews/chat-2.jpg", alt: "รีวิวลูกค้าซักรองเท้า เชียงใหม่ 2" },
    { src: "/images/reviews/chat-3.jpg", alt: "รีวิวลูกค้าซักรองเท้า เชียงใหม่ 3" },
    { src: "/images/reviews/chat-4.jpg", alt: "รีวิวลูกค้าซักรองเท้า เชียงใหม่ 4" },
  ];

  return (
    <>
      {/* ================= Review + LocalBusiness Schema (SEO ชุดเดิม) ================= */}
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
                author: { "@type": "Person", name: "ลูกค้าจากเชียงใหม่" },
                reviewBody: "บริการซักรองเท้าในเชียงใหม่ งานสะอาด คราบออกชัด รองเท้าไม่เสียทรง มีบริการรับส่งและให้คำแนะนำดีมาก ประทับใจและจะกลับมาใช้บริการอีก",
                reviewRating: { "@type": "Rating", ratingValue: "5" },
              },
              {
                "@type": "Review",
                author: { "@type": "Person", name: "ลูกค้าส่งจากกรุงเทพ" },
                reviewBody: "ซักรองเท้าสะอาดมาก งานละเอียด เหมือนได้รองเท้าใหม่ ราคาเหมาะสม แนะนำร้านซักรองเท้าเชียงใหม่ร้านนี้เลย",
                reviewRating: { "@type": "Rating", ratingValue: "5" },
              },
            ],
          }),
        }}
      />

      <div className="bg-white font-sans overflow-hidden">
        {/* ================= Page Header ================= */}
        <section className="bg-white py-24 text-center relative">
          <div className="container mx-auto px-6 relative z-10">
            <span className="text-[#27D7D0] font-black tracking-[0.4em] uppercase text-[10px] mb-4 block">Testimonials</span>
            <h1 className="text-5xl md:text-7xl font-black text-[#1e293b] mb-6 tracking-tighter">
              Customer <span className="text-[#27D7D0]">Voice</span>
            </h1>
            <p className="text-slate-500 max-w-2xl mx-auto text-lg font-medium leading-relaxed">
              เพราะความพึงพอใจของลูกค้าคือมาตรฐานของเรา <br />
              รวมความประทับใจจากผู้ใช้บริการจริงทั้งในเชียงใหม่และทั่วประเทศ
            </p>
          </div>
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(#27D7D0_1px,transparent_1px)] [background-size:40px_40px] opacity-[0.03]"></div>
        </section>

        <section className="pb-32">
          
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex items-center gap-4 mb-12">
                 <h2 className="text-2xl font-black text-[#1e293b] whitespace-nowrap uppercase tracking-tight">Real Conversations</h2>
                 <div className="h-[2px] bg-slate-100 w-full"></div>
                 <div className="text-[#27D7D0] font-black text-[10px] tracking-widest whitespace-nowrap">FEEDBACK</div>
              </div>
            
            {/* ================= Highlight Text Reviews ================= */}
            <div className="grid md:grid-cols-3 gap-8 mb-24">
              <ReviewCard
                name="Vsn Nook"
                text="บริการดี งานสะอาด คราบออกชัด รองเท้าไม่เสียทรง ทางร้านให้คำแนะนำดี มีบริการรับ–ส่ง ราคาเหมาะสม โดยรวมประทับใจ ไว้จะกลับมาใช้บริการอีก"
              />
              <ReviewCard
                name="Jittanat Makanut"
                text="ซักรองเท้าสะอาดมาก คราบออกจริง งานละเอียด เหมือนได้คู่ใหม่เลย ราคาโอเค แนะนำร้านซักรองเท้าเชียงใหม่ร้านนี้ครับ 👍"
              />
              <ReviewCard
                name="Walairat Mint"
                text="ใช้บริการร้านนี้ตลอดค่ะ ไม่เคยทำให้ผิดหวังเลย
                      ซักสะอาด ออกหมดทุกคราบ รองเท้าไม่เสียทรง
                      เราอยู่ในเมืองมีบริการรับ-ส่งรองเท้าด้วยค่ะ
                      ดีมากแนะนำค่ะ"
              />
            </div>


            {/* ================= Google Reviews Section ================= */}
            <div className="mb-32 bg-slate-50 rounded-[4rem] p-8 md:p-16 text-center">
              <h2 className="text-3xl font-black text-[#1e293b] mb-2">Google Maps Reviews</h2>
              <div className="flex justify-center text-yellow-400 text-2xl mb-8">★★★★★</div>
              
              <div className="relative group max-w-4xl mx-auto">
                <div className="aspect-[4/3] md:aspect-video w-full overflow-hidden rounded-[2.5rem] border-[12px] border-white shadow-2xl bg-white">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3776.5603799813234!2d98.99649889999999!3d18.8177353!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30da3be24689a1c7%3A0x57bb9237131d9646!2z4LiL4Lix4LiB4LmA4LiB4Li04Lia4LmB4Lit4LiZ4LiU4LmM4Liq4Lib4LiyIOC5gOC4iuC4teC4ouC4h-C5g-C4q-C4oeC5iCAo4LiL4Lix4LiB4Lij4Lit4LiH4LmA4LiX4LmJ4LiyKQ!5e0!3m2!1sth!2sth!4v1767880749191!5m2!1sth!2sth"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    loading="lazy"
                  />
                </div>
              </div>
              <p className="text-slate-400 mt-8 text-[11px] font-black uppercase tracking-[0.3em]">
                * Verified Reviews from Google Business Profile
              </p>
            </div>

            {/* ================= Bottom CTA ================= */}
            <div className="bg-[#27D7D0] rounded-[4rem] p-12 lg:p-20 text-center text-white shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full translate-x-1/2 -translate-y-1/2"></div>
              <div className="relative z-10">
                <h2 className="text-3xl md:text-5xl font-black mb-8 tracking-tight uppercase">
                  พร้อมใช้บริการกับร้านซักรองเท้า <br /> ที่ลูกค้าเชียงใหม่ไว้ใจ
                </h2>
                <a
                  href="https://line.me/R/ti/p/@708dfith"
                  target="_blank"
                  className="inline-block bg-[#1e293b] text-white px-12 py-5 rounded-full font-black text-xl hover:scale-105 transition-all shadow-xl"
                >
                  ประเมินราคาผ่าน LINE
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

// --- Sub Components ---

function ReviewCard({ name, text }: { name: string; text: string }) {
  return (
    <div className="group bg-white border border-slate-100 rounded-[2.5rem] p-10 shadow-sm hover:shadow-xl transition-all duration-500 text-center">
      <div className="text-[#27D7D0] mb-6 text-sm">★★★★★</div>
      <p className="text-slate-600 mb-8 leading-relaxed font-medium italic">“{text}”</p>
      <div className="pt-6 border-t border-slate-50">
        <p className="text-[10px] font-black text-[#27D7D0] uppercase tracking-widest mb-1">Verified Customer</p>
        <p className="text-sm font-black text-[#1e293b]">— {name}</p>
      </div>
    </div>
  );
}

function ReviewImageCard({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="break-inside-avoid group">
      <div className="rounded-[2.5rem] overflow-hidden border-8 border-slate-50 shadow-md group-hover:shadow-2xl transition-all duration-500">
        <img 
          src={src} 
          alt={alt} 
          className="w-full h-auto group-hover:scale-105 transition-transform duration-700" 
        />
      </div>
    </div>
  );
}