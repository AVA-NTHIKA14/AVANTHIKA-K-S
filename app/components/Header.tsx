"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname, useRouter } from "next/navigation";
import { Download, Moon, Sun, Menu, X } from "lucide-react";
import { PORTFOLIO_DATA } from "../data/portfolioData";

const NAV_LINKS = [
  { id: "home", name: "Home" },
  { id: "about-me", name: "About" },
  { id: "projects", name: "Projects" },
  { id: "experience", name: "Experience" },
  { id: "skills", name: "Skills" },
  { id: "education", name: "Education" },
  { id: "contact", name: "Contact" },
];

export default function Header() {
  const [activeSection, setActiveSection] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState("light");
  const pathname = usePathname();
  const router = useRouter();

  // Initialize theme from storage or system preference
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const initialTheme = savedTheme || (prefersDark ? "dark" : "light");
    
    setTheme(initialTheme);
    if (initialTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    
    if (newTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // IntersectionObserver for scroll spy (only on homepage)
  useEffect(() => {
    if (pathname !== "/") {
      setActiveSection("");
      return;
    }

    const elements = NAV_LINKS.map((link) => document.getElementById(link.id));

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observerOptions = {
      root: null,
      rootMargin: "-40% 0px -50% 0px",
      threshold: 0,
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    elements.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => {
      elements.forEach((el) => {
        if (el) observer.unobserve(el);
      });
    };
  }, [pathname]);

  const handleNav = (id: string) => {
    setMenuOpen(false);
    if (pathname !== "/") {
      router.push("/#" + id);
    } else {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 dark:bg-black/80 backdrop-blur-md border-b border-zinc-100 dark:border-zinc-900 shadow-sm"
          : "bg-white/40 dark:bg-black/40 backdrop-blur-sm border-b border-transparent"
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo (Circle with "aks" + "Avanthika K S") */}
        <div
          className="flex items-center gap-2.5 cursor-pointer group"
          onClick={() => {
            if (pathname === "/") {
              window.scrollTo({ top: 0, behavior: "smooth" });
            } else {
              router.push("/");
            }
          }}
        >
          <div className="w-8 h-8 rounded-full bg-black dark:bg-white flex items-center justify-center flex-shrink-0 transition-colors">
            <span className="text-[10px] text-white dark:text-black font-black tracking-tighter uppercase">aks</span>
          </div>
          <span className="font-extrabold text-sm sm:text-base text-black dark:text-white tracking-tight group-hover:opacity-85 transition-opacity">
            Avanthika K S
          </span>
        </div>

        {/* Center Navigation Links */}
        <nav className="hidden xl:flex gap-2 items-center">
          {NAV_LINKS.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <button
                key={link.id}
                onClick={() => handleNav(link.id)}
                className={`font-semibold text-xs tracking-wider uppercase transition-all duration-200 cursor-pointer bg-transparent border-none px-4 py-2 rounded-full relative ${
                  isActive
                    ? "bg-zinc-100 dark:bg-zinc-900 text-black dark:text-white font-extrabold"
                    : "text-zinc-500 dark:text-zinc-400 hover:text-black dark:hover:text-white hover:bg-zinc-50 dark:hover:bg-zinc-900/50"
                }`}
              >
                {link.name}
              </button>
            );
          })}
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-4">
          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="w-9 h-9 rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-900 flex items-center justify-center text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white transition-colors border-none bg-transparent cursor-pointer"
          >
            {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
          </button>

          {/* Black/White Resume Button */}
          <a
            href={PORTFOLIO_DATA.contact.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-black dark:bg-white hover:bg-zinc-900 dark:hover:bg-zinc-100 text-white dark:text-black font-bold text-xs tracking-wider uppercase px-5 py-2.5 rounded-full flex items-center gap-1.5 transition-colors cursor-pointer shadow-sm"
          >
            <Download size={14} /> Resume
          </a>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
            className="xl:hidden flex flex-col gap-1.5 justify-center items-center w-9 h-9 bg-transparent border-none cursor-pointer text-black dark:text-white"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 right-0 bg-white/95 dark:bg-black/95 border-b border-zinc-100 dark:border-zinc-900 xl:hidden overflow-hidden backdrop-blur-md"
          >
            <div className="flex flex-col py-4 px-6 gap-1.5">
              {NAV_LINKS.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <button
                    key={link.id}
                    onClick={() => handleNav(link.id)}
                    className={`font-semibold text-left text-xs uppercase tracking-wider py-3 px-4 rounded-full transition-all ${
                      isActive
                        ? "bg-zinc-100 dark:bg-zinc-900 text-black dark:text-white font-extrabold"
                        : "text-zinc-500 dark:text-zinc-400 hover:bg-zinc-50 dark:hover:bg-zinc-900/50 hover:text-black dark:hover:text-white"
                    } bg-transparent border-none cursor-pointer`}
                  >
                    {link.name}
                  </button>
                );
              })}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
