"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/animations";
import { reviews } from "@/data/reviews";
import ReviewCard from "../review/ReviewCard";
import RevealText from "../ui/RevealText";
import SectionTag from "../ui/SectionTag";

export default function CustomerStoriesSection() {
  // Only show first 3 on home page
  const displayReviews = reviews.slice(0, 3);

  return (
    <section className="py-[clamp(5rem,10vw,9rem)] bg-surface">
      <div className="max-w-[1360px] mx-auto px-6">
        <div className="text-center mb-16">
          <SectionTag className="text-text-secondary">STORIES</SectionTag>
          <RevealText 
            text="Gifts That Stayed With Them" 
            className="font-playfair text-[clamp(2rem,4vw,3.5rem)] text-dark leading-[1.2]" 
          />
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={staggerContainer}
        >
          {displayReviews.map((review, index) => (
            <motion.div key={index} variants={fadeUp} className="h-full">
              <ReviewCard review={review} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
