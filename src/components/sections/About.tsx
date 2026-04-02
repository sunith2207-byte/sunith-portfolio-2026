"use client";

import { motion, useInView, useAnimationFrame } from "framer-motion";
import { useRef, useState } from "react";

const cards = [
  { category: "AI SEO SYSTEMS", title: "AI COMPETITOR ANALYSIS", description: "Built an AI system that auto-collects Google results, analyses ranking pages, and generates structured insights to find opportunities", accent: "#22d3ee" },
  { category: "AUTOMATION", title: "PYTHON + AI AGENTS", description: "Internal linking analysis, content optimisation, competitor research, and SEO reporting — all automated using Python, Claude & ChatGPT", accent: "#a855f7" },
  { category: "RESULTS — CBSL GROUP", title: "10K → 46,920 USERS", description: "+89% YoY active users. +58% AI channel users. Featured in Google AI Overviews, ChatGPT & Copilot", accent: "#10b981" },
  { category: "RESULTS — D2C BRAND", title: "43K+ USERS DRIVEN", description: "Supported SEO initiatives that drove 43K+ users for a D2C brand through technical SEO and content strategy", accent: "#f59e0b" },
  { category: "RESULTS — RESCRIPT", title: "25,381 NEW USERS", description: "2,362 organic keywords ranking. Full organic growth engine built from scratch for a B2B brand", accent: "#6366f1" },
  { category: "AI DISCOVERY", title: "GENERATIVE SEARCH", description: "Structure content for AI discovery — Google AI Overviews, ChatGPT, Perplexity. CBSL LinkedIn newsletter ranks page 1", accent: "#f43f5e" },
  { category: "RESULTS — EARTH COLLECTIVE", title: "5,758 KEYWORDS", description: "5,758 organic keywords ranking with 524 backlinks for a sustainable D2C brand", accent: "#84cc16" },
  { category: "CONTENT SYSTEMS", title: "1,000+ KEYWORDS RANKED", description: "Built content strategies that helped multiple websites rank for 1,000+ organic keywords at scale", accent: "#fb923c" },
];

const doubled = [...cards, ...cards];

