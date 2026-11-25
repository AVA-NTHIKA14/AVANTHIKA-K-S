"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap } from "lucide-react";
import { PORTFOLIO_DATA } from "../data/portfolioData";

export default function EducationSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="education" className="relative bg-white dark:bg-black py-16 overflow-hidden border-t border-zinc-100 dark:border-zinc-900 transition-colors">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-12 md:px-24">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          className="flex items-center gap-2 mb-12 text-left"
        >
          <span className="w-6 h-px bg-zinc-400 dark:bg-zinc-650" />
          <span className="text-zinc-550 dark:text-zinc-400 text-xs tracking-[3px] uppercase font-semibold">BACKGROUND</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="font-bold text-black dark:text-white text-2xl sm:text-3xl md:text-4xl tracking-tight mb-16 text-left leading-tight"
        >
          Education.
        </motion.h2>

        <div className="max-w-2xl text-left">
          <h3 className="text-black dark:text-white font-bold text-lg mb-6 flex items-center gap-2.5">
            <GraduationCap className="text-zinc-700 dark:text-zinc-400" size={20} /> Education
          </h3>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 rounded-2xl p-6 shadow-sm relative group hover:border-zinc-300 dark:hover:border-zinc-700 transition-all duration-300"
          >
            <div className="w-10 h-10 rounded-xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 flex items-center justify-center mb-6">
              <GraduationCap className="text-zinc-500 dark:text-zinc-400" size={20} />
            </div>

            <span className="text-xs text-zinc-600 dark:text-zinc-300 font-mono tracking-wider bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 px-3.5 py-1.5 rounded font-semibold">
              {PORTFOLIO_DATA.education[0].period}
            </span>

            <h4 className="text-black dark:text-white text-lg font-bold mt-6 leading-tight tracking-tight">
              {PORTFOLIO_DATA.education[0].institution}
            </h4>
            <p className="text-zinc-550 dark:text-zinc-400 font-medium text-xs sm:text-sm mt-2">
              {PORTFOLIO_DATA.education[0].degree}
            </p>

            <div className="mt-6 pt-4 border-t border-zinc-100 dark:border-zinc-900 flex justify-between items-center text-xs">
              <span className="text-zinc-500 dark:text-zinc-400 font-semibold">Status</span>
              <span className="text-black dark:text-white font-bold">{PORTFOLIO_DATA.education[0].status}</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
