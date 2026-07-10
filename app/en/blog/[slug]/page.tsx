import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getAllSlugs, getPostBySlug } from "@/lib/blog";
import { mdxComponents } from "@/components/mdx-components";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return getAllSlugs("en").map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug("en", slug);

  if (!post) {
    return { title: "Article Not Found" };
  }

  return {
    title: `${post.title} | CM Shoe Clean`,
    description: post.description,
    alternates: {
      canonical: `/en/blog/${slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.description,
      images: [post.image],
      type: "article",
      publishedTime: post.date,
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getPostBySlug("en", slug);

  if (!post) {
    notFound();
  }

  return (
    <>
      {/* ================= SEO: Article Schema ================= */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: post.title,
            description: post.description,
            datePublished: post.date,
            image: `https://www.cmshoeclean.com${post.image}`,
            author: {
              "@type": "Organization",
              name: "CM Shoe Clean",
            },
          }),
        }}
      />

      <div className="bg-white font-sans">
        {/* ================= Article Header ================= */}
        <section className="pt-20 pb-12 md:pt-28 md:pb-16 text-center relative">
          <div className="container mx-auto px-6 max-w-3xl relative z-10">
            <span className="inline-block bg-[#e4f9f8] text-[#0f8a83] px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest mb-6">
              {post.category}
            </span>
            <h1 className="text-3xl md:text-5xl font-black text-[#1e293b] mb-6 tracking-tighter leading-tight">
              {post.title}
            </h1>
            <time
              dateTime={post.date}
              className="text-slate-400 font-bold text-sm uppercase tracking-widest"
            >
              {new Date(post.date).toLocaleDateString("en-US", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </time>
          </div>
        </section>

        {/* ================= Cover Image ================= */}
        <section className="max-w-4xl mx-auto px-6 mb-12">
          <div className="rounded-[2rem] md:rounded-[3rem] overflow-hidden border-[8px] md:border-[12px] border-slate-50 shadow-sm aspect-[16/9] bg-slate-100">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={post.image}
              alt={post.imageAlt}
              className="w-full h-full object-cover"
            />
          </div>
        </section>

        {/* ================= Article Body ================= */}
        <section className="pb-24">
          <div className="max-w-2xl mx-auto px-6">
            <MDXRemote source={post.content} components={mdxComponents} />
          </div>
        </section>

        {/* ================= Bottom CTA ================= */}
        <section className="pb-32">
          <div className="max-w-4xl mx-auto px-6">
            <div className="bg-[#1e293b] rounded-[3rem] md:rounded-[4rem] p-10 md:p-16 text-center text-white shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-80 h-80 bg-[#27D7D0] opacity-10 rounded-full translate-x-1/3 -translate-y-1/3"></div>
              <div className="relative z-10">
                <h2 className="text-2xl md:text-4xl font-black mb-6 tracking-tighter uppercase">
                  Ready to restore your <span className="text-[#27D7D0]">shoes?</span>
                </h2>
                <p className="text-slate-400 text-base md:text-lg mb-8 font-medium">
                  Get a free estimate via LINE. Free pick-up & delivery in Chiang Mai city.
                </p>
                <a
                  href="https://line.me/R/ti/p/@020gojbb"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-[#27D7D0] text-white px-10 py-4 rounded-full font-black text-base md:text-lg hover:scale-105 transition-all shadow-xl shadow-cyan-900/20 uppercase"
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
