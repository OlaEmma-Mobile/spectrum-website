"use client";

import { useState } from "react";
import { Minus, Plus } from "lucide-react";
import { DelightText } from "@/components/fonts";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/animations/fade-in";
import Link from "next/link";

const faqs = [
    {
        question: "What is the difference between a Level 2 and Level 3 survey?",
        answer:
            "A Level 2 survey, also known as a Homebuyer Survey, provides a mid-level overview of a property’s condition and highlights any major issues. A Level 3 survey, or Full Building Survey, is more detailed, offering an in-depth assessment of the structure and fabric of the property.",
    },
    {
        question: "How do I know which survey is right for my property?",
        answer:
            "The right survey depends on the property's age, condition, and your future plans. Older or heavily altered properties typically require a Level 3 survey, while modern homes may only need a Level 2 survey.",
    },
    {
        question: "How long does it take to receive my survey report?",
        answer:
            "Survey reports are typically delivered within 3–5 working days after the inspection, depending on the complexity of the property.",
    },
    {
        question: "Do you offer post-survey advice?",
        answer:
            "Yes. We provide follow-up consultations to discuss findings, clarify recommendations, and guide you on next steps.",
    },
];

export default function FaqSection() {
    const [activeIndex, setActiveIndex] = useState<number | null>(0);

    const toggle = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section className="bg-white relative py-16 px-4 sm:px-6 lg:px-20">
            <div className="max-w-5xl mx-auto relative z-1">
                <FadeIn delay={0.1}>
                    <DelightText weight="bold" className="text-3xl md:text-4xl font-bold text-black text-center leading-tight mb-2">
                        Your Questions. Answered.
                    </DelightText>
                </FadeIn>
                {/* Subtitle */}
                <FadeIn delay={0.2}>
                    <p className="text-center font-instrumetal text-muted mb-10 text-sm sm:text-base">
                        Answers to all your questions, quickly and clearly
                    </p>
                </FadeIn>

                {/* FAQ List */}
                <StaggerContainer delay={0.3} className="space-y-6">
                    {faqs.map((faq, index) => {
                        const isOpen = activeIndex === index;

                        return (
                            <StaggerItem
                                key={index}
                                className="bg-[#FAFAFA] rounded-2xl p-6 sm:p-8 transition-all duration-300"
                            >
                                <button
                                    onClick={() => toggle(index)}
                                    className="w-full flex justify-between items-start text-left"
                                >
                                    <h3 className="text-base sm:text-xl font-semibold text-black pr-4">
                                        {faq.question}
                                    </h3>

                                    <div className="flex-shrink-0 bg-gray-200 rounded-xl p-2">
                                        {isOpen ? (
                                            <Minus className="w-5 h-5 text-black" />
                                        ) : (
                                            <Plus className="w-5 h-5 text-black" />
                                        )}
                                    </div>
                                </button>

                                {/* Answer */}
                                <div
                                    className={`grid transition-all duration-300 ease-in-out ${isOpen
                                        ? "grid-rows-[1fr] opacity-100 mt-4"
                                        : "grid-rows-[0fr] opacity-0"
                                        }`}
                                >
                                    <div className="overflow-hidden">
                                        <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                                            {faq.answer}
                                        </p>
                                    </div>
                                </div>
                            </StaggerItem>
                        );
                    })}
                </StaggerContainer>

                <div className="border rounded-xl mt-16 borer-black p-4 flex gap-4">

                    <div className="flex-1 text-black">
                        <DelightText weight="bold" className="font-medium">
                            Still have a question in mind?
                        </DelightText>
                        <p className="text-sm text-[#5E5E5E]">
                            Contact us if you have any other questions.
                        </p>
                    </div>
                    <Link
                        href={"/contact-us"}
                        className="text-white bg-black rounded-full text-xs px-8 py-2 pt-3 h-[40px] font-instrumetal"
                    >
                        <span>Contact us</span>
                    </Link>
                </div>
            </div>

            <div className="absolute bottom-0 left-0 right-0 bg-[url('/images/faq-bg.png')] h-[250px] w-full bg-cover bg-center bg-no-repeat" />
        </section>
    );
}