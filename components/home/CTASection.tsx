"use client";

import { motion } from "framer-motion";
import LuxuryButton from "../ui/LuxuryButton";
import { fadeUp, staggerContainer } from "@/lib/animations";
import { useRouter } from "next/navigation";
import RevealText from "../ui/RevealText";
import MagneticButton from "../ui/MagneticButton";

export default function CTASection() {
  const router = useRouter();

  return (
    <section className="bg-rose-gold py-[clamp(5rem,10vw,9rem)]">
      <div className="max-w-[1360px] mx-auto px-6">
        <motion.div 
          className="flex flex-col md:flex-row items-center justify-between gap-10 md:gap-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={staggerContainer}
        >
          <div className="flex-1 text-center md:text-left">
            <RevealText 
              text="Ready To Create Something Meaningful?" 
              className="font-playfair text-[clamp(2.5rem,5vw,4.5rem)] text-surface leading-[1.1] mb-6"
              delay={0.1} 
            />
            <motion.p 
              variants={fadeUp} 
              className="font-inter text-[1.125rem] text-[rgba(255,252,248,0.85)] max-w-lg mx-auto md:mx-0"
            >
              Transform your cherished memories into premium, matte-finished gifts that they will keep forever.
            </motion.p>
          </div>
          
          <motion.div variants={fadeUp} className="shrink-0">
            <MagneticButton>
              <LuxuryButton 
                variant="secondary" 
                className="border-surface text-surface hover:bg-surface hover:text-rose-gold px-12 py-5 text-[0.9375rem]"
                onClick={() => router.push('/shop')}
              >
                Start Designing
              </LuxuryButton>
            </MagneticButton>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
