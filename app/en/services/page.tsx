import Image from "next/image";

export default function ServicesPageEN() {
  return (
    <section className="bg-background py-20">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <header className="mb-16 text-center">
          <h1 className="text-4xl font-bold text-brand-primary mb-4">
            Our Services
          </h1>
          <p className="text-slate-600 md:text-lg max-w-2xl mx-auto">
            Professional shoe cleaning and care services <br />
            Each pair is individually assessed to select the most suitable
            cleaning method <br />
            Free pick-up & delivery within Chiang Mai city
          </p>
        </header>

        {/* Main Services */}
        <section className="mb-20">
          <h2 className="text-2xl font-semibold text-brand-primary mb-8">
            Shoe Cleaning Services
          </h2>

          <div className="mb-10 bg-brand-primary/90 backdrop-blur-md px-6 py-4 text-center">
            <p className="text-sm text-white font-medium">
              Standard service <span className="font-semibold">3–5 days</span>
              <span className="mx-2 text-white/60">•</span>
              Express service{" "}
              <span className="font-semibold text-amber-300">1 day</span>
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <ServiceItem
              image="/images/services/nike.jpg"
              title="Sneakers & Canvas Shoes"
              desc="Gentle cleaning suitable for everyday shoes and sneakers."
            />

            <ServiceItem
              image="/images/services/suede.jpg"
              title="Suede Shoes"
              desc="Special techniques for suede materials to reduce color and texture damage."
            />

            <ServiceItem
              image="/images/services/leather.jpg"
              title="Leather Shoes"
              desc="Careful stain removal and surface treatment to restore leather condition."
            />

            <ServiceItem
              image="/images/services/boot.jpg"
              title="Leather Boots"
              desc="Proper care for high-cut shoes and thick materials, suitable for boot structures."
            />

            <ServiceItem
              image="/images/services/brand.jpg"
              title="Luxury & Brand Name Shoes"
              desc="Special assessment and cleaning methods based on material and shoe value."
            />

            <ServiceItem
              image="/images/services/other.jpg"
              title="Other Shoe Types"
              desc="Please contact us for evaluation and suitable care recommendations."
            />
          </div>
        </section>

        {/* Extra Services */}
        <section className="mb-20">
          <h2 className="text-2xl font-semibold text-brand-primary mb-8">
            Extra Services
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <ServiceItemText
              title="Yellow Sole Removal"
              desc="Reduce yellow stains on shoe soles for a cleaner appearance."
              highlight
            />
            <ServiceItemText
              title="Foam Edge Touch-Up"
              desc="Detail touch-up on foam edges for a neat and refreshed look."
              highlight
            />
            <ServiceItemText
              title="Water Repellent Coating"
              desc="Helps protect shoes from moisture and daily dirt."
              highlight
            />
            <ServiceItemText
              title="Shoelace Replacement"
              desc="Replace worn shoelaces to refresh the overall appearance of your shoes."
              highlight
            />
          </div>
        </section>

        {/* Note */}
        <p className="text-center text-lg md:text-xl font-medium text-slate-700 mb-12 leading-relaxed">
          Every service includes a shoe condition assessment before cleaning <br />
          to ensure suitability and minimize risk to your shoes
        </p>

        {/* CTA */}
        <div className="text-center">
          <a
            href="https://line.me/R/ti/p/@708dfith"
            target="_blank"
            className="inline-block bg-brand-primary text-white px-10 py-4 rounded-full font-medium hover:bg-brand-dark transition"
          >
            Contact via LINE for Service Inquiry
          </a>
        </div>
      </div>
    </section>
  );
}

/* =======================
   Service Item
======================= */
function ServiceItem({
  image,
  title,
  desc,
  contain = false,
}: {
  image: string;
  title: string;
  desc: string;
  contain?: boolean;
}) {
  return (
    <div className="bg-white border border-brand-soft hover:border-brand-primary transition overflow-hidden">
      {/* Image */}
      <div className="relative aspect-[4/3]">
        <Image
          src={image}
          alt={title}
          fill
          className={contain ? "object-contain" : "object-cover"}
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>

      {/* Divider */}
      <div className="border-t border-slate-200" />

      {/* Content */}
      <div className="p-6">
        <h3 className="font-medium text-brand-primary mb-2">
          {title}
        </h3>
        <p className="text-sm leading-relaxed text-slate-600">
          {desc}
        </p>
      </div>
    </div>
  );
}

function ServiceItemText({
  title,
  desc,
  highlight = false,
}: {
  title: string;
  desc: string;
  highlight?: boolean;
}) {
  return (
    <div
      className={`border p-6 transition ${
        highlight
          ? "bg-slate-50 border-slate-200"
          : "bg-white border-brand-soft hover:border-brand-primary"
      }`}
    >
      <h3 className="font-medium text-brand-primary mb-2">
        {title}
      </h3>
      <p className="text-slate-600 text-sm leading-relaxed">
        {desc}
      </p>
    </div>
  );
}
