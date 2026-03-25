"use client";
import { Section } from "@/components/ui/Section";
import { GlassCard } from "@/components/ui/GlassCard";
import { FiTrendingUp, FiCpu, FiPieChart, FiLayers } from "react-icons/fi";
import { motion } from "framer-motion";

const services = [
  {
    title: "SEO Growth Systems",
    description: "Developing scalable, search-optimized architectures that drive organic traffic.",
    icon: <FiTrendingUp className="w-6 h-6 text-violet-400" />
  },
  {
    title: "AI Automation Tools",
    description: "Building intelligent agents to replace repetitive tasks and streamline operations.",
    icon: <FiCpu className="w-6 h-6 text-cyan-400" />
  },
  {
    title: "Marketing Analytics",
    description: "Setting up data pipelines to track full-funnel performance and attribute ROI.",
    icon: <FiPieChart className="w-6 h-6 text-fuchsia-400" />
  },
  {
    title: "Content Workflows",
    description: "Creating programmatic SEO frameworks to scale content creation without sacrificing quality.",
    icon: <FiLayers className="w-6 h-6 text-rose-400" />
  }
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export const About = () => {
  return (
    <Section id="about">
      <div className="flex flex-col md:flex-row gap-16 items-start">
        <div className="md:w-1/3">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tighter mb-6 relative inline-block">
            What I Build
            <div className="absolute -bottom-2 left-0 w-1/2 h-1 bg-gradient-to-r from-violet-500 to-transparent rounded-full" />
          </h2>
          <p className="text-white/60 text-lg">
            I specialize in the intersection of modern marketing and artificial intelligence. My goal is to build automated growth engines that work for you 24/7.
          </p>
        </div>
        
        <div className="md:w-2/3 w-full">
          <motion.div 
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {services.map((service, index) => (
              <motion.div key={index} variants={item}>
                <GlassCard className="h-full flex flex-col gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center border border-white/10">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white">{service.title}</h3>
                  <p className="text-white/60 text-sm leading-relaxed">{service.description}</p>
                </GlassCard>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </Section>
  );
};
