"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const useCases = [
  {
    number: "01",
    title: "Research Synthesis",
    description:
      "I use AI to cluster and surface patterns from user interview transcripts — cutting synthesis time by 60% so I can focus on interpretation.",
  },
  {
    number: "02",
    title: "Variant Generation",
    description:
      "For early explorations, AI helps me generate UI copy variants and iconography directions — raw material I curate, not finalize.",
  },
  {
    number: "03",
    title: "Accessibility Audit",
    description:
      "Automated contrast checks and ARIA suggestions run in parallel with manual review — AI handles the checklist so I focus on edge cases.",
  },
];

export default function AISection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="ai-in-my-process" className="min-h-screen bg-black py-20 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 md:px-[13px]">
        <motion.p
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          className="text-white text-sm font-thin tracking-[1.68px] mb-14"
        >
          AI In My Process
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="ml-0 md:ml-[109px] mb-6"
        >
          <h2 className="font-bold text-white text-3xl sm:text-4xl md:text-[48px] leading-[1.2]">
            I use AI as a{" "}
            <span className="text-[#facc15]">collaborator</span>,
            <br />
            not a replacement.
          </h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="ml-0 md:ml-[109px] text-[rgba(255,255,255,0.44)] text-sm font-medium mb-20 max-w-[439px]"
        >
          Three specific ways AI is embedded in my design workflow — each with
          clear intent and human oversight.
        </motion.p>

        <div className="flex gap-10 overflow-x-auto pb-4 scrollbar-hide px-4 md:justify-center">
          {useCases.map((uc, i) => (
            <motion.div
              key={uc.number}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.12 }}
              className="border border-[#facc15] w-[357px] h-[380px] flex-shrink-0 p-8 flex flex-col justify-start hover:shadow-[0_0_30px_rgba(250,204,21,0.15)] transition-all duration-400 group"
            >
              <p className="font-bold text-[#facc15] text-[40px] mb-4">
                {uc.number}
              </p>
              <p className="font-bold text-white text-xl mb-4">{uc.title}</p>
              <p className="text-[rgba(255,255,255,0.47)] text-xl leading-[1.5]">
                {uc.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
