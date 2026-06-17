"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/animations";
import { categories } from "@/data/categories";
import CategoryCard from "../category/CategoryCard";
import RevealText from "../ui/RevealText";
import SectionTag from "../ui/SectionTag";

export default function OccasionsSection() {
  return (
    <section className="py-[clamp(5rem,10vw,9rem)] bg-background">
      <div className="max-w-[1360px] mx-auto px-6">
        <div className="text-center mb-16">
          <SectionTag className="text-text-secondary">SHOP BY OCCASION</SectionTag>
          <RevealText 
            text="Every Moment Deserves Something Beautiful" 
            className="font-playfair text-[clamp(2rem,4vw,3.5rem)] text-dark leading-[1.2]" 
          />
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={staggerContainer}
        >
          {categories.map((category) => (
            <motion.div key={category.slug} variants={fadeUp}>
              <CategoryCard category={category} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
