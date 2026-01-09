import GalleryImage from "@/components/GalleryImage";

export default function GalleryPage() {
  return (
    <section className="bg-background py-20">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <h1 className="text-4xl font-bold text-brand-primary mb-4">
            ผลงานของเรา
          </h1>
          <p className="text-slate-600">
            ตัวอย่างผลงานซักรองเท้าและสปารองเท้า จากลูกค้าจริง
          </p>
        </div>

        {/* Gallery */}
        <div className="space-y-20">
          <GalleryItem
            title="รองเท้าผ้าใบ"
            before="/images/gallery/sneaker-before-1.jpg"
            after="/images/gallery/sneaker-after-2.jpg"
          />

          <GalleryItem
            title="รองเท้าหนัง"
            before="/images/gallery/leather-before.jpg"
            after="/images/gallery/leather-after.jpg"
          />

          <GalleryItem
            title="รองเท้าแบรนด์เนม"
            before="/images/gallery/brandname-before.jpg"
            after="/images/gallery/brandname-after.jpg"
          />

          <GalleryItem
            title="รองเท้าหนังกลับ"
            before="/images/gallery/suede-before.jpg"
            after="/images/gallery/suede-after.jpg"
          />

          <GalleryItem
            title="Birkenstock"
            before="/images/gallery/Birkenstock-before.jpg"
            after="/images/gallery/Birkenstock-after.jpg"
          />

          <GalleryItem
            title="แก้รา"
            before="/images/gallery/mold-before.jpg"
            after="/images/gallery/mold-after.jpg"
          />

          <GalleryItem
            title="แก้สีตก"
            before="/images/gallery/Discoloration-before.jpg"
            after="/images/gallery/Discoloration-after.jpg"
          />
        </div>

        {/* CTA */}
        <div className="mt-28 text-center">
          <h2 className="text-2xl font-semibold text-brand-primary mb-6">
            อยากให้รองเท้าคู่โปรดกลับมาสะอาดเหมือนใหม่?
          </h2>

          <a
            href="https://line.me/R/ti/p/@708dfith"
            target="_blank"
            className="inline-block bg-brand-primary text-white px-10 py-4 rounded-full font-medium hover:bg-brand-dark transition"
          >
            ติดต่อ LINE เพื่อประเมินราคา
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
            alt={`${title} ก่อนทำความสะอาด`}
          />
        </div>

        {/* After */}
        <div className="text-center">
          <span className="inline-block mb-4 text-sm uppercase tracking-wide font-semibold text-slate-600">
             After
          </span>
          <GalleryImage
            src={after}
            alt={`${title} หลังทำความสะอาด`}
          />
        </div>
      </div>
    </div>
  );
}
