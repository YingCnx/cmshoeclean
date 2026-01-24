import Image from "next/image";
import Script from "next/script";
import type { Metadata } from "next";

/* =======================
    SEO Metadata (EN)
======================= */
export const metadata: Metadata = {
  title: "Premium Shoe Spa Chiang Mai | Professional Shoe Cleaning | CM Shoe Clean",
  description:
    "Expert shoe cleaning and restoration service in Chiang Mai since 2019. Professional care for sneakers, leather, and luxury brands. Free pick-up & delivery in city area. Open daily 9:00 AM - 6:00 PM.",
  alternates: {
    canonical: "/en",
  },
  openGraph: {
    title: "CM Shoe Clean | The Best Shoe Spa in Chiang Mai",
    description: "Professional shoe care and restoration since 2019. Trusted by over 10,000+ pairs.",
    url: "https://www.cmshoeclean.com/en",
    siteName: "CM Shoe Clean",
    locale: "en_US",
    type: "website",
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
            "name": "CM Shoe Clean (SuckGerb & Spa)",
            "image": "https://www.cmshoeclean.com/og.jpg",
            "url": "https://www.cmshoeclean.com/en",
            "telephone": "0953620244",
            "priceRange": "$$",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Chiang Mai",
              "addressCountry": "TH",
            },
            "areaServed": {
              "@type": "AdministrativeArea",
              "name": "Chiang Mai",
            },
            "openingHours": "Mo-Su 09:00-18:00",
            "sameAs": [
              "https://www.facebook.com/suckgerbcnx",
              "https://line.me/R/ti/p/@708dfith",
            ],
          }),
        }}
      />

      <div className="bg-white font-sans overflow-hidden">
        {/* ================= HERO SECTION ================= */}
        <section className="relative bg-white pt-12 pb-20 md:pt-20 md:pb-32">
          <div className="container mx-auto px-6 lg:px-20 flex flex-col lg:flex-row items-center">
            <div className="w-full lg:w-1/2 z-10 text-center lg:text-left order-2 lg:order-1 mt-12 lg:mt-0">
              <span className="text-[#27D7D0] font-black tracking-[0.3em] md:tracking-[0.4em] text-[10px] uppercase mb-4 block animate-fade-in">
                Premium Shoe Spa Chiang Mai Since 2019
              </span>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-[#1e293b] mb-6 md:mb-8 leading-[1.1] lg:leading-[0.95] tracking-tighter">
                SHOE CLEANING <br className="hidden md:block" /> & <span className="text-[#27D7D0]">RESTORATION</span>
              </h1>
              <div className="text-base md:text-lg text-slate-500 mb-10 max-w-md font-medium mx-auto lg:mx-0 leading-relaxed">
                <p>Give your favorite pair a new life with our international standard care and premium solutions.</p>
                <p className="font-bold text-[#1e293b] mt-4 decoration-[#27D7D0] decoration-2 underline underline-offset-8">
                  FREE PICK-UP & DELIVERY <br /> WITHIN CHIANG MAI CITY
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a href="https://line.me/R/ti/p/@708dfith" target="_blank" className="bg-[#27D7D0] text-white px-10 py-5 rounded-full font-black uppercase text-xs tracking-widest shadow-xl shadow-cyan-100 hover:scale-105 active:scale-95 transition-all">
                  Contact LINE
                </a>
                <a href="/en/services" className="border-2 border-[#1e293b] text-[#1e293b] px-10 py-5 rounded-full font-black uppercase text-xs tracking-widest hover:bg-[#1e293b] hover:text-white active:scale-95 transition-all">
                  Our Services
                </a>
              </div>
            </div>

            <div className="w-full lg:w-1/2 order-1 lg:order-2 flex justify-center lg:justify-end relative">
              <div className="relative z-10 rounded-[2.5rem] md:rounded-[3.5rem] overflow-hidden border-[10px] md:border-[15px] border-slate-50 shadow-2xl rotate-2 max-w-[320px] md:max-w-[600px] transition-transform hover:rotate-0 duration-500">
                <Image 
                  src="/images/Hero.jpg" 
                  alt="CM Shoe Clean - Best Shoe Spa Chiang Mai" 
                  width={800} 
                  height={800} 
                  className="object-cover" 
                  priority 
                />
              </div>
              <div className="absolute -bottom-6 -right-6 md:-bottom-10 md:-right-10 w-24 h-24 md:w-40 md:h-40 bg-[#27D7D0] rounded-full opacity-10 animate-pulse"></div>
            </div>
          </div>
        </section>

        {/* ================= STATS SECTION ================= */}
        <section className="bg-[#1e293b] py-10 md:py-12">
          <div className="container mx-auto px-6 grid grid-cols-2 lg:grid-cols-4 gap-y-8 gap-x-4 text-center">
            {[
              { label: "Pairs Cleaned", value: "10,000+" },
              { label: "Years Exp.", value: "5+" },
              { label: "Happy Clients", value: "99%" },
              { label: "Location", value: "Chiang Mai" },
            ].map((stat, i) => (
              <div key={i} className="space-y-1">
                <div className="text-2xl md:text-3xl font-black text-[#27D7D0]">{stat.value}</div>
                <div className="text-[9px] md:text-[10px] text-slate-400 font-bold uppercase tracking-widest">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* ================= FEATURES SECTION ================= */}
        <section className="py-20 md:py-24 bg-slate-50">
          <div className="container mx-auto px-6 lg:px-20">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl md:text-5xl font-black text-[#1e293b] tracking-tighter">WHY CHOOSE US?</h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {[
                { 
                  title: "Experience Since 2019", 
                  icon: "📅", 
                  desc: "Trusted by sneakerheads and collectors in Chiang Mai for over 5 years.", 
                  color: "#f4faff" 
                },
                { 
                  title: "Expert Handling", 
                  icon: "🧤", 
                  desc: "Individual assessment for every pair to ensure the safest treatment.", 
                  color: "#f0fdfc" 
                },
                { 
                  title: "Eco-Friendly", 
                  icon: "🫧", 
                  desc: "Premium, pH-neutral solutions safe for color and all materials.", 
                  color: "#f4faff" 
                },
                { 
                  title: "Free Delivery", 
                  icon: "🚚", 
                  desc: "Complimentary pick-up and delivery service within the city area.", 
                  color: "#f0fdfc" 
                }
              ].map((item, i) => (
                <div key={i} className="text-center p-8 md:p-10 rounded-[2.5rem] md:rounded-[3rem] bg-white shadow-sm hover:shadow-xl transition-all border border-slate-100 group">
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-[1.5rem] md:rounded-[2rem] flex items-center justify-center text-3xl md:text-4xl mx-auto mb-6 md:mb-8 transition-transform group-hover:scale-110" style={{ backgroundColor: item.color }}>
                    {item.icon}
                  </div>
                  <h3 className="text-lg md:text-xl font-black text-[#1e293b] mb-4 leading-tight">{item.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed font-medium">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= FINAL CTA SECTION ================= */}
        <section className="py-16 md:py-20">
          <div className="container mx-auto px-6">
            <div className="bg-[#1e293b] rounded-[3rem] md:rounded-[4rem] p-10 md:p-20 text-center text-white shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#27D7D0] opacity-10 rounded-full translate-x-1/3 -translate-y-1/3"></div>
              <div className="relative z-10">
                <h2 className="text-3xl md:text-6xl font-black mb-6 md:mb-8 tracking-tighter uppercase">READY TO REFRESH?</h2>
                <p className="text-slate-300 text-lg md:text-xl mb-10 md:mb-12 font-medium">Open Daily 09:00 AM – 06:00 PM <br className="md:hidden" /> Get a free estimate today.</p>
                <a href="https://line.me/R/ti/p/@708dfith" target="_blank" className="bg-[#27D7D0] text-white px-10 md:px-14 py-5 md:py-6 rounded-full font-black text-xl md:text-2xl hover:scale-105 active:scale-95 transition-all inline-block shadow-xl shadow-cyan-900/20">
                  LINE: @708dfith
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}