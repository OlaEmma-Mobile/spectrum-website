'use client'

import { motion } from "framer-motion";
import Image from "next/image";
import { ReactNode } from "react";
import { DelightText,} from '@/components/fonts';


interface HeroSectionInterface {
    image?: string;
    children?: ReactNode;
    title?: ReactNode;
    description?: ReactNode;
}

export const HeroSection = function ({
    image,
    children,
    title = "Why Choose Spectres Building Consulting?",
    description = ""
}: HeroSectionInterface) {

    return (
        <div className="">
            <header className="bg-white pb-8 pt-[8em]">
                <div className="container p-4 pb-0 md:px-6 mx-auto">
                    <div className="space-y-10 md:space-y-10 items-center justify-between ">
                        <motion.div
                            initial={{ opacity: 0, scale: .95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            // whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.7, ease: "easeIn" }}
                            viewport={{ once: true }}
                            className="mb-16 mx-auto space-y-8 flex flex-col items-center"
                        >
                            <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_1_10190)">
                                    <path d="M0 25.6C0 16.6392 0 12.1587 1.7439 8.73615C3.27787 5.72556 5.72556 3.27787 8.73615 1.7439C12.1587 0 16.6392 0 25.6 0H38.4C47.3608 0 51.8413 0 55.2638 1.7439C58.2744 3.27787 60.7221 5.72556 62.2561 8.73615C64 12.1587 64 16.6392 64 25.6V38.4C64 47.3608 64 51.8413 62.2561 55.2638C60.7221 58.2744 58.2744 60.7221 55.2638 62.2561C51.8413 64 47.3608 64 38.4 64H25.6C16.6392 64 12.1587 64 8.73615 62.2561C5.72556 60.7221 3.27787 58.2744 1.7439 55.2638C0 51.8413 0 47.3608 0 38.4V25.6Z" fill="url(#paint0_linear_1_10190)" />
                                    <g clipPath="url(#clip1_1_10190)">
                                        <path d="M32.0002 32C34.4975 32 36.7602 32.8267 38.4202 33.9827C39.9975 35.0827 41.3335 36.7173 41.3335 38.476C41.3335 39.4413 40.9215 40.2413 40.2722 40.836C39.6615 41.3973 38.8642 41.7613 38.0428 42.0093C36.4015 42.5067 34.2402 42.6667 32.0002 42.6667C29.7602 42.6667 27.5988 42.5067 25.9575 42.0093C25.1362 41.7613 24.3388 41.3973 23.7268 40.836C23.0802 40.2427 22.6668 39.4427 22.6668 38.4773C22.6668 36.7187 24.0028 35.084 25.5802 33.984C27.2402 32.8267 29.5028 32 32.0002 32ZM41.3335 33.3333C42.7255 33.3333 43.9895 33.7933 44.9242 34.444C45.7775 35.04 46.6668 36.0307 46.6668 37.2387C46.6668 37.928 46.3668 38.5 45.9202 38.9093C45.5122 39.284 45.0082 39.504 44.5482 39.6427C43.9215 39.832 43.1815 39.9293 42.4135 39.972C42.5762 39.512 42.6668 39.012 42.6668 38.476C42.6668 36.4293 41.3882 34.6907 39.9575 33.484C40.4093 33.384 40.8707 33.3334 41.3335 33.3333ZM22.6668 33.3333C23.1428 33.3333 23.6042 33.3867 24.0428 33.484C22.6135 34.6907 21.3335 36.4293 21.3335 38.476C21.3335 39.012 21.4242 39.512 21.5868 39.972C20.8188 39.9293 20.0802 39.832 19.4522 39.6427C18.9922 39.504 18.4882 39.284 18.0788 38.9093C17.844 38.6993 17.6562 38.442 17.5278 38.1543C17.3993 37.8666 17.3331 37.5551 17.3335 37.24C17.3335 36.0333 18.2215 35.0413 19.0762 34.4453C20.1332 33.7203 21.3851 33.3326 22.6668 33.3333ZM40.6668 25.3333C41.5509 25.3333 42.3987 25.6845 43.0239 26.3096C43.649 26.9348 44.0002 27.7826 44.0002 28.6667C44.0002 29.5507 43.649 30.3986 43.0239 31.0237C42.3987 31.6488 41.5509 32 40.6668 32C39.7828 32 38.9349 31.6488 38.3098 31.0237C37.6847 30.3986 37.3335 29.5507 37.3335 28.6667C37.3335 27.7826 37.6847 26.9348 38.3098 26.3096C38.9349 25.6845 39.7828 25.3333 40.6668 25.3333ZM23.3335 25.3333C24.2176 25.3333 25.0654 25.6845 25.6905 26.3096C26.3156 26.9348 26.6668 27.7826 26.6668 28.6667C26.6668 29.5507 26.3156 30.3986 25.6905 31.0237C25.0654 31.6488 24.2176 32 23.3335 32C22.4494 32 21.6016 31.6488 20.9765 31.0237C20.3514 30.3986 20.0002 29.5507 20.0002 28.6667C20.0002 27.7826 20.3514 26.9348 20.9765 26.3096C21.6016 25.6845 22.4494 25.3333 23.3335 25.3333ZM32.0002 20C33.4147 20 34.7712 20.5619 35.7714 21.5621C36.7716 22.5623 37.3335 23.9188 37.3335 25.3333C37.3335 26.7478 36.7716 28.1044 35.7714 29.1046C34.7712 30.1048 33.4147 30.6667 32.0002 30.6667C30.5857 30.6667 29.2291 30.1048 28.2289 29.1046C27.2287 28.1044 26.6668 26.7478 26.6668 25.3333C26.6668 23.9188 27.2287 22.5623 28.2289 21.5621C29.2291 20.5619 30.5857 20 32.0002 20Z" fill="white" />
                                    </g>
                                </g>
                                <defs>
                                    <linearGradient id="paint0_linear_1_10190" x1="32" y1="0" x2="32" y2="64" gradientUnits="userSpaceOnUse">
                                        <stop stopColor="#CAE366" />
                                        <stop offset="1" stopColor="#8AAA06" />
                                    </linearGradient>
                                    <clipPath id="clip0_1_10190">
                                        <rect width="64" height="64" rx="16" fill="white" />
                                    </clipPath>
                                    <clipPath id="clip1_1_10190">
                                        <rect width="32" height="32" fill="white" transform="translate(16 16)" />
                                    </clipPath>
                                </defs>
                            </svg>

                            <DelightText weight='bold' className="font-bold text-center text-3xl max-w-2xl lg:text-[50px] md:text-[2.5rem] text-black mb-5 md:leading-[50px] leading-[35px] letter-spacing-[-1%]">
                                {title}
                            </DelightText>
                            {description}
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
                        </motion.div>

                        {image && <motion.div
                            initial={{ opacity: 0, scale: .95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, ease: "easeIn" }}
                            viewport={{ once: true }}
                            className="">
                            <Image
                                src={image}
                                alt="Hero Image"
                                width={1200}
                                height={650}
                                className="w-full h-full object-cover"
                            />
                        </motion.div>}
                        {children && children}
                    </div>
                </div>
            </header>

        </div>
    );
}