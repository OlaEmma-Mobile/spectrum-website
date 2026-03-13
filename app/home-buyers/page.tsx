import { DelightText, SuisseIntlText } from "@/components/fonts";
import { HomeBuyerInfoSection } from "@/components/sections/about/home-buyer-info-section";
import { DesignedForHomeBuyersSection } from "@/components/sections/about/designed-for-home-buyers";
import { HeroSection2 } from "@/components/sections/hero/hero-section-2";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function HomeBuyers() {
  return (
    <div className="min-h-screen bg-white font-sans">
      <HeroSection2
        // title="Buy with Confidence, Not Uncertainty"
        title={
          <DelightText
            weight="bold"
            className="font-bold md:text-left text-center text-3xl lg:text-[50px] md:text-[2.5rem] text-[#FFFF] mb-5 md:leading-[50px] leading-[35px] letter-spacing-[-1%]"
          >
            Buy with Confidence, Not Uncertainty
          </DelightText>
        }
        image="/images/home-buyer-hero.png"
        heroBottom="/images/hero-bottom-2.png"
        description={
          <div className="mt-8 flex flex-wrap items-center md:justify-start justify-center gap-4 md:gap-6">
            <p className="text-base md:text-lg text- max-w-[320px] font-suisse-intl-semibold text-white">
              We are regulated by the{" "}
              <span className="text-primary-variant font-suisse-intl-semibold">
                Royal Institute of Chartered Surveyors
              </span>
            </p>
            <Image
              src="/images/rics-logo-alt.png"
              alt="RICS Logo"
              width={120}
              height={120}
              className="w-38 h-12"
            />
          </div>
        }
        body="Buying a home is one of the biggest investments you’ll ever make. Our Home Buyer Survey gives you a clear understanding of the property’s condition, helping you make informed decisions before you commit."
        footer={
          <div className="grid md:grid-cols-2 md:gap-8 gap-4 w-full md:max-w-[350px] ">
            <Link
              href="/contact-us"
              className="bg-primary px-3.5 py-2.5 rounded-[12px] flex gap-2 items-center justify-center"
            >
              <SuisseIntlText
                weight="bold"
                className="text-[#070B10] font-medium text-sm"
              >
                Book a Survey
              </SuisseIntlText>
              <ArrowRight className="w-4 h-4 text-[#070B10]" />
            </Link>
          </div>
        }
      />
      <HomeBuyerInfoSection />
      <DesignedForHomeBuyersSection />
    </div>
  );
}
