"use client";

import Image from "next/image";
import Link from "next/link";
import { DelightText, SuisseIntlText } from "@/components/fonts";
import { motion } from "framer-motion";
import { Home, ShieldCheck, DollarSign } from "lucide-react";

export function DesignedForHomeBuyersSection() {
    return (
        <section className="relative w-full bg-black py-12 overflow-hidden">

            {/* Background Blueprint Image - Left Side */}
            <div className="absolute top-0 left-0 w-[400px] h-full pointer-events-none mix-blend-screen">
                <Image
                    src="/images/blueprint-2.png"
                    alt="Blueprint Background"
                    fill
                    className="object-cover object-left"
                />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-8 items-center">

                    {/* Left Content Area */}
                    <div className="w-full text-white">

                        <DelightText weight="bold" className="text-4xl md:text-5xl font-bold mb-6 leading-[1.1]">
                            Designed For <span className="text-[#CAE366]">Home Buyers</span>
                        </DelightText>

                        <p className="text-[#A1A1AA] text-base leading-relaxed mb-12">
                            <SuisseIntlText weight="regular">
                                Our reports are written in plain, easy-to-understand language, not technical jargon. We focus on what truly matters to you as a buyer and explain how any issues could affect value, safety, or future costs.
                            </SuisseIntlText>
                        </p>

                        <h3 className="text-2xl md:text-3xl font-bold mb-10">
                            <DelightText weight="bold">Our Homeowner Services</DelightText>
                        </h3>

                        <div className="space-y-10">

                            {/* Service Item 1 */}
                            <div className="flex items-start gap-5 group">
                                <div className="w-[80px] h-[80px] bg-white rounded-xl flex items-center justify-center ">
                                    <Image
                                        src="/icons/home.svg"
                                        alt="Home"
                                        width={31}
                                        height={31}
                                        className="w-[40px] h-[40px]"
                                    />
                                </div>
                                <div>
                                    <SuisseIntlText weight="medium" className="md:text-xl text-base font-semibold text-white mb-2">
                                        Level 2 (Homebuyer Survey)
                                    </SuisseIntlText>
                                    <p className="text-[#A1A1AA] text-sm leading-snug mb-2 max-w-sm">
                                        <SuisseIntlText weight="regular">
                                            Spot issues early and buy with confidence, ideal for homes in good condition. {" "}
                                            <Link href="/home-buyers" className="inline-flex items-center text-[#CAE366] text-xs font-semibold tracking-wide uppercase hover:text-white transition-colors group/link">
                                                Read More
                                                <span className="ml-1 transition-transform group-hover/link:translate-x-1">▶</span>
                                            </Link>
                                        </SuisseIntlText>
                                    </p>
                                </div>
                            </div>

                            {/* Service Item 2 */}
                            <div className="flex items-start gap-5 group">
                                <div className="w-[80px] h-[80px] bg-white rounded-xl flex items-center justify-center ">
                                    <Image
                                        src="/icons/home-cog.svg"
                                        alt="Home"
                                        width={31}
                                        height={31}
                                        className="w-[40px] h-[40px]"
                                    />
                                </div>
                                <div>
                                    <SuisseIntlText weight="medium" className="md:text-xl text-base font-semibold text-white mb-2">
                                        Level 3 (Building Survey)
                                    </SuisseIntlText>
                                    <p className="text-[#A1A1AA] text-[15px] leading-snug mb-2 max-w-sm">
                                        <SuisseIntlText weight="regular">
                                            Deep dive into complex properties, no excuses, just solid facts. {" "}
                                            <Link href="/home-buyers" className="inline-flex items-center text-[#CAE366] text-xs font-semibold tracking-wide uppercase hover:text-white transition-colors group/link">
                                                Read More
                                                <span className="ml-1 transition-transform group-hover/link:translate-x-1">▶</span>
                                            </Link>
                                        </SuisseIntlText>
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>

                    {/* Right Image Collage Area */}
                    <div className="w-full">
                        <div className="flex flex-col md:grid md:grid-cols-5 md:grid-rows-2 h-auto md:h-[600px] rounded-3xl overflow-hidden gap-0">

                            {/* Top Left - Main image */}
                            <div className="h-[250px] md:h-auto md:col-span-3 relative bg-gray-900 border-none">
                                <Image
                                    src="/sections/services/service2.jpg"
                                    alt="Modern Home Pool"
                                    fill
                                    className="object-cover"
                                />
                            </div>

                            {/* Top Right - Orange Stat Block */}
                            <div className="h-[200px] md:h-auto md:col-span-2 md:row-span-1 bg-[#E85D34] p-6 lg:p-8 flex flex-col justify-center items-center text-center relative overflow-hidden border-none">
                                <div className="absolute inset-0 bg-black/5" />
                                <div className="relative z-10 flex flex-col items-center">
                                    <h3 className="text-5xl md:text-5xl lg:text-6xl font-bold text-white mb-2 md:-rotate-90 md:translate-x-2 md:translate-y-4">
                                        <SuisseIntlText weight="bold" >
                                            <span className="whitespace-nowrap">697 K+</span>
                                        </SuisseIntlText>
                                    </h3>
                                    <p className="text-white/90 text-sm md:text-[15px] uppercase tracking-wider font-semibold md:-rotate-90 md:-translate-x-18 md:mt-16 whitespace-nowrap">
                                        <SuisseIntlText weight="medium">LISTED PROPERTIES</SuisseIntlText>
                                    </p>
                                </div>
                            </div>

                            {/* Bottom Left - Dark Blue Block */}
                            <div className="min-h-[250px] md:h-auto md:col-span-2 md:row-span-1 bg-[#1A253D] p-6 lg:p-8 flex flex-col justify-end border-none">
                                <div className="w-16 h-16 rounded-2xl border border-white/10 flex items-center justify-center mb-6">
                                    <Image src="/icons/invest.svg" alt="Invest" width={31} height={31} />
                                </div>
                                <h4 className="text-xl md:text-[22px] font-semibold text-white mb-3">
                                    <SuisseIntlText weight="medium">Invest Opportunities</SuisseIntlText>
                                </h4>
                                <p className="text-[#8995AD] text-sm md:text-[15px] leading-relaxed">
                                    <SuisseIntlText weight="regular">
                                        All-inclusive real estate services to facilitate the easy and confident purchase, sale
                                    </SuisseIntlText>
                                </p>
                            </div>

                            {/* Bottom Right - House exterior */}
                            <div className="h-[250px] md:h-auto md:col-span-3 md:row-span-1 relative bg-gray-900 border-none">
                                <Image
                                    src="/sections/services/building.png"
                                    alt="Luxury Home Exterior"
                                    fill
                                    className="object-cover"
                                />
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
