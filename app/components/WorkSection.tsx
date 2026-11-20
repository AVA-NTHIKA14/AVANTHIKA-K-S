"use client";

import { useRef, useState } from "react";
import { AnimatePresence, motion, useInView } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight, Github, Search, X } from "lucide-react";
import {
  PORTFOLIO_DATA,
  type ProjectDomain,
  type ProjectStatus,
  type ProjectRole,
} from "../data/portfolioData";

const DOMAIN_FILTERS: Array<{ label: string; value: "all" | ProjectDomain }> = [
  { label: "All", value: "all" },
  { label: "Electronics", value: "electronics" },
  { label: "Software", value: "software" },
  { label: "Design", value: "design" },
  { label: "Research", value: "research" },
];

const STATUS_FILTERS: Array<{ label: string; value: "all" | ProjectStatus }> = [
  { label: "Any status", value: "all" },
  { label: "In progress", value: "in-progress" },
  { label: "Completed", value: "completed" },
  { label: "Prototype", value: "prototype" },
  { label: "Research", value: "research" },
  { label: "Archived", value: "archived" },
];

const roleLabel = (role: ProjectRole) => role[0].toUpperCase() + role.slice(1);
const domainLabel = (domain: ProjectDomain) =>
  domain === "electronics"
    ? "Electronics"
    : domain === "software"
      ? "Software"
      : domain === "design"
        ? "Design"
        : "Research";
const statusLabel = (status: ProjectStatus) =>
  status === "in-progress"
    ? "In progress"
    : status === "completed"
      ? "Completed"
      : status === "prototype"
        ? "Prototype"
        : status === "research"
          ? "Research"
          : "Archived";

