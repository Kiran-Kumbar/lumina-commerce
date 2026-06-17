'use client'

import { motion, useMotionValue, useAnimationControls } from 'framer-motion'
import { useRef, ReactNode, useEffect, useState } from 'react'

interface DragCarouselProps {
  children: ReactNode
  gap?: number
}

export default function DragCarousel({ children, gap = 24 }: DragCarouselProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)
  const [dragConstraints, setDragConstraints] = useState({ left: 0, right: 0 })

  useEffect(() => {
    const updateConstraints = () => {
      if (!containerRef.current || !trackRef.current) return
      const containerW = containerRef.current.offsetWidth
      const trackW = trackRef.current.scrollWidth
      setDragConstraints({ left: -(trackW - containerW), right: 0 })
    }
    
    updateConstraints()
    window.addEventListener('resize', updateConstraints)
    return () => window.removeEventListener('resize', updateConstraints)
  }, [children])

  return (
    <div ref={containerRef} className="overflow-hidden w-full touch-pan-y">
      <motion.div
        ref={trackRef}
        drag="x"
        dragConstraints={dragConstraints}
        className="flex cursor-grab active:cursor-grabbing"
        style={{ gap: `${gap}px` }}
      >
        {children}
      </motion.div>
    </div>
  )
}
