import Image from "next/image";
import Script from "next/script";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ซักรองเท้า เชียงใหม่ | สปารองเท้า เชียงใหม่ | ซักเกิบแอนด์สปา",
  description:
    "ร้านซักรองเท้าและสปารองเท้าในเชียงใหม่ ดูดูแลโดยผู้เชี่ยวชาญเฉพาะทาง เปิดให้บริการตั้งแต่ปี 2019 พร้อมบริการรับ–ส่งฟรีในเขตเมืองเชียงใหม่ เปิดทุกวัน 09.00–18.00 น.",
  alternates: {
    canonical: "/",
  },
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
            image: "https://www.cmshoeclean.com/og.jpg",
            url: "https://www.cmshoeclean.com",
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

      <div className="bg-white font-sans overflow-hidden">
        {/* ================= HERO SECTION ================= */}
        <section className="relative bg-white pt-20 pb-32">
          <div className="container mx-auto px-6 lg:px-20 flex flex-col lg:flex-row items-center">
            <div className="w-full lg:w-1/2 z-10 text-center lg:text-left">
              <span className="text-[#27D7D0] font-black tracking-[0.4em] text-[10px] uppercase mb-4 block">
                Premium Shoe Spa Chiang Mai Since 2019
              </span>
              <h1 className="text-6xl md:text-8xl font-black text-[#1e293b] mb-8 leading-[0.95] tracking-tighter">
                ซักรองเท้า <br /> & <span className="text-[#27D7D0]">สปารองเท้า</span>
              </h1>
              <div className="text-lg text-slate-500 mb-10 max-w-md font-medium mx-auto lg:mx-0 leading-relaxed">
                <p>คืนชีวิตใหม่ให้รองเท้าคู่โปรดในเชียงใหม่ สะอาด มั่นใจ ด้วยมาตรฐานสากลและน้ำยาเฉพาะทาง</p>
                <p className="font-bold text-[#1e293b] mt-2 underline decoration-[#27D7D0]">บริการรับ–ส่งรองเท้าฟรี ในพื้นที่เมืองเชียงใหม่</p>
              </div>
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                <a href="https://line.me/R/ti/p/@708dfith" target="_blank" className="bg-[#27D7D0] text-white px-10 py-5 rounded-full font-black uppercase text-xs tracking-widest shadow-xl shadow-cyan-100 hover:scale-105 transition-all">
                  ติดต่อ LINE
                </a>
                <a href="/services" className="border-2 border-[#1e293b] text-[#1e293b] px-10 py-5 rounded-full font-black uppercase text-xs tracking-widest hover:bg-[#1e293b] hover:text-white transition-all">
                  ดูบริการทั้งหมด
                </a>
              </div>
            </div>

            <div className="w-full lg:w-1/2 mt-16 lg:mt-0 flex justify-center lg:justify-end relative">
              <div className="relative z-10 rounded-[2.5rem] md:rounded-[3.5rem] overflow-hidden border-[10px] md:border-[15px] border-slate-50 shadow-2xl rotate-2 max-w-[320px] md:max-w-[600px] transition-transform hover:rotate-0 duration-500">
                <Image 
                  src="/images/Hero.jpg" 
                  alt="ซักเกิบแอนด์สปา บริการซักรองเท้าและสปารองเท้าในเชียงใหม่" 
                  width={800} 
                  height={800} 
                  className="object-cover" 
                  priority 
                />
              </div>
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-[#27D7D0] rounded-full opacity-10 animate-pulse"></div>
            </div>
          </div>
        </section>

        {/* ================= STATS SECTION ================= */}
        <section className="bg-[#1e293b] py-12">
          <div className="container mx-auto px-6 grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[
              { label: "Pairs Cleaned", value: "10,000+" },
              { label: "Years Experience", value: "5+" },
              { label: "Happy Clients", value: "99%" },
              { label: "Service Points", value: "Chiang Mai" },
            ].map((stat, i) => (
              <div key={i} className="space-y-1">
                <div className="text-3xl font-black text-[#27D7D0]">{stat.value}</div>
                <div className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* ================= FEATURES SECTION ================= */}
        <section className="py-24 bg-slate-50">
          <div className="container mx-auto px-6 lg:px-20">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-black text-[#1e293b] tracking-tighter">ทำไมต้องเลือก ซักเกิบแอนด์สปา?</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { 
                  title: "Experience Since 2019", 
                  icon: "📅", 
                  desc: "ให้บริการซักรองเท้าและสปารองเท้าในเชียงใหม่มาอย่างยาวนานและต่อเนื่อง", 
                  color: "#f4faff" 
                },
                { 
                  title: "Expert Handle", 
                  icon: "🧤", 
                  desc: "ประเมินวิธีดูแลรองเท้าเป็นรายคู่ให้เหมาะกับวัสดุและสภาพจริง", 
                  color: "#f0fdfc" 
                },
                { 
                  title: "Eco-Friendly", 
                  icon: "🫧", 
                  desc: "เลือกใช้น้ำยาเฉพาะทาง ปลอดภัยต่อสี วัสดุ และโครงสร้างรองเท้า", 
                  color: "#f4faff" 
                },
                { 
                  title: "Free Delivery", 
                  icon: "🚚", 
                  desc: "สะดวกด้วยบริการรับ–ส่งฟรี ภายในเขตพื้นที่เมืองเชียงใหม่", 
                  color: "#f0fdfc" 
                }
              ].map((item, i) => (
                <div key={i} className="text-center p-10 rounded-[3rem] bg-white shadow-sm hover:shadow-xl transition-all border border-slate-100 group">
                  <div className="w-20 h-20 rounded-[2rem] flex items-center justify-center text-4xl mx-auto mb-8 transition-transform group-hover:scale-110" style={{ backgroundColor: item.color }}>
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-black text-[#1e293b] mb-4 leading-tight">{item.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed font-medium">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= FINAL CTA SECTION ================= */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="bg-[#27D7D0] rounded-[4rem] p-12 lg:p-20 text-center text-white shadow-2xl shadow-cyan-100 relative overflow-hidden">
              <div className="relative z-10">
                <h2 className="text-4xl md:text-6xl font-black mb-8 tracking-tighter uppercase">ร้านที่ลูกค้าไว้วางใจ</h2>
                <p className="text-cyan-50 text-xl mb-12 font-medium">เปิดให้บริการทุกวัน 09.00 – 18.00 น. ส่งรูปประเมินราคาผ่าน LINE ได้ฟรีทันที</p>
                <a href="https://line.me/R/ti/p/@708dfith" className="bg-white text-[#27D7D0] px-14 py-6 rounded-full font-black text-2xl hover:scale-105 transition-all inline-block shadow-xl">
                  Line: @708dfith
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}