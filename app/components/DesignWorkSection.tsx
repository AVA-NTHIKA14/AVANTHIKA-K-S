"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { PORTFOLIO_DATA } from "../data/portfolioData";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export default function DesignWorkSection() {
  return (
    <section id="design-work" className="py-20 px-6 bg-white dark:bg-black transition-colors duration-300">
      <div className="max-w-[1440px] mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl font-black text-black dark:text-white tracking-tight mb-3">
            Selected Design Work
          </h2>
          <p className="text-base text-zinc-600 dark:text-zinc-400 font-medium max-w-2xl">
            Graphic design, brand identity, and UI design pieces showcasing visual thinking and design systems.
          </p>
        </motion.div>

        {/* Design Work Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8"
        >
          {PORTFOLIO_DATA.designWorks.map((work) => (
            <motion.a
              key={work.id}
              href={work.figmaUrl}
              target="_blank"
              rel="noopener noreferrer"
              variants={itemVariants}
              whileHover={{ y: -4 }}
              className="group relative overflow-hidden rounded-lg border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950 hover:border-zinc-300 dark:hover:border-zinc-700 transition-all duration-300 cursor-pointer"
            >
              {/* A compact visual cue keeps the gallery scannable without inventing project screenshots. */}
              <div className="relative h-40 overflow-hidden border-b border-zinc-200 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-900">
                <div className="absolute inset-5 rounded-md border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-950 p-4 shadow-sm">
                  <div className="flex items-center justify-between">
                    <span className="h-2 w-16 rounded-full bg-black dark:bg-white" />
                    <span className="h-2 w-8 rounded-full bg-zinc-300 dark:bg-zinc-700" />
                  </div>
                  <div className="mt-6 grid grid-cols-3 gap-2">
                    <span className="col-span-2 h-12 rounded-sm bg-zinc-900 dark:bg-zinc-100" />
                    <span className="h-12 rounded-sm bg-yellow-300" />
                  </div>
                  <div className="mt-3 flex gap-2">
                    <span className="h-2 w-20 rounded-full bg-zinc-300 dark:bg-zinc-700" />
                    <span className="h-2 w-12 rounded-full bg-zinc-200 dark:bg-zinc-800" />
                  </div>
                </div>
                <span className="absolute bottom-3 right-4 text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400">
                  {work.category}
                </span>
              </div>

              {/* Card Content */}
              <div className="p-8 h-full flex flex-col justify-between">
                {/* Category Tag */}
                <div className="inline-flex w-fit mb-4">
                  <span className="text-xs font-bold uppercase tracking-widest text-zinc-500 dark:text-zinc-400 bg-zinc-100 dark:bg-zinc-900 px-3 py-1.5 rounded-full">
                    {work.category}
                  </span>
                </div>

                {/* Title */}
                <div className="mb-4 flex-1">
                  <h3 className="text-xl font-black text-black dark:text-white tracking-tight mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {work.title}
                  </h3>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                    {work.description}
                  </p>
                </div>

                {/* Footer with Link */}
                <div className="flex items-center justify-between pt-4 border-t border-zinc-200 dark:border-zinc-800 group-hover:border-zinc-300 dark:group-hover:border-zinc-700 transition-colors">
                  <span className="text-xs font-bold uppercase tracking-widest text-zinc-500 dark:text-zinc-400 group-hover:text-black dark:group-hover:text-white transition-colors">
                    View in Figma
                  </span>
                  <ExternalLink
                    size={16}
                    className="text-zinc-400 dark:text-zinc-600 group-hover:text-black dark:group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-all"
                  />
                </div>
              </div>

              {/* Hover Background Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </motion.a>
          ))}
        </motion.div>

        {/* Figma Portfolio Link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-4">
            Explore more work in my Figma portfolio
          </p>
          <motion.a
            href="https://www.figma.com/design/G2iSQSGLrXMXa1vLC6vIZc/Works-by-Avanthika"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-2 bg-black dark:bg-white hover:bg-zinc-900 dark:hover:bg-zinc-100 text-white dark:text-black font-bold text-xs tracking-wider uppercase px-8 py-3 rounded-full transition-colors cursor-pointer"
          >
            Open Figma Portfolio
            <ExternalLink size={14} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
