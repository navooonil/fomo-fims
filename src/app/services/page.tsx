"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import { PlusIcon, MinusIcon } from "@/app/components/icons";
import { allProjects } from "@/lib/data";

/* ---------------------------------------------------
   SERVICES DATA
--------------------------------------------------- */
const services = [
  {
    id: "01",
    title: "End-to-End Production",
    shortDescription: "From script to screen — we handle everything.",
    longDescription:
      "Perfect for brands wanting a fully-managed, cinematic final product. We transform your raw idea into a complete, polished piece ready for any platform.",
    includes: [
      "Scripting & Concept Development",
      "Shot List & Moodboards",
      "Cinematography & Lighting",
      "Editing & Color Grading",
      "Music Licensing & Voice Over",
    ],
  },
  {
    id: "02",
    title: "Social Media Management",
    shortDescription: "A monthly content system built for consistent growth.",
    longDescription:
      "We manage and build your entire social content pipeline — Reels, Carousels, Stories, Analytics & Strategy. Designed for brands that want consistent growth.",
    includes: [
      "Content Calendar & Strategy",
      "Monthly Reels + Carousels",
      "Copywriting & High-converting Captions",
      "Analytics & Performance Insights",
      "Ad Boosting Strategy",
    ],
  },
  {
    id: "03",
    title: "On-Demand Services",
    shortDescription: "Flexible support for specific creative tasks.",
    longDescription:
      "Ideal for creators or teams who need professional assistance on demand. Pick only what you need — no extra fluff.",
    includes: [
      "Hourly Camera Crew",
      "Editing Packages",
      "Script Consultation",
      "Color Grading Services",
      "Creative Direction",
    ],
  },
];

/* ---------------------------------------------------
   ACCORDION ANIMATION
--------------------------------------------------- */
const accordionVariants: Variants = {
  open: { opacity: 1, height: "auto" },
  collapsed: { opacity: 0, height: 0 },
};

/* ---------------------------------------------------
   ACCORDION COMPONENT
--------------------------------------------------- */
function ServiceAccordion({
  id,
  title,
  shortDescription,
  longDescription,
  includes,
}: {
  id: string;
  title: string;
  shortDescription: string;
  longDescription: string;
  includes: string[];
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.5 }}
      className="border-b border-gray-700 py-8"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-start text-left gap-8"
      >
        <div className="flex items-start gap-4 md:gap-8">
          <span className="text-brand-red font-heading text-xl pt-1">{id}</span>
          <div>
            <h3 className="text-3xl md:text-4xl font-heading text-white uppercase tracking-wide">
              {title}
            </h3>
            <p className="text-gray-400 mt-2 text-base md:text-lg">
              {shortDescription}
            </p>
          </div>
        </div>

        <div className="flex-shrink-0 pt-2 text-white">
          {isOpen ? (
            <MinusIcon className="h-8 w-8" />
          ) : (
            <PlusIcon className="h-8 w-8" />
          )}
        </div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.section
            key="content"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={accordionVariants}
            transition={{
              duration: 0.45,
              ease: [0.04, 0.62, 0.23, 0.98],
            }}
            className="overflow-hidden"
          >
            <div className="pt-8 pl-12 md:pl-20 grid md:grid-cols-2 gap-8">
              <div>
                <p className="text-gray-300 leading-relaxed">
                  {longDescription}
                </p>

                <Link
                  href="/portfolio"
                  className="inline-block mt-6 border-2 border-brand-red text-brand-red font-bold py-2 px-6 rounded-md hover:bg-brand-red hover:text-white transition-all duration-300"
                >
                  View Related Work
                </Link>
              </div>

              <div>
                <h4 className="font-semibold text-white mb-3 text-lg uppercase tracking-wider">
                  What's Included:
                </h4>
                <ul className="space-y-2 text-gray-400">
                  {includes.map((item, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-brand-red mr-2 mt-1">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.section>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

/* ---------------------------------------------------
   MAIN PAGE
--------------------------------------------------- */
export default function ServicesPage() {
  return (
    <div className="bg-black text-gray-200">
      {/* ---------------------------------------------------
         HERO SECTION
      --------------------------------------------------- */}
      <div className="relative isolate h-[70vh] md:h-[85vh] flex items-center justify-center">
        <div className="absolute inset-0 bg-black/70 z-10"></div>

        <video
          src="https://storage.googleapis.com/aistudio-hosting/media/cinematic-montage-placeholder.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="relative z-20 text-center px-4">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-heading text-white uppercase tracking-wider"
          >
            Our Services
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-gray-300 mt-4 text-lg max-w-2xl mx-auto"
          >
            Crafted to make your brand unforgettable.
          </motion.p>
        </div>
      </div>

      {/* ---------------------------------------------------
         ACCORDION SECTION
      --------------------------------------------------- */}
      <main className="max-w-5xl mx-auto px-4 pt-20">
        {services.map((service) => (
          <ServiceAccordion key={service.id} {...service} />
        ))}
      </main>

      {/* ---------------------------------------------------
         OUR WORK (MODERN MASONRY GRID)
      --------------------------------------------------- */}
      <section className="bg-black py-24 mt-10">
        <div className="container mx-auto px-4">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-heading text-white mb-4 uppercase tracking-wider">
              Our Work
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              A curated selection of cinematic projects across restaurants,
              cafés, creators & brands.
            </p>
          </motion.div>

          {/* Grid */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.15 },
              },
            }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-6"
          >
            {allProjects.slice(0, 4).map((project, index) => (
              <motion.div
                key={project.id}
                variants={{
                  hidden: { opacity: 0, y: 25 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
                }}
                className={`
                  group relative overflow-hidden rounded-xl 
                  ${
                    index % 3 === 0
                      ? "lg:col-span-7 h-96"
                      : "lg:col-span-5 h-80"
                  }
                `}
              >
                <Link href={`/case-studies/${project.caseStudyId}`}>
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-90 group-hover:opacity-95 transition-all" />

                  <div className="absolute bottom-6 left-6 right-6 z-20">
                    <h3 className="text-3xl font-heading text-white tracking-wide">
                      {project.title}
                    </h3>
                    <p className="text-sm text-gray-300">
                      {project.description}
                    </p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA */}
          <div className="text-center mt-16">
            <Link
              href="/portfolio"
              className="inline-flex items-center text-brand-red font-semibold hover:text-brand-red-hover transition-colors text-lg"
            >
              View Full Portfolio →
            </Link>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------
         FINAL CTA
      --------------------------------------------------- */}
      <section className="bg-gray-900 py-24">
        <motion.div
          className="container mx-auto px-4 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-6xl font-heading text-white mb-6 uppercase tracking-wider">
            Ready to Start Your Project?
          </h2>

          <Link
            href="/contact"
            className="inline-block bg-brand-red text-white font-bold py-4 px-12 rounded-md hover:bg-brand-red-hover transition-all duration-300 text-lg transform hover:scale-105"
          >
            Let's Talk
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
