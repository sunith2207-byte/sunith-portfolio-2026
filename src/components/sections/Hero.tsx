"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/Button";
import Image from "next/image";
import { useRef } from "react";

export const Hero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  // Cinematic parallax effect: background image moves slightly slower than scroll
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  // Fade out opacity as user scrolls away
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.2]);

  return (
    <motion.section 
      id="home" 
      ref={ref}
      className="relative min-h-screen flex items-center justify-center w-full overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Full screen animated background image */}
      <motion.div 
        className="absolute inset-0 z-0 w-full h-full"
        style={{ y, opacity }}
      >
        <Image 
          src="/sunith.jpg"
          alt="Sunith Background"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
          quality={90}
        />
        
        {/* Dark gradient overlay for readability and cinematic feel */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/60 to-[#050505]" />
        
        {/* Extra text legibility backdrop */}
        <div className="absolute inset-0 bg-black/30" />
      </motion.div>

      {/* Decorative floating gradients bound to the hero */}
      <div className="absolute z-[1] top-1/4 -left-1/4 w-[60vw] h-[60vh] bg-violet-600/30 rounded-full blur-[130px] mix-blend-screen animate-float-slow pointer-events-none" />
      <div className="absolute z-[1] bottom-0 right-0 w-[50vw] h-[50vh] bg-cyan-600/20 rounded-full blur-[100px] mix-blend-screen animate-float-slower pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 text-center flex flex-col items-center px-6 w-full max-w-5xl mx-auto pt-20">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white/90 text-sm mb-8 shadow-xl"
        >
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          Available for new opportunities
        </motion.div>
        
        <motion.h1 
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-4 text-white drop-shadow-2xl flex flex-wrap justify-center content-center gap-x-3 gap-y-1 md:gap-x-4 lg:gap-x-5"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 1 },
            visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.15 } }
          }}
        >
          {"Building Growth Systems with".split(" ").map((word, i) => (
            <span key={i} className="overflow-hidden inline-block pb-2">
              <motion.span 
                className="inline-block"
                variants={{
                  hidden: { y: "150%", opacity: 0 },
                  visible: { y: 0, opacity: 1, transition: { type: "spring", damping: 20, stiffness: 120 } }
                }}
              >
                {word}
              </motion.span>
            </span>
          ))}
          <div className="basis-full h-0 hidden md:block" />
          <span className="overflow-hidden inline-block pb-2">
            <motion.span
              className="inline-block text-gradient drop-shadow-lg px-2"
              variants={{
                hidden: { y: "150%", opacity: 0 },
                visible: { y: 0, opacity: 1, transition: { type: "spring", damping: 20, stiffness: 120 } }
              }}
            >
              AI + SEO
            </motion.span>
          </span>
        </motion.h1>
        
        <motion.p 
          className="text-lg md:text-xl lg:text-2xl text-white/90 mb-10 max-w-3xl drop-shadow-md font-medium px-4"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.4 }}
        >
          Marketing strategist, automation builder, and SEO specialist helping businesses scale through intelligent workflows.
        </motion.p>
        
        <motion.div 
          className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto px-6 sm:px-0"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.5 }}
        >
          <Button variant="primary" className="w-full sm:w-auto text-lg px-8 py-4" onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}>
            View My Work
          </Button>
          <Button variant="outline" className="w-full sm:w-auto text-lg px-8 py-4 backdrop-blur-md bg-black/20 hover:bg-white/20" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
            Contact Me
          </Button>
        </motion.div>
      </div>
      
      {/* Scroll indicator chevron */}
      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 text-white/50 cursor-pointer hover:text-white transition-colors"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
      </motion.div>
    </motion.section>
  );
};
