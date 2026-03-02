"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SuisseIntlText } from "@/components/fonts";
import { FaUserCircle, FaRegCalendarAlt } from "react-icons/fa";

export interface CaseStudy {
    no: string;
    title: string;
    description: string;
    image: string;
    author: string;
    date: string;
    content?: string[];
}

interface CaseStudyCardProps {
    item: CaseStudy;
    onClick: () => void;
}

export function CaseStudyCard({ item, onClick }: CaseStudyCardProps) {
    return (
        <div
            className="relative group w-full h-[540px] md:h-[600px] flex flex-col justify-end cursor-pointer"
            onClick={onClick}
        >
            {/* Background Image */}
            <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
            />

            {/* Dark Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

            {/* Top Right Label */}
            <div className="absolute top-0 right-0 p-5 md:p-6 z-10">
                <div className="bg-[#0A0A0B] border border-transparent text-[#CAE366] px-3 py-1.5 font-suisse-intl-semibold text-[13px] tracking-wide shadow-2xl">
                    {item.no}
                </div>
            </div>

            {/* Content Box */}
            <div className="relative z-10 mx-5 mb-5 md:mx-6 md:mb-6 bg-[#0E0E10] border border-white/5 p-6 flex flex-col gap-4 transition-transform duration-500 transform group-hover:-translate-y-2">
                <h3 className="text-[22px] leading-tight font-semibold text-white">
                    <SuisseIntlText weight="bold">{item.title}</SuisseIntlText>
                </h3>

                <p className="text-[#A1A1AA] text-[15px] leading-snug">
                    <SuisseIntlText weight="regular">{item.description}</SuisseIntlText>
                </p>

                <div className="flex flex-wrap items-center gap-3 text-xs text-white/50 pt-2 pb-1">
                    <div className="flex items-center gap-1.5">
                        <FaUserCircle className="text-white w-3 h-3" />
                        <span>by <span className="text-[#CAE366] font-medium">{item.author}</span></span>
                    </div>
                    <div className="w-[3px] h-[3px] rounded-full bg-white/30" />
                    <div className="flex items-center gap-1.5">
                        <FaRegCalendarAlt className="text-white w-[11px] h-[11px]" />
                        <span>{item.date}</span>
                    </div>
                </div>

                <div className="w-full bg-[#CAE366] hover:bg-[#b8d14d] transition-colors text-[#0A0A0B] py-[14px] flex items-center justify-center gap-2 mt-2 group/btn">
                    <SuisseIntlText weight="bold" className="text-sm">Read more</SuisseIntlText>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                </div>
            </div>
        </div>
    );
}
