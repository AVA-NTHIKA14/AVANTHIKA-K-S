"use client";
import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight, Github } from "lucide-react";

interface ProjectItem {
  slug: string;
  title: string;
  tags: string[];
  description: string;
  tech: string[];
  githubUrl: string;
  liveUrl?: string;
  linkText?: string;
  categories: string[];
}

const PROJECTS_DATA: ProjectItem[] = [
  {
    slug: "lsg-track",
    title: "LSG Track",
    tags: ["HACKATHON"],
    description: "Digitalizing the Enterprise Licensing of Licensed or non Licensed building in a Grama Panchayath",
    tech: ["React", "Typescript", "Opendatakeralo", "Firebase", "+1"],
    githubUrl: "https://github.com/AVA-NTHIKA14/LSG-Track",
    categories: ["Web"]
  },
  {
    slug: "find-nearby",
    title: "Find Near By",
    tags: ["HACKATHON"],
    description: "Connecting nearby daily wage workers to a single platform",
    tech: ["Next.js", "Typescript", "Gemini", "Supabase", "+3"],
    githubUrl: "https://github.com/AVA-NTHIKA14/PanikkarUndo",
    categories: ["Web", "Opensource"]
  },
  {
    slug: "changayi",
    title: "Changayi",
    tags: ["HACKATHON"],
    description: "AI-powered Personal wellness app",
    tech: ["React", "Groq", "Supabase", "Gemini", "+4"],
    githubUrl: "https://github.com/AVA-NTHIKA14/Changayi",
    linkText: "github.com/AVA-NTHIKA14/Changayi-h",
    categories: ["AI", "App"]
  },
  {
    slug: "inclusive-checker",
    title: "Inclusive Checker",
    tags: ["HACKATHON"],
    description: "AI-powered Inclusivity of text/Content Checker",
    tech: ["React", "FastAPI", "CrewAI", "LangChain", "+4"],
    githubUrl: "https://github.com/AVA-NTHIKA14/ALTaware",
    categories: ["AI", "Web"]
  },
  {
    slug: "workflow",
    title: "WorkFlow",
    tags: ["HACKATHON"],
    description: "Organization Level Productivity tool.",
    tech: ["Figma Make", "User Research", "+1"],
    githubUrl: "https://github.com/AVA-NTHIKA14/Portfolio",
    categories: ["Design"]
  },
  {
    slug: "quillora",
    title: "Quillora",
    tags: ["HACKATHON"],
    description: "Medium inspired free blog platform",
    tech: ["React", "Node.js", "Supabase", "Open Api", "+3"],
    githubUrl: "https://github.com/AVA-NTHIKA14/Quillora-Blog-App",
    categories: ["Web", "Opensource"]
  }
];

const FILTER_CATEGORIES = ["All", "AI", "Web", "Design", "App", "Opensource"];

export default function WorkSection() {
  const [activeFilter, setActiveFilter] = useState("All");
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const filteredProjects = activeFilter === "All"
    ? PROJECTS_DATA
    : PROJECTS_DATA.filter((p) => p.categories.includes(activeFilter));

  return (
    <section id="projects" className="bg-white dark:bg-black py-16 border-t border-zinc-100 dark:border-zinc-900 transition-colors">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-12 md:px-24">
        
        {/* Section title */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          className="flex items-center gap-2 mb-16"
        >
          <span className="w-6 h-px bg-zinc-400 dark:bg-zinc-650" />
          <span className="text-zinc-550 dark:text-zinc-400 text-xs tracking-[3px] uppercase font-semibold">PROJECTS</span>
        </motion.div>

        {/* Filter Tab Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap gap-2.5 mb-12"
        >
          {FILTER_CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-5 py-2.5 rounded-full text-xs font-semibold tracking-wider transition-all cursor-pointer ${
                activeFilter === cat
                  ? "bg-black text-white dark:bg-white dark:text-black"
                  : "bg-zinc-50 border border-zinc-200 text-zinc-600 hover:border-zinc-350 hover:text-black dark:bg-zinc-950 dark:border-zinc-800 dark:text-zinc-400 dark:hover:border-zinc-700 dark:hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Projects Cards Grid */}
        <div className="grid md:grid-cols-2 gap-8 text-left">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((p) => (
              <motion.div
                key={p.slug}
                layout
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 hover:border-zinc-300 dark:hover:border-zinc-700 hover:shadow-md transition-all duration-300 rounded-3xl p-6 sm:p-8 flex flex-col justify-between h-[300px] relative group"
              >
                <div>
                  {/* Card top row */}
                  <div className="flex justify-between items-start mb-4">
                    {/* Tags */}
                    <div className="flex gap-2">
                      {p.tags.map((tag) => (
                        <span
                          key={tag}
                          className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-wider text-zinc-600 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/60 px-3 py-1 rounded-full uppercase"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Redirect icon top right */}
                    <Link
                      href={`/projects/${p.slug}`}
                      className="text-zinc-400 dark:text-zinc-500 group-hover:text-black dark:group-hover:text-white transition-colors"
                      title="View Case Study"
                    >
                      <ArrowUpRight size={18} />
                    </Link>
                  </div>

                  {/* Title & Description */}
                  <Link href={`/projects/${p.slug}`} className="block group cursor-pointer mt-2">
                    <h3 className="text-black dark:text-white font-bold text-xl sm:text-2xl group-hover:underline tracking-tight">
                      {p.title}
                    </h3>
                  </Link>
                  <p className="text-zinc-600 dark:text-zinc-400 text-xs sm:text-sm font-normal mt-2 leading-relaxed max-w-[450px]">
                    {p.description}
                  </p>

                  {/* Optional repository path text */}
                  {p.linkText && (
                    <a
                      href={p.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-zinc-450 dark:text-zinc-500 hover:text-black dark:hover:text-white hover:underline font-mono mt-2 inline-flex items-center gap-1 cursor-pointer"
                    >
                      <span>{p.linkText}</span>
                    </a>
                  )}
                </div>

                {/* Card bottom row */}
                <div className="flex items-center justify-between mt-6 pt-4 border-t border-zinc-100 dark:border-zinc-900">
                  {/* Tech stack badges */}
                  <div className="flex flex-wrap gap-1.5">
                    {p.tech.map((t) => (
                      <span
                        key={t}
                        className="text-zinc-600 dark:text-zinc-350 text-xs font-semibold px-2.5 py-1 rounded border border-zinc-150 dark:border-zinc-800 bg-zinc-50/60 dark:bg-zinc-900/40"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Github redirect */}
                  <a
                    href={p.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-zinc-450 dark:text-zinc-500 hover:text-black dark:hover:text-white transition-colors cursor-pointer"
                    title="View GitHub Repository"
                  >
                    <Github size={16} />
                  </a>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
