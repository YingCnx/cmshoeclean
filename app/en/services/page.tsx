import Image from "next/image";
import Script from "next/script";
import type { Metadata } from "next";

/* =======================
    SEO Metadata (EN)
======================= */
export const metadata: Metadata = {
  title: "Shoe Cleaning Services Chiang Mai | Premium Shoe Spa | CM Shoe Clean",
  description:
    "Professional shoe cleaning and spa services in Chiang Mai. Specialized care for sneakers, leather, suede, and luxury brands. Free pick-up & delivery in city area.",
  alternates: {
    canonical: "/en/services",
  },
};

export default function ServicesPage() {
  const mainServices = [
    {
      title: "Deep Cleaning",
      price: "Start 2xx.-",
      desc: "Deep cleaning for every detail using premium organic solutions. Safe for all materials.",
      image: "/images/services/deep-cleaning.png"
    },
    {
      title: "Luxury Leather Care",
      price: "Start 3xx.-",
      desc: "Specialized spa for luxury leather shoes. Includes deep cleaning and leather conditioning.",
      image: "/images/services/luxury-cleaning.jpg"
    },
    {
      title: "Waterproof Coating",
      price: "Start 1xx.-",
      desc: "Premium nano-coating technology to protect your shoes from liquid and stains.",
      image: "/images/services/waterproof.png"
    },
    {
      title: "Un-yellowing",
      price: "Start 1xx.-",
      desc: "Restore yellowed outsoles caused by oxidation back to their original clean white look.",
      image: "/images/services/unyellow.png"
    }
  ];

  return (
    <>
      {/* ================= FAQ Schema (EN SEO) ================= */}
      <Script
        id="faq-schema-en-services"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "How long does it take for shoe cleaning in Chiang Mai?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "The standard process takes about 3–5 days depending on the shoe type and condition. Express service (24-hour) is also available.",
                },
              },
              {
                "@type": "Question",
                "name": "What types of shoes do you clean?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "CM Shoe Clean provides services for sneakers, leather shoes, suede, luxury brands, boots, and other specialty footwear.",
                },
              },
              {
                "@type": "Question",
                "name": "Do you offer pick-up and delivery service?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, we offer free pick-up and delivery within Chiang Mai city area. We also accept shoes sent via parcel from other provinces.",
                },
              },
            ],
          }),
        }}
      />

      <div className="bg-white font-sans">
        {/* ================= Page Header ================= */}
        <section className="bg-white py-16 md:py-24 text-center relative overflow-hidden">
          <div className="container mx-auto px-6 relative z-10">
            <span className="text-[#27D7D0] font-black tracking-[0.3em] md:tracking-[0.4em] uppercase text-[10px] mb-4 block animate-fade-in">
              Our Specialist Services
            </span>
            <h1 className="text-5xl md:text-7xl font-black text-[#1e293b] mb-6 tracking-tighter">
              Services & <span className="text-[#27D7D0]">Pricing</span>
            </h1>
            <p className="text-slate-500 max-w-2xl mx-auto text-base md:text-lg font-medium leading-relaxed">
              Premium shoe care and spa in Chiang Mai. We treat every pair with precision <br className="hidden md:block" />
              and professional techniques. Free pick-up & delivery in the city.
            </p>
          </div>
        </section>

        {/* ================= Service Grid ================= */}
        <section className="py-12 md:py-24 bg-slate-50/50">
          <div className="container mx-auto px-6 lg:px-20">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-20">
              {mainServices.map((item, i) => (
                <div key={i} className="group bg-white rounded-[2.5rem] md:rounded-[3rem] overflow-hidden border border-slate-100 shadow-sm hover:shadow-2xl hover:-translate-y-3 transition-all duration-500">
                  <div className="h-64 md:h-80 relative overflow-hidden">
                    <Image src={item.image} alt={`${item.title} Chiang Mai`} fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                    <div className="absolute top-6 right-6 bg-[#27D7D0] text-white px-5 py-1.5 rounded-full text-[11px] font-black shadow-lg">
                      {item.price}
                    </div>
                  </div>
                  <div className="p-8 md:p-10 text-center">
                    <h3 className="text-xl font-black text-[#1e293b] mb-4 tracking-tight uppercase">{item.title}</h3>
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
        <section className="bg-[#1e293b] py-20 md:py-24 text-white rounded-[3rem] md:rounded-[5rem] mx-4 md:mx-6 mb-24 overflow-hidden relative shadow-2xl">
          <div className="container mx-auto px-6 text-center relative z-10">
            <span className="text-[#27D7D0] font-black tracking-[0.3em] uppercase text-[10px] mb-6 block">Working Process</span>
            <h2 className="text-3xl md:text-6xl font-black mb-16 md:mb-20 tracking-tighter uppercase">Easy 3-Step Process</h2>
            <div className="grid md:grid-cols-3 gap-12 md:gap-16">
              {[
                { step: "01", title: "SEND PHOTOS", desc: "Contact us via LINE and send photos of your shoes for a quick estimate." },
                { step: "02", title: "PICK-UP", desc: "We offer free pick-up in Chiang Mai city or you can send them via parcel." },
                { step: "03", title: "READY TO GO", desc: "Our experts restore your shoes and notify you once the service is complete." }
              ].map((step, i) => (
                <div key={i} className="relative group text-center">
                  <div className="text-7xl md:text-8xl font-black text-white/[0.03] absolute -top-10 md:-top-14 left-1/2 -translate-x-1/2 group-hover:text-[#27D7D0]/10 transition-colors pointer-events-none">
                    {step.step}
                  </div>
                  <div className="w-12 h-12 bg-[#27D7D0] rounded-full flex items-center justify-center text-white font-black mb-8 mx-auto relative z-10 shadow-lg shadow-cyan-500/20">
                    {step.step}
                  </div>
                  <h4 className="text-xl md:text-2xl font-black mb-4 tracking-tight">{step.title}</h4>
                  <p className="text-slate-400 text-sm leading-relaxed font-medium px-4">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= Final CTA ================= */}
        <div className="text-center pb-24 px-6">
          <a href="https://line.me/R/ti/p/@708dfith" 
             target="_blank"
             rel="noopener noreferrer"
             className="w-full sm:w-auto bg-[#27D7D0] text-white px-12 md:px-16 py-5 md:py-6 rounded-full font-black uppercase text-xs md:text-sm tracking-[0.2em] shadow-2xl shadow-cyan-100 hover:bg-[#1fbdb7] hover:scale-105 active:scale-95 transition-all inline-block">
            Inquire about our services
          </a>
        </div>
      </div>
    </>
  );
}