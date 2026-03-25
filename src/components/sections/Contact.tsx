"use client";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { GlassCard } from "@/components/ui/GlassCard";
import { FiMail, FiMapPin, FiPhone } from "react-icons/fi";

export const Contact = () => {
  return (
    <Section id="contact" className="py-32">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tighter mb-4">
            Let's <span className="text-gradient">Connect</span>
          </h2>
          <p className="text-white/60">Have a project in mind or want to explore how AI can scale your marketing?</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          <div className="md:col-span-2 flex flex-col gap-6">
            <GlassCard hoverEffect={false} className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-violet-500/20 border border-violet-500/30 flex items-center justify-center text-violet-400 shrink-0">
                <FiMail className="w-5 h-5" />
              </div>
              <div>
                <p className="text-sm text-white/50">Email</p>
                <a href="mailto:sunith2207@gmail.com" className="text-white font-medium hover:text-violet-400 transition-colors">sunith2207@gmail.com</a>
              </div>
            </GlassCard>
            <GlassCard hoverEffect={false} className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-cyan-500/20 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shrink-0">
                <FiPhone className="w-5 h-5" />
              </div>
              <div>
                <p className="text-sm text-white/50">Phone</p>
                <a href="tel:+917259676774" className="text-white font-medium hover:text-cyan-400 transition-colors">+91 7259676774</a>
              </div>
            </GlassCard>
          </div>
          
          <div className="md:col-span-3">
            <GlassCard hoverEffect={false} className="p-8">
              <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="name" className="text-sm font-medium text-white/70">Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      className="bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-violet-500 transition-colors"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="text-sm font-medium text-white/70">Email</label>
                    <input 
                      type="email" 
                      id="email" 
                      className="bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-violet-500 transition-colors"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                
                <div className="flex flex-col gap-2">
                  <label htmlFor="message" className="text-sm font-medium text-white/70">Message</label>
                  <textarea 
                    id="message" 
                    rows={4}
                    className="bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-violet-500 transition-colors resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>
                
                <Button variant="primary" className="w-full mt-2">
                  Send Message
                </Button>
              </form>
            </GlassCard>
          </div>
        </div>
      </div>
    </Section>
  );
};
