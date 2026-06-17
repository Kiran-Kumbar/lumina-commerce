import React from 'react';
import { cn } from '@/lib/utils';
import { motion, HTMLMotionProps } from 'framer-motion';

export interface LuxuryButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost';
  children: React.ReactNode;
}

const LuxuryButton = React.forwardRef<HTMLButtonElement, LuxuryButtonProps>(
  ({ className, variant = 'primary', children, ...props }, ref) => {
    
    const baseStyles = "px-8 py-3.5 font-inter text-[0.875rem] tracking-[0.06em] uppercase cursor-pointer transition-colors duration-300 ease-out border-none rounded-none outline-none focus:ring-2 focus:ring-offset-1 focus:ring-dark";
    
    const variants = {
      primary: "bg-dark text-surface hover:bg-rose-gold",
      secondary: "bg-transparent border border-dark text-dark hover:bg-dark hover:text-surface",
      ghost: "bg-transparent text-text-secondary hover:text-text-primary hover:underline underline-offset-4"
    };

    // Note: The secondary variant needs the border class.
    const secondaryStyle = variant === 'secondary' ? "border border-dark hover:border-dark" : "";

    return (
      <button
        ref={ref}
        className={cn(baseStyles, variants[variant], secondaryStyle, className)}
        {...props}
      >
        {children}
      </button>
    );
  }
);

LuxuryButton.displayName = "LuxuryButton";

export default LuxuryButton;
