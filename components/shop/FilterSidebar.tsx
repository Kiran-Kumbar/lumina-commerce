'use client'

import { Search, X, Filter } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'

interface FilterSidebarProps {
  categories: string[]
  occasions: string[]
  selectedCategory: string
  selectedOccasion: string
  priceRange: [number, number]
  searchQuery: string
  onSearchChange: (query: string) => void
  onCategoryChange: (cat: string) => void
  onOccasionChange: (occ: string) => void
  onPriceChange: (range: [number, number]) => void
  productCount: number
}

export default function FilterSidebar({
  categories,
  occasions,
  selectedCategory,
  selectedOccasion,
  priceRange,
  searchQuery,
  onSearchChange,
  onCategoryChange,
  onOccasionChange,
  onPriceChange,
  productCount
}: FilterSidebarProps) {
  const [isFocused, setIsFocused] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  
  const hasActiveFilters = selectedCategory !== 'All' || selectedOccasion !== 'All' || priceRange[0] !== 0 || priceRange[1] !== 5000 || searchQuery !== ''

  const clearAll = () => {
    onSearchChange('')
    onCategoryChange('All')
    onOccasionChange('All')
    onPriceChange([0, 5000])
  }

  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>, index: 0 | 1) => {
    const val = parseInt(e.target.value)
    if (index === 0 && val <= priceRange[1]) {
      onPriceChange([val, priceRange[1]])
    } else if (index === 1 && val >= priceRange[0]) {
      onPriceChange([priceRange[0], val])
    }
  }

  const FilterContent = () => (
    <div className="flex flex-col gap-10">
      {/* Search */}
      <div className="relative">
        <div className="relative flex items-center border-b border-border pb-2">
          <Search className="w-4 h-4 text-text-muted mr-3" />
          <input
            type="text"
            placeholder="Search collection..."
            className="w-full bg-transparent font-inter text-[0.9375rem] text-dark placeholder:font-playfair placeholder:italic placeholder:text-text-muted focus:outline-none"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
          />
          <AnimatePresence>
            {searchQuery.length > 0 && (
              <motion.button
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                onClick={() => onSearchChange('')}
                className="absolute right-0 text-text-muted hover:text-dark"
              >
                <X className="w-4 h-4" />
              </motion.button>
            )}
          </AnimatePresence>
        </div>
        <motion.div 
          className="absolute bottom-0 left-0 h-[1px] bg-champagne-gold w-full origin-left"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: isFocused ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        />
      </div>

      {/* Categories */}
      <div>
        <h4 className="font-inter text-[0.625rem] uppercase tracking-[0.1em] text-text-muted mb-3">
          Category
        </h4>
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => onCategoryChange(cat)}
              className={`relative px-4 py-2 font-inter text-[0.8125rem] border border-border transition-colors ${
                selectedCategory === cat ? 'text-surface' : 'text-text-secondary hover:text-dark bg-surface'
              }`}
            >
              {selectedCategory === cat && (
                <motion.div
                  layoutId="active-category"
                  className="absolute inset-0 bg-dark z-0"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
              <span className="relative z-10">{cat}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Occasions */}
      <div>
        <h4 className="font-inter text-[0.625rem] uppercase tracking-[0.1em] text-text-muted mb-3">
          Occasion
        </h4>
        <div className="flex flex-wrap gap-2">
          {occasions.map((occ) => (
            <button
              key={occ}
              onClick={() => onOccasionChange(occ)}
              className={`relative px-4 py-2 font-inter text-[0.8125rem] border border-border transition-colors ${
                selectedOccasion === occ ? 'text-surface' : 'text-text-secondary hover:text-dark bg-surface'
              }`}
            >
              {selectedOccasion === occ && (
                <motion.div
                  layoutId="active-occasion"
                  className="absolute inset-0 bg-dark z-0"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
              <span className="relative z-10">{occ}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Price Range */}
      <div>
        <h4 className="font-inter text-[0.625rem] uppercase tracking-[0.1em] text-text-muted mb-3">
          Price Range
        </h4>
        <div className="relative pt-4 pb-2">
          <div className="absolute top-1/2 left-0 w-full h-1 bg-border -translate-y-1/2 rounded-full" />
          <div 
            className="absolute top-1/2 h-1 bg-dark -translate-y-1/2 rounded-full" 
            style={{ 
              left: `${(priceRange[0] / 5000) * 100}%`,
              right: `${100 - (priceRange[1] / 5000) * 100}%`
            }} 
          />
          <input
            type="range"
            min="0"
            max="5000"
            step="100"
            value={priceRange[0]}
            onChange={(e) => handlePriceChange(e, 0)}
            className="absolute top-1/2 -translate-y-1/2 w-full appearance-none bg-transparent pointer-events-none [&::-webkit-slider-thumb]:pointer-events-auto [&::-webkit-slider-thumb]:w-3.5 [&::-webkit-slider-thumb]:h-3.5 [&::-webkit-slider-thumb]:bg-dark [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-none"
          />
          <input
            type="range"
            min="0"
            max="5000"
            step="100"
            value={priceRange[1]}
            onChange={(e) => handlePriceChange(e, 1)}
            className="absolute top-1/2 -translate-y-1/2 w-full appearance-none bg-transparent pointer-events-none [&::-webkit-slider-thumb]:pointer-events-auto [&::-webkit-slider-thumb]:w-3.5 [&::-webkit-slider-thumb]:h-3.5 [&::-webkit-slider-thumb]:bg-dark [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-none"
          />
        </div>
        <div className="font-inter text-[0.875rem] text-text-secondary mt-2 text-center">
          ₹{priceRange[0]} — ₹{priceRange[1]}
        </div>
      </div>

      {/* Footer */}
      <div className="pt-6 border-t border-border flex items-center justify-between">
        <span className="font-inter text-[0.8125rem] text-text-secondary">
          Showing {productCount} products
        </span>
        <AnimatePresence>
          {hasActiveFilters && (
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={clearAll}
              className="font-inter text-[0.8125rem] text-text-muted hover:text-dark transition-colors"
            >
              Clear filters
            </motion.button>
          )}
        </AnimatePresence>
      </div>
    </div>
  )

  return (
    <>
      {/* Desktop Sidebar */}
      <div className="hidden lg:block w-64 shrink-0 sticky top-24 pb-12 self-start">
        <FilterContent />
      </div>

      {/* Mobile Filter Bar */}
      <div className="lg:hidden sticky top-[60px] z-30 bg-background/95 backdrop-blur-sm border-b border-border py-3 px-6 flex justify-between items-center w-full">
        <div className="font-inter text-[0.8125rem] text-text-secondary">
          {productCount} products
        </div>
        <button 
          onClick={() => setMobileOpen(true)}
          className="flex items-center gap-2 font-inter text-[0.8125rem] text-dark border border-border px-4 py-2 bg-surface hover:bg-border/50 transition-colors"
        >
          <Filter className="w-3.5 h-3.5" />
          Filter
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
              className="fixed inset-0 bg-dark/50 z-40 lg:hidden"
            />
            <motion.div
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              exit={{ y: '100%' }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed bottom-0 left-0 w-full max-h-[85vh] overflow-y-auto bg-surface rounded-t-lg z-50 p-6 lg:hidden shadow-[0_-10px_40px_rgba(0,0,0,0.1)]"
            >
              <div className="flex justify-between items-center mb-8">
                <h3 className="font-playfair text-xl text-dark">Filters</h3>
                <button onClick={() => setMobileOpen(false)} className="text-text-muted hover:text-dark">
                  <X className="w-5 h-5" />
                </button>
              </div>
              <FilterContent />
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
