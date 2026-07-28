"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { PORTFOLIO_DATA } from "../data/portfolioData";

export default function AboutSection() {
  const ref = useRef(null);
  const inView = useInView(ref, {
    once: true,
    margin: "-100px",
  });

  return (
    <section
      id="about-me"
      ref={ref}
      className="relative bg-white dark:bg-black overflow-hidden flex items-center py-16 border-t border-zinc-100 dark:border-zinc-900 transition-colors"
    >
      <div className="relative z-10 max-w-[1440px] mx-auto w-full px-6 sm:px-12 md:px-24">
        
        {/* Section tag header */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          className="flex items-center gap-2 mb-12"
        >
          <span className="w-6 h-px bg-zinc-400 dark:bg-zinc-650" />
          <span className="text-zinc-550 dark:text-zinc-400 text-xs tracking-[3px] uppercase font-semibold">ABOUT</span>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-16 items-start">
          {/* LEFT CONTENT */}
          <div className="lg:col-span-7">
            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7 }}
              className="text-black dark:text-zinc-200 font-normal text-lg sm:text-xl md:text-2xl leading-[1.6] mb-8 tracking-normal text-left"
            >
              I&apos;m a product design practitioner studying Electronics & Communication Engineering at GEC Palakkad. My work sits at the intersection of engineering logic and human empathy.
              <br />
              <br />
              I believe the best interfaces are invisible they solve problems so intuitively that users never notice the design. I&apos;m obsessed with the moment when complexity becomes clarity.
              <br />
              <br />
              Currently building my craft through real problems, design communities, and a healthy obsession with how things work.
            </motion.h2>
          </div>

          {/* RIGHT ABOUT ME CARD */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="w-full max-w-[420px] bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-3xl p-8 shadow-sm"
            >
              <h3 className="text-zinc-500 dark:text-zinc-450 font-bold text-xs uppercase tracking-[3px] mb-6">
                ABOUT ME
              </h3>

              <div className="space-y-4 text-xs">
                {/* Role */}
                <div className="flex justify-between py-3 border-b border-zinc-100 dark:border-zinc-900">
                  <span className="text-zinc-500 dark:text-zinc-400 font-medium">Role</span>
                  <span className="text-black dark:text-white font-semibold text-right">Product Designer + Builder</span>
                </div>
                {/* Location */}
                <div className="flex justify-between py-3 border-b border-zinc-100 dark:border-zinc-900">
                  <span className="text-zinc-500 dark:text-zinc-400 font-medium">Location</span>
                  <span className="text-black dark:text-white font-semibold text-right">{PORTFOLIO_DATA.contact.location}</span>
                </div>
                {/* Interest */}
                <div className="flex justify-between py-3 border-b border-zinc-100 dark:border-zinc-900">
                  <span className="text-zinc-500 dark:text-zinc-400 font-medium">Interest</span>
                  <span className="text-black dark:text-white font-semibold text-right">UI/UX Design · Full-Stack Development</span>
                </div>
                {/* Currently */}
                <div className="flex justify-between py-3">
                  <span className="text-zinc-500 dark:text-zinc-400 font-medium">Currently</span>
                  <span className="text-black dark:text-white font-semibold text-right max-w-[200px]">Final year ECE Student at GEC Palakkad</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* BOTTOM METRICS */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-3xl mt-16 border-t border-zinc-100 dark:border-zinc-900 pt-12 text-left"
        >
          {/* Projects */}
          <div className="bg-zinc-50/60 dark:bg-zinc-900/40 border border-zinc-100 dark:border-zinc-900 rounded-2xl p-6 flex flex-col items-start shadow-sm">
            <span className="text-3xl font-bold text-black dark:text-white">6+</span>
            <span className="text-zinc-500 dark:text-zinc-400 text-xs font-semibold uppercase tracking-wider mt-2">Projects Built</span>
          </div>

          {/* Design Reviews */}
          <div className="bg-zinc-50/60 dark:bg-zinc-900/40 border border-zinc-100 dark:border-zinc-900 rounded-2xl p-6 flex flex-col items-start shadow-sm">
            <span className="text-3xl font-bold text-black dark:text-white">3+</span>
            <span className="text-zinc-550 dark:text-zinc-400 text-xs font-semibold uppercase tracking-wider mt-2">Design Reviewed</span>
          </div>

          {/* Communities */}
          <div className="bg-zinc-50/60 dark:bg-zinc-900/40 border border-zinc-100 dark:border-zinc-900 rounded-2xl p-6 flex flex-col items-start shadow-sm col-span-2 md:col-span-1">
            <span className="text-3xl font-bold text-black dark:text-white">4+</span>
            <span className="text-zinc-550 dark:text-zinc-400 text-xs font-semibold uppercase tracking-wider mt-2">Communities</span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}