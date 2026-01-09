export default function ReviewsPageEN() {
  return (
    <section className="bg-background py-20">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <header className="text-center mb-16">
          <h1 className="text-4xl font-bold text-brand-primary mb-4">
            Customer Reviews
          </h1>
          <p className="text-slate-600">
            Trusted by customers who use CM Shoe Clean services
          </p>
        </header>

        {/* Highlight Reviews (Text) */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          <ReviewCard
            name="Customer from Chiang Mai"
            text="Excellent service and very clean results. Stains were completely removed and the shoes kept their original shape. The staff gave good advice and the free pick-up and delivery service was very convenient. Very impressed and will definitely use the service again."
          />
          <ReviewCard
            name="Customer from Bangkok"
            text="Shoes came back extremely clean. Stains were gone and the work was very detailed. It felt like getting a brand new pair. Reasonable price. Highly recommended."
          />
          <ReviewCard
            name="Regular Customer"
            text="This is my favorite shoe cleaning shop. The service is excellent, from cleaning and ozone treatment to yellow sole removal. The shoes always look like new. Pick-up and delivery service is very convenient, prices are affordable, and the owner is very friendly."
          />
        </div>

        {/* Google Reviews Embed */}
        <div className="bg-brand-soft rounded-2xl p-8 mb-20">
          <h2 className="text-2xl font-semibold text-brand-primary mb-6 text-center">
            Google Reviews
          </h2>

          <div className="aspect-[4/3] w-full overflow-hidden rounded-xl bg-white">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3776.5603799813234!2d98.99649889999999!3d18.8177353!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30da3be24689a1c7%3A0x57bb9237131d9646!2z4LiL4Lix4LiB4LmA4LiB4Li04Lia4LmB4Lit4LiZ4LiU4LmM4Liq4Lib4LiyIOC5gOC4iuC4teC4ouC4h-C5g-C4q-C4oeC5iCAo4LiL4Lix4LiB4Lij4Lit4LiH4LmA4LiX4LmJ4LiyKQ!5e0!3m2!1sen!2sth!4v1767880749191!5m2!1sen!2sth"
              width="100%"
              height="100%"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          <p className="text-center text-slate-500 mt-4 text-sm">
            * All reviews are from Google Maps
          </p>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-brand-primary mb-6">
            Ready to Use a Trusted Shoe Cleaning Service?
          </h2>

          <a
            href="https://line.me/R/ti/p/@708dfith"
            target="_blank"
            className="inline-block bg-brand-primary text-white px-10 py-4 rounded-full font-medium hover:bg-brand-dark transition"
          >
            Contact via LINE
          </a>
        </div>
      </div>
    </section>
  );
}

function ReviewCard({
  name,
  text,
}: {
  name: string;
  text: string;
}) {
  return (
    <div className="bg-white border border-brand-soft rounded-2xl p-6">
      <p className="text-slate-600 mb-4">“{text}”</p>
      <p className="text-sm text-brand-primary font-medium">
        — {name}
      </p>
    </div>
  );
}
