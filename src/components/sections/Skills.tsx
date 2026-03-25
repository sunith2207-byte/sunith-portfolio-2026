"use client";
import { Section } from "@/components/ui/Section";
import { motion } from "framer-motion";
import { FiSearch, FiSettings, FiBarChart2, FiTarget } from "react-icons/fi";

const skills = [
  {
    name: "SEO Strategy",
    icon: <FiSearch className="w-8 h-8 text-emerald-400" />,
    color: "from-emerald-900/50 to-emerald-500/10 border-emerald-500/20"
  },
  {
    name: "AI Automation",
    icon: <FiSettings className="w-8 h-8 text-violet-400" />,
    color: "from-violet-900/50 to-violet-500/10 border-violet-500/20"
  },
  {
    name: "Data Analytics",
    icon: <FiBarChart2 className="w-8 h-8 text-cyan-400" />,
    color: "from-cyan-900/50 to-cyan-500/10 border-cyan-500/20"
  },
  {
    name: "Growth Marketing",
    icon: <FiTarget className="w-8 h-8 text-rose-400" />,
    color: "from-rose-900/50 to-rose-500/10 border-rose-500/20"
  }
];

export const Skills = () => {
  return (
    <Section id="skills" className="py-24 bg-black/30 border-y border-white/5 max-w-none w-full px-0 sm:px-6">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tighter mb-4">Core <span className="text-gradient">Competencies</span></h2>
          <p className="text-white/60 max-w-xl mx-auto">The foundational skills that power the growth systems I build.</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.05 }}
              className={`flex flex-col items-center justify-center p-8 rounded-2xl border bg-gradient-to-b ${skill.color} backdrop-blur-sm`}
            >
              <div className="mb-4 p-4 bg-black/40 rounded-full shadow-inner border border-white/5">
                {skill.icon}
              </div>
              <h3 className="text-lg font-semibold text-white/90 text-center">{skill.name}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
};
