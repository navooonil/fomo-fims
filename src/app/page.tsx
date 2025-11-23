"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

/* -------------------------------------------------------------
   TEMP MOCKS — keep until real data is connected
------------------------------------------------------------- */
export type Project = {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  caseStudyId: string;
};

const NolanLoader = () => (
  <div className="fixed inset-0 flex items-center justify-center bg-black text-white z-[9999]">
    <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-red-500"></div>
  </div>
);

// simple real-safe data
const allProjects: Project[] = [
  {
    id: 1,
    title: "Brand Film",
    description: "Cinematic visuals",
    imageUrl: "/mock-project-1.jpg",
    caseStudyId: "1",
  },
  {
    id: 2,
    title: "Cafe Shoot",
    description: "Warm aesthetic reels",
    imageUrl: "/mock-project-2.jpg",
    caseStudyId: "2",
  },
  {
    id: 3,
    title: "Travel Edit",
    description: "Narrative storytelling",
    imageUrl: "/mock-project-3.jpg",
    caseStudyId: "3",
  },
  {
    id: 4,
    title: "Tech Product",
    description: "Clean launch visuals",
    imageUrl: "/mock-project-4.jpg",
    caseStudyId: "4",
  },
];

const featuredProjects = allProjects.slice(0, 4);

const testimonials = [
  { quote: "Their storytelling transformed our feed.", author: "Café Owner" },
  {
    quote: "Premium visuals, measurable launch-week lift.",
    author: "Phocus Brand Team",
  },
  {
    quote: "My content now feels cinematic and intentional.",
    author: "Travel YouTuber",
  },
];

/* -------------------------------------------------------------
   BRANDING
------------------------------------------------------------- */
const BRAND_RED = "#C1272D";

/* -------------------------------------------------------------
   Motion presets (SAFE for all Framer versions)
------------------------------------------------------------- */
const heroPan = {
  initial: { scale: 1.06 },
  animate: { scale: 1 },
  transition: {
    duration: 18,
    ease: "linear" as const,
    repeat: Infinity,
    repeatType: "mirror" as const,
  },
};

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7, ease: "easeOut" },
};

