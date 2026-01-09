import Image from "next/image";
import Script from "next/script";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shoe Cleaning Service in Chiang Mai | CM Shoe Clean",
  description:
    "Professional shoe cleaning and shoe care service in Chiang Mai. Established since 2019. Free pick-up & delivery within Chiang Mai city. Nationwide shipping available.",
};

export default function HomeEN() {
  return (
    <>
      {/* SEO: LocalBusiness Structured Data (EN) */}
      <Script
        id="local-business-schema-en"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "CM Shoe Clean",
            image: "https://cmshoeclean.com/og.jpg",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Chiang Mai",
              addressCountry: "TH",
            },
            telephone: "+66953620244",
            url: "https://cmshoeclean.com/en",
            sameAs: [
              "https://www.facebook.com/ซักเกิบแอนด์สปา",
              "https://line.me/R/ti/p/@708dfith",
            ],
          }),
        }}
      />

      {/* HERO */}
      <section className="min-h-[90vh] flex">
        {/* Image */}
        <div className="hidden lg:block w-1/2 relative">
          <Image
            src="/images/Hero1.jpg"
            alt="Professional Shoe Cleaning Service in Chiang Mai"
            fill
            priority
            className="object-cover"
          />
        </div>

        {/* Content */}
        <div className="w-full lg:w-1/2 flex items-center px-8 lg:px-20">
          <div>
            <h1 className="text-5xl md:text-6xl font-bold text-brand-primary mb-6">
              CM Shoe Clean
            </h1>

            <p className="text-brand-accent text-lg mb-4">
              Professional Shoe Cleaning & Care
            </p>

            <p className="max-w-md text-base md:text-lg text-slate-700 mb-10 leading-relaxed space-y-1">
              <span className="block">
                Professional shoe cleaning service for all types of shoes.
              </span>
              <span className="block">
                Established in 2019 and handled by experienced specialists.
              </span>
              <span className="block">
                Every pair is carefully cleaned to extend the life of your shoes.
              </span>
              <span className="block font-medium text-slate-800">
                Free pick-up & delivery within Chiang Mai city.
              </span>
            </p>

            <div className="flex gap-4 flex-wrap">
              <a
                href="https://line.me/R/ti/p/@708dfith"
                target="_blank"
                className="bg-brand-primary text-white px-8 py-4 rounded-full font-medium hover:bg-brand-dark transition"
              >
                Contact via LINE
              </a>

              <a
                href="/en/services"
                className="border border-brand-primary text-brand-primary px-8 py-4 rounded-full hover:bg-brand-primary hover:text-white transition"
              >
                View Services
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-4 gap-6">
          {[
            {
              title: "✓ Experience since 2019",
              desc: "Trusted shoe care for various materials and brands.",
            },
            {
              title: "✓ Individual assessment",
              desc: "Each pair is evaluated and cleaned with the right method.",
            },
            {
              title: "✓ Professional solutions",
              desc: "Safe cleaning products for color and shoe structure.",
            },
            {
              title: "✓ Free pick-up & delivery",
              desc: "Convenient service within Chiang Mai city.",
            },
          ].map((item, i) => (
            <div key={i} className="border border-slate-200 p-6">
              <h3 className="font-semibold text-brand-primary mb-2">
                {item.title}
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-dark/90 py-20 text-center">
        <h2 className="text-3xl font-bold text-white mb-6">
          Let Us Take Care of Your Favorite Shoes
        </h2>

        <p className="text-brand-accent mb-10">
          Contact us for shoe condition assessment and service recommendations.
        </p>

        <a
          href="https://line.me/R/ti/p/@708dfith"
          target="_blank"
          className="bg-white text-brand-primary px-10 py-4 rounded-full font-semibold hover:bg-brand-soft transition"
        >
          Contact via LINE
        </a>
      </section>
    </>
  );
}
