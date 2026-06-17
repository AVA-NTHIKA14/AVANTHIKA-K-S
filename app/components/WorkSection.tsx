"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const works = [
  {
    id: 1,
    title: "Workflow",
    subtitle: "A internal productivity tool",
    bg: "from-yellow-900/20 to-black",
  },
  {
    id: 2,
    title: "Changayi",
    subtitle: "Ai Powered Wellness App",
    bg: "from-purple-900/20 to-black",
  },
  {
    id: 3,
    title: "Find Near by",
    subtitle: "Connecting neighbourhoods",
    bg: "from-blue-900/20 to-black",
  },
  {
    id: 4,
    title: "More Soon",
    subtitle: "Coming next...",
    bg: "from-green-900/20 to-black",
  },
];

function WorkCard({
  title,
  subtitle,
  bg,
  index,
}: {
  title: string;
  subtitle: string;
  bg: string;
  index: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="border border-[#facc15] w-[340px] h-[560px] flex-shrink-0 flex flex-col relative group hover:shadow-[0_0_40px_rgba(250,204,21,0.2)] transition-all duration-500 p-5"
    >
      {/* Image placeholder */}
      <div
        className={`h-[200px] mx-auto w-[260px] bg-gradient-to-b ${bg} border border-white/10 rounded flex-shrink-0`}
      />

      {/* Title */}
      <p className="font-extrabold text-white text-[28px] text-center mt-5 mb-5 flex-shrink-0">
        {title}
      </p>

      {/* Bottom card */}
      <div className="flex-1 bg-[rgba(217,217,217,0.1)] rounded-[23px] px-6 py-5 flex flex-col justify-between min-h-0">
        <p className="font-extrabold text-white text-lg">{subtitle}</p>

        {/* View button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          className="self-end bg-[#facc15] text-black font-extrabold text-xl rounded-[45px] px-7 py-3 cursor-pointer border-none mt-4"
        >
          View
        </motion.button>
      </div>
    </motion.div>
  );
}

export default function WorkSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="work" className="min-h-screen bg-black py-20 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-[27px]">
        <motion.p
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          className="text-white text-sm font-thin tracking-[1.68px] mb-20"
        >
          Selected Works
        </motion.p>

        {/* Horizontally scrollable work cards */}
        <div className="flex gap-14 overflow-x-auto pb-6 scrollbar-hide pl-[67px]">
          {works.map((w, i) => (
            <WorkCard key={w.id} {...w} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
