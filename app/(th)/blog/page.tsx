import Link from "next/link";
import type { Metadata } from "next";
import { getAllPosts } from "@/lib/blog";

// ================= SEO: Metadata =================
export const metadata: Metadata = {
  title: "บทความความรู้ดูแลรองเท้า | ซักเกิบแอนด์สปา เชียงใหม่",
  description:
    "รวมบทความให้ความรู้เรื่องการดูแลรองเท้า ราคาบริการ และเคล็ดลับป้องกันปัญหารองเท้าในเชียงใหม่",
  alternates: {
    canonical: "/blog",
  },
};

export default function BlogListPage() {
  const posts = getAllPosts("th");

  return (
    <>
      {/* ================= SEO: Blog Schema ================= */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Blog",
            name: "บทความความรู้ดูแลรองเท้า - ซักเกิบแอนด์สปา",
            description:
              "รวมบทความให้ความรู้เรื่องการดูแลรองเท้าและบริการซักรองเท้าเชียงใหม่",
            blogPost: posts.map((post) => ({
              "@type": "BlogPosting",
              headline: post.title,
              datePublished: post.date,
              url: `https://www.cmshoeclean.com/blog/${post.slug}`,
            })),
          }),
        }}
      />

      <div className="bg-white font-sans overflow-hidden">
        {/* ================= Page Header ================= */}
        <section className="bg-white py-24 text-center relative">
          <div className="container mx-auto px-6 relative z-10">
            <span className="text-[#27D7D0] font-black tracking-[0.4em] uppercase text-[10px] mb-4 block">
              Knowledge Hub
            </span>
            <h1 className="text-5xl md:text-7xl font-black text-[#1e293b] mb-6 tracking-tighter">
              บทความ<span className="text-[#27D7D0]">ความรู้</span>
            </h1>
            <p className="text-slate-500 max-w-2xl mx-auto text-lg font-medium leading-relaxed">
              เคล็ดลับดูแลรองเท้า ราคาบริการ และความรู้ที่เป็นประโยชน์
              <br className="hidden md:block" />
              จากทีมผู้เชี่ยวชาญด้านการซักและสปารองเท้า
            </p>
          </div>
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(#27D7D0_1px,transparent_1px)] [background-size:40px_40px] opacity-[0.03]"></div>
        </section>

        {/* ================= Blog Grid ================= */}
        <section className="pb-32">
          <div className="max-w-6xl mx-auto px-6">
            {posts.length === 0 ? (
              <p className="text-center text-slate-400 font-bold text-lg">
                ยังไม่มีบทความในขณะนี้
              </p>
            ) : (
              <div className="grid md:grid-cols-3 gap-10 lg:gap-12">
                {posts.map((post) => (
                  <Link
                    key={post.slug}
                    href={`/blog/${post.slug}`}
                    className="group block"
                  >
                    <div className="rounded-[2rem] overflow-hidden border-[8px] border-slate-50 shadow-sm group-hover:shadow-2xl transition-all duration-500 bg-slate-100 aspect-[4/3] relative">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={post.image}
                        alt={post.imageAlt}
                        loading="lazy"
                        className="w-full h-full object-cover"
                      />
                      <span className="absolute top-5 left-5 bg-[#27D7D0] text-white px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest shadow-lg">
                        {post.category}
                      </span>
                    </div>

                    <div className="mt-6 px-1">
                      <time
                        dateTime={post.date}
                        className="text-[11px] font-black tracking-[0.2em] uppercase text-slate-400"
                      >
                        {new Date(post.date).toLocaleDateString("th-TH", {
                          day: "numeric",
                          month: "long",
                          year: "numeric",
                        })}
                      </time>
                      <h2 className="mt-2 text-xl font-black text-[#1e293b] tracking-tight group-hover:text-[#27D7D0] transition-colors leading-snug">
                        {post.title}
                      </h2>
                      <p className="mt-2 text-slate-500 font-medium text-sm leading-relaxed line-clamp-2">
                        {post.description}
                      </p>
                      <span className="mt-3 inline-block text-[#1e293b] font-black text-sm group-hover:text-[#27D7D0] transition-colors">
                        อ่านต่อ →
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </section>
      </div>
    </>
  );
}
