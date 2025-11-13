"use client";

import Link from "next/link";
import { motion, type Variants } from "framer-motion";

// Animation Variants
const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const slideInLeft: Variants = {
  hidden: { opacity: 0, x: -80 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const slideInRight: Variants = {
  hidden: { opacity: 0, x: 80 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const fadeUpItem: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

const imageVariants: Variants = {
  hidden: { opacity: 0, scale: 0.8, rotate: -8 },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: { type: "spring", stiffness: 120, damping: 15 },
  },
};

export default function AboutPage() {
  return (
    <motion.div
      className="bg-white text-gray-700 pt-10 pb-20 overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4">
        {/* Header */}
        <header className="text-center my-16">
          <h1 className="text-5xl md:text-6xl font-heading text-gray-900 mb-4">
            The Art & Strategy Behind Every Story
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We don’t just create content — we create experiences your audience
            remembers, shares, and talks about.
          </p>
        </header>

        {/* Meet The Director */}
        <section className="my-20 grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={slideInLeft}
          >
            <img
              src="https://images.unsplash.com/photo-1560250056-07ba64664864?q=80&w=1974&auto=format&fit=crop"
              alt="Sambhab, Creative Director of FOMO Films"
              className="rounded-lg shadow-2xl shadow-brand-red/10 aspect-[4/3] object-cover"
            />
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={slideInRight}
          >
            <h2 className="text-4xl font-heading mb-4 text-gray-900">
              Meet The Director
            </h2>
            <p className="text-gray-700 mb-4 text-lg leading-relaxed">
              Hey, I'm Sambhab! I run FOMO Films, a creative production agency
              based in Kolkata. I specialise in working with Restaurants (like
              Bhojohori Manna), Cafes with aesthetic ambience, Product Brands
              (like Phocus), and creators looking to find their visual footing
              on social media.
            </p>
            <p className="text-gray-700 font-semibold text-lg">
              My philosophy is simple: we turn stories into visuals that people
              remember.
            </p>
          </motion.div>
        </section>

        {/* Philosophy */}
        <motion.section
          className="my-20 bg-gray-50 py-16 rounded-lg"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={sectionVariants}
        >
          <div className="text-center px-4">
            <h2 className="text-4xl font-heading mb-4 text-gray-900">
              Our Mission & Philosophy
            </h2>

            <p className="text-3xl italic text-brand-red mb-8 font-heading">
              “We turn stories into visuals that people remember.”
            </p>

            <motion.div
              className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
            >
              <motion.div variants={fadeUpItem} className="text-center">
                <h3 className="text-2xl font-heading mb-2 text-gray-900">
                  Emotions First
                </h3>
                <p className="text-gray-600">
                  We create content that connects with people on a human level,
                  evoking genuine feeling.
                </p>
              </motion.div>

              <motion.div variants={fadeUpItem} className="text-center">
                <h3 className="text-2xl font-heading mb-2 text-gray-900">
                  Aesthetics with Purpose
                </h3>
                <p className="text-gray-600">
                  Every frame is intentional — lighting, composition, and color
                  crafted to reinforce the story.
                </p>
              </motion.div>

              <motion.div variants={fadeUpItem} className="text-center">
                <h3 className="text-2xl font-heading mb-2 text-gray-900">
                  Narrative-First
                </h3>
                <p className="text-gray-600">
                  A strong narrative is the foundation of all our work — the
                  driving force behind every visual choice.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </motion.section>

        {/* Process */}
        <motion.section
          className="my-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionVariants}
        >
          <h2 className="text-4xl font-heading text-center mb-12 text-gray-900">
            Our Process
          </h2>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto"
          >
            {[1, 2, 3, 4].map((step) => (
              <motion.div
                key={step}
                variants={fadeUpItem}
                className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm"
              >
                <p className="text-3xl font-heading text-brand-red mb-3">
                  {String(step).padStart(2, "0")}
                </p>

                <h3 className="text-2xl font-heading mb-2 text-gray-900">
                  {step === 1 && "Deep Dive & Strategy"}
                  {step === 2 && "Creative Direction"}
                  {step === 3 && "Production"}
                  {step === 4 && "Post-Production"}
                </h3>

                <p className="text-gray-600">
                  {step === 1 &&
                    "We understand your brand deeply — your story, audience, and goals — to build a strong content strategy."}
                  {step === 2 &&
                    "Vision comes alive through moodboards, scripts, and shot lists crafted with precision."}
                  {step === 3 &&
                    "We capture cinematic footage using pro lighting, composition, and storytelling-first direction."}
                  {step === 4 &&
                    "Color grading, editing, sound, and polish — transforming raw footage into a compelling narrative."}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* BTS Gallery */}
        <motion.section
          className="my-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionVariants}
        >
          <h2 className="text-4xl font-heading text-center mb-10 text-gray-900">
            Behind The Scenes
          </h2>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            className="grid grid-cols-2 md:grid-cols-4 gap-4"
          >
            {[1, 2, 3, 4].map((i) => (
              <motion.div
                key={i}
                variants={imageVariants}
                whileHover={{ scale: 1.05 }}
              >
                <img
                  src={`https://picsum.photos/seed/bts${i}/500/500`}
                  alt={`Behind the scenes ${i}`}
                  className="rounded-lg aspect-square object-cover"
                />
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* CTA */}
        <motion.section
          className="text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={sectionVariants}
        >
          <h2 className="text-4xl font-heading mb-4 text-gray-900">
            Let’s create something meaningful together.
          </h2>

          <Link
            href="/contact"
            className="inline-block bg-brand-red text-white font-bold py-3 px-8 rounded-md hover:bg-brand-red-hover transition-all duration-300"
          >
            Start a Project
          </Link>
        </motion.section>
      </div>
    </motion.div>
  );
}
