"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowDownRight, ArrowLeft, ArrowRight, Check, GraduationCap, HeartPulse, MapPinned, Route, Sparkles, Users } from "lucide-react";

const CHAPTERS = [
  { id: "education", title: "ECE at GEC Palakkad", short: "Studies", year: "2023—27", description: "Electronics and communication engineering gave me a hands-on way to understand how systems fit together.", href: "#education", Icon: GraduationCap },
  { id: "community", title: "Learning with community", short: "Community", year: "2024—26", description: "At MuLearn, I took on district leadership, campus coordination, and media work.", href: "#experience", Icon: Users },
  { id: "lsg", title: "LSG Track", short: "Civic tech", year: "Project", description: "A panchayat licensing portal shaped through conversations with village officers and the Panchayat Secretary.", href: "/projects/lsg-track", Icon: MapPinned },
  { id: "care-ring", title: "Care-Ring", short: "Assistive tech", year: "Prototype", description: "An ESP32 prototype exploring touch patterns as a simple way to signal a request for help.", href: "/projects/carering", Icon: HeartPulse },
  { id: "roadsense", title: "RoadSense", short: "In progress", year: "Major project", description: "A mobile project exploring phone sensors and maps to identify potential road hazards.", href: "/projects/roadsense", Icon: Route },
] as const;

const POINTS = [
  { x: 100, y: 203 },
  { x: 284, y: 112 },
  { x: 474, y: 182 },
  { x: 665, y: 102 },
  { x: 846, y: 189 },
];
const PATH = "M 100 203 C 162 203 222 112 284 112 S 412 182 474 182 S 601 102 665 102 S 783 189 846 189";

