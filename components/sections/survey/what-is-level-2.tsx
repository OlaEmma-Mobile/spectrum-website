"use client";

import { motion } from "framer-motion";
import { useState, useEffect, ReactNode } from "react";
import { SuisseIntlText } from "@/components/fonts";

interface WhatIsSurveyProps {
    heading: ReactNode;
    description: ReactNode;
}

export function WhatIsLevel2Section({ heading, description }: WhatIsSurveyProps) {
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((current) => (current + 1) % 3);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="w-full bg-white py-16 md:py-24 px-4 sm:px-6 lg:px-8">
            <div className="container max-w-7xl mx-auto">

                <motion.h2
                    className="text-3xl md:text-4xl lg:text-[44px] font-medium text-[#0A0A0B] mb-6 tracking-tight"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <SuisseIntlText weight="medium">
                        {heading}
                    </SuisseIntlText>
                </motion.h2>

                <motion.p
                    className="text-base md:text-lg text-[#8995AD] leading-relaxed mb-12 max-w-3xl"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                >
                    <SuisseIntlText weight="regular" className="whitespace-pre-line">
                        {description}
                    </SuisseIntlText>
                </motion.p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">

                    {/* Red Card */}
                    <motion.div
                        className={`bg-white rounded-[20px] p-6 border transition-all duration-500 relative overflow-hidden group ${activeIndex === 0
                            ? "border-red-500 shadow-[0_0_30px_rgba(239,68,68,0.25)] scale-[1.02]"
                            : "border-gray-100 shadow-sm"
                            }`}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        onClick={() => setActiveIndex(0)}
                        role="button"
                        tabIndex={0}
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <div className={`w-5 h-5 rounded-full shrink-0 transition-colors duration-500 ${activeIndex === 0 ? "bg-red-500" : "bg-gray-200"}`} />
                            <span className={`font-semibold text-[22px] transition-colors duration-500 ${activeIndex === 0 ? "text-red-500" : "text-gray-400"}`}>
                                <SuisseIntlText weight="medium">Red</SuisseIntlText>
                            </span>
                        </div>
                        <div>
                            <p className="text-[#8995AD] text-lg mb-1 tracking-tight">
                                <SuisseIntlText weight="medium">Condition Rating 3</SuisseIntlText>
                            </p>
                            <h4 className="text-[#2D2D2D] text-[22px] font-semibold tracking-tight">
                                <SuisseIntlText weight="medium">Urgent or serious issues</SuisseIntlText>
                            </h4>
                        </div>
                    </motion.div>

                    {/* Amber Card */}
                    <motion.div
                        className={`bg-white rounded-[20px] p-6 border transition-all duration-500 relative overflow-hidden group ${activeIndex === 1
                            ? "border-amber-500 shadow-[0_0_30px_rgba(245,158,11,0.25)] scale-[1.02]"
                            : "border-gray-100 shadow-sm"
                            }`}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        onClick={() => setActiveIndex(1)}
                        role="button"
                        tabIndex={0}
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <div className={`w-5 h-5 rounded-full shrink-0 transition-colors duration-500 ${activeIndex === 1 ? "bg-amber-500" : "bg-gray-200"}`} />
                            <span className={`font-semibold text-[22px] transition-colors duration-500 ${activeIndex === 1 ? "text-amber-500" : "text-gray-400"}`}>
                                <SuisseIntlText weight="medium">Amber</SuisseIntlText>
                            </span>
                        </div>
                        <div>
                            <p className="text-[#8995AD] text-lg mb-1 tracking-tight">
                                <SuisseIntlText weight="medium">Condition Rating 2</SuisseIntlText>
                            </p>
                            <h4 className="text-[#2D2D2D] text-[22px] font-semibold tracking-tight">
                                <SuisseIntlText weight="medium">Minor defects</SuisseIntlText>
                            </h4>
                        </div>
                    </motion.div>

                    {/* Green Card */}
                    <motion.div
                        className={`bg-white rounded-[20px] p-6 border transition-all duration-500 relative overflow-hidden group ${activeIndex === 2
                            ? "border-[#00A150] shadow-[0_0_30px_rgba(0,161,80,0.25)] scale-[1.02]"
                            : "border-gray-100 shadow-sm"
                            }`}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        onClick={() => setActiveIndex(2)}
                        role="button"
                        tabIndex={0}
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <div className={`w-5 h-5 rounded-full shrink-0 transition-colors duration-500 ${activeIndex === 2 ? "bg-[#00A150]" : "bg-gray-200"}`} />
                            <span className={`font-semibold text-[22px] transition-colors duration-500 ${activeIndex === 2 ? "text-[#00A150]" : "text-gray-400"}`}>
                                <SuisseIntlText weight="medium">Green</SuisseIntlText>
                            </span>
                        </div>
                        <div>
                            <p className="text-[#8995AD] text-lg mb-1 tracking-tight">
                                {/* The reference image technically repeats "Condition Rating 2" under Green, but presumably it should be "Condition Rating 1" */}
                                <SuisseIntlText weight="medium">Condition Rating 1</SuisseIntlText>
                            </p>
                            <h4 className="text-[#2D2D2D] text-[22px] font-semibold tracking-tight">
                                <SuisseIntlText weight="medium">No repairs needed</SuisseIntlText>
                            </h4>
                        </div>
                    </motion.div>

                </div>

                <motion.p
                    className="text-sm md:text-base text-[#8995AD] leading-relaxed max-w-3xl"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                >
                    <SuisseIntlText weight="regular">
                        The report can also include a professional valuation, giving you added confidence during the buying process.
                    </SuisseIntlText>
                </motion.p>

            </div>
        </section>
    );
}
