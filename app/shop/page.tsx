'use client'

import { useState, useMemo, useCallback } from "react"
import { products } from "@/data/products"
import ShopHeader from "@/components/shop/ShopHeader"
import FilterSidebar from "@/components/shop/FilterSidebar"
import ProductGrid from "@/components/shop/ProductGrid"

type SortOption = 'featured' | 'price-asc' | 'price-desc' | 'newest'

export default function ShopPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All')
  const [selectedOccasion, setSelectedOccasion] = useState<string>('All')
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 5000])
  const [searchQuery, setSearchQuery] = useState<string>('')
  const [sortBy, setSortBy] = useState<SortOption>('featured')

  // Derive unique categories and occasions
  const categories = useMemo(() => ["All", ...Array.from(new Set(products.map(p => p.category)))], [])
  
  const occasions = useMemo(() => {
    const occs = new Set<string>()
    products.forEach(p => p.occasion.forEach(o => occs.add(o)))
    return ["All", ...Array.from(occs)]
  }, [])

  const filteredProducts = useMemo(() => {
    return products
      .filter(p => selectedCategory === 'All' || p.category === selectedCategory)
      .filter(p => selectedOccasion === 'All' || p.occasion.includes(selectedOccasion))
      .filter(p => p.price >= priceRange[0] && p.price <= priceRange[1])
      .filter(p => searchQuery === '' ||
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (p.tags && p.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()))) ||
        p.category.toLowerCase().includes(searchQuery.toLowerCase())
      )
      .sort((a, b) => {
        if (sortBy === 'price-asc') return a.price - b.price
        if (sortBy === 'price-desc') return b.price - a.price
        // Assume id maps roughly to newest, or fallback
        if (sortBy === 'newest') return parseInt(b.id) - parseInt(a.id)
        // Default: featured
        return (b.badge ? 1 : 0) - (a.badge ? 1 : 0)
      })
  }, [selectedCategory, selectedOccasion, priceRange, searchQuery, sortBy])

  const handleClearFilters = useCallback(() => {
    setSelectedCategory('All')
    setSelectedOccasion('All')
    setPriceRange([0, 5000])
    setSearchQuery('')
  }, [])

  return (
    <div className="bg-background min-h-screen">
      <ShopHeader productCount={products.length} />
      
      <div className="max-w-[1360px] mx-auto px-6 py-12 flex flex-col lg:flex-row gap-12 items-start relative">
        <FilterSidebar 
          categories={categories}
          occasions={occasions}
          selectedCategory={selectedCategory}
          selectedOccasion={selectedOccasion}
          priceRange={priceRange}
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          onCategoryChange={setSelectedCategory}
          onOccasionChange={setSelectedOccasion}
          onPriceChange={setPriceRange}
          productCount={filteredProducts.length}
        />
        
        <div className="flex-1 w-full lg:w-auto">
          <ProductGrid 
            products={filteredProducts}
            sortBy={sortBy}
            onSortChange={setSortBy}
            onClearFilters={handleClearFilters}
          />
        </div>
      </div>
    </div>
  )
}
