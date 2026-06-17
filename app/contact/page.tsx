"use client";

import { motion } from "framer-motion";
import { CONSTANTS } from "@/lib/constants";
import { fadeUp, staggerContainer } from "@/lib/animations";

export default function ContactPage() {
  const handleWhatsAppChat = () => {
    window.open(`https://wa.me/${CONSTANTS.WHATSAPP_NUMBER.replace('+', '')}`, '_blank');
  };

  return (
    <div className="pt-32 pb-24 bg-background min-h-screen">
      <div className="max-w-[1360px] mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          
          {/* Left: Form */}
          <motion.div 
            className="flex-1"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.h1 variants={fadeUp} className="font-playfair text-[clamp(2.5rem,5vw,4rem)] text-dark mb-4 leading-[1.1]">
              Get In Touch
            </motion.h1>
            <motion.p variants={fadeUp} className="font-inter text-text-secondary mb-10 leading-relaxed max-w-md">
              Whether you have a question about an order, customization options, or simply want to share your story.
            </motion.p>

            <motion.form variants={fadeUp} className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-1">
                  <label className="font-inter text-xs text-text-secondary mb-2 block">Name</label>
                  <input type="text" className="w-full bg-surface border border-border p-4 font-inter text-sm text-dark focus:outline-none focus:border-dark transition-colors rounded-none" />
                </div>
                <div className="flex-1">
                  <label className="font-inter text-xs text-text-secondary mb-2 block">Email</label>
                  <input type="email" className="w-full bg-surface border border-border p-4 font-inter text-sm text-dark focus:outline-none focus:border-dark transition-colors rounded-none" />
                </div>
              </div>
              
              <div>
                <label className="font-inter text-xs text-text-secondary mb-2 block">Subject</label>
                <input type="text" className="w-full bg-surface border border-border p-4 font-inter text-sm text-dark focus:outline-none focus:border-dark transition-colors rounded-none" />
              </div>
              
              <div>
                <label className="font-inter text-xs text-text-secondary mb-2 block">Message</label>
                <textarea rows={5} className="w-full bg-surface border border-border p-4 font-inter text-sm text-dark focus:outline-none focus:border-dark transition-colors rounded-none resize-none"></textarea>
              </div>

              <button className="bg-dark text-surface py-4 font-inter text-[0.875rem] tracking-[0.06em] uppercase hover:bg-rose-gold transition-colors rounded-none w-full md:w-auto md:px-12 self-start">
                Send Message
              </button>
            </motion.form>
          </motion.div>

          {/* Right: Info */}
          <motion.div 
            className="w-full lg:w-[400px] shrink-0 flex flex-col gap-10"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.div variants={fadeUp} className="bg-surface border border-border p-8 flex flex-col gap-6 items-start">
              <div>
                <h3 className="font-inter text-xs uppercase tracking-widest text-text-secondary mb-2">Fastest Response</h3>
                <p className="font-playfair text-2xl text-dark">WhatsApp</p>
              </div>
              <p className="font-inter text-sm text-text-secondary leading-relaxed">
                Our team is available to assist you with orders, customizations, and updates directly on WhatsApp.
              </p>
              <button 
                onClick={handleWhatsAppChat}
                className="w-full bg-whatsapp text-surface py-4 font-inter text-[0.875rem] tracking-[0.06em] uppercase hover:bg-[#1EBE5D] transition-colors rounded-none"
              >
                Chat With Us
              </button>
            </motion.div>

            <motion.div variants={fadeUp}>
              <h3 className="font-inter text-xs uppercase tracking-widest text-text-secondary mb-2">Email</h3>
              <p className="font-playfair text-xl text-dark">{CONSTANTS.SUPPORT_EMAIL}</p>
            </motion.div>

            <motion.div variants={fadeUp}>
              <h3 className="font-inter text-xs uppercase tracking-widest text-text-secondary mb-2">Studio Address</h3>
              <p className="font-inter text-dark leading-relaxed">
                Ru&Ki Studio<br />
                Craftsmen District<br />
                Mumbai, Maharashtra 400001
              </p>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </div>
  );
}
