"use client";

import { motion } from "framer-motion";
import { ArrowRight, FileText } from "lucide-react";
import Image from "next/image";
import profileImage from "../Image.png";
import { PORTFOLIO_DATA } from "../data/portfolioData";
import { ROLE_FOCUSES } from "../data/roleFocus";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 12 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

const SOCIAL_LINKS = [
  {
    href: "https://github.com/AVA-NTHIKA14",
    alt: "GitHub",
  },
  {
    href: "https://linkedin.com/in/avanthika-ks",
    alt: "LinkedIn",
  },
  {
    href: "https://app.mulearn.org/profile/avanthikaks@mulearn",
    alt: "μLearn",
  },
];

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-[90vh] bg-white dark:bg-black overflow-hidden flex items-center pt-24 pb-12 transition-colors duration-300"
    >
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] dark:opacity-[0.015]" style={{ backgroundImage: "linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
      <div className="relative z-10 px-6 sm:px-12 md:px-24 max-w-[1440px] mx-auto w-full grid lg:grid-cols-12 gap-12 items-center">
        {/* Left Content */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="lg:col-span-7 flex flex-col justify-center text-left"
        >
          {/* Personal introduction */}
          <motion.div variants={item} className="mb-6 flex items-center">
            <span className="inline-flex items-center gap-1.5 text-xs text-zinc-600 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-800 bg-zinc-50/80 dark:bg-zinc-900/60 px-4 py-1.5 rounded-full font-semibold">AVANTHIKA K S <span aria-hidden="true">&middot;</span> ECE STUDENT, KERALA</span>
          </motion.div>

          {/* Main headline */}
          <motion.h1
            variants={item}
            className="max-w-[760px] font-semibold text-black dark:text-white leading-[1.08] mb-5 tracking-tight"
            style={{ fontSize: "clamp(38px, 5vw, 62px)" }}
          >
            {PORTFOLIO_DATA.headline}
          </motion.h1>

          {/* Specific context from recent projects */}
          <motion.p
            variants={item}
            className="text-zinc-600 dark:text-zinc-400 font-normal text-base sm:text-lg max-w-[620px] mb-10 leading-relaxed"
          >
            {PORTFOLIO_DATA.subHeadline}
          </motion.p>

          <motion.p variants={item} className="-mt-5 mb-8 text-sm text-zinc-500 dark:text-zinc-400">
            A closer look at <a className="font-medium text-zinc-800 underline decoration-amber-600/50 underline-offset-4 hover:decoration-current dark:text-zinc-200" href="/projects/lsg-track">LSG Track</a>
            <span aria-hidden="true"> or </span>
            <a className="font-medium text-zinc-800 underline decoration-amber-600/50 underline-offset-4 hover:decoration-current dark:text-zinc-200" href="/projects/carering">Care-Ring</a>
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={item}
            className="flex flex-wrap gap-4 sm:gap-6 mb-12"
          >
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="bg-black dark:bg-white text-white dark:text-black hover:bg-zinc-900 dark:hover:bg-zinc-100 font-bold text-xs tracking-wider uppercase px-7 py-4 rounded-full cursor-pointer border-none flex items-center gap-1.5 shadow-sm"
              onClick={() =>
                document
                  .getElementById("projects")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              View Projects <ArrowRight size={14} />
            </motion.button>

            <motion.a
              href="/resume"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="bg-white dark:bg-black hover:bg-zinc-50 dark:hover:bg-zinc-900/50 text-black dark:text-white font-bold text-xs tracking-wider uppercase px-7 py-4 rounded-full border border-zinc-200 dark:border-zinc-800 shadow-sm flex items-center gap-1.5 cursor-pointer"
            >
              <FileText size={14} /> View Resume
            </motion.a>
          </motion.div>

          <motion.div variants={item} className="mb-8">
            <p className="mb-2 text-sm text-zinc-500 dark:text-zinc-400">Browse my work by</p>
            <nav aria-label="Explore projects by role" className="flex flex-wrap gap-x-4 gap-y-1 text-sm">
              {Object.entries(ROLE_FOCUSES).map(([focus, option], index) => (
                <span key={focus} className="inline-flex items-center gap-4">
                  {index > 0 && <span aria-hidden="true" className="text-zinc-300 dark:text-zinc-700">/</span>}
                  <a href={`/?focus=${focus}#projects`} className="inline-flex min-h-9 items-center gap-1 font-medium text-zinc-800 underline decoration-zinc-300 underline-offset-4 transition hover:decoration-amber-700 dark:text-zinc-200 dark:hover:decoration-amber-400">
                    {option.label}<ArrowRight size={13} aria-hidden="true" />
                  </a>
                </span>
              ))}
            </nav>
          </motion.div>

          {/* Social links */}
          <motion.div
            variants={item}
            className="flex flex-wrap gap-4 items-center"
          >
            {SOCIAL_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex min-h-10 items-center justify-center rounded-full border border-zinc-200 px-3 text-sm font-medium text-zinc-700 transition-colors hover:border-zinc-400 hover:text-black dark:border-zinc-800 dark:text-zinc-300 dark:hover:border-zinc-600 dark:hover:text-white"
                title={link.href.includes("mulearn") ? "MuLearn" : link.alt}
                aria-label={link.href.includes("mulearn") ? "MuLearn" : link.alt}
              >
                {link.href.includes("mulearn") ? "MuLearn" : link.alt}
              </a>
            ))}
          </motion.div>
        </motion.div>

        {/* Right Photograph */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-5 flex flex-col justify-center items-center relative"
        >
          <div className="relative w-full max-w-[300px] aspect-[3445/4205] rounded-[32px] overflow-hidden border-2 border-zinc-150 dark:border-zinc-850 bg-white group hover:border-yellow-400 dark:hover:border-yellow-400 transition-all duration-500 shadow-lg">
            <Image
              src={profileImage}
              alt="Avanthika K S"
              priority
              className="h-full w-full bg-white object-cover object-center"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

