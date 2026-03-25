"use client";
import { useState, useEffect } from "react";
import { motion, useScroll } from "framer-motion";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
];

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();

  useEffect(() => {
    return scrollY.on("change", (latest) => {
      setIsScrolled(latest > 50);
    });
  }, [scrollY]);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4",
        isScrolled ? "bg-black/70 backdrop-blur-lg border-b border-white/10 shadow-lg py-3" : "bg-transparent py-6"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <a href="#" className="text-xl font-bold tracking-tighter text-gradient">
          Sunith.<span className="text-white">dev</span>
        </a>
        
        <nav className="hidden md:flex items-center gap-8 bg-white/5 px-6 py-2 rounded-full border border-white/10 backdrop-blur-sm">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-white/70 hover:text-white transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>
        
        <a
          href="#contact"
          className="hidden md:inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium rounded-full bg-white text-black hover:bg-neutral-200 transition-colors shadow-[0_0_15px_rgba(255,255,255,0.3)] hover:scale-105 active:scale-95"
        >
          Let's Talk
        </a>

        {/* Mobile Menu Button - simplified for elegance */}
        <button className="md:hidden text-white p-2">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="4" x2="20" y1="12" y2="12" />
            <line x1="4" x2="20" y1="6" y2="6" />
            <line x1="4" x2="20" y1="18" y2="18" />
          </svg>
        </button>
      </div>
    </motion.header>
  );
};
