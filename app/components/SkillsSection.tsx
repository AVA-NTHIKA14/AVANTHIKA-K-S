"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { PORTFOLIO_DATA } from "../data/portfolioData";

export default function SkillsSection() {
  return (
    <section id="skills" className="border-t border-zinc-100 bg-white py-20 dark:border-zinc-900 dark:bg-black sm:py-24">
      <div className="mx-auto max-w-[1200px] px-6 sm:px-10">
        <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }}>
          <p className="text-xs font-semibold uppercase tracking-[.2em] text-zinc-500">Skills</p>
          <div className="mt-4 flex flex-wrap items-end justify-between gap-4">
            <div>
              <h2 className="text-3xl font-semibold tracking-tight text-zinc-950 dark:text-white sm:text-4xl">Tools and technologies</h2>
              <p className="mt-3 max-w-2xl text-sm leading-6 text-zinc-600 dark:text-zinc-400">A snapshot of the areas and tools represented in my current project work.</p>
            </div>
            <a href={PORTFOLIO_DATA.contact.github} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center gap-2 rounded-full border border-zinc-300 px-4 py-2 text-sm font-medium text-zinc-800 hover:border-zinc-500 dark:border-zinc-700 dark:text-zinc-200 dark:hover:border-zinc-500"><Github size={16} aria-hidden="true" /> GitHub profile <ExternalLink size={14} aria-hidden="true" /></a>
          </div>
        </motion.div>

        <div className="mt-9 grid gap-4 md:grid-cols-2">
          {PORTFOLIO_DATA.skills.map((group, index) => (
            <motion.section key={group.title} aria-labelledby={`skill-group-${index}`} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.35, delay: index * 0.04 }} className="rounded-2xl border border-zinc-200 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-950 sm:p-6">
              <h3 id={`skill-group-${index}`} className="font-semibold text-zinc-950 dark:text-white">{group.title}</h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {group.skills.map((skill) => <li key={skill} className="rounded-full bg-zinc-100 px-3 py-1.5 text-sm text-zinc-700 dark:bg-zinc-900 dark:text-zinc-300">{skill}</li>)}
              </ul>
            </motion.section>
          ))}
        </div>
      </div>
    </section>
  );
}
