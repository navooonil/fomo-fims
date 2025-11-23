"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

/* ---------------- MOCKS TO ENSURE DEPLOY WORKS ---------------- */
// Remove these mocks later and replace with your real imports.

export type Project = {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  caseStudyId: string;
};

const NolanLoader = () => (
  <div className="flex items-center justify-center h-screen bg-black text-white">
    <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-red-500"></div>
  </div>
);

const allProjects: Project[] = [
  {
    id: 1,
    title: "Phocus Water Brand Film",
    description: "Launch campaign cinematic assets.",
    imageUrl: "/mock-project-1.jpg",
    caseStudyId: "phocus",
  },
  {
    id: 2,
    title: "Minimalist Coffee Shop",
    description: "Visual identity & reels.",
    imageUrl: "/mock-project-2.jpg",
    caseStudyId: "cafe",
  },
  {
    id: 3,
    title: "Travel Vlogger Series",
    description: "Narrative-driven edits.",
    imageUrl: "/mock-project-3.jpg",
    caseStudyId: "travel",
  },
  {
    id: 4,
    title: "Tech Startup Explainer",
    description: "Animated explainer.",
    imageUrl: "/mock-project-4.jpg",
    caseStudyId: "tech",
  },
];
/* -------------------------------------------------------------- */

const featuredProjects = allProjects.slice(0, 4);

const testimonials = [
  {
    quote:
      "Their storytelling transformed our feed — engagement and brand recall rose immediately.",
    author: "Café Owner",
  },
  {
    quote:
      "FOMO Films shipped visuals that felt premium. We saw measurable lift in launch week.",
    author: "Phocus Brand Team",
  },
  {
    quote:
      "My videos now have cinematic pacing and clarity. The edit elevated my channel.",
    author: "Travel YouTuber",
  },
];

/* ---------------- BRAND COLORS ---------------- */
const BRAND_RED = "#C1272D";

/* ---------------- MOTION PRESETS (SAFE) ---------------- */
const heroPan = {
  initial: { scale: 1.06 },
  animate: { scale: 1 },
  transition: {
    duration: 18,
    ease: "linear" as const, // FIXED — Works in ALL Framer versions
    repeat: Infinity,
    repeatType: "mirror" as const,
  },
};

