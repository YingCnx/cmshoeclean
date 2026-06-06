import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ติดต่อเรา | ซักรองเท้า เชียงใหม่ | ซักเกิบแอนด์สปา",
  description: "ติดต่อร้านซักรองเท้าและสปารองเท้าในเชียงใหม่ โทร 095-362-0244 LINE @020gojbb เปิดทุกวัน 09.00–18.00 น. มีบริการรับ–ส่งฟรีในเขตเมืองเชียงใหม่",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      {/* ================= LocalBusiness Schema (SEO) ================= */}
<script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "ซักเกิบแอนด์สปา (CM Shoe Clean)",
            url: "https://cmshoeclean.com/contact",
            image: "https://cmshoeclean.com/og.jpg",
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
              "https://www.facebook.com/suckgerbcnx",
              "https://line.me/R/ti/p/@020gojbb",
            ],
          }),
        }}
      </script>

      <div className="bg-white font-sans">
        {/* ================= Header Section (Clean Brand Cyan) ================= */}
        <section className="bg-white py-24 text-center relative overflow-hidden">
          <div className="container mx-auto px-6 relative z-10">
            <span className="text-[#27D7D0] font-black tracking-[0.4em] uppercase text-[10px] mb-4 block">
              Get In Touch
            </span>
            <h1 className="text-5xl md:text-7xl font-black text-[#1e293b] mb-6 tracking-tighter">
              Contact <span className="text-[#27D7D0]">Us</span>
            </h1>
            <p className="text-slate-500 max-w-2xl mx-auto text-lg font-medium leading-relaxed">
              ซักเกิบแอนด์สปา · CM Shoe Clean <br />
              พร้อมให้บริการสปารองเท้าพรีเมียมในเชียงใหม่และทั่วประเทศ
            </p>
          </div>
        </section>

        {/* ================= Main Content ================= */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-16 items-start">
              
              {/* ================= Contact Info Cards ================= */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-black text-[#1e293b] mb-8 tracking-tight">ช่องทางติดต่อ</h2>
                  
                  <div className="grid gap-6">
                    {/* Call Card */}
                    <div className="flex items-center p-6 bg-white rounded-[2rem] border border-slate-50 shadow-sm hover:shadow-md transition-all group">
                      <div className="w-14 h-14 bg-[#f0fdfc] rounded-2xl flex items-center justify-center mr-6 group-hover:bg-[#27D7D0] transition-colors text-[#27D7D0] group-hover:text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.338A1.5 1.5 0 013.75 4.5h2.25a1.5 1.5 0 011.44 1.08l.6 2.4a1.5 1.5 0 01-.36 1.44l-1.05 1.05a11.25 11.25 0 005.4 5.4l1.05-1.05a1.5 1.5 0 011.44-.36l2.4.6a1.5 1.5 0 011.08 1.44v2.25a1.5 1.5 0 01-1.838 1.5C6.09 19.5 2.25 13.41 2.25 6.338z" /></svg>
                      </div>
                      <div>
                        <p className="text-xs font-black text-[#27D7D0] uppercase tracking-widest mb-1">Phone</p>
                        <p className="text-xl font-bold text-[#1e293b]">095-362-0244</p>
                      </div>
                    </div>

                    {/* Line Card */}
                    <a href="https://line.me/R/ti/p/@020gojbb" target="_blank" className="flex items-center p-6 bg-white rounded-[2rem] border border-slate-50 shadow-sm hover:shadow-md transition-all group">
                      <div className="w-14 h-14 bg-[#f0fdfc] rounded-2xl flex items-center justify-center mr-6 group-hover:bg-[#27D7D0] transition-colors text-[#27D7D0] group-hover:text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" /></svg>
                      </div>
                      <div>
                        <p className="text-xs font-black text-[#27D7D0] uppercase tracking-widest mb-1">Line Official</p>
                        <p className="text-xl font-bold text-[#1e293b]">@020gojbb</p>
                      </div>
                    </a>

                    {/* Facebook Card */}
                    <a href="https://www.facebook.com/suckgerbcnx" target="_blank" className="flex items-center p-6 bg-white rounded-[2rem] border border-slate-50 shadow-sm hover:shadow-md transition-all group">
                      <div className="w-14 h-14 bg-[#f0fdfc] rounded-2xl flex items-center justify-center mr-6 group-hover:bg-[#27D7D0] transition-colors text-[#27D7D0] group-hover:text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                      </div>
                      <div>
                        <p className="text-xs font-black text-[#27D7D0] uppercase tracking-widest mb-1">Facebook</p>
                        <p className="text-xl font-bold text-[#1e293b]">ซักเกิบแอนด์สปา</p>
                      </div>
                    </a>
                  </div>
                </div>

                <div className="p-8 bg-slate-50 rounded-[2.5rem] border border-slate-100">
                  <h3 className="text-xl font-black text-[#1e293b] mb-4">เวลาทำการ</h3>
                  <p className="text-slate-600 font-medium">เปิดให้บริการทุกวัน: 09.00 – 18.00 น.</p>
                  <p className="text-sm text-slate-500 mt-4 leading-relaxed">
                    * พื้นที่เขตเมืองเชียงใหม่ มีบริการรับ-ส่งฟรี <br />
                    * ลูกค้าต่างจังหวัด สามารถส่งพัสดุมาได้ทุกวัน
                  </p>
                </div>
              </div>

              {/* ================= Google Maps ================= */}
              <div>
                <h2 className="text-3xl font-black text-[#1e293b] mb-8 tracking-tight">แผนที่ร้าน</h2>
                <div className="relative group">
                  <div className="absolute -inset-4 bg-[#27D7D0]/5 rounded-[3rem] -z-10 group-hover:bg-[#27D7D0]/10 transition-colors"></div>
                  <div className="aspect-square w-full overflow-hidden rounded-[2.5rem] border-[10px] border-slate-50 shadow-2xl relative z-10">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3776.5603799813234!2d98.99649889999999!3d18.8177353!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30da3be24689a1c7%3A0x57bb9237131d9646!2z4LiL4Lix4LiB4LmA4LiB4Li04Lia4LmB4Lit4LiZ4LiU4LmM4Liq4Lib4LiyIOC5gOC4iuC4teC4ouC4h-C5g-C4q-C4oeC5iCAo4LiL4Lix4LiB4Lij4Lit4LiH4LmA4LiX4LmJ4LiyKQ!5e0!3m2!1sth!2sth!4v1767880749191!5m2!1sth!2sth"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                  </div>
                </div>
                <p className="text-[11px] font-bold text-slate-400 mt-8 uppercase tracking-[0.2em] text-center">
                  Search "ซักเกิบแอนด์สปา" in Google Maps
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* ================= Bottom CTA (Clean Brand Cyan) ================= */}
        <section className="pb-24 px-6">
          <div className="max-w-5xl mx-auto bg-[#27D7D0] rounded-[4rem] p-12 lg:p-20 text-center text-white shadow-2xl shadow-cyan-100 relative overflow-hidden">
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-white/10 rounded-full translate-x-1/2 translate-y-1/2"></div>
            
            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-black mb-8 tracking-tight">พร้อมดูแลรองเท้าของคุณหรือยัง?</h2>
              <p className="text-cyan-50 text-xl mb-12 font-medium opacity-90">
                ส่งรูปทาง LINE เพื่อประเมินราคาเบื้องต้นได้ทันที
              </p>
              <a
                href="https://line.me/R/ti/p/@020gojbb"
                target="_blank"
                className="inline-block bg-white text-[#27D7D0] px-12 py-5 rounded-full font-black text-xl hover:bg-cyan-50 hover:scale-105 transition-all shadow-xl"
              >
                LINE Official: @020gojbb
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}