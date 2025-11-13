"use client";

import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import { ChevronRightIcon } from "@/app/components/icons";
import { allProjects } from "@/lib/data";
import type { Project } from "@/lib/types";

// Local Testimonials type
type Testimonial = {
  quote: string;
  author: string;
};

const featuredProjects: Project[] = allProjects.slice(0, 4);

const testimonials: Testimonial[] = [
  {
    quote:
      "Their storytelling and camera work completely transformed our feed. We saw immediate engagement and brand recall.",
    author: "Café Owner",
  },
  {
    quote:
      "FOMO Films helped us launch our product with visuals that felt premium and clean. The video helped us boost sales in the first week.",
    author: "Phocus Brand Team",
  },
  {
    quote:
      "As a creator, I finally found an editor who understands narrative and pacing. My videos feel elevated and cinematic.",
    author: "Travel YouTuber",
  },
];

// ---------------- ANIMATIONS ----------------
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.2 },
  },
};

const heroItemVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const dynamicItemVariants: Variants = {
  hidden: { y: 30, opacity: 0, scale: 0.95 },
  visible: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: [0.6, -0.05, 0.01, 0.99] },
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

// ---------------- PAGE ----------------
export default function HomePage() {
  return (
    <div className="bg-white text-gray-700">
      {/* HERO */}
      <section className="relative h-screen flex items-center justify-center text-center overflow-hidden">
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/55 z-10"></div>

        {/* Cinematic Hero Video */}
        <motion.video
          src="https://cdn.coverr.co/videos/coverr-a-man-filming-with-a-camera-1249/1080p.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Hero Text */}
        <motion.div
          className="relative z-20 px-4"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            variants={heroItemVariants}
            className="text-5xl md:text-7xl lg:text-8xl font-heading tracking-wide mb-4 text-white leading-tight"
          >
            STORIES THAT STAY. <br className="hidden md:block" />
            VISUALS THAT PERFORM.
          </motion.h1>

          <motion.p
            variants={heroItemVariants}
            className="max-w-3xl mx-auto text-lg md:text-xl text-gray-200 mb-8"
          >
            Cinematic content for brands, cafés, creators, and products —
            designed to convert and built to stand out.
          </motion.p>

          <motion.div
            variants={heroItemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link href="/portfolio" className="btn-primary">
              View Our Work
            </Link>

            <Link href="/contact" className="btn-outline-light">
              Book a Strategy Call
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Remaining sections stay EXACT same */}
      {/* SERVICES */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            variants={dynamicItemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-heading mb-4 text-gray-900">
              Our Services
            </h2>
            <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
              Here’s how we help brands grow and creators shine.
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              "End-to-End Production",
              "Social Media Management",
              "On-Demand Creative",
            ].map((service, index) => (
              <motion.div
                key={index}
                variants={dynamicItemVariants}
                className="bg-white p-8 rounded-lg border border-gray-200 shadow-lg hover:-translate-y-2 transition-transform duration-300"
              >
                <h3 className="text-3xl font-heading mb-3 text-brand-red">
                  {service}
                </h3>

                <p className="text-gray-600">
                  {index === 0 &&
                    "From script to screen — cinematography, editing, color grading, delivery."}
                  {index === 1 &&
                    "Monthly content system — reels, carousels, strategy, captions, analytics."}
                  {index === 2 &&
                    "Choose what you need — camera, editing, scripting, color grading, direction."}
                </p>
              </motion.div>
            ))}
          </motion.div>

          <Link
            href="/services"
            className="inline-flex items-center mt-12 text-brand-red font-semibold hover:text-brand-red-hover transition-colors"
          >
            Explore All Services <ChevronRightIcon />
          </Link>
        </div>
      </section>

      {/* PORTFOLIO PREVIEW */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            variants={dynamicItemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-heading text-center mb-4 text-gray-900">
              Work That Speaks for Itself
            </h2>
            <p className="text-lg text-gray-600 mb-12 text-center max-w-3xl mx-auto">
              We’ve worked across industries — from restaurants and cafés to
              product brands and creators.
            </p>
          </motion.div>

          <motion.div
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {featuredProjects.map((project) => (
              <motion.div key={project.id} variants={dynamicItemVariants}>
                <Link
                  href={`/case-studies/${project.caseStudyId}`}
                  className="group relative overflow-hidden rounded-lg block"
                >
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-black/50 group-hover:bg-black/70 transition-all duration-300 flex items-end p-4">
                    <div>
                      <h3 className="text-2xl font-heading text-white">
                        {project.title}
                      </h3>
                      <p className="text-sm text-gray-300">
                        {project.description}
                      </p>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-20 bg-gray-50 overflow-hidden">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            variants={slideInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-heading mb-6 text-gray-900">
              Why Brands Choose{" "}
              <span className="text-brand-red">FOMO Films</span>
            </h2>

            <p className="text-lg text-gray-600 mb-8">
              We create content that drives engagement, improves visibility, and
              builds deeper audience connection.
            </p>

            <ul className="space-y-4 text-lg">
              {[
                "Cinematic Storytelling",
                "Strategic Content Planning",
                "Fast Delivery Timelines",
                "Brand-First Creative Direction",
              ].map((t, i) => (
                <li key={i} className="flex items-start">
                  <span className="text-brand-red font-bold mr-3 mt-1">✓</span>
                  {t}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            variants={slideInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <img
              src="https://picsum.photos/seed/whyus/800/600"
              alt="Behind the scenes"
              className="rounded-lg shadow-2xl"
            />
          </motion.div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <motion.h2
            variants={dynamicItemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-heading mb-12 text-gray-900"
          >
            What Our Clients Say
          </motion.h2>

          <motion.div
            className="grid md:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                variants={dynamicItemVariants}
                className="bg-gray-50 p-8 rounded-lg border border-gray-200"
              >
                <p className="text-gray-700 italic text-lg">"{t.quote}"</p>
                <p className="mt-6 font-bold text-brand-red">— {t.author}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-24 bg-brand-red text-white">
        <motion.div
          className="container mx-auto px-4 text-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h2
            variants={dynamicItemVariants}
            className="text-4xl md:text-5xl font-heading mb-4"
          >
            Ready to Tell Your Story?
          </motion.h2>

          <motion.p
            variants={dynamicItemVariants}
            className="max-w-2xl mx-auto text-lg mb-8"
          >
            Let’s create content that grabs attention and leaves a mark.
          </motion.p>

          <motion.div variants={dynamicItemVariants}>
            <Link
              href="/contact"
              className="inline-block bg-white text-gray-900 font-bold py-3 px-10 rounded-md hover:bg-gray-200 transition-all duration-300 transform hover:scale-105"
            >
              Book a Strategy Call Today
            </Link>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
}
