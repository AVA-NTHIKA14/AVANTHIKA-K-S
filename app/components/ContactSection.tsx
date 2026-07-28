"use client";
import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Mail, Github, Linkedin, MapPin, Send, Copy, Check } from "lucide-react";
import { PORTFOLIO_DATA } from "../data/portfolioData";

export default function ContactSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [copied, setCopied] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PORTFOLIO_DATA.contact.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Thank you ${formData.name}! Message logged.`);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section
      id="contact"
      ref={ref}
      className="bg-white dark:bg-black flex flex-col items-center justify-center relative overflow-hidden py-16 border-t border-zinc-100 dark:border-zinc-900 transition-colors"
    >
      <div className="relative z-10 max-w-[1440px] mx-auto px-6 sm:px-12 md:px-24 w-full">
        
        {/* Section Tag */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          className="flex items-center gap-2 mb-8 text-left"
        >
          <span className="w-6 h-px bg-zinc-400 dark:bg-zinc-600" />
          <span className="text-zinc-555 dark:text-zinc-400 text-xs tracking-[3px] uppercase font-semibold">GET IN TOUCH</span>
        </motion.div>

        {/* Big Title */}
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="font-bold text-black dark:text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl tracking-tight mb-16 text-left leading-tight"
        >
          Let&apos;s build something Humanity Needs.
        </motion.h2>

        {/* Two-Column Grid */}
        <div className="grid lg:grid-cols-12 gap-12 items-start text-left">
          
          {/* LEFT: Contact info cards */}
          <div className="lg:col-span-5 space-y-4">
            {/* Email Card with Clipboard Copy */}
            <div className="border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 rounded-2xl p-5 flex items-center justify-between shadow-sm relative group">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-150 dark:border-zinc-800 flex items-center justify-center text-zinc-500 dark:text-zinc-400">
                  <Mail size={16} />
                </div>
                <div>
                  <span className="text-xs text-zinc-500 dark:text-zinc-450 font-bold uppercase tracking-wider block">Email</span>
                  <span className="text-black dark:text-white text-sm font-semibold mt-1 block select-all">{PORTFOLIO_DATA.contact.email}</span>
                </div>
              </div>
              <button
                onClick={handleCopyEmail}
                className="text-zinc-500 hover:text-black dark:text-zinc-400 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-900 p-2 rounded-full cursor-pointer bg-transparent border-none transition-colors"
                title="Copy to Clipboard"
              >
                {copied ? <Check size={14} className="text-green-600" /> : <Copy size={14} />}
              </button>
            </div>

            {/* GitHub Card */}
            <a
              href={PORTFOLIO_DATA.contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 hover:border-black dark:hover:border-white transition-all rounded-2xl p-5 flex items-center gap-4 shadow-sm group cursor-pointer block"
            >
              <div className="w-10 h-10 rounded-xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-150 dark:border-zinc-800 flex items-center justify-center text-zinc-500 dark:text-zinc-400 group-hover:bg-zinc-100 dark:group-hover:bg-zinc-900">
                <Github size={16} />
              </div>
              <div>
                <span className="text-xs text-zinc-500 dark:text-zinc-450 font-bold uppercase tracking-wider block">GitHub</span>
                <span className="text-black dark:text-white text-sm font-semibold mt-1 block group-hover:underline">github.com/AVA-NTHIKA14</span>
              </div>
            </a>

            {/* LinkedIn Card */}
            <a
              href={PORTFOLIO_DATA.contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 hover:border-black dark:hover:border-white transition-all rounded-2xl p-5 flex items-center gap-4 shadow-sm group cursor-pointer block"
            >
              <div className="w-10 h-10 rounded-xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-150 dark:border-zinc-800 flex items-center justify-center text-zinc-500 dark:text-zinc-400 group-hover:bg-zinc-100 dark:group-hover:bg-zinc-900">
                <Linkedin size={16} />
              </div>
              <div>
                <span className="text-xs text-zinc-500 dark:text-zinc-455 font-bold uppercase tracking-wider block">LinkedIn</span>
                <span className="text-black dark:text-white text-sm font-semibold mt-1 block group-hover:underline">linkedin.com/in/AVANTHIKA</span>
              </div>
            </a>

            {/* Location Card */}
            <div className="border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 rounded-2xl p-5 flex items-center gap-4 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-150 dark:border-zinc-800 flex items-center justify-center text-zinc-500 dark:text-zinc-400">
                <MapPin size={16} />
              </div>
              <div>
                <span className="text-xs text-zinc-500 dark:text-zinc-450 font-bold uppercase tracking-wider block">Based in</span>
                <span className="text-black dark:text-white text-sm font-semibold mt-1 block">{PORTFOLIO_DATA.contact.location}</span>
              </div>
            </div>
          </div>

          {/* RIGHT: Interactive Contact Form */}
          <div className="lg:col-span-7 bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-[32px] p-8 shadow-sm">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Row 1: Name and Email */}
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="form-name" className="text-xs text-zinc-550 dark:text-zinc-400 font-bold uppercase tracking-wider">Name</label>
                  <input
                    type="text"
                    id="form-name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-zinc-50/50 dark:bg-zinc-900/40 border border-zinc-300 dark:border-zinc-800 rounded-xl px-4 py-3 text-sm text-black dark:text-white focus:outline-none focus:border-black dark:focus:border-white focus:ring-1 focus:ring-black dark:focus:ring-white transition-all"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="form-email" className="text-xs text-zinc-555 dark:text-zinc-400 font-bold uppercase tracking-wider">Email</label>
                  <input
                    type="email"
                    id="form-email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-zinc-50/50 dark:bg-zinc-900/40 border border-zinc-300 dark:border-zinc-800 rounded-xl px-4 py-3 text-sm text-black dark:text-white focus:outline-none focus:border-black dark:focus:border-white focus:ring-1 focus:ring-black dark:focus:ring-white transition-all"
                  />
                </div>
              </div>

              {/* Row 2: Message */}
              <div className="flex flex-col gap-2">
                <label htmlFor="form-message" className="text-xs text-zinc-555 dark:text-zinc-400 font-bold uppercase tracking-wider">Message</label>
                <textarea
                  id="form-message"
                  required
                  rows={5}
                  placeholder="Tell me about what you're building..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-zinc-50/50 dark:bg-zinc-900/40 border border-zinc-300 dark:border-zinc-800 rounded-xl p-4 text-sm text-black dark:text-white focus:outline-none focus:border-black dark:focus:border-white focus:ring-1 focus:ring-black dark:focus:ring-white transition-all resize-none"
                />
              </div>

              {/* Submit button */}
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="bg-black dark:bg-white hover:bg-zinc-900 dark:hover:bg-zinc-100 text-white dark:text-black font-bold text-xs tracking-wider uppercase px-6 py-3.5 rounded-full flex items-center gap-2 transition-colors cursor-pointer shadow-sm border-none"
                >
                  <Send size={12} /> Send message
                </button>
              </div>
            </form>
          </div>

        </div>

        {/* Scroll back to top */}
        <div className="mt-20 text-center">
          <motion.button
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 0.6 } : {}}
            whileHover={{ opacity: 1, scale: 1.05 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="text-xs uppercase tracking-[3px] text-zinc-500 dark:text-zinc-400 bg-transparent border-none cursor-pointer hover:text-black dark:hover:text-white transition-colors font-semibold"
          >
            Back To Top ↑
          </motion.button>
        </div>

      </div>
    </section>
  );
}