const CarouselTrack = () => {
  const trackRef = useRef<HTMLDivElement>(null);
  const xRef = useRef(0);
  const [paused, setPaused] = useState(false);
  const CARD_WIDTH = 320;
  const GAP = 24;
  const TOTAL = cards.length * (CARD_WIDTH + GAP);

  useAnimationFrame((_, delta) => {
    if (paused) return;
    xRef.current -= delta * 0.04;
    if (Math.abs(xRef.current) >= TOTAL) xRef.current = 0;
    if (trackRef.current) trackRef.current.style.transform = `translateX(${xRef.current}px)`;
  });

  return (
    <div className="overflow-hidden w-full" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
      <div ref={trackRef} className="flex gap-6 w-max" style={{ willChange: "transform" }}>
        {doubled.map((card, i) => (
          <div key={i} className="relative flex-shrink-0 w-80 h-64 rounded-2xl border p-6 flex flex-col justify-between cursor-pointer group" style={{ background: "rgba(0,0,0,0.55)", borderColor: `${card.accent}30` }}>
            <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ background: `radial-gradient(circle at 50% 0%, ${card.accent}18 0%, transparent 70%)` }} />
            <div>
              <p className="text-xs font-bold tracking-[0.3em] uppercase mb-3" style={{ color: card.accent }}>{card.category}</p>
              <h3 className="text-white text-lg font-black tracking-tight leading-tight">{card.title}</h3>
            </div>
            <div>
              <p className="text-gray-400 text-sm leading-relaxed">{card.description}</p>
              <div className="mt-4 w-8 h-8 rounded-full border flex items-center justify-center text-xs" style={{ borderColor: `${card.accent}50`, color: card.accent }}>→</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const experiences = [
  {
    title: "Senior SEO Strategist",
    company: "Upload Digital",
    period: "Feb 2023 – Present",
    duration: "3 yrs 3 mos",
    location: "Bengaluru, Karnataka",
    desc: "Scaling SEO programs across brands, building AI Agents to automate audits and reporting, working alongside performance and content teams to drive results that stick.",
    accent: "#22d3ee",
    angle: -90,
  },
  {
    title: "SEO Specialist",
    company: "Multiple Companies",
    period: "Oct 2019 – Feb 2023",
    duration: "3 yrs 5 mos",
    location: "Greater Bengaluru Area",
    desc: "Consulted across B2B, D2C, and sustainability brands — building organic growth engines, automating GA4 reporting, architecting internal linking systems that scaled.",
    accent: "#a855f7",
    angle: -18,
  },
  {
    title: "Social Media Executive",
    company: "Adverb Inc.",
    period: "Apr 2019 – Jul 2019",
    duration: "4 mos",
    location: "Bengaluru",
    desc: "Ran performance campaigns on Facebook and Instagram, shaped content strategy, and wrote social copy that drove engagement.",
    accent: "#f59e0b",
    angle: 54,
  },
  {
    title: "Digital Marketing Executive",
    company: "Infiniti Research Ltd.",
    period: "Feb 2017 – Mar 2018",
    duration: "1 yr 2 mos",
    location: "Bangalore Urban, Karnataka",
    desc: "Executed digital marketing campaigns and developed foundational skills in SEO and performance marketing.",
    accent: "#10b981",
    angle: 126,
  },
  {
    title: "Assistant Editor",
    company: "siliconindia",
    period: "Mar 2014 – May 2016",
    duration: "2 yrs 3 mos",
    location: "Greater Bengaluru Area",
    desc: "Editorial content creation and management for a leading tech publication.",
    accent: "#6366f1",
    angle: 198,
  },
];

const education = [
  { school: "GrowthSchool", degree: "AI-Powered Performance Marketing", year: "2025" },
  { school: "Web Marketing Academy", degree: "Digital Marketing Certification", year: "2018–2019" },
  { school: "New Horizon Degree College", degree: "B.A. Journalism", year: "2011–2014" },
];

const certifications = [
  "Google Ads Search Certification",
  "AI-Powered Performance Ads Certification",
  "Google Display Ads",
];

const skills = [
  "Generative Search", "AI Agents", "AI Automation Strategy",
  "Technical SEO", "Python", "Claude Code", "ChatGPT",
  "SEO Strategy & Execution", "GA4", "Ahrefs", "Content Systems",
  "Performance Marketing", "B2B / B2C / D2C", "Make.com",
];

const AnimatedCard = ({ children, delay = 0, direction = "up" }: { children: React.ReactNode; delay?: number; direction?: "up" | "left" | "fade" | "pop" }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });
  const variants = {
    up: { hidden: { opacity: 0, y: 32 }, show: { opacity: 1, y: 0 } },
    left: { hidden: { opacity: 0, x: -32 }, show: { opacity: 1, x: 0 } },
    fade: { hidden: { opacity: 0 }, show: { opacity: 1 } },
    pop: { hidden: { opacity: 0, scale: 0.85 }, show: { opacity: 1, scale: 1 } },
  };
  return (
    <motion.div ref={ref} variants={variants[direction]} initial="hidden" animate={inView ? "show" : "hidden"} transition={{ duration: 0.55, delay, ease: [0.16, 1, 0.3, 1] }}>
      {children}
    </motion.div>
  );
};

const AnimatedSpan = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  return (
    <motion.span ref={ref} initial={{ opacity: 0, scale: 0.85 }} animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.85 }} transition={{ duration: 0.35, delay, ease: [0.16, 1, 0.3, 1] }} className="inline-block text-xs px-3 py-1.5 rounded-full border border-white/10 text-gray-300 bg-white/5 hover:border-cyan-500/40 hover:text-cyan-400 transition-all duration-300 cursor-default">
      {children}
    </motion.span>
  );
};

