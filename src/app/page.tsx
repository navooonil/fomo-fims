"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import NolanLoader from "@/app/components/NolanLoader";
import { allProjects } from "@/lib/data";
import type { Project } from "@/lib/types";

/*
  FINAL: Leica Slow Cinematic Pan hero using the image in your public folder:
  /public/hero-kitchen.jpeg
*/

/* -------- data -------- */
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

/* -------- design tokens -------- */
const BRAND_RED = "#C1272D";
const BRAND_BLACK = "#0A0A0A";

/* -------- motion presets -------- */
const heroPan = {
  initial: { scale: 1.06 },
  animate: { scale: 1.0 },
  transition: {
    duration: 18,
    ease: "linear",
    repeat: Infinity,
    repeatType: "reverse",
  },
};

const fadeInUp = {
  initial: { opacity: 0, y: 18 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.9, ease: "easeOut" },
};

/* -------- page -------- */
export default function HomePage(): JSX.Element {
  return (
    <>
      {/* cinematic loader — your component */}
      <NolanLoader />

      <main className="antialiased font-sans text-[color:var(--brand-black,#0A0A0A)]">
        {/* ================= HERO — Leica Slow Cinematic Pan (FULLSCREEN) ================= */}
        <section className="relative w-full h-screen min-h-[720px] flex items-center justify-center overflow-hidden bg-black">
          {/* slow Ken-Burns background (uses public/hero-kitchen.jpeg) */}
          <motion.div
            className="absolute inset-0"
            initial={heroPan.initial}
            animate={heroPan.animate}
            transition={heroPan.transition}
            aria-hidden
          >
            <Image
              src="/hero-kitchen.jpeg"
              alt="Hero cinematic frame"
              fill
              priority
              className="object-cover object-center"
            />

            {/* minimal vignette to anchor text */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent pointer-events-none" />
          </motion.div>

          {/* Hero content — centered, restrained */}
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

            {/* Buttons: Option B (Primary: white bg, black text) — (Secondary: red bg, white text) */}
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/portfolio"
                className="inline-flex items-center justify-center bg-white text-black px-6 py-2 rounded-md text-sm font-medium shadow-sm hover:shadow-md transition"
                aria-label="View Our Work"
              >
                View Our Work
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center bg-[color:var(--brand-red,#C1272D)] text-white px-6 py-2 rounded-md text-sm font-medium shadow-sm hover:brightness-95 transition"
                style={{ backgroundColor: BRAND_RED }}
                aria-label="Book a Strategy Call"
              >
                Book a Strategy Call
              </Link>
            </div>
          </div>

          {/* subtle scroll hint */}
          <div className="absolute bottom-8 z-20 w-full text-center text-white/80">
            <div className="text-sm tracking-wider">Scroll to explore</div>
            <div className="mt-2 text-2xl">↓</div>
          </div>
        </section>

        {/* ================= AFTER HERO — White Canvas (Leica luxury) ================= */}
        <section className="bg-white py-20">
          <div className="max-w-6xl mx-auto px-6">
            <div className="mx-auto max-w-2xl text-center">
              <div
                className="inline-block mb-3 w-16 h-[3px]"
                style={{ background: BRAND_RED }}
              />
              <h2 className="text-3xl md:text-4xl font-medium tracking-tight">
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
                <motion.article
                  key={i}
                  {...fadeInUp}
                  className="p-6 rounded-xl border border-black/5 bg-white shadow-[0_6px_20px_rgba(12,12,14,0.04)]"
                >
                  <h3
                    className="text-lg font-semibold"
                    style={{ color: BRAND_BLACK }}
                  >
                    {title}
                  </h3>
                  <p className="mt-2 text-gray-600">{desc}</p>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* ================= SERVICES ================= */}
        <section className="py-20 bg-[#fafafa]">
          <div className="max-w-6xl mx-auto px-6">
            <div className="mx-auto max-w-2xl text-center">
              <div
                className="inline-block mb-3 w-16 h-[3px]"
                style={{ background: BRAND_RED }}
              />
              <h3 className="text-3xl md:text-4xl font-medium tracking-tight">
                Our Services
              </h3>
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
              ].map(([h, b], i) => (
                <motion.div
                  key={i}
                  {...fadeInUp}
                  className="p-6 rounded-xl bg-white border border-black/5 shadow-[0_6px_20px_rgba(12,12,14,0.04)]"
                >
                  <h4
                    className="text-lg font-semibold"
                    style={{ color: BRAND_RED }}
                  >
                    {h}
                  </h4>
                  <p className="mt-2 text-gray-600">{b}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= WORK (portfolio) ================= */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-8">
              <div
                className="inline-block mb-3 w-16 h-[3px]"
                style={{ background: BRAND_RED }}
              />
              <h3 className="text-3xl md:text-4xl font-medium tracking-tight">
                Work That Speaks for Itself
              </h3>
              <p className="mt-3 text-gray-600 max-w-3xl mx-auto">
                Selected projects. Studio presentation. Clean stills.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {featuredProjects.map((p, i) => (
                <Link
                  key={p.id}
                  href={`/case-studies/${p.caseStudyId}`}
                  className="group block rounded-xl overflow-hidden bg-white shadow-[0_6px_18px_rgba(0,0,0,0.04)] transition"
                >
                  <div className="w-full h-[220px] bg-gray-100 overflow-hidden">
                    <Image
                      src={p.imageUrl}
                      alt={p.title}
                      width={1200}
                      height={720}
                      className="object-cover w-full h-full group-hover:scale-105 transition duration-500"
                    />
                  </div>
                  <div className="p-4">
                    <h4 className="font-medium" style={{ color: BRAND_BLACK }}>
                      {p.title}
                    </h4>
                    <p className="text-sm text-gray-600 mt-1">
                      {p.description}
                    </p>
                    <div
                      className="mt-3 h-1 w-12"
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
            <div className="mx-auto max-w-2xl text-center">
              <div
                className="inline-block mb-3 w-16 h-[3px]"
                style={{ background: BRAND_RED }}
              />
              <h3 className="text-3xl md:text-4xl font-medium tracking-tight">
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
                  className="p-8 bg-white rounded-xl border border-black/5 shadow-[0_8px_24px_rgba(0,0,0,0.04)]"
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
            <h3 className="text-3xl md:text-4xl font-medium tracking-tight">
              Ready to Tell Your Story?
            </h3>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              We’ll plan a short strategy call and a concise creative roadmap to
              launch your first campaign.
            </p>

            <div className="mt-8 flex justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center bg-white text-black px-8 py-3 rounded-md font-medium shadow-sm hover:shadow-md transition"
              >
                Book a Strategy Call
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center bg-[color:var(--brand-red,#C1272D)] text-white px-6 py-3 rounded-md font-medium shadow-sm hover:brightness-95 transition"
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
