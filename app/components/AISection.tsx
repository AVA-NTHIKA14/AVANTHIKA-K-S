"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function AISection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const aiPillars = [
    {
      title: "Research Synthesis",
      text: "I use AI to cluster and surface patterns from user interview transcripts cutting synthesis time by 60% so I can focus on interpretation."
    },
    {
      title: "Variant Generation",
      text: "For early explorations, AI helps me generate UI copy variants and iconography directions raw material I curate, not finalize."
    },
    {
      title: "Accessibility Audit",
      text: "Automated contrast checks and ARIA suggestions run in parallel with manual review AI handles the checklist so I focus on edge cases."
    }
  ];

  return (
    <section id="ai-process" className="bg-white dark:bg-black py-8 border-t border-zinc-100 dark:border-zinc-900 transition-colors">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-12 md:px-24 w-full">
        
        {/* Section tag */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          className="flex items-center gap-2 mb-12 text-left"
        >
          <span className="w-6 h-px bg-zinc-400 dark:bg-zinc-650" />
          <span className="text-zinc-550 dark:text-zinc-450 text-xs tracking-[3px] uppercase font-semibold">AI IN MY PROCESS</span>
        </motion.div>

        {/* Big headline */}
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-black dark:text-white font-bold text-2xl sm:text-3xl md:text-4xl tracking-tight mb-12 max-w-4xl text-left leading-tight"
        >
          I use AI as a <span className="text-zinc-400 dark:text-zinc-500 font-normal">collaborator</span>, not a replacement.
        </motion.h2>

        {/* 3 Pillars Grid */}
        <div className="grid md:grid-cols-3 gap-6 text-left">
          {aiPillars.map((p, idx) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 hover:border-zinc-300 dark:hover:border-zinc-700 hover:shadow-sm transition-all duration-300 rounded-2xl p-6 flex flex-col justify-start h-[220px] shadow-sm"
            >
              <h3 className="text-black dark:text-white font-bold text-lg tracking-tight mb-3">
                {p.title}
              </h3>
              <p className="text-zinc-600 dark:text-zinc-400 text-xs sm:text-sm font-normal leading-relaxed">
                {p.text}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
