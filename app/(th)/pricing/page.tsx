export default function PricingPage() {
  return (
    <section className="bg-background py-20">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <header className="text-center mb-16">
          <h1 className="text-4xl font-bold text-brand-primary mb-4">
            อัตราค่าบริการ
          </h1>
          <p className="text-slate-600">
            ราคาเริ่มต้น ขึ้นอยู่กับประเภทและสภาพรองเท้า
          </p>
        </header>

        {/* Pricing Table */}
        <div className="grid md:grid-cols-3 gap-8">
          <PriceCard
            title="ซักรองเท้า"
            price="เริ่มต้น 250 บาท"
            items={[
              "รองเท้าผ้าใบ / สนีกเกอร์",
              "รองเท้าผ้า",
              "รองเท้าแบรนด์",
            ]}
          />

          <PriceCard
            title="สปารองเท้า"
            price="เริ่มต้น 500 บาท"
            items={[
              "ขจัดคราบลึก",
              "ฟื้นฟูวัสดุรองเท้า",
              "เหมาะกับรองเท้าพรีเมียม",
            ]}
            highlight
          />

          <PriceCard
            title="บริการด่วน"
            price="สอบถามเพิ่มเติม"
            items={[
              "ระยะเวลาขึ้นอยู่กับงาน",
              "มีค่าใช้จ่ายเพิ่มเติม",
              "กรุณาติดต่อก่อนใช้บริการ",
            ]}
          />
        </div>

        {/* Note */}
        <div className="mt-16 bg-brand-soft rounded-2xl p-8 text-center">
          <p className="text-slate-600 mb-6">
            * ราคาข้างต้นเป็นราคาเริ่มต้น  
            * กรุณาส่งรูปเพื่อประเมินราคาและระยะเวลา
          </p>

          <a
            href="https://line.me/R/ti/p/@708dfith"
            target="_blank"
            className="inline-block bg-brand-primary text-white px-10 py-4 rounded-full font-medium hover:bg-brand-dark transition"
          >
            ส่งรูปประเมินราคา
          </a>
        </div>
      </div>
    </section>
  );
}

function PriceCard({
  title,
  price,
  items,
  highlight = false,
}: {
  title: string;
  price: string;
  items: string[];
  highlight?: boolean;
}) {
  return (
    <div
      className={`rounded-2xl p-8 border ${
        highlight
          ? "border-brand-primary bg-brand-soft"
          : "border-brand-soft bg-white"
      }`}
    >
      <h2 className="text-xl font-semibold text-brand-primary mb-4">
        {title}
      </h2>

      <p className="text-2xl font-bold mb-6">
        {price}
      </p>

      <ul className="space-y-2 text-slate-600">
        {items.map((item) => (
          <li key={item}>• {item}</li>
        ))}
      </ul>
    </div>
  );
}
