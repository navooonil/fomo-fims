"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, linear } from "framer-motion";

/**
 * --- Dependency Mocks for Vercel Deployment ---
 *
 * NOTE: For a real application, you must replace these mocks
 * with the actual imports from your file system (e.g., '@/app/components/NolanLoader').
 * These mocks are only for ensuring the code in *this file* compiles and deploys.
 */

// MOCK: Project Type
export type Project = {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  caseStudyId: string;
};

// MOCK: NolanLoader Component
const NolanLoader = () => (
  <div className="flex items-center justify-center h-screen bg-black text-white">
    <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-red-500"></div>
  </div>
);

// MOCK: allProjects Data
const allProjects: Project[] = [
  {
    id: 1,
    title: "Phocus Water Brand Film",
    description: "Launch campaign cinematic assets.",
    imageUrl: "/mock-project-1.jpg", // Replace with an actual image path
    caseStudyId: "phocus",
  },
  {
    id: 2,
    title: "Minimalist Coffee Shop",
    description: "Visual identity and social content.",
    imageUrl: "/mock-project-2.jpg", // Replace with an actual image path
    caseStudyId: "minimalist-cafe",
  },
  {
    id: 3,
    title: "Global Travel Vlogger",
    description: "Series editing and narrative structure.",
    imageUrl: "/mock-project-3.jpg", // Replace with an actual image path
    caseStudyId: "travel-vlog",
  },
  {
    id: 4,
    title: "Tech Startup Explainer",
    description: "Animated explainer video production.",
    imageUrl: "/mock-project-4.jpg", // Replace with an actual image path
    caseStudyId: "tech-explainer",
  },
];
// END OF MOCKS

/* ---------------- Data ---------------- */
const featuredProjects: Project[] = allProjects.slice(0, 4);

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

/* ---------------- Branding ---------------- */
const BRAND_RED = "#C1272D";
const BRAND_BLACK = "#0A0A0A";

/* ---------------- Motion Presets ---------------- */
const heroPan = {
  initial: { scale: 1.06 },
  animate: { scale: 1.0 },
  transition: {
    duration: 18,
    ease: linear,
    repeat: Infinity,
    repeatType: "mirror" as const,
  },
};

const fadeInUp = {
  initial: { opacity: 0, y: 18 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.9, ease: linear },
};

/* ---------------- Page ---------------- */
export default function HomePage() {
  return (
    <>
      <NolanLoader />

      <main className="antialiased font-sans text-[#0A0A0A]">
        {/* ================= HERO ================= */}
        <section className="relative w-full h-screen min-h-[700px] flex items-center justify-center overflow-hidden bg-black">
          <motion.div
            className="absolute inset-0"
            initial={heroPan.initial}
            animate={heroPan.animate}
            transition={heroPan.transition}
          >
            <Image
              src="/hero-kitchen.jpeg" // Make sure this image exists in your public folder
              alt="Hero cinematic frame"
              fill
              priority
              className="object-cover object-center"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
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

            {/* Buttons */}
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

        {/* ================= PROBLEMS WE SOLVE ================= */}
        <section className="bg-white py-20">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center max-w-2xl mx-auto">
              <div
                className="w-16 h-[3px] mx-auto mb-4"
                style={{ background: BRAND_RED }}
              />
              <h2 className="text-3xl md:text-4xl font-medium">
                Problems We Solve For Brands
              </h2>
              <p className="mt-4 text-gray-600">
                We identify friction, then build cinematic, measurable
                solutions.
              </p>
            </div>

            <div className="mt-10 grid md:grid-cols-2 gap-8">
              {[
                [
                  "Our content isn’t converting.",
                  "We create short-form + hero assets built to convert without losing craft.",
                ],
                [
                  "Our page looks dead / inconsistent.",
                  "We deliver a cohesive visual language that reads premium everywhere.",
                ],
                [
                  "We don’t have a system for monthly content.",
                  "A repeatable content engine tailored to your brand cadence.",
                ],
                [
                  "We get views but no leads.",
                  "Narrative-first creatives with intentional CTAs that drive outcomes.",
                ],
              ].map(([title, desc], i) => (
                <motion.div
                  key={i}
                  {...fadeInUp}
                  className="p-6 bg-white border border-black/5 shadow-sm rounded-xl"
                >
                  <h3 className="text-lg font-semibold">{title}</h3>
                  <p className="mt-2 text-gray-600">{desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= SERVICES ================= */}
        <section className="py-20 bg-[#fafafa]">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center max-w-2xl mx-auto">
              <div
                className="w-16 h-[3px] mx-auto mb-4"
                style={{ background: BRAND_RED }}
              />
              <h3 className="text-3xl md:text-4xl font-medium">Our Services</h3>
              <p className="mt-4 text-gray-600">
                End-to-end production, social-first systems, and on-demand
                studio support.
              </p>
            </div>

            <div className="mt-10 grid md:grid-cols-3 gap-8">
              {[
                [
                  "End-to-End Production",
                  "Script, shoot, edit, color and deliver cinematic hero assets.",
                ],
                [
                  "Social-First Content",
                  "Hooks, reels and repurposes engineered for retention and conversion.",
                ],
                [
                  "On-Demand Creative",
                  "Plug-in crew, editors and creative direction on demand.",
                ],
              ].map(([title, desc], i) => (
                <motion.div
                  key={i}
                  {...fadeInUp}
                  className="p-6 bg-white border border-black/5 shadow-sm rounded-xl"
                >
                  <h4
                    className="text-lg font-semibold"
                    style={{ color: BRAND_RED }}
                  >
                    {title}
                  </h4>
                  <p className="mt-2 text-gray-600">{desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= PORTFOLIO ================= */}
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
                Selected projects. Studio presentation. Clean stills.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {featuredProjects.map((p) => (
                <Link
                  key={p.id}
                  href={`/case-studies/${p.caseStudyId}`}
                  className="group block rounded-xl overflow-hidden bg-white shadow-sm border border-black/5"
                >
                  <div className="h-[220px] bg-gray-100 overflow-hidden">
                    <Image
                      src={p.imageUrl} // Use the mocked imageUrl
                      alt={p.title}
                      width={1200}
                      height={720}
                      className="object-cover w-full h-full group-hover:scale-105 transition duration-500"
                    />
                  </div>

                  <div className="p-4">
                    <h4 className="font-medium text-black">{p.title}</h4>
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
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center max-w-2xl mx-auto">
              <div
                className="w-16 h-[3px] mx-auto mb-4"
                style={{ background: BRAND_RED }}
              />
              <h3 className="text-3xl md:text-4xl font-medium">
                What Our Clients Say
              </h3>
              <p className="mt-4 text-gray-600">
                Editorial-style testimonials from founders and creative leads.
              </p>
            </div>

            <div className="mt-10 grid md:grid-cols-3 gap-8">
              {testimonials.map((t, i) => (
                <motion.blockquote
                  key={i}
                  {...fadeInUp}
                  className="p-8 bg-white border border-black/5 shadow-sm rounded-xl"
                >
                  <p className="italic text-gray-700 leading-relaxed">
                    “{t.quote}”
                  </p>
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
          <div className="max-w-4xl mx-auto px-6">
            <h3 className="text-3xl md:text-4xl font-medium">
              Ready to Tell Your Story?
            </h3>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              We’ll plan a short strategy call and a concise creative roadmap to
              launch your first campaign.
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
                style={{ background: BRAND_RED }}
              >
                Get a Quote
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
