import Image from "next/image"
import { DelightText, SuisseIntlText } from "../fonts"
import { FadeIn } from "../animations/fade-in"


function DecorativeSquares({ className }: { className?: string }) {
    return (
        <div className={className} aria-hidden="true">
            <div className="relative w-16 h-16 md:w-20 md:h-20">
                <div className="absolute top-0 left-0 w-10 h-10 md:w-12 md:h-12 border-2 border-primary" />
                <div className="absolute bottom-0 right-0 w-10 h-10 md:w-12 md:h-12 bg-gray-200" />
            </div>
        </div>
    )
}

export function SpectrumHero() {
    return (
        <section className="relative w-full overflow-hidden pt-36 md:pt-48">
            {/* Content container */}
            <div className="relative mx-auto w-full max-w-[1400px] px-6 lg:px-10 z-10">
                {/* Decorative squares - left */}
                <DecorativeSquares className="absolute top-8 left-6 lg:left-10 z-10 hidden md:block" />

                {/* Decorative squares - right */}
                <DecorativeSquares className="absolute top-48 right-6 lg:right-10 z-10 hidden md:block" />

                {/* Hero text area */}
                <FadeIn delay={0.1} className="flex flex-col items-center pb-8 md:pb-12 text-center relative z-20">
                    <DelightText weight="extrabold" className="text-3xl md:text-5xl font-bold lg:text-6xl leading-tight tracking-tighter text-black max-w-4xl text-balance">
                        Accurate Property{" "}
                        <span className="text-primary">Surveys</span> You Can Rely On
                    </DelightText>
                    <SuisseIntlText weight="regular" className="mt-6 max-w-2xl text-base md:text-lg leading-relaxed text-muted">
                        Professional surveying services delivering clear insights, precise
                        measurements, and reliable reports for confident property decisions.
                    </SuisseIntlText>

                    {/* RICS regulation info */}
                    <div className="mt-8 flex flex-wrap items-center justify-center gap-4 md:gap-6">
                        <p className="text-sm md:text-base max-w-[250px] font-suisse-intl-medium text-black">
                            We are regulated by the{" "}
                            <span className="text-primary-variant font-suisse-intl-semibold">
                                Royal Institute of Chartered Surveyors
                            </span>
                        </p>
                        <Image src="/images/rics-logo.png" alt="RICS Logo" width={120} height={120} className="w-38 h-12" />
                    </div>
                </FadeIn>
            </div>

            {/* Hero image - full width */}
            <FadeIn delay={0.3} className="relative -top-36 md:-top-42 w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[550px] mt-8">
                <Image
                    src="/images/home-hero-bg.png"
                    alt="Construction workers at a building site with architectural blueprint overlay"
                    fill
                    className="object-cover"
                    priority
                />
            </FadeIn>
        </section>
    )
}
