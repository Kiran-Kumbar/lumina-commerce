import Link from "next/link";
import { CONSTANTS } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-dark pt-20 pb-8 text-surface">
      <div className="max-w-[1360px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1">
            <h2 className="font-playfair text-2xl mb-4">{CONSTANTS.STORE_NAME}</h2>
            <p className="font-inter text-sm text-[rgba(246,242,236,0.7)] mb-6">
              {CONSTANTS.STORE_TAGLINE}
            </p>
            <div className="flex flex-col gap-2">
              <span className="font-inter text-xs uppercase tracking-widest text-[rgba(246,242,236,0.7)]">Newsletter</span>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Email Address" 
                  className="bg-transparent border-b border-[rgba(246,242,236,0.3)] text-surface py-2 focus:outline-none focus:border-surface w-full"
                />
                <button className="border-b border-[rgba(246,242,236,0.3)] px-2 hover:text-rose-gold transition-colors">
                  →
                </button>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-inter text-xs uppercase tracking-widest mb-6">About</h3>
            <ul className="flex flex-col gap-4 font-inter text-sm text-[rgba(246,242,236,0.7)]">
              <li><Link href="/about" className="hover:text-surface transition-colors">Our Story</Link></li>
              <li><Link href="/stories" className="hover:text-surface transition-colors">Customer Stories</Link></li>
              <li><Link href="/how-it-works" className="hover:text-surface transition-colors">How It Works</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-inter text-xs uppercase tracking-widest mb-6">Shop</h3>
            <ul className="flex flex-col gap-4 font-inter text-sm text-[rgba(246,242,236,0.7)]">
              <li><Link href="/shop" className="hover:text-surface transition-colors">All Products</Link></li>
              <li><Link href="/categories" className="hover:text-surface transition-colors">Occasions</Link></li>
              <li><Link href="/shop" className="hover:text-surface transition-colors">Corporate Gifting</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-inter text-xs uppercase tracking-widest mb-6">Policies</h3>
            <ul className="flex flex-col gap-4 font-inter text-sm text-[rgba(246,242,236,0.7)]">
              <li><Link href="/faq" className="hover:text-surface transition-colors">FAQ</Link></li>
              <li><Link href="/shipping" className="hover:text-surface transition-colors">Shipping</Link></li>
              <li><Link href="/refund" className="hover:text-surface transition-colors">Returns & Refunds</Link></li>
              <li><Link href="/privacy" className="hover:text-surface transition-colors">Privacy</Link></li>
              <li><Link href="/terms" className="hover:text-surface transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[rgba(246,242,236,0.1)] pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-inter text-xs text-[rgba(246,242,236,0.5)]">
            © {new Date().getFullYear()} {CONSTANTS.STORE_NAME} · Made with intention
          </p>
          <div className="flex gap-4 text-[rgba(246,242,236,0.5)] text-sm">
            <a href="#" className="hover:text-surface">Instagram</a>
            <a href="#" className="hover:text-surface">Pinterest</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
