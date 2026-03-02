"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SuisseIntlText } from "@/components/fonts";
import { Plus, Minus } from "lucide-react";
import { Button } from "@/components/ui/Button";

type FaqItem = {
    id: string;
    title: string;
    content: React.ReactNode;
};

interface FaqSectionProps {
    faqs: FaqItem[];
}

export function Level2FaqSection({ faqs }: FaqSectionProps) {
    const [openId, setOpenId] = useState<string>(faqs[0]?.id || "");

    return (
        <section className="w-full bg-white py-12 md:py-20 px-4 sm:px-6 lg:px-8">
            <div className="container max-w-4xl mx-auto flex flex-col gap-4">

                {faqs.map((faq, index) => {
                    const isOpen = openId === faq.id;

                    return (
                        <motion.div
                            key={faq.id}
                            className={`rounded-[24px] overflow-hidden transition-colors duration-300 ${isOpen ? "bg-[#F7F7F7]" : "bg-[#FBFBFB]"}`}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.1 * index }}
                        >
                            <button
                                onClick={() => setOpenId(isOpen ? "" : faq.id)}
                                className="w-full text-left px-6 py-6 md:px-8 md:py-8 flex items-center justify-between gap-4"
                            >
                                <h3 className="text-xl md:text-[22px] font-semibold text-[#0A0A0B]">
                                    <SuisseIntlText weight="medium">{faq.title}</SuisseIntlText>
                                </h3>

                                <div className="w-10 h-10 rounded-full bg-[#EDEDED] flex items-center justify-center shrink-0 transition-transform duration-300">
                                    {isOpen ? (
                                        <Minus className="w-5 h-5 text-[#0A0A0B]" />
                                    ) : (
                                        <Plus className="w-5 h-5 text-[#0A0A0B]" />
                                    )}
                                </div>
                            </button>

                            <AnimatePresence initial={false}>
                                {isOpen && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3, ease: "easeInOut" }}
                                    >
                                        <div className="px-6 pb-8 md:px-8">
                                            {faq.content}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    );
                })}

            </div>
        </section>
    );
}
