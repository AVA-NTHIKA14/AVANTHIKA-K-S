"use client";
import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import { PORTFOLIO_DATA } from "../data/portfolioData";

const SKILL_GROUPS = [
  {
    category: "PROGRAMMING LANGUAGES",
    skills: ["C", "C++", "Python", "JavaScript", "TypeScript", "Java", "Dart", "C#"]
  },
  {
    category: "WEB DEVELOPMENT",
    skills: ["HTML5", "CSS3", "React", "Next.js", "Tailwind CSS", "Bootstrap", "Vite", "Django"]
  },
  {
    category: "DATABASES & CLOUD",
    skills: ["Firebase", "Supabase", "Firestore", "SQL"]
  },
  {
    category: "DESIGN & TOOLS",
    skills: ["Figma", "Git", "GitHub", "VS Code", "Linux"]
  }
];

export default function SkillsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [isDark, setIsDark] = useState(false);
  const [forceVisible, setForceVisible] = useState(false);

  useEffect(() => {
    setIsDark(document.documentElement.classList.contains("dark"));

    const observer = new MutationObserver(() => {
      setIsDark(document.documentElement.classList.contains("dark"));
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"]
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (inView) {
      setForceVisible(false);
      return;
    }

    // Fail-safe: if IntersectionObserver misses, reveal content after mount.
    const timeoutId = window.setTimeout(() => {
      setForceVisible(true);
    }, 1200);

    return () => window.clearTimeout(timeoutId);
  }, [inView]);

  const shouldReveal = inView || forceVisible;

  return (
    <section
      id="skills"
      ref={ref}
      className={`relative bg-white dark:bg-black pt-4 pb-16 overflow-hidden border-t border-zinc-100 dark:border-zinc-900 transition-colors ${forceVisible && !inView ? "skills-fallback-visible" : ""}`}
    >
      <div className="max-w-[1440px] mx-auto px-6 sm:px-12 md:px-24">
        
        {/* Section tag header */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={shouldReveal ? { opacity: 1 } : {}}
          data-skill-reveal
          className="flex items-center gap-2 mb-12 text-left"
        >
          <span className="w-6 h-px bg-zinc-400 dark:bg-zinc-650" />
          <span className="text-zinc-550 dark:text-zinc-400 text-xs tracking-[3px] uppercase font-semibold">SKILLS</span>
        </motion.div>

        {/* Section title */}
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          animate={shouldReveal ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          data-skill-reveal
          className="font-bold text-black dark:text-white text-2xl sm:text-3xl md:text-4xl tracking-tight mb-16 text-left leading-tight"
        >
          Skills & Open Source.
        </motion.h2>

        {/* Two-Column Grid layout */}
        <div className="grid lg:grid-cols-12 gap-12 items-start text-left">
          
          {/* LEFT COLUMN: Categorized Skill Cards */}
          <div className="lg:col-span-6 space-y-6">
            {SKILL_GROUPS.map((group, idx) => (
              <motion.div
                key={group.category}
                initial={{ opacity: 0, y: 15 }}
                animate={shouldReveal ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                data-skill-reveal
                className="border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 rounded-2xl p-5 shadow-sm"
              >
                <h3 className="text-zinc-500 dark:text-zinc-400 font-bold text-xs uppercase tracking-wider mb-4">
                  {group.category}
                </h3>
                
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-zinc-600 dark:text-zinc-400 text-xs px-3 py-1.5 rounded-full border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 font-semibold hover:border-black dark:hover:border-white hover:bg-zinc-50 dark:hover:bg-zinc-950 transition-all cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* RIGHT COLUMN: Github Contributions Dashboard */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Header / Redirection Link */}
            <motion.a
              href={PORTFOLIO_DATA.contact.github}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0 }}
              animate={shouldReveal ? { opacity: 1 } : {}}
              data-skill-reveal
              className="border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 hover:border-black dark:hover:border-white hover:shadow-sm rounded-2xl p-5 flex items-center justify-between shadow-sm cursor-pointer block transition-all"
            >
              <div className="flex items-center gap-3">
                <Github size={20} className="text-black dark:text-white" />
                <div>
                  <span className="text-black dark:text-white font-bold text-sm block">@AVA-NTHIKA14</span>
                  <span className="text-zinc-500 dark:text-zinc-400 text-xs font-medium block mt-0.5">Open source contributions</span>
                </div>
              </div>
              <ExternalLink size={16} className="text-zinc-400" />
            </motion.a>

            {/* Prominent Contribution Streak Widget */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={shouldReveal ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              data-skill-reveal
              className="border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 rounded-2xl p-6 shadow-sm flex flex-col items-center justify-center"
            >
              <h4 className="text-zinc-500 dark:text-zinc-400 font-bold text-xs uppercase tracking-wider mb-4 self-start">Contribution Streak</h4>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`https://streak-stats.demolab.com?user=AVA-NTHIKA14&theme=${isDark ? "github-dark" : "default"}&hide_border=true&v=1`}
                alt="GitHub Streak"
                className="w-full h-auto max-h-[160px] object-contain"
              />
            </motion.div>

            {/* General Stats & Top Languages Grid */}
            <div className="grid sm:grid-cols-2 gap-6">
              {/* General Stats */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={shouldReveal ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 }}
                data-skill-reveal
                className="border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 rounded-2xl p-5 flex flex-col items-center justify-center shadow-sm"
              >
                <h4 className="text-zinc-500 dark:text-zinc-400 font-bold text-xs uppercase tracking-wider mb-4 self-start">General Stats</h4>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={`https://github-readme-stats-sigma-five.vercel.app/api?username=AVA-NTHIKA14&show_icons=true&theme=${isDark ? "github_dark" : "default"}&hide_border=true`}
                  alt="GitHub Stats"
                  className="w-full h-auto max-h-[160px] object-contain"
                />
              </motion.div>

              {/* Languages */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={shouldReveal ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 }}
                data-skill-reveal
                className="border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 rounded-2xl p-5 flex flex-col items-center justify-center shadow-sm"
              >
                <h4 className="text-zinc-500 dark:text-zinc-400 font-bold text-xs uppercase tracking-wider mb-4 self-start">Languages</h4>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={`https://github-readme-stats-sigma-five.vercel.app/api/top-langs/?username=AVA-NTHIKA14&layout=compact&theme=${isDark ? "github_dark" : "default"}&hide_border=true`}
                  alt="Top Languages"
                  className="w-full h-auto max-h-[160px] object-contain"
                />
              </motion.div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
