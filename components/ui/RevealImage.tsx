'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'

interface RevealImageProps {
  src: string
  alt: string
  className?: string
  delay?: number
  priority?: boolean
  sizes?: string
}

export default function RevealImage({ src, alt, className = "", delay = 0, priority = false, sizes }: RevealImageProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      {/* The curtain — slides right to reveal image */}
      <motion.div
        className="absolute inset-0 z-20 bg-background"
        initial={{ x: '0%' }}
        animate={isInView ? { x: '100%' } : { x: '0%' }}
        transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1], delay }}
      />
      
      {/* The image itself reveals underneath */}
      <motion.div
        className="relative w-full h-full"
        initial={{ scale: 1.1 }}
        animate={isInView ? { scale: 1 } : { scale: 1.1 }}
        transition={{ duration: 1.2, ease: [0.25, 1, 0.5, 1], delay: delay + 0.1 }}
      >
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes={sizes}
          className="object-cover"
        />
      </motion.div>
    </div>
  )
}
