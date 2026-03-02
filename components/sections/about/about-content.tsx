import Link from "next/link"
import { ArrowRight, Phone } from "lucide-react"
import { SuisseIntlText } from "@/components/fonts"
import { Button } from "@/components/ui/Button"
import { AiOutlineCaretRight } from "react-icons/ai"
import { MdPhoneInTalk } from "react-icons/md"

export function AboutContent() {
    return (
        <div className="flex flex-col justify-center">
            <div className="space-y-6 text-sm md:text-lg leading-relaxed text-[#94969E]">
                <p className="font-instrumetal font-medium tracking-tighter">
                    At Spectrum, we are surveyors, consultants and project managers, proud of
                    all we do and ready to support you from one end of the spectrum to the
                    other.
                </p>
                <p className="font-instrumetal font-medium tracking-tighter">
                    We are a forward-thinking building surveying practice committed to
                    providing clear advice, expert technical guidance and high-quality project
                    delivery. With experience across residential, commercial and industrial
                    sectors, our team brings together deep industry knowledge, modern
                    technology and a client-focused approach.
                </p>
                <p className="font-instrumetal font-medium tracking-tighter">
                    Whether you are a homeowner, developer, investor, landlord, tenant, or
                    managing agent, Spectrum offers tailored solutions that protect your
                    assets, reduce risks and unlock long-term value. Our mission is simple: to
                    make property decisions easier, safer and more cost-effective for every
                    client.
                </p>
            </div>

            {/* Action buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-6">

                <Button className="text-[#070B10] bg-primary px-6 py-3 rounded-[12px] flex gap-2 items-center justify-center">
                    <SuisseIntlText weight="medium" className='font-medium text-black text-sm'>
                        Explore More
                    </SuisseIntlText>
                    <AiOutlineCaretRight className="w-4 h-4 text-black" />
                </Button>

                <Link href={'/book-consultation'} className="bg-[#FFFFFF14] px-3.5 py-2.5- rounded-[12px] flex gap-2 items-center justify-center">
                    <SuisseIntlText weight="bold" className='text-black font-medium text-sm'>
                        Get in touch
                    </SuisseIntlText>
                    <MdPhoneInTalk className="w-4 h-4 text-black" />
                </Link>
            </div>
        </div>
    )
}
