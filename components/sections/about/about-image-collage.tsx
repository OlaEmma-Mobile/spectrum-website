"use client";

import Image from "next/image";
import { FadeIn } from "@/components/animations/fade-in";
import { AnimatedNumber } from "@/components/animations/animated-number";

export function AboutImageCollage() {
  return (
    <div className="relative w-full max-w-[450px] lg:max-w-full mx-auto aspect-4/5 sm:aspect-[1.2/1] md:aspect-auto">
      <div className="grid grid-cols-12 h-full">
        {/* Left large image - worker */}
        <FadeIn
          delay={0.1}
          direction="right"
          className="col-span-9 md:col-span-8 relative z-10"
        >
          <div className="relative aspect-3/4 md:h-[450px] w-full overflow-hidden">
            <Image
              src="/images/surveyor-clipboard.png"
              alt="Construction surveyor in yellow safety vest and white hard hat inspecting site"
              fill
              className="object-cover"
            />
          </div>
        </FadeIn>
      </div>

      {/* Floating Years of Experience badge + smaller image */}
      <FadeIn
        delay={0.3}
        direction="up"
        className="absolute top-[35%] right-0 md:right-auto md:left-[35%] z-20 w-[60%] sm:w-[50%] md:w-[320px]"
      >
        <div className="flex items-center gap-2 sm:gap-3 bg-[#F3F3F3] py-2 px-3 sm:py-4 sm:px-5">
          <span className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary tracking-tight">
            <AnimatedNumber value={10} />+
          </span>
          <div className="pl-1 sm:pl-3">
            <p className="text-xs sm:text-base md:text-lg font-bold text-[#1F1F1F] leading-tight">
              Years Of
            </p>
            <p className="text-xs sm:text-base md:text-lg font-bold text-[#1F1F1F] leading-tight">
              Experience
            </p>
          </div>
        </div>
        <div className="relative mt-2 border-4 border-white w-full aspect-square md:aspect-auto md:h-[340px] overflow-hidden">
          <Image
            src="/images/pen.jpg"
            alt="Surveyor writing notes on a clipboard at construction site"
            fill
            className="w-full h-full object-cover"
          />
        </div>
      </FadeIn>

      {/* Bottom Award Badge */}
      <FadeIn
        delay={0.5}
        direction="up"
        className="absolute md:bottom-[-80px] bottom-[35px] z-30 bg-black min-w-[140px] sm:min-w-[250px]"
      >
        <div className="flex items-center gap-2 sm:gap-3 bg-accent text-accent-foreground px-3 py-2 sm:px-4 sm:py-3.5">
          <div className="flex-shrink-0">
            <div className="w-8 h-8 sm:h-12 aspect-square">
              <Image
                src="/icons/award.svg"
                alt="Award"
                width={20}
                height={20}
                className="w-full"
              />
            </div>
          </div>
          <p className="text-[10px] sm:text-sm md:text-base font-bold leading-snug max-w-[120px] sm:max-w-[160px]">
            Experienced Property Surveyors
          </p>
        </div>
      </FadeIn>
    </div>
  );
}
