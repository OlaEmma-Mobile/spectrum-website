import { ReactNode } from "react";
import { SuisseIntlText } from "@/components/fonts";
import { Button } from "@/components/ui/Button";

export type FaqItem = {
    id: string;
    title: string;
    content: ReactNode;
};

export type SurveyData = {
    slug: string;
    hero: {
        titleLine1: ReactNode;
        titleHighlight: ReactNode;
        description: ReactNode;
    };
    whatIs: {
        heading: ReactNode;
        description: ReactNode;
    };
    whatsIncluded: {
        inclusions: string[];
    };
    faq: {
        faqs: FaqItem[];
    };
};

export const surveysData: Record<string, SurveyData> = {
    "level-2": {
        slug: "level-2",
        hero: {
            titleLine1: (
                <>
                    Clarity, Confidence and Peace<br className="hidden md:block" />
                    of Mind —{" "}
                </>
            ),
            titleHighlight: "All in One Report",
            description: "Whether you're buying your first home or adding to your property portfolio, our Level 2 (Homebuyer Survey) gives you a clear, accurate picture of the property's condition—before you commit. With expert insight and actionable advice, we help you make smart, informed decisions without the guesswork."
        },
        whatIs: {
            heading: "What Is a Level 2 (Homebuyer Survey)?",
            description: "A Level 2 survey is a comprehensive internal and external inspection of the entire property—including outbuildings, gardens, and driveways. Every element is assessed using a clear traffic light rating system:"
        },
        whatsIncluded: {
            inclusions: [
                "Internal and external inspection of the building.",
                "Assessment of construction, condition, and any visible defects.",
                "Identification of issues such as damp, structural movement, and outdated services.",
                "Condition ratings on all key elements.",
                "Optional property valuation.",
                "Post-survey call with the inspecting surveyor to walk you through the findings."
            ]
        },
        faq: {
            faqs: [
                {
                    id: "who-is-it-for",
                    title: "Who is it For?",
                    content: (
                        <div className="pt-4 pb-2">
                            <p className="text-[#646A7A] mb-4 text-[17px]">
                                <SuisseIntlText weight="regular">Level 2 surveys are best suited to:</SuisseIntlText>
                            </p>
                            <ul className="flex flex-col gap-2.5 mb-8">
                                <li className="flex items-start gap-3">
                                    <div className="w-[5px] h-[5px] rounded-full bg-[#646A7A] mt-2 shrink-0" />
                                    <span className="text-[#646A7A] text-[17px]">
                                        <SuisseIntlText weight="regular">Modern or traditionally built houses and flats</SuisseIntlText>
                                    </span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="w-[5px] h-[5px] rounded-full bg-[#646A7A] mt-2 shrink-0" />
                                    <span className="text-[#646A7A] text-[17px]">
                                        <SuisseIntlText weight="regular">Properties in reasonable condition</SuisseIntlText>
                                    </span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="w-[5px] h-[5px] rounded-full bg-[#646A7A] mt-2 shrink-0" />
                                    <span className="text-[#646A7A] text-[17px]">
                                        <SuisseIntlText weight="regular">Homes that haven't been significantly extended, altered, or neglected</SuisseIntlText>
                                    </span>
                                </li>
                            </ul>
                            <Button className="bg-[#CAE366] hover:bg-[#B7CE5A] text-[#0A0A0B] font-semibold h-11 px-6 rounded-full shadow-none">
                                <SuisseIntlText weight="medium">Contact us</SuisseIntlText>
                            </Button>
                        </div>
                    )
                },
                {
                    id: "how-does-it-help",
                    title: "How Does it Help?",
                    content: (
                        <div className="pt-4 pb-2 text-[#646A7A] text-[17px]">
                            <SuisseIntlText weight="regular">
                                A Level 2 survey gives you professional insight into the true condition of the property. It helps you uncover hidden defects before committing to the purchase, potentially saving you thousands in unexpected repair costs and empowering you to negotiate a better purchase price.
                            </SuisseIntlText>
                        </div>
                    )
                },
                {
                    id: "what-to-expect",
                    title: "What to Expect",
                    content: (
                        <div className="pt-4 pb-2 text-[#646A7A] text-[17px]">
                            <SuisseIntlText weight="regular">
                                You'll receive a clear, easy-to-read report using a simple 'traffic light' ratings system. We highlight urgent repairs, provide maintenance advice, and can optionally include an independent property valuation to ensure you are paying a fair market price.
                            </SuisseIntlText>
                        </div>
                    )
                }
            ]
        }
    },
    "level-3": {
        slug: "level-3",
        hero: {
            titleLine1: (
                <>
                    For Complete Peace of Mind on<br className="hidden md:block" />
                </>
            ),
            titleHighlight: "Complex or Older Properties",
            description: "When you need a deep dive into a property’s condition—especially one that’s older, larger, or extensively altered—our Level 3 (Building Survey) delivers the full picture. Designed for buyers who need more detail, it covers everything from structure to services, with tailored insights and professional advice."
        },
        whatIs: {
            heading: "What Is a Level 3 (Building Survey)?",
            description: "A Level 3 survey is the most detailed inspection we offer. It includes a full internal and external assessment of the property, along with outbuildings, driveways, and gardens. Not only does it identify defects, but it also provides a diagnosis and recommends any necessary remedial work.\n\nLike our Level 2 survey, it uses a clear traffic light system:"
        },
        whatsIncluded: {
            inclusions: [
                "Full internal and external inspection",
                "Diagnosis of any defects and suggested remedial action",
                "Traffic light condition ratings",
                "Assessment of structural movement, damp, dated services, and more",
                "Optional valuation (unlike most Level 3 surveys)",
                "Post-survey call to discuss findings with your surveyor",
                "Supporting images and clear, jargon-free language"
            ]
        },
        faq: {
            faqs: [
                {
                    id: "who-should-get-level-3",
                    title: "Who Should Get a Level 3 Survey?",
                    content: (
                        <div className="pt-4 pb-2">
                            <p className="text-[#646A7A] mb-4 text-[17px]">
                                <SuisseIntlText weight="regular">This survey is ideal for properties that are:</SuisseIntlText>
                            </p>
                            <ul className="flex flex-col gap-2.5 mb-8">
                                <li className="flex items-start gap-3">
                                    <div className="w-[5px] h-[5px] rounded-full bg-[#646A7A] mt-2 shrink-0" />
                                    <span className="text-[#646A7A] text-[17px]">
                                        <SuisseIntlText weight="regular">Pre-1900 or listed</SuisseIntlText>
                                    </span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="w-[5px] h-[5px] rounded-full bg-[#646A7A] mt-2 shrink-0" />
                                    <span className="text-[#646A7A] text-[17px]">
                                        <SuisseIntlText weight="regular">Heavily extended or structurally complex</SuisseIntlText>
                                    </span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="w-[5px] h-[5px] rounded-full bg-[#646A7A] mt-2 shrink-0" />
                                    <span className="text-[#646A7A] text-[17px]">
                                        <SuisseIntlText weight="regular">In poor condition or in need of refurbishment</SuisseIntlText>
                                    </span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="w-[5px] h-[5px] rounded-full bg-[#646A7A] mt-2 shrink-0" />
                                    <span className="text-[#646A7A] text-[17px]">
                                        <SuisseIntlText weight="regular">Large in size with multiple levels or unusual layouts</SuisseIntlText>
                                    </span>
                                </li>
                            </ul>
                            <Button className="bg-[#CAE366] hover:bg-[#B7CE5A] text-[#0A0A0B] font-semibold h-11 px-6 rounded-full shadow-none">
                                <SuisseIntlText weight="medium">Contact us</SuisseIntlText>
                            </Button>
                        </div>
                    )
                },
                {
                    id: "what-to-expect-level-3",
                    title: "What to Expect",
                    content: (
                        <div className="pt-4 pb-2 text-[#646A7A] text-[17px]">
                            <SuisseIntlText weight="regular">
                                You'll receive a comprehensive, detailed report with extensive supporting images and clear, jargon-free language. The report not only identifies defects but also provides a diagnosis and suggests necessary remedial actions to help you understand exactly what you are buying.
                            </SuisseIntlText>
                        </div>
                    )
                },
                {
                    id: "who-should-get-level-3",
                    title: "Who Should Get a Level 3 Survey?",
                    content: (
                        <div className="pt-4 pb-2 text-[#646A7A] text-[17px]">
                            <SuisseIntlText weight="regular">
                                You'll receive a comprehensive, detailed report with extensive supporting images and clear, jargon-free language. The report not only identifies defects but also provides a diagnosis and suggests necessary remedial actions to help you understand exactly what you are buying.
                            </SuisseIntlText>
                        </div>
                    )
                }
            ]
        }
    }
};
