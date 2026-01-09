import Link from "next/link";

export default function ThaiLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* ================= Header ================= */}
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur border-b border-brand-soft">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          {/* Logo */}
          <div className="leading-tight">
            <Link
              href="/"
              className="block text-2xl font-extrabold tracking-tight text-brand-primary"
            >
              ซักเกิบแอนด์สปา
              <span className="block text-base font-semibold text-brand-accent">
                CM Shoe Clean
              </span>
            </Link>
          </div>

          {/* Navigation + Language */}
          <div className="flex items-center gap-6">
            <nav className="flex gap-6 text-sm">
              <Link href="/">Home</Link>
              <Link href="/services">Services</Link>
              <Link href="/gallery">Gallery</Link>
              <Link href="/reviews">Reviews</Link>
              <Link href="/contact">Contact</Link>
            </nav>

            {/* Language Switcher */}
            <div className="flex items-center gap-3 text-sm border-l border-slate-300 pl-4">
              <span className="font-medium text-brand-primary">TH</span>
              <span className="text-slate-400">|</span>
              <Link href="/en" className="hover:text-brand-primary">
                EN
              </Link>
            </div>
          </div>
        </div>
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
