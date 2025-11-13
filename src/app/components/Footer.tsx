"use client";

import { motion } from "framer-motion";
import { InstagramIcon, YouTubeIcon, MailIcon } from "./icons";

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="container mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between md:flex-row">
          <div className="mb-4 md:mb-0 text-center md:text-left">
            <h3 className="text-3xl font-heading tracking-wider text-gray-900">
              FOMO Films
            </h3>
            <p className="text-sm text-gray-500">
              Stories That Stick. Visuals That Convert.
            </p>
          </div>

          <div className="flex space-x-6">
            <motion.a
              whileHover={{ y: -3, scale: 1.1 }}
              href="https://instagram.com/withsambhab"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-brand-red transition-colors"
            >
              <span className="sr-only">Instagram</span>
              <InstagramIcon />
            </motion.a>

            <motion.a
              whileHover={{ y: -3, scale: 1.1 }}
              href="https://youtube.com/@withsambhab"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-brand-red transition-colors"
            >
              <span className="sr-only">YouTube</span>
              <YouTubeIcon />
            </motion.a>

            <motion.a
              whileHover={{ y: -3, scale: 1.1 }}
              href="mailto:withsambhab@gmail.com"
              className="text-gray-500 hover:text-brand-red transition-colors"
            >
              <span className="sr-only">Email</span>
              <MailIcon />
            </motion.a>
          </div>
        </div>

        <div className="mt-8 text-center text-sm text-gray-500">
          <p>
            &copy; {new Date().getFullYear()} FOMO Films. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
