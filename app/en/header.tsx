"use client";

import Link from "next/link";
import { useState } from "react";

export default function HeaderEN() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur border-b border-brand-soft">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <Link
          href="/en"
          className="block leading-tight text-xl sm:text-2xl font-extrabold tracking-tight text-brand-primary"
        >
          CM Shoe Clean
          <span className="block text-sm sm:text-base font-semibold text-brand-accent">
            Shoe Cleaning Service
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          <nav className="flex gap-6 text-sm">
            <Link href="/en">Home</Link>
            <Link href="/en/services">Services</Link>
            <Link href="/en/gallery">Gallery</Link>
            <Link href="/en/reviews">Reviews</Link>
            <Link href="/en/contact">Contact</Link>
          </nav>

          <div className="flex items-center gap-3 text-sm border-l border-slate-300 pl-4">
            <Link href="/" className="hover:text-brand-primary">TH</Link>
            <span className="text-slate-400">|</span>
            <span className="font-medium text-brand-primary">EN</span>
          </div>
        </div>

        {/* Mobile Button */}
        <button
          className="md:hidden text-2xl text-brand-primary"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-background border-t border-brand-soft">
          <nav className="flex flex-col px-6 py-4 gap-4 text-sm">
            <Link href="/en" onClick={() => setOpen(false)}>Home</Link>
            <Link href="/en/services" onClick={() => setOpen(false)}>Services</Link>
            <Link href="/en/gallery" onClick={() => setOpen(false)}>Gallery</Link>
            <Link href="/en/reviews" onClick={() => setOpen(false)}>Reviews</Link>
            <Link href="/en/contact" onClick={() => setOpen(false)}>Contact</Link>

            <div className="pt-4 border-t flex gap-3">
              <Link href="/">TH</Link>
              <span className="text-slate-400">|</span>
              <span className="font-medium text-brand-primary">EN</span>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
