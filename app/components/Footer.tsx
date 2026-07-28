"use client";
import { PORTFOLIO_DATA } from "../data/portfolioData";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-zinc-100 dark:border-zinc-900 bg-white dark:bg-black py-12 transition-colors duration-300">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-12 md:px-24 flex flex-col sm:flex-row items-center justify-between gap-6">
        
        {/* Left Side: Copyright */}
        <p className="text-xs text-zinc-500 dark:text-zinc-400 font-medium">
          © {currentYear} Avanthika K S. All rights reserved.
        </p>

        {/* Right Side: Quick Info */}
        <p className="text-xs text-zinc-400 dark:text-zinc-500 font-mono">
          Kozhikode, Kerala, India · {PORTFOLIO_DATA.contact.email}
        </p>

      </div>
    </footer>
  );
}