export default function WorkSection() {
  const [activeDomain, setActiveDomain] = useState<"all" | ProjectDomain>("all");
  const [activeStatus, setActiveStatus] = useState<"all" | ProjectStatus>("all");
  const [activeTechnology, setActiveTechnology] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const visibleProjects = PORTFOLIO_DATA.projects.filter((project) => project.visible);
  const technologies = Array.from(
    new Set(visibleProjects.flatMap((project) => project.technologies)),
  ).sort((a, b) => a.localeCompare(b));
  const query = searchQuery.trim().toLowerCase();
  const filteredProjects = visibleProjects.filter((project) => {
    const matchesDomain = activeDomain === "all" || project.domains.includes(activeDomain);
    const matchesStatus = activeStatus === "all" || project.status === activeStatus;
    const matchesTechnology =
      activeTechnology === "all" || project.technologies.includes(activeTechnology);
    const searchable = [
      project.title,
      project.subtitle,
      project.tagline,
      project.category,
      project.contributionRole,
      ...project.domains.map(domainLabel),
      statusLabel(project.status),
      ...project.technologies,
    ].join(" ").toLowerCase();
    return matchesDomain && matchesStatus && matchesTechnology && (!query || searchable.includes(query));
  });
  const hasActiveFilters =
    activeDomain !== "all" ||
    activeStatus !== "all" ||
    activeTechnology !== "all" ||
    searchQuery.trim().length > 0;
  const clearFilters = () => {
    setActiveDomain("all");
    setActiveStatus("all");
    setActiveTechnology("all");
    setSearchQuery("");
  };

  return (
    <section id="projects" className="bg-white dark:bg-black py-16 border-t border-zinc-100 dark:border-zinc-900 transition-colors">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-12 md:px-24">
        <motion.div ref={ref} initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} className="flex items-center gap-2 mb-12">
          <span className="w-6 h-px bg-zinc-400 dark:bg-zinc-650" />
          <span className="text-zinc-550 dark:text-zinc-400 text-xs tracking-[3px] uppercase font-semibold">Projects</span>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 10 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }} className="mb-10">
          <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500 mb-3">Browse by domain</p>
          <div className="flex flex-wrap gap-2.5">
            {DOMAIN_FILTERS.map(({ label, value }) => (
              <button
                key={value}
                type="button"
                onClick={() => setActiveDomain(value)}
                aria-pressed={activeDomain === value}
                className={`px-4 sm:px-5 py-2.5 rounded-full text-xs font-semibold tracking-wider transition-all cursor-pointer ${activeDomain === value ? "bg-black text-white dark:bg-white dark:text-black" : "bg-zinc-50 border border-zinc-200 text-zinc-600 hover:border-zinc-350 hover:text-black dark:bg-zinc-950 dark:border-zinc-800 dark:text-zinc-400"}`}
              >
                {label}
              </button>
            ))}
          </div>

          <div className="mt-5 grid sm:grid-cols-[minmax(240px,1fr)_minmax(160px,220px)_minmax(180px,240px)_auto] gap-3 items-end">
            <label className="relative block">
              <span className="sr-only">Search projects</span>
              <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400" />
              <input
                type="search"
                value={searchQuery}
                onChange={(event) => setSearchQuery(event.target.value)}
                placeholder="Search projects"
                className="w-full h-11 rounded-full border border-zinc-200 bg-zinc-50 pl-11 pr-4 text-sm text-black outline-none transition-colors focus:border-zinc-400 dark:border-zinc-800 dark:bg-zinc-950 dark:text-white"
              />
            </label>
            <label>
              <span className="sr-only">Filter by status</span>
              <select
                value={activeStatus}
                onChange={(event) => setActiveStatus(event.target.value as "all" | ProjectStatus)}
                className="w-full h-11 rounded-full border border-zinc-200 bg-zinc-50 px-4 text-xs font-semibold text-zinc-700 outline-none focus:border-zinc-400 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-300"
              >
                {STATUS_FILTERS.map(({ label, value }) => (
                  <option key={value} value={value}>{label}</option>
                ))}
              </select>
            </label>
            <label>
              <span className="sr-only">Filter by technology</span>
              <select
                value={activeTechnology}
                onChange={(event) => setActiveTechnology(event.target.value)}
                className="w-full h-11 rounded-full border border-zinc-200 bg-zinc-50 px-4 text-xs font-semibold text-zinc-700 outline-none focus:border-zinc-400 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-300"
              >
                <option value="all">Any technology</option>
                {technologies.map((technology) => (
                  <option key={technology} value={technology}>{technology}</option>
                ))}
              </select>
            </label>
            <button
              type="button"
              onClick={clearFilters}
              disabled={!hasActiveFilters}
              className="h-11 inline-flex items-center justify-center gap-2 rounded-full px-4 text-xs font-bold text-zinc-600 transition-colors hover:text-black disabled:cursor-not-allowed disabled:opacity-40 dark:text-zinc-400 dark:hover:text-white"
            >
              <X size={14} /> Clear all
            </button>
          </div>
          <p className="mt-4 text-xs font-semibold text-zinc-500" aria-live="polite">
            {filteredProjects.length} {filteredProjects.length === 1 ? "project" : "projects"} found
          </p>
        </motion.div>
        {filteredProjects.length === 0 ? (
          <div className="min-h-[260px] rounded-3xl border border-dashed border-zinc-300 dark:border-zinc-800 flex flex-col items-center justify-center px-6 text-center">
            <Search size={28} className="text-zinc-400 mb-4" />
            <h3 className="text-lg font-bold text-black dark:text-white">No matching projects</h3>
            <p className="mt-2 max-w-md text-sm leading-relaxed text-zinc-500">
              Try a different domain, status, technology, or search term.
            </p>
            <button
              type="button"
              onClick={clearFilters}
              className="mt-5 rounded-full bg-black px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white dark:bg-white dark:text-black"
            >
              Clear filters
            </button>
          </div>
        ) : (
        <div className="grid md:grid-cols-2 gap-8 text-left">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.article key={project.slug} layout initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.98 }} transition={{ duration: 0.4 }} className="border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 hover:border-zinc-300 dark:hover:border-zinc-700 hover:shadow-md transition-all duration-300 rounded-3xl p-6 sm:p-8 flex flex-col justify-between min-h-[300px] relative group">
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex flex-wrap gap-2">
                      {project.role.map((role) => <span key={role} className="text-xs font-semibold tracking-wider text-zinc-800 dark:text-zinc-100 bg-zinc-100 dark:bg-zinc-800 px-3 py-1 rounded-full uppercase">{roleLabel(role)}</span>)}
                      {project.origin === "hackathon" && <span className="text-[10px] font-semibold tracking-wider text-zinc-500 border border-zinc-200 dark:border-zinc-800 px-2.5 py-1 rounded-full uppercase">Hackathon</span>}
                      <span className="text-[10px] font-semibold tracking-wider text-zinc-500 border border-zinc-200 dark:border-zinc-800 px-2.5 py-1 rounded-full uppercase">{statusLabel(project.status)}</span>
                      {project.featured && <span className="text-[10px] font-semibold tracking-wider text-zinc-500 border border-zinc-200 dark:border-zinc-800 px-2.5 py-1 rounded-full uppercase">Featured</span>}
                    </div>
                    <Link href={`/projects/${project.slug}`} className="text-zinc-400 dark:text-zinc-500 group-hover:text-black dark:group-hover:text-white transition-colors" title="View case study"><ArrowUpRight size={18} /></Link>
                  </div>
                  <Link href={`/projects/${project.slug}`} className="block group cursor-pointer mt-2"><h3 className="text-black dark:text-white font-bold text-xl sm:text-2xl group-hover:underline tracking-tight">{project.title}</h3></Link>
                  <p className="text-zinc-600 dark:text-zinc-400 text-xs sm:text-sm font-normal mt-2 leading-relaxed max-w-[450px]">{project.tagline}</p>
                  <p className="mt-3 text-[10px] font-bold uppercase tracking-[1.5px] text-zinc-400">{project.domains.map(domainLabel).join(" / ")}</p>
                </div>
                <div className="flex items-end justify-between gap-4 mt-6 pt-4 border-t border-zinc-100 dark:border-zinc-900">
                  <div className="flex flex-wrap gap-1.5">{project.technologies.slice(0, 4).map((tech) => <span key={tech} className="text-zinc-600 dark:text-zinc-350 text-xs font-semibold px-2.5 py-1 rounded border border-zinc-150 dark:border-zinc-800 bg-zinc-50/60 dark:bg-zinc-900/40">{tech}</span>)}</div>
                  {project.githubUrl && <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="text-zinc-450 dark:text-zinc-500 hover:text-black dark:hover:text-white transition-colors" title="View GitHub repository"><Github size={16} /></a>}
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>
        )}
      </div>
    </section>
  );
}
