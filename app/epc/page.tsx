import { EpcHero } from "@/components/sections/hero/epc-hero";
import { WhatIsEpcSection } from "@/components/sections/epc/what-is-epc";
import { EpcInfoSection } from "@/components/sections/epc/epc-info-section";
import { EpcProcessSection } from "@/components/sections/epc/epc-process-section";
import { EpcQuoteSection } from "@/components/sections/epc/epc-quote-section";

export default function EpcPage() {
    return (
        <main className="min-h-screen bg-white">
            <EpcHero />
            <WhatIsEpcSection />
            <EpcInfoSection />
            <EpcProcessSection />
            <EpcQuoteSection />
        </main>
    );
}
