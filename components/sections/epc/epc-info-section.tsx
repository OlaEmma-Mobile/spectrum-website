"use client";

import { motion } from "framer-motion";
import { SuisseIntlText } from "@/components/fonts";
import { ImageCollage } from "@/components/ui/image-collage";

export function EpcInfoSection() {
    return (
        <section className="w-full bg-white py-16 md:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
            <div className="container max-w-[1200px] mx-auto">
                <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">

                    {/* Left: Image Collage */}
                    <div className="w-full lg:w-1/2">
                        <ImageCollage
                            topImage={{ src: "/images/houses.png", alt: "UK Houses" }}
                            bottomImage={{ src: "/images/pen.jpg", alt: "Assessor filling out clipboard" }}
                            experienceBadge={{
                                number: "10+",
                                text: <>Years Of<br />Experience</>
                            }}
                            awardBadge={{
                                iconSrc: "/icons/award.svg",
                                text: <>2024 - Award<br />Winning For The<br />Best EPC</>
                            }}
                        />
                    </div>

                    {/* Right: Content Text */}
                    <div className="w-full lg:w-1/2 flex flex-col gap-10">
                        {/* Block 1 */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <h3 className="text-[22px] md:text-xl font-normal text-[#0A0A0B] mb-4">
                                <SuisseIntlText weight="semibold" className="font-instrumental">
                                    Who needs an EPC?
                                </SuisseIntlText>
                            </h3>
                            <p className="text-[#A3A8B2] text-base leading-[1.6]">
                                <SuisseIntlText weight="regular">
                                    EPCs are required when a property is sold, rented out or newly built. Homeowners must provide an EPC before marketing their property, landlords need one before letting to new tenants, and developers must supply one for new builds. In England, Wales and Northern Ireland an EPC is a legal requirement and failure to have a valid certificate can lead to fines.
                                </SuisseIntlText>
                            </p>
                        </motion.div>

                        {/* Block 2 */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                        >
                            <h3 className="text-[22px] md:text-xl font-normal text-[#0A0A0B] mb-4">
                                <SuisseIntlText weight="semibold" className="font-instrumetal">Why EPCs matter</SuisseIntlText>
                            </h3>
                            <p className="text-[#A3A8B2] text-base leading-[1.6]">
                                <SuisseIntlText weight="regular">
                                    Beyond legal compliance, an EPC helps landlords attract tenants, enables homeowners to identify cost-saving upgrades, and gives buyers transparency about expected energy bills. With rising energy prices, a strong EPC rating can make a property far more marketable and may unlock green mortgage options or government grants.
                                </SuisseIntlText>
                            </p>
                        </motion.div>

                        {/* Block 3 */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            <h3 className="text-[22px] md:text-xl font-normal text-[#0A0A0B] mb-4">
                                <SuisseIntlText weight="semibold" className="font-instrumetal">Validity</SuisseIntlText>
                            </h3>
                            <p className="text-[#A3A8B2] text-base leading-[1.6]">
                                <SuisseIntlText weight="regular">
                                    An EPC is valid for 10 years. If you make energy-efficiency improvements, such as new insulation, a modern boiler or double glazing, you may choose to update the EPC to reflect a higher rating.
                                </SuisseIntlText>
                            </p>
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
}
