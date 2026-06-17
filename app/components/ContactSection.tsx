"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function ContactSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="contact"
      ref={ref}
      className="min-h-screen bg-black flex flex-col items-center justify-center relative overflow-hidden py-24"
    >
      {/* Background glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[800px] h-[800px] rounded-full bg-[#facc15]/5 blur-[140px]" />
      </div>

      <div className="relative z-10 text-center max-w-[900px] mx-auto px-8">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="font-bold text-white text-[clamp(56px,6.67vw,96px)] leading-[1.1] mb-10"
        >
          Let&apos;s build
          <br />
          Something
          <br />
          <span className="text-[#facc15]">Humanity needs.</span>
        </motion.h2>

        {/* Subtitle bar */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={inView ? { opacity: 1, scaleX: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="bg-[rgba(217,217,217,0.2)] rounded-[45px] px-6 sm:px-8 py-5 mb-8 flex flex-wrap items-center gap-3 justify-center"
        >
          <span className="w-3 h-3 bg-[#facc15] rounded-full inline-block" />
          <p className="text-white font-light text-base sm:text-xl md:text-[32px] text-center">
            open to internships, freelance projects, and design conversations
          </p>
        </motion.div>

        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: 0.97 }}
          className="bg-[#facc15] text-black font-extrabold text-[clamp(24px,2.8vw,40px)] px-14 py-7 rounded-[56px] cursor-pointer border-none hover:shadow-[0_0_40px_rgba(250,204,21,0.5)] transition-shadow duration-300"
          onClick={() => window.open("mailto:avanthikaks@example.com")}
        >
          Let&apos;s Connect
        </motion.button>
      </div>
    </section>
  );
}
