"use client";

import { Product } from "@/types";
import { CONSTANTS } from "@/lib/constants";
import { Upload, Clock, ShieldCheck, Star } from "lucide-react";
import LuxuryButton from "../ui/LuxuryButton";
import { useState } from "react";

export default function CustomizerPanel({ product }: { product: Product }) {
  const [customText, setCustomText] = useState("");
  const [customMessage, setCustomMessage] = useState("");

  const handleWhatsAppOrder = () => {
    const message = `Hello ${CONSTANTS.STORE_NAME}, I'd like to order the ${product.name}.%0A%0A*Price:* ₹${product.price}%0A*Custom Name:* ${customText || 'None'}%0A*Message:* ${customMessage || 'None'}%0A%0APlease let me know the next steps.`;
    window.open(`https://wa.me/${CONSTANTS.WHATSAPP_NUMBER.replace('+', '')}?text=${message}`, '_blank');
  };

  return (
    <div className="flex flex-col gap-8">
      {/* Header Info */}
      <div>
        <h1 className="font-playfair text-[2.5rem] leading-[1.1] text-dark mb-4">{product.name}</h1>
        <div className="flex items-end gap-4 mb-4">
          <span className="font-inter text-[1.5rem] text-rose-gold">₹{product.price}</span>
          {product.originalPrice && (
            <span className="font-inter text-[1rem] text-text-muted line-through mb-1">
              ₹{product.originalPrice}
            </span>
          )}
        </div>
        <p className="font-inter text-[1rem] text-text-secondary leading-relaxed">
          {product.longDescription}
        </p>
      </div>

      <div className="h-[1px] w-full bg-border" />

      {/* Customization Form */}
      {product.customizable && (
        <div className="flex flex-col gap-6">
          <h3 className="font-inter text-xs uppercase tracking-widest text-dark font-medium">
            Personalize Your Piece
          </h3>

          <div className="border border-dashed border-border bg-background p-8 flex flex-col items-center justify-center text-center cursor-pointer hover:border-champagne transition-colors">
            <Upload className="w-6 h-6 text-champagne mb-3" />
            <p className="font-inter text-sm text-dark font-medium mb-1">Upload Your Photo</p>
            <p className="font-inter text-xs text-text-secondary">Drag & drop or click to browse (JPEG/PNG)</p>
          </div>

          <div className="flex flex-col gap-2">
            <label className="font-inter text-xs text-text-secondary">Add Name / Title</label>
            <input 
              type="text" 
              placeholder="E.g. Sarah & James" 
              className="w-full bg-surface border border-border p-3 font-inter text-sm text-dark focus:outline-none focus:border-dark transition-colors rounded-none"
              value={customText}
              onChange={(e) => setCustomText(e.target.value)}
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="font-inter text-xs text-text-secondary">Add Message (Optional)</label>
            <textarea 
              rows={3}
              placeholder="A short heartfelt message..." 
              className="w-full bg-surface border border-border p-3 font-inter text-sm text-dark focus:outline-none focus:border-dark transition-colors rounded-none resize-none"
              value={customMessage}
              onChange={(e) => setCustomMessage(e.target.value)}
            />
          </div>

          <div className="border border-border bg-surface p-6 text-center">
            <p className="font-playfair italic text-text-muted">
              Your personalized preview will appear here
            </p>
          </div>
        </div>
      )}

      {/* Actions */}
      <div className="flex flex-col gap-4 mt-2">
        <div className="flex items-center gap-2 text-text-secondary font-inter text-sm mb-2">
          <Clock className="w-4 h-4" />
          <span>Delivered in {product.deliveryDays} business days</span>
        </div>
        
        <button 
          onClick={handleWhatsAppOrder}
          className="w-full bg-whatsapp text-surface py-4 font-inter text-[0.875rem] tracking-[0.06em] uppercase hover:bg-[#1EBE5D] transition-colors rounded-none outline-none focus:ring-2 focus:ring-offset-2 focus:ring-whatsapp"
        >
          Order via WhatsApp
        </button>
        
        <LuxuryButton variant="secondary" className="w-full">
          Add Customization Details
        </LuxuryButton>
      </div>

      {/* Trust Signals */}
      <div className="flex items-center justify-between border-t border-border pt-6 mt-2">
        <div className="flex flex-col items-center gap-2 text-center">
          <Star className="w-5 h-5 text-champagne" />
          <span className="font-inter text-[0.6875rem] uppercase tracking-widest text-text-secondary">Premium<br/>Quality</span>
        </div>
        <div className="flex flex-col items-center gap-2 text-center">
          <svg className="w-5 h-5 text-champagne" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" />
          </svg>
          <span className="font-inter text-[0.6875rem] uppercase tracking-widest text-text-secondary">Hand<br/>Crafted</span>
        </div>
        <div className="flex flex-col items-center gap-2 text-center">
          <ShieldCheck className="w-5 h-5 text-champagne" />
          <span className="font-inter text-[0.6875rem] uppercase tracking-widest text-text-secondary">Secure<br/>Checkout</span>
        </div>
      </div>

    </div>
  );
}
