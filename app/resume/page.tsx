"use client";
import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Printer, Download } from "lucide-react";
import { PORTFOLIO_DATA } from "../data/portfolioData";

export default function ResumePage() {
  const [selectedResume, setSelectedResume] = useState(PORTFOLIO_DATA.resumes.default);

  return (
    <main className="bg-zinc-50 min-h-screen py-12 px-6 print:bg-white print:py-0 print:px-0 text-left">
      {/* Navigation bar (hidden during print) */}
      <div className="max-w-[800px] mx-auto mb-8 print:hidden">
        <div className="flex justify-between items-center mb-6">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-zinc-600 hover:text-black transition-colors cursor-pointer"
          >
            <ArrowLeft size={16} /> Back to Portfolio
          </Link>

          <button
            onClick={() => window.print()}
            className="bg-black hover:bg-zinc-900 text-white font-extrabold text-xs tracking-wider uppercase px-5 py-3 rounded-full flex items-center gap-1.5 transition-colors cursor-pointer shadow-sm"
          >
            <Printer size={14} /> Print / Save as PDF
          </button>
        </div>

        {/* Resume Selector */}
        <div className="bg-white border border-zinc-200 rounded-lg p-4 flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <label className="text-xs font-bold uppercase tracking-wider text-zinc-700 whitespace-nowrap">
            Resume Version:
          </label>
          <div className="flex flex-wrap gap-2 flex-1">
            {PORTFOLIO_DATA.resumes.versions.map((version) => (
              <button
                key={version.url}
                onClick={() => setSelectedResume(version.url)}
                className={`text-xs font-bold uppercase tracking-wider px-4 py-2 rounded-full transition-all cursor-pointer ${
                  selectedResume === version.url
                    ? "bg-black text-white"
                    : "bg-zinc-100 text-zinc-700 hover:bg-zinc-200"
                }`}
              >
                {version.label}
              </button>
            ))}
          </div>
          <a
            href={selectedResume}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-auto bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs tracking-wider uppercase px-4 py-2 rounded-full flex items-center gap-1.5 transition-colors cursor-pointer whitespace-nowrap"
          >
            <Download size={14} /> Download
          </a>
        </div>
      </div>

      {/* ATS Sheet container */}
      <div className="max-w-[800px] mx-auto bg-white border border-zinc-200 print:border-none p-12 sm:p-16 print:p-0 shadow-sm print:shadow-none text-black font-sans leading-relaxed text-sm">
        
        {/* HEADER SECTION (Name & Contacts) */}
        <div className="text-center border-b-2 border-zinc-900 pb-6 mb-6">
          <h1 className="text-3xl font-extrabold uppercase tracking-tight text-black mb-2">
            {PORTFOLIO_DATA.name}
          </h1>
          <p className="text-zinc-650 font-bold text-xs uppercase tracking-widest mb-4">
            Junior Product Designer | GHCI&apos;25 AIP Scholar | ECE Undergrad
          </p>
          <div className="flex flex-wrap justify-center gap-x-4 gap-y-1.5 text-xs text-zinc-600 font-mono">
            <span>{PORTFOLIO_DATA.contact.location}</span>
            <span>•</span>
            <a href={`mailto:${PORTFOLIO_DATA.contact.email}`} className="hover:underline">{PORTFOLIO_DATA.contact.email}</a>
            <span>•</span>
            <a href={PORTFOLIO_DATA.contact.linkedin} target="_blank" rel="noopener noreferrer" className="hover:underline">linkedin.com/in/avanthika-ks</a>
            <span>•</span>
            <a href={PORTFOLIO_DATA.contact.github} target="_blank" rel="noopener noreferrer" className="hover:underline">github.com/AVA-NTHIKA14</a>
          </div>
        </div>

        {/* SUMMARY */}
        <div className="mb-6">
          <h2 className="text-sm font-black uppercase tracking-wider border-b border-zinc-300 pb-1 mb-2 text-black">
            Professional Summary
          </h2>
          <p className="text-zinc-700 text-xs sm:text-sm leading-relaxed">
            Electronics and Communication Engineering student at GEC Palakkad bridging the gap between rigorous hardware/software engineering logic and user-centered design. Experienced in building spatial compliance dashboards, AI accessibility extensions, and community programs. Certified in UI/UX Design and Frontend Development.
          </p>
        </div>

        {/* SKILLS SECTION */}
        <div className="mb-6">
          <h2 className="text-sm font-black uppercase tracking-wider border-b border-zinc-300 pb-1 mb-2 text-black">
            Core Skills & Technologies
          </h2>
          <div className="space-y-1.5 text-xs sm:text-sm text-zinc-700">
            <div>
              <strong className="text-black uppercase text-[11px] tracking-wider block sm:inline-block sm:w-[180px]">Programming:</strong>
              <span>C, C++, Python, JavaScript, TypeScript, Java, Dart, C#</span>
            </div>
            <div>
              <strong className="text-black uppercase text-[11px] tracking-wider block sm:inline-block sm:w-[180px]">Web Development:</strong>
              <span>HTML5, CSS3, React, Next.js, Tailwind CSS, Bootstrap, Vite, Django</span>
            </div>
            <div>
              <strong className="text-black uppercase text-[11px] tracking-wider block sm:inline-block sm:w-[180px]">Databases & Cloud:</strong>
              <span>Firebase (Firestore, Auth, Functions), Supabase, SQL</span>
            </div>
            <div>
              <strong className="text-black uppercase text-[11px] tracking-wider block sm:inline-block sm:w-[180px]">Embedded Systems (ECE):</strong>
              <span>Arduino IDE, Microcontrollers (ATmega), IoT Prototyping, Sensors Interfacing</span>
            </div>
            <div>
              <strong className="text-black uppercase text-[11px] tracking-wider block sm:inline-block sm:w-[180px]">Design & Collaboration:</strong>
              <span>Figma, Wireframing, UI Prototyping, Git, GitHub, VS Code, Linux</span>
            </div>
          </div>
        </div>

        {/* EXPERIENCE SECTION */}
        <div className="mb-6">
          <h2 className="text-sm font-black uppercase tracking-wider border-b border-zinc-300 pb-1 mb-3 text-black">
            Professional Experience
          </h2>
          <div className="space-y-4">
            {PORTFOLIO_DATA.experience.map((exp) => (
              <div key={exp.id}>
                <div className="flex justify-between items-baseline font-bold text-xs sm:text-sm mb-1">
                  <span className="text-black">{exp.role} — <span className="text-zinc-650 font-semibold">{exp.company}</span></span>
                  <span className="text-zinc-500 font-mono text-xs">{exp.period}</span>
                </div>
                <ul className="list-disc pl-4 space-y-1 text-zinc-700 text-xs sm:text-sm">
                  {exp.description.map((bullet, idx) => (
                    <li key={idx}>{bullet}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* PROJECTS SECTION */}
        <div className="mb-6">
          <h2 className="text-sm font-black uppercase tracking-wider border-b border-zinc-300 pb-1 mb-3 text-black">
            Key Projects
          </h2>
          <div className="space-y-4">
            {/* LSG Track */}
            <div>
              <div className="flex justify-between items-baseline font-bold text-xs sm:text-sm mb-1">
                <span className="text-black">LSG Track — <span className="text-zinc-600 font-medium">e-Governance GIS Spatial Compliance System</span></span>
                <span className="text-zinc-500 font-mono text-xs">Feb 2026 - Present</span>
              </div>
              <p className="text-zinc-700 text-xs sm:text-sm leading-relaxed">
                Developed a spatial monitoring portal for Kerala Panchayats. Geotagged establishment surveys on an interactive Leaflet GIS map and automated license renewal notification alerts via Meta WhatsApp Business API integrations. (React, TypeScript, Leaflet, Firebase).
              </p>
            </div>

            {/* Inclusive Checker */}
            <div>
              <div className="flex justify-between items-baseline font-bold text-xs sm:text-sm mb-1">
                <span className="text-black">Inclusive Checker (ALTaware) — <span className="text-zinc-600 font-medium">AI Accessibility Text Scanner</span></span>
                <span className="text-zinc-500 font-mono text-xs">Nov 2025 - Dec 2025</span>
              </div>
              <p className="text-zinc-700 text-xs sm:text-sm leading-relaxed">
                Created a Chrome accessibility extension. Leveraged Google Gemini API to scan written text fields for unintentional cultural bias, ableist terms, and gendered phrasing, displaying inline suggestion overrides. (React, Gemini API, Chrome Extension APIs).
              </p>
            </div>

            {/* Adaptive Wiper System */}
            <div>
              <div className="flex justify-between items-baseline font-bold text-xs sm:text-sm mb-1">
                <span className="text-black">Adaptive Wiper System — <span className="text-zinc-600 font-medium">Embedded Microcontroller Smart Wiper</span></span>
                <span className="text-zinc-500 font-mono text-xs">Mar 2025 - May 2025</span>
              </div>
              <p className="text-zinc-700 text-xs sm:text-sm leading-relaxed">
                Constructed an analog circuit capturing rainfall density sensor data and processed inputs on an ATmega microcontroller. Developed firmware modulating servo sweep speeds cleanly using Pulse Width Modulation (PWM). (C/C++, Arduino).
              </p>
            </div>
          </div>
        </div>

        {/* EDUCATION SECTION */}
        <div className="mb-6">
          <h2 className="text-sm font-black uppercase tracking-wider border-b border-zinc-300 pb-1 mb-2 text-black">
            Education
          </h2>
          <div className="flex justify-between items-baseline font-bold text-xs sm:text-sm">
            <span className="text-black">{PORTFOLIO_DATA.education[0].degree}</span>
            <span className="text-zinc-500 font-mono text-xs">{PORTFOLIO_DATA.education[0].period}</span>
          </div>
          <div className="text-zinc-600 text-xs sm:text-sm font-semibold mt-0.5">
            {PORTFOLIO_DATA.education[0].institution} — Grade: {PORTFOLIO_DATA.education[0].status}
          </div>
        </div>

        {/* CERTIFICATIONS SECTION */}
        <div>
          <h2 className="text-sm font-black uppercase tracking-wider border-b border-zinc-300 pb-1 mb-2 text-black">
            Licenses & Certifications
          </h2>
          <ul className="list-disc pl-4 space-y-1 text-zinc-750 text-xs sm:text-sm">
            <li><strong>Advancing Inclusion Program Scholarship - STEM Students</strong> — GHCI, 2025</li>
            <li><strong>Vibe Coding for Beginners: From Zero to App</strong> — Google Cloud, 2026</li>
            <li><strong>Opensource Contribution on Toddy Finder</strong> — Kerala Coders Cafe, 2026</li>
            <li><strong>Google UX Design Professional Certificate</strong> — Coursera, 2025</li>
            <li><strong>Meta Front-End Developer Professional Certificate</strong> — Coursera, 2025</li>
          </ul>
        </div>

      </div>
    </main>
  );
}
