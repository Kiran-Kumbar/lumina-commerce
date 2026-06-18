"use client";

import Link from "next/link";
import { CONSTANTS } from "@/lib/constants";
import { Search, Menu, X } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import MagneticButton from "../ui/MagneticButton";
import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();
  
  const navBg = useTransform(scrollY, [0, 80], ['rgba(246,242,236,0)', 'rgba(246,242,236,0.96)']);
  const navBorderOpacity = useTransform(scrollY, [0, 80], [0, 1]);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() || 0;
    
    // If at the very top, always show
    if (latest < 50) {
      setHidden(false);
    } 
    // If scrolling down and past the threshold, hide
    else if (latest > previous && latest > 150) {
      setHidden(true);
    }
    // If scrolling up, show
    else if (latest < previous) {
      setHidden(false);
    }
  });

  const navLinks = [
    { name: "Shop", href: "/shop" },
    { name: "Categories", href: "/categories" },
    { name: "Stories", href: "/stories" },
    { name: "About", href: "/about" },
  ];

  return (
    <>
      <motion.header
        style={{ backgroundColor: navBg }}
        variants={{
          visible: { y: 0 },
          hidden: { y: "-100%" }
        }}
        animate={hidden ? "hidden" : "visible"}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }} // Premium smooth easing
        className="fixed top-0 left-0 right-0 z-40 transition-colors duration-300"
      >
        <motion.div 
          className="absolute bottom-0 left-0 right-0 h-[1px] bg-border"
          style={{ opacity: navBorderOpacity }}
        />
        <div className="max-w-[1360px] mx-auto px-6 h-20 flex items-center justify-between relative z-10">
          <div className="flex items-center gap-8">
            <Link href="/" className="font-playfair text-2xl text-dark tracking-[0.2em] uppercase font-semibold hover:opacity-80 transition-opacity">
              {CONSTANTS.STORE_NAME}
            </Link>
            
            <nav className="hidden md:flex items-center gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="font-inter text-[0.875rem] text-text-secondary hover:text-text-primary transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

          <div className="hidden md:flex items-center gap-6">
            <button aria-label="Search" className="text-text-secondary hover:text-dark transition-colors">
              <Search size={20} />
            </button>
            <MagneticButton>
              <Link
                href="/shop"
                className="bg-dark text-surface px-5 py-2.5 font-inter text-[0.875rem] tracking-[0.06em] uppercase hover:bg-rose-gold transition-colors duration-300 inline-block"
              >
                Create Gift
              </Link>
            </MagneticButton>
          </div>

          <button
            className="md:hidden text-dark"
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open Menu"
          >
            <Menu size={24} />
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu Drawer */}
      <div
        className={cn(
          "fixed inset-0 z-50 bg-dark/20 transition-opacity duration-300",
          mobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
        onClick={() => setMobileMenuOpen(false)}
      >
        <div
          className={cn(
            "absolute right-0 top-0 bottom-0 w-[80vw] max-w-sm bg-surface p-6 transition-transform duration-300 ease-in-out",
            mobileMenuOpen ? "translate-x-0" : "translate-x-full"
          )}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex justify-end">
            <button onClick={() => setMobileMenuOpen(false)} className="text-dark">
              <X size={24} />
            </button>
          </div>
          
          <nav className="mt-12 flex flex-col gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="font-playfair text-2xl text-dark"
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/shop"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-6 bg-dark text-surface px-6 py-4 font-inter text-sm tracking-widest uppercase text-center"
            >
              Create Gift
            </Link>
          </nav>
        </div>
      </div>
    </>
  );
}
