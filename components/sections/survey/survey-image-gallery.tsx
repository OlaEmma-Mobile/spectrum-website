"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export function SurveyImageGallery() {
    // We create the 3 columns as structured components so we can duplicate them for the infinite marquee effect
    const columns = [
        // Column 1: Short Top, Tall Bottom
        (
            <div key="col1" className="flex flex-col gap-4 md:gap-6 lg:gap-8 w-[85vw] sm:w-[50vw] md:w-full shrink-0">
                <div className="relative w-full h-[350px] lg:h-[300px] rounded-2xl  overflow-hidden">
                    <Image
                        src="/sections/services/service1.jpg"
                        alt="Modern exterior"
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-700 pointer-events-none md:pointer-events-auto"
                    />
                </div>
                <div className="relative w-full h-[400px] lg:h-[450px] rounded-2xl  overflow-hidden">
                    <Image
                        src="/images/home-hero-bg.png"
                        alt="Traditional exterior"
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-700 pointer-events-none md:pointer-events-auto"
                    />
                </div>
            </div>
        ),
        // Column 2: Tall Top, Short Bottom
        (
            <div key="col2" className="flex flex-col gap-4 md:gap-6 lg:gap-8 w-[85vw] sm:w-[50vw] md:w-full shrink-0">
                <div className="relative w-full h-[350px] lg:h-[450px] rounded-2xl  overflow-hidden">
                    <Image
                        src="/sections/services/building.png"
                        alt="City building reflection"
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-700 pointer-events-none md:pointer-events-auto"
                    />
                </div>
                <div className="relative w-full h-[250px] lg:h-[300px] rounded-2xl  overflow-hidden">
                    <Image
                        src="/sections/services/service2.jpg"
                        alt="Kitchen interior"
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-700 pointer-events-none md:pointer-events-auto"
                    />
                </div>
            </div>
        ),
        // Column 3: Short Top, Tall Bottom
        (
            <div key="col3" className="flex flex-col gap-4 w-[85vw] sm:w-[50vw] md:w-full shrink-0">
                <div className="relative w-full h-[250px] lg:h-[300px] rounded-2xl  overflow-hidden">
                    <Image
                        src="/images/reach-bg.jpg"
                        alt="City above clouds"
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-700 pointer-events-none md:pointer-events-auto"
                    />
                </div>
                <div className="relative w-full h-[350px] lg:h-[450px] rounded-2xl  overflow-hidden">
                    <Image
                        src="/images/pen.jpg"
                        alt="Interior room"
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-700 pointer-events-none md:pointer-events-auto"
                    />
                </div>
            </div>
        )
    ];

    return (
        <section className="w-full bg-white py-16 md:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
            <div className="mx-auto">

                {/* Mobile Marquee */}
                <div className="md:hidden relative w-[100vw] left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]">
                    <motion.div
                        className="flex gap-4 w-max"
                        animate={{ x: ["0%", "-50%"] }}
                        transition={{
                            ease: "linear",
                            duration: 30, // Adjust speed here (higher = slower)
                            repeat: Infinity
                        }}
                    >
                        {/* Render original columns */}
                        {columns}
                        {/* Duplicate for infinite loop */}
                        {columns.map((col, i) => (
                            <div key={`dup-${i}`} className="contents">{col}</div>
                        ))}
                    </motion.div>
                </div>

                {/* Desktop Grid */}
                <div className="hidden md:grid md:grid-cols-3 gap-6 lg:gap-8">
                    {columns.map((col, index) => (
                        <motion.div
                            key={`desktop-${index}`}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.1 * (index + 1) }}
                        >
                            {col}
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}
