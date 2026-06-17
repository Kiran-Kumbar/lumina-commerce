'use client'

import { motion } from 'framer-motion'
import RevealText from '@/components/ui/RevealText'

const ease = [0.22, 1, 0.36, 1] as const

const stats = [
  { value: '6 occasions' },
  { value: '50+ products' },
  { value: 'Delivered in 3–7 days' },
]

export default function CategoriesHeader() {
  return (
    <header
      style={{
        maxWidth: 1360,
        margin: '0 auto',
        padding: '5rem 2rem 3rem',
      }}
    >
      {/* 1 — Decorative line */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.6, ease, delay: 0 }}
        style={{
          width: 48,
          height: 1,
          background: '#C9A47E',
          transformOrigin: 'left center',
          marginBottom: '1.25rem',
        }}
      />

      {/* 2 — Section tag */}
      <motion.span
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease, delay: 0.3 }}
        style={{
          display: 'block',
          fontFamily: 'var(--font-inter)',
          fontSize: '0.6875rem',
          textTransform: 'uppercase',
          letterSpacing: '0.14em',
          color: '#9E958C',
          marginBottom: '1rem',
        }}
      >
        SHOP BY OCCASION
      </motion.span>

      {/* 3 — Headline wrapped in a sized container */}
      <div
        style={{
          fontSize: 'clamp(3rem, 6vw, 5rem)',
          marginBottom: '1.25rem',
        }}
      >
        <RevealText
          text="What moment are you gifting for?"
          as="h1"
          delay={0.5}
          className="font-playfair font-[400] leading-[1.08] text-[#2D2926] !text-[1em]"
        />
      </div>

      {/* 4 — Subtitle */}
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease, delay: 0.9 }}
        style={{
          fontFamily: 'var(--font-inter)',
          fontSize: '1.0625rem',
          color: '#6B645D',
          maxWidth: 520,
          lineHeight: 1.7,
          marginBottom: '2.5rem',
        }}
      >
        Every occasion has its own language. We help you speak it perfectly.
      </motion.p>

      {/* 5 — Stats row */}
      <motion.div
        style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', flexWrap: 'wrap' }}
        initial="hidden"
        animate="visible"
        variants={{
          visible: { transition: { staggerChildren: 0.08, delayChildren: 1.1 } },
        }}
      >
        {stats.map((stat, i) => (
          <motion.span
            key={i}
            variants={{
              hidden: { opacity: 0, y: 8 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease } },
            }}
            style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}
          >
            <span
              style={{
                fontFamily: 'var(--font-inter)',
                fontSize: '0.8125rem',
                color: '#9E958C',
              }}
            >
              {stat.value}
            </span>
            {i < stats.length - 1 && (
              <span style={{ color: '#E5DDD3', fontSize: '0.75rem' }}>·</span>
            )}
          </motion.span>
        ))}
      </motion.div>
    </header>
  )
}
