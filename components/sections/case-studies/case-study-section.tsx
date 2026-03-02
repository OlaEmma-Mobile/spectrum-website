"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown, X } from "lucide-react";
import { FaRegCalendarAlt } from "react-icons/fa";
import { AnimatePresence, motion } from "framer-motion";
import { DelightText, SuisseIntlText } from "@/components/fonts";
import { Button } from "@/components/ui/Button";

import { CaseStudyCard, CaseStudy } from "./case-study-card";

const caseStudies: CaseStudy[] = [
    {
        no: "No.01",
        title: "Boundary & Property Surveys",
        description: "Defines exact property lines to prevent disputes and ensure legal Building ownership",
        image: "/images/reach-bg.jpg",
        author: "WIDAGDO",
        date: "June 13, 2025",
        content: [
            "Building defects, if left unchecked, can quickly escalate into costly problems — from persistent damp and cracking walls to subsidence, roof leaks, or failing services. These issues not only impact the safety and comfort of a property but also its long-term value.",
            "Our role is to investigate the root causes of defects, not just the symptoms. We provide clear, practical recommendations for repairs, along with planned preventive maintenance strategies that help extend the life of your building, reduce future risks, and manage costs more effectively."
        ]
    },
    {
        no: "No.02",
        title: "Topographic Mapping",
        description: "Accurate elevation data and terrain details for smarter planning and development decisions",
        image: "/sections/services/service1.jpg",
        author: "WIDAGDO",
        date: "June 13, 2025"
    },
    {
        no: "No.03",
        title: "Construction Staking",
        description: "Precise on-site marking ensures structures are built exactly to design specifications",
        image: "/images/home-hero-bg.png",
        author: "WIDAGDO",
        date: "June 13, 2025"
    },
    {
        no: "No.01",
        title: "Boundary & Property Surveys",
        description: "Defines exact property lines to prevent disputes and ensure legal Building ownership",
        image: "/sections/services/building.png",
        author: "WIDAGDO",
        date: "June 13, 2025"
    },
    {
        no: "No.02",
        title: "Topographic Mapping",
        description: "Accurate elevation data and terrain details for smarter planning and development decisions",
        image: "/sections/services/service2.jpg",
        author: "WIDAGDO",
        date: "June 13, 2025"
    },
    {
        no: "No.03",
        title: "Construction Staking",
        description: "Precise on-site marking ensures structures are built exactly to design specifications",
        image: "/images/worker.png",
        author: "WIDAGDO",
        date: "June 13, 2025"
    }
];