const CircularTimeline = () => {
  const [active, setActive] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });
  const RADIUS = 180;
  const exp = experiences[active];

  return (
    <div ref={ref} className="w-full">
      <motion.p
        className="text-xs text-gray-400 tracking-[0.3em] uppercase mb-12"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.5 }}
      >
        Experience
      </motion.p>

      <div className="grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT — CIRCLE */}
        <div className="flex items-center justify-center">
          <div className="relative" style={{ width: RADIUS * 2 + 100, height: RADIUS * 2 + 100 }}>

            <motion.div
              className="absolute rounded-full border border-white/8"
              style={{ width: RADIUS * 2, height: RADIUS * 2, top: 50, left: 50 }}
              initial={{ opacity: 0, scale: 0.7 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            />
            <motion.div
              className="absolute rounded-full border border-white/5"
              style={{ width: RADIUS * 2 - 50, height: RADIUS * 2 - 50, top: 75, left: 75 }}
              initial={{ opacity: 0, scale: 0.7 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            />

            {/* Center dot */}
            <motion.div
              className="absolute flex items-center justify-center rounded-full"
              style={{
                width: 60,
                height: 60,
                top: RADIUS + 50 - 30,
                left: RADIUS + 50 - 30,
                background: `${exp.accent}20`,
                border: `2px solid ${exp.accent}50`,
                boxShadow: `0 0 30px ${exp.accent}30`,
              }}
              animate={{ boxShadow: [`0 0 20px ${exp.accent}20`, `0 0 40px ${exp.accent}50`, `0 0 20px ${exp.accent}20`] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <div className="w-3 h-3 rounded-full" style={{ background: exp.accent }} />
            </motion.div>

            {/* Nodes */}
            {experiences.map((e, i) => {
              const rad = (e.angle * Math.PI) / 180;
              const x = RADIUS + 50 + Math.cos(rad) * RADIUS - 30;
              const y = RADIUS + 50 + Math.sin(rad) * RADIUS - 30;
              const isActive = i === active;

              return (
                <motion.button
                  key={i}
                  className="absolute rounded-full border-2 flex flex-col items-center justify-center transition-all duration-300"
                  style={{
                    width: 60,
                    height: 60,
                    left: x,
                    top: y,
                    borderColor: isActive ? e.accent : "rgba(255,255,255,0.2)",
                    background: isActive ? `${e.accent}25` : "rgba(0,0,0,0.7)",
                    boxShadow: isActive ? `0 0 25px ${e.accent}50` : "none",
                    backdropFilter: "blur(10px)",
                  }}
                  onClick={() => setActive(i)}
                  whileHover={{ scale: 1.18 }}
                  whileTap={{ scale: 0.93 }}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.1, type: "spring", stiffness: 180 }}
                >
                  <span
                    className="text-[8px] font-bold text-center leading-tight px-1"
                    style={{ color: isActive ? e.accent : "rgba(255,255,255,0.45)" }}
                  >
                    {e.company.split(" ")[0]}
                  </span>
                </motion.button>
              );
            })}

          </div>
        </div>

        {/* RIGHT — EXPERIENCE CARD */}
        <motion.div
          key={active}
          className="relative rounded-2xl border p-8 bg-black/50 backdrop-blur-sm"
          style={{ borderColor: `${exp.accent}35` }}
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
        >
          <div
            className="absolute inset-0 rounded-2xl pointer-events-none"
            style={{ background: `radial-gradient(ellipse 80% 60% at 100% 0%, ${exp.accent}12 0%, transparent 65%)` }}
          />

          <div className="relative z-10">
            <div className="flex items-start justify-between gap-4 mb-6">
              <span
                className="text-xs font-bold tracking-[0.3em] uppercase px-3 py-1.5 rounded-full border"
                style={{ color: exp.accent, borderColor: `${exp.accent}40`, background: `${exp.accent}10` }}
              >
                {exp.duration}
              </span>
              <p className="text-gray-500 text-xs tracking-widest uppercase text-right">{exp.period}</p>
            </div>

            <h3 className="text-white font-black text-2xl leading-tight mb-2">{exp.title}</h3>
            <p className="font-semibold text-base mb-1" style={{ color: exp.accent }}>{exp.company}</p>
            <p className="text-gray-500 text-xs mb-6">{exp.location}</p>

            <div className="w-full h-px bg-white/5 mb-6" />

            <p className="text-gray-300 text-sm leading-relaxed">{exp.desc}</p>

            {/* Dot nav */}
            <div className="flex gap-2 mt-8 items-center">
              <span className="text-gray-600 text-xs tracking-widest uppercase mr-2">
                {String(active + 1).padStart(2, "0")} / {String(experiences.length).padStart(2, "0")}
              </span>
              {experiences.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className="h-1 rounded-full transition-all duration-300"
                  style={{
                    width: i === active ? 28 : 8,
                    background: i === active ? exp.accent : "rgba(255,255,255,0.15)",
                  }}
                />
              ))}
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export const About = () => {
  return (
    <section id="about" className="relative overflow-hidden bg-black">
      <motion.div
        className="absolute inset-0"
        animate={{
          background: [
            "radial-gradient(ellipse 55% 50% at 0% 50%, rgba(140,0,180,0.65) 0%, transparent 55%), radial-gradient(ellipse 65% 55% at 0% 90%, rgba(170,110,0,0.55) 0%, transparent 55%), radial-gradient(ellipse 55% 50% at 55% 5%, rgba(0,150,130,0.6) 0%, transparent 55%)",
            "radial-gradient(ellipse 60% 50% at 5% 55%, rgba(120,0,160,0.6) 0%, transparent 55%), radial-gradient(ellipse 60% 55% at 2% 85%, rgba(190,130,0,0.5) 0%, transparent 55%), radial-gradient(ellipse 60% 50% at 60% 8%, rgba(0,160,140,0.55) 0%, transparent 55%)",
            "radial-gradient(ellipse 55% 50% at 0% 50%, rgba(140,0,180,0.65) 0%, transparent 55%), radial-gradient(ellipse 65% 55% at 0% 90%, rgba(170,110,0,0.55) 0%, transparent 55%), radial-gradient(ellipse 55% 50% at 55% 5%, rgba(0,150,130,0.6) 0%, transparent 55%)",
          ],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="absolute inset-0 bg-black/30 pointer-events-none" />

      <div className="relative z-10">

        {/* INTRO */}
        <div className="max-w-7xl mx-auto px-8 pt-28 pb-16 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <AnimatedCard direction="up" delay={0}>
              <p className="text-[clamp(1.8rem,3.8vw,3rem)] font-light text-white leading-snug">I am Sunith Ramachandra,</p>
              <p className="text-[clamp(1.8rem,3.8vw,3rem)] font-light text-white leading-snug">I build <span className="italic text-cyan-400">intelligent</span></p>
              <p className="text-[clamp(1.8rem,3.8vw,3rem)] font-light text-white leading-snug">AI-powered SEO systems</p>
              <p className="text-[clamp(1.8rem,3.8vw,3rem)] font-light text-white leading-snug">that drive real growth</p>
            </AnimatedCard>
            <AnimatedCard direction="fade" delay={0.15}>
              <p className="mt-6 text-sm text-gray-300 leading-relaxed max-w-lg">
                Over 7+ years helping B2B, B2C & D2C brands get discovered in Google Search and AI platforms like Google AI Overviews, ChatGPT & Perplexity — through technical SEO, AI-ready content, and scalable automation systems.
              </p>
              <p className="mt-4 text-xs text-gray-500 tracking-[0.2em] uppercase">SEO / AI AUTOMATION / CONTENT STRATEGY / PERFORMANCE MARKETING</p>
              <motion.a
                href="https://www.linkedin.com/in/sunith-ramachandra/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center gap-2 px-6 py-3 border border-cyan-500/40 text-cyan-400 text-sm font-semibold tracking-widest uppercase rounded-full hover:bg-cyan-500/10 transition-all duration-300"
                whileHover={{ scale: 1.04 }}
              >
                View LinkedIn ↗
              </motion.a>
            </AnimatedCard>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {[
              { v: "7+", l: "Years Experience" },
              { v: "89%", l: "YoY Growth — CBSL" },
              { v: "46,920", l: "Active Users Driven" },
              { v: "1,000+", l: "Keywords Ranked" },
            ].map((s, i) => (
              <AnimatedCard key={s.l} direction="pop" delay={i * 0.1}>
                <div className="bg-black/40 border border-white/10 rounded-xl p-5 backdrop-blur-sm hover:border-cyan-500/30 transition-all duration-300">
                  <p className="text-3xl font-black text-white">{s.v}</p>
                  <p className="text-gray-400 text-xs tracking-widest uppercase mt-1">{s.l}</p>
                </div>
              </AnimatedCard>
            ))}
          </div>
        </div>

        {/* CAROUSEL */}
        <AnimatedCard direction="fade" delay={0}>
          <div className="max-w-7xl mx-auto px-8 mb-6 flex items-center justify-between">
            <p className="text-xs text-gray-400 tracking-[0.3em] uppercase">What I Do</p>
            <p className="text-xs text-gray-500">Hover to pause</p>
          </div>
          <CarouselTrack />
        </AnimatedCard>

        {/* CIRCULAR TIMELINE */}
        <div className="max-w-7xl mx-auto px-8 pt-24 pb-10">
          <CircularTimeline />
        </div>

        {/* EDUCATION + CERTS + SKILLS */}
        <div className="max-w-7xl mx-auto px-8 pb-28 grid md:grid-cols-3 gap-8">
          <div>
            <AnimatedCard direction="fade" delay={0}>
              <p className="text-xs text-gray-400 tracking-[0.3em] uppercase mb-6">Education</p>
            </AnimatedCard>
            <div className="space-y-5">
              {education.map((e, i) => (
                <AnimatedCard key={e.school} direction="up" delay={i * 0.12}>
                  <div className="border-l-2 border-white/10 pl-4">
                    <p className="text-white font-semibold text-sm">{e.school}</p>
                    <p className="text-gray-400 text-xs mt-0.5">{e.degree}</p>
                    <p className="text-gray-600 text-xs mt-0.5">{e.year}</p>
                  </div>
                </AnimatedCard>
              ))}
            </div>
          </div>

          <div>
            <AnimatedCard direction="fade" delay={0.1}>
              <p className="text-xs text-gray-400 tracking-[0.3em] uppercase mb-6">Certifications</p>
            </AnimatedCard>
            <div className="space-y-4">
              {certifications.map((c, i) => (
                <AnimatedCard key={c} direction="left" delay={0.1 + i * 0.12}>
                  <div className="flex items-start gap-3">
                    <span className="text-cyan-400 text-sm mt-0.5 font-bold">✓</span>
                    <p className="text-gray-300 text-sm">{c}</p>
                  </div>
                </AnimatedCard>
              ))}
            </div>
          </div>

          <div>
            <AnimatedCard direction="fade" delay={0.2}>
              <p className="text-xs text-gray-400 tracking-[0.3em] uppercase mb-6">Top Skills</p>
            </AnimatedCard>
            <div className="flex flex-wrap gap-2">
              {skills.map((s, i) => (
                <AnimatedSpan key={s} delay={i * 0.05}>{s}</AnimatedSpan>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
