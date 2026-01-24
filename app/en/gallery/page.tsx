import GalleryImage from "@/components/GalleryImage";
import Script from "next/script";
import type { Metadata } from "next";

// ================= SEO: Metadata (English Version) =================
export const metadata: Metadata = {
  title: "Shoe Spa Portfolio | Before & After Results | CM Shoe Clean",
  description:
    "Explore our professional shoe restoration gallery. Real before and after results for sneakers, leather shoes, and luxury brands by CM Shoe Clean Chiang Mai.",
  alternates: {
    canonical: "/en/gallery",
  },
};

export default function GalleryPage() {
  const galleryItems = [
    {
      title: "Sneakers Cleaning",
      subtitle: "Deep cleaning & revitalization for all sneaker brands",
      before: "/images/gallery/sneaker-before-1.jpg",
      after: "/images/gallery/sneaker-after-2.jpg",
      alt: "Professional sneaker cleaning results Chiang Mai"
    },
    {
      title: "Leather Spa",
      subtitle: "Premium leather restoration and conditioning",
      before: "/images/gallery/leather-before.jpg",
      after: "/images/gallery/leather-after.jpg",
      alt: "Leather shoe restoration results Chiang Mai"
    },
    {
      title: "Luxury & Brandname",
      subtitle: "Specialized care for high-end designer footwear",
      before: "/images/gallery/brandname-before.jpg",
      after: "/images/gallery/brandname-after.jpg",
      alt: "Luxury brand shoe spa results Chiang Mai"
    },
    {
      title: "Suede Restoration",
      subtitle: "Advanced cleaning and texture revival for suede shoes",
      before: "/images/gallery/suede-before.jpg",
      after: "/images/gallery/suede-after.jpg",
      alt: "Suede shoe cleaning results Chiang Mai"
    },
    {
      title: "Birkenstock Care",
      subtitle: "Footbed deep cleaning and cork restoration",
      before: "/images/gallery/Birkenstock-before.jpg",
      after: "/images/gallery/Birkenstock-after.jpg",
      alt: "Birkenstock cleaning service results Chiang Mai"
    },
    {
      title: "Mold Removal",
      subtitle: "Complete mold elimination and deep sanitization",
      before: "/images/gallery/mold-before.jpg",
      after: "/images/gallery/mold-after.jpg",
      alt: "Shoe mold removal service results Chiang Mai"
    },
    {
      title: "Color Fix",
      subtitle: "Stain removal and original color restoration",
      before: "/images/gallery/Discoloration-before.jpg",
      after: "/images/gallery/Discoloration-after.jpg",
      alt: "Shoe color restoration results Chiang Mai"
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
            "name": "Professional Shoe Spa Portfolio - CM Shoe Clean Chiang Mai",
            "description": "Showcase of before and after results for professional shoe cleaning and restoration services.",
            "image": galleryItems.map(item => `https://www.cmshoeclean.com${item.after}`)
          }),
        }}
      />

      <div className="bg-white font-sans overflow-hidden">
        {/* ================= Page Header ================= */}
        <section className="bg-white py-16 md:py-24 text-center relative">
          <div className="container mx-auto px-6 relative z-10">
            <span className="text-[#27D7D0] font-black tracking-[0.3em] md:tracking-[0.4em] uppercase text-[10px] mb-4 block animate-fade-in">
              Our Portfolio
            </span>
            <h1 className="text-5xl md:text-7xl font-black text-[#1e293b] mb-6 tracking-tighter uppercase">
              Before & <span className="text-[#27D7D0]">After</span>
            </h1>
            <p className="text-slate-500 max-w-2xl mx-auto text-base md:text-lg font-medium leading-relaxed">
              Experience the transformation of professional shoe care. <br className="hidden md:block" />
              Real results for real customers, handled with precision and expertise.
            </p>
          </div>
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(#27D7D0_1px,transparent_1px)] [background-size:40px_40px] opacity-[0.03]"></div>
        </section>

        {/* ================= Gallery List ================= */}
        <section className="pb-32">
          <div className="max-w-6xl mx-auto px-6">
            <div className="space-y-24 md:space-y-40">
              {galleryItems.map((item, index) => (
                <GalleryItem key={index} {...item} />
              ))}
            </div>

            {/* ================= Bottom CTA ================= */}
            <div className="mt-32 md:mt-40 bg-[#1e293b] rounded-[3rem] md:rounded-[4rem] p-10 md:p-20 text-center text-white shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-80 h-80 bg-[#27D7D0] opacity-10 rounded-full translate-x-1/3 -translate-y-1/3"></div>
              <div className="relative z-10">
                <h2 className="text-3xl md:text-5xl font-black mb-8 tracking-tighter uppercase">
                  Ready to restore <br className="sm:hidden" /> your <span className="text-[#27D7D0]">shoes?</span>
                </h2>
                <p className="text-slate-400 text-lg md:text-xl mb-12 font-medium">
                  Get a free estimate via LINE. Free pick-up & delivery in Chiang Mai city.
                </p>
                <a
                  href="https://line.me/R/ti/p/@708dfith"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#27D7D0] text-white px-12 py-5 rounded-full font-black text-lg md:text-xl hover:scale-105 active:scale-95 transition-all shadow-xl shadow-cyan-900/20 uppercase"
                >
                  Get Estimate Now
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
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 md:mb-12 gap-4 md:gap-6">
        <div className="text-center md:text-left">
          <h3 className="text-3xl md:text-4xl font-black text-[#1e293b] tracking-tight group-hover:text-[#27D7D0] transition-colors uppercase">
            {title}
          </h3>
          <p className="text-slate-400 font-bold text-sm md:text-base mt-1">{subtitle}</p>
        </div>
        <div className="hidden lg:block h-[2px] bg-slate-100 flex-grow mx-10 mb-5 relative overflow-hidden">
          <div className="absolute inset-0 bg-[#27D7D0] -translate-x-full group-hover:translate-x-0 transition-transform duration-700"></div>
        </div>
        <div className="flex items-center justify-center md:justify-start gap-3 text-[#27D7D0] font-black text-[10px] md:text-xs tracking-[0.3em] mb-5">
          <span className="w-2 h-2 bg-[#27D7D0] rounded-full animate-pulse"></span>
          VISUAL RESULTS
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8 md:gap-10 lg:gap-16">
        {/* Before Container */}
        <div className="relative group/img">
          <div className="absolute top-4 left-4 md:top-6 md:left-6 bg-slate-900/90 backdrop-blur shadow-xl text-white px-4 py-1.5 md:px-6 md:py-2 rounded-xl md:rounded-2xl text-[9px] md:text-[11px] font-black z-20 tracking-widest uppercase border border-white/10">
            Before
          </div>
          <div className="rounded-[2rem] md:rounded-[3rem] overflow-hidden border-[8px] md:border-[12px] border-slate-50 shadow-sm group-hover/img:shadow-2xl transition-all duration-500 bg-slate-100">
            <GalleryImage
              src={before}
              alt={`${alt} before service`}
            />
          </div>
        </div>

        {/* After Container */}
        <div className="relative group/img">
          <div className="absolute top-4 left-4 md:top-6 md:left-6 bg-[#27D7D0] shadow-xl text-white px-4 py-1.5 md:px-6 md:py-2 rounded-xl md:rounded-2xl text-[9px] md:text-[11px] font-black z-20 tracking-widest uppercase border border-white/20">
            After
          </div>
          <div className="rounded-[2rem] md:rounded-[3rem] overflow-hidden border-[8px] md:border-[12px] border-slate-50 shadow-sm group-hover/img:shadow-2xl group-hover/img:border-white transition-all duration-500 bg-slate-100">
            <GalleryImage
              src={after}
              alt={`${alt} after service`}
            />
          </div>
        </div>
      </div>
    </div>
  );
}