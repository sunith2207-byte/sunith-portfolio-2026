"use client";

import { motion } from "framer-motion";
import { FiArrowUpRight, FiGithub } from "react-icons/fi";
import { useState, useEffect, useRef } from "react";

const projects = [
  {
    title: "AI SEO Engine",
    category: "Automation",
    description: "An automated system that analyzes SERPs, generates optimized content outlines, and drafts articles using LLMs.",
    tags: ["Next.js", "OpenAI", "Python"],
    accent: "#a855f7",
  },
  {
    title: "AI Website Builder",
    category: "Product",
    description: "A platform that generates full marketing landing pages dynamically based on simple text prompts.",
    tags: ["React", "Tailwind", "Claude API"],
    accent: "#22d3ee",
  },
  {
    title: "Marketing Automation",
    category: "Growth",
    description: "Custom Zapier and Make.com workflows connecting CRM, Email Marketing, and analytics platforms.",
    tags: ["Make", "Zapier", "Webhooks"],
    accent: "#f97316",
  },
  {
    title: "SEO Content Scaling",
    category: "Strategy",
    description: "Programmatic SEO framework that scaled an enterprise client's organic traffic by 300% in 6 months.",
    tags: ["Strategy", "Airtable", "CMS"],
    accent: "#10b981",
  },
  {
    title: "CLI AI Agents for SEO",
    category: "AI Agents",
    description: "Built AI agents using Claude Code and Open Code CLI — automating SEO audits, linking analysis, and competitor intelligence from the terminal.",
    tags: ["Claude Code", "Open Code", "CLI", "Python"],
    accent: "#f59e0b",
  },
  {
    title: "AI Competitor Analysis",
    category: "AI Automation",
    description: "Auto-collects Google search results, analyses ranking pages using AI, and generates structured insights to find ranking opportunities.",
    tags: ["Python", "Claude", "ChatGPT"],
    accent: "#f43f5e",
  },
];

const TOTAL = projects.length;
const AUTO_SPEED = 0.3;

export const Projects = () => {
  const angleRef = useRef(0);
  const [angle, setAngle] = useState(0);
  const [paused, setPaused] = useState(false);
  const rafRef = useRef<number | null>(null);
  const pausedRef = useRef(false);

  useEffect(() => {
    pausedRef.current = paused;
  }, [paused]);

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
    <section
      id="projects"
      className="relative py-24 bg-[#06080f] overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <motion.div
        className="absolute inset-0 pointer-events-none"
        animate={{
          background: [
            `radial-gradient(ellipse 60% 60% at 50% 50%, ${projects[activeIndex].accent}10 0%, transparent 70%)`,
            `radial-gradient(ellipse 70% 60% at 50% 50%, ${projects[activeIndex].accent}18 0%, transparent 70%)`,
            `radial-gradient(ellipse 60% 60% at 50% 50%, ${projects[activeIndex].accent}10 0%, transparent 70%)`,
          ],
        }}
        transition={{ duration: 2, repeat: Infinity }}
      />

      <div className="max-w-7xl mx-auto px-8">
        <div className="mb-16 text-center">
          <p className="text-xs text-gray-500 tracking-[0.4em] uppercase mb-3">Portfolio</p>
          <h2 className="text-5xl md:text-6xl font-black text-white leading-none tracking-tight">
            FEATURED{" "}
            <span
              style={{ color: projects[activeIndex].accent }}
              className="transition-colors duration-500"
            >
              PROJECTS
            </span>
          </h2>
          <p className="text-gray-500 text-sm mt-4 tracking-widest uppercase">
            Hover to pause · Drag to spin
          </p>
        </div>

        <div
          className="relative mx-auto"
          style={{ height: 500, perspective: 1200 }}
        >
          <div
            className="absolute inset-0 flex items-center justify-center"
            style={{ transformStyle: "preserve-3d" }}
          >
            {projects.map((project, i) => {
              const { x, scale, opacity, zIndex, isActive } = getCardStyle(i);

              return (
                <div
                  key={i}
                  className="absolute"
                  style={{
                    transform: `translateX(${x}px) scale(${scale})`,
                    opacity,
                    zIndex,
                    transition: "none",
                    width: 380,
                    left: "50%",
                    marginLeft: -190,
                  }}
                >
                  <div
                    className="rounded-2xl border p-7 flex flex-col justify-between cursor-pointer"
                    style={{
                      height: 320,
                      background: isActive
                        ? `linear-gradient(135deg, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.6) 100%)`
                        : "rgba(0,0,0,0.5)",
                      borderColor: isActive ? `${project.accent}50` : "rgba(255,255,255,0.06)",
                      boxShadow: isActive
                        ? `0 0 60px ${project.accent}20, 0 20px 60px rgba(0,0,0,0.5)`
                        : "none",
                      backdropFilter: "blur(10px)",
                    }}
                  >
                    {isActive && (
                      <div
                        className="absolute inset-0 rounded-2xl pointer-events-none"
                        style={{
                          background: `radial-gradient(ellipse 80% 50% at 80% 30%, ${project.accent}15 0%, transparent 70%)`,
                        }}
                      />
                    )}

                    <div className="relative z-10 flex items-start justify-between">
                      <span
                        className="text-xs font-bold tracking-[0.3em] uppercase px-3 py-1.5 rounded-full border"
                        style={{
                          color: project.accent,
                          borderColor: `${project.accent}40`,
                          background: `${project.accent}12`,
                        }}
                      >
                        {project.category}
                      </span>
                      {isActive && (
                        <div className="flex gap-2">
                          <button
                            className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-white transition-all"
                          >
                            <FiGithub size={14} />
                          </button>
                          <button
                            className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-white transition-all"
                          >
                            <FiArrowUpRight size={14} />
                          </button>
                        </div>
                      )}
                    </div>

                    <div className="relative z-10">
                      <h3
                        className="font-black text-white leading-tight mb-3"
                        style={{ fontSize: isActive ? "1.6rem" : "1.3rem" }}
                      >
                        {project.title}
                      </h3>
                      {isActive && (
                        <p className="text-gray-300 text-sm leading-relaxed mb-4">
                          {project.description}
                        </p>
                      )}
                      <div className="flex gap-2 flex-wrap">
                        {project.tags.slice(0, isActive ? undefined : 2).map((tag) => (
                          <span
                            key={tag}
                            className="text-xs px-3 py-1 rounded-full border border-white/10 text-gray-400 bg-white/5"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="flex items-center justify-center gap-3 mt-8">
          {projects.map((p, i) => (
            <div
              key={i}
              className="h-1 rounded-full transition-all duration-300"
              style={{
                width: i === activeIndex ? 32 : 8,
                background: i === activeIndex ? projects[activeIndex].accent : "rgba(255,255,255,0.15)",
              }}
            />
          ))}
        </div>

      </div>
    </section>
  );
};
