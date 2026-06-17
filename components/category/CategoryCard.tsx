'use client'

import { useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Category } from '@/types'

interface CategoryCardProps {
  category: Category
  index?: number
  priority?: boolean
}

const ease = [0.22, 1, 0.36, 1] as const

const labelVariants = {
  rest: { y: 0 },
  hover: { y: -88 },
}

const panelVariants = {
  rest: { y: '100%' },
  hover: { y: '0%' },
}

const borderVariants = {
  rest: { borderColor: 'rgba(229,221,211,0)' },
  hover: { borderColor: '#C9A47E' },
}

const transition = { duration: 0.4, ease }

export default function CategoryCard({ category, index = 0, priority = false }: CategoryCardProps) {
  const ref = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  const y = useTransform(scrollYProgress, [0, 1], ['-8%', '8%'])

  const aspectRatio = category.tall ? '3 / 4' : '4 / 5'

  return (
    <div ref={ref} id={`category-${category.slug}`} style={{ width: '100%', height: '100%' }}>
      <Link href={`/categories/${category.slug}`} style={{ display: 'block', width: '100%', height: '100%' }}>
        <motion.div
          initial="rest"
          whileHover="hover"
          animate="rest"
          variants={borderVariants}
          transition={transition}
          style={{
            position: 'relative',
            width: '100%',
            aspectRatio,
            overflow: 'hidden',
            cursor: 'pointer',
            border: '1px solid transparent',
          }}
        >
          {/* ── CURTAIN REVEAL ── */}
          <motion.div
            initial={{ clipPath: 'inset(0 100% 0 0)' }}
            whileInView={{ clipPath: 'inset(0 0% 0 0)' }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.85, ease: [0.76, 0, 0.24, 1], delay: index * 0.08 }}
            style={{ position: 'absolute', inset: 0 }}
          >
            {/* Parallax wrapper — 120% tall so travel doesn't expose edges */}
            <motion.div
              style={{
                position: 'absolute',
                top: '-10%',
                left: 0,
                right: 0,
                bottom: '-10%',
                y,
              }}
            >
              <Image
                src={category.image}
                alt={category.name}
                fill
                priority={priority}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                style={{ filter: 'brightness(0.88) saturate(0.85) sepia(0.06)' }}
              />
            </motion.div>
          </motion.div>

          {/* Matte overlay */}
          <div
            className="matte-overlay"
            style={{ position: 'absolute', inset: 0, zIndex: 2, pointerEvents: 'none' }}
          />

          {/* Permanent bottom gradient */}
          <div
            style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              height: '55%',
              background: 'linear-gradient(to top, rgba(45,41,38,0.88) 0%, rgba(45,41,38,0) 100%)',
              zIndex: 3,
            }}
          />

          {/* ── FEATURED BADGE ── */}
          {category.featured && (
            <div
              style={{
                position: 'absolute',
                top: '1rem',
                left: '1rem',
                zIndex: 10,
                background: '#FFFCF8',
                border: '1px solid #E5DDD3',
                padding: '4px 12px',
                fontFamily: 'var(--font-inter)',
                fontSize: '0.625rem',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                color: '#B76E79',
              }}
            >
              MOST LOVED
            </div>
          )}

          {/* ── PERMANENT LABEL — slides up on hover ── */}
          <motion.div
            variants={labelVariants}
            transition={transition}
            style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              padding: '1.5rem',
              zIndex: 5,
            }}
          >
            <p
              style={{
                fontFamily: 'var(--font-playfair)',
                fontSize: '1.375rem',
                color: '#FFFCF8',
                fontWeight: 400,
                margin: 0,
                lineHeight: 1.2,
              }}
            >
              {category.name}
            </p>
            <p
              style={{
                fontFamily: 'var(--font-inter)',
                fontSize: '0.75rem',
                color: 'rgba(255,252,248,0.6)',
                marginTop: 2,
              }}
            >
              {category.productCount} products
            </p>
          </motion.div>

          {/* ── HOVER PANEL — slides up from bottom ── */}
          <motion.div
            variants={panelVariants}
            transition={transition}
            style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              padding: '1.5rem',
              zIndex: 4,
            }}
          >
            <p
              style={{
                fontFamily: 'var(--font-playfair)',
                fontSize: '0.9375rem',
                fontStyle: 'italic',
                color: 'rgba(255,252,248,0.85)',
                marginBottom: '0.875rem',
                lineHeight: 1.4,
              }}
            >
              &ldquo;{category.tagline}&rdquo;
            </p>

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <span
                style={{
                  fontFamily: 'var(--font-inter)',
                  fontSize: '0.75rem',
                  color: 'rgba(255,252,248,0.6)',
                }}
              >
                {category.productCount} products
              </span>
              <span
                style={{
                  fontFamily: 'var(--font-inter)',
                  fontSize: '0.8125rem',
                  color: '#C9A47E',
                  letterSpacing: '0.04em',
                }}
              >
                Explore collection →
              </span>
            </div>
          </motion.div>
        </motion.div>
      </Link>
    </div>
  )
}
