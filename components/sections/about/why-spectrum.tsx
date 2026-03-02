'use client'

import Image from 'next/image'
import {
    CheckCircle,
    BarChart3,
    Shield,
    Clock,
    ThumbsUp,
    Handshake,
    MessageSquare,
    Layers,
    Award,
} from 'lucide-react'
import { DelightText, SuisseIntlText } from '@/components/fonts'
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/animations/fade-in'

export default function WhySpectrum() {
    return (
        <section className="w-full bg-white py-16">
            <div className="container px-4 mx-auto">

                {/* Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">

                    {/* LEFT COLUMN */}
                    <StaggerContainer delay={0.2} className="space-y-6">
                        {/* Header */}
                        <div className="mb-12">
                            <p className="text-sm -tracking-normal font-mono font-medium uppercase text-black mb-3">
                                Why Spectrum
                            </p>
                            <DelightText weight="bold" className="text-2xl text-black md:text-4xl font-bold leading-tight">
                                Mapping Building With{' '}
                                <span className="text-primary">Purpose</span> And{' '}
                                <span className="text-primary">Precision</span>
                            </DelightText>

                            <SuisseIntlText weight="regular" className="mt-6 text-muted-foreground text-base md:text-lg">
                                Start With Accurate Data. Build With Confidence. We deliver precise
                                building insights to support smart, successful development.
                            </SuisseIntlText>
                        </div>

                        <StaggerItem>
                            <FeatureCard
                                icon={<Award size={20} />}
                                title="RICS Certified"
                                highlight
                                description="At Spectrum, we have undergone the rigorous process of achieving RICS certification to provide our clients with the highest level of expertise they deserve."
                            />
                        </StaggerItem>

                        <StaggerItem>
                            <FeatureCard
                                icon={<Layers size={20} />}
                                title="Expertise Across the Entire Property Lifecycle"
                                description="We provide true end-to-end support, from surveys and analysis to project delivery and dispute resolution."
                            />
                        </StaggerItem>

                        <StaggerItem>
                            <FeatureCard
                                icon={<MessageSquare size={20} />}
                                title="Clear Honest and Practical Advice"
                                description="We communicate in a straightforward, jargon-free way so clients fully understand the issues and options available."
                            />
                        </StaggerItem>

                        <StaggerItem>
                            <FeatureCard
                                icon={<CheckCircle size={20} />}
                                title="Proven Technical Excellence"
                                description="Our surveyors bring extensive experience across commercial, residential and public-sector properties, supported by up-to-date industry knowledge and modern surveying tools."
                            />
                        </StaggerItem>
                    </StaggerContainer>

                    {/* CENTER IMAGE */}
                    <FadeIn delay={0.4} className="relative w-full h-full max-h-[450px] md:max-h-[785px] rounded-3xl overflow-hidden shadow-xl">
                        <Image
                            src="/images/camera.png"
                            alt="Survey equipment"
                            width={283}
                            height={785}
                            className="w-full h-full object-cover"
                            priority
                        />
                    </FadeIn>

                    {/* RIGHT COLUMN */}
                    <StaggerContainer delay={0.6} className="space-y-6">

                        <StaggerItem>
                            <FeatureCard
                                icon={<MessageSquare size={20} />}
                                title="Client-Focused Service"
                                description="We take time to understand your goals and challenges, tailoring our advice to suit your priorities, timescales and budget."
                            />
                        </StaggerItem>

                        <StaggerItem>
                            <FeatureCard
                                icon={<BarChart3 size={20} />}
                                title="Proven Track Record"
                                description="98% client retention rate, 250+ projects delivered annually, £150M+ in project value managed, 15+ years in business."
                            />
                        </StaggerItem>

                        <StaggerItem>
                            <FeatureCard
                                icon={<Shield size={20} />}
                                title="Strong Negotiation & Risk Management Skills"
                                description="From dilapidations to contract administration, we protect clients’ interests and achieve commercially favourable outcomes."
                            />
                        </StaggerItem>

                        <StaggerItem>
                            <FeatureCard
                                icon={<Clock size={20} />}
                                title="Efficient, Agile and Reliable"
                                description="We deliver work promptly, keep communication open, and provide regular updates, ensuring you’re never left guessing."
                            />
                        </StaggerItem>

                        <StaggerItem>
                            <FeatureCard
                                icon={<Handshake size={20} />}
                                title="Quality You Can Trust"
                                description="Every report, drawing, inspection and project is held to a high professional standard. Our reputation is built on accuracy, integrity and consistency."
                            />
                        </StaggerItem>

                        <StaggerItem>
                            <FeatureCard
                                icon={<ThumbsUp size={20} />}
                                title="A Partnership Approach"
                                description="We don’t just work for you, we work with you. Your success is our success."
                            />
                        </StaggerItem>
                    </StaggerContainer>

                </div>
            </div>
        </section>
    )
}

/* ------------------- Feature Card Component ------------------- */

function FeatureCard({
    icon,
    title,
    description,
    highlight = false,
}: {
    icon: React.ReactNode
    title: string
    description: string
    highlight?: boolean
}) {
    return (
        <div
            className={`flex gap-4 p-5 items-center rounded-2xl transition ${highlight
                ? 'bg-gray-100'
                : 'bg-transparent hover:bg-gray-50'
                }`}
        >
            <div className="min-w-[44px] h-[44px] border border-[#71717B1F] flex items-center justify-center rounded-xl bg-gray-100 text-gray-700">
                {icon}
            </div>

            <div>
                <SuisseIntlText weight="bold" className="text-base font-semibold text-black mb-1">
                    {title}
                </SuisseIntlText>
                <SuisseIntlText weight="regular" className="text-sm text-[#71717B] leading-tight">
                    {description}
                </SuisseIntlText>
            </div>
        </div>
    )
}