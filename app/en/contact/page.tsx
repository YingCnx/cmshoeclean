import Script from "next/script";
import type { Metadata } from "next";

// ================= SEO: Metadata (English Version) =================
export const metadata: Metadata = {
  title: "Contact Us | Shoe Cleaning Service Chiang Mai | CM Shoe Clean",
  description: "Get in touch with CM Shoe Clean (SuckGerb & Spa) for premium shoe spa services in Chiang Mai. City-wide pick-up & delivery, maps, and LINE contact details.",
  alternates: {
    canonical: "/en/contact",
  },
};

export default function ContactPage() {
  return (
    <>
      {/* ================= LocalBusiness Schema (EN SEO) ================= */}
      <Script
        id="local-business-contact-schema-en"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "CM Shoe Clean (SuckGerb & Spa)",
            "url": "https://cmshoeclean.com/en/contact",
            "image": "https://cmshoeclean.com/og.jpg",
            "telephone": "0953620244",
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
        {/* ================= Page Header ================= */}
        <section className="bg-white py-16 md:py-24 text-center relative overflow-hidden">
          <div className="container mx-auto px-6 relative z-10">
            <span className="text-[#27D7D0] font-black tracking-[0.3em] md:tracking-[0.4em] uppercase text-[10px] mb-4 block animate-fade-in">
              Get In Touch
            </span>
            <h1 className="text-5xl md:text-7xl font-black text-[#1e293b] mb-6 tracking-tighter uppercase">
              Contact <span className="text-[#27D7D0]">Us</span>
            </h1>
            <p className="text-slate-500 max-w-2xl mx-auto text-base md:text-lg font-medium leading-relaxed">
              <strong>CM Shoe Clean · SuckGerb & Spa</strong> <br />
              Premium shoe care and restoration in Chiang Mai. <br className="hidden md:block" />
              Serving customers locally and nationwide.
            </p>
          </div>
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(#27D7D0_1px,transparent_1px)] [background-size:40px_40px] opacity-[0.03]"></div>
        </section>

        {/* ================= Main Content ================= */}
        <section className="pb-24">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 md:gap-16 items-start">
              
              {/* ================= Contact Info Cards ================= */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl md:text-3xl font-black text-[#1e293b] mb-8 tracking-tight uppercase">Channel Info</h2>
                  
                  <div className="grid gap-6">
                    {/* Call Card */}
                    <a href="tel:0953620244" className="flex items-center p-6 md:p-8 bg-white rounded-[2rem] md:rounded-[2.5rem] border border-slate-50 shadow-sm hover:shadow-xl transition-all group">
                      <div className="w-14 h-14 md:w-16 md:h-16 bg-[#f0fdfc] rounded-2xl flex items-center justify-center text-2xl md:text-3xl mr-6 group-hover:bg-[#27D7D0] group-hover:text-white transition-all">
                        📞
                      </div>
                      <div>
                        <p className="text-[10px] font-black text-[#27D7D0] uppercase tracking-widest mb-1">Phone</p>
                        <p className="text-lg md:text-xl font-black text-[#1e293b]">095-362-0244</p>
                      </div>
                    </a>

                    {/* Line Card */}
                    <a href="https://line.me/R/ti/p/@708dfith" target="_blank" rel="noopener noreferrer" className="flex items-center p-6 md:p-8 bg-white rounded-[2rem] md:rounded-[2.5rem] border border-slate-50 shadow-sm hover:shadow-xl transition-all group">
                      <div className="w-14 h-14 md:w-16 md:h-16 bg-[#f0fdfc] rounded-2xl flex items-center justify-center text-2xl md:text-3xl mr-6 group-hover:bg-[#27D7D0] group-hover:text-white transition-all">
                        💬
                      </div>
                      <div>
                        <p className="text-[10px] font-black text-[#27D7D0] uppercase tracking-widest mb-1">Line Official</p>
                        <p className="text-lg md:text-xl font-black text-[#1e293b]">@708dfith</p>
                      </div>
                    </a>

                    {/* Facebook Card */}
                    <a href="https://www.facebook.com/suckgerbcnx" target="_blank" rel="noopener noreferrer" className="flex items-center p-6 md:p-8 bg-white rounded-[2rem] md:rounded-[2.5rem] border border-slate-50 shadow-sm hover:shadow-xl transition-all group">
                      <div className="w-14 h-14 md:w-16 md:h-16 bg-[#f0fdfc] rounded-2xl flex items-center justify-center text-2xl md:text-3xl mr-6 group-hover:bg-[#27D7D0] group-hover:text-white transition-all">
                        📘
                      </div>
                      <div>
                        <p className="text-[10px] font-black text-[#27D7D0] uppercase tracking-widest mb-1">Facebook</p>
                        <p className="text-lg md:text-xl font-black text-[#1e293b]">SuckGerb & Spa</p>
                      </div>
                    </a>
                  </div>
                </div>

                <div className="p-8 md:p-10 bg-slate-50 rounded-[2.5rem] md:rounded-[3rem] border border-slate-100 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[#27D7D0] opacity-[0.03] rounded-full translate-x-1/2 -translate-y-1/2"></div>
                  <h3 className="text-xl font-black text-[#1e293b] mb-4 flex items-center gap-2">
                     <span className="w-2 h-6 bg-[#27D7D0] rounded-full"></span>
                     Working Hours
                  </h3>
                  <p className="text-slate-600 font-bold">Open Daily: 09:00 AM – 06:00 PM</p>
                  <p className="text-sm text-slate-500 mt-4 leading-relaxed font-medium">
                    * Free pick-up & delivery service within Chiang Mai city. <br />
                    * Nationwide parcel delivery accepted daily.
                  </p>
                </div>
              </div>

              {/* ================= Google Maps ================= */}
              <div className="space-y-8">
                <h2 className="text-2xl md:text-3xl font-black text-[#1e293b] mb-8 tracking-tight uppercase">Our Location</h2>
                <div className="relative group">
                  <div className="absolute -inset-4 bg-[#27D7D0]/5 rounded-[3.5rem] -z-10 group-hover:bg-[#27D7D0]/10 transition-all duration-500"></div>
                  <div className="aspect-square w-full overflow-hidden rounded-[2.5rem] md:rounded-[3rem] border-[8px] md:border-[12px] border-white shadow-2xl relative z-10 bg-slate-100">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3776.5603799813234!2d98.99649889999999!3d18.8177353!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30da3be24689a1c7%3A0x57bb9237131d9646!2z4LiL4Lix4LiB4LmA4LiB4Li04Lia4LmB4Lit4LiZ4LiU4LmM4Liq4Lib4LiyIOC5gOC4iuC4teC4ouC4h-C5g-C4q-C4oeC5iCAo4LiL4Lix4LiB4Lij4Lit4LiH4LmA4LiX4LmJ4LiyKQ!5e0!3m2!1sth!2sth!4v1767880749191!5m2!1sth!2sth"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="CM Shoe Clean Google Maps Location"
                    />
                  </div>
                </div>
                <p className="text-[10px] md:text-[11px] font-black text-slate-400 mt-8 uppercase tracking-[0.4em] text-center">
                  Search "CM Shoe Clean" in Google Maps
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* ================= Bottom CTA ================= */}
        <section className="pb-24 px-6">
          <div className="max-w-5xl mx-auto bg-[#1e293b] rounded-[3rem] md:rounded-[4rem] p-12 lg:p-20 text-center text-white shadow-2xl relative overflow-hidden">
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#27D7D0] opacity-10 rounded-full translate-x-1/2 translate-y-1/2"></div>
            
            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-black mb-8 tracking-tighter uppercase">Ready to refresh <br className="sm:hidden" /> your shoes?</h2>
              <p className="text-slate-400 text-lg md:text-xl mb-12 font-medium">
                Send us photos via LINE for a free instant estimate.
              </p>
              <a
                href="https://line.me/R/ti/p/@708dfith"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#27D7D0] text-white px-10 md:px-14 py-5 md:py-6 rounded-full font-black text-xl hover:scale-105 active:scale-95 transition-all shadow-xl shadow-cyan-950/20 uppercase tracking-widest text-sm"
              >
                Line Official: @708dfith
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}