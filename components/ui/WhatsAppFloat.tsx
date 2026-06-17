"use client";

import { CONSTANTS } from "@/lib/constants";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function WhatsAppFloat() {
  const [isHovered, setIsHovered] = useState(false);
  const whatsappUrl = `https://wa.me/${CONSTANTS.WHATSAPP_NUMBER.replace('+', '')}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center justify-end">
      {/* Sliding label — only on hover */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: -16 }}
            exit={{ opacity: 0, x: 20 }}
            className="absolute right-full mr-4 whitespace-nowrap bg-surface border border-border px-4 py-2 font-inter text-[0.8125rem] text-dark shadow-sm"
          >
            Order on WhatsApp
          </motion.div>
        )}
      </AnimatePresence>

      {/* Button with pulse ring */}
      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        style={{ position: 'relative', width: 52, height: 52, borderRadius: '50%', background: '#25D366', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
      >
        {/* Pulse ring */}
        <motion.div 
          className="absolute inset-0 rounded-full border border-[#25D366]"
          animate={{ scale: [1, 1.5], opacity: [0.8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeOut" }}
        />
        
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="relative z-10"
        >
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
      </motion.a>
    </div>
  );
}
