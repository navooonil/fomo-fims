import Link from "next/link";

export default function ProductShootPage() {
  return (
    <div className="bg-white text-gray-700 pt-10 pb-20">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-end justify-start text-left overflow-hidden bg-gray-900">
        <img
          src="https://picsum.photos/seed/product-hero/1920/1080"
          alt="Slow motion macro shot of skincare product"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>

        <div className="relative z-10 p-8 md:p-16">
          <h1 className="text-5xl md:text-7xl font-heading text-white">
            Product Stories That Sell.
          </h1>
          <p className="max-w-xl text-lg text-gray-200 mt-4">
            Clean, aesthetic, commercial-grade visuals for brands like Phocus.
            Every frame is crafted to highlight your product’s texture, purpose,
            and emotion.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4">
        {/* Captions Section */}
        <section className="py-16 text-center">
          <h2 className="text-4xl md:text-5xl font-heading text-gray-900">
            Commercial <span className="text-brand-red">+</span> Lifestyle{" "}
            <span className="text-brand-red">+</span> Packaging
          </h2>
          <p className="text-lg text-gray-600 mt-2 max-w-2xl mx-auto">
            A complete visual suite for your website, social media, and ad
            campaigns.
          </p>
        </section>

        {/* Gallery Section */}
        <section>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {/* Column 1 */}
            <div className="grid gap-4">
              <img
                className="h-auto max-w-full rounded-lg"
                src="https://picsum.photos/seed/prod1/500/800"
                alt="Clean product shot"
              />
              <img
                className="h-auto max-w-full rounded-lg"
                src="https://picsum.photos/seed/prod2/500/300"
                alt="Lifestyle product placement"
              />
              <img
                className="h-auto max-w-full rounded-lg"
                src="https://picsum.photos/seed/prod3/500/500"
                alt="Packaging shot"
              />
            </div>

            {/* Column 2 */}
            <div className="grid gap-4">
              <img
                className="h-auto max-w-full rounded-lg"
                src="https://picsum.photos/seed/prod4/500/500"
                alt="Ad-ready content"
              />
              <img
                className="h-auto max-w-full rounded-lg"
                src="https://picsum.photos/seed/prod5/500/800"
                alt="Reel-style product shot"
              />
              <img
                className="h-auto max-w-full rounded-lg"
                src="https://picsum.photos/seed/prod6/500/300"
                alt="Product in use"
              />
            </div>

            {/* Column 3 */}
            <div className="grid gap-4">
              <img
                className="h-auto max-w-full rounded-lg"
                src="https://picsum.photos/seed/prod7/500/300"
                alt="Branding visuals"
              />
              <img
                className="h-auto max-w-full rounded-lg"
                src="https://picsum.photos/seed/prod8/500/500"
                alt="Studio shot"
              />
              <img
                className="h-auto max-w-full rounded-lg"
                src="https://picsum.photos/seed/prod9/500/800"
                alt="Detailed product macro"
              />
            </div>
          </div>
        </section>

        {/* Perfect For Section */}
        <section className="py-20 text-center">
          <h2 className="text-4xl font-heading mb-8 text-gray-900">
            Perfect for...
          </h2>

          <div className="flex flex-wrap justify-center gap-4 text-gray-800">
            <span className="bg-gray-100 px-4 py-2 rounded-full font-semibold">
              Skincare Brands
            </span>
            <span className="bg-gray-100 px-4 py-2 rounded-full font-semibold">
              Lifestyle & Wellness
            </span>
            <span className="bg-gray-100 px-4 py-2 rounded-full font-semibold">
              Packaging Visuals
            </span>
            <span className="bg-gray-100 px-4 py-2 rounded-full font-semibold">
              Instagram Ads
            </span>
            <span className="bg-gray-100 px-4 py-2 rounded-full font-semibold">
              Website Hero Shots
            </span>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-16 bg-gray-50 rounded-lg">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl md:text-5xl font-heading mb-4 text-gray-900">
              Let&apos;s shoot your brand.
            </h2>
            <p className="max-w-2xl mx-auto text-lg mb-8 text-gray-600">
              Ready to create stunning visuals that make your product stand out?
            </p>

            <Link
              href="/contact"
              className="inline-block bg-brand-red text-white font-bold py-3 px-10 rounded-md hover:bg-brand-red-hover transition-all duration-300"
            >
              Book a Consultation
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