export default function JourneyGame() {
  const [current, setCurrent] = useState(0);
  const [visited, setVisited] = useState<number[]>([]);
  const stopRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const gameRef = useRef<HTMLElement>(null);
  const chapter = CHAPTERS[current];
  const allComplete = visited.length === CHAPTERS.length;

  const move = (direction: number) => {
    const next = (current + direction + CHAPTERS.length) % CHAPTERS.length;
    setCurrent(next);
    stopRefs.current[next]?.focus();
  };

  const activate = () => {
    setVisited((value) => value.includes(current) ? value : [...value, current]);
  };

  const visitChapter = (index: number) => {
    setCurrent(index);
    setVisited((value) => value.includes(index) ? value : [...value, index]);
  };

  const onKeyDown = (event: React.KeyboardEvent<HTMLElement>) => {
    if (event.key === "ArrowRight" || event.key.toLowerCase() === "d") {
      event.preventDefault();
      move(1);
    } else if (event.key === "ArrowLeft" || event.key.toLowerCase() === "a") {
      event.preventDefault();
      move(-1);
    } else if (event.key === "Enter" || event.key === " ") {
      if ((event.target as HTMLElement).closest("button, a")) return;
      event.preventDefault();
      activate();
    }
  };

  return (
    <section ref={gameRef} aria-labelledby="journey-game-title" onKeyDown={onKeyDown} tabIndex={0} className="border-t border-zinc-100 bg-white py-10 outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-sky-500 dark:border-zinc-900 dark:bg-black sm:py-12">
      <div className="mx-auto max-w-[1200px] px-6 sm:px-10">
        <div className="[--map-path:#bfdbfe] [--map-trace:#2563eb] [--tile-top:#d7ebfa] [--tile-side:#a9d3ef] [--tile-dark:#8bbfe3] [--tile-current:#38bdf8] [--grid-line:rgba(37,99,235,.18)] [--marker:#eff6ff] [--marker-core:#1d4ed8] overflow-hidden rounded-2xl border border-sky-100 bg-[#eaf4fc] text-slate-900 dark:[--map-path:#0b100f] dark:[--map-trace:#75e0aa] dark:[--tile-top:#315b4a] dark:[--tile-side:#1e4435] dark:[--tile-dark:#183b2e] dark:[--tile-current:#5bcf94] dark:[--grid-line:rgba(94,234,165,.15)] dark:[--marker:#d9ffe9] dark:[--marker-core:#155e42] dark:border-zinc-800 dark:bg-zinc-950 dark:text-white">
          <header className="flex flex-wrap items-end justify-between gap-4 px-6 pt-6 sm:px-8 sm:pt-8">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[.2em] text-sky-800 dark:text-emerald-300">Playable portfolio · Arrow keys to move</p>
              <h2 id="journey-game-title" className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">My journey</h2>
              <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600 dark:text-emerald-50/70">Take a short trip through the studies, people, and projects that have shaped my work.</p>
            </div>
            <p aria-live="polite" className="inline-flex items-center gap-2 rounded-full border border-sky-800/15 bg-white/60 px-3 py-2 text-xs font-medium text-sky-900 dark:border-emerald-100/15 dark:bg-white/5 dark:text-emerald-100">
              {allComplete ? <><Sparkles size={14} aria-hidden="true" /> Journey complete</> : <>{visited.length} / {CHAPTERS.length} chapters explored</>}
            </p>
          </header>

          <div className="relative mt-2 h-[300px] overflow-hidden sm:h-[340px]" role="group" aria-label="Three-dimensional journey map" style={{ perspective: "1000px" }}>
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_95%,rgba(96,165,250,.35),transparent_65%)] dark:bg-[radial-gradient(ellipse_at_50%_95%,rgba(24,82,61,.62),transparent_65%)]" />
            <motion.div aria-hidden="true" className="absolute -inset-x-20 bottom-[-50%] h-[100%] origin-center opacity-60" animate={{ rotateX: 56, rotateZ: -7 }} transition={{ duration: 1.2, ease: "easeOut" }} style={{ backgroundImage: "linear-gradient(var(--grid-line) 1px,transparent 1px),linear-gradient(90deg,var(--grid-line) 1px,transparent 1px)", backgroundSize: "38px 38px", transformStyle: "preserve-3d" }} />

            <svg viewBox="0 0 950 300" preserveAspectRatio="none" className="absolute inset-0 h-full w-full" aria-hidden="true">
              <path d={PATH} fill="none" stroke="var(--map-path)" strokeWidth="34" strokeLinecap="round" />
              <path d={PATH} fill="none" stroke="var(--map-trace)" strokeOpacity=".75" strokeWidth="3" strokeDasharray="5 10" strokeLinecap="round" />
              {POINTS.map((point, index) => <g key={CHAPTERS[index].id}>
                <ellipse cx={point.x} cy={point.y + 20} rx="47" ry="17" fill="#34506a" opacity=".25" />
                <path d={`M ${point.x - 42} ${point.y + 1} l 42 -19 42 19 -42 21 Z`} fill={current === index ? "var(--tile-current)" : "var(--tile-top)"} stroke="var(--map-trace)" strokeOpacity=".7" />
                <path d={`M ${point.x - 42} ${point.y + 1} v 10 l 42 21 v -10 Z`} fill="var(--tile-side)" />
                <path d={`M ${point.x + 42} ${point.y + 1} v 10 l -42 21 v -10 Z`} fill="var(--tile-dark)" />
              </g>)}
              <motion.g animate={{ x: POINTS[current].x, y: POINTS[current].y - 31 }} transition={{ type: "spring", stiffness: 90, damping: 16 }}>
                <motion.ellipse cx="0" cy="33" rx="20" ry="7" fill="#34506a" opacity=".35" animate={{ scale: [1, .85, 1] }} transition={{ duration: .7, repeat: Infinity }} />
                <motion.circle cx="0" cy="-2" r="17" fill="var(--marker)" stroke="var(--map-trace)" strokeWidth="3" animate={{ y: [0, -5, 0] }} transition={{ duration: .7, repeat: Infinity, ease: "easeInOut" }} />
                <motion.path d="M -6 1 L 0 -8 L 6 1 L 0 7 Z" fill="var(--marker-core)" animate={{ y: [0, -5, 0] }} transition={{ duration: .7, repeat: Infinity, ease: "easeInOut" }} />
              </motion.g>
            </svg>

            {CHAPTERS.map((item, index) => {
              const Icon = item.Icon;
              const point = POINTS[index];
              const done = visited.includes(index);
              return (
                <button ref={(element) => { stopRefs.current[index] = element; }} key={item.id} type="button" onFocus={() => setCurrent(index)} onClick={() => visitChapter(index)} aria-pressed={current === index} aria-label={`Select chapter ${index + 1}: ${item.title}${done ? ", explored" : ""}`} className="absolute z-10 flex w-24 -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-2 rounded-xl p-1 text-center outline-none focus-visible:ring-2 focus-visible:ring-emerald-200 sm:w-32" style={{ left: `${(point.x / 950) * 100}%`, top: `${(point.y / 300) * 100}%` }}>
                  <span className={`flex h-9 w-9 items-center justify-center rounded-xl border shadow-lg transition sm:h-10 sm:w-10 ${current === index ? "border-sky-300 bg-sky-100 text-sky-950 dark:border-emerald-200 dark:bg-emerald-100 dark:text-emerald-950" : "border-sky-800/15 bg-white/90 text-sky-800 dark:border-white/20 dark:bg-[#173127] dark:text-emerald-100"}`}>
                    {done ? <Check size={17} aria-hidden="true" /> : <Icon size={17} aria-hidden="true" />}
                  </span>
                  <span className={`text-[10px] font-medium leading-tight sm:text-xs ${current === index ? "text-sky-950 dark:text-white" : "text-slate-700 dark:text-emerald-50/75"}`}>{item.short}</span>
                </button>
              );
            })}
          </div>

          <div className="grid gap-5 border-t border-sky-900/10 bg-white/35 px-6 py-5 sm:grid-cols-[1fr_auto] sm:items-center sm:px-8 sm:py-6 dark:border-white/10 dark:bg-black/15">
            <div aria-live="polite" aria-atomic="true" className="min-h-[88px]">
              <p className="text-xs font-medium uppercase tracking-[.16em] text-sky-800 dark:text-emerald-300">Chapter {current + 1} <span aria-hidden="true">/</span> {chapter.year}</p>
              <h3 className="mt-1 text-lg font-semibold">{chapter.title}</h3>
              <p className="mt-1 max-w-2xl text-sm leading-6 text-slate-600 dark:text-emerald-50/70">{chapter.description}</p>
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <button type="button" onClick={() => move(-1)} aria-label="Previous chapter" className="flex h-10 w-10 items-center justify-center rounded-full border border-sky-900/20 text-sky-900 transition hover:bg-white/70 dark:border-white/20 dark:text-emerald-50 dark:hover:bg-white/10"><ArrowLeft size={16} /></button>
              <button type="button" onClick={() => move(1)} aria-label="Next chapter" className="flex h-10 w-10 items-center justify-center rounded-full border border-sky-900/20 text-sky-900 transition hover:bg-white/70 dark:border-white/20 dark:text-emerald-50 dark:hover:bg-white/10"><ArrowRight size={16} /></button>
              <button type="button" onClick={activate} className="ml-1 inline-flex min-h-10 items-center gap-2 rounded-full bg-sky-700 px-4 py-2 text-sm font-semibold text-white transition hover:bg-sky-800 dark:bg-emerald-200 dark:text-emerald-950 dark:hover:bg-white">
                {visited.includes(current) ? "Checkpoint saved" : "Explore checkpoint"}
                {visited.includes(current) ? <Check size={15} aria-hidden="true" /> : <ArrowDownRight size={15} aria-hidden="true" />}
              </button>
              {visited.includes(current) && <Link href={chapter.href} className="inline-flex min-h-10 items-center rounded-full px-3 text-sm font-medium text-sky-800 underline underline-offset-4 hover:text-sky-950 dark:text-emerald-100 dark:hover:text-white">Open chapter</Link>}
            </div>
          </div>
          <p className="border-t border-sky-900/10 px-6 py-3 text-[11px] text-slate-500 sm:px-8 dark:border-white/10 dark:text-emerald-50/50">Click a station or focus this game and use ← → (or A / D). Press Enter to collect a checkpoint.</p>
        </div>
      </div>
    </section>
  );
}
