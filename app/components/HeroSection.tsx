"use client";
import { motion } from "framer-motion";
import { Github, Linkedin, GraduationCap, Wrench, Code2, BadgeCheck, Coffee } from "lucide-react";
import Image from "next/image";
import profileImage from "../Image.png";
import { PORTFOLIO_DATA } from "../data/portfolioData";

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
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const SOCIAL_LINKS = [
  {
    href: "https://github.com/AVA-NTHIKA14",
    image: "https://skillicons.dev/icons?i=github",
    alt: "GitHub",
  },
  {
    href: "https://linkedin.com/in/avanthika-ks",
    image: "https://skillicons.dev/icons?i=linkedin",
    alt: "LinkedIn",
  },
  {
    href: "https://app.mulearn.org/profile/avanthikaks@mulearn",
    image: "https://app.mulearn.org/favicon.ico",
    alt: "μLearn",
  },
  {
    href: "https://tinkerhub.org/@avanthika",
    image: "https://tinkerhub.org/favicon.ico",
    alt: "TinkerHub",
  },
  {
    href: "https://fossunited.org/u/avanthika_k_s",
    image: "https://fossunited.org/favicon.ico",
    alt: "FOSS United",
  },
  {
    href: "https://g.dev/avanthikaks",
    image: "/google-developers.svg", // download or create this locally
    alt: "Google Developer Program",
  },
  {
    href: "https://buymeacoffee.com/avanthika.k.s",
    image: "https://cdn.buymeacoffee.com/buttons/bmc-new-btn-logo.svg",
    alt: "Buy Me a Coffee",
  },
];

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-[90vh] bg-white dark:bg-black overflow-hidden flex items-center pt-24 pb-12 transition-colors duration-300"
    >
      {/* Subtle grid background */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03] dark:opacity-[0.015]"
        style={{
          backgroundImage:
            "linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 px-6 sm:px-12 md:px-24 max-w-[1440px] mx-auto w-full grid lg:grid-cols-12 gap-12 items-center">
        {/* Left Content */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="lg:col-span-7 flex flex-col justify-center text-left"
        >
          {/* Opportunities badge */}
          <motion.div variants={item} className="mb-6 flex items-center">
            <span className="inline-flex items-center gap-1.5 text-xs text-zinc-600 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-800 bg-zinc-50/80 dark:bg-zinc-900/60 px-4 py-1.5 rounded-full font-semibold">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              Available for new opportunities
            </span>
          </motion.div>

          {/* Main headline */}
          <motion.h1
            variants={item}
            className="font-bold text-black dark:text-white leading-[1.1] mb-4 tracking-tight"
            style={{ fontSize: "clamp(38px, 5.5vw, 68px)" }}
          >
            Hi, I&apos;m AVANTHIKA K S.
          </motion.h1>

          {/* Tagline */}
          <motion.h2
            variants={item}
            className="font-light text-zinc-600 dark:text-zinc-300 leading-[1.3] mb-6 tracking-tight max-w-[620px]"
            style={{ fontSize: "clamp(24px, 3.2vw, 42px)" }}
          >
            Design experiences that make complex things feel obvious.
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            variants={item}
            className="text-zinc-500 dark:text-zinc-400 font-normal text-base sm:text-lg tracking-wide max-w-[580px] mb-10 leading-relaxed"
          >
            {PORTFOLIO_DATA.subHeadline}
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
                document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
              }
            >
              View Projects <ArrowRight size={14} />
            </motion.button>

            <motion.a
              href={PORTFOLIO_DATA.contact.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="bg-white dark:bg-black hover:bg-zinc-50 dark:hover:bg-zinc-900/50 text-black dark:text-white font-bold text-xs tracking-wider uppercase px-7 py-4 rounded-full border border-zinc-200 dark:border-zinc-800 shadow-sm flex items-center gap-1.5 cursor-pointer"
            >
              <FileText size={14} /> View Resume
            </motion.a>
          </motion.div>

          {/* Social links underneath */}
          <motion.div variants={item} className="flex flex-wrap gap-4 items-center">
            {SOCIAL_LINKS.map((link) => {
              const Icon = link.icon;

              return (
                <a
                  key={link.alt}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-7 w-7 items-center justify-center text-zinc-600 transition-all duration-250 hover:scale-105 hover:text-black dark:text-zinc-400 dark:hover:text-white"
                  title={link.alt}
                  aria-label={link.alt}
                >
                  <Icon size={21} strokeWidth={1.75} aria-hidden="true" />
                </a>
              );
            })}
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
              className="w-full h-full object-cover bg-white scale-[1.35] transition-all duration-500 grayscale group-hover:grayscale-0 group-hover:scale-[1.4]"
            />
          </div>

          {/* Floating locator badge card at bottom */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute bottom-[-15px] left-1/2 -translate-x-1/2 sm:left-4 sm:translate-x-0 bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-2xl px-5 py-3 shadow-md flex items-center gap-3 w-fit cursor-pointer hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors"
            onClick={() =>
              document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
            }
          >
            <div className="w-8 h-8 rounded-full bg-zinc-100 dark:bg-zinc-900 flex items-center justify-center text-black dark:text-white">
              <MapPin size={16} />
            </div>
            <div className="flex flex-col text-left">
              <span className="text-xs text-zinc-500 dark:text-zinc-400 uppercase tracking-widest leading-none font-bold">Product Designer</span>
              <span className="text-xs text-black dark:text-white font-bold mt-1.5 flex items-center gap-1">
                Kozhikode, Kerala, India <ArrowRight size={12} className="text-zinc-400 dark:text-zinc-500" />
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
