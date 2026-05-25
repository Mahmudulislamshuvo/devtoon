import CTASection from "@/components/home/CTASection";
import FeatureGrid from "@/components/home/FeatureGrid";
import HeroSection from "@/components/home/HeroSection";

export default function Home() {
  return (
    <div className="relative">
      {/* <!-- Background Orbs --> */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-primary/10 blur-[120px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[30%] h-[30%] rounded-full bg-secondary/10 blur-[100px]"></div>
      </div>
      {/* <!-- Hero Section --> */}
      <HeroSection />
      {/* <!-- Features Bento Grid --> */}
      <FeatureGrid />
      {/* <!-- CTA Section --> */}
      <CTASection />
    </div>
  );
}
