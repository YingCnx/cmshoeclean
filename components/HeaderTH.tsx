"use client";

import Link from "next/link";
import { useState } from "react";

export default function HeaderTH() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-slate-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
        {/* Logo */}
        <div className="leading-tight">
          <Link href="/" className="group block">
            <span className="text-2xl sm:text-3xl font-black tracking-tighter text-[#1e293b] group-hover:text-[#27D7D0] transition-colors">
              ซักเกิบ <span className="text-[#27D7D0]">แอนด์สปา</span>
            </span>
            <span className="block text-[10px] font-bold tracking-[0.3em] text-slate-400 uppercase mt-1">
              CM Shoe Clean Chiang Mai
            </span>
          </Link>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <nav className="flex gap-8 text-[13px] font-bold uppercase tracking-widest text-slate-600">
            <Link href="/" className="hover:text-[#27D7D0] transition-colors">Home</Link>
            <Link href="/services" className="hover:text-[#27D7D0] transition-colors">Services</Link>
            <Link href="/gallery" className="hover:text-[#27D7D0] transition-colors">Gallery</Link>
            <Link href="/reviews" className="hover:text-[#27D7D0] transition-colors">Reviews</Link>
            <Link href="/contact" className="hover:text-[#27D7D0] transition-colors">Contact</Link>
          </nav>

          <div className="flex items-center gap-6 border-l border-slate-200 pl-8">
            <div className="flex gap-2 text-xs font-bold">
              <span className="text-[#27D7D0]">TH</span>
              <span className="text-slate-300">/</span>
              <Link href="/en" className="text-slate-400 hover:text-[#1e293b]">EN</Link>
            </div>
            <a 
              href="https://line.me/R/ti/p/@708dfith" 
              className="bg-[#27D7D0] text-white px-8 py-3 rounded-full font-black text-[11px] tracking-widest hover:bg-[#1fbdb7] shadow-lg shadow-cyan-100 transition-all uppercase"
            >
              Get Service
            </a>
          </div>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-2xl text-[#1e293b]" onClick={() => setOpen(!open)}>
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-slate-100 p-8 flex flex-col gap-6 text-sm font-bold uppercase tracking-widest text-[#1e293b]">
          <Link href="/" onClick={() => setOpen(false)}>Home</Link>
          <Link href="/services" onClick={() => setOpen(false)}>Services</Link>
          <Link href="/gallery" onClick={() => setOpen(false)}>Gallery</Link>
          <Link href="/reviews" onClick={() => setOpen(false)}>Reviews</Link>
          <Link href="/contact" onClick={() => setOpen(false)}>Contact</Link>
          <div className="pt-6 border-t border-slate-100 flex justify-between items-center">
             <div className="flex gap-4">
                <span className="text-[#27D7D0]">TH</span>
                <Link href="/en" className="text-slate-400">EN</Link>
             </div>
             <a href="https://line.me/R/ti/p/@708dfith" className="text-[#27D7D0]">LINE US</a>
          </div>
        </div>
      )}
    </header>
  );
}