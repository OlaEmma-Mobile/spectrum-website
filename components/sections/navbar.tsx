
"use client"


import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import { MdPhoneInTalk } from 'react-icons/md';
import { AiOutlineCaretRight } from "react-icons/ai";
import { SuisseIntlText } from "../fonts";
import { ServicesDropdown } from "./navigation/services-dropdown";
import { ChevronDown } from "lucide-react";


export function Navbar() {
    const pathname = usePathname()
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false)


    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20)
            if (window.scrollY > 500 && isMenuOpen) {
                setIsMenuOpen(false)
            }
        }

        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [isMenuOpen])

    const isHomeBuyers = pathname === '/home-buyers'
    const isTransparent = isHomeBuyers && !isScrolled

    return (
        <>
            <div className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isTransparent ? 'md:bg-transparent' : 'md:bg-white/90'} bg-[#F1F4F8]`}>

                {/* Main Navbar */}
                <nav className={`backdrop-blur-md  px-4 md:py-6 py-4 lg:px-8 conatiner mx-auto`}>

                    <span className="absolute bottom-0 left-0 h-[2px] w-full bg-linear-to-r from-transparent via-primary/40 to-transparent"></span>
                    <div className="flex items-center justify-between mx-auto container">
                        <div className="flex items-center-safe space-x-6">
                            {/* Logo */}
                            <Link href={'/'} className="flex items-center">
                                <Image 
                                    src={isTransparent ? '/images/logo-alt.png' : '/images/logo.png'} 
                                    alt="logo" 
                                    width={100} 
                                    height={50} 
                                    className="object-cover" 
                                />
                            </Link>

                            {/* Desktop Navigation */}
                            <div className="hidden lg:flex items-center space-x-2">
                                {[
                                    { name: 'About us', href: '/about-us' },
                                    { name: 'Services', href: '/services' },
                                    { name: 'Case Studies', href: '/case-studies' },
                                    { name: 'Home Buyers', href: '/home-buyers' },
                                    { name: 'EPC', href: '/epc' },
                                    { name: 'Contact us', href: '/contact-us' },
                                ].map(({ name, href }) => (
                                    name === 'Services' ? (
                                        <div key={name} className="relative group/services">
                                            <Link href={href} className={`hover:bg-[#FFFFFF12] text-sm py-1.5 px-3 flex items-center gap-1 rounded-[8px] transition-all duration-300`}>
                                                <SuisseIntlText weight="medium" className={`${isTransparent ? 'text-white' : 'text-black'} text-sm`}>
                                                    {name}
                                                </SuisseIntlText>
                                                <ChevronDown className={`w-4 h-4 ${isTransparent ? 'text-white' : 'text-black'} transition-transform duration-300 group-hover/services:rotate-180`} />
                                            </Link>
                                            <div className="absolute top-full left-80 -translate-x-1/2 pt-4 opacity-0 invisible group-hover/services:opacity-100 group-hover/services:visible transition-all duration-300">
                                                <ServicesDropdown />
                                            </div>
                                        </div>
                                    ) : (
                                        <Link key={name} href={href} className="hover:bg-[#FFFFFF12] text-sm py-1.5 px-3 rounded-[8px] transition-all duration-300">
                                            <SuisseIntlText weight="medium" className={`${isTransparent ? 'text-white' : 'text-black'} text-sm`}>
                                                {name}
                                            </SuisseIntlText>
                                        </Link>
                                    )
                                ))}
                            </div>
                        </div>

                        {/* Desktop Get Started Button */}
                        <div className="hidden lg:flex gap-4 items-center">
                            <Link href={'/contact-us'} className="bg-[#FFFFFF14] px-3.5 py-2.5 rounded-[12px] flex gap-2 items-center justify-center border border-transparent hover:border-white/20 transition-all">
                                <SuisseIntlText weight="bold" className={`${isTransparent ? 'text-white' : 'text-black'} font-medium text-sm`}>
                                    Schedule a meeting
                                </SuisseIntlText>
                                <MdPhoneInTalk className={`w-4 h-4 ${isTransparent ? 'text-white' : 'text-black'}`} />
                            </Link>

                            <Link href="/contact-us" className="text-[#070B10] bg-primary px-3.5 py-2.5 rounded-[12px] flex gap-2 items-center justify-center">
                                <SuisseIntlText weight="medium" className='font-medium text-sm'>
                                    Get in touch
                                </SuisseIntlText>
                                <AiOutlineCaretRight className="w-4 h-4 text-[#070B10]" />
                            </Link>
                        </div>

                        {/* Mobile Hamburger Menu */}
                        <div className="flex items-center gap-4 lg:hidden">
                            <button
                                onClick={toggleMenu}
                                className="lg:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1 focus:outline-none"
                                aria-label="Toggle menu"
                            >
                                <span
                                    className={`block w-5 h-px bg-black transition-all duration-300 ease-in-out ${isMenuOpen ? "rotate-45 translate-y-2" : ""
                                        }`}
                                />
                                <span
                                    className={`block w-5 h-px bg-black transition-all duration-300 ease-in-out ${isMenuOpen ? "opacity-0" : ""
                                        }`}
                                />
                                <span
                                    className={`block w-5 h-px bg-black transition-all duration-300 ease-in-out ${isMenuOpen ? "opacity-0" : ""
                                        }`}
                                />
                            </button>
                        </div>
                    </div>
                </nav>
            </div>


            {/* Mobile Menu Overlay */}
            <div
                className={`lg:hidden fixed inset-0 bg-no-repeat bg-top-right bg-cover bg-white backdrop-blur-2xl  z-50 transition-transform duration-300 ease-in-out ${isMenuOpen ? "translate-y-0" : "translate-y-full"
                    }`}>
                <span className="absolute bottom-0 left-0 h-[2px] w-full bg-linear-to-r from-transparent via-primary to-transparent"></span>
                <div className="flex flex-col h-full">
                    {/* Mobile Header with Close Button */}
                    <div className="flex items-center justify-between px-4 bg-[#F1F4F8] py-4 space-x-2">
                        <Link href={'/'} className="flex items-center">
                            <Image src={'/images/logo.png'} alt="logo" width={100} height={100} className="object-cover" />
                        </Link>

                        <div className="flex items-center gap-4">
                            <button
                                onClick={toggleMenu}
                                className="flex items-center justify-center w-10 h-10 focus:outline-none"
                                aria-label="Close menu"
                            >
                                <svg className="w-7 h-7 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                    </div>

                    {/* Mobile Navigation Links */}
                    <div className="flex flex-col items-center space-y-8 px-4">

                        <div className="flex flex-col items-left w-full py-4 space-y-1.5 justify-center ">
                            {[
                                { name: 'About us', href: '/about-us' },
                                { name: 'Services', href: '/services' },
                                { name: 'Case Studies', href: '/case-studies' },
                                { name: 'Home Buyers', href: '/home-buyers' },
                                { name: 'EPC', href: '/epc' },
                                { name: 'Contact us', href: '/contact-us' },
                            ].map(({ name, href }) => {
                                if (name === 'Services') {
                                    return (
                                        <div key={name} className="w-full flex flex-col items-start overflow-hidden">
                                            <button
                                                onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                                                className="w-full text-left flex items-center justify-between hover:bg-[#FFFFFF12] focus:bg-[#FFFFFF12] text-sm py-1.5 px-3 rounded-[8px] transition-all duration-300"
                                            >
                                                <SuisseIntlText weight="medium" className="text-black text-sm">
                                                    {name}
                                                </SuisseIntlText>
                                                <ChevronDown className={`w-4 h-4 text-black transition-transform duration-300 ${isMobileServicesOpen ? 'rotate-180' : ''}`} />
                                            </button>
                                            <div className={`flex flex-col pl-6 space-y-2 mt-2 transition-all duration-300 ${isMobileServicesOpen ? 'max-h-[800px] opacity-100 mb-2' : 'max-h-0 opacity-0'}`}>
                                                {[
                                                    { title: "Building Surveys & Inspections", href: "/services?tab=0" },
                                                    { title: "Defects Analysis & Maintenance", href: "/services?tab=1" },
                                                    { title: "Design & Project Management", href: "/services?tab=2" },
                                                    { title: "Dilapidations & Lease Advice", href: "/services?tab=3" },
                                                    { title: "Party Wall & Neighbouring Matters", href: "/services?tab=4" },
                                                    { title: "Refurbishment & Conservation", href: "/services?tab=5" },
                                                    { title: "Health & Safety / Compliance", href: "/services?tab=6" },
                                                    { title: "Insurance", href: "/services?tab=7" },
                                                    { title: "Stock Condition Surveys", href: "/services?tab=8" }
                                                ].map((service) => (
                                                    <Link
                                                        key={service.title}
                                                        href={service.href}
                                                        onClick={toggleMenu}
                                                        className="text-sm text-gray-600 hover:text-primary-variant py-1.5 transition-colors"
                                                    >
                                                        <SuisseIntlText weight="regular">
                                                            {service.title}
                                                        </SuisseIntlText>
                                                    </Link>
                                                ))}
                                            </div>
                                        </div>
                                    )
                                }

                                return (
                                    <Link key={name} onClick={toggleMenu} href={href} className="w-full hover:bg-[#FFFFFF12] focus:bg-[#FFFFFF12] text-sm py-1.5 px-3 rounded-[8px] transition-all duration-300">
                                        <SuisseIntlText weight="medium" className="text-black text-sm">
                                            {name}
                                        </SuisseIntlText>
                                    </Link>
                                )
                            })}
                        </div>

                        {/* Mobile Get Started Button */}
                        <div className="flex flex-col gap-4 w-full items-center">
                            <Link
                                href={'/contact-us'}
                                onClick={() => setIsMenuOpen(false)}
                                className="text-[] bg-[#FFFFFF14] px-3.5 py-2.5 rounded-[12px] flex gap-2 items-center justify-center">
                                <SuisseIntlText weight="bold" className='text-black font-medium text-sm'>
                                    Schedule a meeting
                                </SuisseIntlText>
                                <MdPhoneInTalk className="w-4 h-4 text-black" />
                            </Link>

                            <Link href="/contact-us" onClick={() => setIsMenuOpen(false)} className="w-full text-[#070B10] bg-primary px-3.5 py-2.5 rounded-[12px] flex gap-2 items-center justify-center">
                                <SuisseIntlText weight="medium" className='text-black font-medium text-sm'>
                                    Get in touch
                                </SuisseIntlText>
                                <AiOutlineCaretRight className="w-4 h-4 text-[#070B10]" />
                            </Link>
                        </div>

                    </div>
                </div>
            </div>

        </>
    )
}
