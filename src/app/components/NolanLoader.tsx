"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function NolanLoader() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setVisible(false), 2200); // smoother + longer
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="loader"
          className="fixed inset-0 bg-black z-[9999] flex items-center justify-center pointer-events-none"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
        >
          {/* WHITE TRANSITION LAYER */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0, 1, 0] }}
            transition={{
              times: [0, 0.6, 0.8, 1],
              duration: 1.4,
              ease: "easeInOut",
              delay: 0.8,
            }}
            className="absolute inset-0 bg-white"
          />

          <div className="relative flex flex-col items-center">
            {/* LOGO */}
            <motion.div
              className="relative w-[200px] h-[240px] md:w-[260px] md:h-[300px]"
              initial={{ scale: 0.93, y: 10 }}
              animate={{
                scale: [0.93, 1.03, 1],
                y: [10, -6, 0],
                rotate: [0, -4, 0], // smooth clap motion
              }}
              transition={{
                duration: 1.2,
                ease: "easeInOut",
                times: [0, 0.5, 1],
              }}
            >
              <Image
                src="/logo.jpeg"
                alt="FOMO Films Logo"
                fill
                priority
                style={{ objectFit: "contain" }}
              />

              {/* Red dot pulse */}
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{
                  scale: [0, 1.18, 1],
                  opacity: [0, 1, 0.85],
                }}
                transition={{
                  delay: 0.32,
                  duration: 0.55,
                  ease: "easeOut",
                }}
                className="absolute rounded-full bg-red-600 shadow-[0_0_12px_rgba(255,0,0,0.45)]"
                style={{
                  width: 16,
                  height: 16,
                  left: "20%",
                  top: "28%",
                }}
              />
            </motion.div>

            {/* Text reveal */}
            <motion.h2
              initial={{ opacity: 0, letterSpacing: "0.5em", y: 14 }}
              animate={{ opacity: 1, letterSpacing: "0.15em", y: 0 }}
              transition={{
                delay: 0.55,
                duration: 0.7,
                ease: "easeOut",
              }}
              className="mt-4 text-gray-200 tracking-[0.2em] text-lg md:text-xl font-heading"
            >
              FOMO FILMS
            </motion.h2>

            {/* IMAX-style flash but softer */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 0.35, 0] }}
              transition={{ delay: 1.15, duration: 0.3, ease: "easeOut" }}
              className="absolute inset-0 bg-white mix-blend-screen"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
