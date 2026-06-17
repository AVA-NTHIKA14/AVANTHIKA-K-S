"use client";
import { motion, type Variants } from "framer-motion";

const container: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12 },
  },
};
const item: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen bg-black flex flex-col justify-center overflow-hidden pt-[98px]"
    >
      {/* Subtle grid background */}
      <div
        className="absolute inset-0 pointer-events-none opacity-5"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      {/* Glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-[#facc15]/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-[#facc15]/3 rounded-full blur-[100px] pointer-events-none" />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 px-6 sm:px-10 md:px-[90px] max-w-[1440px] mx-auto w-full"
      >
        {/* Role badge */}
        <motion.p
          variants={item}
          className="text-[rgba(255,255,255,0.49)] text-xs font-extrabold tracking-[2px] mb-4"
        >
          . Product Designer . Final Year Btech Student . Builder
        </motion.p>

        {/* Name */}
        <motion.div variants={item} className="mb-6">
          <p className="text-white text-[rgba(255,255,255,0.49)] font-extrabold text-xs mb-1">
            Hi
          </p>
          <h2 className="text-white font-extrabold text-[32px]">
            I&apos;m{" "}
            <span className="text-[#facc15]">AVANTHIKA K S</span>
          </h2>
        </motion.div>

        {/* Main headline */}
        <motion.div variants={item} className="mb-8">
          <h1 className="font-extrabold text-white leading-[1.05]" style={{ fontSize: "clamp(48px, 6.25vw, 90px)" }}>
            I design experiences
            <br />
            that make{" "}
            <span className="text-[#facc15]">complex things</span>
            <br />
            <span className="pl-0 sm:pl-[6vw]">feel </span>
            <span className="text-[#facc15]">obvious.</span>
          </h1>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          variants={item}
          className="text-[rgba(255,255,255,0.64)] font-extralight text-[23px] tracking-[2px] mb-16"
        >
          Between System thinking &nbsp; with Human-centered Design
        </motion.p>

        {/* CTA Buttons */}
        <motion.div variants={item} className="flex flex-wrap gap-4 sm:gap-6">
          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="bg-[#facc15] text-black font-extrabold text-lg sm:text-2xl md:text-[28px] px-8 sm:px-10 md:px-14 py-4 sm:py-5 md:py-6 rounded-[56px] cursor-pointer border-none"
            onClick={() =>
              document.getElementById("work")?.scrollIntoView({ behavior: "smooth" })
            }
          >
            See Works
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="bg-black text-white font-extrabold text-lg sm:text-2xl md:text-[28px] px-8 sm:px-10 md:px-14 py-4 sm:py-5 md:py-6 rounded-[56px] border border-white cursor-pointer"
            onClick={() =>
              document.getElementById("about-me")?.scrollIntoView({ behavior: "smooth" })
            }
          >
            About Me
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-white/30 text-xs tracking-[3px] uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-px h-10 bg-gradient-to-b from-white/30 to-transparent"
        />
      </motion.div>
    </section>
  );
}
