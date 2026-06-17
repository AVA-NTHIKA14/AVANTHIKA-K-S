"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const NAV_LINKS = ["About Me", "Process", "Work", "Contact"];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNav = (section: string) => {
    const id = section.toLowerCase().replace(" ", "-");
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 h-[80px] sm:h-[98px] bg-black/90 backdrop-blur-sm border-b-2 border-[#e0c6c6] flex items-center px-5 sm:px-9 justify-between shadow-[0_4px_2px_rgba(0,0,0,0.25)]"
    >
      {/* Logo */}
      <div className="flex items-center">
        <span className="font-black text-xl sm:text-2xl text-white">AKS</span>
        <span className="font-black text-xl sm:text-2xl text-[#facc15]">.</span>
      </div>

      {/* Desktop Nav */}
      <nav className="hidden md:flex gap-9 items-center">
        {NAV_LINKS.map((link) => (
          <button
            key={link}
            onClick={() => handleNav(link)}
            className="font-black text-[#f5dcdc] text-2xl hover:text-[#facc15] transition-colors duration-200 cursor-pointer bg-transparent border-none"
          >
            {link}
          </button>
        ))}
      </nav>

      <div className="flex items-center gap-3">
        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
          className="md:hidden flex flex-col gap-1.5 justify-center items-center w-9 h-9 bg-transparent border-none cursor-pointer"
        >
          <motion.span
            animate={{ rotate: menuOpen ? 45 : 0, y: menuOpen ? 6 : 0 }}
            className="w-6 h-[2px] bg-white block"
          />
          <motion.span
            animate={{ opacity: menuOpen ? 0 : 1 }}
            className="w-6 h-[2px] bg-white block"
          />
          <motion.span
            animate={{ rotate: menuOpen ? -45 : 0, y: menuOpen ? -6 : 0 }}
            className="w-6 h-[2px] bg-white block"
          />
        </button>

        {/* Theme toggle cloud icon */}
        <div className="relative w-[40px] h-[40px] sm:w-[50px] sm:h-[50px] rounded-full border border-white/30 flex items-center justify-center cursor-pointer hover:border-[#facc15] transition-colors">
          <svg width="26" height="18" viewBox="0 0 32 22" fill="none" className="sm:w-8 sm:h-[22px]">
            <path
              d="M26 18H6C3.2 18 1 15.8 1 13s2.2-5 5-5c.4 0 .8 0 1.1.1C7.9 5.3 11 3 14.7 3c4.1 0 7.5 3 8 7H23c2.8 0 5 2.2 5 5s-2.2 5-5 5z"
              fill="#facc15"
              stroke="#facc15"
              strokeWidth="1.5"
            />
          </svg>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="absolute top-full left-0 right-0 bg-black border-b-2 border-[#e0c6c6] md:hidden overflow-hidden"
          >
            <div className="flex flex-col py-4">
              {NAV_LINKS.map((link) => (
                <button
                  key={link}
                  onClick={() => handleNav(link)}
                  className="font-black text-[#f5dcdc] text-xl py-3 px-6 text-left hover:text-[#facc15] transition-colors bg-transparent border-none cursor-pointer"
                >
                  {link}
                </button>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
