"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, ExternalLink, Github, Search, X } from "lucide-react";
import { PORTFOLIO_DATA } from "../data/portfolioData";
import { ROLE_FOCUSES, type RoleFocus } from "../data/roleFocus";
import type { CaseStudy, ProjectDomain, ProjectStatus } from "../types";

const DOMAIN_FILTERS: { id: ProjectDomain; label: string }[] = [
  { id: "electronics", label: "Electronics & Embedded Systems" },
  { id: "software", label: "Software Development" },
  { id: "design", label: "UI/UX & Product Design" },
  { id: "research", label: "Research & Experiments" },
];

const STATUS_LABELS: Record<ProjectStatus, string> = {
  completed: "Completed",
  prototype: "Prototype",
  "in-progress": "In progress",
  research: "Research",
  archived: "Archived",
};

const PROJECTS = PORTFOLIO_DATA.projects.filter((project) => project.visibility === "public");
const FEATURED_PROJECTS = PROJECTS.filter((project) => project.featured);
const DEFAULT_START_PROJECTS = ["lsg-track", "koode-ai", "roadsense"];
const TECHNOLOGIES = Array.from(new Set(PROJECTS.flatMap((project) => project.technologyStack))).sort((a, b) => a.localeCompare(b));

function isRoleFocus(value: string): value is RoleFocus {
  return Object.prototype.hasOwnProperty.call(ROLE_FOCUSES, value);
}

