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
              "https://line.me/R/ti/p/@020gojbb",
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
                <a href="https://line.me/R/ti/p/@020gojbb" target="_blank" className="bg-[#27D7D0] text-white px-10 py-5 rounded-full font-black uppercase text-xs tracking-widest shadow-xl shadow-cyan-100 hover:scale-105 transition-all">
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
                  title: "ประสบการณ์กว่า 5 ปี",
                  icon: (<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8"><path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" /></svg>),
                  desc: "ให้บริการซักรองเท้าและสปารองเท้าในเชียงใหม่มาอย่างยาวนานและต่อเนื่อง",
                  color: "#f4faff"
                },
                {
                  title: "ดูแลโดยผู้เชี่ยวชาญ",
                  icon: (<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8"><path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456z" /></svg>),
                  desc: "ประเมินวิธีดูแลรองเท้าเป็นรายคู่ให้เหมาะกับวัสดุและสภาพจริง",
                  color: "#f0fdfc"
                },
                {
                  title: "น้ำยาปลอดภัย",
                  icon: (<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8"><path strokeLinecap="round" strokeLinejoin="round" d="M20.893 13.393l-1.135-1.135a2.252 2.252 0 01-.421-.585l-1.08-2.16a.414.414 0 00-.663-.107.827.827 0 01-.812.21l-1.273-.363a.89.89 0 00-.738 1.595l.587.39c.59.395.674 1.23.172 1.732l-.2.2c-.212.212-.33.498-.33.796v.41c0 .409-.11.809-.32 1.158l-1.315 2.191a2.11 2.11 0 01-1.81 1.025 1.055 1.055 0 01-1.055-1.055v-1.172c0-.92-.56-1.747-1.414-2.089l-.655-.261a2.25 2.25 0 01-1.383-2.46l.007-.042a2.25 2.25 0 01.29-.787l.09-.15a2.25 2.25 0 012.37-1.048l1.178.236a1.125 1.125 0 001.302-.795l.208-.73a1.125 1.125 0 00-.578-1.315l-.665-.332-.091.091a2.25 2.25 0 01-1.591.659h-.18c-.249 0-.487.1-.662.274a.931.931 0 01-1.458-1.137l1.411-2.353a2.25 2.25 0 00.286-.76m11.928 9.869A9 9 0 008.965 3.525m11.928 9.868A9 9 0 118.965 3.525" /></svg>),
                  desc: "เลือกใช้น้ำยาเฉพาะทาง ปลอดภัยต่อสี วัสดุ และโครงสร้างรองเท้า",
                  color: "#f4faff"
                },
                {
                  title: "รับ–ส่งฟรี",
                  icon: (<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8"><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" /></svg>),
                  desc: "สะดวกด้วยบริการรับ–ส่งฟรี ภายในเขตพื้นที่เมืองเชียงใหม่",
                  color: "#f0fdfc"
                }
              ].map((item, i) => (
                <div key={i} className="text-center p-10 rounded-[3rem] bg-white shadow-sm hover:shadow-xl transition-all border border-slate-100 group">
                  <div className="w-20 h-20 rounded-[2rem] flex items-center justify-center mx-auto mb-8 transition-transform group-hover:scale-110 text-[#27D7D0]" style={{ backgroundColor: item.color }}>
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
                <a href="https://line.me/R/ti/p/@020gojbb" className="bg-white text-[#27D7D0] px-14 py-6 rounded-full font-black text-2xl hover:scale-105 transition-all inline-block shadow-xl">
                  Line: @020gojbb
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}