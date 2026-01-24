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
  const mainServices = [
    {
      title: "Deep Cleaning",
      price: "เริ่มต้น 2xx.-",
      desc: "ทำความสะอาดล้ำลึกทุกซอกมุมด้วยน้ำยาออร์แกนิค ถนอมวัสดุรองเท้าคู่โปรด",
      image: "/images/services/deep-cleaning.png"
    },
    {
      title: "Luxury Leather Care",
      price: "เริ่มต้น 3xx.-",
      desc: "บริการสปารองเท้าหนังแบรนด์เนมโดยเฉพาะ พร้อมลงครีมบำรุงคืนความชุ่มชื้นให้หนัง",
      icon: "✨",
      image: "/images/services/luxury-cleaning.jpg"
    },
    {
      title: "Waterproof Coating",
      price: "เริ่มต้น 1xx.-",
      desc: "เคลือบสเปรย์กันน้ำระดับพรีเมียม สร้างเกราะป้องกันความชื้นและคราบสกปรก ไม่ทิ้งคราบขาว",
      icon: "☔",
      image: "/images/services/waterproof.png"
    },
    {
      title: "Un-yellowing",
      price: "เริ่มต้น 1xx.-",
      desc: "แก้ปัญหาพื้นรองเท้าเหลืองจากคราบออกซิเดชัน ให้กลับมาขาวสะอาดอีกครั้ง",
      icon: "☀️",
      image: "/images/services/unyellow.png"
    }
  ];

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
                  text: "บริการซักรองเท้าและสปารองเท้าในเชียงใหม่ ใช้เวลาปกติประมาณ 3–5 วัน ขึ้นอยู่กับประเภทและสภาพรองเท้า และมีบริการเร่งด่วนภายใน 1 วัน",
                },
              },
              {
                "@type": "Question",
                name: "ร้านซักรองเท้าเชียงใหม่ รับซักรองเท้าแบบไหนบ้าง?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "ร้านซักเกิบแอนด์สปา ให้บริการซักรองเท้าผ้าใบ สนีกเกอร์ รองเท้าหนัง หนังกลับ รองเท้าแบรนด์เนม รองเท้าบูท และรองเท้าประเภทอื่น ๆ โดยประเมินเป็นรายคู่",
                },
              },
              {
                "@type": "Question",
                name: "สปารองเท้าเชียงใหม่ มีบริการอะไรบ้าง?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "บริการสปารองเท้าในเชียงใหม่ ได้แก่ ทำความสะอาดเชิงลึก แก้ขอบเหลือง แต้มขอบโฟม เคลือบสเปรย์กันน้ำ และเปลี่ยนเชือกรองเท้า",
                },
              },
              {
                "@type": "Question",
                name: "มีบริการรับ–ส่งรองเท้าในเชียงใหม่หรือไม่?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "ทางร้านมีบริการรับ–ส่งรองเท้าฟรีในเขตเมืองเชียงใหม่ และสามารถจัดส่งรองเท้าจากต่างจังหวัดได้",
                },
              },
            ],
          }),
        }}
      />

      <div className="bg-white font-sans">
        {/* ================= Page Header ================= */}
        <section className="bg-white py-24 text-center relative overflow-hidden">
          <div className="container mx-auto px-6 relative z-10">
            <span className="text-[#27D7D0] font-black tracking-[0.4em] uppercase text-[10px] mb-4 block">
              Our Specialist Services
            </span>
            <h1 className="text-5xl md:text-7xl font-black text-[#1e293b] mb-6 tracking-tighter">
              Services & <span className="text-[#27D7D0]">Pricing</span>
            </h1>
            <p className="text-slate-500 max-w-2xl mx-auto text-lg font-medium leading-relaxed">
              ร้านซักรองเท้าและสปารองเท้าในเชียงใหม่ ดูแลรองเท้าอย่างพิถีพิถัน <br className="hidden md:block" />
              ประเมินเป็นรายคู่เพื่อเลือกวิธีที่เหมาะสม พร้อมบริการรับ–ส่งฟรีในเขตเมือง
            </p>
          </div>
        </section>

        {/* ================= Service Grid ================= */}
        <section className="py-24 bg-slate-50/50">
          <div className="container mx-auto px-6 lg:px-20">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
              {mainServices.map((item, i) => (
                <div key={i} className="group bg-white rounded-[3rem] overflow-hidden border border-slate-100 shadow-sm hover:shadow-2xl hover:-translate-y-3 transition-all duration-500">
                  <div className="h-80 relative overflow-hidden">
                    <Image src={item.image} alt={`${item.title} เชียงใหม่`} fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                    <div className="absolute top-6 right-6 bg-[#27D7D0] text-white px-5 py-1.5 rounded-full text-[11px] font-black shadow-lg">
                      {item.price}
                    </div>
                  </div>
                  <div className="p-10 text-center">
                    {/* <div className="w-16 h-16 bg-[#f0fdfc] text-4xl flex items-center justify-center rounded-[1.5rem] mx-auto mb-6 group-hover:bg-[#27D7D0] group-hover:text-white transition-all duration-300">
                      {item.icon}
                    </div> */}
                    <h3 className="text-xl font-black text-[#1e293b] mb-4 tracking-tight">{item.title}</h3>
                    <p className="text-slate-500 text-sm leading-relaxed mb-6 font-medium">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            
          </div>
        </section>

        {/* ================= Order Process ================= */}
        <section className="bg-[#1e293b] py-24 text-white rounded-[5rem] mx-6 mb-24 overflow-hidden relative shadow-2xl">
          <div className="container mx-auto px-6 text-center relative z-10">
            <span className="text-[#27D7D0] font-black tracking-[0.3em] uppercase text-[10px] mb-6 block">Working Process</span>
            <h2 className="text-4xl md:text-6xl font-black mb-20 tracking-tighter">ง่ายๆ เพียง 3 ขั้นตอน</h2>
            <div className="grid md:grid-cols-3 gap-16">
              {[
                { step: "01", title: "ส่งรูปประเมิน", desc: "ทัก Line ส่งรูปภาพรองเท้าเพื่อประเมินราคาและบริการที่เหมาะสม" },
                { step: "02", title: "รับ-ส่งรองเท้า", desc: "เรามีบริการรับ-ส่งฟรีในเขตเมืองเชียงใหม่ หรือส่งพัสดุมาที่ร้าน" },
                { step: "03", title: "รอรับความสะอาด", desc: "ทีมงานดูแลสปาอย่างพิถีพิถัน และแจ้งสถานะเมื่อเสร็จเรียบร้อย" }
              ].map((step, i) => (
                <div key={i} className="relative group text-center">
                  <div className="text-8xl font-black text-white/[0.03] absolute -top-14 left-1/2 -translate-x-1/2 group-hover:text-[#27D7D0]/10 transition-colors">
                    {step.step}
                  </div>
                  <div className="w-12 h-12 bg-[#27D7D0] rounded-full flex items-center justify-center text-white font-black mb-8 mx-auto relative z-10">
                    {step.step}
                  </div>
                  <h4 className="text-2xl font-black mb-4 tracking-tight">{step.title}</h4>
                  <p className="text-slate-400 text-sm leading-relaxed font-medium px-4">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= Final CTA ================= */}
        <div className="text-center pb-24">
          <a href="https://line.me/R/ti/p/@708dfith" 
             target="_blank"
             className="bg-[#27D7D0] text-white px-16 py-6 rounded-full font-black uppercase text-sm tracking-[0.2em] shadow-2xl shadow-cyan-100 hover:bg-[#1fbdb7] hover:scale-105 transition-all inline-block">
            ติดต่อสอบถามบริการ
          </a>
        </div>
      </div>
    </>
  );
}

function ServiceItemText({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-md transition-all text-center">
      <h3 className="font-black text-[#1e293b] mb-2">{title}</h3>
      <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
    </div>
  );
}