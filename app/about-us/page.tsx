import { AboutSection } from "@/components/sections/about/about-section";
import { StatsSection } from "@/components/sections/about/stats-section";
import WhySpectrum from "@/components/sections/about/why-spectrum";
import { HeroSection } from "@/components/sections/hero/hero-section";
import ReachSection from "@/components/sections/service/reach-section";
import ServiceSection from "@/components/sections/service/service-section";

export default function Home() {
  return (
    <div className="min-h-screen bg-white font-sans">
      <HeroSection image={"/images/about-us.png"} />
      <AboutSection />
      <ReachSection />
      <StatsSection />
      <WhySpectrum />
      <ServiceSection />
    </div>
  );
}
