"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Github, ExternalLink, Star, GitFork, Shield, Sparkles } from "lucide-react";
import { PORTFOLIO_DATA } from "../data/portfolioData";

export default function OpenSourceSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const featuredRepos = [
    {
      name: "LSG-Track",
      description: "Kerala local self-government GIS compliance monitoring system, integrating leaflet mappings and Meta WhatsApp notification alerts.",
      language: "TypeScript",
      langColor: "bg-[#3178c6]", // TypeScript blue
      stars: 2,
      forks: 0,
      url: "https://github.com/AVA-NTHIKA14/LSG-Track"
    },
    {
      name: "ALTaware",
      description: "Chrome accessibility extension analyzing active web images using Google Gemini AI to auto-generate accurate descriptive alt tags.",
      language: "JavaScript",
      langColor: "bg-[#f1e05a]", // JS yellow
      stars: 0,
      forks: 0,
      url: "https://github.com/AVA-NTHIKA14/ALTaware"
    },
    {
      name: "Mini-Project",
      description: "Adaptive Windshield Wiper system firmware and circuit schematic dynamically modulating servo motor sweeps based on rainfall sensors.",
      language: "C",
      langColor: "bg-[#555555]", // C grey
      stars: 0,
      forks: 0,
      url: "https://github.com/AVA-NTHIKA14/Mini-Project"
    }
  ];

  return (
    <section id="skills" className="relative bg-white py-24 overflow-hidden border-t border-zinc-100">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-12 md:px-24">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <motion.p
              ref={ref}
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              className="text-zinc-400 text-xs sm:text-sm tracking-[3px] uppercase mb-4 font-bold"
            >
              Collaboration
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="font-black text-black text-3xl sm:text-4xl md:text-5xl tracking-tight"
            >
              Open Source & Activity
            </motion.h2>
          </div>
          <motion.a
            href={PORTFOLIO_DATA.contact.github}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-zinc-500 hover:text-black hover:underline cursor-pointer"
          >
            Explore GitHub Profile <ExternalLink size={14} />
          </motion.a>
        </div>

        <div className="grid lg:grid-cols-12 gap-12">
          
          {/* LEFT: Featured Repositories */}
          <div className="lg:col-span-6 space-y-8">
            <h3 className="text-black font-extrabold text-xl mb-6 flex items-center gap-2">
              <Github size={20} className="text-zinc-700" /> Featured Repositories
            </h3>

            <div className="grid gap-6">
              {featuredRepos.map((repo, idx) => (
                <motion.div
                  key={repo.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="border border-zinc-200 hover:border-zinc-400 bg-white hover:bg-zinc-50/50 rounded-3xl p-6 transition-all duration-300 relative group shadow-sm"
                >
                  <div className="flex items-center justify-between mb-3">
                    <a
                      href={repo.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-bold text-lg text-black hover:text-zinc-600 hover:underline transition-colors flex items-center gap-1.5 cursor-pointer"
                    >
                      {repo.name} <ExternalLink size={14} className="opacity-45" />
                    </a>
                    
                    {/* Repo stats */}
                    <div className="flex gap-4 text-zinc-400 text-xs font-semibold">
                      <span className="flex items-center gap-1">
                        <Star size={12} className="text-zinc-500" /> {repo.stars}
                      </span>
                      <span className="flex items-center gap-1">
                        <GitFork size={12} /> {repo.forks}
                      </span>
                    </div>
                  </div>

                  <p className="text-zinc-500 text-xs sm:text-sm font-medium leading-relaxed mb-4">
                    {repo.description}
                  </p>

                  <div className="flex items-center gap-1.5 text-zinc-500 text-xs">
                    <span className={`w-2.5 h-2.5 rounded-full ${repo.langColor}`} />
                    <span>{repo.language}</span>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Local communities card */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="border border-zinc-200 bg-zinc-50/40 rounded-3xl p-6 border-dashed"
            >
              <div className="flex gap-4">
                <Shield className="text-zinc-700 flex-shrink-0 mt-0.5" size={20} />
                <div>
                  <h4 className="text-black font-extrabold text-sm">Community Mobilizer</h4>
                  <p className="text-zinc-500 text-xs mt-1.5 leading-relaxed font-medium">
                    Active contributor to OpenDataKerala mapping campaigns, providing regional boundary coordinate structures. Dedicated lead facilitating coding workshops and introducing juniors to Git, Figma, and modern web developer stacks.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* RIGHT: Live GitHub Stats Widgets */}
          <div className="lg:col-span-6 space-y-8">
            <h3 className="text-black font-extrabold text-xl mb-6 flex items-center gap-2">
              <Sparkles size={20} className="text-zinc-700" /> Real-time GitHub Analytics
            </h3>

            {/* 1. Activity Graph */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="border border-zinc-250 bg-white rounded-3xl p-6 overflow-hidden flex flex-col justify-center items-center shadow-sm"
            >
              <h4 className="text-zinc-400 font-extrabold text-xs uppercase tracking-wider mb-4 self-start">GitHub Activity Graph</h4>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://github-readme-activity-graph.vercel.app/graph?username=AVA-NTHIKA14&theme=github-compact&hide_border=true"
                alt="Avanthika K S GitHub Activity Graph"
                className="w-full h-auto max-h-[220px] object-contain opacity-95"
              />
            </motion.div>

            {/* 2. Stats & Streak */}
            <div className="grid sm:grid-cols-2 gap-6">
              {/* General Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="border border-zinc-200 bg-white rounded-3xl p-5 flex flex-col items-center justify-center shadow-sm"
              >
                <h4 className="text-zinc-400 font-extrabold text-xs uppercase tracking-wider mb-4 self-start">GitHub Stats</h4>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://github-readme-stats-sigma-five.vercel.app/api?username=AVA-NTHIKA14&show_icons=true&theme=default&hide_border=true"
                  alt="Avanthika K S GitHub Stats"
                  className="w-full h-auto max-h-[160px] object-contain"
                />
              </motion.div>

              {/* Contribution Streak */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="border border-zinc-200 bg-white rounded-3xl p-5 flex flex-col items-center justify-center shadow-sm"
              >
                <h4 className="text-zinc-400 font-extrabold text-xs uppercase tracking-wider mb-4 self-start">Contribution Streak</h4>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://streak-stats.demolab.com?user=AVA-NTHIKA14&theme=default&hide_border=true&v=1"
                  alt="Avanthika K S Contribution Streak"
                  className="w-full h-auto max-h-[160px] object-contain"
                />
              </motion.div>
            </div>

            {/* 3. Top Languages */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="border border-zinc-200 bg-white rounded-3xl p-6 flex flex-col justify-center items-center shadow-sm"
            >
              <h4 className="text-zinc-400 font-extrabold text-xs uppercase tracking-wider mb-4 self-start">Top Languages</h4>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://github-readme-stats-sigma-five.vercel.app/api/top-langs/?username=AVA-NTHIKA14&layout=compact&theme=default&hide_border=true"
                alt="Avanthika K S Top Languages"
                className="w-full h-auto max-h-[140px] object-contain"
              />
            </motion.div>

            <div className="border border-dashed border-zinc-300 bg-zinc-50/50 rounded-3xl p-6">
              <h4 className="text-black font-extrabold text-sm mb-3">Open Source Contributions</h4>
              {/* TODO: replace these placeholders with real repository, description, and direct PR or issue links. */}
              <ul className="space-y-3 text-sm">
                {["TODO: repository — one-line contribution description — PR or issue link", "TODO: repository — one-line contribution description — PR or issue link"].map((entry, index) => (
                  <li key={index} className="text-zinc-500 border-t border-zinc-200 pt-3 first:border-t-0 first:pt-0">{entry}</li>
                ))}
              </ul>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
