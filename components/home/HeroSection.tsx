"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import LuxuryButton from "../ui/LuxuryButton";
import RevealText from "../ui/RevealText";
import RevealImage from "../ui/RevealImage";
import MagneticButton from "../ui/MagneticButton";
import { useRef } from "react";
import { fadeUp, staggerContainer } from "@/lib/animations";
import SectionTag from "../ui/SectionTag";

export default function HeroSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });
  
  // Parallax effect: image moves at 0.3x scroll speed
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  return (
    <section ref={ref} className="relative w-full h-[100svh] overflow-hidden bg-dark">
      <motion.div 
        className="absolute inset-0 z-0"
        style={{ y }}
      >
        <RevealImage 
          src="https://images.unsplash.com/photo-1549465220-1a8b9238cd48?q=80&w=2000&auto=format&fit=crop"
          alt="Hero Background"
          className="absolute inset-0 w-full h-full opacity-85"
          priority
        />
        <div className="absolute inset-0 matte-overlay pointer-events-none" />
      </motion.div>

      <div className="relative z-10 w-full h-full max-w-[1360px] mx-auto px-6 flex items-start pt-[28vh] md:pt-[32vh] md:pl-[8vw]">
        <motion.div 
          className="max-w-2xl text-left"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <SectionTag className="text-[rgba(255,252,248,0.8)]">PREMIUM GIFTING · EST. 2024</SectionTag>
          
          <RevealText 
            text="Turn Memories Into Timeless Gifts"
            className="font-playfair text-[clamp(3.5rem,7vw,6.5rem)] text-surface leading-[1.1] mb-6"
            delay={0.2}
            as="h1"
          />
          
          <motion.p 
            variants={fadeUp}
            className="font-inter text-[1.125rem] text-[rgba(255,252,248,0.8)] mb-10 max-w-lg"
          >
            Personalized creations crafted for every special moment.
          </motion.p>
          
          <motion.div variants={fadeUp} className="flex flex-wrap gap-4">
            <MagneticButton>
              <LuxuryButton variant="primary" className="bg-surface text-dark hover:bg-rose-gold hover:text-surface">
                Explore Collection
              </LuxuryButton>
            </MagneticButton>
            <MagneticButton>
              <LuxuryButton variant="secondary" className="border-surface text-surface hover:bg-surface hover:text-dark">
                Create Your Gift
              </LuxuryButton>
            </MagneticButton>
          </motion.div>
        </motion.div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-20">
        <div className="w-[1px] h-12 bg-gradient-to-b from-[rgba(255,252,248,0.5)] to-transparent" />
        <span className="font-inter text-xs text-[rgba(255,252,248,0.5)] uppercase tracking-widest">Scroll</span>
      </div>
    </section>
  );
}
