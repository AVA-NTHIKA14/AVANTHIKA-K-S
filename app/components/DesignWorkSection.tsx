"use client";

import { useState } from "react";
import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { PORTFOLIO_DATA } from "../data/portfolioData";
import type { DesignCategory } from "../types";

const CATEGORIES: DesignCategory[] = ["UI/UX", "Branding", "Social Media", "Web Design", "Visual Design"];

function isValidExternalUrl(value?: string) {
  if (!value) return false;
  try {
    const url = new URL(value);
    return url.protocol === "https:" || url.protocol === "http:";
  } catch {
    return false;
  }
}

const DESIGN_WORKS = PORTFOLIO_DATA.designWorks.filter((work) => isValidExternalUrl(work.figmaUrl));

export default function DesignWorkSection() {
  const [category, setCategory] = useState<DesignCategory | "all">("all");
  const works = DESIGN_WORKS;
  const visibleWorks = category === "all" ? works : works.filter((work) => work.category === category);

  return (
    <section id="design-work" className="border-t border-zinc-100 bg-white py-20 dark:border-zinc-900 dark:bg-black sm:py-24">
      <div className="mx-auto max-w-[1200px] px-6 sm:px-10">
        <div className="flex flex-wrap items-end justify-between gap-5">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[.2em] text-zinc-500">Product & visual design</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-zinc-950 dark:text-white sm:text-4xl">Design portfolio</h2>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-zinc-600 dark:text-zinc-400">See product design work in the linked Figma portfolio.</p>
          </div>
          {isValidExternalUrl(PORTFOLIO_DATA.designPortfolioUrl) && <a href={PORTFOLIO_DATA.designPortfolioUrl} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center gap-2 rounded-full border border-zinc-300 px-4 py-2 text-sm font-medium text-zinc-800 hover:border-zinc-500 dark:border-zinc-700 dark:text-zinc-200 dark:hover:border-zinc-500">Browse Figma portfolio <ExternalLink size={14} aria-hidden="true" /></a>}
        </div>

        {works.length > 0 && <>
          <div className="mt-7 flex flex-wrap gap-2" aria-label="Filter design work by category">
            <button type="button" aria-pressed={category === "all"} onClick={() => setCategory("all")} className={`min-h-10 rounded-full border px-4 py-2 text-sm ${category === "all" ? "border-zinc-900 bg-zinc-900 text-white dark:border-white dark:bg-white dark:text-black" : "border-zinc-300 dark:border-zinc-700"}`}>All design work</button>
            {CATEGORIES.map((item) => <button key={item} type="button" aria-pressed={category === item} onClick={() => setCategory(item)} className={`min-h-10 rounded-full border px-4 py-2 text-sm ${category === item ? "border-zinc-900 bg-zinc-900 text-white dark:border-white dark:bg-white dark:text-black" : "border-zinc-300 dark:border-zinc-700"}`}>{item}</button>)}
          </div>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {visibleWorks.map((work) => <article key={work.id} className="overflow-hidden rounded-2xl border border-zinc-200 dark:border-zinc-800">
              {work.previewImage && <Image src={work.previewImage} alt={`${work.title} preview`} width={1000} height={650} className="aspect-[16/9] w-full object-cover" />}
              <div className="p-5 sm:p-6">
                <p className="text-xs font-semibold uppercase tracking-wide text-zinc-500">{work.category}</p>
                <h3 className="mt-2 text-xl font-semibold text-zinc-950 dark:text-white">{work.title}</h3>
                <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-400">{work.description}</p>
                {work.contribution && <p className="mt-3 text-sm"><span className="font-medium">Contribution:</span> {work.contribution}</p>}
                {work.figmaUrl && <a href={work.figmaUrl} target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex min-h-10 items-center gap-2 text-sm font-medium underline underline-offset-4">Open design <ExternalLink size={14} aria-hidden="true" /></a>}
              </div>
            </article>)}
          </div>
          {visibleWorks.length === 0 && <p className="mt-6 text-sm text-zinc-600 dark:text-zinc-400">No design work in this category yet.</p>}
        </>}
      </div>
    </section>
  );
}
