"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const BRAND_RED = "#C1272D";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "Work", path: "/portfolio" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  // Scroll shadow effect
  useEffect(() => {
    const handler = () => setIsScrolled(window.scrollY > 8);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/80 backdrop-blur-xl shadow-[0_1px_6px_rgba(0,0,0,0.08)]"
          : "bg-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 h-20 flex items-center justify-between">
        {/* LOGO */}
        <Link href="/" aria-label="Home" className="flex items-center">
          <Image
            src="/logo.jpeg"
            alt="FOMO Films Logo"
            width={120}
            height={45}
            className="object-contain"
            priority
          />
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <motion.div key={link.path} whileHover={{ y: -2 }}>
              <Link
                href={link.path}
                className="text-sm font-medium text-gray-700 hover:text-black transition-colors"
              >
                {link.name}
              </Link>
            </motion.div>
          ))}
        </nav>

        {/* DESKTOP CTA */}
        <div className="hidden md:block">
          <Link
            href="/contact"
            className="px-5 py-2 rounded-md text-sm font-medium text-white transition-all"
            style={{ backgroundColor: BRAND_RED }}
          >
            Let’s Talk
          </Link>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 rounded-md focus:outline-none"
          aria-label="Menu"
        >
          <div className="w-6 h-[2px] bg-black mb-1"></div>
          <div className="w-6 h-[2px] bg-black mb-1"></div>
          <div className="w-6 h-[2px] bg-black"></div>
        </button>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden bg-white border-t border-gray-200 shadow-md"
          >
            <div className="px-5 py-4 flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  href={link.path}
                  onClick={() => setIsOpen(false)}
                  className="w-full py-2 text-gray-700 text-base hover:text-black transition"
                >
                  {link.name}
                </Link>
              ))}

              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="mt-3 w-full py-2 text-center rounded-md font-medium text-white"
                style={{ backgroundColor: BRAND_RED }}
              >
                Let’s Talk
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
