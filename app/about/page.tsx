"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/animations";
import RevealImage from "@/components/ui/RevealImage";
import RevealText from "@/components/ui/RevealText";
import SectionTag from "@/components/ui/SectionTag";
import CountUp from "@/components/ui/CountUp";

export default function AboutPage() {
  return (
    <div className="pt-20 bg-background min-h-screen">
      {/* Hero */}
      <section className="relative h-[60vh] md:h-[80vh] w-full overflow-hidden">
        <RevealImage
          src="https://images.unsplash.com/photo-1549465220-1a8b9238cd48?q=80&w=2000&auto=format&fit=crop"
          alt="About Us"
          className="absolute inset-0 w-full h-full opacity-80"
          priority
        />
        <div className="absolute inset-0 bg-dark/40" />
        <div className="absolute inset-0 matte-overlay pointer-events-none" />
        
        <div className="absolute inset-0 flex items-center justify-center text-center p-6">
          <RevealText 
            text="We Believe Every Memory Deserves A Form"
            className="font-playfair text-[clamp(2.5rem,6vw,5rem)] text-surface max-w-4xl leading-[1.1]"
            as="h1"
            delay={0.2}
          />
        </div>
      </section>

      {/* Story */}
      <section className="py-24 md:py-32 max-w-3xl mx-auto px-6 text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={staggerContainer}
        >
          <SectionTag className="text-champagne flex justify-center">OUR STORY</SectionTag>
          <motion.div variants={fadeUp} className="font-playfair text-xl md:text-2xl text-dark leading-relaxed flex flex-col gap-8">
            <p>
              Ru&Ki was born from a simple realization: the digital age has given us thousands of photos, but very few tangible memories. We scroll past our most precious moments every day.
            </p>
            <p>
              We set out to create pieces that honor these moments. Not just generic printed products, but premium, matte-finished artifacts that feel like art in your hands.
            </p>
            <p>
              Every piece we craft is an intentional rebellion against mass production. From the curated warmth of our color palette to the debossed feel of our packaging, everything is designed to make your memories feel as special as they are.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-dark text-surface">
        <div className="max-w-[1360px] mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
            <div>
              <div className="font-playfair text-5xl text-rose-gold mb-2">
                <CountUp end={15000} suffix="+" />
              </div>
              <p className="font-inter text-sm tracking-widest uppercase text-text-secondary">Gifts Crafted</p>
            </div>
            <div>
              <div className="font-playfair text-5xl text-rose-gold mb-2">
                <CountUp end={12000} suffix="+" />
              </div>
              <p className="font-inter text-sm tracking-widest uppercase text-text-secondary">Happy Families</p>
            </div>
            <div>
              <div className="font-playfair text-5xl text-rose-gold mb-2">
                <CountUp end={4} suffix=".9" />
              </div>
              <p className="font-inter text-sm tracking-widest uppercase text-text-secondary">Average Rating</p>
            </div>
            <div>
              <div className="font-playfair text-5xl text-rose-gold mb-2">
                <CountUp end={40} suffix="%" />
              </div>
              <p className="font-inter text-sm tracking-widest uppercase text-text-secondary">Repeat Orders</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section className="py-24 bg-surface border-y border-border">
        <div className="max-w-[1360px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-12">
            {[
              { title: "Precision", desc: "Every photo is manually enhanced. Every piece is inspected. We don't automate care." },
              { title: "Emotion", desc: "We are handling your most cherished moments. We treat them with the reverence they deserve." },
              { title: "Craft", desc: "Premium matte finishes, sharp details, and timeless design that fits perfectly in any home." }
            ].map((pillar, i) => (
              <motion.div 
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: i * 0.2 } }
                }}
                className="text-center"
              >
                <div className="w-12 h-12 border border-champagne mx-auto mb-6 flex items-center justify-center transform rotate-45">
                  <div className="w-2 h-2 bg-dark" />
                </div>
                <h3 className="font-playfair text-2xl text-dark mb-4">{pillar.title}</h3>
                <p className="font-inter text-text-secondary leading-relaxed">{pillar.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
