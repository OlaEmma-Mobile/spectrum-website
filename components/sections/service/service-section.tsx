import { DelightText, SuisseIntlText } from "@/components/fonts";
import Image from "next/image";
import Link from "next/link";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/animations/fade-in";

const services = [
    {
        title: "Building Surveys & Inspections",
        image: "/sections/services/service1.jpg",
        description: "Making property decisions without the right knowledge can be costly — not just financially, but also in terms of time, stress, and long-term liability.",
    },
    {
        title: "Defects Analysis & Maintenance",
        image: "/sections/services/service2.jpg",
        description: "Identify and resolve structural issues with our comprehensive defect analysis and planned maintenance strategies.",
    },
    {
        title: "Design & Project Management",
        image: "/sections/services/service3.jpg",
        description: "From concept to completion, we manage your design and construction projects with precision and expertise.",
    },
    {
        title: "Dilapidations & Lease Advice",
        image: "/sections/services/service4.png",
        description: "Expert guidance on lease obligations, schedules of condition, and dilapidations claims for landlords and tenants.",
    },
    {
        title: "Party Wall & Neighbouring Matters",
        image: "/sections/services/service5.jpg",
        description: "Professional advice and dispute resolution for party wall matters, boundary issues, and rights of light.",
    },
    {
        title: "Refurbishment & Conservation",
        image: "/sections/services/service6.jpg",
        description: "Specialist services for the sympathetic restoration, conservation, and adaptation of historic buildings.",
    },
    {
        title: "Expert Witness",
        image: "/sections/services/service7.jpg",
        description: "Independent, impartial expert witness reports and testimony for building-related disputes and litigation.",
    },
    {
        title: "Insurance",
        image: "/sections/services/service8.jpg",
        description: "Accurate reinstatement cost assessments and expert support for complex insurance claims.",
    },
    {
        title: "Stock Condition Surveys",
        image: "/sections/services/service9.png",
        description: "Data-driven insight into portfolio condition, compliance, and lifecycle performance for smarter decisions.",
    },
];

export default function ServicesSection() {
    return (
        <section className="bg-black text-white py-16 px-6 lg:px-20">
            <div className="max-w-7xl mx-auto text-center">
                {/* Top Small Label */}
                <FadeIn delay={0.1}>
                    <p className="text-sm tracking-widest font-mono uppercase text-gray-400 mb-4">
                        Our Services
                    </p>
                </FadeIn>

                {/* Heading */}
                <FadeIn delay={0.2}>
                    <DelightText weight="bold" className="text-3xl md:text-5xl font-bold leading-tight mb-6">
                        Trusted Experts In{" "}
                        <span className="text-primary">Building Surveying</span>
                    </DelightText>
                </FadeIn>

                {/* Description */}
                <FadeIn delay={0.3}>
                    <p className="text-muted max-w-2xl mx-auto mb-12 text-sm md:text-base">
                        At Spectrum, we are surveyors, consultants and project managers, proud of
                        all we do and ready to support you from one end of the spectrum to the
                        other.
                    </p>
                </FadeIn>

                {/* Grid */}
                <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
                    {services.map((service, index) => (
                        <StaggerItem
                            key={index}
                            className="relative group overflow-hidden h-[300px]"
                        >
                            <Image
                                src={service.image}
                                alt={service.title}
                                fill
                                className="object-cover transform group-hover:scale-105 transition duration-500"
                            />

                            {/* Base Overlay */}
                            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/70 transition-colors duration-500"></div>

                            {/* Default State - Title at top left */}
                            <div className="absolute inset-x-0 inset-y-0 p-6 flex flex-col justify-start transition-opacity duration-300 group-hover:opacity-0">
                                <h3 className="text-xl font-semibold text-white">
                                    {service.title}
                                </h3>
                            </div>

                            {/* Hover State Content */}
                            <div className="absolute inset-0 p-6 flex flex-col justify-between opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                                <div>
                                    <SuisseIntlText weight="bold" className="text-xl font-semibold text-white mb-4">
                                        {service.title}
                                    </SuisseIntlText>
                                    <SuisseIntlText weight="medium" className="text-sm font-normal text-white mb-4">
                                        {service.description}
                                    </SuisseIntlText>
                                </div>

                                <Link href={`/services?tab=${index}`} className="w-full bg-primary hover:bg-primary/90 text-black font-semibold py-3 px-4 flex items-center justify-center gap-2 transition-colors">
                                    Read more
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="12" cy="12" r="10" fill="black" />
                                        <path d="M10 8L14 12L10 16" stroke="currentColor" className="text-primary" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </Link>
                            </div>
                        </StaggerItem>
                    ))}
                </StaggerContainer>
            </div>
        </section>
    );
}
