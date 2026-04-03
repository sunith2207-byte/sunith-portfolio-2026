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
  { title: "AI Competitor Analysis", category: "AI Automation", description: "Auto-collects Google search results, analyses ranking pages using AI, and generates structured insights to find ranking opportunities.", tags: ["Python", "Claude", "ChatGPT"], accent: "#f43f5e" },
];

const TOTAL = projects.length;
const AUTO_SPEED = 0.3;
const INTERVAL = 3500;

const Desktop3DCarousel = () => {
  const angleRef = useRef(0);
  const [angle, setAngle] = useState(0);
  const [paused, setPaused] = useState(false);
  const rafRef = useRef<number | null>(null);
  const pausedRef = useRef(false);

  useEffect(() => { pausedRef.current = paused; }, [paused]);

  useEffect(() => {
    let last = performance.now();
    const tick = (now: number) => {
      const delta = now - last;
      last = now;
      if (!pausedRef.current) {
        angleRef.current = (angleRef.current + AUTO_SPEED * (delta / 16)) % 360;
        setAngle(angleRef.current);
      }
      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => { if (rafRef.current) cancelAnimationFrame(rafRef.current); };
  }, []);

  const getCardStyle = (index: number) => {
    const sliceAngle = 360 / TOTAL;
    const cardAngle = (sliceAngle * index - angle) % 360;
    const rad = (cardAngle * Math.PI) / 180;
    const radiusX = 420;
    const radiusZ = 180;
    const x = Math.sin(rad) * radiusX;
    const z = Math.cos(rad) * radiusZ;
    const normalizedZ = (z + radiusZ) / (2 * radiusZ);
    const scale = 0.55 + normalizedZ * 0.55;
    const opacity = 0.2 + normalizedZ * 0.8;
    const zIndex = Math.round(normalizedZ * 100);
    const isActive = z > radiusZ * 0.7;
    return { x, z, scale, opacity, zIndex, isActive };
  };

  const activeIndex = projects.reduce((best, _, i) => {
    const { z: zA } = getCardStyle(best);
    const { z: zB } = getCardStyle(i);
    return zB > zA ? i : best;
  }, 0);

  return (
    <div
      className="relative"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{ background: `radial-gradient(ellipse 60% 60% at 50% 50%, ${projects[activeIndex].accent}12 0%, transparent 70%)` }}
        transition={{ duration: 0.5 }}
      />

      <div className="mb-12 flex items-end justify-between">
        <div>
          <p className="text-xs text-gray-500 tracking-[0.4em] uppercase mb-3">Portfolio</p>
          <h2 className="text-5xl lg:text-6xl font-black text-white leading-none tracking-tight">
            FEATURED
            <br />
            <span style={{ color: projects[activeIndex].accent }} className="transition-colors duration-500">PROJECTS</span>
          </h2>
        </div>
        <div className="flex items-center gap-2">
          <motion.div className="w-1.5 h-1.5 rounded-full" style={{ background: paused ? "#6b7280" : projects[activeIndex].accent }} animate={paused ? {} : { scale: [1, 1.4, 1], opacity: [1, 0.5, 1] }} transition={{ duration: 1, repeat: Infinity }} />
          <span className="text-xs text-gray-500 tracking-widest uppercase">{paused ? "Paused" : "Auto"}</span>
        </div>
      </div>

      <div className="relative mx-auto" style={{ height: 500, perspective: 1200 }}>
        <div className="absolute inset-0 flex items-center justify-center">
          {projects.map((project, i) => {
            const { x, scale, opacity, zIndex, isActive } = getCardStyle(i);
            return (
              <div
                key={i}
                className="absolute"
                style={{ transform: `translateX(${x}px) scale(${scale})`, opacity, zIndex, transition: "none", width: 380, left: "50%", marginLeft: -190 }}
              >
                <div
                  className="rounded-2xl border p-7 flex flex-col justify-between cursor-pointer"
                  style={{
                    height: 320,
                    background: isActive ? "linear-gradient(135deg, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.6) 100%)" : "rgba(0,0,0,0.5)",
                    borderColor: isActive ? `${project.accent}50` : "rgba(255,255,255,0.06)",
                    boxShadow: isActive ? `0 0 60px ${project.accent}20, 0 20px 60px rgba(0,0,0,0.5)` : "none",
                    backdropFilter: "blur(10px)",
                  }}
                >
                  {isActive && (
                    <div className="absolute inset-0 rounded-2xl pointer-events-none" style={{ background: `radial-gradient(ellipse 80% 50% at 80% 30%, ${project.accent}15 0%, transparent 70%)` }} />
                  )}
                  <div className="relative z-10 flex items-start justify-between">
                    <span className="text-xs font-bold tracking-[0.3em] uppercase px-3 py-1.5 rounded-full border" style={{ color: project.accent, borderColor: `${project.accent}40`, background: `${project.accent}12` }}>
                      {project.category}
                    </span>
                    {isActive && (
                      <div className="flex gap-2">
                        <button className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-white transition-all"><FiGithub size={14} /></button>
                        <button className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-white transition-all"><FiArrowUpRight size={14} /></button>
                      </div>
                    )}
                  </div>
                  <div className="relative z-10">
                    <h3 className="font-black text-white leading-tight mb-3" style={{ fontSize: isActive ? "1.6rem" : "1.3rem" }}>{project.title}</h3>
                    {isActive && <p className="text-gray-300 text-sm leading-relaxed mb-4">{project.description}</p>}
                    <div className="flex gap-2 flex-wrap">
                      {project.tags.slice(0, isActive ? undefined : 2).map((tag) => (
                        <span key={tag} className="text-xs px-3 py-1 rounded-full border border-white/10 text-gray-400 bg-white/5">{tag}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="flex items-center justify-center gap-3 mt-4">
        {projects.map((p, i) => (
          <div key={i} className="h-1 rounded-full transition-all duration-300" style={{ width: i === activeIndex ? 32 : 8, background: i === activeIndex ? projects[activeIndex].accent : "rgba(255,255,255,0.15)" }} />
        ))}
      </div>
    </div>
  );
};

const MobileCarousel = () => {
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
    enter: (dir: number) => ({ x: dir > 0 ? "100%" : "-100%", opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({ x: dir > 0 ? "-100%" : "100%", opacity: 0 }),
  };

  return (
    <div onTouchStart={() => setPaused(true)} onTouchEnd={() => setPaused(false)}>
      <div className="mb-8">
        <p className="text-xs text-gray-500 tracking-[0.4em] uppercase mb-2">Portfolio</p>
        <h2 className="text-4xl font-black text-white leading-none tracking-tight">
          FEATURED<br />
          <span style={{ color: project.accent }} className="transition-colors duration-500">PROJECTS</span>
        </h2>
      </div>

      <div className="flex justify-between items-center mb-4">
        <div className="flex gap-2">
          {projects.map((_, i) => (
            <button key={i} onClick={() => { goTo(i); setPaused(true); }} className="h-1 rounded-full transition-all duration-300" style={{ width: i === current ? 24 : 8, background: i === current ? project.accent : "rgba(255,255,255,0.15)" }} />
          ))}
        </div>
        <div className="flex gap-2">
          <button onClick={() => { prev(); setPaused(true); }} className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-white"><FiChevronLeft size={16} /></button>
          <button onClick={() => { next(); setPaused(true); }} className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-white"><FiChevronRight size={16} /></button>
        </div>
      </div>

      <div className="relative overflow-hidden rounded-2xl" style={{ height: 320 }}>
        <AnimatePresence custom={direction} mode="wait">
          <motion.div
            key={current}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-0 rounded-2xl border p-6 flex flex-col justify-between"
            style={{ background: "rgba(255,255,255,0.04)", borderColor: `${project.accent}25` }}
          >
            <div className="absolute inset-0 rounded-2xl pointer-events-none" style={{ background: `radial-gradient(ellipse 60% 60% at 95% 20%, ${project.accent}18 0%, transparent 70%)` }} />
            <div className="relative z-10">
              <span className="text-xs font-bold tracking-[0.25em] uppercase px-3 py-1.5 rounded-full border" style={{ color: project.accent, borderColor: `${project.accent}40`, background: `${project.accent}10` }}>{project.category}</span>
            </div>
            <div className="relative z-10">
              <h3 className="text-2xl font-black text-white leading-tight mb-3">{project.title}</h3>
              <p className="text-gray-300 text-sm leading-relaxed mb-4">{project.description}</p>
              <div className="flex gap-2 flex-wrap">
                {project.tags.map((tag) => (
                  <span key={tag} className="text-xs px-3 py-1 rounded-full border border-white/10 text-gray-400 bg-white/5">{tag}</span>
                ))}
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/5 rounded-b-2xl overflow-hidden">
              <motion.div key={current} className="h-full" style={{ background: project.accent }} initial={{ width: "0%" }} animate={{ width: "100%" }} transition={{ duration: INTERVAL / 1000, ease: "linear" }} />
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export const Projects = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return (
    <section id="projects" className="relative py-16 md:py-24 bg-[#06080f] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {isMobile ? <MobileCarousel /> : <Desktop3DCarousel />}
      </div>
    </section>
  );
};
