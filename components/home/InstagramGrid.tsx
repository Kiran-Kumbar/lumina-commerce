"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { fadeUp, staggerContainer } from "@/lib/animations";

export default function InstagramGrid() {
  const images = [
    { url: "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?q=80&w=800&auto=format&fit=crop", aspect: "aspect-[3/4]" },
    { url: "https://images.unsplash.com/photo-1513201099705-a9746072f579?q=80&w=800&auto=format&fit=crop", aspect: "aspect-[1/1]" },
    { url: "https://images.unsplash.com/photo-1518199266791-5375a83190b7?q=80&w=800&auto=format&fit=crop", aspect: "aspect-[4/5]" },
    { url: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&w=800&auto=format&fit=crop", aspect: "aspect-[4/5]" },
    { url: "https://images.unsplash.com/photo-1616423640778-28d1b53229bd?q=80&w=800&auto=format&fit=crop", aspect: "aspect-[3/4]" },
    { url: "https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?q=80&w=800&auto=format&fit=crop", aspect: "aspect-[1/1]" },
  ];

  return (
    <section className="py-[clamp(5rem,10vw,9rem)] bg-background">
      <div className="max-w-[1360px] mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={staggerContainer}
        >
          <motion.h2 variants={fadeUp} className="font-playfair text-[clamp(2rem,4vw,3.5rem)] text-dark leading-[1.2] mb-4">
            Moments That Matter
          </motion.h2>
          <motion.a 
            variants={fadeUp} 
            href="#"
            className="text-micro text-text-secondary hover:text-dark transition-colors inline-block"
          >
            FOLLOW OUR STORY · @ruandki
          </motion.a>
        </motion.div>

        <div className="columns-2 md:columns-3 gap-4 md:gap-6 space-y-4 md:space-y-6">
          {images.map((img, index) => (
            <motion.div 
              key={index}
              className={`relative w-full overflow-hidden group bg-surface ${img.aspect} break-inside-avoid`}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: index * 0.1 } }
              }}
            >
              <Image
                src={img.url}
                alt={`Instagram moment ${index + 1}`}
                fill
                className="object-cover warm-filter"
                sizes="(max-width: 768px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-[rgba(183,110,121,0.85)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center z-20">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
              </div>
              <div className="absolute inset-0 matte-overlay pointer-events-none z-10" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
