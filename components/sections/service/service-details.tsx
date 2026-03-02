"use client";

import Image from "next/image";
import { useState } from "react";
import {
    Building2,
    AlertTriangle,
    DraftingCompass,
    FileWarning,
    Users,
    Hammer,
    ShieldCheck,
    Shield,
    ChevronDown,
} from "lucide-react";
import { DelightText, SuisseIntlText } from "@/components/fonts";
import { AnimatePresence, motion } from "framer-motion";
import { useSearchParams } from "next/navigation";

const categories = [
    {
        name: "Building Surveys & Inspections",
        icon: Building2,
        image: "/sections/services/building.png",
        content: [
            "Making property decisions without the right knowledge can be costly — not just financially, but also in terms of time, stress, and long-term liability. Buildings often hide issues that are invisible at first glance: structural weaknesses, outdated systems, or maintenance backlogs that can escalate into major expenses.",
            "Our role is to uncover those risks and give you certainty, clarity, and confidence before you commit. We go beyond ticking boxes — every survey we deliver provides a full picture of the property’s condition, future liabilities, and opportunities."
        ]
    },
    {
        name: "Defects Analysis & Maintenance",
        icon: AlertTriangle,
        image: "/sections/services/service1.jpg",
        content: [
            "Identifying and diagnosing building defects early is critical to preventing minor issues from becoming major, costly repairs. From damp and cracking to roofing and structural movement, we provide expert analysis and actionable recommendations.",
            "We employ state-of-the-art diagnostic tools to identify the root cause of defects, design effective repair specifications, and help you establish a proactive maintenance plan to protect your investment."
        ]
    },
    {
        name: "Design & Project Management",
        icon: DraftingCompass,
        image: "/sections/services/service2.jpg",
        content: [
            "Transforming your vision into reality requires careful planning, design precision, and rigorous project management. We guide you through the entire lifecycle of your project, from initial concept and feasibility studies to final delivery.",
            "Our project managers keep budgets in check and timelines on track, coordinating with contractors and stakeholders to ensure a seamless execution while maintaining the highest quality standards."
        ]
    },
    {
        name: "Dilapidations & Lease Advice",
        icon: FileWarning,
        image: "/sections/services/building.png",
        content: [
            "Navigating lease obligations and end-of-lease dilapidation claims can be complex and financially significant for both landlords and tenants. We provide strategic advice to help you minimize liabilities and negotiate favorable settlements.",
            "Whether you need a Schedule of Dilapidations prepared or require a robust defense against a claim, our experts offer clear, commercially-focused guidance tailored to your specific lease terms."
        ]
    },
    {
        name: "Party Wall & Neighbouring Matters",
        icon: Users,
        image: "/sections/services/service1.jpg",
        content: [
            "Construction work near property boundaries often triggers the Party Wall etc. Act. We act for building owners, adjoining owners, or as agreed surveyors to ensure all legal obligations are met and disputes are avoided or resolved efficiently.",
            "Our specialist advice covers boundary disputes, scaffold agreements, and crane overhang licenses, protecting your rights and maintaining harmonious relationships with neighboring property owners."
        ]
    },
    {
        name: "Refurbishment & Conservation",
        icon: Hammer,
        image: "/sections/services/service2.jpg",
        content: [
            "Breathing new life into existing buildings or carefully conserving historic structures requires a delicate balance of modern techniques and traditional craftsmanship. We offer specialized surveying services for listed buildings and heritage assets.",
            "Our team ensures that any refurbishment or conservation work respects the building's historical significance while upgrading its performance, safety, and functionality for modern use."
        ]
    },
    {
        name: "Health & Safety / Compliance",
        icon: ShieldCheck,
        image: "/sections/services/building.png",
        content: [
            "Operating a safe and compliant building is paramount. The regulatory landscape is constantly evolving, making health, safety, and statutory compliance a key challenge for property owners and managers.",
            "We conduct comprehensive audits and risk assessments, including fire safety and accessibility, to ensure your property meets all current legal standards, protecting your occupants and your reputation."
        ]
    },
    {
        name: "Insurance",
        icon: Shield,
        image: "/sections/services/service1.jpg",
        content: [
            "Accurate Reinstatement Cost Assessments are essential to ensure your property is adequately insured. Being underinsured can lead to significant financial shortfalls in the event of a claim, while over-insuring means paying unnecessary premiums.",
            "We provide precise valuations for insurance purposes, and in the unfortunate event of damage, we offer expert support in managing the reinstatement project and coordinating with loss adjusters."
        ]
    },
];

