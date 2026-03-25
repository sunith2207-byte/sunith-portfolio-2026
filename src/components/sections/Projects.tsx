"use client";
import { Section } from "@/components/ui/Section";
import { GlassCard } from "@/components/ui/GlassCard";
import { FiArrowUpRight, FiGithub } from "react-icons/fi";

const projects = [
  {
    title: "AI SEO Engine",
    category: "Automation",
    description: "An automated system that analyzes SERPs, generates optimized content outlines, and drafts articles using LLMs.",
    tags: ["Next.js", "OpenAI", "Python"],
    color: "from-violet-500 to-fuchsia-500"
  },
  {
    title: "AI Website Builder",
    category: "Product",
    description: "A platform that generates full marketing landing pages dynamically based on simple text prompts.",
    tags: ["React", "Tailwind", "Claude API"],
    color: "from-cyan-500 to-blue-500"
  },
  {
    title: "Marketing Automation Systems",
    category: "Growth",
    description: "Custom Zapier and Make.com workflows connecting CRM, Email Marketing, and analytics platforms.",
    tags: ["Make", "Zapier", "Webhooks"],
    color: "from-rose-500 to-orange-500"
  },
  {
    title: "SEO Content Scaling",
    category: "Strategy",
    description: "Programmatic SEO framework that scaled an enterprise client's organic traffic by 300% in 6 months.",
    tags: ["Strategy", "Airtable", "CMS"],
    color: "from-emerald-500 to-teal-500"
  }
];

export const Projects = () => {
  return (
    <Section id="projects" className="relative">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tighter mb-4">Featured <span className="text-gradient">Projects</span></h2>
        <p className="text-white/60 max-w-xl mx-auto">A selection of my recent work in building automated marketing systems and AI applications.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <GlassCard key={index} className="group overflow-hidden relative min-h-[300px]">
            {/* Ambient background glow for cards */}
            <div className={`absolute -right-20 -top-20 w-64 h-64 bg-gradient-to-br ${project.color} rounded-full blur-[80px] opacity-10 group-hover:opacity-30 transition-opacity duration-500 pointer-events-none`} />
            
            <div className="relative z-10 flex flex-col h-full">
              <div className="flex justify-between items-start mb-6">
                <span className="text-xs font-medium px-3 py-1 bg-white/10 rounded-full text-white/80 border border-white/5">
                  {project.category}
                </span>
                <div className="flex gap-2">
                  <a href="#" className="p-2 bg-white/5 hover:bg-white/20 rounded-full border border-white/10 transition-colors z-20">
                    <FiGithub className="w-4 h-4 text-white" />
                  </a>
                  <a href="#" className="p-2 bg-white/5 hover:bg-white/20 rounded-full border border-white/10 transition-colors z-20">
                    <FiArrowUpRight className="w-4 h-4 text-white" />
                  </a>
                </div>
              </div>
              
              <h3 className="text-2xl font-bold mb-3 group-hover:text-white transition-colors text-white/90">
                {project.title}
              </h3>
              
              <p className="text-white/60 mb-8 flex-grow">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tags.map(tag => (
                  <span key={tag} className="text-xs text-white/50 bg-white/5 px-2 py-1 rounded-md border border-white/5 group-hover:border-white/10 transition-colors">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </GlassCard>
        ))}
      </div>
    </Section>
  );
};
