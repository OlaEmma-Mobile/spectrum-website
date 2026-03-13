import { AboutSection } from "@/components/sections/about/about-section";
import { StatsSection } from "@/components/sections/about/stats-section";
import WhySpectrum from "@/components/sections/about/why-spectrum";
import ServiceSection from "@/components/sections/service/service-section";
import { SpectrumHero } from "@/components/sections/spectrum-hero";

export default function Home() {
  return (
    <div className="min-h-screen bg-white font-sans">
      <SpectrumHero />
      <AboutSection />
      <StatsSection />
      <WhySpectrum />
      <ServiceSection />
    </div>
  );
}
