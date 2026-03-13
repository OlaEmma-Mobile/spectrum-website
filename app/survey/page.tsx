import { HeroSection } from "@/components/sections/hero/hero-section";
import { SurveyFormSection } from "@/components/sections/survey/survey-form-section";

export default function SurveyPage() {
    return (
        <div className="min-h-screen bg-white font-sans">
            <HeroSection
                title="RICS HomeBuyers Survey"
                description={
                    <div className="text-center max-w-2xl mt-2 mx-auto">
                        <p className="text-muted-foreground">
                            You should choose a RICS HomeBuyers Report if you need more information when buying a conventional house, flat or bungalow.
                        </p>
                        <p className="text-muted-foreground">
                            An RICS HomeBuyers Report provides a more detailed assessment.
                        </p>
                    </div>
                }
            />
            
            <SurveyFormSection />
            
        </div>
    );
}
