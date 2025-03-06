"use client";

import { motion } from "framer-motion";
import { HeroPill } from "@/components/ui/hero-pill";
import { Button } from "@/components/ui/button";
import { FileText } from "lucide-react";

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
      className="relative flex flex-col gap-4 items-center justify-center px-4 py-8"
    >
      <div className="max-w-4xl mx-auto text-center z-10 px-4">
        <div className="flex justify-center mb-20 mt-6">
          <HeroPill 
            href="#"
            label="Coming soon"
            announcement="🚀 Launch"
            className="bg-primary/20 ring-accent"
          />
        </div>
        <h1 className="text-5xl md:text-6xl font-bold mb-8 font-[var(--font-calibri)]">
          æquilibrium
        </h1>
        <h2 className="text-xl md:text-2xl mb-8 font-[var(--font-calibri)]">
          A Quantitative Framework for structuring a Portfolio of productive Crypto Assets
        </h2>
        <p className="text-lg md:text-xl mb-16 max-w-3xl mx-auto font-[var(--font-calibri)]">
          Aequilibrium is developing a quantitative yield optimizing model to intercept the growing institutional demand in asset management for stablecoin and crypto assets.
        </p>
        <div className="flex justify-center mt-20 mb-6">
          <Button className="group">
            Read paper
            <FileText
              className="-me-1 ms-2 opacity-60 transition-transform group-hover:translate-x-0.5"
              size={16}
              strokeWidth={2}
              aria-hidden="true"
            />
          </Button>
        </div>
      </div>
    </motion.div>
  );
} 