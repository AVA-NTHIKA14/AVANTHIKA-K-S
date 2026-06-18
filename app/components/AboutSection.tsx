"use client";

import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import profileImage from "../Image.png";

export default function AboutSection() {
  const ref = useRef(null);
  const inView = useInView(ref, {
    once: true,
    margin: "-100px",
  });

  return (
    <section
      id="about-me"
      ref={ref}
      className="relative min-h-screen bg-black overflow-hidden flex items-center"
    >
      {/* Red Grid Background */}
      <div
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,0,0,0.2) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,0,0,0.2) 1px, transparent 1px)
          `,
          backgroundSize: "10px 10px",
        }}
      />

      {/* Yellow Glow */}
      <div className="absolute right-0 top-1/4 w-[700px] h-[700px] rounded-full bg-yellow-400/10 blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-[1440px] mx-auto w-full px-6 md:px-16 lg:px-24 grid lg:grid-cols-2 gap-12 items-center">
        
        {/* LEFT CONTENT */}
        <div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-white/50 text-sm tracking-[3px] uppercase mb-10"
          >
            About Me
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="text-[#ffe4e4] font-extrabold text-4xl md:text-6xl leading-tight mb-10"
          >
            Engineering student.
            <br />
            <span className="text-yellow-400">
              Design thinker.
            </span>
            <br />
            Perpetual learner.
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6 text-white/40 text-lg md:text-xl leading-relaxed tracking-wide"
          >
            <p>
              I&apos;m a product design practitioner studying Electronics &
              Communication Engineering at GEC Palakkad. My work sits at the
              intersection of engineering logic and human empathy.
            </p>

            <p>
              I believe the best interfaces are invisible — they solve
              problems so intuitively that users never notice the design.
              I&apos;m obsessed with the moment when complexity becomes clarity.
            </p>

            <p>
              Currently building my craft through real problems, design
              communities, and a healthy obsession with how things work.
            </p>
          </motion.div>
        </div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.3 }}
          className="flex justify-center"
        >
          <div className="relative w-full max-w-[650px]">
            <Image
              src={profileImage}
              alt="Avanthika"
              priority
              className="w-full h-auto object-contain"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}