// components/mdx-components.tsx
// กำหนดสไตล์ให้ HTML tag ที่เกิดจากการ render MDX (h2, p, ul, img ฯลฯ)
// ให้เข้ากับธีมเว็บ cmshoeclean (teal #27D7D0 / navy #1e293b)
// ใช้ร่วมกับ next-mdx-remote/rsc: <MDXRemote source={...} components={mdxComponents} />

import type { MDXComponents } from "mdx/types";

export const mdxComponents: MDXComponents = {
  h2: (props) => (
    <h2
      className="text-2xl md:text-3xl font-black text-[#1e293b] mt-14 mb-5 tracking-tight"
      {...props}
    />
  ),
  h3: (props) => (
    <h3
      className="text-xl md:text-2xl font-black text-[#1e293b] mt-10 mb-4 tracking-tight"
      {...props}
    />
  ),
  p: (props) => (
    <p
      className="text-slate-600 text-base md:text-lg leading-relaxed mb-6 font-medium"
      {...props}
    />
  ),
  ul: (props) => (
    <ul
      className="list-none space-y-3 mb-6 pl-0"
      {...props}
    />
  ),
  li: (props) => (
    <li className="flex items-start gap-3 text-slate-600 text-base md:text-lg leading-relaxed font-medium">
      <span className="w-2 h-2 rounded-full bg-[#27D7D0] mt-2.5 flex-shrink-0"></span>
      <span {...props} />
    </li>
  ),
  strong: (props) => (
    <strong className="font-black text-[#1e293b]" {...props} />
  ),
  a: (props) => (
    <a
      className="text-[#27D7D0] font-bold underline decoration-2 underline-offset-2 hover:text-[#1e293b] transition-colors"
      {...props}
    />
  ),
  blockquote: (props) => (
    <blockquote
      className="border-l-4 border-[#27D7D0] bg-[#f0fdfc] rounded-r-2xl px-6 py-4 my-8 text-slate-700 font-medium italic"
      {...props}
    />
  ),
  // eslint-disable-next-line @next/next/no-img-element
  img: (props) => (
    <img
      className="rounded-[2rem] border-[8px] border-slate-50 shadow-sm w-full my-10"
      loading="lazy"
      {...props}
      alt={props.alt ?? ""}
    />
  ),
};
