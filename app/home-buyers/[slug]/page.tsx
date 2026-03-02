import { SurveyHero } from "@/components/sections/hero/survey-hero";
import { WhatIsLevel2Section } from "@/components/sections/survey/what-is-level-2";
import { WhatsIncludedSection } from "@/components/sections/survey/whats-included";
import { Level2FaqSection } from "@/components/sections/survey/level-2-faq";
import { surveysData } from "./data";
import { notFound } from "next/navigation";

export function generateStaticParams() {
    return [{ slug: "level-2" }, { slug: "level-3" }];
}

export default async function SurveyPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const data = surveysData[slug];

    if (!data) {
        return notFound();
    }

    return (
        <main className="min-h-screen bg-white">
            <SurveyHero
                titleLine1={data.hero.titleLine1}
                titleHighlight={data.hero.titleHighlight}
                description={data.hero.description}
            />
            <WhatIsLevel2Section
                heading={data.whatIs.heading}
                description={data.whatIs.description}
            />
            <WhatsIncludedSection inclusions={data.whatsIncluded.inclusions} />
            <Level2FaqSection faqs={data.faq.faqs} />
        </main>
    );
}
