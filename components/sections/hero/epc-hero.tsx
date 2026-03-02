"use client";

import { motion } from "framer-motion";
import { SuisseIntlText } from "@/components/fonts";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import Image from "next/image";

export function EpcHero() {
    return (
        <section className="relative w-full pt-32 pb-24 md:pt-40 md:pb-32 lg:pt-48 lg:pb-40 px-4 sm:px-6 lg:px-8 overflow-hidden min-h-[85vh] flex flex-col justify-center items-center">

            {/* Background Gradients */}
            <div className="absolute inset-0 pointer-events-none -z-10 bg-white">
                <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[80%] rounded-full bg-linear-to-br from-[#FFE5E5] via-[#FFF0F0] to-transparent opacity-70 blur-3xl" />
                <div className="absolute top-[-10%] right-[-10%] w-[60%] h-[80%] rounded-full bg-linear-to-bl from-[#FFFFE0] via-[#F0FFF0] to-transparent opacity-70 blur-3xl" />
                <div className="absolute bottom-[-10%] right-[10%] w-[50%] h-[70%] rounded-full bg-linear-to-tl from-[#E0FAEB] to-transparent opacity-60 blur-3xl" />
            </div>

            {/* Decorative Squares (Left) */}
            <div className="absolute left-[5%] lg:left-[10%] top-[30%] pointer-events-none opacity-40 hidden md:flex flex-col gap-2 z-0">
                <div className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 bg-[#F5E6E6]" />
                <div className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 bg-[#F9ECEC] translate-x-1/2" />
            </div>

            {/* Decorative Squares (Right) */}
            <div className="absolute right-[5%] lg:right-[15%] bottom-[30%] pointer-events-none opacity-40 hidden md:flex flex-col gap-2 z-0">
                <div className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 bg-[#EBF5EE]" />
                <div className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 bg-[#F0F8F2] -translate-x-1/2" />
            </div>

            {/* Pink Ribbon Badge (Floating Left) */}
            <motion.div
                className="absolute -left-[17%] lg:left-[10%] top-[45%] lg:top-[50%] hidden- md:block- z-0"
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            >
                <div className="relative flex items-center justify-center">
                    <div className="absolute w-[400px] h-[400px] bg-[#EC4899] opacity-20 blur-[50px] rounded-full pointer-events-none" />
                    <Image
                        src={"/images/hero-icon.png"}
                        alt={"Hero Icon 1"}
                        width={94}
                        height={111}
                        className="w-[100px] h-[110px] relative z-10"
                    />
                </div>
            </motion.div>

            {/* Yellow Check Badge (Floating Top Right) */}
            <motion.div
                className="absolute -right-[5%] lg:right-[15%] top-[16%] lg:top-[20%] hidden- md:block- z-0"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            >
                <div className="relative flex items-center justify-center">
                    <div className="absolute w-[400px] h-[400px] bg-[#fcc100] opacity-20 blur-[50px] rounded-full pointer-events-none" />
                    <Image
                        src={"/images/hero-icon-1.png"}
                        alt={"Hero Icon 1"}
                        width={94}
                        height={111}
                        className="w-[80px] h-[80px] relative z-10"
                    />
                </div>
            </motion.div>

            {/* Green Seal Badge (Floating Bottom Right) */}
            <motion.div
                className="absolute -right-[10%] lg:right-[20%] bottom-[25%] lg:bottom-[30%] hidden- md:block- z-0"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            >
                <div className="relative flex items-center justify-center">
                    <div className="absolute w-[400px] h-[400px] bg-[#10B981] opacity-20 blur-[50px] rounded-full pointer-events-none" />
                    <Image
                        src={"/images/hero-icon-2.png"}
                        alt={"Hero Icon 1"}
                        width={94}
                        height={111}
                        className="w-[80px] h-[80px] relative z-10"
                    />
                </div>
            </motion.div>

            <div className="container max-w-5xl mx-auto relative z-10  flex flex-col items-center">

                <motion.h1
                    className="text-4xl md:text-5xl lg:text-7xl font-bold text-[#111111] tracking-tight mb-6 lg:mb-8 leading-[1.1]"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <SuisseIntlText weight="bold">
                        Energy Performance Certificate
                    </SuisseIntlText>
                </motion.h1>

                <motion.p
                    className="text-lg md:text-xl lg:text-[22px] text-[#A3A8B2] leading-relaxed max-w-4xl mx-auto mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                >
                    <SuisseIntlText weight="regular">
                        If you are thinking of selling your property or letting it out, you will need a valid<br className="hidden md:block" /> Energy Performance Certificate. An EPC summarises the energy efficiency<br className="hidden md:block" /> of your property based on a scale from A to G. It makes recommendations<br className="hidden md:block" /> on how you can reduce your energy use and save money in the long term.
                    </SuisseIntlText>
                </motion.p>

                <motion.div
                    className="flex flex-col md:flex-row md:items-center justify-center gap-4 lg:gap-8 mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <p className="text-muted text-base lg:text-[17px]  md:text-left text-muted-foreground leading-snug">
                        <SuisseIntlText weight="medium">
                            All of our assessors are fully qualified and<br className="hidden md:block" /> accredited by reputable government bodies
                        </SuisseIntlText>
                    </p>
                    <div className="flex items-center">
                        <Image
                            src={"/images/emck-logo.png"}
                            alt="emck logo"
                            width={150}
                            height={40}
                            className="w-[150px] h-[40px]"
                        />
                    </div>
                </motion.div>

                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 md:w-auto w-full items-center gap-4 justify-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                >
                    <Link href="#find-out-more" className="w-full">
                        <Button className="bg-[#CAE366] md:w-auto w-full hover:bg-[#B7CE5A] text-[#0A0A0B] font-medium tracking-wide h-12 lg:h-12 px-8 rounded-xl flex items-center justify-center gap-2 transition-colors shadow-none text-[15px]">
                            <SuisseIntlText weight="medium">Find out more</SuisseIntlText>
                            <span className="text-[10px] ml-1 opacity-80">▶</span>
                        </Button>
                    </Link>

                    <Link href="#quote" className="w-full">
                        <Button className="bg-[#0A0A0B] w-full hover:bg-neutral-800 text-white font-medium tracking-wide h-12 lg:h-12 px-8 rounded-xl transition-colors shadow-none text-[15px]">
                            <SuisseIntlText weight="medium">Get an instant quote</SuisseIntlText>
                        </Button>
                    </Link>
                </motion.div>

            </div>
        </section>
    );
}
