"use client";
import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

interface ButtonProps extends HTMLMotionProps<"button"> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
}

export const Button = ({ className, variant = "primary", children, ...props }: ButtonProps) => {
  const baseStyles = "relative inline-flex items-center justify-center px-6 py-3 font-medium rounded-full transition-colors overflow-hidden";
  
  const variants = {
    primary: "bg-violet-600 hover:bg-violet-500 text-white shadow-[0_0_20px_rgba(139,92,246,0.4)] hover:shadow-[0_0_30px_rgba(139,92,246,0.6)]",
    secondary: "bg-white text-black hover:bg-neutral-200 shadow-[0_0_20px_rgba(255,255,255,0.2)]",
    outline: "border border-white/20 bg-white/5 hover:bg-white/10 text-white backdrop-blur-sm",
    ghost: "hover:bg-white/10 text-white",
  };

  return (
    <motion.button
      whileHover={{ scale: 1.03, y: -2 }}
      whileTap={{ scale: 0.97 }}
      className={cn(baseStyles, variants[variant], className)}
      {...props}
    >
      {children}
    </motion.button>
  );
};
