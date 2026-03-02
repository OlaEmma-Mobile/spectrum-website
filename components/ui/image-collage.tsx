"use client";

import { motion } from "framer-motion";
import { SuisseIntlText } from "@/components/fonts";
import Image from "next/image";
import React from "react";

export interface ImageCollageProps {
    topImage: {
        src: string;
        alt: string;
    };
    bottomImage: {
        src: string;
        alt: string;
    };
    experienceBadge: {
        number: string;
        text: React.ReactNode;
    };
    awardBadge: {
        iconSrc: string;
        text: React.ReactNode;
    };
}


export function ImageCollage({
    topImage,
    bottomImage,
    experienceBadge,
    awardBadge
}: ImageCollageProps) {
    return (
        <div className="w-full relative h-[600px] md:h-[700px]">
            {/* Top Image */}
            <motion.div
                className="absolute top-0 left-0 w-[70%] h-[55%] overflow-hidden select-none"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <Image
                    src={topImage.src}
                    alt={topImage.alt}
                    fill
                    className="object-cover"
                />
            </motion.div>

            {/* Bottom Image */}
            <motion.div
                className="absolute md:bottom-18 bottom-34 border-4 border-white right-0 w-[75%] h-[45%] overflow-hidden select-none z-10"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
            >
                <Image
                    src={bottomImage.src}
                    alt={bottomImage.alt}
                    fill
                    className="object-cover"
                />
            </motion.div>

            {/* Floating Badge: Years of Experience */}
            <motion.div
                className="absolute top-[18%] left-[27%] bg-[#F3F3F3] w-[260px] md:w-[400px] py-4 px-6 md:px-8 border border-white flex items-center gap-4 z-20"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
            >
                <span className="text-4xl font-bold text-transparent" style={{ WebkitTextStroke: "1px #9DC32A" }}>
                    {experienceBadge.number}
                </span>
                <div className="leading-tight text-[#0A0A0B] text-lg">
                    <SuisseIntlText weight="semibold">
                        {experienceBadge.text}
                    </SuisseIntlText>
                </div>
            </motion.div>

            {/* Floating Badge: Award */}
            <motion.div
                className="absolute bottom-[28%] left-0 bg-[#252525] py-4 px-6 md:px-8 flex items-center gap-4 z-20"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
            >
                <div className="w-12 h-12">
                    <Image
                        src={awardBadge.iconSrc}
                        alt="Award"
                        width={20}
                        height={20}
                        className="w-full"
                    />
                </div>
                <div className="leading-tight text-white text-[15px]">
                    <SuisseIntlText weight="medium">
                        {awardBadge.text}
                    </SuisseIntlText>
                </div>
            </motion.div>
        </div>
    );
}
