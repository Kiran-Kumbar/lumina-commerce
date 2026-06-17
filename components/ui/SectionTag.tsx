"use client";

import { motion } from "framer-motion";
import React from "react";

export default function SectionTag({ children, className = "" }: { children: React.ReactNode, className?: string }) {
  return (
    <motion.span
      initial={{ opacity: 0, letterSpacing: "0.05em" }}
      whileInView={{ opacity: 1, letterSpacing: "0.12em" }}
      viewport={{ once: true }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      className={`text-micro block mb-4 ${className}`}
    >
      {children}
    </motion.span>
  );
}
