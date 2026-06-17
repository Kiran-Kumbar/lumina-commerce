"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import RevealImage from "../ui/RevealImage";

export default function ProductGallery({ images, name }: { images: string[], name: string }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <div className="flex flex-col gap-4">
      {/* Main Image */}
      <div className="relative aspect-[4/5] w-full bg-surface overflow-hidden border border-border">
        <div className="absolute inset-0 z-10 matte-overlay pointer-events-none" />
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0"
          >
            {currentIndex === 0 ? (
              <RevealImage
                src={images[currentIndex]}
                alt={`${name} - View ${currentIndex + 1}`}
                className="absolute inset-0 w-full h-full"
                priority
              />
            ) : (
              <Image
                src={images[currentIndex]}
                alt={`${name} - View ${currentIndex + 1}`}
                fill
                className="object-cover warm-filter"
                sizes="(max-width: 1024px) 100vw, 55vw"
                priority
              />
            )}
          </motion.div>
        </AnimatePresence>
        
        <div className="absolute top-4 right-4 bg-surface/90 px-3 py-1 font-inter text-xs text-dark z-20">
          {currentIndex + 1} / {images.length}
        </div>
      </div>

      {/* Thumbnails */}
      <div className="grid grid-cols-4 gap-4">
        {images.map((img, idx) => (
          <button 
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`relative aspect-[4/5] overflow-hidden border transition-colors ${currentIndex === idx ? 'border-dark' : 'border-border hover:border-champagne'}`}
          >
            <div className="absolute inset-0 z-10 matte-overlay pointer-events-none" />
            <Image
              src={img}
              alt={`Thumbnail ${idx + 1}`}
              fill
              className="object-cover warm-filter"
              sizes="20vw"
            />
          </button>
        ))}
      </div>
    </div>
  );
}