function ProjectCard({ project, isFocusMatch = false }: { project: CaseStudy; isFocusMatch?: boolean }) {
  return (
    <article className="flex h-full flex-col rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-zinc-400 hover:shadow-md dark:border-zinc-800 dark:bg-zinc-950 dark:hover:border-zinc-600 sm:p-6">
      {project.screenshots?.[0] && (
        <Image
          src={project.screenshots[0].src}
          alt={project.screenshots[0].alt}
          width={1440}
          height={900}
          sizes="(max-width: 768px) 100vw, 50vw"
          loading="lazy"
          className="mb-5 aspect-video w-full rounded-xl border border-zinc-200 object-cover dark:border-zinc-800"
        />
      )}
      <div className="flex flex-wrap items-center gap-2">
        {isFocusMatch && <span className="rounded-full border border-zinc-300 px-3 py-1 text-xs font-semibold text-zinc-800 dark:border-zinc-700 dark:text-zinc-200">Relevant to this view</span>}
        <span className="rounded-full bg-zinc-100 px-3 py-1 text-xs font-semibold text-zinc-700 dark:bg-zinc-900 dark:text-zinc-300">{STATUS_LABELS[project.status]}</span>
        {project.domains.map((domain) => <span key={domain} className="text-xs text-zinc-500 dark:text-zinc-400">{DOMAIN_FILTERS.find((item) => item.id === domain)?.label}</span>)}
      </div>

      <h3 className="mt-4 text-xl font-semibold tracking-tight text-zinc-950 dark:text-white">
        <Link href={`/projects/${project.slug}`} className="rounded-sm hover:underline hover:underline-offset-4">
          {project.title}<span className="sr-only"> — view case study</span>
        </Link>
      </h3>
      <p className="mt-1 text-sm font-medium text-zinc-600 dark:text-zinc-300">{project.subtitle}</p>
      <p className="mt-3 flex-1 text-sm leading-6 text-zinc-600 dark:text-zinc-400">{project.description}</p>

      <div className="mt-5 rounded-xl bg-zinc-50 p-4 dark:bg-zinc-900/70">
        <p className="text-xs font-semibold uppercase tracking-wide text-zinc-500">My contribution</p>
        <p className="mt-1 text-sm text-zinc-800 dark:text-zinc-200">{project.contribution}</p>
      </div>

      <ul aria-label="Technologies" className="mt-4 flex flex-wrap gap-2">
        {project.technologyStack.slice(0, 5).map((technology) => <li key={technology} className="rounded-full border border-zinc-200 px-2.5 py-1 text-xs text-zinc-600 dark:border-zinc-800 dark:text-zinc-400">{technology}</li>)}
        {project.technologyStack.length > 5 && <li className="px-1 py-1 text-xs text-zinc-500">+{project.technologyStack.length - 5} more</li>}
      </ul>

      <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-3 border-t border-zinc-100 pt-4 dark:border-zinc-800">
        <Link href={`/projects/${project.slug}`} className="inline-flex min-h-10 items-center gap-1 text-sm font-semibold text-zinc-950 underline decoration-zinc-300 underline-offset-4 hover:decoration-zinc-950 dark:text-white dark:hover:decoration-white">
          Case study <ArrowUpRight size={15} aria-hidden="true" />
        </Link>
        {project.githubUrl && <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-10 items-center gap-1.5 text-sm text-zinc-600 hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-white"><Github size={15} aria-hidden="true" /> Source</a>}
        {project.liveUrl && <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-10 items-center gap-1.5 text-sm text-zinc-600 hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-white">Live project <ExternalLink size={14} aria-hidden="true" /></a>}
        {project.figmaUrl && <a href={project.figmaUrl} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-10 items-center gap-1.5 text-sm text-zinc-600 hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-white">Design <ExternalLink size={14} aria-hidden="true" /></a>}
      </div>
    </article>
  );
}

export default function WorkSection() {
  const projects = PROJECTS;
  const [selectedDomains, setSelectedDomains] = useState<ProjectDomain[]>([]);
  const [status, setStatus] = useState<ProjectStatus | "">("");
  const [technology, setTechnology] = useState("");
  const [query, setQuery] = useState("");
  const [focusRole, setFocusRole] = useState<RoleFocus | null>(null);

  useEffect(() => {
    const requestedFocus = new URLSearchParams(window.location.search).get("focus");
    if (requestedFocus && isRoleFocus(requestedFocus)) setFocusRole(requestedFocus);
  }, []);

  const focusDomain = focusRole ? ROLE_FOCUSES[focusRole].domain : null;
  const featuredProjects = useMemo(() => {
    if (!focusDomain) return DEFAULT_START_PROJECTS.map((slug) => FEATURED_PROJECTS.find((project) => project.slug === slug)).filter((project): project is CaseStudy => Boolean(project));
    return FEATURED_PROJECTS.filter((project) => project.domains.includes(focusDomain)).slice(0, 3);
  }, [focusDomain]);

  const filteredProjects = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    const matches = projects.filter((project) => {
      const matchesDomain = selectedDomains.length === 0 || selectedDomains.some((domain) => project.domains.includes(domain));
      const matchesStatus = !status || project.status === status;
      const matchesTechnology = !technology || project.technologyStack.includes(technology);
      const searchableText = [project.title, project.subtitle, project.description, ...project.technologyStack].join(" ").toLowerCase();
      const matchesQuery = !normalizedQuery || searchableText.includes(normalizedQuery);
      return matchesDomain && matchesStatus && matchesTechnology && matchesQuery;
    });
    if (!focusDomain) return matches;
    return matches.sort((a, b) => Number(b.domains.includes(focusDomain)) - Number(a.domains.includes(focusDomain)));
  }, [projects, query, selectedDomains, status, technology, focusDomain]);

  const hasFilters = selectedDomains.length > 0 || status !== "" || technology !== "" || query.trim() !== "";
  const hasActiveView = hasFilters || focusRole !== null;
  const toggleDomain = (domain: ProjectDomain) => {
    setSelectedDomains((current) => current.includes(domain) ? current.filter((item) => item !== domain) : [...current, domain]);
  };
  const clearFilters = () => {
    setSelectedDomains([]);
    setStatus("");
    setTechnology("");
    setQuery("");
    setFocusRole(null);
    const url = new URL(window.location.href);
    url.searchParams.delete("focus");
    window.history.replaceState(window.history.state, "", `${url.pathname}${url.search}${url.hash}`);
  };

  return (
    <section id="projects" className="border-t border-zinc-200 bg-white py-20 dark:border-zinc-900 dark:bg-black sm:py-28">
      <div className="mx-auto max-w-[1200px] px-6 sm:px-10">
        <header className="mb-12 max-w-3xl">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[.2em] text-zinc-500">Project catalogue</p>
          <h2 className="text-3xl font-semibold tracking-tight text-zinc-950 dark:text-white sm:text-5xl">Selected projects</h2>
          <p className="mt-4 text-base leading-7 text-zinc-600 dark:text-zinc-400">Start with work for your role, or browse every project by domain, status or technology.</p>
        </header>

        {focusRole && (
          <div className="mb-10 flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-zinc-200 bg-zinc-50 p-5 dark:border-zinc-800 dark:bg-zinc-950 sm:p-6" role="status">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[.16em] text-zinc-500">Role-focused view</p>
              <h3 className="mt-1 font-semibold text-zinc-950 dark:text-white">{ROLE_FOCUSES[focusRole].label}</h3>
              <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">{ROLE_FOCUSES[focusRole].description}. Relevant projects are listed first; the full catalogue remains below.</p>
            </div>
            <div className="flex flex-wrap items-center gap-4">
              {focusRole === "design" && PORTFOLIO_DATA.designPortfolioUrl && <a href={PORTFOLIO_DATA.designPortfolioUrl} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-10 items-center gap-1.5 text-sm font-medium underline underline-offset-4">Open Figma portfolio <ExternalLink size={14} aria-hidden="true" /></a>}
              <button type="button" onClick={clearFilters} className="min-h-10 text-sm font-medium underline underline-offset-4">Clear role focus</button>
            </div>
          </div>
        )}

        {featuredProjects.length > 0 && (
          <section aria-labelledby="featured-projects-heading" className="mb-16">
            <div className="mb-5 flex flex-wrap items-end justify-between gap-3">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[.18em] text-zinc-500">A starting point</p>
                <h3 id="featured-projects-heading" className="mt-1 text-xl font-semibold tracking-tight text-zinc-950 dark:text-white">{focusRole ? `For ${ROLE_FOCUSES[focusRole].label}` : "Start here"}</h3>
              </div>
              <span className="text-sm text-zinc-500">{featuredProjects.length} featured</span>
            </div>
            <div className="grid gap-3 md:grid-cols-2">
              {featuredProjects.map((project) => (
                <Link key={project.slug} href={`/projects/${project.slug}`} className="group rounded-xl border border-zinc-200 p-4 transition hover:border-zinc-400 dark:border-zinc-800 dark:hover:border-zinc-600 sm:p-5">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="flex flex-wrap items-center gap-2"><span className="text-xs text-zinc-500">{STATUS_LABELS[project.status]}</span>{focusDomain && project.domains.includes(focusDomain) && <span className="text-xs font-semibold text-zinc-800 dark:text-zinc-200">Relevant match</span>}</div>
                      <h4 className="mt-1 font-semibold text-zinc-950 group-hover:underline group-hover:underline-offset-4 dark:text-white">{project.title}</h4>
                      <p className="mt-1 text-sm leading-6 text-zinc-600 dark:text-zinc-400">{project.description}</p>
                    </div>
                    <ArrowUpRight size={18} className="mt-1 shrink-0 text-zinc-500" aria-hidden="true" />
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}
        <section aria-labelledby="all-projects-heading">
          <div className="mb-6 flex flex-wrap items-end justify-between gap-3">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[.18em] text-zinc-500">Explore the catalogue</p>
              <h3 id="all-projects-heading" className="mt-1 text-2xl font-semibold tracking-tight text-zinc-950 dark:text-white">All projects</h3>
            </div>
            <p className="text-sm text-zinc-500" role="status" aria-live="polite">{filteredProjects.length} of {projects.length} projects</p>
          </div>

          <div className="rounded-2xl border border-zinc-200 bg-zinc-50/70 p-4 dark:border-zinc-800 dark:bg-zinc-950 sm:p-5">
            <div className="grid gap-4 md:grid-cols-[minmax(220px,1fr)_190px_210px]">
              <label className="block">
                <span className="mb-1.5 block text-sm font-medium text-zinc-800 dark:text-zinc-200">Search projects</span>
                <span className="relative block">
                  <Search size={16} className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500" aria-hidden="true" />
                  <input value={query} onChange={(event) => setQuery(event.target.value)} type="search" placeholder="Title or technology" className="min-h-11 w-full rounded-lg border border-zinc-300 bg-white py-2 pl-9 pr-3 text-sm text-zinc-900 placeholder:text-zinc-500 dark:border-zinc-700 dark:bg-black dark:text-white" />
                </span>
              </label>
              <label className="block">
                <span className="mb-1.5 block text-sm font-medium text-zinc-800 dark:text-zinc-200">Project status</span>
                <select value={status} onChange={(event) => setStatus(event.target.value as ProjectStatus | "")} className="min-h-11 w-full rounded-lg border border-zinc-300 bg-white px-3 text-sm text-zinc-900 dark:border-zinc-700 dark:bg-black dark:text-white">
                  <option value="">All statuses</option>
                  {Object.entries(STATUS_LABELS).map(([value, label]) => <option key={value} value={value}>{label}</option>)}
                </select>
              </label>
              <label className="block">
                <span className="mb-1.5 block text-sm font-medium text-zinc-800 dark:text-zinc-200">Technology</span>
                <select value={technology} onChange={(event) => setTechnology(event.target.value)} className="min-h-11 w-full rounded-lg border border-zinc-300 bg-white px-3 text-sm text-zinc-900 dark:border-zinc-700 dark:bg-black dark:text-white">
                  <option value="">All technologies</option>
                  {TECHNOLOGIES.map((item) => <option key={item} value={item}>{item}</option>)}
                </select>
              </label>
            </div>

            <fieldset className="mt-5">
              <legend className="mb-2 text-sm font-medium text-zinc-800 dark:text-zinc-200">Domains <span className="font-normal text-zinc-500">(choose more than one)</span></legend>
              <div className="flex flex-wrap gap-2">
                {DOMAIN_FILTERS.map((domain) => {
                  const selected = selectedDomains.includes(domain.id);
                  return <button key={domain.id} type="button" aria-pressed={selected} onClick={() => toggleDomain(domain.id)} className={`min-h-10 rounded-full border px-3.5 py-2 text-sm transition ${selected ? "border-zinc-900 bg-zinc-900 text-white dark:border-white dark:bg-white dark:text-black" : "border-zinc-300 bg-white text-zinc-700 hover:border-zinc-500 dark:border-zinc-700 dark:bg-black dark:text-zinc-300 dark:hover:border-zinc-500"}`}>{domain.label}</button>;
                })}
              </div>
            </fieldset>
            {hasActiveView && <button type="button" onClick={clearFilters} className="mt-4 inline-flex min-h-10 items-center gap-1.5 text-sm font-medium text-zinc-700 underline underline-offset-4 hover:text-black dark:text-zinc-300 dark:hover:text-white"><X size={15} aria-hidden="true" /> Clear all filters and focus</button>}
          </div>

          {filteredProjects.length > 0 ? (
            <div className="mt-6 grid items-stretch gap-4 md:grid-cols-2">
              {filteredProjects.map((project) => <ProjectCard key={project.slug} project={project} isFocusMatch={Boolean(focusDomain && project.domains.includes(focusDomain))} />)}
            </div>
          ) : (
            <div className="mt-6 rounded-2xl border border-dashed border-zinc-300 px-6 py-12 text-center dark:border-zinc-700">
              <h4 className="font-semibold text-zinc-950 dark:text-white">No projects match these filters</h4>
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">Try a different search or clear the selected filters.</p>
              <button type="button" onClick={clearFilters} className="mt-4 inline-flex min-h-10 items-center justify-center rounded-full bg-zinc-900 px-4 py-2 text-sm font-medium text-white dark:bg-white dark:text-black">Clear filters</button>
            </div>
          )}
        </section>
      </div>
    </section>
  );
}
