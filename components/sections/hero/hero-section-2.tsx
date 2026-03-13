'use client'


import { DelightText, SuisseIntlText } from "@/components/fonts";
import { motion } from "framer-motion";
import Image from "next/image";
import React, { ReactNode } from 'react';


interface HeroSection2Interface {
    image: string,
    heroBottom: string,
    title: string | ReactNode,
    body: string,
    description?: ReactNode,
    footer: ReactNode,
}

export const HeroSection2 = function ({
    image, heroBottom, title, body, description, footer
}: HeroSection2Interface) {

    return (
        <div className="">
            <header className="bg-[url(/images/hero-bg.png)] bg-no-repeat bg-cover bg-[#000106] pt-[8em]">
                <div className="container p-4 pb-0 md:px-6 mx-auto">
                    <div className="grid md:grid-cols-2 gap-10 items-center justify-between ">
                        <motion.div
                            initial={{ opacity: 0, scale: .95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            // whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.7, ease: "easeIn" }}
                            viewport={{ once: true }}
                            className="max-w-[550px] space-y-8"
                        >
                            <DelightText weight='bold' className="font-bold md:text-left text-center text-3xl lg:text-[50px] md:text-[2.5rem] text-[#FFFF] mb-5 md:leading-[50px] leading-[35px] letter-spacing-[-1%]">
                                {title}
                            </DelightText>
                            {description}
                            <SuisseIntlText weight='regular' className="md:text-left text-center font-medium md:text-lg text-sm text-[#707070] max-w-xl">
                                {body}
                            </SuisseIntlText>
                            {footer}

                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: .95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, ease: "easeIn" }}
                            viewport={{ once: true }}
                            className="">
                            <Image
                                src={image}
                                alt="Hero Image"
                                width={650}
                                height={650}
                                className="w-full"
                            />
                        </motion.div>
                    </div>
                </div>
            </header>
        </div>
    );
}