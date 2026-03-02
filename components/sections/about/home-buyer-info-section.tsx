"use client";

import Image from "next/image";
import Link from "next/link";
import { DelightText, SuisseIntlText } from "@/components/fonts";
import { motion } from "framer-motion";

export function HomeBuyerInfoSection() {
    return (
        <section className="relative w-full flex flex-col pt-20 overflow-hidden">

            {/* Top Light Section */}
            <div className="bg-[#FFFDF8] relative z-10 pb-40 lg:pb-64 lg:pl-[15%] px-6">

                {/* Background blueprint graphic (simulated with SVG strokes) */}
                <div className="absolute top-0 left-0 w-[400px] h-[400px] pointer-events-none -translate-x-12 translate-y-12">
                    <Image
                        src="/images/blueprint.png"
                        alt="Home Blueprint"
                        width={500}
                        height={500}
                        className="w-full h-full"
                    />
                </div>

                <div className="max-w-6x relative z-10 pt-10">
                    <h2 className="text-3xl md:text-5xl lg:text-[52px] font-bold text-[#111111] mb-8 leading-tight">
                        <SuisseIntlText weight="bold">Check Out Our Contemporary Abode.</SuisseIntlText>
                    </h2>

                    <div className="space-y-6 text-[#4F566B] text-[17px] md:text-xl leading-relaxed max-w-6xl">
                        <p>
                            <SuisseIntlText weight="regular">
                                At Spectrum, we’re redefining how residential surveys are conducted. Combining cutting-edge drone technology, a personalised customer-first approach, and RICS-accredited expertise, we deliver detailed, accurate, and professional services tailored to your needs.
                            </SuisseIntlText>
                        </p>
                        <p>
                            <SuisseIntlText weight="regular">
                                Whether it’s inspecting hard-to-reach roofs or guiding you through a comprehensive survey report, we go the extra mile to ensure you feel confident and informed at every step.
                            </SuisseIntlText>
                        </p>
                        <p>
                            <SuisseIntlText weight="regular">
                                With us, it’s more than a survey it’s peace of mind.
                            </SuisseIntlText>
                        </p>
                    </div>
                </div>
            </div>

            {/* Bottom Dark Section (background behind card) */}
            <div className="bg-[#000000] w-full h-[300px] lg:h-[400px] absolute bottom-0 left-0 z-0"></div>

            {/* Overlapping Image Card */}
            <div className="relative z-20 w-full max-w-7xl mx-auto px-4 lg:-mt-48 mb-20 lg:mb-32">
                <motion.div
                    className="relative w-full aspect-3/3 md:aspect-21/9 rounded-2xl md:rounded-[32px] overflow-hidden shadow-2xl group"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                >
                    {/* Background Image */}
                    <Image
                        src="/images/surveyor-clipboard.png"
                        alt="Home Buyer Survey"
                        fill
                        className="object-cover transition-transform duration-1000 group-hover:scale-105"
                    />

                    {/* Dark Gradient Overlay */}
                    <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/40 to-transparent"></div>

                    {/* Card Content */}
                    <div className="absolute bottom-0 left-0 w-full p-8 md:p-12 lg:p-16 flex flex-col justify-end h-full">
                        <div className="max-w-3xl">
                            <h3 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight">
                                <SuisseIntlText weight="bold">Why A Home Buyer Survey Matters</SuisseIntlText>
                            </h3>
                            <p className="text-[#E4E4E7] text-base md:text-[17px] leading-relaxed mb-8 max-w-2xl">
                                <SuisseIntlText weight="regular">
                                    A property may look perfect on the surface, but hidden issues can lead to costly repairs later. Our survey identifies potential risks early, so there are no unpleasant surprises after purchase.
                                </SuisseIntlText>
                            </p>

                            <Link href="/book-consultation">
                                <button className="bg-primary text-[#0A0A0B] px-8 py-3 rounded-full flex items-center justify-center gap-2 group/btn transition-colors w-fit">
                                    <SuisseIntlText weight="bold" className="text-sm font-bold tracking-wide">
                                        GET STARTED
                                    </SuisseIntlText>
                                    <span className="text-xs transition-transform group-hover/btn:translate-x-1">▶</span>
                                </button>
                            </Link>
                        </div>
                    </div>
                </motion.div>
            </div>

        </section>
    );
}
