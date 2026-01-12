import Image from "next/image";
import Script from "next/script";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "บริการซักรองเท้า เชียงใหม่ | สปารองเท้า | ซักเกิบแอนด์สปา",
  description:
    "บริการซักรองเท้าและสปารองเท้าในเชียงใหม่ ซักรองเท้าผ้าใบ หนัง หนังกลับ รองเท้าแบรนด์เนม พร้อมบริการรับ–ส่งฟรีในเขตเมืองเชียงใหม่",
  alternates: {
    canonical: "/services",
  },
};

export default function ServicesPage() {
  return (
    <>
      {/* ================= FAQ Schema (SEO) ================= */}
      <Script
        id="faq-schema-th-services"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "ซักรองเท้าเชียงใหม่ ใช้เวลากี่วัน?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text:
                    "บริการซักรองเท้าและสปารองเท้าในเชียงใหม่ ใช้เวลาปกติประมาณ 3–5 วัน ขึ้นอยู่กับประเภทและสภาพรองเท้า และมีบริการเร่งด่วนภายใน 1 วัน",
                },
              },
              {
                "@type": "Question",
                name: "ร้านซักรองเท้าเชียงใหม่ รับซักรองเท้าแบบไหนบ้าง?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text:
                    "ร้านซักเกิบแอนด์สปา ให้บริการซักรองเท้าผ้าใบ สนีกเกอร์ รองเท้าหนัง หนังกลับ รองเท้าแบรนด์เนม รองเท้าบูท และรองเท้าประเภทอื่น ๆ โดยประเมินเป็นรายคู่",
                },
              },
              {
                "@type": "Question",
                name: "สปารองเท้าเชียงใหม่ มีบริการอะไรบ้าง?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text:
                    "บริการสปารองเท้าในเชียงใหม่ ได้แก่ ทำความสะอาดเชิงลึก แก้ขอบเหลือง แต้มขอบโฟม เคลือบสเปรย์กันน้ำ และเปลี่ยนเชือกรองเท้า",
                },
              },
              {
                "@type": "Question",
                name: "มีบริการรับ–ส่งรองเท้าในเชียงใหม่หรือไม่?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text:
                    "ทางร้านมีบริการรับ–ส่งรองเท้าฟรีในเขตเมืองเชียงใหม่ และสามารถจัดส่งรองเท้าจากต่างจังหวัดได้",
                },
              },
              {
                "@type": "Question",
                name: "ร้านซักรองเท้าเชียงใหม่ เปิดกี่โมง?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text:
                    "ร้านซักเกิบแอนด์สปา เปิดให้บริการทุกวัน เวลา 09.00 – 18.00 น.",
                },
              },
            ],
          }),
        }}
      />

      <section className="bg-background py-20">
        <div className="max-w-6xl mx-auto px-6">
          {/* ================= Header ================= */}
          <header className="mb-16 text-center">
            <h1 className="text-4xl font-bold text-brand-primary mb-4">
              บริการซักรองเท้าและสปารองเท้าในเชียงใหม่
            </h1>
            <p className="text-slate-600 md:text-lg max-w-2xl mx-auto">
              ร้านซักรองเท้าและสปารองเท้าในเชียงใหม่ ดูแลรองเท้าอย่างพิถีพิถัน
              ประเมินเป็นรายคู่ เพื่อเลือกวิธีที่เหมาะสมกับวัสดุและสภาพ
              พร้อมบริการรับ–ส่งรองเท้าฟรีในเขตเมืองเชียงใหม่
              <br />
              <span className="text-sm block mt-2">
                เปิดให้บริการทุกวัน เวลา 09.00 – 18.00 น.
              </span>
            </p>
          </header>

          {/* ================= Main Services ================= */}
          <section className="mb-20">
            <h2 className="text-2xl font-semibold text-brand-primary mb-8">
              บริการซักรองเท้า
            </h2>

            <div className="mb-10 bg-brand-primary/90 px-6 py-4 text-center">
              <p className="text-sm text-white font-medium">
                ระยะเวลาดำเนินงานปกติ{" "}
                <span className="font-semibold">3–5 วัน</span>
                <span className="mx-2 text-white/60">•</span>
                บริการด่วน{" "}
                <span className="font-semibold text-amber-300">
                  ภายใน 1 วัน
                </span>
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <ServiceItem
                image="/images/services/nike.jpg"
                title="รองเท้าผ้าใบ / สนีกเกอร์"
                desc="บริการซักรองเท้าผ้าใบและสนีกเกอร์ในเชียงใหม่ ทำความสะอาดอย่างอ่อนโยน"
              />
              <ServiceItem
                image="/images/services/suede.jpg"
                title="รองเท้าหนังกลับ"
                desc="สปารองเท้าหนังกลับด้วยวิธีเฉพาะ ลดความเสี่ยงต่อสีและผิวสัมผัส"
              />
              <ServiceItem
                image="/images/services/leather.jpg"
                title="รองเท้าหนัง"
                desc="บริการซักและฟื้นฟูรองเท้าหนัง ขจัดคราบอย่างเหมาะสม"
              />
              <ServiceItem
                image="/images/services/boot.jpg"
                title="รองเท้าบูท"
                desc="ดูแลรองเท้าบูทและรองเท้าทรงสูง ด้วยขั้นตอนที่เหมาะกับโครงสร้าง"
              />
              <ServiceItem
                image="/images/services/brand.jpg"
                title="รองเท้าแบรนด์เนม"
                desc="ซักรองเท้าแบรนด์เนมในเชียงใหม่ ประเมินเป็นพิเศษตามวัสดุและมูลค่า"
              />
              <ServiceItem
                image="/images/services/other.jpg"
                title="รองเท้าประเภทอื่น ๆ"
                desc="สามารถสอบถามเพิ่มเติม ทางร้านยินดีประเมินและแนะนำวิธีดูแลที่เหมาะสม"
              />
            </div>
          </section>

          {/* ================= Extra Services ================= */}
          <section className="mb-20">
            <h2 className="text-2xl font-semibold text-brand-primary mb-8">
              บริการสปารองเท้า (บริการเสริม)
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <ServiceItemText
                title="แก้ขอบเหลือง"
                desc="บริการแก้ขอบเหลืองรองเท้า เพื่อให้รองเท้าดูสะอาดเหมือนใหม่"
                highlight
              />
              <ServiceItemText
                title="แต้มขอบโฟม"
                desc="เก็บรายละเอียดขอบรองเท้า ให้ดูเรียบร้อยและสวยงาม"
                highlight
              />
              <ServiceItemText
                title="เคลือบสเปรย์กันน้ำ"
                desc="ช่วยป้องกันความชื้นและสิ่งสกปรกในชีวิตประจำวัน"
                highlight
              />
              <ServiceItemText
                title="เปลี่ยนเชือกรองเท้า"
                desc="เปลี่ยนเชือกรองเท้าใหม่ เพิ่มความสวยงาม"
                highlight
              />
            </div>
          </section>

          {/* ================= Note ================= */}
          <p className="text-center text-lg md:text-xl font-medium text-slate-700 mb-12">
            ทุกบริการมีการประเมินสภาพรองเท้าก่อนดำเนินการ
            เพื่อให้เหมาะสมกับวัสดุและลดความเสี่ยง
          </p>

          {/* ================= CTA ================= */}
          <div className="text-center">
            <a
              href="https://line.me/R/ti/p/@708dfith"
              target="_blank"
              className="inline-block bg-brand-primary text-white px-10 py-4 rounded-full font-medium hover:bg-brand-dark transition"
            >
              ติดต่อ LINE เพื่อสอบถามบริการซักรองเท้า
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

/* =======================
   Components
======================= */

function ServiceItem({
  image,
  title,
  desc,
}: {
  image: string;
  title: string;
  desc: string;
}) {
  return (
    <div className="bg-white border border-brand-soft hover:border-brand-primary transition overflow-hidden">
      <div className="relative aspect-[4/3]">
        <Image
          src={image}
          alt={`${title} เชียงใหม่`}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
      <div className="border-t border-slate-200" />
      <div className="p-6">
        <h3 className="font-medium text-brand-primary mb-2">
          {title}
        </h3>
        <p className="text-sm text-slate-600 leading-relaxed">
          {desc}
        </p>
      </div>
    </div>
  );
}

function ServiceItemText({
  title,
  desc,
  highlight = false,
}: {
  title: string;
  desc: string;
  highlight?: boolean;
}) {
  return (
    <div
      className={`border p-6 ${
        highlight
          ? "bg-slate-50 border-slate-200"
          : "bg-white border-brand-soft"
      }`}
    >
      <h3 className="font-medium text-brand-primary mb-2">
        {title}
      </h3>
      <p className="text-slate-600 text-sm leading-relaxed">
        {desc}
      </p>
    </div>
  );
}
