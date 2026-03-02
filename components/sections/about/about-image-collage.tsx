"use client";

import Image from "next/image"
import { Award } from "lucide-react"
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/animations/fade-in"
import { AnimatedNumber } from "@/components/animations/animated-number"

export function AboutImageCollage() {
    return (
        <div className="relative w-full">
            <div className="grid grid-cols-12 grid-rows-[auto_auto]">
                {/* Left large image - worker */}
                <FadeIn delay={0.1} direction="right" className="col-span-8 row-span-2 relative z-10">
                    <div className="relative h-[400px] w-full overflow-hidden">
                        <Image
                            src="/images/surveyor-clipboard.png"
                            alt="Construction surveyor in yellow safety vest and white hard hat inspecting site"
                            fill
                            className="object-cover"
                        />
                    </div>
                </FadeIn>

            </div>
            <FadeIn delay={0.3} direction="up" className="col-span-5 absolute top-40 md:left-50 left-30 z-10">
                <div className="flex items-center gap-3 bg-[#F3F3F3] py-4 px-5 lg">
                    <span className="text-4xl md:text-5xl font-bold text-primary tracking-tight">
                        <AnimatedNumber value={10} />+
                    </span>
                    <div className="pl-3">
                        <p className="text-base md:text-lg font-bold text-[#1F1F1F] leading-tight">
                            Years Of
                        </p>
                        <p className="text-base md:text-lg font-bold text-[#1F1F1F] leading-tight">
                            Experience
                        </p>
                    </div>
                </div>
                <div className="relative mt-2 border-4 border-white w-[200px] h-[220px] md:w-[300px] md:h-[320px] overflow-hidden xl">
                    <Image
                        src="/images/pen.jpg"
                        alt="Surveyor writing notes on a clipboard at construction site"
                        fill
                        className="object-cover"
                    />
                </div>
            </FadeIn>
            <FadeIn delay={0.5} direction="up" className="relative max-w-fit bottom-0 bg-black left-0 z-30 translate-y-4 xl">
                <div className="flex items-center gap-3 bg-accent text-accent-foreground px-4 py-3.5">
                    <div className="flex-shrink-0 mt-0.5">
                        <div className="w-12 h-12">
                            <Image
                                src="/icons/award.svg"
                                alt="Award"
                                width={20}
                                height={20}
                                className="w-full"
                            />
                        </div>
                    </div>
                    <p className="text-sm md:text-base font-bold leading-snug max-w-[160px]">
                        2024 - Award Winning For The Best Surveyor
                    </p>
                </div>
            </FadeIn>

        </div>
    )
}
