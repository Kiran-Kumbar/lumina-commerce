'use client'

import Image from "next/image"
import Link from "next/link"
import { Product } from "@/types"
import { Heart, Clock } from "lucide-react"
import { motion } from "framer-motion"

export default function ProductCard({ 
  product, 
  index = 0,
  priority = false 
}: { 
  product: Product
  index?: number
  priority?: boolean 
}) {
  return (
    <motion.article 
      whileHover={{ borderColor: '#C9A47E' }}
      className="group relative flex flex-col w-full border-transparent border transition-colors duration-300 pb-2"
    >
      <Link href={`/shop/${product.slug}`} className="block relative w-full aspect-[4/5] overflow-hidden bg-[#F6F2EC]">
        {/* Wishlist Heart */}
        <button className="absolute top-3 right-3 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Heart className="w-[18px] h-[18px] text-[#B76E79]" />
        </button>

        {/* Badge */}
        {product.badge && (
          <div className="absolute top-3 left-3 bg-[#FFFCF8] border border-[#E5DDD3] text-[#6B645D] font-inter text-[0.625rem] uppercase tracking-widest px-[10px] py-[4px] z-20">
            {product.badge}
          </div>
        )}

        {/* Image */}
        <Image
          src={product.images[0]}
          alt={product.name}
          fill
          priority={priority}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />

        {/* Hover Info Panel */}
        <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-dark/60 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-300 z-10 flex justify-between items-end">
          <span className="font-inter text-[0.75rem] text-surface/90 uppercase tracking-wider">
            {product.category}
          </span>
          <span className="font-inter text-[0.8125rem] text-surface underline decoration-white/50 underline-offset-4">
            Quick View →
          </span>
        </div>
      </Link>

      <div className="pt-4 flex flex-col gap-1.5 px-0">
        <h3 className="font-playfair text-[1.0625rem] text-dark truncate">
          {product.name}
        </h3>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="font-inter text-[0.9375rem] text-[#B76E79]">
              ₹{product.price}
            </span>
            {product.originalPrice && (
              <span className="font-inter text-[0.8125rem] text-[#9E958C] line-through">
                ₹{product.originalPrice}
              </span>
            )}
          </div>
          <Link href={`/shop/${product.slug}`} className="font-inter text-[0.75rem] text-[#6B645D] hover:text-dark transition-colors">
            Customize →
          </Link>
        </div>

        <div className="flex items-center gap-1.5 mt-1 text-[#9E958C]">
          <Clock className="w-3 h-3" />
          <span className="font-inter text-[0.6875rem]">
            Delivered in {product.deliveryDays} days
          </span>
        </div>
      </div>
    </motion.article>
  )
}
