"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { PORTFOLIO_DATA } from "../data/portfolioData";

export default function AboutSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const education = PORTFOLIO_DATA.education[0];

  return (
    <section id="about-me" ref={ref} className="border-t border-zinc-100 bg-white py-20 transition-colors dark:border-zinc-900 dark:bg-black sm:py-24">
      <div className="mx-auto w-full max-w-[1200px] px-6 sm:px-10">
        <motion.div initial={{ opacity: 0, y: 12 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.45 }}>
          <p className="text-xs font-semibold uppercase tracking-[.2em] text-zinc-500">About</p>
          <div className="mt-5 grid gap-10 lg:grid-cols-[minmax(0,1fr)_320px] lg:gap-16">
            <div className="space-y-5 text-base leading-7 text-zinc-700 dark:text-zinc-300 sm:text-lg sm:leading-8">
              {PORTFOLIO_DATA.bio.map((paragraph) => <p key={paragraph} className="max-w-3xl">{paragraph}</p>)}
            </div>
            <aside className="h-fit rounded-2xl border border-zinc-200 bg-zinc-50 p-5 dark:border-zinc-800 dark:bg-zinc-950 sm:p-6">
              <h2 className="text-xs font-semibold uppercase tracking-[.16em] text-zinc-500">Education</h2>
              {education && <>
                <p className="mt-3 font-semibold text-zinc-950 dark:text-white">{education.degree}</p>
                <p className="mt-1 text-sm leading-6 text-zinc-600 dark:text-zinc-400">{education.institution}</p>
                <p className="mt-3 text-sm text-zinc-500">{education.period}{education.status ? ` · ${education.status}` : ""}</p>
              </>}
              <div className="mt-5 border-t border-zinc-200 pt-4 dark:border-zinc-800">
                <h3 className="text-xs font-semibold uppercase tracking-[.16em] text-zinc-500">Location</h3>
                <p className="mt-2 text-sm text-zinc-800 dark:text-zinc-200">{PORTFOLIO_DATA.contact.location}</p>
              </div>
            </aside>
          </div>

          <div className="mt-12 border-t border-zinc-200 pt-7 dark:border-zinc-800">
            <h2 className="mb-4 text-sm font-semibold text-zinc-950 dark:text-white">Areas I’m exploring</h2>
            <div className="flex flex-wrap gap-2">
              {["Electronics & embedded systems", "Software development", "UI/UX & product design", "Technical research"].map((area) => <span key={area} className="rounded-full border border-zinc-200 px-3.5 py-2 text-sm text-zinc-700 dark:border-zinc-800 dark:text-zinc-300">{area}</span>)}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
