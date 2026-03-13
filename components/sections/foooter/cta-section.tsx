import { DelightText, SuisseIntlText } from "@/components/fonts";
import Link from "next/link";
import Image from "next/image";
import { AiOutlineCaretRight } from "react-icons/ai";
import { FadeIn } from "@/components/animations/fade-in";
import { PhoneIncomingIcon } from "lucide-react";

export default function CtaSection() {
  return (
    <section className="bg-white relative overflow-hidden">
      <div className="container border-b mx-auto py-16 pb-0 relative px-4">
        <div className="grid lg:grid-cols-3 items-center gap-10">
          {/* Left Illustration */}
          <FadeIn
            delay={0.2}
            direction="right"
            className="hidden lg:flex justify-start"
          >
            <Image
              src="/sections/worker-left.png"
              alt="Surveyor illustration left"
              width={400}
              height={700}
              className="object-contain relative -right-30"
            />
          </FadeIn>

          {/* Center Content */}
          <FadeIn delay={0.1} className="text-center z-10">
            <DelightText
              weight="extrabold"
              className="text-2xl md:text-3xl font-bold leading-tight tracking-tighter text-black text-balance"
            >
              Let’s Get Your Building <br className="hidden sm:block" />
              <span className="text-primary">Project</span> Started Right
            </DelightText>

            <SuisseIntlText
              weight="medium"
              className="mt-6 text-muted text-sm sm:text-base mx-auto leading-normal"
            >
              Accurate data is the foundation of every successful project.
              Partner with a team you can trust for precise, efficient, and
              expert building surveying services.
            </SuisseIntlText>

            {/* Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact-us"
                className="text-[#070B10] bg-primary px-3.5 py-2.5 rounded-[12px] flex gap-2 items-center justify-center"
              >
                <SuisseIntlText weight="medium" className="font-medium text-sm">
                  Request Consultation
                </SuisseIntlText>
                <PhoneIncomingIcon className="w-4 h-4 text-[#070B10]" />
              </Link>
              {/* <Link href="#newsletter" className="text-[#070B10] bg-black px-3.5 py-2.5 rounded-[12px] flex gap-2 items-center justify-center">
                <SuisseIntlText
                  weight="medium"
                  className="font-medium text-sm text-white"
                >
                  Join Newsletter
                </SuisseIntlText>
              </Link> */}
            </div>
          </FadeIn>

          {/* Right Illustration */}
          <FadeIn
            delay={0.3}
            direction="left"
            className="hidden lg:flex justify-end"
          >
            <Image
              src="/sections/worker-right.png"
              alt="Surveyor illustration right"
              width={400}
              height={700}
              className="object-contain relative -left-30"
            />
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
