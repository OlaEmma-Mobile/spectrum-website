"use client";

import { motion } from "framer-motion";
import { SuisseIntlText } from "@/components/fonts";
import Image from "next/image";

interface WhatsIncludedProps {
    inclusions: string[];
}

export function WhatsIncludedSection({ inclusions }: WhatsIncludedProps) {
    return (
        <section className="w-full bg-[#0A0A0B] py-20 md:py-32 px-4 sm:px-6 lg:px-8">
            <div className="container max-w-7xl mx-auto">

                {/* Section Header */}
                <motion.div
                    className="text-center mb-16 md:mb-24"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-3xl md:text-5xl lg:text-[56px] font-bold text-white tracking-tight">
                        <SuisseIntlText weight="bold">
                            What&apos;s <span className="text-[#CAE366]">Included?</span>
                        </SuisseIntlText>
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">

                    {/* Left Column: List */}
                    <div className="order-2 lg:order-1 flex flex-col gap-6">
                        {inclusions.map((text, index) => (
                            <motion.div
                                key={index}
                                className="flex items-start gap-4"
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.1 * index }}
                            >
                                {/* Bullet Point */}
                                <div className="mt-2 w-1.5 h-1.5 rounded-sm bg-white shrink-0" />

                                {/* Text */}
                                <p className="text-white text-base md:text-lg leading-relaxed">
                                    <SuisseIntlText weight="regular">{text}</SuisseIntlText>
                                </p>
                            </motion.div>
                        ))}
                    </div>

                    {/* Right Column: Image */}
                    <motion.div
                        className="order-1 lg:order-2 relative w-full aspect-4/3 md:aspect-video lg:aspect-[4/3] rounded-xl overflow-hidden"
                        initial={{ opacity: 0, right: -20 }}
                        whileInView={{ opacity: 1, right: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <Image
                            src="/sections/services/building.png" // Fallback placeholder
                            alt="Survey inspection details"
                            fill
                            className="object-cover grayscale contrast-125"
                        />
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
