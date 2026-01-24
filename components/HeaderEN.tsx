"use client";

import Link from "next/link";
import { useState } from "react";

export default function HeaderEN() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-slate-100 shadow-sm font-sans">
      <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
        <div className="leading-tight">
          <Link href="/en" className="group block">
            <span className="text-2xl sm:text-3xl font-black tracking-tighter text-[#1e293b] group-hover:text-[#27D7D0] transition-colors uppercase">
              CM <span className="text-[#27D7D0]">Shoe Clean</span>
            </span>
            <span className="block text-[10px] font-bold tracking-[0.3em] text-slate-400 uppercase mt-1">
              Premium Shoe Spa Chiang Mai
            </span>
          </Link>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <nav className="flex gap-8 text-[13px] font-bold uppercase tracking-widest text-slate-600">
            <Link href="/en" className="hover:text-[#27D7D0]">Home</Link>
            <Link href="/en/services" className="hover:text-[#27D7D0]">Services</Link>
            <Link href="/en/gallery" className="hover:text-[#27D7D0]">Gallery</Link>
            <Link href="/en/reviews" className="hover:text-[#27D7D0]">Reviews</Link>
            <Link href="/en/contact" className="hover:text-[#27D7D0]">Contact</Link>
          </nav>

          <div className="flex items-center gap-6 border-l border-slate-200 pl-8">
            <div className="flex gap-2 text-xs font-bold uppercase">
              <Link href="/" className="text-slate-400 hover:text-[#1e293b]">TH</Link>
              <span className="text-slate-300">/</span>
              <span className="text-[#27D7D0]">EN</span>
            </div>
            <a href="https://line.me/R/ti/p/@708dfith" target="_blank" className="bg-[#1e293b] text-white px-8 py-3 rounded-full font-black text-[11px] tracking-widest hover:bg-[#27D7D0] transition-all uppercase shadow-lg shadow-slate-200">
              Book Now
            </a>
          </div>
        </div>

        <button className="md:hidden text-2xl" onClick={() => setOpen(!open)}>
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-slate-100 p-8 flex flex-col gap-6 text-sm font-bold uppercase tracking-widest animate-in slide-in-from-top">
          <Link href="/en" onClick={() => setOpen(false)}>Home</Link>
          <Link href="/en/services" onClick={() => setOpen(false)}>Services</Link>
          <Link href="/en/gallery" onClick={() => setOpen(false)}>Gallery</Link>
          <Link href="/en/contact" onClick={() => setOpen(false)}>Contact</Link>
          <div className="pt-6 border-t flex justify-between items-center font-black">
             <div className="flex gap-4">
                <Link href="/" className="text-slate-400">TH</Link>
                <span className="text-[#27D7D0]">EN</span>
             </div>
             <a href="https://line.me/R/ti/p/@708dfith" className="text-[#27D7D0]">LINE US</a>
          </div>
        </div>
      )}
    </header>
  );
}