const fadeInUp = {
  initial: { opacity: 0, y: 18 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: {
    duration: 0.9,
    ease: "linear" as const, // FIXED
  },
};

/* ---------------- PAGE ---------------- */
export default function HomePage() {
  return (
    <>
      <NolanLoader />

      <main className="antialiased font-sans text-black">
        {/* ================= HERO ================= */}
        <section className="relative w-full h-screen min-h-[700px] flex items-center justify-center overflow-hidden bg-black">
          <motion.div
            className="absolute inset-0"
            initial={heroPan.initial}
            animate={heroPan.animate}
            transition={heroPan.transition}
          >
            <Image
              src="/hero-kitchen.jpeg"
              alt="Hero"
              fill
              priority
              className="object-cover object-center"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
          </motion.div>

          <div className="relative z-20 px-6 text-center max-w-3xl">
            <h1 className="text-white text-4xl md:text-6xl lg:text-7xl leading-tight font-light tracking-tight">
              STORIES THAT STAY.
              <br />
              <span className="font-semibold">VISUALS THAT PERFORM.</span>
            </h1>

            <p className="mt-6 text-white/80 text-lg md:text-xl max-w-2xl mx-auto">
              Cinematic content for brands, cafés, creators and products —
              crafted with precision and intention.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/portfolio"
                className="bg-white text-black px-6 py-2 rounded-md text-sm font-medium shadow-sm hover:shadow-md transition"
              >
                View Our Work
              </Link>

              <Link
                href="/contact"
                className="text-white px-6 py-2 rounded-md text-sm font-medium shadow-sm hover:brightness-95 transition"
                style={{ backgroundColor: BRAND_RED }}
              >
                Book a Strategy Call
              </Link>
            </div>
          </div>

          <div className="absolute bottom-8 z-20 text-center text-white/80">
            <div className="text-sm tracking-wider">Scroll to explore</div>
            <div className="mt-2 text-2xl">↓</div>
          </div>
        </section>

        {/* ================= PROBLEMS ================= */}
        <section className="bg-white py-20">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <div
              className="w-16 h-[3px] mx-auto mb-4"
              style={{ background: BRAND_RED }}
            />
            <h2 className="text-3xl md:text-4xl font-medium">
              Problems We Solve For Brands
            </h2>
            <p className="mt-4 text-gray-600 max-w-xl mx-auto">
              We identify friction, then build cinematic, measurable solutions.
            </p>

            <div className="mt-10 grid md:grid-cols-2 gap-8 text-left">
              {[
                [
                  "Our content isn’t converting.",
                  "We build cinematic assets engineered to convert.",
                ],
                [
                  "Our page looks dead.",
                  "We create a cohesive premium visual identity.",
                ],
                [
                  "We lack a monthly content system.",
                  "We design a branded plug-and-play content engine.",
                ],
                [
                  "We get views but no leads.",
                  "Narrative-first creatives that drive action.",
                ],
              ].map(([title, desc], i) => (
                <motion.div
                  key={i}
                  {...fadeInUp}
                  className="p-6 bg-white rounded-xl border border-black/5 shadow-sm"
                >
                  <h3 className="text-lg font-semibold">{title}</h3>
                  <p className="text-gray-600 mt-2">{desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= SERVICES ================= */}
        <section className="py-20 bg-[#fafafa]">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <div
              className="w-16 h-[3px] mx-auto mb-4"
              style={{ background: BRAND_RED }}
            />
            <h3 className="text-3xl md:text-4xl font-medium">Our Services</h3>
            <p className="mt-4 text-gray-600 max-w-xl mx-auto">
              End-to-end production, social systems, and on-demand studio
              support.
            </p>

            <div className="mt-10 grid md:grid-cols-3 gap-8">
              {[
                [
                  "End-to-End Production",
                  "Script, shoot, edit, color — everything.",
                ],
                [
                  "Social-First Content",
                  "Hooks, reels, repurposed edits, strategy.",
                ],
                [
                  "On-Demand Creative",
                  "Flexible crew, editors and creative direction.",
                ],
              ].map(([title, desc], i) => (
                <motion.div
                  key={i}
                  {...fadeInUp}
                  className="p-6 bg-white rounded-xl border border-black/5 shadow-sm"
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

        {/* ================= WORK ================= */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-10">
              <div
                className="w-16 h-[3px] mx-auto mb-4"
                style={{ background: BRAND_RED }}
              />
              <h3 className="text-3xl md:text-4xl font-medium">
                Work That Speaks for Itself
              </h3>
              <p className="mt-3 text-gray-600">
                Selected studio projects displayed cleanly.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {featuredProjects.map((p) => (
                <Link
                  key={p.id}
                  href={`/case-studies/${p.caseStudyId}`}
                  className="group block rounded-xl overflow-hidden bg-white border border-black/5 shadow-sm"
                >
                  <div className="h-[220px] bg-gray-100 overflow-hidden">
                    <Image
                      src={p.imageUrl}
                      alt={p.title}
                      width={1200}
                      height={720}
                      className="object-cover w-full h-full group-hover:scale-105 transition duration-500"
                    />
                  </div>
                  <div className="p-4">
                    <h4 className="font-medium">{p.title}</h4>
                    <p className="text-sm text-gray-600 mt-1">
                      {p.description}
                    </p>
                    <div
                      className="mt-3 h-[3px] w-12"
                      style={{ background: BRAND_RED }}
                    />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ================= TESTIMONIALS ================= */}
        <section className="py-20 bg-[#fff8f8]">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <div
              className="w-16 h-[3px] mx-auto mb-4"
              style={{ background: BRAND_RED }}
            />
            <h3 className="text-3xl md:text-4xl font-medium">
              What Our Clients Say
            </h3>
            <p className="mt-4 text-gray-600">
              Clean editorial-style feedback.
            </p>

            <div className="mt-10 grid md:grid-cols-3 gap-8">
              {testimonials.map((t, i) => (
                <motion.blockquote
                  key={i}
                  {...fadeInUp}
                  className="p-8 bg-white rounded-xl border border-black/5 shadow-sm"
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

        {/* ================= CTA ================= */}
        <section className="py-24 bg-white text-center">
          <h3 className="text-3xl md:text-4xl font-medium">
            Ready to Tell Your Story?
          </h3>
          <p className="mt-4 text-gray-600 max-w-xl mx-auto">
            Book a strategy call & get a clear creative roadmap.
          </p>

          <div className="mt-8 flex justify-center gap-4">
            <Link
              href="/contact"
              className="bg-white text-black px-8 py-3 rounded-md font-medium shadow-sm hover:shadow-md transition"
            >
              Book a Strategy Call
            </Link>

            <Link
              href="/contact"
              className="text-white px-8 py-3 rounded-md font-medium shadow-sm hover:brightness-95 transition"
              style={{ backgroundColor: BRAND_RED }}
            >
              Get a Quote
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
