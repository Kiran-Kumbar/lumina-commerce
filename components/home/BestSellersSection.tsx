"use client";

import { products } from "@/data/products";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import RevealText from "../ui/RevealText";
import SectionTag from "../ui/SectionTag";
import DragCarousel from "../ui/DragCarousel";

export default function BestSellersSection() {
  const bestSellers = products.slice(0, 6);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const GridContent = () => (
    <div className={!isMobile ? "grid grid-cols-4 gap-6" : "flex"}>
      {bestSellers.map((product) => (
        <div key={product.id} className={isMobile ? "shrink-0 w-[80vw]" : ""}>
          <div className="group bg-[#1E1814] border border-[rgba(229,221,211,0.15)] rounded-none transition-colors duration-600 hover:border-champagne h-full flex flex-col">
            <Link href={`/shop/${product.slug}`} className="block h-full flex flex-col">
              <div className="relative aspect-[4/5] overflow-hidden bg-black/50">
                <div className="absolute inset-0 z-10 matte-overlay pointer-events-none" />
                <Image
                  src={product.images[0]}
                  alt={product.name}
                  fill
                  className="object-cover warm-filter transition-transform duration-600 ease-out group-hover:scale-105"
                  sizes="(max-width: 768px) 80vw, 320px"
                />
              </div>
              
              <div className="p-5 flex flex-col gap-2 flex-grow justify-between">
                <div>
                  <h3 className="font-playfair text-[1.125rem] text-surface mb-1">{product.name}</h3>
                </div>
                <div className="flex justify-between items-end mt-4">
                  <span className="font-inter text-[1rem] text-champagne">₹{product.price}</span>
                  <span className="font-inter text-[0.8125rem] text-[rgba(255,252,248,0.5)] group-hover:text-surface transition-colors">
                    Customize →
                  </span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <section className="py-[clamp(5rem,10vw,9rem)] bg-dark">
      <div className="max-w-[1360px] mx-auto px-6 mb-12 md:mb-16">
        <div>
          <SectionTag className="text-champagne">BEST SELLERS</SectionTag>
          <RevealText 
            text="Crafted With Intention" 
            className="font-playfair text-[clamp(2rem,4vw,3.5rem)] text-surface leading-[1.2]" 
          />
        </div>
      </div>

      <div className="w-full overflow-hidden">
        <div className="pl-6 md:pl-[calc((100vw-1360px)/2+1.5rem)] pr-6 pb-8">
          {isMobile ? (
            <>
              <DragCarousel>
                <GridContent />
              </DragCarousel>
              <div className="text-center mt-6">
                <p className="font-inter text-[0.75rem] text-[#9E958C]">← Drag to explore →</p>
              </div>
            </>
          ) : (
            <GridContent />
          )}
        </div>
      </div>
    </section>
  );
}
