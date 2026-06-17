'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import RevealText from '../ui/RevealText'

export default function ShopHeader({ productCount }: { productCount: number }) {
  return (
    <section className="w-full bg-background pt-20 pb-12 overflow-hidden">
      <div className="max-w-[1360px] mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-12">
        
        {/* Left Side (60%) */}
        <div className="w-full md:w-[60%] flex flex-col justify-center">
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="w-[60px] h-[1px] bg-champagne-gold origin-left mb-6"
          />
          
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="font-inter text-[0.6875rem] uppercase tracking-widest text-text-muted mb-4"
          >
            OUR COLLECTION
          </motion.div>
          
          <RevealText 
            text="Every Gift, A Memory"
            className="font-playfair text-[clamp(2.5rem,5vw,4.5rem)] font-normal text-dark leading-[1.1] mb-6 max-w-xl"
            delay={0.5}
            as="h1"
          />
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="flex items-center justify-between w-full max-w-md"
          >
            <p className="font-inter text-[1.0625rem] text-text-secondary">
              Thoughtfully designed. Intentionally crafted.
            </p>
            <span className="font-inter text-[0.75rem] text-text-muted shrink-0 ml-4">
              {productCount} pieces
            </span>
          </motion.div>
        </div>

        {/* Right Side Collage (40%) - Desktop Only */}
        <div className="hidden md:block w-[40%] relative h-[320px]">
          <motion.div
            initial={{ opacity: 0, scale: 0.95, rotate: -8 }}
            animate={{ opacity: 1, scale: 1, rotate: -4 }}
            transition={{ delay: 0.1, duration: 0.8, ease: "easeOut" }}
            className="absolute bottom-0 right-0 w-[200px] h-[260px] border border-border z-10 bg-surface"
          >
            <Image 
              src="https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=400&q=70"
              alt="Mug"
              fill
              className="object-cover"
              priority
              sizes="200px"
            />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95, rotate: -2 }}
            animate={{ opacity: 1, scale: 1, rotate: 2 }}
            transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[260px] border border-border z-20 bg-surface"
          >
            <Image 
              src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&q=70"
              alt="Plaque"
              fill
              className="object-cover"
              priority
              sizes="200px"
            />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: -1 }}
            transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
            className="absolute top-0 left-0 w-[200px] h-[260px] border border-border z-30 bg-surface"
          >
            <Image 
              src="https://images.unsplash.com/photo-1531685250784-7569952593d2?w=400&q=70"
              alt="Frame"
              fill
              className="object-cover"
              priority
              sizes="200px"
            />
          </motion.div>
        </div>
        
      </div>
    </section>
  )
}
