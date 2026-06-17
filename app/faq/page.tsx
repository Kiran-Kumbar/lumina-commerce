"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { faqs } from "@/data/faqs";
import { fadeUp, staggerContainer } from "@/lib/animations";

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="pt-32 pb-24 bg-background min-h-screen">
      <div className="max-w-3xl mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.span variants={fadeUp} className="text-micro text-text-secondary block mb-4">
            HELP & SUPPORT
          </motion.span>
          <motion.h1 variants={fadeUp} className="font-playfair text-[clamp(2.5rem,5vw,4rem)] text-dark mb-4 leading-[1.1]">
            Frequently Asked Questions
          </motion.h1>
        </motion.div>

        <motion.div 
          className="flex flex-col border-t border-border"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          {faqs.map((faq, index) => (
            <motion.div key={index} variants={fadeUp} className="border-b border-border">
              <button 
                className="w-full py-6 flex items-center justify-between text-left focus:outline-none"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-playfair text-xl text-dark pr-8">{faq.question}</span>
                <span className="shrink-0 text-rose-gold text-2xl font-light">
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="font-inter text-text-secondary pb-6 leading-relaxed pr-12">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
