"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/animations/fade-in";

const services = [
    "Building Services & Inspection",
    "Defect Analysis & Maintenance",
    "Design & Project Management",
    "Dilapidations & Lease Advice",
    "Party Walls & Neighboring Matters",
    "Refurbishment & Conservation",
    "Health & Safety / Compliance",
    "Insurance",
];

export default function ReachSection() {
    return (
        <section className="relative bg-black- w-full min-h-screen flex items-center justify-center">
            {/* Background Image */}
            <div className="absolute inset-0">
                <Image
                    src="/images/reach-bg.jpg" // put your image in public folder
                    alt="Engineer inspecting building"
                    fill
                    priority
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-black/40" />
            </div>

            {/* Content Container */}
            <div className="w-full container mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8">

                    {/* Glass Card */}
                    <FadeIn delay={0.1} direction="up" className="w-full lg:w-[520px] backdrop-blur-xl bg-[#0A0A0B] border border-white/10 rounded-2xl shadow-2xl p-6 sm:p-8">
                        <div className="flex items-center gap-2 mb-6">
                            <h3 className="text-white font-instrumetal text-lg font-semibold">Reach</h3>
                            <span className="text-gray-400 text-sm">ⓘ</span>
                        </div>

                        <StaggerContainer delay={0.3} className="space-y-5">
                            {services.map((service, index) => (
                                <StaggerItem
                                    key={index}
                                    className="bg-white/5 border border-white/5 rounded-xl p-4"
                                >
                                    <div className="flex justify-between items-center mb-3">
                                        <p className="text-sm font-instrumetal uppercase tracking-wide text-gray-300">
                                            {service}
                                        </p>
                                        <span className="text-xs bg-white/10 text-gray-300 px-3 py-1 rounded-full">
                                            98%
                                        </span>
                                    </div>

                                    {/* Progress Bar */}
                                    <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            whileInView={{ width: "98%" }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 1, delay: 0.5 + (index * 0.1), ease: "easeOut" }}
                                            className="h-full bg-lime-400 rounded-full"
                                        />
                                    </div>
                                </StaggerItem>
                            ))}
                        </StaggerContainer>
                    </FadeIn>

                    {/* Spacer for desktop alignment */}
                    <div className="hidden lg:block flex-1" />
                </div>
            </div>
        </section>
    );
}