import { HeroSection } from "@/components/sections/hero/hero-section";
import { ContactUsSection } from "@/components/sections/contact/contact-us-section";

export default function ContactUs() {
    return (
        <div className="min-h-screen bg-white font-sans">
            <HeroSection title="Our Team Are Ready To Assist You"/>
            <ContactUsSection />
        </div>
    );
}
