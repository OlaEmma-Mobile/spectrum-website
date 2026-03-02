import { HeroSection } from "@/components/sections/hero/hero-section";
import ServiceDetailSection from "@/components/sections/service/service-details";
import { Suspense } from "react";

export default function Home() {
    return (
        <div className="min-h-screen bg-white font-sans">
            <HeroSection>
                <Suspense fallback={<div className="h-96 w-full flex items-center justify-center">Loading services...</div>}>
                    <ServiceDetailSection />
                </Suspense>
            </HeroSection>
        </div>
    );
}
