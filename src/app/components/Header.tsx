"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { MenuIcon, XIcon, LogoIcon } from "./icons";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Work", path: "/portfolio" },
  { name: "Contact", path: "/contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Scroll effect for sticky background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/80 backdrop-blur-lg border-b border-gray-200"
          : "bg-white"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.div whileHover={{ scale: 1.05 }} className="flex-shrink-0">
            <Link
              href="/"
              className="flex items-center text-2xl font-bold tracking-tight text-gray-900 hover:text-brand-red transition-colors"
            >
              <LogoIcon className="h-12 w-auto" />
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6 ml-10">
            {navLinks.map((link) => (
              <motion.div key={link.name} whileHover={{ y: -2 }}>
                <Link
                  href={link.path}
                  className={`px-3 py-2 text-sm font-medium transition-colors rounded-md
                      ${
                        pathname === link.path
                          ? "text-brand-red font-semibold"
                          : "text-gray-600 hover:text-brand-red"
                      }
                    `}
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/contact"
                className="ml-4 px-4 py-2 border border-brand-red text-brand-red rounded-md text-sm font-medium hover:bg-brand-red hover:text-white transition-all duration-300"
              >
                Let&apos;s Talk
              </Link>
            </motion.div>
          </div>

          {/* Mobile Burger Icon */}
          <div className="md:hidden -mr-2">
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-expanded={isOpen}
              aria-label="Toggle navigation"
              className="p-2 rounded-md text-gray-500 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-brand-red"
            >
              {isOpen ? <XIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-white shadow-sm"
        >
          <div className="px-2 pt-2 pb-4 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.path}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors
                    ${
                      pathname === link.path
                        ? "text-brand-red bg-gray-100 font-semibold"
                        : "text-gray-600 hover:text-brand-red hover:bg-gray-100"
                    }
                  `}
              >
                {link.name}
              </Link>
            ))}

            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="block w-full mt-4 px-4 py-2 border border-brand-red text-brand-red rounded-md text-sm font-medium hover:bg-brand-red hover:text-white transition-all duration-300"
            >
              Let&apos;s Talk
            </Link>
          </div>
        </motion.div>
      )}
    </header>
  );
}
