"use client";

import { motion } from "framer-motion";
import { SuisseIntlText } from "@/components/fonts";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

import { ReactNode } from "react";

interface SurveyHeroProps {
    titleLine1: ReactNode;
    titleHighlight: ReactNode;
    description: ReactNode;
}

export function SurveyHero({ titleLine1, titleHighlight, description }: SurveyHeroProps) {
    return (
        <section className="relative w-full pt-32 pb-20 md:pt-40 md:pb-28 lg:pt-48 lg:pb-32 px-4 sm:px-6 lg:px-8 overflow-hidden">

            {/* Background Decorative Squares (Left) */}
            <div className="absolute left-0 lg:left-[5%] top-1/4 pointer-events-none opacity-50 flex">
                <div className="w-16 h-16 md:w-24 md:h-24 lg:w-32 lg:h-32 bg-[#F9F9F9]" />
                <div className="w-16 h-16 md:w-24 md:h-24 lg:w-32 lg:h-32 bg-[#F5F5F5] translate-y-1/2 -translate-x-1/2" />
            </div>

            {/* Background Decorative Squares (Right) */}
            <div className="absolute right-0 lg:right-[5%] bottom-1/4 pointer-events-none opacity-50 flex">
                <div className="w-16 h-16 md:w-24 md:h-24 lg:w-32 lg:h-32 bg-[#F9F9F9]" />
                <div className="w-16 h-16 md:w-24 md:h-24 lg:w-32 lg:h-32 bg-[#F5F5F5] translate-y-1/2 -translate-x-2/3" />
            </div>

            <div className="container max-w-7xl mx-auto relative z-10 text-center lg:text-left flex flex-col items-center lg:items-start pl-0">

                <motion.h1
                    className="text-3xl md:text-5xl font-bold text-[#0A0A0B] leading-[1.1] mb-6 md:mb-8"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <SuisseIntlText weight="semibold">
                        {titleLine1}
                        <span className="text-[#9DC32A]">{titleHighlight}</span>
                    </SuisseIntlText>
                </motion.h1>

                <motion.p
                    className="text-base md:text-lg lg:text-[19px] text-muted leading-relaxed max-w-6xl mb-10 md:mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                >
                    <SuisseIntlText weight="regular">
                        {description}
                    </SuisseIntlText>
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <Link href="/contact-us">
                        <Button
                            className="bg-primary  text-[#0A0A0B] font-medium tracking-wide h-12 px-12 rounded-2xl flex items-center gap-2 group transition-colors shadow-none"
                        >
                            <SuisseIntlText weight="medium" className="text-[15px]">
                                Book a Survey
                            </SuisseIntlText>
                            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                        </Button>
                    </Link>
                </motion.div>

            </div>
        </section>
    );
}
