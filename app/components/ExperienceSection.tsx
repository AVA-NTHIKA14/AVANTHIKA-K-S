"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { PORTFOLIO_DATA } from "../data/portfolioData";

export default function ExperienceSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="bg-white dark:bg-black py-16 border-t border-zinc-100 dark:border-zinc-900 flex items-center transition-colors">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-12 md:px-24 w-full">
        
        {/* Section tag header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          className="flex items-center gap-2 mb-12 text-left"
        >
          <span className="w-6 h-px bg-zinc-400 dark:bg-zinc-650" />
          <span className="text-zinc-550 dark:text-zinc-400 text-xs tracking-[3px] uppercase font-semibold">EXPERIENCE</span>
        </motion.div>

        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-black dark:text-white font-bold text-2xl sm:text-3xl md:text-4xl tracking-tight mb-16 text-left leading-tight"
        >
          Where I&apos;ve worked.
        </motion.h2>

        {/* Timeline Stack */}
        <div className="space-y-6 max-w-5xl text-left">
          {PORTFOLIO_DATA.experience.map((exp, idx) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 hover:border-zinc-300 dark:hover:border-zinc-700 hover:shadow-sm transition-all duration-300 rounded-[32px] p-6 sm:p-8 relative flex flex-col justify-between shadow-sm"
            >
              <div>
                {/* Header row */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                  <div>
                    <h3 className="text-black dark:text-white font-bold text-lg tracking-tight inline-block">
                      {exp.role}
                    </h3>
                    <span className="text-zinc-400 dark:text-zinc-600 font-extrabold text-base mx-2 select-none">·</span>
                    <span className="text-zinc-600 dark:text-zinc-300 font-semibold text-base tracking-tight">
                      {exp.company}
                    </span>
                  </div>

                  <span className="text-xs text-zinc-600 dark:text-zinc-400 font-semibold font-mono bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 px-3.5 py-1 rounded-full w-fit">
                    {exp.period}
                  </span>
                </div>

                {/* Bullets */}
                <ul className="space-y-2 text-zinc-600 dark:text-zinc-300 text-xs sm:text-sm font-normal leading-relaxed list-disc pl-4 mb-6">
                  {exp.description.map((bullet, bIdx) => (
                    <li key={bIdx}>{bullet}</li>
                  ))}
                </ul>
              </div>

              {/* Skills badges footer */}
              <div className="flex flex-wrap gap-2 pt-4 border-t border-zinc-100 dark:border-zinc-900">
                {exp.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-zinc-600 dark:text-zinc-400 text-xs font-semibold px-3 py-1 rounded-full border border-zinc-200 dark:border-zinc-850 bg-zinc-50/50 dark:bg-zinc-900/40"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
