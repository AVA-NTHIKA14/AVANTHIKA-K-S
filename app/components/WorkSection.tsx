"use client";

import { useRef, useState } from "react";
import { AnimatePresence, motion, useInView } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight, Github } from "lucide-react";
import { PORTFOLIO_DATA, type ProjectRole } from "../data/portfolioData";

const ROLE_FILTERS: Array<{ label: string; value: "all" | ProjectRole }> = [
  { label: "All", value: "all" },
  { label: "Builder", value: "builder" },
  { label: "Designer", value: "designer" },
  { label: "Maker", value: "maker" },
];

const roleLabel = (role: ProjectRole) => role[0].toUpperCase() + role.slice(1);

export default function WorkSection() {
  const [activeFilter, setActiveFilter] = useState<"all" | ProjectRole>("all");
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const filteredProjects = activeFilter === "all" ? PORTFOLIO_DATA.projects : PORTFOLIO_DATA.projects.filter((project) => project.role.includes(activeFilter));

  return (
    <section id="projects" className="bg-white dark:bg-black py-16 border-t border-zinc-100 dark:border-zinc-900 transition-colors">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-12 md:px-24">
        <motion.div ref={ref} initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} className="flex items-center gap-2 mb-12">
          <span className="w-6 h-px bg-zinc-400 dark:bg-zinc-650" />
          <span className="text-zinc-550 dark:text-zinc-400 text-xs tracking-[3px] uppercase font-semibold">Projects</span>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 10 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }} className="mb-12">
          <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500 mb-3">Browse by focus</p>
          <div className="flex flex-wrap gap-2.5">
            {ROLE_FILTERS.map(({ label, value }) => <button key={value} onClick={() => setActiveFilter(value)} className={`px-5 py-2.5 rounded-full text-xs font-semibold tracking-wider transition-all cursor-pointer ${activeFilter === value ? "bg-black text-white dark:bg-white dark:text-black" : "bg-zinc-50 border border-zinc-200 text-zinc-600 hover:border-zinc-350 hover:text-black dark:bg-zinc-950 dark:border-zinc-800 dark:text-zinc-400"}`}>{label}</button>)}
          </div>
        </motion.div>
        <div className="grid md:grid-cols-2 gap-8 text-left">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.article key={project.slug} layout initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.98 }} transition={{ duration: 0.4 }} className="border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 hover:border-zinc-300 dark:hover:border-zinc-700 hover:shadow-md transition-all duration-300 rounded-3xl p-6 sm:p-8 flex flex-col justify-between min-h-[300px] relative group">
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex flex-wrap gap-2">
                      {project.role.map((role) => <span key={role} className="text-xs font-semibold tracking-wider text-zinc-800 dark:text-zinc-100 bg-zinc-100 dark:bg-zinc-800 px-3 py-1 rounded-full uppercase">{roleLabel(role)}</span>)}
                      {project.origin === "hackathon" && <span className="text-[10px] font-semibold tracking-wider text-zinc-500 border border-zinc-200 dark:border-zinc-800 px-2.5 py-1 rounded-full uppercase">Hackathon</span>}
                    </div>
                    <Link href={`/projects/${project.slug}`} className="text-zinc-400 dark:text-zinc-500 group-hover:text-black dark:group-hover:text-white transition-colors" title="View case study"><ArrowUpRight size={18} /></Link>
                  </div>
                  <Link href={`/projects/${project.slug}`} className="block group cursor-pointer mt-2"><h3 className="text-black dark:text-white font-bold text-xl sm:text-2xl group-hover:underline tracking-tight">{project.title}</h3></Link>
                  <p className="text-zinc-600 dark:text-zinc-400 text-xs sm:text-sm font-normal mt-2 leading-relaxed max-w-[450px]">{project.tagline}</p>
                </div>
                <div className="flex items-end justify-between gap-4 mt-6 pt-4 border-t border-zinc-100 dark:border-zinc-900">
                  <div className="flex flex-wrap gap-1.5">{project.techStack.slice(0, 4).map((tech) => <span key={tech} className="text-zinc-600 dark:text-zinc-350 text-xs font-semibold px-2.5 py-1 rounded border border-zinc-150 dark:border-zinc-800 bg-zinc-50/60 dark:bg-zinc-900/40">{tech}</span>)}</div>
                  {project.githubUrl && <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="text-zinc-450 dark:text-zinc-500 hover:text-black dark:hover:text-white transition-colors" title="View GitHub repository"><Github size={16} /></a>}
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
