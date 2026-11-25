import { ExternalLink, Github } from "lucide-react";
import { PORTFOLIO_DATA } from "../data/portfolioData";

/** A lightweight profile link; repository contributions are only listed when individually documented. */
export default function OpenSourceSection() {
  return (
    <section id="open-source" className="border-t border-zinc-200 bg-white py-16 dark:border-zinc-900 dark:bg-black">
      <div className="mx-auto flex max-w-[1200px] flex-wrap items-center justify-between gap-5 px-6 sm:px-10">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[.18em] text-zinc-500">Open source</p>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight text-zinc-950 dark:text-white">Explore my public work</h2>
          <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-400">Visit my GitHub profile to review repositories and activity.</p>
        </div>
        <a href={PORTFOLIO_DATA.contact.github} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center gap-2 rounded-full border border-zinc-300 px-4 py-2 text-sm font-medium text-zinc-800 hover:border-zinc-500 dark:border-zinc-700 dark:text-zinc-200 dark:hover:border-zinc-500"><Github size={16} aria-hidden="true" /> GitHub profile <ExternalLink size={14} aria-hidden="true" /></a>
      </div>
    </section>
  );
}
