import GalleryImage from "@/components/GalleryImage";

export default function GalleryPageEN() {
  return (
    <section className="bg-background py-20">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <h1 className="text-4xl font-bold text-brand-primary mb-4">
            Our Work
          </h1>
          <p className="text-slate-600">
            Before & after examples of shoe cleaning and shoe care from real customers
          </p>
        </div>

        {/* Gallery */}
        <div className="space-y-20">
          <GalleryItem
            title="Sneakers"
            before="/images/gallery/sneaker-before-1.jpg"
            after="/images/gallery/sneaker-after-2.jpg"
          />

          <GalleryItem
            title="Leather Shoes"
            before="/images/gallery/leather-before.jpg"
            after="/images/gallery/leather-after.jpg"
          />

          <GalleryItem
            title="Luxury & Brand Name Shoes"
            before="/images/gallery/brandname-before.jpg"
            after="/images/gallery/brandname-after.jpg"
          />

          <GalleryItem
            title="Suede Shoes"
            before="/images/gallery/suede-before.jpg"
            after="/images/gallery/suede-after.jpg"
          />

          <GalleryItem
            title="Birkenstock"
            before="/images/gallery/Birkenstock-before.jpg"
            after="/images/gallery/Birkenstock-after.jpg"
          />

          <GalleryItem
            title="Mold Removal"
            before="/images/gallery/mold-before.jpg"
            after="/images/gallery/mold-after.jpg"
          />

          <GalleryItem
            title="Color Restoration"
            before="/images/gallery/Discoloration-before.jpg"
            after="/images/gallery/Discoloration-after.jpg"
          />
        </div>

        {/* CTA */}
        <div className="mt-28 text-center">
          <h2 className="text-2xl font-semibold text-brand-primary mb-6">
            Want Your Shoes to Look Clean Like New Again?
          </h2>

          <a
            href="https://line.me/R/ti/p/@708dfith"
            target="_blank"
            className="inline-block bg-brand-primary text-white px-10 py-4 rounded-full font-medium hover:bg-brand-dark transition"
          >
            Contact via LINE for Assessment
          </a>
        </div>
      </div>
    </section>
  );
}

/* =======================
   Gallery Item
======================= */
function GalleryItem({
  title,
  before,
  after,
}: {
  title: string;
  before: string;
  after: string;
}) {
  return (
    <div>
      <h3 className="text-xl font-semibold text-brand-primary mb-8">
        {title}
      </h3>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Before */}
        <div className="text-center">
          <span className="inline-block mb-4 text-sm uppercase tracking-wide font-semibold text-slate-600">
            Before
          </span>
          <GalleryImage
            src={before}
            alt={`${title} before cleaning`}
          />
        </div>

        {/* After */}
        <div className="text-center">
          <span className="inline-block mb-4 text-sm uppercase tracking-wide font-semibold text-slate-600">
            After
          </span>
          <GalleryImage
            src={after}
            alt={`${title} after cleaning`}
          />
        </div>
      </div>
    </div>
  );
}
