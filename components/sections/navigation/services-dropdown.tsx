"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { SuisseIntlText } from "@/components/fonts";
import { motion, AnimatePresence } from "framer-motion";

const SERVICES_DATA = [
    {
        title: "Building Surveys & Inspections",
        description: "Making property decisions without the right knowledge can be costly not just financially, but also in terms of time, stress, and long-term liability.",
        image: "/images/worker.jpg",
        href: "/services?tab=0"
    },
    {
        title: "Defects Analysis & Maintenance",
        description: "Building defects, if left unchecked, can quickly escalate into costly problems from persistent damp to cracking walls to subsidence, roof leaks, or failing services.",
        image: "/images/surveyor-clipboard.png",
        href: "/services?tab=1"
    },
    {
        title: "Design & Project Management",
        description: "We provide an efficient and high quality contract administration & project management from initial briefing and feasibility right through to contract completion.",
        image: "/images/blueprint.png",
        href: "/services?tab=2"
    },
    {
        title: "Dilapidations & Lease Advice",
        description: "Lease agreements often bring complex responsibilities, particularly around repair and reinstatement at the end of a term.",
        image: "/images/about-us.png",
        href: "/services?tab=3"
    },
    {
        title: "Party Wall & Neighbouring Matters",
        description: "Building work that affects shared walls, boundaries, or neighbouring properties can easily create disputes if not handled correctly.",
        image: "/images/houses.png",
        href: "/services?tab=4"
    },
    {
        title: "Refurbishment & Conservation",
        description: "Renovation and conservation projects demand a balance between preserving the character of a building and adapting it for modern use.",
        image: "/images/blueprint-2.png",
        href: "/services?tab=5"
    },
    {
        title: "Health & Safety / Compliance",
        description: "Ensuring buildings are safe, accessible, and fully compliant with regulations is essential for protecting both people and investments.",
        image: "/images/worker.png",
        href: "/services?tab=6"
    },
    {
        title: "Insurance",
        description: "When disputes, claims, or insurance matters arise, having accurate and authoritative reporting is essential.",
        image: "/images/pen.jpg",
        href: "/services?tab=7"
    },
    {
        title: "Stock Condition Surveys",
        description: "Data-driven insight into portfolio condition, compliance status, and lifecycle performance.",
        image: "/images/worker.jpg",
        href: "/services?tab=8"
    }
];

export function ServicesDropdown() {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <div className="w-[850px] bg-white rounded-2xl shadow-2xl border border-gray-100 p-8 flex gap-8">
            {/* Left side: List */}
            <div className="w-1/2 flex flex-col gap-2 pr-6 border-r border-gray-100">
                {SERVICES_DATA.map((service, index) => (
                    <Link
                        key={index}
                        href={service.href}
                        onMouseEnter={() => setActiveIndex(index)}
                        className={`py-2 px-3 rounded-lg text-[13px] md:text-sm transition-colors ${activeIndex === index ? "text-[#9DC32A]" : "text-[#646A7A] hover:bg-gray-50/50 hover:text-gray-900"
                            }`}
                    >
                        <SuisseIntlText weight={activeIndex === index ? "semibold" : "regular"}>
                            {service.title}
                        </SuisseIntlText>
                    </Link>
                ))}
            </div>

            {/* Right side: Detail */}
            <div className="w-1/2 flex flex-col">
                <div className="relative w-full aspect-video rounded-xl overflow-hidden mb-6 bg-gray-50">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeIndex}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="absolute inset-0"
                        >
                            <Image
                                src={SERVICES_DATA[activeIndex].image}
                                alt={SERVICES_DATA[activeIndex].title}
                                fill
                                className="object-cover"
                            />
                        </motion.div>
                    </AnimatePresence>
                </div>
                <div className="h-[100px]">
                    <AnimatePresence mode="wait">
                        <motion.p
                            key={activeIndex}
                            initial={{ opacity: 0, y: 5 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -5 }}
                            transition={{ duration: 0.2 }}
                            className="text-[#646A7A] text-[15px] leading-relaxed"
                        >
                            <SuisseIntlText weight="regular">
                                {SERVICES_DATA[activeIndex].description}
                            </SuisseIntlText>
                        </motion.p>
                    </AnimatePresence>
                </div>
            </div>
        </div>
    );
}
