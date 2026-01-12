"use client";

import Link from "next/link";
import { useState } from "react";

export default function ThaiLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* ================= Header ================= */}
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur border-b border-brand-soft">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          {/* Logo */}
          <div className="leading-tight">
            <Link
              href="/"
              className="block text-xl sm:text-2xl font-extrabold tracking-tight text-brand-primary"
            >
              ซักเกิบแอนด์สปา

              {/* Desktop subtitle */}
              <span className="hidden sm:block text-base font-semibold text-brand-accent">
                CM Shoe Clean
              </span>

              {/* Mobile subtitle */}
              <span className="block sm:hidden text-sm font-semibold text-brand-accent">
                CM Shoe Clean
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <nav className="flex gap-6 text-sm">
              <Link href="/">Home</Link>
              <Link href="/services">Services</Link>
              <Link href="/gallery">Gallery</Link>
              <Link href="/reviews">Reviews</Link>
              <Link href="/contact">Contact</Link>
            </nav>

            {/* Language Switcher (Desktop) */}
            <div className="flex items-center gap-3 text-sm border-l border-slate-300 pl-4">
              <span className="font-medium text-brand-primary">TH</span>
              <span className="text-slate-400">|</span>
              <Link href="/en" className="hover:text-brand-primary">
                EN
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-brand-primary text-2xl"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            ☰
          </button>
        </div>

        {/* ================= Mobile Menu ================= */}
        {open && (
          <div className="md:hidden bg-background border-t border-brand-soft">
            <nav className="flex flex-col px-6 py-4 gap-4 text-sm">
              <Link href="/" onClick={() => setOpen(false)}>
                Home
              </Link>
              <Link href="/services" onClick={() => setOpen(false)}>
                Services
              </Link>
              <Link href="/gallery" onClick={() => setOpen(false)}>
                Gallery
              </Link>
              <Link href="/reviews" onClick={() => setOpen(false)}>
                Reviews
              </Link>
              <Link href="/contact" onClick={() => setOpen(false)}>
                Contact
              </Link>

              {/* Language Switcher (Mobile) */}
              <div className="pt-4 border-t flex gap-3">
                <span className="font-medium text-brand-primary">TH</span>
                <span className="text-slate-400">|</span>
                <Link href="/en">EN</Link>
              </div>
            </nav>
          </div>
        )}
      </header>

      {/* ================= Main ================= */}
      <main>{children}</main>

      {/* ================= Footer ================= */}
      <footer className="bg-brand-dark text-white mt-24">
        <div className="max-w-6xl mx-auto px-6 py-10 text-sm text-brand-soft">
          <p>© 2024 ซักเกิบแอนด์สปา · CM Shoe Clean</p>
          <p>บริการซักรองเท้าและสปารองเท้าในเชียงใหม่</p>
        </div>
      </footer>
    </>
  );
}
