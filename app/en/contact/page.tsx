export default function ContactPageEN() {
  return (
    <section className="bg-background py-20">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <header className="text-center mb-16">
          <h1 className="text-4xl font-bold text-brand-primary mb-4">
            Contact Us
          </h1>
          <p className="text-slate-600">
            CM Shoe Clean · Professional Shoe Care
          </p>
        </header>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h2 className="text-2xl font-semibold text-brand-primary mb-6">
              Contact Information
            </h2>

            <ul className="space-y-4 text-slate-700 mb-8">
              <li>
                Phone: <strong>095-362-0244</strong>
              </li>

              <li>
                💬 LINE:{" "}
                <a
                  href="https://line.me/R/ti/p/@708dfith"
                  target="_blank"
                  className="text-brand-primary font-medium"
                >
                  @708dfith
                </a>
              </li>

              <li>
                📘 Facebook:{" "}
                <a
                  href="https://www.facebook.com/suckgerbcnx"
                  target="_blank"
                  className="text-brand-primary font-medium"
                >
                  CM Shoe Clean
                </a>
              </li>

              <li>📍 Chiang Mai city area</li>
              <li>
                🚚 Nationwide shipping available (private courier / Thailand Post)
              </li>
            </ul>

            <a
              href="https://line.me/R/ti/p/@708dfith"
              target="_blank"
              className="inline-block bg-brand-primary text-white px-8 py-4 rounded-full font-medium hover:bg-brand-dark transition"
            >
              Contact via LINE
            </a>
          </div>

          {/* Google Maps */}
          <div>
            <h2 className="text-2xl font-semibold text-brand-primary mb-6">
              Store Location
            </h2>

            <div className="aspect-[4/3] w-full overflow-hidden rounded-2xl border border-brand-soft bg-brand-soft">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3776.5603799813234!2d98.99649889999999!3d18.8177353!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30da3be24689a1c7%3A0x57bb9237131d9646!2z4LiL4Lix4LiB4LmA4LiB4Li04Lia4LmB4Lit4LiZ4LiU4LmM4Liq4Lib4LiyIOC5gOC4iuC4teC4ouC4h-C5g-C4q-C4oeC5iCAo4LiL4Lix4LiB4Lij4Lit4LiH4LmA4LiX4LmJ4LiyKQ!5e0!3m2!1sth!2sth!4v1767880749191!5m2!1sth!2sth"
                width="100%"
                height="100%"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <p className="text-sm text-slate-500 mt-3">
              * Search for “CM Shoe Clean” on Google Maps
            </p>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-24 bg-brand-soft rounded-2xl p-10 text-center">
          <h2 className="text-2xl font-semibold text-brand-primary mb-4">
            Let Us Take Care of Your Shoes
          </h2>

          <p className="text-slate-600 mb-6">
            Send us photos of your shoes for service assessment and time estimate.
          </p>

          <a
            href="https://line.me/R/ti/p/@708dfith"
            target="_blank"
            className="inline-block bg-brand-primary text-white px-10 py-4 rounded-full font-medium hover:bg-brand-dark transition"
          >
            Send Photos via LINE
          </a>
        </div>
      </div>
    </section>
  );
}
