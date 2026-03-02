

import { CaseStudySection } from "@/components/sections/case-studies/case-study-section";
import { HeroSection } from "@/components/sections/hero/hero-section";

export default function CaseStudies() {
    return (
        <div className="min-h-screen bg-white font-sans">
            <HeroSection/>
            <CaseStudySection />
        </div>
    );
}
