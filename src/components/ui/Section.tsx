"use client";
import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionProps extends HTMLMotionProps<"section"> {
  id: string;
}

export const Section = ({ className, children, id, ...props }: SectionProps) => {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={cn("py-20 md:py-32 container mx-auto px-6 max-w-7xl", className)}
      {...props}
    >
      {children}
    </motion.section>
  );
};