export function CaseStudySection() {
    const [selectedStudy, setSelectedStudy] = useState<CaseStudy | null>(null);

    // Provide default content if a case study is missing it
    const modalContent = selectedStudy?.content || [
        "Building defects, if left unchecked, can quickly escalate into costly problems — from persistent damp and cracking walls to subsidence, roof leaks, or failing services. These issues not only impact the safety and comfort of a property but also its long-term value.",
        "Our role is to investigate the root causes of defects, not just the symptoms. We provide clear, practical recommendations for repairs, along with planned preventive maintenance strategies that help extend the life of your building, reduce future risks, and manage costs more effectively."
    ];

    return (
        <div className="min-h-screen bg-[#0A0A0B] relative pb-24 md:pb-32 overflow-hidden">

            {/* Background vector accents */}
            <div className="absolute inset-x-0 bottom-0 h-96 opacity-10 pointer-events-none">
                <svg className="w-full h-full" viewBox="0 0 1000 400" preserveAspectRatio="none">
                    <path d="M0,200 C150,200 200,100 350,150 C500,200 650,50 800,100 C950,150 1000,100 1000,100 L1000,400 L0,400 Z" fill="none" stroke="white" strokeWidth="1" />
                    <path d="M0,250 C150,300 300,150 450,200 C600,250 800,150 1000,200 L1000,400 L0,400 Z" fill="none" stroke="white" strokeWidth="1" />
                </svg>
            </div>

            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 relative z-10">

                {/* Header section */}
                <div className="grid grid-cols-1 md:grid-cols-5 gap-10 mb-16">
                    <div className="w-full md:col-span-3">
                        <p className="text-primary font-mono tracking-tight text-sm mb-4 uppercase">
                            Case Studies
                        </p>
                        <h1 className="text-4xl md:text-5xl font-bold text-white leading-[1.1] mb-2">
                            <DelightText weight="bold">Professional Surveying Services You Can Rely On</DelightText>
                        </h1>
                    </div>

                    <div className="w-full md:col-span-2 flex flex-col lg:items-end gap-6 w-full lg:w-96 text-left lg:text-right">
                        <p className="text-[#A1A1AA] text-sm md:text-base leading-relaxed">
                            <SuisseIntlText weight="regular">
                                We deliver accurate, on-time surveying solutions using trusted methods and advanced technology—tailored to meet the needs of every project.
                            </SuisseIntlText>
                        </p>

                        {/* Dropdown styling */}
                        <button className="flex items-center gap-3 bg-[#18181B] border border-white/10 px-5 py-3 hover:border-white/20 transition-colors w-full sm:w-[240px] justify-between text-[#A1A1AA] text-sm">
                            <div className="flex items-center gap-3">
                                <FaRegCalendarAlt className="w-[14px] h-[14px]" />
                                <SuisseIntlText weight="medium">This Month</SuisseIntlText>
                            </div>
                            <ChevronDown className="w-4 h-4 ml-auto" />
                        </button>
                    </div>
                </div>

                {/* Responsive grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {caseStudies.map((item, index) => (
                        <CaseStudyCard
                            key={index}
                            item={item}
                            onClick={() => setSelectedStudy(item)}
                        />
                    ))}
                </div>

            </main>

            {/* Modal Overlay and Content */}
            <AnimatePresence>
                {selectedStudy && (
                    <motion.div
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        {/* Backdrop */}
                        <div
                            className="absolute inset-0 bg-black/80 backdrop-blur-sm cursor-pointer"
                            onClick={() => setSelectedStudy(null)}
                        />

                        {/* Modal Box */}
                        <motion.div
                            className="relative w-full max-w-4xl bg-[#08080A] border border-white/10 rounded-3xl overflow-hidden shadow-2xl z-10 max-h-[90vh] flex flex-col pt-8"
                            initial={{ scale: 0.95, opacity: 0, y: 30 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.95, opacity: 0, y: 20 }}
                            transition={{ type: "spring", damping: 25, stiffness: 300 }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                onClick={() => setSelectedStudy(null)}
                                className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors z-20"
                                aria-label="Close modal"
                            >
                                <X className="w-6 h-6" />
                            </button>

                            <div className="px-6 md:px-12 pb-8 md:pb-12 overflow-y-auto w-full custom-scrollbar">
                                <h2 className="text-xl md:text-3xl text-white font-bold mb-8 pr-8">
                                    <DelightText weight="bold">{selectedStudy.title}</DelightText>
                                </h2>

                                <div className="relative w-full h-[250px] md:h-[400px] rounded-2xl overflow-hidden mb-8">
                                    <Image
                                        src={selectedStudy.image}
                                        alt={selectedStudy.title}
                                        fill
                                        className="object-cover"
                                    />
                                </div>

                                <div className="space-y-6 text-[#E4E4E7] text-sm md:text-base leading-relaxed">
                                    {modalContent.map((paragraph, idx) => (
                                        <p key={idx}>
                                            <SuisseIntlText weight="regular">{paragraph}</SuisseIntlText>
                                        </p>
                                    ))}
                                </div>

                                <div className="mt-10">
                                    <Link href="/book-consultation">
                                        <button className="bg-primary text-[#0A0A0B] px-8 py-2 rounded-lg flex items-center gap-2 group transition-colors">
                                            <SuisseIntlText weight="bold" className="text-sm md:text-base">Get in touch</SuisseIntlText>
                                            <span className="text-lg md:text-xl transition-transform group-hover:translate-x-1">▸</span>
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            <style jsx global>{`
                .custom-scrollbar::-webkit-scrollbar {
                    width: 6px;
                }
                .custom-scrollbar::-webkit-scrollbar-track {
                    background: transparent;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb {
                    background: rgba(255, 255, 255, 0.1);
                    border-radius: 10px;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb:hover {
                    background: rgba(255, 255, 255, 0.2);
                }
            `}</style>
        </div>
    );
}
