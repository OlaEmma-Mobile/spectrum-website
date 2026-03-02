"use client";

import { motion } from "framer-motion";
import { SuisseIntlText } from "@/components/fonts";
import Image from "next/image";

export function WhatIsEpcSection() {
    return (
        <section className="w-full bg-white py-16 md:py-24 px-4 sm:px-6 lg:px-8">
            <div className="container max-w-[1200px] mx-auto">
                <div className="flex flex-col md:flex-row gap-8 lg:gap-16 mb-16 items-start">

                    {/* Left: Heading */}
                    <div className="w-full md:w-[45%]">
                        <motion.h2
                            className="text-4xl md:text-5xl lg:text-[50px] font-bold tracking-tight text-[#0A0A0B] leading-[1.1]"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <SuisseIntlText weight="bold">
                                What Is An <span className="text-[#9DC32A]">Energy<br className="hidden md:block" /> Performance<br className="hidden md:block" /> Certificate (EPC)?</span>
                            </SuisseIntlText>
                        </motion.h2>
                    </div>

                    {/* Right: Text */}
                    <div className="w-full md:w-[55%] pt-2">
                        <motion.p
                            className="text-base md:text-lg lg:text-[17px] text-[#A3A8B2] leading-[1.6]"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                        >
                            <SuisseIntlText weight="regular">
                                An Energy Performance Certificate (EPC) is a legal document that shows how energy efficient a property is. It gives the building an energy rating from A (most efficient) to G (least efficient), and provides practical recommendations to improve efficiency. The certificate also includes estimated energy costs, helping buyers, tenants and landlords understand likely running expenses.
                            </SuisseIntlText>
                        </motion.p>
                    </div>
                </div>

                {/* Bottom: Image with Gradient Overlay */}
                <motion.div
                    className="relative w-full aspect-video md:aspect-[2.2/1] rounded-3xl overflow-hidden mt-8 md:mt-12"
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <Image
                        src="/images/epc-bg.jpg" // Placeholder, user can update the path when moving the image to public
                        alt="Energy Performance Certificate details"
                        fill
                        className="object-cover"
                    />
                    {/* Gradient Overlay matching the design */}
                    <div className="absolute inset-0 bg-linear-to-r from-[#9DC32A]/80 via-[#9DC32A]/40 to-transparent" />
                </motion.div>
            </div>
        </section>
    );
}
