"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export const Hero = () => {
  return (
    <motion.section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-[#06080f] overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-purple-900/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-[350px] h-[350px] bg-cyan-900/15 rounded-full blur-[100px]" />
        <div className="absolute top-1/2 left-1/3 w-[300px] h-[300px] bg-violet-900/10 rounded-full blur-[140px]" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-8 items-center min-h-screen py-20">

          <motion.div
            className="relative flex items-end justify-center order-2 md:order-1"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="relative w-full max-w-[360px] md:max-w-[440px]">
              <div
                className="absolute -inset-4 rounded-3xl pointer-events-none"
                style={{
                  background: "radial-gradient(ellipse 80% 80% at 50% 60%, rgba(139,92,246,0.2) 0%, transparent 70%)",
                  filter: "blur(20px)",
                }}
              />
              <div
                className="absolute inset-0 rounded-3xl pointer-events-none z-10"
                style={{ background: "linear-gradient(to top, #06080f 0%, transparent 40%)" }}
              />
              <Image
                src="/sunith.jpg"
                alt="Sunith Ramachandra"
                width={900}
                height={1100}
                quality={100}
                priority
                className="relative w-full h-auto object-cover object-top rounded-2xl"
                style={{ maxHeight: "60vh", objectFit: "cover" }}
              />

              <motion.div
                className="absolute -top-3 -right-3 md:-top-4 md:-right-4 z-20 bg-black/70 border border-purple-500/30 backdrop-blur-sm rounded-xl px-3 py-2"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 }}
              >
                <p className="text-purple-400 text-[9px] tracking-widest uppercase">Status</p>
                <div className="flex items-center gap-1.5 mt-1">
                  <motion.div
                    className="w-1.5 h-1.5 rounded-full bg-emerald-400"
                    animate={{ opacity: [1, 0.3, 1] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  />
                  <p className="text-white text-xs font-semibold">Open to work</p>
                </div>
              </motion.div>

              <motion.div
                className="absolute -bottom-3 -left-3 md:-bottom-4 md:-left-4 z-20 bg-black/70 border border-cyan-500/30 backdrop-blur-sm rounded-xl px-3 py-2"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1 }}
              >
                <p className="text-cyan-400 text-[9px] tracking-widest uppercase">Featured In</p>
                <p className="text-white text-xs font-semibold mt-0.5">Google AI Overviews</p>
                <p className="text-gray-400 text-[9px]">+ ChatGPT · Perplexity</p>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            className="flex flex-col justify-center order-1 md:order-2"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <motion.p
              className="text-purple-400 text-xs font-semibold tracking-[0.4em] uppercase mb-4"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              Senior SEO Strategist · Bengaluru
            </motion.p>

            <div className="mb-5">
              <motion.p
                className="text-gray-400 text-base md:text-xl italic font-light mb-1"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                Hi, I build
              </motion.p>

              <motion.h1
                className="text-5xl md:text-6xl lg:text-7xl font-black leading-none tracking-tight text-white"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.55, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              >
                growth
              </motion.h1>

              <motion.h1
                className="text-5xl md:text-6xl lg:text-7xl font-black leading-none tracking-tight text-white"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.65, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              >
                with{" "}
                <span className="text-purple-500">AI</span>
                <span className="text-white"> + </span>
                <span className="text-purple-500">SEO</span>
              </motion.h1>
            </div>

            <motion.p
              className="text-gray-400 text-sm md:text-base leading-relaxed max-w-md mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              I help B2B, B2C & D2C brands get discovered in Google Search and AI platforms like Google AI Overviews, ChatGPT & Perplexity — through technical SEO, AI-ready content, and scalable automation systems.
            </motion.p>

            <motion.div
              className="flex gap-3 flex-wrap mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
            >
              <motion.button
                className="px-6 py-3 bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs tracking-widest uppercase rounded-full transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
              >
                View My Work
              </motion.button>
              <motion.button
                className="px-6 py-3 border border-white/20 hover:border-purple-500 hover:bg-purple-500/10 text-white font-bold text-xs tracking-widest uppercase rounded-full transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              >
                Contact Me
              </motion.button>
            </motion.div>

            <motion.div
              className="flex gap-6 text-xs text-gray-500 tracking-widest uppercase"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.1 }}
            >
              <div>
                <p className="text-white font-bold text-xl md:text-2xl">7+</p>
                <p className="mt-0.5">Years Exp</p>
              </div>
              <div className="w-px bg-white/10" />
              <div>
                <p className="text-white font-bold text-xl md:text-2xl">46K+</p>
                <p className="mt-0.5">Users Driven</p>
              </div>
              <div className="w-px bg-white/10" />
              <div>
                <p className="text-white font-bold text-xl md:text-2xl">5+</p>
                <p className="mt-0.5">Brands Scaled</p>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>

      <motion.div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-white/30"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <span className="text-[9px] tracking-[0.3em] uppercase">Scroll</span>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </motion.div>

    </motion.section>
  );
};
