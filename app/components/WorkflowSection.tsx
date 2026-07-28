"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function WorkflowSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const principles = [
    {
      num: "01",
      title: "Design is a clarity problem",
      text: "Every interface has one job: make the next step obvious. If a user needs to think, something in the design is doing extra work it shouldn't."
    },
    {
      num: "02",
      title: "Context shapes every decision",
      text: "A solution that works on a desktop in a quiet office fails on a phone at a bus stop. Good design anticipates the environment it will live in."
    },
    {
      num: "03",
      title: "Ship to learn, not to finish",
      text: "Perfection in isolation is a trap. Putting work in front of real people early and often is the only way to build something that actually works."
    }
  ];

  return (
    <section id="workflow" className="bg-white dark:bg-black py-16 border-t border-zinc-100 dark:border-zinc-900 flex items-center transition-colors">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-12 md:px-24 w-full">
        
        {/* Section header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          className="flex items-center gap-2 mb-16 text-left"
        >
          <span className="w-6 h-px bg-zinc-400 dark:bg-zinc-650" />
          <span className="text-zinc-550 dark:text-zinc-400 text-xs tracking-[3px] uppercase font-semibold">MY WORK FLOW</span>
        </motion.div>

        {/* Big headline */}
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-black dark:text-white font-bold text-2xl sm:text-3xl md:text-4xl tracking-tight mb-16 max-w-4xl text-left leading-tight"
        >
          Three design principles I don&apos;t compromise on.
        </motion.h2>

        {/* 3 Principles Cards Stack */}
        <div className="space-y-6 max-w-5xl text-left">
          {principles.map((pr, idx) => (
            <motion.div
              key={pr.num}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 hover:border-zinc-300 dark:hover:border-zinc-700 hover:shadow-sm transition-all duration-300 rounded-[32px] p-6 sm:p-8 flex flex-col sm:flex-row gap-4 sm:gap-12 items-start shadow-sm"
            >
              {/* Number and Title */}
              <div className="sm:w-[320px] flex-shrink-0">
                <span className="text-zinc-400 dark:text-zinc-500 font-bold text-sm sm:text-base font-mono">
                  {pr.num} /
                </span>
                <h3 className="text-black dark:text-white font-bold text-lg mt-1 tracking-tight">
                  {pr.title}
                </h3>
              </div>

              {/* Text */}
              <p className="text-zinc-600 dark:text-zinc-450 text-xs sm:text-sm font-normal leading-relaxed sm:mt-1">
                {pr.text}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
