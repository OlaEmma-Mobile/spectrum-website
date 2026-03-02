"use client";

import { motion } from "framer-motion";
import { DelightText, SuisseIntlText } from "@/components/fonts";

export function EpcProcessSection() {
    return (
        <section className="w-full bg-white pt--16 md:py-24 px-4 sm:px-6 lg:px-8">
            <div className="container max-w-[1200px] mx-auto">
                <div className="flex flex-col md:flex-row gap-8 lg:gap-16 mb-20 md:mb-28 lg:mb-32 items-start md:items-center">

                    {/* Left: Heading */}
                    <div className="w-full md:w-1/2">
                        <motion.h2
                            className="text-3xl md:text-4xl font-bold tracking-tight text-[#0A0A0B] leading-[1.1]"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <SuisseIntlText weight="bold">
                                How <span className="text-[#99BC0F]">Energy<br className="hidden lg:block" /> Performance<br className="hidden lg:block" /> Certificate works</span>
                            </SuisseIntlText>
                        </motion.h2>
                    </div>

                    {/* Right: Text */}
                    <div className="w-full md:w-1/2">
                        <motion.p
                            className="text-base md:text-lg lg:text-[17px] text-[#A3A8B2] leading-[1.6]"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                        >
                            <SuisseIntlText weight="regular">
                                Our qualified assessor visits your property to evaluate insulation, heating systems, windows, and overall energy usage, then issues an official EPC with your energy rating and improvement suggestions.
                            </SuisseIntlText>
                        </motion.p>
                    </div>
                </div>

                {/* Cards Container */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-6 lg:gap-8 pt-8">

                    {/* Card 1 */}
                    <motion.div
                        className="bg-[#F9F9F9] p-8 md:p-6 relative py-12 md:pt-[90px] md:pb-[50px]"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                    >
                        {/* Number Badge */}
                        <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-[80px] h-[80px] bg-white rounded-full flex items-center justify-center border-[6px] border-[#F9F9F9]">
                            <span className="text-[34px] font-bold text-transparent" style={{ WebkitTextStroke: "1px #99BC0F" }}>1</span>
                        </div>

                        <h3 className="text-xl md:text-[22px] font-bold text-[#0A0A0B] mb-5">
                            <DelightText weight="semibold">Get an instant quote</DelightText>
                        </h3>
                        <p className="text-[#3A3F4A] text-base md:text-[17px] leading-[1.6]">
                            <SuisseIntlText weight="regular">
                                Simply enter your details and get your instant quote. If you need your EPC urgently or need a specific day/time please call us.
                            </SuisseIntlText>
                        </p>
                    </motion.div>

                    {/* Card 2 */}
                    <motion.div
                        className="bg-[#99BC0F] p-8 md:p-6 relative py-18 md:py-[100px]"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        {/* Number Badge */}
                        <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-[80px] h-[80px] bg-[#99BC0F] rounded-full flex items-center justify-center border-[6px] border-white">
                            <span className="text-[34px] font-bold text-transparent" style={{ WebkitTextStroke: "1px white" }}>2</span>
                        </div>

                        <h3 className="text-xl md:text-[22px] font-bold text-white mb-5">
                            <DelightText weight="semibold">We respond within 24Hrs</DelightText>
                        </h3>
                        <p className="text-white/90 text-base md:text-[17px] leading-[1.6]">
                            <SuisseIntlText weight="regular">
                                Our team will review your request promptly and get back to you within 24 hours with confirmation and next steps.
                            </SuisseIntlText>
                        </p>
                    </motion.div>

                    {/* Card 3 */}
                    <motion.div
                        className="bg-[#F9F9F9] p-8 md:p-6 relative py-18 md:py-[100px]"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                    >
                        {/* Number Badge */}
                        <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-[80px] h-[80px] bg-white rounded-full flex items-center justify-center border-[6px] border-[#F9F9F9]">
                            <span className="text-[34px] font-bold text-transparent" style={{ WebkitTextStroke: "1px #99BC0F" }}>3</span>
                        </div>

                        <h3 className="text-xl md:text-[22px] font-bold text-[#0A0A0B] mb-5">
                            <DelightText weight="semibold">We take care of the rest</DelightText>
                        </h3>
                        <p className="text-[#3A3F4A] text-base md:text-[17px] leading-[1.6]">
                            <SuisseIntlText weight="regular">
                                We'll contact you to schedule your order. With fast turnaround times your certificate will be ready in no time.
                            </SuisseIntlText>
                        </p>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