/* -------------------------------------------------------------
   PAGE
------------------------------------------------------------- */
export default function HomePage() {
  return (
    <>
      {/* Loader that removes itself instantly after hydration */}
      <NolanLoader />

      <main className="font-sans text-black">
        {/* ======================================================
            HERO — FIXED + PREMIUM LEICA STYLE
        ====================================================== */}
        <section className="relative h-screen min-h-[720px] flex items-center justify-center overflow-hidden">
          {/* Background */}
          <motion.div
            className="absolute inset-0"
            initial={heroPan.initial}
            animate={heroPan.animate}
            transition={heroPan.transition}
          >
            <Image
              src="/hero-kitchen.jpeg"
              alt="Hero Image"
              fill
              priority
              className="object-cover object-center"
            />

            {/* Vignette */}
            <div className="absolute inset-0 bg-black/30" />
          </motion.div>

          {/* Text */}
          <div className="relative z-10 max-w-3xl px-6 text-center">
            <h1 className="text-white text-5xl md:text-7xl font-light tracking-tight leading-tight drop-shadow-md">
              STORIES THAT STAY.
              <br />
              <span className="font-semibold">VISUALS THAT PERFORM.</span>
            </h1>

            <p className="mt-6 text-white/80 text-lg md:text-xl leading-relaxed">
              Cinematic content built for cafés, creators, and brands with
              intention.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/portfolio"
                className="bg-white text-black px-7 py-2.5 rounded-md font-medium shadow hover:shadow-lg transition"
              >
                View Our Work
              </Link>

              <Link
                href="/contact"
                className="text-white px-7 py-2.5 rounded-md font-medium shadow hover:brightness-95 transition"
                style={{ backgroundColor: BRAND_RED }}
              >
                Book a Strategy Call
              </Link>
            </div>
          </div>
        </section>

        {/* ======================================================
            PROBLEMS WE SOLVE — CLEAN, UNBROKEN
        ====================================================== */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <div
              className="w-16 h-[3px] mx-auto mb-5"
              style={{ background: BRAND_RED }}
            />

            <h2 className="text-4xl font-semibold tracking-tight">
              Problems We Solve For Brands
            </h2>

            <p className="mt-4 text-gray-600 max-w-xl mx-auto">
              Understanding friction → delivering cinematic, high-performance
              visuals.
            </p>

            <div className="mt-14 grid md:grid-cols-2 gap-8 text-left">
              {[
                [
                  "Content isn’t converting",
                  "We craft cinematic assets engineered for conversion.",
                ],
                [
                  "Dead page / inconsistent feed",
                  "We build a cohesive premium visual identity.",
                ],
                ["No monthly system", "We design a repeatable content engine."],
                [
                  "Views but no leads",
                  "Narrative-first creatives that make people act.",
                ],
              ].map(([t, d], i) => (
                <motion.div
                  key={i}
                  {...fadeInUp}
                  className="p-6 bg-white border border-black/10 rounded-xl shadow-sm"
                >
                  <h3 className="text-lg font-semibold">{t}</h3>
                  <p className="text-gray-600 mt-2">{d}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ======================================================
            SERVICES — FIXED
        ====================================================== */}
        <section className="py-20 bg-[#fafafa]">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <div
              className="w-16 h-[3px] mx-auto mb-5"
              style={{ background: BRAND_RED }}
            />

            <h3 className="text-4xl font-semibold">Our Services</h3>
            <p className="mt-4 text-gray-600">
              Everything you need to look premium—consistently.
            </p>

            <div className="mt-14 grid md:grid-cols-3 gap-8">
              {[
                [
                  "End-to-End Production",
                  "Script → shoot → edit → color → final delivery.",
                ],
                [
                  "Social-First Content",
                  "Hooks, reels, shorts engineered for retention.",
                ],
                [
                  "On-Demand Creative",
                  "Flexible crew, editors & direction whenever needed.",
                ],
              ].map(([title, desc], i) => (
                <motion.div
                  key={i}
                  {...fadeInUp}
                  className="p-6 bg-white border border-black/10 rounded-xl shadow-sm"
                >
                  <h4
                    className="text-lg font-semibold"
                    style={{ color: BRAND_RED }}
                  >
                    {title}
                  </h4>
                  <p className="text-gray-600 mt-2">{desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ======================================================
            PROJECTS — FIXED LAYOUT
        ====================================================== */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-10">
              <div
                className="w-16 h-[3px] mx-auto mb-4"
                style={{ background: BRAND_RED }}
              />
              <h3 className="text-4xl font-semibold">Work That Speaks</h3>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {featuredProjects.map((p) => (
                <Link
                  key={p.id}
                  href={`/case-studies/${p.caseStudyId}`}
                  className="group rounded-xl border border-black/10 overflow-hidden bg-white shadow-sm"
                >
                  <div className="h-[220px] bg-gray-100 overflow-hidden">
                    <Image
                      src={p.imageUrl}
                      alt={p.title}
                      width={800}
                      height={600}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-4">
                    <h4 className="font-medium">{p.title}</h4>
                    <p className="text-gray-600 text-sm mt-1">
                      {p.description}
                    </p>
                    <div
                      className="mt-2 h-[3px] w-12"
                      style={{ background: BRAND_RED }}
                    />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ======================================================
            TESTIMONIALS
        ====================================================== */}
        <section className="py-20 bg-[#fff8f8]">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <div
              className="w-16 h-[3px] mx-auto mb-5"
              style={{ background: BRAND_RED }}
            />

            <h3 className="text-4xl font-semibold">What Our Clients Say</h3>

            <div className="mt-14 grid md:grid-cols-3 gap-8">
              {testimonials.map((t, i) => (
                <motion.blockquote
                  key={i}
                  {...fadeInUp}
                  className="p-8 bg-white rounded-xl border border-black/10 shadow-sm"
                >
                  <p className="italic text-gray-700">“{t.quote}”</p>
                  <footer
                    className="mt-6 text-sm font-semibold"
                    style={{ color: BRAND_RED }}
                  >
                    — {t.author}
                  </footer>
                </motion.blockquote>
              ))}
            </div>
          </div>
        </section>

        {/* ======================================================
            CTA
        ====================================================== */}
        <section className="py-24 bg-white text-center">
          <h3 className="text-4xl font-semibold">Ready to Tell Your Story?</h3>
          <p className="mt-4 text-gray-600 max-w-xl mx-auto">
            Book a strategy call and get a clear roadmap for your brand.
          </p>

          <div className="mt-10 flex justify-center gap-5">
            <Link
              href="/contact"
              className="bg-white text-black px-8 py-3 rounded-md font-medium shadow hover:shadow-lg transition"
            >
              Book a Call
            </Link>

            <Link
              href="/contact"
              className="text-white px-8 py-3 rounded-md font-medium shadow hover:brightness-95 transition"
              style={{ background: BRAND_RED }}
            >
              Get a Quote
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
