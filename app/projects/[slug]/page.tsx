"use client";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ExternalLink, Github, CheckCircle2, AlertTriangle, BookOpen, Figma } from "lucide-react";
import Header from "../../components/Header";
import { PORTFOLIO_DATA } from "../../data/portfolioData";

export default function ProjectCaseStudy() {
  const params = useParams();
  const router = useRouter();
  const slug = params?.slug as string;

  const project = PORTFOLIO_DATA.projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <main className="min-h-screen bg-white flex flex-col items-center justify-center text-black px-6">
        <AlertTriangle size={48} className="text-zinc-400 mb-4" />
        <h1 className="text-3xl font-black mb-2">Project Not Found</h1>
        <p className="text-zinc-500 text-sm mb-8 text-center max-w-md">
          The case study you are looking for does not exist or has been moved.
        </p>
        <button
          onClick={() => router.push("/")}
          className="bg-black text-white font-extrabold text-xs tracking-wider uppercase px-6 py-3.5 rounded-full cursor-pointer hover:bg-zinc-900 transition-all"
        >
          Return to Home
        </button>
      </main>
    );
  }

  return (
    <main className="bg-white min-h-screen text-zinc-600 pb-24">
      {/* Sticky nav header */}
      <Header />

      {/* Hero Section */}
      <section className="relative pt-[140px] pb-20 overflow-hidden border-b border-zinc-150">
        <div className="absolute inset-0 pointer-events-none opacity-[0.02] bg-[radial-gradient(#000000_1px,transparent_1px)] [background-size:20px_20px]" />
        
        <div className="max-w-[1440px] mx-auto px-6 sm:px-12 md:px-24">
          {/* Back button */}
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-zinc-500 hover:text-black transition-colors mb-12 cursor-pointer"
          >
            <ArrowLeft size={16} /> Back to Projects
          </Link>

          {/* Heading */}
          <div className="max-w-4xl text-left">
            <span className="text-[10px] sm:text-xs font-extrabold tracking-[3px] uppercase text-zinc-500 bg-zinc-100 border border-zinc-200 px-3.5 py-1.5 rounded-full">
              {project.role.map((role) => role[0].toUpperCase() + role.slice(1)).join(" / ")}
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-black mt-6 tracking-tight leading-tight">
              {project.title}
            </h1>
            <p className="text-zinc-500 font-medium text-lg sm:text-xl md:text-2xl mt-4 leading-relaxed tracking-wide">
              {project.tagline}
            </p>
          </div>

          {/* Project metadata */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 border-t border-zinc-150 dark:border-zinc-800 pt-8 max-w-5xl text-left">
            <div>
              <p className="text-zinc-400 dark:text-zinc-500 text-[10px] uppercase tracking-wider font-bold">Role</p>
              <p className="text-black dark:text-white font-extrabold text-sm sm:text-base mt-1">{project.contributionRole}</p>
            </div>
            <div>
              <p className="text-zinc-400 dark:text-zinc-500 text-[10px] uppercase tracking-wider font-bold">Timeline</p>
              <p className="text-black dark:text-white font-extrabold text-sm sm:text-base mt-1">{project.period}</p>
            </div>
            <div>
              <p className="text-zinc-400 dark:text-zinc-500 text-[10px] uppercase tracking-wider font-bold">Client / Context</p>
              <p className="text-black dark:text-white font-extrabold text-sm sm:text-base mt-1">Hackathon Project</p>
            </div>
            <div className="flex gap-4 items-center">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-black text-white font-extrabold text-[10px] tracking-wider uppercase px-5 py-3 rounded-full flex items-center gap-1.5 hover:bg-zinc-900 transition-all cursor-pointer shadow-sm"
                >
                  Live Demo <ExternalLink size={12} />
                </a>
              )}
              {project.figmaUrl && (
                <a
                  href={project.figmaUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-black text-white font-extrabold text-[10px] tracking-wider uppercase px-5 py-3 rounded-full flex items-center gap-1.5 hover:bg-zinc-900 transition-all cursor-pointer shadow-sm"
                >
                  View Figma File <Figma size={12} />
                </a>
              )}
              {project.githubUrl && <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-zinc-200 hover:border-black hover:bg-zinc-50 flex items-center justify-center text-zinc-400 hover:text-black transition-colors"
                title="View GitHub Repository"
              >
                <Github size={16} />
              </a>}
            </div>
          </div>
        </div>
      </section>

      {/* Case Study Body */}
      <section className="max-w-[1440px] mx-auto px-6 sm:px-12 md:px-24 py-20 text-left">
        <div className="grid lg:grid-cols-12 gap-16">
          
          {/* Main Content Area */}
          <div className="lg:col-span-8 space-y-20">
            
            {/* Overview */}
            <div>
              <h2 className="text-black font-extrabold text-2xl sm:text-3xl mb-6 tracking-tight">Overview</h2>
              <p className="text-zinc-500 font-medium text-base sm:text-lg leading-relaxed">
                {project.overview}
              </p>
            </div>

            {/* Problem Statement */}
            <div className="border-t border-zinc-100 pt-12">
              <h2 className="text-black font-extrabold text-2xl sm:text-3xl mb-6 tracking-tight">Problem</h2>
              <p className="text-zinc-650 font-medium text-base sm:text-lg leading-relaxed bg-zinc-50 border border-zinc-200 rounded-2xl p-6 sm:p-8">
                {project.problem}
              </p>
            </div>

            {/* Goals & Objectives */}
            <div className="border-t border-zinc-100 pt-12">
              <h2 className="text-black font-extrabold text-2xl sm:text-3xl mb-6 tracking-tight">Objectives</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {project.goals.map((goal, idx) => (
                  <div key={idx} className="flex gap-3 bg-zinc-50/50 border border-zinc-200 rounded-2xl p-5 items-start">
                    <CheckCircle2 className="text-zinc-800 flex-shrink-0 mt-0.5" size={18} />
                    <p className="text-zinc-600 text-sm leading-relaxed font-semibold">{goal}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Research & Discovery */}
            <div className="border-t border-zinc-100 pt-12">
              <h2 className="text-black font-extrabold text-2xl sm:text-3xl mb-6 tracking-tight">Research</h2>
              <p className="text-zinc-500 font-medium text-base sm:text-lg leading-relaxed mb-6">
                {project.research.methodology}
              </p>
              
              <div className="border border-zinc-200 bg-zinc-50/50 rounded-2xl p-6 sm:p-8">
                <h4 className="text-black font-extrabold text-xs uppercase tracking-wider mb-4 flex items-center gap-2">
                  <BookOpen size={16} className="text-zinc-700" /> Key insights
                </h4>
                <ul className="space-y-3 pl-0 list-none text-zinc-500 text-sm leading-relaxed font-semibold">
                  {project.research.insights.map((insight, idx) => (
                    <li key={idx} className="flex gap-2.5 items-start">
                      <span className="w-1.5 h-1.5 rounded-full bg-zinc-800 mt-2 flex-shrink-0" />
                      <span>{insight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Design Process */}
            <div className="border-t border-zinc-100 pt-12">
              <h2 className="text-black font-extrabold text-2xl sm:text-3xl mb-6 tracking-tight">Design Decisions</h2>
              
              <div className="grid gap-6">
                <div className="bg-zinc-50/30 border border-zinc-200 rounded-2xl p-6">
                  <span className="text-[9px] font-extrabold uppercase tracking-wider text-zinc-400">Process Layer</span>
                  <h4 className="text-black font-extrabold text-base mt-2 mb-3">Conceptual Strategy</h4>
                  <p className="text-zinc-500 text-sm font-medium leading-relaxed">{project.design.process}</p>
                </div>
                <div className="bg-zinc-50/30 border border-zinc-200 rounded-2xl p-6">
                  <span className="text-[9px] font-extrabold uppercase tracking-wider text-zinc-400">Wireframing Layer</span>
                  <h4 className="text-black font-extrabold text-base mt-2 mb-3">Visual Layout Structure</h4>
                  <p className="text-zinc-500 text-sm font-medium leading-relaxed">{project.design.wireframes}</p>
                </div>
                <div className="bg-zinc-50/30 border border-zinc-200 rounded-2xl p-6">
                  <span className="text-[9px] font-extrabold uppercase tracking-wider text-zinc-400">Iteration Loop</span>
                  <h4 className="text-black font-extrabold text-base mt-2 mb-3">Design Adjustments</h4>
                  <p className="text-zinc-500 text-sm font-medium leading-relaxed">{project.design.iterations}</p>
                </div>
                <div className="bg-zinc-50/30 border border-zinc-200 rounded-2xl p-6">
                  <span className="text-[9px] font-extrabold uppercase tracking-wider text-zinc-400">Final UI Design</span>
                  <h4 className="text-black font-extrabold text-base mt-2 mb-3">Aesthetics & Typography</h4>
                  <p className="text-zinc-500 text-sm font-medium leading-relaxed">{project.design.finalUI}</p>
                </div>
              </div>
            </div>

            {project.slug === "workflow" && (
              <div className="border-t border-zinc-100 pt-12">
                <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                  <h2 className="text-black font-extrabold text-2xl sm:text-3xl tracking-tight">Prototype Frames</h2>
                  {project.figmaUrl ? (
                    <a href={project.figmaUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 border border-zinc-300 rounded-full px-4 py-2 text-xs font-bold text-black hover:bg-zinc-50"><Figma size={14} /> View Figma File</a>
                  ) : (
                    <span className="inline-flex items-center gap-2 border border-dashed border-zinc-300 rounded-full px-4 py-2 text-xs font-semibold text-zinc-500"><Figma size={14} /> View Figma File — TODO</span>
                  )}
                </div>
                {/* TODO: replace these placeholders with exported frames from the WorkFlow Figma file. */}
                <div className="grid sm:grid-cols-3 gap-4">
                  {["Dashboard overview", "Project timeline", "Task handoff flow"].map((frame) => (
                    <div key={frame} className="aspect-[4/3] rounded-2xl border border-dashed border-zinc-300 bg-zinc-50 flex items-center justify-center p-6 text-center text-sm text-zinc-500">TODO: add Figma frame — {frame}</div>
                  ))}
                </div>
              </div>
            )}

            {/* Development & Architecture */}
            <div className="border-t border-zinc-100 pt-12">
              <h2 className="text-black font-extrabold text-2xl sm:text-3xl mb-6 tracking-tight">Implementation</h2>
              <p className="text-zinc-500 font-medium text-base sm:text-lg leading-relaxed mb-8">
                {project.development.architecture}
              </p>

              <h3 className="text-black font-extrabold text-lg mb-4 tracking-tight">Architectural Decisions</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {project.development.techDecisions.map((dec, idx) => (
                  <div key={idx} className="bg-zinc-50/30 border border-zinc-200 rounded-2xl p-5 flex flex-col justify-between">
                    <h4 className="font-extrabold text-black text-sm">{dec.title}</h4>
                    <p className="text-zinc-500 text-xs mt-2 leading-relaxed font-semibold">{dec.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Technical Challenges */}
            <div className="border-t border-zinc-100 pt-12">
              <h2 className="text-black font-extrabold text-2xl sm:text-3xl mb-6 tracking-tight">Challenges</h2>
              <div className="space-y-6">
                {project.development.challenges.map((chal, idx) => (
                  <div key={idx} className="bg-zinc-50/40 border border-zinc-200 rounded-2xl p-6 sm:p-8">
                    <h4 className="font-extrabold text-black text-base flex items-center gap-2">
                      <AlertTriangle className="text-zinc-600" size={16} /> {chal.title}
                    </h4>
                    <p className="text-zinc-500 text-sm mt-3 leading-relaxed font-semibold">{chal.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Learnings & Future */}
            <div className="border-t border-zinc-100 pt-12 grid sm:grid-cols-2 gap-8">
              <div>
                <h3 className="text-black font-extrabold text-xl mb-4 tracking-tight">Outcome and learnings</h3>
                <ul className="space-y-2.5 pl-0 list-none text-zinc-500 text-sm leading-relaxed font-semibold">
                  {project.learnings.map((learn, idx) => (
                    <li key={idx} className="flex gap-2 items-start">
                      <span className="w-1.5 h-1.5 rounded-full bg-zinc-800 mt-2 flex-shrink-0" />
                      <span>{learn}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-black font-extrabold text-xl mb-4 tracking-tight">Future Roadmap</h3>
                <ul className="space-y-2.5 pl-0 list-none text-zinc-500 text-sm leading-relaxed font-semibold">
                  {project.futureImprovements.map((imp, idx) => (
                    <li key={idx} className="flex gap-2 items-start">
                      <span className="w-1.5 h-1.5 rounded-full bg-zinc-800 mt-2 flex-shrink-0" />
                      <span>{imp}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

          </div>

          {/* Sticky Side info sidebar */}
          <div className="lg:col-span-4 lg:sticky lg:top-[130px] h-fit space-y-8">
            {/* Tech stack details */}
            <div className="border border-zinc-200 bg-zinc-50/30 rounded-3xl p-6">
              <h4 className="text-black font-extrabold text-xs uppercase tracking-wider border-b border-zinc-150 pb-3 mb-4">
                Core Technologies
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="text-zinc-650 text-xs px-2.5 py-1 rounded bg-white border border-zinc-200 font-semibold"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Features panel */}
            <div className="border border-zinc-200 bg-zinc-50/30 rounded-3xl p-6">
              <h4 className="text-black font-extrabold text-xs uppercase tracking-wider border-b border-zinc-150 pb-3 mb-4">
                Key Features Delivered
              </h4>
              <div className="space-y-4">
                {project.keyFeatures.map((feat, idx) => (
                  <div key={idx}>
                    <h5 className="font-extrabold text-black text-xs flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-zinc-800" /> {feat.title}
                    </h5>
                    <p className="text-zinc-500 text-[11px] mt-1 leading-relaxed font-semibold pl-3">
                      {feat.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick action card */}
            {project.githubUrl && <div className="border border-zinc-200 bg-zinc-50/50 rounded-3xl p-6 border-dashed">
              <h4 className="text-black font-extrabold text-sm mb-2">Interested in the code?</h4>
              <p className="text-zinc-500 text-xs mb-4 leading-relaxed font-semibold">
                Inspect the complete file structure, API endpoints, libraries, and integration files in the repository.
              </p>
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-black hover:bg-zinc-900 text-white font-extrabold text-xs tracking-wider uppercase px-4 py-3 rounded-full flex items-center justify-center gap-1.5 transition-all cursor-pointer shadow-sm"
              >
                Inspect Repository <Github size={14} />
              </a>
            </div>}
          </div>

        </div>
      </section>

      {/* Case studies navigation links footer */}
      <footer className="border-t border-zinc-150 mt-20 pt-12 max-w-[1440px] mx-auto px-6 sm:px-12 md:px-24 flex items-center justify-between">
        <Link
          href="/#projects"
          className="text-zinc-500 hover:text-black text-xs font-bold uppercase tracking-wider transition-colors flex items-center gap-1.5 cursor-pointer"
        >
          <ArrowLeft size={14} /> Back to Dashboard
        </Link>
        
        {/* Next project helper */}
        {(() => {
          const currentIndex = PORTFOLIO_DATA.projects.findIndex((p) => p.slug === slug);
          const nextIndex = (currentIndex + 1) % PORTFOLIO_DATA.projects.length;
          const nextProject = PORTFOLIO_DATA.projects[nextIndex];
          return (
            <Link
              href={`/projects/${nextProject.slug}`}
              className="text-zinc-700 hover:text-black text-xs font-bold uppercase tracking-wider transition-colors flex items-center gap-1.5 cursor-pointer"
            >
              Next Case Study: {nextProject.title} <ExternalLink size={14} />
            </Link>
          );
        })()}
      </footer>
    </main>
  );
}
