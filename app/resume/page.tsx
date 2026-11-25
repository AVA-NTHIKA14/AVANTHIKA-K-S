"use client";

import Link from "next/link";
import { ArrowLeft, Download, ExternalLink, Printer } from "lucide-react";
import Header from "../components/Header";
import { PORTFOLIO_DATA } from "../data/portfolioData";

const pdfResume = PORTFOLIO_DATA.resumes.find((resume) => resume.format === "pdf");
const downloadableResumes = PORTFOLIO_DATA.resumes;

export default function ResumePage() {
  return (
    <main className="min-h-screen bg-zinc-50 px-4 pb-8 pt-28 text-left text-zinc-800 dark:bg-black dark:text-zinc-200 sm:px-6 sm:pb-12 sm:pt-32">
      <Header />
      <div className="mx-auto max-w-[1000px]">
        <div className="mb-6 flex flex-wrap items-center justify-between gap-3 print:hidden">
          <Link href="/" className="inline-flex min-h-11 items-center gap-2 text-sm font-medium text-zinc-600 hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-white"><ArrowLeft size={16} aria-hidden="true" /> Back to portfolio</Link>
          <button type="button" onClick={() => window.print()} className="inline-flex min-h-11 items-center gap-2 rounded-full bg-zinc-950 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-zinc-700 dark:bg-white dark:text-black dark:hover:bg-zinc-200"><Printer size={15} aria-hidden="true" /> Print page</button>
        </div>

        <header className="mb-6 rounded-2xl border border-zinc-200 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-950 sm:p-7">
          <p className="text-xs font-semibold uppercase tracking-[.18em] text-zinc-500">Resume</p>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight text-zinc-950 dark:text-white">{PORTFOLIO_DATA.name}</h1>
          <p className="mt-2 max-w-2xl text-sm leading-6 text-zinc-600 dark:text-zinc-400">Latest PDF / Updated {pdfResume?.updatedAt ?? "date not provided"}</p>

          {downloadableResumes.length > 0 ? (
            <div className="mt-5 flex flex-wrap gap-3">
              {downloadableResumes.map((resume) => (
                <a key={resume.url} href={resume.url} download className="inline-flex min-h-11 items-center gap-2 rounded-full border border-zinc-300 px-4 py-2 text-sm font-medium text-zinc-800 hover:border-zinc-500 dark:border-zinc-700 dark:text-zinc-200 dark:hover:border-zinc-500">
                  <Download size={15} aria-hidden="true" /> {resume.label} ({resume.format.toUpperCase()})
                </a>
              ))}
              {pdfResume && <a href={pdfResume.url} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center gap-2 px-3 py-2 text-sm font-medium text-zinc-600 underline underline-offset-4 hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-white">Open PDF <ExternalLink size={14} aria-hidden="true" /></a>}
            </div>
          ) : <p className="mt-5 text-sm text-zinc-600 dark:text-zinc-400">No resume files are available yet.</p>}
        </header>

        {pdfResume && (
          <section aria-labelledby="resume-preview-heading" className="overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm dark:border-zinc-800 dark:bg-zinc-950 print:border-0 print:shadow-none">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-zinc-200 px-5 py-4 dark:border-zinc-800 print:hidden">
              <div>
                <h2 id="resume-preview-heading" className="font-semibold text-zinc-950 dark:text-white">Resume preview</h2>
                <p className="mt-1 text-sm text-zinc-500">PDF · use your browser’s controls to zoom or print</p>
              </div>
              <a href={pdfResume.url} download className="inline-flex min-h-10 items-center gap-2 text-sm font-medium underline underline-offset-4"><Download size={15} aria-hidden="true" /> Download PDF</a>
            </div>
            <iframe title={`${PORTFOLIO_DATA.name} resume PDF`} src={pdfResume.url} className="h-[72vh] min-h-[600px] w-full bg-white print:h-[100vh]" />
          </section>
        )}
      </div>
    </main>
  );
}
