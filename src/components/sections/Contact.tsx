"use client";

import { useState } from "react";
import { FiMail, FiMapPin, FiPhone } from "react-icons/fi";

export const Contact = () => {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("https://formspree.io/f/xykbdlad", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-32 bg-[#06080f] relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-900/15 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-cyan-900/10 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-8">

        <div className="text-center mb-16">
          <p className="text-xs text-gray-500 tracking-[0.4em] uppercase mb-4">Get In Touch</p>
          <h2 className="text-5xl md:text-6xl font-black text-white leading-none tracking-tight">
            Let&apos;s{" "}
            <span className="text-purple-500">Connect</span>
          </h2>
          <p className="text-gray-400 mt-4 text-base max-w-md mx-auto">
            Have a project in mind or want to explore how AI can scale your marketing?
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-8 items-start">

          <div className="md:col-span-2 flex flex-col gap-4">
            <a
              href="mailto:sunith2207@gmail.com"
              className="flex items-center gap-4 p-5 rounded-2xl border border-white/10 bg-white/5 hover:border-purple-500/40 hover:bg-purple-500/5 transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-full bg-purple-600/20 border border-purple-500/30 flex items-center justify-center flex-shrink-0">
                <FiMail className="text-purple-400 w-5 h-5" />
              </div>
              <div>
                <p className="text-gray-400 text-xs tracking-widest uppercase mb-1">Email</p>
                <p className="text-white font-semibold text-sm">sunith2207@gmail.com</p>
              </div>
            </a>

            <a
              href="tel:+917259676774"
              className="flex items-center gap-4 p-5 rounded-2xl border border-white/10 bg-white/5 hover:border-cyan-500/40 hover:bg-cyan-500/5 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-full bg-cyan-600/20 border border-cyan-500/30 flex items-center justify-center flex-shrink-0">
                <FiPhone className="text-cyan-400 w-5 h-5" />
              </div>
              <div>
                <p className="text-gray-400 text-xs tracking-widest uppercase mb-1">Phone</p>
                <p className="text-white font-semibold text-sm">+91 7259676774</p>
              </div>
            </a>

            <div className="flex items-center gap-4 p-5 rounded-2xl border border-white/10 bg-white/5">
              <div className="w-12 h-12 rounded-full bg-emerald-600/20 border border-emerald-500/30 flex items-center justify-center flex-shrink-0">
                <FiMapPin className="text-emerald-400 w-5 h-5" />
              </div>
              <div>
                <p className="text-gray-400 text-xs tracking-widest uppercase mb-1">Location</p>
                <p className="text-white font-semibold text-sm">Bengaluru, Karnataka</p>
              </div>
            </div>
          </div>

          <div className="md:col-span-3">
            <form
              onSubmit={handleSubmit}
              className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-8 flex flex-col gap-5"
            >
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col gap-2">
                  <label className="text-xs text-gray-400 tracking-widest uppercase">Name</label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Your name"
                    className="bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-gray-600 focus:outline-none focus:border-purple-500/50 transition-all duration-300"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-xs text-gray-400 tracking-widest uppercase">Email</label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="your@email.com"
                    className="bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-gray-600 focus:outline-none focus:border-purple-500/50 transition-all duration-300"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-xs text-gray-400 tracking-widest uppercase">Message</label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  placeholder="Tell me about your project..."
                  className="bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-gray-600 focus:outline-none focus:border-purple-500/50 transition-all duration-300 resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full py-4 bg-purple-600 hover:bg-purple-500 disabled:opacity-50 text-white font-bold text-sm tracking-widest uppercase rounded-full transition-all duration-300"
              >
                {status === "sending" ? "Sending..." : "Send Message"}
              </button>

              {status === "success" && (
                <p className="text-emerald-400 text-sm text-center">
                  ✓ Message sent! I'll get back to you soon.
                </p>
              )}
              {status === "error" && (
                <p className="text-red-400 text-sm text-center">
                  Something went wrong. Please try again.
                </p>
              )}
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};