export default function ServiceDetailSection() {
    const searchParams = useSearchParams();
    const tabParam = searchParams.get('tab');

    // Parse the initial active index from URL or default to 0
    const initialActive = tabParam ? parseInt(tabParam, 10) : 0;
    const [active, setActive] = useState(!isNaN(initialActive) && initialActive >= 0 && initialActive < categories.length ? initialActive : 0);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const ActiveIcon = categories[active].icon;

    return (
        <section className="bg-white py-16 lg:py-24 px-4">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">

                    {/* Desktop Sidebar */}
                    <aside className="hidden lg:block lg:w-1/4">
                        <h3 className="text-lg font-semibold font-instrumetal text-gray-800 mb-6">
                            Categories
                        </h3>
                        <div className="space-y-3">
                            {categories.map((item, index) => {
                                const Icon = item.icon;
                                const isActive = active === index;

                                return (
                                    <button
                                        key={index}
                                        onClick={() => setActive(index)}
                                        className={`w-full flex items-center gap-4 rounded-xl transition-all duration-300 text-left ${isActive
                                            ? "text-primary-variant"
                                            : "hover:bg-[#FCFFEE] cursor-pointer text-muted-foreground"
                                            }`}
                                    >
                                        <div
                                            className={`p-3 rounded-full bg-[#FCFFEE]`}
                                        >
                                            <Icon size={18} color="#99BC0F" />
                                        </div>
                                        <SuisseIntlText weight="medium" className="text-sm font-medium">
                                            {item.name}
                                        </SuisseIntlText>
                                    </button>
                                );
                            })}
                        </div>
                    </aside>

                    {/* Mobile Dropdown */}
                    <div className="lg:hidden w-full mb-2">
                        <h3 className="text-lg font-semibold font-instrumetal text-gray-800 mb-6">
                            Categories
                        </h3>

                        <div className="relative">
                            <button
                                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                className="w-full flex items-center justify-between py-3 bg-white"
                            >
                                <div className="flex items-center gap-4">
                                    <div className="p-3 rounded-full bg-[#FCFFEE]">
                                        <ActiveIcon size={18} color="#99BC0F" />
                                    </div>
                                    <SuisseIntlText weight="medium" className="text-sm font-medium text-primary-variant">
                                        {categories[active].name}
                                    </SuisseIntlText>
                                </div>
                                <ChevronDown size={20} className={`text-gray-500 transition-transform duration-300 ${isMobileMenuOpen ? "rotate-180" : ""}`} />
                            </button>

                            <AnimatePresence>
                                {isMobileMenuOpen && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        className="overflow-hidden mt-2"
                                    >
                                        <div className="space-y-2 py-2">
                                            {categories.map((item, index) => {
                                                const Icon = item.icon;
                                                const isActive = active === index;
                                                return (
                                                    <button
                                                        key={index}
                                                        onClick={() => {
                                                            setActive(index);
                                                            setIsMobileMenuOpen(false);
                                                        }}
                                                        className={`w-full flex items-center gap-4 p-2 text-left transition-colors duration-200 rounded-lg ${isActive ? "bg-gray-50" : "hover:bg-gray-50"}`}
                                                    >
                                                        <div className={`p-3 rounded-full bg-[#FCFFEE]`}>
                                                            <Icon size={18} color={isActive ? "#99BC0F" : "#99BC0F"} />
                                                        </div>
                                                        <SuisseIntlText weight="medium" className={`text-sm font-medium ${isActive ? 'text-primary-variant' : 'text-gray-500'}`}>
                                                            {item.name}
                                                        </SuisseIntlText>
                                                    </button>
                                                )
                                            })}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                            {!isMobileMenuOpen && <div className="h-px bg-gray-100 w-full mt-2" />}
                        </div>
                    </div>

                    {/* Divider (desktop only) */}
                    <div className="hidden lg:block w-px bg-gray-200" />

                    {/* Main Content */}
                    <div className="lg:w-3/4">
                        <p className="text-sm font-semibold font-mono text-primary-variant uppercase tracking-wide mb-3">
                            Services
                        </p>

                        <AnimatePresence mode="wait">
                            <motion.div
                                key={active}
                                initial={{ opacity: 0, y: 15 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -15 }}
                                transition={{ duration: 0.3, ease: "easeInOut" }}
                            >
                                <DelightText weight="medium" className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-8">
                                    {categories[active].name}
                                </DelightText>

                                {/* Image */}
                                <div className="relative w-full h-72 sm:h-96 rounded-2xl overflow-hidden mb-8">
                                    <Image
                                        src={categories[active].image}
                                        alt={categories[active].name}
                                        fill
                                        className="object-cover"
                                    />
                                </div>

                                {/* Text Content */}
                                <div className="space-y-6 text-gray-600 leading-relaxed text-base">
                                    {categories[active].content.map((paragraph, idx) => (
                                        <p key={idx}>{paragraph}</p>
                                    ))}
                                </div>

                                {/* CTA */}
                                <div className="mt-10">
                                    <button className="inline-flex items-center gap-2 bg-[#CAE366] hover:bg-[#B5CC5B] text-black font-semibold px-6 py-3 rounded-xl transition-all duration-300">
                                        Get in touch
                                        <span className="text-lg">›</span>
                                    </button>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </section>
    );
}