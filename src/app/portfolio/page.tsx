"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import type { Project } from "@/lib/types";
import { allProjects } from "@/lib/data";

const categories = [
  "All",
  ...Array.from(new Set(allProjects.map((p) => p.category))),
];

const PortfolioCard = ({ project }: { project: Project }) => (
  <motion.div
    layout
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    exit={{ opacity: 0, scale: 0.8 }}
    transition={{ duration: 0.4 }}
    className="group relative block rounded-lg bg-gray-200 overflow-hidden aspect-[4/3]"
  >
    <Link href={`/case-studies/${project.caseStudyId}`}>
      <div className="w-full h-full">
        <motion.div whileHover={{ scale: 1.05 }} className="w-full h-full">
          <img
            src={project.imageUrl}
            alt={project.title}
            className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent p-6 flex flex-col justify-end">
            <h3 className="text-2xl font-heading text-white transition-transform duration-300 translate-y-4 group-hover:translate-y-0">
              {project.title}
            </h3>
            <p className="text-sm text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              View Case Study
            </p>
          </div>
        </motion.div>
      </div>
    </Link>
  </motion.div>
);

export default function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects =
    activeFilter === "All"
      ? allProjects
      : allProjects.filter((p) => p.category === activeFilter);

  return (
    <motion.div
      className="bg-white text-gray-700 pt-10 pb-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4">
        <header className="text-center my-16">
          <h1 className="text-5xl md:text-6xl font-heading text-gray-900 mb-4">
            Our Work
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            A collection of projects built on authenticity, emotion, and visual
            design that reflects the heart of each brand.
          </p>
        </header>

        {/* Filter buttons */}
        <div className="flex justify-center items-center flex-wrap gap-2 md:gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-4 py-2 text-sm md:text-base font-semibold rounded-full transition-all duration-300 ${
                activeFilter === category
                  ? "bg-brand-red text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Portfolio grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <PortfolioCard key={project.id} project={project} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </motion.div>
  );
}
