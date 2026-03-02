import { AboutImageCollage } from "@/components/sections/about/about-image-collage"
import { AboutContent } from "@/components/sections/about/about-content"
import { DelightText } from "@/components/fonts"
import { FadeIn } from "@/components/animations/fade-in"

export function AboutSection() {
    return (
        <section className="w-full mx-auto pb-24 md:pb-44">
            <div className="max-w-7xl mx-auto px-6 lg:px-10">
                {/* Header */}
                <FadeIn delay={0.1} className="flex flex-col items-center text-center px-4">
                    <span className="text-sm mb-4 font-mono font-semibold tracking-tight uppercase text-black">
                        About Spectrum
                    </span>
                    <DelightText weight="extrabold" className="text-2xl md:text-4xl font-bold lg:text-5xl leading-tight tracking-tighter text-black max-w-4xl text-balance">
                        Trusted Experts In{" "}
                        <span className="text-primary">Building Surveying</span>
                    </DelightText>
                    <p className="mt-5 max-w-2xl text-base font-instrumetal tracking-tighter leading-relaxed text-muted">
                        We deliver precise Building surveying and mapping services to help you plan, design,
                        and build with confidence. Powered by modern technology and field-proven expertise.
                    </p>
                </FadeIn>

                {/* Two-column layout */}
                <div className="mt-14 md:mt-20 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* Left: Image collage */}
                    <FadeIn delay={0.2} direction="right" className="flex justify-center lg:justify-start">
                        <AboutImageCollage />
                    </FadeIn>

                    {/* Right: Text content */}
                    <FadeIn delay={0.4} direction="left">
                        <AboutContent />
                    </FadeIn>
                </div>
            </div>
        </section>
    )
}
