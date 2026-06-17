import { categories } from '@/data/categories'
import CategoryCard from '@/components/category/CategoryCard'

export default function CategoriesGrid() {
  const [birthday, anniversary, wedding, couple, baby, corporate] = categories

  return (
    <>
      {/* ── DESKTOP: 12-column editorial grid ── */}
      <div
        className="categories-grid-desktop"
        style={{
          maxWidth: 1360,
          margin: '0 auto',
          padding: '2.5rem 2rem',
        }}
      >
        {/* Desktop layout */}
        <div
          className="hidden lg:grid"
          style={{
            gridTemplateColumns: 'repeat(12, 1fr)',
            gridTemplateRows: 'auto auto',
            gap: '1.5rem',
          }}
        >
          {/* Birthday — featured hero, spans 2 rows */}
          <div style={{ gridColumn: '1 / 6', gridRow: '1 / 3' }}>
            <CategoryCard category={birthday} index={0} priority />
          </div>

          {/* Anniversary — top right of middle */}
          <div style={{ gridColumn: '6 / 10', gridRow: '1 / 2' }}>
            <CategoryCard category={anniversary} index={1} priority />
          </div>

          {/* Wedding — tall, spans 2 rows, far right */}
          <div style={{ gridColumn: '10 / 13', gridRow: '1 / 3' }}>
            <CategoryCard category={wedding} index={2} />
          </div>

          {/* Couple — bottom middle-left */}
          <div style={{ gridColumn: '6 / 9', gridRow: '2 / 3' }}>
            <CategoryCard category={couple} index={3} />
          </div>

          {/* Baby — bottom middle */}
          <div style={{ gridColumn: '9 / 11', gridRow: '2 / 3' }}>
            <CategoryCard category={baby} index={4} />
          </div>

          {/* Corporate — bottom middle-right */}
          <div style={{ gridColumn: '11 / 13', gridRow: '2 / 3' }}>
            <CategoryCard category={corporate} index={5} />
          </div>
        </div>

        {/* ── TABLET: 2-column grid ── */}
        <div
          className="hidden md:grid lg:hidden"
          style={{
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '1.5rem',
          }}
        >
          {categories.map((cat, i) => (
            <CategoryCard key={cat.id} category={cat} index={i} priority={i < 2} />
          ))}
        </div>

        {/* ── MOBILE: single column ── */}
        <div
          className="grid md:hidden"
          style={{
            gridTemplateColumns: '1fr',
            gap: '1.25rem',
          }}
        >
          {categories.map((cat, i) => (
            <CategoryCard key={cat.id} category={cat} index={i} priority={i === 0} />
          ))}
        </div>
      </div>
    </>
  )
}
