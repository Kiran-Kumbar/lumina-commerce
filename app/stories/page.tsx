"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/animations";
import { reviews } from "@/data/reviews";
import ReviewCard from "@/components/review/ReviewCard";
import Image from "next/image";

export default function StoriesPage() {
  return (
    <div className="pt-20 bg-background min-h-screen pb-24">
      {/* Hero */}
      <section className="relative h-[40vh] w-full overflow-hidden mb-20">
        <Image
          src="https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?q=80&w=2000&auto=format&fit=crop"
          alt="Customer Stories"
          fill
          className="object-cover warm-filter"
          priority
        />
        <div className="absolute inset-0 bg-dark/40" />
        <div className="absolute inset-0 matte-overlay pointer-events-none" />
        
        <div className="absolute inset-0 flex items-center justify-center text-center p-6">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.h1 variants={fadeUp} className="font-playfair text-[clamp(2.5rem,5vw,4.5rem)] text-surface mb-4 leading-[1.1]">
              Customer Stories
            </motion.h1>
            <motion.p variants={fadeUp} className="font-inter text-[1.125rem] text-[rgba(255,252,248,0.9)] max-w-2xl mx-auto">
              Real moments preserved forever.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Grid */}
      <section className="max-w-[1360px] mx-auto px-6">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          {reviews.map((review, index) => (
            <motion.div key={index} variants={fadeUp} className="h-full">
              <ReviewCard review={review} />
            </motion.div>
          ))}
        </motion.div>
      </section>
    </div>
  );
}
