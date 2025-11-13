import Link from "next/link";

type Testimonial = {
  quote: string;
  author: string;
  role?: string;
};

const creatorTestimonials: Testimonial[] = [
  {
    quote:
      "Their editing transformed my vlogs. The pacing and color grading are next level. My audience noticed the quality jump immediately.",
    author: "Lifestyle Vlogger",
  },
  {
    quote:
      "Finally found a team that gets storytelling. They helped me structure my travel series and the final product was breathtaking.",
    author: "Travel YouTuber",
  },
  {
    quote:
      "Fast, professional, and incredibly creative. They took my raw footage and turned it into something truly cinematic.",
    author: "Fitness Creator",
  },
];

const creatorServices = [
  {
    title: "Cinematic Editing",
    text: "Vlog-style editing with a focus on narrative, pacing, and emotional impact.",
  },
  {
    title: "Color Grading",
    text: "Professional color correction and grading to give your videos a unique, cinematic look.",
  },
  {
    title: "Content Strategy",
    text: "Story direction, channel visuals, and content planning designed to elevate your brand.",
  },
  {
    title: "On-Demand Camera",
    text: "Need a professional camera operator for a project? Hourly booking available.",
  },
];

export default function CreatorCollabPage() {
  return (
    <div className="bg-white text-gray-700 pt-10 pb-20">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center text-center overflow-hidden">
        <div className="absolute inset-0 bg-black/60 z-10"></div>

        <img
          src="https://picsum.photos/seed/creator-hero/1920/1080"
          alt="Cinematic creator montage"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="relative z-20 px-4">
          <h1 className="text-5xl md:text-7xl font-heading tracking-wider text-white">
            Helping Creators Tell Better Stories
          </h1>
          <p className="max-w-3xl mx-auto text-lg md:text-xl text-gray-200 mt-4">
            We collaborate with YouTubers, influencers, and creators to bring
            emotion, depth, and cinematic quality to your content.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4">
        {/* Services Section */}
        <section className="py-20">
          <h2 className="text-4xl font-heading text-center mb-12 text-gray-900">
            Services for Creators
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {creatorServices.map((service, i) => (
              <div
                key={i}
                className="bg-gray-50 p-6 rounded-lg border border-gray-200"
              >
                <h3 className="text-2xl font-heading mb-2 text-brand-red">
                  {service.title}
                </h3>
                <p className="text-gray-600">{service.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Showcase */}
        <section className="py-20">
          <h2 className="text-4xl font-heading text-center mb-12 text-gray-900">
            Creator Showcase
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {Array.from({ length: 6 }).map((_, i) => (
              <img
                key={i}
                src={`https://picsum.photos/seed/creator-gal${i + 1}/600/800`}
                alt={`Creator showcase image ${i + 1}`}
                className="rounded-lg object-cover w-full h-full"
              />
            ))}
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 bg-gray-50 rounded-lg">
          <h2 className="text-4xl font-heading text-center mb-12 text-gray-900">
            What Creators Are Saying
          </h2>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
            {creatorTestimonials.map((t, i) => (
              <div
                key={i}
                className="bg-white p-8 rounded-lg border border-gray-200 text-center shadow-sm"
              >
                <p className="text-gray-700 italic">"{t.quote}"</p>
                <p className="mt-6 font-bold text-brand-red">— {t.author}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Final CTA */}
        <section className="text-center mt-20">
          <h2 className="text-4xl font-heading mb-4 text-gray-900">
            Collaborate with us for your next story.
          </h2>

          <Link
            href="/contact"
            className="inline-block bg-brand-red text-white font-bold py-3 px-8 rounded-md hover:bg-brand-red-hover transition-all duration-300"
          >
            Get in Touch
          </Link>
        </section>
      </div>
    </div>
  );
}
