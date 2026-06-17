"use client";

import Image from "next/image";
import RevealText from "../ui/RevealText";
import SectionTag from "../ui/SectionTag";

const steps = [
  { title: "Choose Product", desc: "Select from our curated collection of premium matte-finish gifts.", image: "/images/process/choose.png" },
  { title: "Upload Photo", desc: "Share your high-resolution memories. Our team will enhance them for print.", image: "/images/process/upload.png" },
  { title: "Customize", desc: "Add personal names, dates, or heartfelt messages.", image: "/images/process/customize.png" },
  { title: "We Craft It", desc: "Each piece is intentionally crafted and quality-checked by hand.", image: "/images/process/craft.png" },
  { title: "Delivered To You", desc: "Securely packaged and delivered to their doorstep in 3-5 days.", image: "/images/process/deliver.png" }
];

export default function HowItWorksSection() {
  return (
    <section className="bg-background relative">
      <div className="pt-[clamp(5rem,10vw,9rem)] pb-16 px-6 max-w-[1360px] mx-auto text-center relative z-20">
        <SectionTag className="text-text-secondary">THE PROCESS</SectionTag>
        <RevealText 
          text="From Your Hands To Their Heart" 
          className="font-playfair text-[clamp(2rem,4vw,3.5rem)] text-dark leading-[1.2]" 
        />
      </div>

      <div className="w-full relative bg-dark">
        {steps.map((step, index) => (
          <div 
            key={index}
            className="sticky top-0 flex items-center justify-center w-full h-screen overflow-hidden"
          >
            {/* Background Image with Matte Overlay */}
            <div className="absolute inset-0 z-0">
              <Image 
                src={step.image} 
                alt={step.title} 
                fill 
                className="object-cover" 
                sizes="100vw"
                priority={index === 0}
              />
              {/* Brand-compliant Matte Overlays */}
              <div className="absolute inset-0 bg-[#F6F2EC]/40 mix-blend-multiply"></div>
              <div className="absolute inset-0 bg-dark/20"></div>
            </div>

            {/* Content Card */}
            <div 
              className="relative z-10 bg-transparent border border-surface/20 p-8 md:p-14 w-[min(640px,90vw)] shadow-none flex flex-col items-center text-center"
            >
              <div className="font-playfair text-[4rem] md:text-[5rem] text-surface/60 mb-4 leading-none">
                0{index + 1}
              </div>
              <h3 className="font-playfair text-[1.75rem] md:text-[2rem] text-surface mb-4 drop-shadow-md">
                {step.title}
              </h3>
              <p className="font-inter text-[1rem] text-surface/90 leading-relaxed max-w-md drop-shadow-md">
                {step.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
