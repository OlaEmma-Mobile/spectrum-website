import { DelightText, SuisseIntlText } from "@/components/fonts";
import { Button } from "@/components/ui/Button";
import Image from "next/image";
import Link from "next/link";
import { LuPhoneIncoming } from "react-icons/lu";
import { FadeIn } from "@/components/animations/fade-in";

export function Footer() {
  return (
    <footer className="bg-white relative overflow-hidden pb-0">
      <div className="pointer-events-none absolute -top-32 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />
      <div className="relative z-10 container mx-auto md:px-8 px-4 py-16 pb-0">
        {/* Footer links grid */}
        <FadeIn
          delay={0.2}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
        >
          {/* Services */}
          <div>
            <DelightText
              weight="bold"
              className="font-semibold text-[#000106] mb-4"
            >
              Services
            </DelightText>
            <ul className="space-y-4">
              <li className="font-suisse-intl-regular">
                <Link href="/services" className="text-[#71717B] font-medium">
                  Building Surveys & Inspections
                </Link>
              </li>
              <li className="font-suisse-intl-regular">
                <Link href="/services" className="text-[#71717B] font-medium">
                  Defects Analysis & Maintenance
                </Link>
              </li>
              <li className="font-suisse-intl-regular">
                <Link href="/services" className="text-[#71717B] font-medium">
                  Design & Project Management
                </Link>
              </li>
              <li className="font-suisse-intl-regular">
                <Link href="/services" className="text-[#71717B] font-medium">
                  Dilapidations & Lease Advice
                </Link>
              </li>
              <li className="font-suisse-intl-regular">
                <Link href="/services" className="text-[#71717B] font-medium">
                  Party Wall & Neighbouring Matters
                </Link>
              </li>
              <li className="font-suisse-intl-regular">
                <Link
                  href="/services?tab=8"
                  className="text-[#71717B] font-medium"
                >
                  Stock Condition Surveys
                </Link>
              </li>
              <li className="font-suisse-intl-regular">
                <Link href="/epc" className="text-[#71717B] font-medium">
                  EPC
                </Link>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div className="font-suisse-intl-regular">
            <DelightText
              weight="bold"
              className="font-semibold text-[#000106] mb-4"
            >
              Company
            </DelightText>
            <ul className="space-y-4">
              <li className="font-suisse-intl-regular">
                <Link href="/about-us" className="text-[#71717B] font-medium">
                  About Us
                </Link>
              </li>
              <li className="font-suisse-intl-regular">
                <Link
                  href="/case-studies"
                  className="text-[#71717B] font-medium"
                >
                  Case Studies
                </Link>
              </li>
              <li className="font-suisse-intl-regular">
                <Link
                  href="/home-buyers"
                  className="text-[#71717B] font-medium"
                >
                  Home Buyers
                </Link>
              </li>
              <li className="font-suisse-intl-regular">
                <Link href="/contact-us" className="text-[#71717B] font-medium">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <SuisseIntlText
              weight="semibold"
              className="font-semibold text-[#000106] mb-4"
            >
              Legal
            </SuisseIntlText>
            <ul className="space-y-4">
              <li className="font-suisse-intl-regular">
                <Link href="/contact-us" className="text-[#71717B] font-medium">
                  Terms
                </Link>
              </li>
              <li className="font-suisse-intl-regular">
                <Link href="/contact-us" className="text-[#71717B] font-medium">
                  Privacy Policy
                </Link>
              </li>
              <li className="font-suisse-intl-regular">
                <Link href="/contact-us" className="text-[#71717B] font-medium">
                  Refund Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Us */}
          <div className="md:col-span-1 col-span-2">
            <DelightText
              weight="bold"
              className="font-semibold text-[#000106] mb-4"
            >
              Contact Us
            </DelightText>
            <div className="space-y-4">
              <div>
                <Link
                  href="mailto:info@spectrumpservices.co.uk"
                  className="text-primary border-b border-primary"
                >
                  <SuisseIntlText weight="medium" className="font-medium mb-1">
                    info@spectrumpservices.co.uk
                  </SuisseIntlText>
                </Link>
              </div>
              <div>
                <DelightText
                  weight="bold"
                  className="text-[#000106] font-semibold text-base mb-1"
                >
                  Website
                </DelightText>
                <Link
                  href="https://www.spectrumpservices.co.uk"
                  className="text-[#71717bb9] text-sm"
                >
                  www.spectrumpservices.co.uk
                </Link>
              </div>
              <div>
                <DelightText
                  weight="bold"
                  className="text-[#000106] font-semibold text-base mb-1"
                >
                  Address
                </DelightText>
                <SuisseIntlText
                  weight="regular"
                  className="text-[#71717bb9] text-sm"
                >
                  United Kingdom
                </SuisseIntlText>
              </div>
              <div>
                <DelightText
                  weight="medium"
                  className="text-[#000106] font-semibold mb-1"
                >
                  Telephone
                </DelightText>
                <SuisseIntlText
                  weight="regular"
                  className="text-[#71717bb9] font-normal text-sm"
                >
                  +44 7946274462
                </SuisseIntlText>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* Bottom section */}
        <FadeIn
          delay={0.3}
          className="md:flex md:h-[50px] justify-between items-center"
        >
          <div className="flex flex-col md:flex-row md:items-end md:gap-16 gap-8 mb-8">
            {/* Talk to us */}
            <div>
              <DelightText
                weight="bold"
                className="font-semibold text-[#000106] mb-2"
              >
                Talk to us
              </DelightText>
              <Link
                href={"/contact-us"}
                className="bg-primary md:w-fit text-sm w-full text-black px-6 py-2.5 rounded-[12px] flex items-center justify-center gap-2"
              >
                <SuisseIntlText
                  weight="semibold"
                  className="flex items-center space-x-3"
                >
                  Schedule a meeting
                </SuisseIntlText>
                <LuPhoneIncoming className="w-4 h-4" />
              </Link>
            </div>
            <div className="logo">
              <Image
                src={"/images/rics-logo.png"}
                alt="logo"
                width={100}
                height={70}
                className="w-[300px] h-[70px] mx-auto object-cover"
              />
            </div>
          </div>

          <div className="flex flex-row justify-center items-center gap-4">
            <Link
              href="https://www.spectrumpservices.co.uk"
              target="_blank"
              rel="noreferrer"
              className="cursor-pointer bg-black rounded p-3"
            >
              <svg
                className="w-5 h-5 hover:opacity-85 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </Link>
            <Link
              href="https://www.spectrumpservices.co.uk"
              target="_blank"
              rel="noreferrer"
              className="cursor-pointer bg-black rounded p-3"
            >
              <svg
                className="w-5 h-5 hover:opacity-85 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
              </svg>
            </Link>
            <Link
              href="https://www.spectrumpservices.co.uk"
              target="_blank"
              rel="noreferrer"
              className="cursor-pointer bg-black rounded p-3"
            >
              <svg
                className="w-5 h-5 hover:opacity-85 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </Link>
            <Link
              href="https://www.spectrumpservices.co.uk"
              target="_blank"
              rel="noreferrer"
              className="cursor-pointer bg-black rounded p-3"
            >
              <svg
                className="w-5 h-5 hover:opacity-85 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </Link>
          </div>
        </FadeIn>
      </div>
      <div className="w-full h-[350px] flex flex-col items-center justify-center">
        <Image
          src={"/images/fotter-image.png"}
          alt="logo"
          width={500}
          height={100}
          className="w-full h-[350px]- object-cover object-top opacity-30 absolute"
        />
        <DelightText
          weight="black"
          className="bg-linear-to-b from-[#1F1F1F]/10 to-transparent bg-clip-text text-transparent text-7xl font-black select-none md:scale-[300%] scale-[150%] pointer-events-none"
        >
          SPECTRUM
        </DelightText>
      </div>
    </footer>
  );
}
