"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const principles = [
  {
    number: "01",
    label: "CLARITY FIRST",
    titleParts: ["Design is a ", "clarity problem"],
    highlightIdx: 1,
    description:
      "Every interface has one job: make the next step obvious. If a user needs to think, something in the design is doing extra work it shouldn't.",
  },
  {
    number: "02",
    label: "CONTEXT MATTERS",
    titleParts: ["Context shapes ", "every decision"],
    highlightIdx: 1,
    description:
      "A solution that works on a desktop in a quiet office fails on a phone at a bus stop. Good design anticipates the environment it will live in.",
  },
  {
    number: "03",
    label: "ITERATION > PERFECTION",
    titleParts: ["Ship to learn,", " not to finish"],
    highlightIdx: 0,
    description:
      "Perfection in isolation is a trap. Putting work in front of real people early and often is the only way to build something that actually works.",
  },
];

function PrincipleRow({
  number,
  label,
  titleParts,
  highlightIdx,
  description,
  index,
}: {
  number: string;
  label: string;
  titleParts: string[];
  highlightIdx: number;
  description: string;
  index: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="relative border border-[#ffdfdf] bg-[rgba(0,0,0,0.87)] flex flex-col sm:flex-row items-stretch min-h-[149px] group hover:border-[#facc15] transition-colors duration-300"
    >
      {/* Number column */}
      <div className="relative w-full sm:w-[163px] h-[80px] sm:h-auto bg-black flex-shrink-0 flex flex-col items-start justify-start overflow-hidden">
        <span className="font-black text-[#facc15] text-[56px] sm:text-[80px] leading-none absolute -top-1 left-4 select-none">
          {number}
        </span>
        <span className="absolute bottom-2 sm:bottom-3 left-24 sm:left-9 text-[rgba(255,255,255,0.32)] text-[10px] font-normal tracking-wider whitespace-nowrap">
          {label}
        </span>
      </div>

      {/* Content */}
      <div className="flex flex-col justify-center pl-7 pr-6 sm:pr-8 py-5 sm:py-4">
        <h3 className="font-bold text-white text-2xl sm:text-[32px] mb-3 whitespace-normal sm:whitespace-nowrap">
          {titleParts.map((part, i) => (
            <span
              key={i}
              className={i === highlightIdx ? "text-[#facc15]" : ""}
            >
              {part}
            </span>
          ))}
        </h3>
        <p className="text-[rgba(255,255,255,0.57)] text-sm tracking-[0.45px] max-w-[776px]">
          {description}
        </p>
      </div>
    </motion.div>
  );
}

export default function ProcessSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="process"
      className="min-h-screen bg-black py-20 overflow-hidden"
    >
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 md:px-[47px]">
        <motion.p
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
          className="text-white text-sm font-thin tracking-[1.68px] mb-16"
        >
          Process
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-black text-white text-3xl sm:text-4xl md:text-[48px] leading-[1.2] mb-16 ml-0 md:ml-[68px]"
        >
          Three design principles I
          <br />
          don&apos;t compromise on.
        </motion.h2>

        <div className="ml-0 md:ml-[90px] space-y-0 w-full md:w-[1063px] max-w-full">
          {principles.map((p, i) => (
            <PrincipleRow key={p.number} {...p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
