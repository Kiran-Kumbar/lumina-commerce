import { Review } from "@/types";

export default function ReviewCard({ review }: { review: Review }) {
  return (
    <div className="bg-surface border border-border rounded-none p-8 flex flex-col gap-6 h-full shadow-none">
      <div className="flex gap-1 text-champagne">
        {[...Array(5)].map((_, i) => (
          <span key={i} className={i < review.rating ? "opacity-100" : "opacity-30"}>★</span>
        ))}
      </div>
      
      <blockquote className="font-playfair italic text-[1.0625rem] text-dark leading-relaxed flex-1">
        "{review.quote}"
      </blockquote>
      
      <div className="mt-auto border-t border-border pt-4">
        <p className="font-inter text-[0.875rem] text-text-secondary">{review.name}</p>
        <p className="font-inter text-[0.75rem] uppercase tracking-widest text-text-muted mt-1">{review.product}</p>
      </div>
    </div>
  );
}
