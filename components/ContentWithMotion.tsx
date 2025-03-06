"use client";

import { motion } from "framer-motion";

export default function ContentWithMotion() {
  return (
    <motion.div
      initial={{ opacity: 0.0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.3,
        duration: 0.8,
        ease: "easeInOut",
      }}
      className="relative flex flex-col gap-4 items-center justify-center px-4"
    >
      <div className="max-w-4xl mx-auto text-center z-10 px-4">
        <h1 className="text-5xl md:text-6xl font-bold mb-4 font-[var(--font-calibri)]">
          æquilibrium
        </h1>
        <h2 className="text-xl md:text-2xl mb-6 font-[var(--font-calibri)]">
          A Quantitative Model for structuring a Portfolio of productive Crypto Assets
        </h2>
        <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto font-[var(--font-calibri)]">
          Recognizing the inefficiencies in the cryptocurrency market we leverage a data-driven
          framework to maximize risk-adjusted returns.
        </p>
      </div>
    </motion.div>
  );
} 