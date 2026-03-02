"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { SuisseIntlText } from "@/components/fonts";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
    return (
        <div className="min-h-[80vh] flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute inset-0 pointer-events-none z-0">
                <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-linear-to-br from-[#E0FAEB] to-transparent opacity-60 blur-3xl" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[60%] rounded-full bg-linear-to-tl from-[#F0FFF0] to-transparent opacity-60 blur-3xl" />
            </div>

            <motion.div
                className="z-10 text-center flex flex-col items-center mt-10 md:mt-20"
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                {/* 404 Number Graphic */}
                <div className="relative mb-6 md:mb-2 flex items-center justify-center">
                    <h1
                        className="text-[140px] md:text-[200px] lg:text-[240px] font-bold text-transparent tracking-tighter leading-none select-none"
                        style={{ WebkitTextStroke: "3px #E5E5E5" }}
                    >
                        404
                    </h1>

                    {/* Floating 'Oops' Badge */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        <motion.div
                            className="bg-[#9DC32A] text-white px-6 py-2 md:px-8 md:py-3 rounded-full font-medium text-lg md:text-xl shadow-lg border-4 border-white"
                            initial={{ opacity: 0, rotate: 0, scale: 0.8 }}
                            animate={{ opacity: 1, rotate: -8, scale: 1 }}
                            transition={{ delay: 0.4, type: "spring", bounce: 0.6 }}
                        >
                            <SuisseIntlText weight="semibold">Oops!</SuisseIntlText>
                        </motion.div>
                    </div>
                </div>

                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0A0A0B] mb-2 md:mb-4 tracking-tight">
                    <SuisseIntlText weight="bold">Page not found</SuisseIntlText>
                </h2>

                <p className="text-[#646A7A] text-base md:text-lg max-w-lg mx-auto mb-10 leading-relaxed px-4">
                    <SuisseIntlText weight="regular">
                        The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
                    </SuisseIntlText>
                </p>

                <Link href="/">
                    <Button className="bg-[#0A0A0B] hover:bg-neutral-800 text-white font-medium tracking-wide h-12 md:h-14 px-8 md:px-10 rounded-full flex items-center gap-3 transition-colors shadow-none text-[15px] md:text-base group">
                        <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                        <SuisseIntlText weight="medium">Back to homepage</SuisseIntlText>
                    </Button>
                </Link>
            </motion.div>
        </div>
    );
}
