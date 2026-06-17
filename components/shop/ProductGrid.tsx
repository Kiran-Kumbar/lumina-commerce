'use client'

import { Product } from "@/types"
import ProductCard from "../product/ProductCard"
import { motion, AnimatePresence } from "framer-motion"

interface ProductGridProps {
  products: Product[]
  sortBy: string
  onSortChange: (sort: 'featured' | 'price-asc' | 'price-desc' | 'newest') => void
  onClearFilters: () => void
}

export default function ProductGrid({ products, sortBy, onSortChange, onClearFilters }: ProductGridProps) {
  return (
    <div className="flex flex-col w-full pb-20">
      
      {/* Top Bar (Sort) */}
      <div className="flex justify-end mb-6">
        <select 
          value={sortBy}
          onChange={(e) => onSortChange(e.target.value as any)}
          className="bg-transparent border-b border-border pb-1 font-inter text-[0.8125rem] text-[#6B645D] focus:outline-none appearance-none pr-4 cursor-pointer hover:text-dark transition-colors"
          style={{ backgroundImage: 'linear-gradient(45deg, transparent 50%, currentColor 50%), linear-gradient(135deg, currentColor 50%, transparent 50%)', backgroundPosition: 'calc(100% - 5px) calc(1em + 2px), calc(100% - 1px) calc(1em + 2px)', backgroundSize: '4px 4px, 4px 4px', backgroundRepeat: 'no-repeat' }}
        >
          <option value="featured">Sort by: Featured</option>
          <option value="price-asc">Price: Low to High</option>
          <option value="price-desc">Price: High to Low</option>
          <option value="newest">Newest</option>
        </select>
      </div>

      {/* Grid */}
      {products.length > 0 ? (
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 items-start">
          <AnimatePresence mode="popLayout">
            {products.map((product, i) => {
              // Editorial layout logic (desktop)
              const isFirstFeatured = i === 0 && sortBy === 'featured'
              const columnSpanClass = isFirstFeatured ? 'lg:col-span-2' : ''
              // Taller aspect ratio handling can be added here or in ProductCard 
              // for simplicity we are using the columnSpan to give it more weight
              
              return (
                <motion.div
                  key={product.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95, y: -10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: -10 }}
                  transition={{ 
                    duration: 0.4, 
                    delay: i * 0.07, 
                    type: "spring", 
                    stiffness: 300, 
                    damping: 30 
                  }}
                  className={`${columnSpanClass}`}
                >
                  <ProductCard product={product} index={i} priority={i < 3} />
                </motion.div>
              )
            })}
          </AnimatePresence>
        </motion.div>
      ) : (
        <div className="flex flex-col items-center justify-center py-24 text-center border border-border bg-surface/50">
          <h3 className="font-playfair text-[1.5rem] text-dark mb-2">
            Nothing found in this collection.
          </h3>
          <p className="font-inter text-text-secondary mb-6">
            Try a different category or clear your filters.
          </p>
          <button 
            onClick={onClearFilters}
            className="font-inter text-[0.8125rem] uppercase tracking-widest text-dark border-b border-dark pb-1"
          >
            Clear Filters
          </button>
        </div>
      )}

    </div>
  )
}
