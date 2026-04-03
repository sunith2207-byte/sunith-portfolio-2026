"use client";

import { motion, AnimatePresence } from "framer-motion";
import { FiArrowUpRight, FiGithub, FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { useState, useEffect, useRef } from "react";

const projects = [
  { title: "AI SEO Engine", category: "Automation", description: "An automated system that analyzes SERPs, generates optimized content outlines, and drafts articles using LLMs.", tags: ["Next.js", "OpenAI", "Python"], accent: "#a855f7" },
  { title: "AI Website Builder", category: "Product", description: "A platform that generates full marketing landing pages dynamically based on simple text prompts.", tags: ["React", "Tailwind", "Claude API"], accent: "#22d3ee" },
  { title: "Marketing Automation Systems", category: "Growth", description: "Custom Zapier and Make.com workflows connecting CRM, Email Marketing, and analytics platforms.", tags: ["Make", "Zapier", "Webhooks"], accent: "#f97316" },
  { title: "SEO Content Scaling", category: "Strategy", description: "Programmatic SEO framework that scaled an enterprise client's organic traffic by 300% in 6 months.", tags: ["Strategy", "Airtable", "CMS"], accent: "#10b981" },
  { title: "CLI AI Agents for SEO", category: "AI Agents", description: "Built and deployed AI agents using Claude Code and Open Code CLI tools — automating SEO audits, linking analysis, and competitor intelligence from the terminal.", tags: ["Claude Code", "Open Code", "CLI", "Python"], accent: "#f59e0b" },
  { title: "AI Competitor Analysis System", category: "AI Automation", description: "Auto-collects Google search results, analyses ranking pages using AI, and generates structured insights to find ranking opportunities.", tags: ["Python", "Claude", "ChatGPT"], accent: "#f43f5e" },
];

const INTERVAL = 3500;

export const Projects = () => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const next = () => { setDirection(1); setCurrent((p) => (p + 1) % projects.length); };
  const prev = () => { setDirection(-1); setCurrent((p) => (p - 1 + projects.length) % projects.length); };
  const goTo = (i: number) => { setDirection(i > current ? 1 : -1); setCurrent(i); };

  useEffect(() => {
    if (paused) { if (timerRef.current) clearInterval(timerRef.current); return; }
    timerRef.current = setInterval(() => { setDirection(1); setCurrent((p) => (p + 1) % projects.length); }, INTERVAL);
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [paused]);

  const project = projects[current];

  const variants = {
    enter: (dir: number) => ({ x: dir > 0 ? "100%" : "-100%", opacity: 0, scale: 0.96 }),
    center: { x: 0, opacity: 1, scale: 1 },
    exit: (dir: number) => ({ x: dir > 0 ? "-100%" : "100%", opacity: 0, scale: 0.96 }),
  };

  return (
    <section
      id="projects"
      className="relative py-16 md:py-24 bg-[#06080f] overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="flex items-end justify-between mb-8 md:mb-12">
          <div>
            <p className="text-xs text-gray-500 tracking-[0.4em] uppercase mb-2 md:mb-3">Portfolio</p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-none tracking-tight">
              FEATURED
              <br />
              <span style={{ color: project.accent }} className="transition-colors duration-500">PROJECTS</span>
            </h2>
          </div>

          <div className="flex items-center gap-2 md:gap-3">
            <div className="hidden md:flex items-center gap-2 mr-2">
              <motion.div
                className="w-1.5 h-1.5 rounded-full"
                style={{ background: paused ? "#6b7280" : project.accent }}
                animate={paused ? {} : { scale: [1, 1.4, 1], opacity: [1, 0.5, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              />
              <span className="text-xs text-gray-500 tracking-widest uppercase">{paused ? "Paused" : "Auto"}</span>
            </div>
            <motion.button onClick={() => { prev(); setPaused(true); }} className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:border-white/50 transition-all duration-300" whileTap={{ scale: 0.94 }}>
              <FiChevronLeft size={18} />
            </motion.button>
            <motion.button onClick={() => { next(); setPaused(true); }} className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:border-white/50 transition-all duration-300" whileTap={{ scale: 0.94 }}>
              <FiChevronRight size={18} />
            </motion.button>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-2xl md:rounded-3xl" style={{ height: 340 }}>
          <AnimatePresence custom={direction} mode="wait">
            <motion.div
              key={current}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="absolute inset-0 rounded-2xl md:rounded-3xl border p-6 md:p-10 flex flex-col justify-between"
              style={{ background: "rgba(255,255,255,0.04)", borderColor: `${project.accent}25` }}
            >
              <div className="absolute inset-0 rounded-2xl md:rounded-3xl pointer-events-none" style={{ background: `radial-gradient(ellipse 60% 60% at 95% 50%, ${project.accent}18 0%, transparent 70%)` }} />

              <div className="relative z-10 flex items-start justify-between">
                <span className="text-xs font-bold tracking-[0.25em] uppercase px-3 py-1.5 rounded-full border" style={{ color: project.accent, borderColor: `${project.accent}40`, background: `${project.accent}10` }}>
                  {project.category}
                </span>
                <div className="flex gap-2">
                  <motion.button className="w-8 h-8 md:w-10 md:h-10 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-white transition-all" whileHover={{ scale: 1.1 }}>
                    <FiGithub size={14} />
                  </motion.button>
                  <motion.button className="w-8 h-8 md:w-10 md:h-10 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-white transition-all" whileHover={{ scale: 1.1 }}>
                    <FiArrowUpRight size={14} />
                  </motion.button>
                </div>
              </div>

              <div className="relative z-10">
                <h3 className="text-2xl md:text-4xl lg:text-5xl font-black text-white leading-tight mb-3">{project.title}</h3>
                <p className="text-gray-300 text-sm md:text-base leading-relaxed max-w-2xl mb-5 md:mb-8">{project.description}</p>
                <div className="flex gap-2 flex-wrap">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-xs px-3 py-1.5 rounded-full border border-white/10 text-gray-400 bg-white/5">{tag}</span>
                  ))}
                </div>
              </div>

              <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/5 rounded-b-3xl overflow-hidden">
                <motion.div key={current} className="h-full rounded-full" style={{ background: project.accent }} initial={{ width: "0%" }} animate={{ width: "100%" }} transition={{ duration: INTERVAL / 1000, ease: "linear" }} />
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex items-center justify-between mt-5 md:mt-8">
          <div className="flex gap-2 items-center">
            {projects.map((_, i) => (
              <button key={i} onClick={() => { goTo(i); setPaused(true); }} className="h-1 rounded-full transition-all duration-300" style={{ width: i === current ? 28 : 8, background: i === current ? project.accent : "rgba(255,255,255,0.15)" }} />
            ))}
          </div>
          <p className="text-gray-600 text-xs tracking-widest font-mono">{String(current + 1).padStart(2, "0")} / {String(projects.length).padStart(2, "0")}</p>
        </div>

      </div>
    </section>
  );
};
