'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import RevealText from '@/components/ui/RevealText'

const ease = [0.22, 1, 0.36, 1] as const

export default function CategoryCTA() {
  return (
    <section
      style={{
        background: '#2D2926',
        padding: '4rem 2rem',
      }}
    >
      <div
        style={{
          maxWidth: 1360,
          margin: '0 auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '2rem',
          flexWrap: 'wrap',
        }}
      >
        {/* Left — text content */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
        >
          <motion.span
            variants={{
              hidden: { opacity: 0, y: 10 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease } },
            }}
            style={{
              display: 'block',
              fontFamily: 'var(--font-inter)',
              fontSize: '0.625rem',
              textTransform: 'uppercase',
              letterSpacing: '0.14em',
              color: '#9E958C',
              marginBottom: '0.75rem',
            }}
          >
            CAN&rsquo;T DECIDE?
          </motion.span>

          {/* Headline in a sized wrapper — RevealText doesn't accept style prop */}
          <motion.div
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { duration: 0.01 } },
            }}
            style={{ marginBottom: '0.625rem' }}
          >
            <RevealText
              text="Browse everything we make."
              as="h2"
              delay={0.15}
              className="font-playfair italic font-[400] text-[#FFFCF8] text-[2rem] leading-[1.2]"
            />
          </motion.div>

          <motion.p
            variants={{
              hidden: { opacity: 0, y: 16 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease, delay: 0.3 } },
            }}
            style={{
              fontFamily: 'var(--font-inter)',
              fontSize: '0.9375rem',
              color: 'rgba(246,242,236,0.6)',
              lineHeight: 1.6,
            }}
          >
            All products, all categories — in one place.
          </motion.p>
        </motion.div>

        {/* Right — CTA button */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease, delay: 0.45 }}
        >
          <Link href="/shop">
            <button
              style={{
                padding: '1rem 2.25rem',
                fontFamily: 'var(--font-inter)',
                fontSize: '0.875rem',
                textTransform: 'uppercase',
                letterSpacing: '0.06em',
                color: '#FFFCF8',
                background: 'transparent',
                border: '1px solid #FFFCF8',
                cursor: 'pointer',
                transition: 'background 0.25s ease, border-color 0.25s ease',
                whiteSpace: 'nowrap',
              }}
              onMouseEnter={(e) => {
                const btn = e.currentTarget
                btn.style.background = '#B76E79'
                btn.style.borderColor = '#B76E79'
              }}
              onMouseLeave={(e) => {
                const btn = e.currentTarget
                btn.style.background = 'transparent'
                btn.style.borderColor = '#FFFCF8'
              }}
            >
              View All Products →
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
