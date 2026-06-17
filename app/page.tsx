import HeroSection from "@/components/home/HeroSection";
import OccasionsSection from "@/components/home/OccasionsSection";
import BestSellersSection from "@/components/home/BestSellersSection";
import HowItWorksSection from "@/components/home/HowItWorksSection";
import CustomerStoriesSection from "@/components/home/CustomerStoriesSection";
import InstagramGrid from "@/components/home/InstagramGrid";
import CTASection from "@/components/home/CTASection";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection />
      <OccasionsSection />
      <BestSellersSection />
      <HowItWorksSection />
      <CustomerStoriesSection />
      <InstagramGrid />
      <CTASection />
    </div>
  );
}
