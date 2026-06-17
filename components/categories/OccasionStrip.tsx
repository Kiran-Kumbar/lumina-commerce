'use client'

import { useState, useEffect, useCallback } from 'react'
import { motion } from 'framer-motion'

const occasions = [
  { label: 'A Birthday', slug: 'birthday' },
  { label: 'An Anniversary', slug: 'anniversary' },
  { label: 'A Wedding', slug: 'wedding' },
  { label: 'For Couples', slug: 'couple' },
  { label: 'A New Baby', slug: 'baby' },
  { label: 'Your Team', slug: 'corporate' },
]

export default function OccasionStrip() {
  const [active, setActive] = useState<string | null>(null)

  const handleClick = useCallback((slug: string) => {
    setActive(slug)
    const el = document.getElementById(`category-${slug}`)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 1.3 }}
      style={{
        borderTop: '1px solid #E5DDD3',
        borderBottom: '1px solid #E5DDD3',
        background: '#FFFCF8',
      }}
    >
      <div
        style={{
          display: 'flex',
          overflowX: 'auto',
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
        }}
      >
        {occasions.map((item, i) => (
          <button
            key={item.slug}
            onClick={() => handleClick(item.slug)}
            style={{
              flexShrink: 0,
              padding: '1.25rem 2rem',
              fontFamily: 'var(--font-inter)',
              fontSize: '0.8125rem',
              color: active === item.slug ? '#2D2926' : '#6B645D',
              background: 'transparent',
              border: 'none',
              borderRight: i < occasions.length - 1 ? '1px solid #E5DDD3' : 'none',
              borderBottom: active === item.slug ? '2px solid #B76E79' : '2px solid transparent',
              cursor: 'pointer',
              transition: 'color 0.2s ease, background 0.2s ease, border-bottom 0.2s ease',
              whiteSpace: 'nowrap',
            }}
            onMouseEnter={(e) => {
              if (active !== item.slug) {
                ;(e.currentTarget as HTMLButtonElement).style.color = '#2D2926'
                ;(e.currentTarget as HTMLButtonElement).style.background = '#F6F2EC'
              }
            }}
            onMouseLeave={(e) => {
              if (active !== item.slug) {
                ;(e.currentTarget as HTMLButtonElement).style.color = '#6B645D'
                ;(e.currentTarget as HTMLButtonElement).style.background = 'transparent'
              }
            }}
          >
            {item.label}
          </button>
        ))}
      </div>
    </motion.div>
  )
}
