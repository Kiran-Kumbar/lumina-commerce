'use client'

import { motion, Variants } from 'framer-motion'

interface RevealTextProps {
  text: string
  className?: string
  delay?: number
  as?: 'h1' | 'h2' | 'h3' | 'p'
}

export default function RevealText({ text, className = "", delay = 0, as: Tag = 'h2' }: RevealTextProps) {
  const words = text.split(' ')

  const container: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.07,
        delayChildren: delay,
      },
    },
  }

  const wordVariant: Variants = {
    hidden: {
      y: '110%',
      opacity: 0,
    },
    visible: {
      y: '0%',
      opacity: 1,
      transition: {
        duration: 0.75,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  }

  return (
    <Tag className={className}>
      <motion.span
        className="inline-block"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {words.map((word, i) => (
          <span key={i} className="inline-block overflow-hidden mr-[0.25em]">
            <motion.span className="inline-block" variants={wordVariant}>
              {word}
            </motion.span>
          </span>
        ))}
      </motion.span>
    </Tag>
  )
}
