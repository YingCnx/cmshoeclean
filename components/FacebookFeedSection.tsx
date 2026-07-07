// components/FacebookFeedSection.tsx
// ส่วนแสดงฟีด Facebook ที่ออกแบบให้เข้ากับธีมเว็บ cmshoeclean (teal #27D7D0 / navy #1e293b)
// ใช้เป็น Server Component (เรียก async ตรงๆ ได้ ไม่ต้องมี "use client")

import { getFacebookPosts, type FacebookPost } from "@/lib/facebook";

function formatThaiDate(isoDate: string): string {
  return new Date(isoDate).toLocaleDateString("th-TH", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

function truncateMessage(message: string, maxLength = 120): string {
  if (message.length <= maxLength) return message;
  return message.slice(0, maxLength).trimEnd() + "…";
}

function FacebookPostCard({ post }: { post: FacebookPost }) {
  return (
    <a
      href={post.permalink_url ?? "#"}
      target="_blank"
      rel="noopener noreferrer"
      className="group/fb block"
    >
      <div className="relative">
        {post.full_picture ? (
          <div className="rounded-[2rem] overflow-hidden border-[8px] border-slate-50 shadow-sm group-hover/fb:shadow-2xl transition-all duration-500 bg-slate-100 aspect-[4/3]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={post.full_picture}
              alt=""
              loading="lazy"
              className="w-full h-full object-cover"
            />
          </div>
        ) : (
          <div className="rounded-[2rem] border-[8px] border-slate-50 shadow-sm bg-[#1e293b] aspect-[4/3] flex items-center justify-center p-8">
            <p className="text-white font-bold text-center text-sm leading-relaxed line-clamp-5">
              {post.message ? truncateMessage(post.message, 140) : "ดูโพสต์นี้บน Facebook"}
            </p>
          </div>
        )}
      </div>

      <div className="mt-5 px-1">
        <time
          dateTime={post.created_time}
          className="text-[11px] font-black tracking-[0.2em] uppercase text-[#27D7D0]"
        >
          {formatThaiDate(post.created_time)}
        </time>
        {post.message ? (
          <p className="mt-2 text-slate-500 font-medium text-sm leading-relaxed line-clamp-2">
            {truncateMessage(post.message)}
          </p>
        ) : null}
      </div>
    </a>
  );
}

export default async function FacebookFeedSection() {
  let posts: FacebookPost[] = [];

  try {
    posts = await getFacebookPosts(3);
  } catch {
    // ถ้าดึงฟีดไม่สำเร็จ (token หมดอายุ, network ฯลฯ) ให้ซ่อนทั้งส่วนนี้ไปเลย
    // ไม่ให้กระทบหน้า Gallery หลัก ไม่ต้องโชว์ error ให้ลูกค้าเห็น
    return null;
  }

  if (posts.length === 0) return null;

  return (
    <div className="mt-40">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div className="text-center md:text-left">
          <div className="flex items-center gap-3 text-[#27D7D0] font-black text-xs tracking-[0.3em] mb-4 justify-center md:justify-start">
            <span className="w-2 h-2 bg-[#27D7D0] rounded-full animate-pulse"></span>
            LIVE FROM FACEBOOK
          </div>
          <h3 className="text-4xl font-black text-[#1e293b] tracking-tight">
            ผลงานล่าสุดจาก <span className="text-[#27D7D0]">เพจ Facebook</span> ของเรา
          </h3>
          <p className="text-slate-400 font-bold text-base mt-1">
            อัปเดตสดจากหน้าเพจ ไม่ต้องรอเพจ Gallery
          </p>
        </div>
        <div className="hidden lg:block h-[2px] bg-slate-100 flex-grow mx-10 mb-5 relative overflow-hidden">
          <div className="absolute inset-0 bg-[#27D7D0] -translate-x-full group-hover:translate-x-0 transition-transform duration-700"></div>
        </div>
        <a
          href="https://www.facebook.com/suckgerbcnx"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex items-center gap-2 text-[#1e293b] font-black text-sm tracking-wide hover:text-[#27D7D0] transition-colors mb-5 whitespace-nowrap"
        >
          ดูเพจเต็ม →
        </a>
      </div>

      <div className="grid md:grid-cols-3 gap-10 lg:gap-12">
        {posts.map((post) => (
          <FacebookPostCard key={post.id} post={post} />
        ))}
      </div>

      <div className="mt-8 text-center md:hidden">
        <a
          href="https://www.facebook.com/suckgerbcnx"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-[#1e293b] font-black text-sm tracking-wide"
        >
          ดูเพจ Facebook เต็ม →
        </a>
      </div>
    </div>
  );
}
