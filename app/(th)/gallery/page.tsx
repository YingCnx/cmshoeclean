import GalleryImage from "@/components/GalleryImage";
import Script from "next/script";
import type { Metadata } from "next";

// ================= SEO: Metadata =================
export const metadata: Metadata = {
  title: "รีวิวผลงานซักรองเท้า เชียงใหม่ | ก่อนและหลังสปารองเท้า | ซักเกิบแอนด์สปา",
  description:
    "ชมตัวอย่างผลงานจริง Before & After บริการซักรองเท้าผ้าใบ รองเท้าหนัง และรองเท้าแบรนด์เนมในเชียงใหม่ มั่นใจในคุณภาพความสะอาดและมาตรฐานสปาระดับพรีเมียม",
  alternates: {
    canonical: "/gallery",
  },
};

export default function GalleryPage() {
  const galleryItems = [
    {
      title: "Sneakers Cleaning",
      subtitle: "บริการซักรองเท้าผ้าใบและสนีกเกอร์",
      before: "/images/gallery/sneaker-before-1.jpg",
      after: "/images/gallery/sneaker-after-2.jpg",
      alt: "รีวิวซักรองเท้าผ้าใบ สนีกเกอร์ เชียงใหม่"
    },
    {
      title: "Leather Spa",
      subtitle: "สปาและฟื้นฟูรองเท้าหนัง",
      before: "/images/gallery/leather-before.jpg",
      after: "/images/gallery/leather-after.jpg",
      alt: "รีวิวสปารองเท้าหนัง เชียงใหม่"
    },
    {
      title: "Luxury & Brandname",
      subtitle: "สปารองเท้าแบรนด์เนมพรีเมียม",
      before: "/images/gallery/brandname-before.jpg",
      after: "/images/gallery/brandname-after.jpg",
      alt: "รีวิวซักรองเท้าแบรนด์เนม เชียงใหม่"
    },
    {
      title: "Suede Restoration",
      subtitle: "ทำความสะอาดและดูแลรองเท้าหนังกลับ",
      before: "/images/gallery/suede-before.jpg",
      after: "/images/gallery/suede-after.jpg",
      alt: "รีวิวซักรองเท้าหนังกลับ เชียงใหม่"
    },
    {
      title: "Birkenstock Care",
      subtitle: "บริการทำความสะอาดรองเท้า Birkenstock",
      before: "/images/gallery/Birkenstock-before.jpg",
      after: "/images/gallery/Birkenstock-after.jpg",
      alt: "รีวิวซักรองเท้าเบอร์เคนสต๊อก เชียงใหม่"
    },
    {
      title: "Mold Removal",
      subtitle: "บริการกำจัดเชื้อราบนรองเท้า",
      before: "/images/gallery/mold-before.jpg",
      after: "/images/gallery/mold-after.jpg",
      alt: "รีวิวกำจัดเชื้อรารองเท้า เชียงใหม่"
    },
    {
      title: "Color Fix",
      subtitle: "บริการแก้สีตกและฟื้นฟูสีรองเท้า",
      before: "/images/gallery/Discoloration-before.jpg",
      after: "/images/gallery/Discoloration-after.jpg",
      alt: "รีวิวแก้สีตกรองเท้า เชียงใหม่"
    }
  ];

  return (
    <>
      {/* ================= SEO: ImageGallery Schema ================= */}
      <Script
        id="gallery-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ImageGallery",
            "name": "ผลงานซักรองเท้าและสปารองเท้า เชียงใหม่ - ซักเกิบแอนด์สปา",
            "description": "รวมภาพผลงานก่อนและหลังการใช้บริการซักรองเท้าและสปารองเท้าทุกประเภท",
            "image": galleryItems.map(item => `https://www.cmshoeclean.com${item.after}`)
          }),
        }}
      />

      <div className="bg-white font-sans overflow-hidden">
        {/* ================= Page Header ================= */}
        <section className="bg-white py-24 text-center relative">
          <div className="container mx-auto px-6 relative z-10">
            <span className="text-[#27D7D0] font-black tracking-[0.4em] uppercase text-[10px] mb-4 block animate-fade-in">
              Our Portfolio
            </span>
            <h1 className="text-5xl md:text-7xl font-black text-[#1e293b] mb-6 tracking-tighter">
              Before & <span className="text-[#27D7D0]">After</span>
            </h1>
            <p className="text-slate-500 max-w-2xl mx-auto text-lg font-medium leading-relaxed">
              พิสูจน์ผลลัพธ์ความสะอาดระดับมืออาชีพผ่านผลงานจริง <br className="hidden md:block" />
              ร้านซักรองเท้าเชียงใหม่ที่ใส่ใจทุกรายละเอียดรองเท้าคู่โปรดของคุณ
            </p>
          </div>
          {/* Subtle Background Accent */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(#27D7D0_1px,transparent_1px)] [background-size:40px_40px] opacity-[0.03]"></div>
        </section>

        {/* ================= Gallery List ================= */}
        <section className="pb-32">
          <div className="max-w-6xl mx-auto px-6">
            <div className="space-y-40">
              {galleryItems.map((item, index) => (
                <GalleryItem key={index} {...item} />
              ))}
            </div>

            {/* ================= Bottom CTA ================= */}
            <div className="mt-40 bg-[#1e293b] rounded-[4rem] p-12 lg:p-20 text-center text-white shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-80 h-80 bg-[#27D7D0] opacity-10 rounded-full translate-x-1/3 -translate-y-1/3"></div>
              <div className="relative z-10">
                <h2 className="text-4xl md:text-5xl font-black mb-8 tracking-tighter">
                  พร้อมคืนชีวิตใหม่ให้ <br className="sm:hidden" /> <span className="text-[#27D7D0]">รองเท้าของคุณ</span> หรือยัง?
                </h2>
                <p className="text-slate-400 text-xl mb-12 font-medium">
                  ประเมินสภาพผ่าน LINE ฟรี บริการรับ-ส่งฟรีในเขตเมืองเชียงใหม่
                </p>
                <a
                  href="https://line.me/R/ti/p/@708dfith"
                  target="_blank"
                  className="inline-block bg-[#27D7D0] text-white px-12 py-5 rounded-full font-black text-xl hover:scale-105 transition-all shadow-xl shadow-cyan-900/20"
                >
                  ส่งรูปประเมินราคาเลย
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

/* =======================
   Gallery Item Component
======================= */
function GalleryItem({
  title,
  subtitle,
  before,
  after,
  alt
}: {
  title: string;
  subtitle: string;
  before: string;
  after: string;
  alt: string;
}) {
  return (
    <div className="group">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div className="text-center md:text-left">
          <h3 className="text-4xl font-black text-[#1e293b] tracking-tight group-hover:text-[#27D7D0] transition-colors">
            {title}
          </h3>
          <p className="text-slate-400 font-bold text-base mt-1">{subtitle}</p>
        </div>
        <div className="hidden lg:block h-[2px] bg-slate-100 flex-grow mx-10 mb-5 relative overflow-hidden">
            <div className="absolute inset-0 bg-[#27D7D0] -translate-x-full group-hover:translate-x-0 transition-transform duration-700"></div>
        </div>
        <div className="flex items-center gap-3 text-[#27D7D0] font-black text-xs tracking-[0.3em] mb-5">
           <span className="w-2 h-2 bg-[#27D7D0] rounded-full animate-pulse"></span>
           VISUAL RESULTS
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-10 lg:gap-16">
        {/* Before Container */}
        <div className="relative group/img">
          <div className="absolute top-6 left-6 bg-slate-900/90 backdrop-blur shadow-xl text-white px-6 py-2 rounded-2xl text-[11px] font-black z-20 tracking-widest uppercase border border-white/10">
            Before
          </div>
          <div className="rounded-[3rem] overflow-hidden border-[12px] border-slate-50 shadow-sm group-hover/img:shadow-2xl transition-all duration-500 bg-slate-100">
            <GalleryImage
              src={before}
              alt={`${alt} ก่อนใช้บริการ`}
            />
          </div>
        </div>

        {/* After Container */}
        <div className="relative group/img">
          <div className="absolute top-6 left-6 bg-[#27D7D0] shadow-xl text-white px-6 py-2 rounded-2xl text-[11px] font-black z-20 tracking-widest uppercase border border-white/20">
            After
          </div>
          <div className="rounded-[3rem] overflow-hidden border-[12px] border-slate-50 shadow-sm group-hover/img:shadow-2xl group-hover/img:border-white transition-all duration-500 bg-slate-100">
            <GalleryImage
              src={after}
              alt={`${alt} หลังใช้บริการ`}
            />
          </div>
        </div>
      </div>
    </div>
  );
}